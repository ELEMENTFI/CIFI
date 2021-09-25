import algoSdk from "../../App/services/algoSdk";
import {clearAssets, loadAsset, loadAssetSuccess} from "./assetActions";
import {hideLoading, showLoading, showErrorModal} from "./utilActions";

export const loadWallet = (mnemonic) => {
    return dispatch => {
        dispatch(loadWalletBegin());
        dispatch(clearAssets());
        dispatch(showLoading('Loading Assets...'));
        let keys;
        try {
            if (algoSdk.isValidAddress(mnemonic)) {
                keys = {
                    addr: mnemonic
                };
            }
            else {
                keys = algoSdk.mnemonicToSecretKey(mnemonic);
            }
            return algoSdk.getAccountInformation(keys.addr).then((payload) => {
                let walletDetails = {
                    ...payload,
                    secretKey: keys.sk,
                    mnemonic
                };

                let optedAssets = walletDetails['assets'];
                const optedAssetsMap = {};

                if (!optedAssets) {
                    optedAssets = [];
                }

                optedAssets.forEach((asset) => {
                    optedAssetsMap[asset['asset-id']] = asset;
                });

                let createdAssets = walletDetails['created-assets'];

                if (!createdAssets) {
                    createdAssets = [];
                }

                createdAssets = createdAssets.sort((a, b) => {
                    return parseInt(a.index) - parseInt(b.index);
                });

                createdAssets.forEach((asset) => {
                    let balance = 0;

                    if (optedAssetsMap[asset.index]) {
                        balance = optedAssetsMap[asset.index].amount;
                    }

                    dispatch(loadAssetSuccess({
                        ...asset,
                        id: asset.index,
                        balance
                    }));
                });

                dispatch(loadWalletSuccess(walletDetails));
                dispatch(hideLoading());
            }).catch(error => {
                dispatch(loadWalletFailure(error));
                dispatch(hideLoading());
            });
        }
        catch (e) {
            dispatch(hideLoading());
            dispatch(showErrorModal({message: 'unable to load assets'}));
        }
    };
};

export const LOAD_WALLET_BEGIN   = 'LOAD_WALLET_BEGIN';
export const LOAD_WALLET_SUCCESS = 'LOAD_WALLET_SUCCESS';
export const LOAD_WALLET_FAILURE = 'LOAD_WALLET_FAILURE';

export const loadWalletBegin = () => ({
    type: LOAD_WALLET_BEGIN
});

export const loadWalletSuccess = (wallet) => {
    return {
        type: LOAD_WALLET_SUCCESS,
        payload: wallet
    };
};

export const loadWalletFailure = (error) => ({
    type: LOAD_WALLET_FAILURE,
    payload: error
});