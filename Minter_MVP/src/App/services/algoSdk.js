import sdk from 'algosdk';

const token = {
    'X-API-Key': 'pOD5BAUCxq7InVPjo0sO01B0Vq4d7pD1ask5Ix43'
};
const port = '';

class AlgoSdk {

    client;
    network;
    networks = [
        {
            name: 'testnet',
            server: 'https://api.testnet.algoexplorer.io',
            label: 'Testnet',
            explorer: 'https://testnet.algoexplorer.io',
            algoSignerNet: 'TestNet'
        },
        {
            name: 'betanet',
            server: 'https://api.betanet.algoexplorer.io',
            label: 'Betanet',
            explorer: 'https://betanet.algoexplorer.io',
        },
        {
            name: 'mainnet',
            server: 'https://api.algoexplorer.io',
            label: 'Mainnet',
            explorer: 'https://algoexplorer.io',
            algoSignerNet: 'MainNet'
        }
    ];

    constructor() {
        this.selectNetwork('testnet');
    }

    generateAccount() {
        return sdk.generateAccount();
    }

    generateMnemonic() {
        const acc = this.generateAccount();
        return sdk.secretKeyToMnemonic(acc.sk);
    }
    selectNetwork(name) {
        const networks = this.getNetworks();
        networks.forEach((network) => {
            if (network.name === name) {
                this.network = network;
                this.setClient(network.server);
            }
        })
    }

    getExplorer() {
        const network = this.getCurrentNetwork();
        return this.network.explorer;
    }

    getAssetUrl(id) {
       return this.getExplorer() + '/asset/' + id;
    }

    getCurrentNetwork() {
        return this.network;
    }

    setClient(server) {
        this.client = new sdk.Algodv2(token, server, port);
    }

    getClient() {
        return this.client;
    }

    mnemonicToSecretKey(mnemonic) {
        return sdk.mnemonicToSecretKey(mnemonic);
    }

    async getAccountInformation(address) {
        return await this.getClient().accountInformation(address).do();
    }

    async getAssetInformation(assetID) {
        return  await this.getClient().assetInformation(assetID).do();
    }

    async getChangingParams() {
        let params = await this.getClient().getTransactionParams().do();

        const cp = {
            ...params,
            lastRound: params.firstRound + parseInt(1000)
        };

        return cp;
    }

    async waitForConfirmation(txId) {
        let status = (await this.getClient().status().do());
        let lastRound = status["last-round"];
        while (true) {
            const pendingInfo = await this.getClient().pendingTransactionInformation(txId).do();
            if (pendingInfo["confirmed-round"] !== null && pendingInfo["confirmed-round"] > 0) {
                //Got the completed Transaction
                break;
            }
            lastRound++;
            await this.getClient().statusAfterBlock(lastRound).do();
        }
    };

    async pendingTransactionInformation(txId) {
        const txDetails = await this.getClient().pendingTransactionInformation(txId).do();
        return txDetails;
    }

    async getChangingParamsUsingAlgoSigner(algoSignerNet) {
        const txParams = await AlgoSigner.algod({
            ledger: algoSignerNet,
            path: '/v2/transactions/params'
        });

        return txParams;
    }

    getAccountUrl(address) {
        return this.getExplorer() + '/address/' + address;
    }

    async createAssetUsingSdk(wallet, assetName, unitName, supply, assetURL, managerAddress, reserveAddress, freezeAddress, clawbackAddress, decimals, metadataHash) {
        let cp = await this.getChangingParams();
        let note = new Uint8Array(Buffer.from("algodesk", "base64"));
        let addr = wallet.address;
        let defaultFrozen = false;

        if (decimals == undefined || decimals == null || decimals == "") {
            decimals = 0;
        }
        if (!managerAddress) {
            managerAddress = undefined;
        }
        if (!reserveAddress) {
            reserveAddress = undefined;
        }
        if (!freezeAddress) {
            freezeAddress = undefined;
        }
        if (!clawbackAddress) {
            clawbackAddress = undefined;
        }

        let txn;

        if (metadataHash) {
            txn = sdk.makeAssetCreateTxn(addr, cp.fee, cp.firstRound, cp.lastRound, note,
                cp.genesisHash, cp.genesisID, supply, decimals, defaultFrozen, managerAddress, reserveAddress, freezeAddress, clawbackAddress,
                unitName, assetName, assetURL, metadataHash);
        } else {
            txn = sdk.makeAssetCreateTxn(addr, cp.fee, cp.firstRound, cp.lastRound, note,
                cp.genesisHash, cp.genesisID, supply, decimals, defaultFrozen, managerAddress, reserveAddress, freezeAddress, clawbackAddress,
                unitName, assetName, assetURL);
        }

        let rawSignedTxn = txn.signTxn(wallet.secretKey);

        let transaction = await this.getClient().sendRawTransaction(rawSignedTxn).do();
        return transaction;
    }

    async createAssetUsingAlgoSigner(wallet, assetName, unitName, supply, assetURL, managerAddress, reserveAddress, freezeAddress, clawbackAddress, decimals, metadataHash) {
        const network = this.getCurrentNetwork();
        let cp = await this.getChangingParamsUsingAlgoSigner(network.algoSignerNet);

        if (decimals == undefined || decimals == null || decimals == "") {
            decimals = 0;
        }

        if (decimals > 0) {
            supply = supply / (Math.pow(10, decimals));
        }

        const payload = {
            "from": wallet.address,
            "assetName": assetName,
            "assetUnitName": unitName,
            "assetTotal": supply,
            "assetDecimals": decimals,
            "assetClawback": clawbackAddress,
            "assetFreeze": freezeAddress,
            "assetManager": managerAddress,
            "assetReserve": reserveAddress,
            "assetURL": assetURL,
            "note": 'algodesk.io',
            "type": "acfg",
            "flatFee": cp['min-fee'],
            "fee": cp['min-fee'],
            "firstRound": cp['last-round'],
            "lastRound": cp['last-round'] + 1000,
            "genesisID": cp['genesis-id'],
            "genesisHash": cp['genesis-hash']
        };

        if (metadataHash) {
            payload.assetMetadataHash = metadataHash;
        }
        const rawSignedTxn = await AlgoSigner.sign(payload);
        let transaction = await AlgoSigner.send({
            ledger: network.algoSignerNet,
            tx: rawSignedTxn.blob
        });

        return transaction;
    }

    async createAsset(usingAlgoSigner, wallet, assetName, unitName, supply, assetURL, managerAddress, reserveAddress, freezeAddress, clawbackAddress, decimals, metadataHash) {
        if (usingAlgoSigner) {
            return this.createAssetUsingAlgoSigner(wallet, assetName, unitName, supply, assetURL, managerAddress, reserveAddress, freezeAddress, clawbackAddress, decimals, metadataHash);
        }

        return this.createAssetUsingSdk(wallet, assetName, unitName, supply, assetURL, managerAddress, reserveAddress, freezeAddress, clawbackAddress, decimals, metadataHash);
    }

    async modifyAssetUsingSdk(wallet, assetId, managerAddress, reserveAddress, freezeAddress, clawbackAddress) {
        let cp = await this.getChangingParams();

        let note = new Uint8Array(Buffer.from("algodesk", "base64"));
        let addr = wallet.address;
        let txn;
        const strictAddressChecking = false;

        txn = sdk.makeAssetConfigTxn(addr, cp.fee, cp.firstRound, cp.lastRound, note,
            cp.genesisHash, cp.genesisID, assetId, managerAddress, reserveAddress, freezeAddress, clawbackAddress, strictAddressChecking);

        let rawSignedTxn = txn.signTxn(wallet.secretKey);

        let transaction = await this.getClient().sendRawTransaction(rawSignedTxn, {'Content-Type': 'application/x-binary'}).do();
        return transaction;
    }

    async modifyAssetUsingAlgoSigner(wallet, assetId, managerAddress, reserveAddress, freezeAddress, clawbackAddress) {
        const network = this.getCurrentNetwork();
        let cp = await this.getChangingParamsUsingAlgoSigner(network.algoSignerNet);

        const payload = {
            "from": wallet.address,
            "assetIndex": assetId,
            "assetClawback": clawbackAddress,
            "assetFreeze": freezeAddress,
            "assetManager": managerAddress,
            "assetReserve": reserveAddress,
            "note": 'algodesk.io',
            "type": "acfg",
            "flatFee": cp['min-fee'],
            "fee": cp['min-fee'],
            "firstRound": cp['last-round'],
            "lastRound": cp['last-round'] + 1000,
            "genesisID": cp['genesis-id'],
            "genesisHash": cp['genesis-hash']
        };

        const rawSignedTxn = await AlgoSigner.sign(payload);
        let transaction = await AlgoSigner.send({
            ledger: network.algoSignerNet,
            tx: rawSignedTxn.blob
        });

        return transaction;
    }

    async modifyAsset(usingAlgoSigner, wallet, assetId, managerAddress, reserveAddress, freezeAddress, clawbackAddress) {
        if (!managerAddress) {
            managerAddress = undefined;
        }
        if (!reserveAddress) {
            reserveAddress = undefined;
        }
        if (!freezeAddress) {
            freezeAddress = undefined;
        }
        if (!clawbackAddress) {
            clawbackAddress = undefined;
        }

        if (usingAlgoSigner) {
            return this.modifyAssetUsingAlgoSigner(wallet, assetId, managerAddress, reserveAddress, freezeAddress, clawbackAddress);
        }

        return this.modifyAssetUsingSdk(wallet, assetId, managerAddress, reserveAddress, freezeAddress, clawbackAddress);
    }

    async pendingTransactionInformation(txId) {
        return await this.getClient().pendingTransactionInformation(txId).do();
    }

    async destroyAssetUsingSdk(wallet, assetId) {
        let cp = await this.getChangingParams();
        const addr = wallet.address;
        let note = new Uint8Array(Buffer.from("algodesk", "base64"));

        let txn = sdk.makeAssetDestroyTxn(addr, cp.fee,
            cp.firstRound, cp.lastRound, note, cp.genesisHash,
            cp.genesisID, assetId);

        let rawSignedTxn = txn.signTxn(wallet.secretKey);

        let transaction = await this.getClient().sendRawTransaction(rawSignedTxn, {'Content-Type': 'application/x-binary'}).do();
        return transaction;
    }

    async destroyAssetUsingAlgoSigner(wallet, assetId) {
        const network = this.getCurrentNetwork();
        let cp = await this.getChangingParamsUsingAlgoSigner(network.algoSignerNet);

        const payload = {
            from: wallet.address,
            "assetIndex": assetId,
            "note": 'algodesk.io',
            "type": "acfg",
            "flatFee": cp['min-fee'],
            "fee": cp['min-fee'],
            "firstRound": cp['last-round'],
            "lastRound": cp['last-round'] + 1000,
            "genesisID": cp['genesis-id'],
            "genesisHash": cp['genesis-hash']
        };

        const rawSignedTxn = await AlgoSigner.sign(payload);
        let transaction = await AlgoSigner.send({
            ledger: network.algoSignerNet,
            tx: rawSignedTxn.blob
        });

        return transaction;
    }

    async destroyAsset(usingAlgoSigner, wallet, assetId) {
        if (usingAlgoSigner) {
            return this.destroyAssetUsingAlgoSigner(wallet, assetId);
        }

        return this.destroyAssetUsingSdk(wallet, assetId);
    }

    async freezeAssetUsingSdk(wallet, assetId, freezeAddress, freezeState) {
        let cp = await this.getChangingParams();
        const addr = wallet.address;
        let note = new Uint8Array(Buffer.from("algodesk", "base64"));

        let txn = sdk.makeAssetFreezeTxn(addr, cp.fee,
            cp.firstRound, cp.lastRound, note, cp.genesisHash, cp.genesisID,
            assetId, freezeAddress, freezeState);

        let rawSignedTxn = txn.signTxn(wallet.secretKey);

        let transaction = await this.getClient().sendRawTransaction(rawSignedTxn, {'Content-Type': 'application/x-binary'}).do();
        return transaction;
    }

    async freezeAssetUsingAlgoSigner(wallet, assetId, freezeAddress, freezeState) {
        const network = this.getCurrentNetwork();
        let cp = await this.getChangingParamsUsingAlgoSigner(network.algoSignerNet);

        const payload = {
            from: wallet.address,
            type: 'afrz',
            assetIndex: assetId,
            freezeAccount: freezeAddress,
            freezeState: freezeState,
            "note": 'algodesk.io',
            "flatFee": cp['min-fee'],
            "fee": cp['min-fee'],
            "firstRound": cp['last-round'],
            "lastRound": cp['last-round'] + 1000,
            "genesisID": cp['genesis-id'],
            "genesisHash": cp['genesis-hash']
        };

        const rawSignedTxn = await AlgoSigner.sign(payload);
        let transaction = await AlgoSigner.send({
            ledger: network.algoSignerNet,
            tx: rawSignedTxn.blob
        });

        return transaction;
    }

    async freezeAsset(usingAlgoSigner, wallet, assetId, freezeAddress, freezeState) {
        if (!freezeState) {
            freezeState = false;
        }

        if (usingAlgoSigner) {
            return this.freezeAssetUsingAlgoSigner(wallet, assetId, freezeAddress, freezeState);
        }

        return this.freezeAssetUsingSdk(wallet, assetId, freezeAddress, freezeState);
    }

    async sendAssetsUsingSdk(wallet, assetId, recipient, amount) {
        let cp = await this.getChangingParams();

        let note = new Uint8Array(Buffer.from("algodesk", "base64"));
        let sender = wallet.address;
        const revocationTarget = undefined;
        const closeRemainderTo = undefined;

        const txn = sdk.makeAssetTransferTxn(sender, recipient,
            closeRemainderTo, revocationTarget,cp.fee, amount,
            cp.firstRound, cp.lastRound, note, cp.genesisHash, cp.genesisID, assetId);

        let rawSignedTxn = txn.signTxn(wallet.secretKey);

        let transaction = await this.getClient().sendRawTransaction(rawSignedTxn, {'Content-Type': 'application/x-binary'}).do();
        return transaction;
    }

    async sendAssetsUsingAlgoSigner(wallet, assetId, recipient, amount) {
        const network = this.getCurrentNetwork();
        let cp = await this.getChangingParamsUsingAlgoSigner(network.algoSignerNet);

        const payload = {
            from: wallet.address,
            type: 'axfer',
            assetIndex: assetId,
            amount: amount,
            to: recipient,
            "note": 'algodesk.io',
            "flatFee": cp['min-fee'],
            "fee": cp['min-fee'],
            "firstRound": cp['last-round'],
            "lastRound": cp['last-round'] + 1000,
            "genesisID": cp['genesis-id'],
            "genesisHash": cp['genesis-hash']
        };

        const rawSignedTxn = await AlgoSigner.sign(payload);
        let transaction = await AlgoSigner.send({
            ledger: network.algoSignerNet,
            tx: rawSignedTxn.blob
        });

        return transaction;
    }

    async sendAssets(usingAlgoSigner, wallet, assetId, recipient, amount) {
        if (usingAlgoSigner) {
            return this.sendAssetsUsingAlgoSigner(wallet, assetId, recipient, amount);
        }

        return this.sendAssetsUsingSdk(wallet, assetId, recipient, amount);
    }

    async revokeAssetsUsingSdk(wallet, assetId, revokeAddress, revokeReceiverAddress, revokeAmount) {
        let cp = await this.getChangingParams();

        let note = new Uint8Array(Buffer.from("algodesk", "base64"));
        let sender = wallet.address;
        const revocationTarget = revokeAddress;
        const closeRemainderTo = undefined;

        const txn = sdk.makeAssetTransferTxn(sender,
            revokeReceiverAddress, closeRemainderTo, revocationTarget,
            cp.fee, revokeAmount, cp.firstRound, cp.lastRound,
            note, cp.genesisHash, cp.genesisID, assetId);

        let rawSignedTxn = txn.signTxn(wallet.secretKey);

        let transaction = await this.getClient().sendRawTransaction(rawSignedTxn, {'Content-Type': 'application/x-binary'}).do();
        return transaction;
    }

    async revokeAssetsUsingAlgoSigner(wallet, assetId, revokeAddress, revokeReceiverAddress, revokeAmount) {
        const network = this.getCurrentNetwork();
        let cp = await this.getChangingParamsUsingAlgoSigner(network.algoSignerNet);

        const payload = {
            from: wallet.address,
            type: 'axfer',
            assetIndex: assetId,
            amount: revokeAmount,
            to: revokeReceiverAddress,
            assetRevocationTarget: revokeAddress,
            "note": 'algodesk.io',
            "flatFee": cp['min-fee'],
            "fee": cp['min-fee'],
            "firstRound": cp['last-round'],
            "lastRound": cp['last-round'] + 1000,
            "genesisID": cp['genesis-id'],
            "genesisHash": cp['genesis-hash']
        };

        const rawSignedTxn = await AlgoSigner.sign(payload);
        let transaction = await AlgoSigner.send({
            ledger: network.algoSignerNet,
            tx: rawSignedTxn.blob
        });

        return transaction;
    }

    async revokeAssets(usingAlgoSigner, wallet, assetId, revokeAddress, revokeReceiverAddress, revokeAmount) {
        if (usingAlgoSigner) {
            return this.revokeAssetsUsingAlgoSigner(wallet, assetId, revokeAddress, revokeReceiverAddress, revokeAmount);
        }

        return this.revokeAssetsUsingSdk(wallet, assetId, revokeAddress, revokeReceiverAddress, revokeAmount);
    }

    isValidAddress(addr) {
        return sdk.isValidAddress(addr);
    }

    getNetworks() {
        return this.networks;
    }
}

export default new AlgoSdk();
