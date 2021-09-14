export const SHOW_ERROR_MODAL = 'SHOW_ERROR_MODAL';
export const HIDE_MODAL = 'HIDE_MODAL';
export const SHOW_WARNING_MODAL = 'SHOW_WARNING_MODAL';

export const showErrorModal = (payload) => {
    return {
        type: SHOW_ERROR_MODAL,
        payload: payload
    }
};

export const showWarningModal = (payload) => {
    return {
        type: SHOW_WARNING_MODAL,
        payload: payload
    }
};

export const hideModal = () => ({
    type: HIDE_MODAL
});

export const SHOW_CREATE_ASSET_DIALOG = 'SHOW_CREATE_ASSET_DIALOG';
export const HIDE_CREATE_ASSET_DIALOG = 'HIDE_CREATE_ASSET_DIALOG';

export const showCreateAssetDialog = () => {
    return {
        type: SHOW_CREATE_ASSET_DIALOG
    }
};

export const hideCreateAssetDialog = () => ({
    type: HIDE_CREATE_ASSET_DIALOG
});

export const SHOW_MODIFY_ASSET_DIALOG = 'SHOW_MODIFY_ASSET_DIALOG';
export const HIDE_MODIFY_ASSET_DIALOG = 'HIDE_MODIFY_ASSET_DIALOG';

export const showModifyAssetDialog = () => {
    return {
        type: SHOW_MODIFY_ASSET_DIALOG
    }
};

export const hideModifyAssetDialog = () => ({
    type: HIDE_MODIFY_ASSET_DIALOG
});

export const SHOW_LOADING = 'SHOW_LOADING';
export const HIDE_LOADING = 'HIDE_LOADING';

export const showLoading = (message) => ({
    type: SHOW_LOADING,
    payload: message
});

export const hideLoading = () => ({
    type: HIDE_LOADING
});