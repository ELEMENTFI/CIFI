/* global AlgoSigner */
import firebase from "firebase";
import fireDb from "./firebase";
import React, { useState,useEffect,useCallback } from "react";
const AlgoTransfer=()=>{
const[getAlgos,setgetAlgos]=useState([]);
const[getAlgoss,setgetAlgoss]=useState([]);
const getalgo = async() =>{
    let req = [];
    let req2 = [];//imagerefexplore
    firebase.database().ref("algorandDataprice").on("value", (data) => {
      if (data) {
        data.forEach((d) => {
          //console.log("print",d.val());
          req.push(d.val())          
        });        
      }
    });
    setgetAlgos(req)
    getAlgos.map((a)=>{
      Object.keys(a).map((b)=>{
        req2.push({
    addtxid:a[b].txnId,
    addassetid:a[b].algoid,
    addalgoname:a[b].algoname,
    addalgosymbol:a[b].algosymbol,
    addalgocreator:a[b].algocreator,
    addmnemonic:a[b].createmnemonic,
    addprice:a[b].price,
    addkeyId:a[b].keyId,
    addsold:a[b].status,
    addImgs:a[b].imageurl
  })              
      })
    })    
    setgetAlgoss(req2)    
  }
  const TransferAsset=async(a)=>{
    //alert("transferasset");
    // console.log("buytx",a.addtxid);
    // console.log("buytx",a.addalgocreator);
    // console.log("buytx",a.addprice);
    let merge=a.addprice+'000000'
      const algosdk = require('algosdk');
      //var account1_mnemonic=a.addmnemonic;
        let signedTx;
        let tx;
        let txParams;
        AlgoSigner.connect()
      .then((d) => {
        console.log("conn",d);
        let accounts;
        AlgoSigner.accounts({
          ledger: 'TestNet'
        })
        .then((d) => {
          accounts = d;
          console.log("accounts",accounts[0]);
          AlgoSigner.algod({
            ledger: 'TestNet',
            path: '/v2/transactions/params'
          })
          .then((d) => {
            txParams = d;
            console.log("txparms",d);
            let getac=accounts[0].address;
            //console.log("stringcon",getac);
            //console.log("check",a.addalgocreator);
            AlgoSigner.sign({
              from:getac,
              to: a.addalgocreator,
              amount: +merge,
              note: undefined,
              type: 'pay',
              fee: txParams['min-fee'],
              firstRound: txParams['last-round'],
              lastRound: txParams['last-round'] + 1000,
              genesisID: txParams['genesis-id'],
              genesisHash: txParams['genesis-hash'],
              flatFee: true
            })
            .then((d) => {
              signedTx = d;
              console.log("signedtx",d);
              AlgoSigner.send({
                ledger: 'TestNet',
                tx: signedTx.blob
              })
              .then((d) => {
                tx = d;
                console.log("tx",d);
                //cut start
        var account1_mnemonic=a.addmnemonic;
        //var account1_mnemonic = "tackle dove endorse style mind boring hidden fiction power wrap diesel more cruel ecology few field they chase oil deliver useless paddle nation abandon domain";
        //var account2_mnemonic = "tackle dove endorse style mind boring hidden fiction power wrap diesel more cruel ecology few field they chase oil deliver useless paddle nation abandon domain";
        //var account3_mnemonic = "tackle dove endorse style mind boring hidden fiction power wrap diesel more cruel ecology few field they chase oil deliver useless paddle nation abandon domain";
        var account3_mnemonic = "runway genuine lazy assist ticket junior pilot flush rocket swallow ripple risk alien mobile chat recall run quiz cause weekend range april vicious about spoon";
        var recoveredAccount1 = algosdk.mnemonicToSecretKey(account1_mnemonic);
        //var recoveredAccount2 = algosdk.mnemonicToSecretKey(account2_mnemonic);
        var recoveredAccount3 = algosdk.mnemonicToSecretKey(account3_mnemonic);
        //alert(arr[0]);
        // var recoveredAccount1 = arr[0];
        // var recoveredAccount2 = arr[0];
        // var recoveredAccount3 = arr[0];
        console.log(recoveredAccount3.addr);
        console.log(recoveredAccount1.addr);
        const baseServer = "https://testnet-algorand.api.purestake.io/ps2";
        const port = "";
        //B3SU4KcVKi94Jap2VXkK83xx38bsv95K5UZm2lab
        const token = {
        
            'X-API-key' : 'SVsJKi8vBM1RwK1HEuwhU20hYmwFJelk8bagKPin',
        }
        let algodclient = new algosdk.Algodv2(token, baseServer, port);  
        console.log("algodclient",algodclient)
      // Function used to wait for a tx confirmation
      const waitForConfirmation = async function (algodclien, txId) {        
          //console.log("working return 133",txId)
        //console.log("workingalgo"+algodclien);
          let response = await algodclien.status().do();
          //console.log("response",response);
          let lastround = response["last-round"];
          //console.log("lastround",lastround);
          //while (true) {
            //console.log("inside while loop");
              //const pendingInfo = await algodclient.pendingTransactionInformation(txId).do();
              //console.log("insidewhileloop",pendingInfo);
              // if (pendingInfo["confirmed-round"] !== null && pendingInfo["confirmed-round"] > 0) {
              //     //Got the completed Transaction
              //     console.log("Transaction " + txId + " confirmed in round " + pendingInfo["confirmed-round"]);
              //     break;
              // }
              //lastround++;
              // await algodclien.statusAfterBlock(lastround).do();
              //console.log("finish while loop");
          //}

          //console.log("outside while loop");
      };
      
      // Function used to print created asset for account and assetid
      const printCreatedAsset = async function (algodclient, account, assetid) {
          // note: if you have an indexer instance available it is easier to just use this
          //     let accountInfo = await indexerClient.searchAccounts()
          //    .assetID(assetIndex).do();
          // and in the loop below use this to extract the asset for a particular account
          // accountInfo['accounts'][idx][account]);
          let accountInfo = await algodclient.accountInformation(account).do();
          for (let idx = 0; idx < accountInfo['created-assets'].length; idx++) {
              let scrutinizedAsset = accountInfo['created-assets'][idx];
              if (scrutinizedAsset['index'] === assetid) {
                  console.log("AssetID = " + scrutinizedAsset['index']);
                  let myparms = JSON.stringify(scrutinizedAsset['params'], undefined, 2);
                  console.log("parms = " + myparms);
                  break;
              }
          }
      };
      // Function used to print asset holding for account and assetid
      const printAssetHolding = async function (algodclient, account, assetid) {
          // note: if you have an indexer instance available it is easier to just use this
          //     let accountInfo = await indexerClient.searchAccounts()
          //    .assetID(assetIndex).do();
          // and in the loop below use this to extract the asset for a particular account
          // accountInfo['accounts'][idx][account]);
          let accountInfo = await algodclient.accountInformation(account).do();
          for (let idx = 0; idx < accountInfo['assets'].length; idx++) {
              let scrutinizedAsset = accountInfo['assets'][idx];
              if (scrutinizedAsset['asset-id'] === assetid) {
                  let myassetholding = JSON.stringify(scrutinizedAsset, undefined, 2);
                  console.log("assetholdinginfo = " + myassetholding);
                  break;
              }
          }
      };
      
      (async () => {      
        let params = await algodclient.getTransactionParams().do();
          //comment out the next two lines to use suggested fee
          params.fee = 1000;
          params.flatFee = true;
          //console.log(params);              
          let note = undefined;          
          let assetID = null;
          //console.log("working198");
          //console.log("beforealgoclient",algodclient);
          //console.log(a.addtxid);
          await waitForConfirmation(algodclient,a.addtxid);
          //console.log("working return 209")
          // Get the new asset's information from the creator account
          //let ptx = await algodclient.pendingTransactionInformation(a.addtxid).do();
          //console.log("working return 212",ptx["asset-index"]);
          //assetID = ptx["asset-index"];
          assetID=a.addassetid;        
        await printCreatedAsset(algodclient, recoveredAccount1.addr, assetID);
        await printAssetHolding(algodclient, recoveredAccount1.addr, assetID);      
        //console.log("working178")        
        //this below is transfer usefull function      
        // Opting in to an Asset:
        // Opting in to transact with the new asset
        // Allow accounts that want recieve the new asset
        // Have to opt in. To do this they send an asset transfer
        // of the new asset to themseleves 
        // In this example we are setting up the 3rd recovered account to 
        // receive the new asset      
        // First update changing transaction parameters
        // We will account for changing transaction parameters
        // before every transaction in this example
        //cmd now
      
          params = await algodclient.getTransactionParams().do();
          //comment out the next two lines to use suggested fee
          params.fee = 1000;
          params.flatFee = true;      
          let sender = recoveredAccount3.addr;
          let recipient = sender;
          // We set revocationTarget to undefined as 
          // This is not a clawback operation
          let revocationTarget = undefined;
          // CloseReaminerTo is set to undefined as
          // we are not closing out an asset
          let closeRemainderTo = undefined;
          // We are sending 0 assets
          let amount = 0;
      //let note=undefined;
      //assetID='15940921';      
      //console.log("working211")      
          // signing and sending "txn" allows sender to begin accepting asset specified by creator and index
          let opttxn = algosdk.makeAssetTransferTxnWithSuggestedParams(sender, recipient, closeRemainderTo, revocationTarget,
               amount, note, assetID, params);
      
          // Must be signed by the account wishing to opt in to the asset    
          let rawSignedTxn = opttxn.signTxn(recoveredAccount3.sk);
          let opttx = (await algodclient.sendRawTransaction(rawSignedTxn).do());
          console.log("Transaction : " + opttx.txId);
          // wait for transaction to be confirmed
          await waitForConfirmation(algodclient, opttx.txId);
      
          //You should now see the new asset listed in the account information
          console.log("Account3" + recoveredAccount3.addr);
          await printAssetHolding(algodclient, recoveredAccount3.addr, assetID);
      
      //console.log("working 227")        
      //     // Transfer New Asset:
      //     // Now that account3 can recieve the new tokens 
      //     // we can tranfer tokens in from the creator
      //     // to account3
      //     // First update changing transaction parameters
      //     // We will account for changing transaction parameters
      //     // before every transaction in this example
      
      //cmd now
      
          params = await algodclient.getTransactionParams().do();
          //comment out the next two lines to use suggested fee
          params.fee = 1000;
          params.flatFee = true;
      
          sender = recoveredAccount1.addr;
          recipient = recoveredAccount3.addr;
          revocationTarget = undefined;
          closeRemainderTo = undefined;
          //Amount of the asset to transfer
          amount = 1000;
      
          // signing and sending "txn" will send "amount" assets from "sender" to "recipient"
          let xtxn = algosdk.makeAssetTransferTxnWithSuggestedParams(sender, recipient, closeRemainderTo, revocationTarget,
               amount, note, assetID, params);
          // Must be signed by the account sending the asset  
          rawSignedTxn = xtxn.signTxn(recoveredAccount1.sk)
          let xtx = (await algodclient.sendRawTransaction(rawSignedTxn).do());
          console.log("Transaction : " + xtx.txId);
          // wait for transaction to be confirmed
          await waitForConfirmation(algodclient, xtx.txId);
      
          // You should now see the 10 assets listed in the account information
          console.log("Account 3 = " + recoveredAccount3.addr);
          await printAssetHolding(algodclient, recoveredAccount3.addr, assetID);
      
        })().then(d=>{

          fireDb.database().ref(`algorandData/${recoveredAccount3.addr}`).child(a.addkeyId).set({
            createmnemonic:a.addmnemonic,
            algocreator:a.addalgocreator,
            algotrasnfer:"",
            algoid:a.addassetid,
            algoname:a.addalgoname,
            algosymbol:a.addalgosymbol,
            txnId:a.addtxid,
            AssetIdset:a.addassetid,
            transfer:recoveredAccount3.addr,
            status:"sold",
            price:a.addprice,
            keyId:a.addkeyId,
            imageurl:a.addImgs
        });

        fireDb.database().ref(`algorandDataprice/${a.addalgocreator}`).child(a.addkeyId).remove();
        fireDb.database().ref(`algorandData/${a.addalgocreator}`).child(a.addkeyId).remove();

      //   fireDb.database().ref(`algorandData/${a.addalgocreator}`).child(a.addkeyId).update({
      //     createmnemonic:a.addmnemonic,
      //     algocreator:a.addalgocreator,
      //     algotrasnfer:"",
      //     algoid:a.addassetid,
      //     algoname:a.addalgoname,
      //     algosymbol:a.addalgosymbol,
      //     txnId:a.addtxid,
      //     AssetIdset:a.addassetid,
      //     transfer:recoveredAccount3.addr,
      //     status:"sold",
      //     price:a.addprice,
      //     keyId:a.addkeyId,
      //     imageurl:a.addImgs
      // })
        
        }).catch(e => {
          console.log(e);
          console.trace();
      });


                //cut stop
              })
              .catch((e) => {
                console.error(e);
              });
            })
            .catch((e) => {
                console.error(e);
            });
          
          })
          .catch((e) => {
            console.error(e);
          });
        })
        .catch((e) => {
          console.error(e);
        });
      
      })
      .catch((e) => {
        console.error(e);
      });
}
 const TransferAsset2=async(a)=>{
  
    alert("transferasset");
    // console.log("buytx",a.addtxid);
    // console.log("buytx",a.addalgocreator);
    // console.log("buytx",a.addprice);
    let merge=a.addprice+'000000'
      const algosdk = require('algosdk');
      //var account1_mnemonic=a.addmnemonic;
        let signedTx;
        let tx;
        let txParams;
        AlgoSigner.connect()
      .then((d) => {
        console.log("conn",d);
        let accounts;
        AlgoSigner.accounts({
          ledger: 'TestNet'
        })
        .then((d) => {
          accounts = d;
          console.log("accounts",accounts[0]);
          AlgoSigner.algod({
            ledger: 'TestNet',
            path: '/v2/transactions/params'
          })
          .then((d) => {
            txParams = d;
            console.log("txparms",d);
            let getac=accounts[0].address;
            //console.log("stringcon",getac);
            //console.log("check",a.addalgocreator);
            AlgoSigner.sign({
              from:getac,
              to: '5N4B6FZMCQXFZDDKKZDPUSIQ2FCNXVIAZNE6QQPBOIWL6NJKEZJNC7FAUI',
              amount: +1000000,
              note: undefined,
              type: 'pay',
              fee: txParams['min-fee'],
              firstRound: txParams['last-round'],
              lastRound: txParams['last-round'] + 1000,
              genesisID: txParams['genesis-id'],
              genesisHash: txParams['genesis-hash'],
              flatFee: true
            })
            .then((d) => {
              signedTx = d;
              console.log("signedtx",d);
              AlgoSigner.send({
                ledger: 'TestNet',
                tx: signedTx.blob
              })
              .then((d) => {
                tx = d;
                console.log("tx",d);
                //cut start
        //var account1_mnemonic=a.addmnemonic;
        //var account1_mnemonic = "tackle dove endorse style mind boring hidden fiction power wrap diesel more cruel ecology few field they chase oil deliver useless paddle nation abandon domain";
        //var account2_mnemonic = "tackle dove endorse style mind boring hidden fiction power wrap diesel more cruel ecology few field they chase oil deliver useless paddle nation abandon domain";
        //var account3_mnemonic = "tackle dove endorse style mind boring hidden fiction power wrap diesel more cruel ecology few field they chase oil deliver useless paddle nation abandon domain";
        var account3_mnemonic = "runway genuine lazy assist ticket junior pilot flush rocket swallow ripple risk alien mobile chat recall run quiz cause weekend range april vicious about spoon";
        //var recoveredAccount1 = algosdk.mnemonicToSecretKey(account1_mnemonic);
        //var recoveredAccount2 = algosdk.mnemonicToSecretKey(account2_mnemonic);
        var recoveredAccount3 = algosdk.mnemonicToSecretKey(account3_mnemonic);
        //alert(arr[0]);
        // var recoveredAccount1 = arr[0];
        // var recoveredAccount2 = arr[0];
        // var recoveredAccount3 = arr[0];
        console.log(recoveredAccount3.addr);
        //console.log(recoveredAccount1.addr);
        const baseServer = "https://testnet-algorand.api.purestake.io/ps2";
        const port = "";
        //B3SU4KcVKi94Jap2VXkK83xx38bsv95K5UZm2lab
        const token = {
        
            'X-API-key' : 'SVsJKi8vBM1RwK1HEuwhU20hYmwFJelk8bagKPin',
        }
        let algodclient = new algosdk.Algodv2(token, baseServer, port);  
        console.log("algodclient",algodclient)
      // Function used to wait for a tx confirmation
      const waitForConfirmation = async function (algodclien, txId) {        
          //console.log("working return 133",txId)
        //console.log("workingalgo"+algodclien);
          let response = await algodclien.status().do();
          //console.log("response",response);
          let lastround = response["last-round"];
          //console.log("lastround",lastround);
          //while (true) {
            //console.log("inside while loop");
              //const pendingInfo = await algodclient.pendingTransactionInformation(txId).do();
              //console.log("insidewhileloop",pendingInfo);
              // if (pendingInfo["confirmed-round"] !== null && pendingInfo["confirmed-round"] > 0) {
              //     //Got the completed Transaction
              //     console.log("Transaction " + txId + " confirmed in round " + pendingInfo["confirmed-round"]);
              //     break;
              // }
              //lastround++;
              // await algodclien.statusAfterBlock(lastround).do();
              //console.log("finish while loop");
          //}

          //console.log("outside while loop");
      };
      
      // Function used to print created asset for account and assetid
      const printCreatedAsset = async function (algodclient, account, assetid) {
          // note: if you have an indexer instance available it is easier to just use this
          //     let accountInfo = await indexerClient.searchAccounts()
          //    .assetID(assetIndex).do();
          // and in the loop below use this to extract the asset for a particular account
          // accountInfo['accounts'][idx][account]);
          let accountInfo = await algodclient.accountInformation(account).do();
          for (let idx = 0; idx < accountInfo['created-assets'].length; idx++) {
              let scrutinizedAsset = accountInfo['created-assets'][idx];
              if (scrutinizedAsset['index'] === assetid) {
                  console.log("AssetID = " + scrutinizedAsset['index']);
                  let myparms = JSON.stringify(scrutinizedAsset['params'], undefined, 2);
                  console.log("parms = " + myparms);
                  break;
              }
          }
      };
      // Function used to print asset holding for account and assetid
      const printAssetHolding = async function (algodclient, account, assetid) {
          // note: if you have an indexer instance available it is easier to just use this
          //     let accountInfo = await indexerClient.searchAccounts()
          //    .assetID(assetIndex).do();
          // and in the loop below use this to extract the asset for a particular account
          // accountInfo['accounts'][idx][account]);
          let accountInfo = await algodclient.accountInformation(account).do();
          for (let idx = 0; idx < accountInfo['assets'].length; idx++) {
              let scrutinizedAsset = accountInfo['assets'][idx];
              if (scrutinizedAsset['asset-id'] === assetid) {
                  let myassetholding = JSON.stringify(scrutinizedAsset, undefined, 2);
                  console.log("assetholdinginfo = " + myassetholding);
                  break;
              }
          }
      };
      
      (async () => {      
        let params = await algodclient.getTransactionParams().do();
          //comment out the next two lines to use suggested fee
          params.fee = 1000;
          params.flatFee = true;
          //console.log(params);              
          let note = undefined;          
          let assetID = null;
          //console.log("working198");
          //console.log("beforealgoclient",algodclient);
          //console.log(a.addtxid);
          await waitForConfirmation(algodclient,'U7XKYAEHMMSHGKOHIFM6ST6OFHB6JLH6HNBGYUZKSF5YJETWJCLQ');
          //console.log("working return 209")
          // Get the new asset's information from the creator account
          //let ptx = await algodclient.pendingTransactionInformation(a.addtxid).do();
          //console.log("working return 212",ptx["asset-index"]);
          //assetID = ptx["asset-index"];
          assetID='17113637';        
        await printCreatedAsset(algodclient,accounts[0].address, assetID);
        await printAssetHolding(algodclient, accounts[0].address, assetID);      
        //console.log("working178")        
        //this below is transfer usefull function      
        // Opting in to an Asset:
        // Opting in to transact with the new asset
        // Allow accounts that want recieve the new asset
        // Have to opt in. To do this they send an asset transfer
        // of the new asset to themseleves 
        // In this example we are setting up the 3rd recovered account to 
        // receive the new asset      
        // First update changing transaction parameters
        // We will account for changing transaction parameters
        // before every transaction in this example
        //cmd now
      
          params = await algodclient.getTransactionParams().do();
          //comment out the next two lines to use suggested fee
          params.fee = 1000;
          params.flatFee = true;      
          let sender = recoveredAccount3.addr;
          let recipient = sender;
          // We set revocationTarget to undefined as 
          // This is not a clawback operation
          let revocationTarget = undefined;
          // CloseReaminerTo is set to undefined as
          // we are not closing out an asset
          let closeRemainderTo = undefined;
          // We are sending 0 assets
          let amount = 0;
      //let note=undefined;
      //assetID='15940921';      
      //console.log("working211")      
          // signing and sending "txn" allows sender to begin accepting asset specified by creator and index
          let opttxn = algosdk.makeAssetTransferTxnWithSuggestedParams(sender, recipient, closeRemainderTo, revocationTarget,
               amount, note, assetID, params);
      
          // Must be signed by the account wishing to opt in to the asset    
          let rawSignedTxn = opttxn.signTxn(recoveredAccount3.sk);
          let opttx = (await algodclient.sendRawTransaction(rawSignedTxn).do());
          console.log("Transaction : " + opttx.txId);
          // wait for transaction to be confirmed
          await waitForConfirmation(algodclient, opttx.txId);
      
          //You should now see the new asset listed in the account information
          console.log("Account3" + recoveredAccount3.addr);
          await printAssetHolding(algodclient, recoveredAccount3.addr, assetID);
      
      //console.log("working 227")        
      //     // Transfer New Asset:
      //     // Now that account3 can recieve the new tokens 
      //     // we can tranfer tokens in from the creator
      //     // to account3
      //     // First update changing transaction parameters
      //     // We will account for changing transaction parameters
      //     // before every transaction in this example
      
      //cmd now
      
          params = await algodclient.getTransactionParams().do();
          //comment out the next two lines to use suggested fee
          params.fee = 1000;
          params.flatFee = true;
      
          sender = accounts[0].address;
          recipient = recoveredAccount3.addr;
          revocationTarget = undefined;
          closeRemainderTo = undefined;
          //Amount of the asset to transfer
          amount = 1000;
      
          // signing and sending "txn" will send "amount" assets from "sender" to "recipient"
          let xtxn = algosdk.makeAssetTransferTxnWithSuggestedParams(sender, recipient, closeRemainderTo, revocationTarget,
               amount, note, assetID, params);
          // Must be signed by the account sending the asset  
          rawSignedTxn = xtxn.signTxn(accounts[0].address.sk)
          let xtx = (await algodclient.sendRawTransaction(rawSignedTxn).do());
          console.log("Transaction : " + xtx.txId);
          // wait for transaction to be confirmed
          await waitForConfirmation(algodclient, xtx.txId);
      
          // You should now see the 10 assets listed in the account information
          console.log("Account 3 = " + recoveredAccount3.addr);
          await printAssetHolding(algodclient, recoveredAccount3.addr, assetID);
      
        })().then(d=>{

          fireDb.database().ref(`algorandData/${recoveredAccount3.addr}`).child(a.addkeyId).set({
            createmnemonic:a.addmnemonic,
            algocreator:a.addalgocreator,
            algotrasnfer:"",
            algoid:a.addassetid,
            algoname:a.addalgoname,
            algosymbol:a.addalgosymbol,
            txnId:a.addtxid,
            AssetIdset:a.addassetid,
            transfer:recoveredAccount3.addr,
            status:"sold",
            price:a.addprice,
            keyId:a.addkeyId,
            imageurl:a.addImgs
        });

        fireDb.database().ref(`algorandDataprice/${a.addalgocreator}`).child(a.addkeyId).remove();
        fireDb.database().ref(`algorandData/${a.addalgocreator}`).child(a.addkeyId).remove();

      //   fireDb.database().ref(`algorandData/${a.addalgocreator}`).child(a.addkeyId).update({
      //     createmnemonic:a.addmnemonic,
      //     algocreator:a.addalgocreator,
      //     algotrasnfer:"",
      //     algoid:a.addassetid,
      //     algoname:a.addalgoname,
      //     algosymbol:a.addalgosymbol,
      //     txnId:a.addtxid,
      //     AssetIdset:a.addassetid,
      //     transfer:recoveredAccount3.addr,
      //     status:"sold",
      //     price:a.addprice,
      //     keyId:a.addkeyId,
      //     imageurl:a.addImgs
      // })
        
        }).catch(e => {
          console.log(e);
          console.trace();
      });


                //cut stop
              })
              .catch((e) => {
                console.error(e);
              });
            })
            .catch((e) => {
                console.error(e);
            });
          
          })
          .catch((e) => {
            console.error(e);
          });
        })
        .catch((e) => {
          console.error(e);
        });
      
      })
      .catch((e) => {
        console.error(e);
      });

 } 
    //end transfer
//end buyers print in algo
return(

    <div>

<button onClick={TransferAsset2}>T2</button>

<br></br><br></br>

<button onClick={getalgo}>GetAsset</button>
<br></br><br></br>
<div style={{backgroundColor:'black',display:'flex',flexWrap:'wrap'}}>
{getAlgoss.map((a)=>{  
    return (
      <div style={{backgroundColor:'black',height:'300px',width:'300px'}}>
<div style={{border: '2px solid white',borderRadius:'5px'}}>
<center>
    {/* <Link to={{pathname: `/explore/${a.addKeyI}/${a.addOwnerAddress}`,
//pathname: `/explore/${combine}`,
                  }}
                >    
    </Link> */}
    {/* <h5>hello{a[b].imageUrl}</h5> */}
    <img   src={a.addImgs}  style={{height:120,width:120,marginTop:'10px'}} alt=""    />  
    <h6 style={{color:'white'}}>Name : {a.addalgoname}</h6>    
    <h6 style={{color:'white'}}>Symbol : {a.addalgosymbol}</h6>    
    <h6 style={{color:'white'}}>price : {a.addprice}</h6>
    { a.addsold === '' ? (
<> 
 <button onClick={()=>TransferAsset(a)} >BuyNow</button>     
</>
    ):(
      <>
      <button >Already Sold</button> 
      </>
    )}
</center>
</div>
</div>
 )})}
  </div>
  </div>
);
}
export default AlgoTransfer;