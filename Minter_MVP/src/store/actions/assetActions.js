import algoSdk from "../../App/services/algoSdk";
import sdk from "../../App/services/algoSdk";
import {hideLoading, showLoading, showErrorModal} from "./utilActions";

export const loadAsset = (payload) => {
    return dispatch => {
        dispatch(loadAssetBegin());
        dispatch(showLoading('Loading Assets...'));
        const assetId = payload;
        return algoSdk.getAssetInformation(assetId).then((payload) => {
            dispatch(loadAssetSuccess({
                ...payload,
                id: assetId
            }));
            dispatch(hideLoading());
        }).catch(error => {
            dispatch(loadAssetFailure(error));
            dispatch(hideLoading());
            });
    };
};

export const LOAD_ASSET_BEGIN   = 'LOAD_ASSET_BEGIN';
export const LOAD_ASSET_SUCCESS = 'LOAD_ASSET_SUCCESS';
export const LOAD_ASSET_FAILURE = 'LOAD_ASSET_FAILURE';

export const loadAssetBegin = () => ({
    type: LOAD_ASSET_BEGIN
});

export const loadAssetSuccess = (asset) => {
    return {
        type: LOAD_ASSET_SUCCESS,
        payload: asset
    };
};

export const loadAssetFailure = (error) => ({
    type: LOAD_ASSET_FAILURE,
    payload: error
});

export const destroyAsset = (usingAlgoSigner, wallet, assetId) => {
    return async dispatch => {
        dispatch(destroyAssetBegin());
        dispatch(showLoading('Destroying Asset...'));
        try {
            const {txId} = await algoSdk.destroyAsset(usingAlgoSigner, wallet, assetId);
            dispatch(hideLoading());
            dispatch(showLoading('Waiting for transaction to confirm...'));
            await algoSdk.waitForConfirmation(txId);
            dispatch(hideLoading());
            dispatch(showLoading('Fetching transaction details'));
            const txDetails = await algoSdk.pendingTransactionInformation(txId);
            txDetails.success = true;
            dispatch(hideLoading());
            dispatch(destroyAssetSuccess(assetId));
            return txDetails;
        }
        catch (e) {
            e.success = false;
            dispatch(destroyAssetFailure(e));
            dispatch(hideLoading());
            dispatch(showErrorModal({message: e.message || e.text}));
            return e;
        }
    };
};

export const DESTROY_ASSET_BEGIN   = 'DESTROY_ASSET_BEGIN';
export const DESTROY_ASSET_SUCCESS = 'DESTROY_ASSET_SUCCESS';
export const DESTROY_ASSET_FAILURE = 'DESTROY_ASSET_FAILURE';

export const destroyAssetBegin = () => ({
    type: DESTROY_ASSET_BEGIN
});

export const destroyAssetSuccess = (assetId) => ({
    type: DESTROY_ASSET_SUCCESS,
    payload: assetId
});

export const destroyAssetFailure = (error) => ({
    type: DESTROY_ASSET_FAILURE,
    payload: error
});


export const createAsset = (usingAlgoSigner, wallet, assetName, unitName, supply, assetUrl, managerAddress, reserveAddress, freezeAddress, clawbackAddress, decimals, metadataHash) => {
    return async dispatch => {
        dispatch(createAssetBegin());
        dispatch(showLoading('Creating Asset...'));
        try {
            const {txId} = await algoSdk.createAsset(usingAlgoSigner, wallet, assetName, unitName, supply, assetUrl, managerAddress, reserveAddress, freezeAddress, clawbackAddress, decimals, metadataHash);
            dispatch(hideLoading());
            dispatch(showLoading('Waiting for transaction to confirm...'));
            await algoSdk.waitForConfirmation(txId);
            dispatch(hideLoading());
            dispatch(showLoading('Fetching transaction details'));
            const txDetails = await algoSdk.pendingTransactionInformation(txId);
            dispatch(hideLoading());
            dispatch(createAssetSuccess());
            txDetails.success = true;
            return txDetails;
        }
        catch (e) {
            e.success = false;
            console.log(e);
            dispatch(createAssetFailure(e));
            dispatch(hideLoading());
            dispatch(showErrorModal({message: e.message || e.text}));
            return e;
        }
    };
};

export const CREATE_ASSET_BEGIN   = 'CREATE_ASSET_BEGIN';
export const CREATE_ASSET_SUCCESS = 'CREATE_ASSET_SUCCESS';
export const CREATE_ASSET_FAILURE = 'CREATE_ASSET_FAILURE';

export const createAssetBegin = () => ({
    type: CREATE_ASSET_BEGIN
});

export const createAssetSuccess = (assetId) => ({
    type: CREATE_ASSET_SUCCESS,
    payload: assetId
});

export const createAssetFailure = (error) => ({
    type: CREATE_ASSET_FAILURE,
    payload: error
});

export const CLEAR_ASSETS   = 'CLEAR_ASSETS';
export const clearAssets = () => ({
    type: CLEAR_ASSETS
});

export const modifyAsset = (usingAlgoSigner, wallet, assetId, managerAddress, reserveAddress, freezeAddress, clawbackAddress) => {
    return async dispatch => {
        dispatch(modifyAssetBegin());
        dispatch(showLoading('Modifying Asset...'));
        try {
            const {txId} = await sdk.modifyAsset(usingAlgoSigner, wallet, assetId, managerAddress, reserveAddress, freezeAddress, clawbackAddress);
            dispatch(hideLoading());
            dispatch(showLoading('Waiting for transaction to confirm...'));
            await sdk.waitForConfirmation(txId);
            dispatch(hideLoading());
            dispatch(showLoading('Fetching transaction details'));
            const txDetails = await sdk.pendingTransactionInformation(txId);
            dispatch(hideLoading());
            dispatch(modifyAssetSuccess(assetId));
            txDetails.success = true;
            return txDetails;
        }
        catch (e) {
            e.success = false;
            dispatch(modifyAssetFailure(e));
            dispatch(hideLoading());
            dispatch(showErrorModal({message: e.message || e.text}));
            return e;
        }
    };
};

export const MODIFY_ASSET_BEGIN   = 'MODIFY_ASSET_BEGIN';
export const MODIFY_ASSET_SUCCESS = 'MODIFY_ASSET_SUCCESS';
export const MODIFY_ASSET_FAILURE = 'MODIFY_ASSET_FAILURE';

export const modifyAssetBegin = () => ({
    type: MODIFY_ASSET_BEGIN
});

export const modifyAssetSuccess = (payload) => ({
    type: MODIFY_ASSET_SUCCESS,
    payload
});

export const modifyAssetFailure = (error) => ({
    type: MODIFY_ASSET_FAILURE,
    payload: error
});

export const freezeAsset = (usingAlgoSigner, wallet, assetId, freezeAddress, freezeState) => {
    return async dispatch => {
        dispatch(freezeAssetBegin());
        if (freezeState) {
            dispatch(showLoading('Freezing Assets...'));
        }
        else {
            dispatch(showLoading('UnFreezing Assets...'));
        }
        try {
            const {txId} = await algoSdk.freezeAsset(usingAlgoSigner, wallet, assetId, freezeAddress, freezeState);
            dispatch(hideLoading());
            dispatch(showLoading('Waiting for transaction to confirm...'));
            await algoSdk.waitForConfirmation(txId);
            dispatch(hideLoading());
            dispatch(showLoading('Fetching transaction details'));
            const txDetails = await algoSdk.pendingTransactionInformation(txId);
            dispatch(hideLoading());
            dispatch(freezeAssetSuccess(assetId));
            txDetails.success = true;
            return txDetails;
        }
        catch (e) {
            e.success = false;
            dispatch(freezeAssetFailure(e));
            dispatch(hideLoading());
            dispatch(showErrorModal({message: e.message || e.text}));
            return e;
        }
    };
};

export const FREEZE_ASSET_BEGIN   = 'FREEZE_ASSET_BEGIN';
export const FREEZE_ASSET_SUCCESS = 'FREEZE_ASSET_SUCCESS';
export const FREEZE_ASSET_FAILURE = 'FREEZE_ASSET_FAILURE';

export const freezeAssetBegin = () => ({
    type: FREEZE_ASSET_BEGIN
});

export const freezeAssetSuccess = (assetId) => ({
    type: FREEZE_ASSET_SUCCESS,
    payload: assetId
});

export const freezeAssetFailure = (error) => ({
    type: FREEZE_ASSET_FAILURE,
    payload: error
});









export const sendAssets = (usingAlgoSigner, wallet, assetId, toAddress, amount) => {
    return async dispatch => {
        dispatch(sendAssetsBegin());
        dispatch(showLoading('Sending Assets...'));
        try {
            const {txId} = await sdk.sendAssets(usingAlgoSigner, wallet, assetId, toAddress, amount);
            dispatch(hideLoading());
            dispatch(showLoading('Waiting for transaction to confirm...'));
            await sdk.waitForConfirmation(txId);
            dispatch(hideLoading());
            dispatch(showLoading('Fetching transaction details'));
            const txDetails = await sdk.pendingTransactionInformation(txId);
            dispatch(hideLoading());
            dispatch(sendAssetsSuccess());
            txDetails.success = true;
            return txDetails;
        }
        catch (e) {
            e.success = false;
            dispatch(sendAssetsFailure(e));
            dispatch(hideLoading());
            dispatch(showErrorModal({message: e.message || e.text}));
            return e;
        }
    };
};

export const SEND_ASSETS_BEGIN   = 'SEND_ASSETS_BEGIN';
export const SEND_ASSETS_SUCCESS = 'SEND_ASSETS_SUCCESS';
export const SEND_ASSETS_FAILURE = 'SEND_ASSETS_FAILURE';

export const sendAssetsBegin = () => ({
    type: SEND_ASSETS_BEGIN
});

export const sendAssetsSuccess = (payload) => ({
    type: SEND_ASSETS_SUCCESS,
    payload
});

export const sendAssetsFailure = (error) => ({
    type: SEND_ASSETS_FAILURE,
    payload: error
});

export const revokeAssets = (usingAlgoSigner, wallet, assetId, revokeAddress, revokeReceiverAddress, revokeAmount) => {
    return async dispatch => {
        dispatch(revokeAssetsBegin());
        dispatch(showLoading('Revoking Assets...'));
        try {
            const {txId} = await sdk.revokeAssets(usingAlgoSigner, wallet, assetId, revokeAddress, revokeReceiverAddress, revokeAmount);
            dispatch(hideLoading());
            dispatch(showLoading('Waiting for transaction to confirm...'));
            await sdk.waitForConfirmation(txId);
            dispatch(hideLoading());
            dispatch(showLoading('Fetching transaction details'));
            const txDetails = await sdk.pendingTransactionInformation(txId);
            txDetails.success = true;
            dispatch(hideLoading());
            dispatch(revokeAssetsSuccess());
            return txDetails;
        }
        catch (e) {
            e.success = false;
            dispatch(revokeAssetsFailure(e));
            dispatch(hideLoading());
            dispatch(showErrorModal({message: e.message || e.text}));
            return e;
        }
    };
};

export const REVOKE_ASSETS_BEGIN   = 'REVOKE_ASSETS_BEGIN';
export const REVOKE_ASSETS_SUCCESS = 'REVOKE_ASSETS_SUCCESS';
export const REVOKE_ASSETS_FAILURE = 'REVOKE_ASSETS_FAILURE';

export const revokeAssetsBegin = () => ({
    type: REVOKE_ASSETS_BEGIN
});

export const revokeAssetsSuccess = (payload) => ({
    type: REVOKE_ASSETS_SUCCESS,
    payload
});

export const revokeAssetsFailure = (error) => ({
    type: REVOKE_ASSETS_FAILURE,
    payload: error
});
