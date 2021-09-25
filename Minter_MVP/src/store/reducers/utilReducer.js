import {HIDE_MODAL, SHOW_ERROR_MODAL} from "../actions/utilActions";

export const SEVERITY_INFO = 'info';
export const SEVERITY_WARNING = 'warning';
export const SEVERITY_ERROR = 'error';

const initialState = {
    modal: {
        severity: SEVERITY_INFO
    },
    createAsset: {

    },
    modifyAsset: {

    },
    loading: {
        count: 0
    }
};
const utilReducer = (state = initialState, action) => {
    const {payload} = action;
    switch(action.type) {
        case "SHOW_ERROR_MODAL":
            return {
                ...state,
                modal: {
                    ...state.modal,
                    message: payload.message,
                    show: true,
                    severity: SEVERITY_ERROR
                }
            };
        case "SHOW_WARNING_MODAL":
            return {
                ...state,
                modal: {
                    ...state.modal,
                    message: payload.message,
                    show: true,
                    severity: SEVERITY_WARNING
                }
            };
        case "HIDE_MODAL":
            return {
                ...state,
                modal: {
                    ...state.modal,
                    message: '',
                    show: false
                }
            };
        case "SHOW_CREATE_ASSET_DIALOG":
            return {
                ...state,
                createAsset: {
                    ...state.createAsset,
                    showDialog: true
                }
            };
        case "HIDE_CREATE_ASSET_DIALOG":
            return {
                ...state,
                createAsset: {
                    ...state.createAsset,
                    showDialog: false
                }
            };
        case "SHOW_MODIFY_ASSET_DIALOG":
            return {
                ...state,
                modifyAsset: {
                    ...state.modifyAsset,
                    showDialog: true
                }
            };
        case "HIDE_MODIFY_ASSET_DIALOG":
            return {
                ...state,
                modifyAsset: {
                    ...state.modifyAsset,
                    showDialog: false
                }
            };

        case "SHOW_LOADING":
            return {
                ...state,
                loading: {
                    ...state.loading,
                    message: action.payload,
                    count: ++state.loading.count
                }
            };
        case "HIDE_LOADING":
            return {
                ...state,
                loading: {
                    ...state.loading,
                    count: --state.loading.count
                }
            };
        default:
            return {
                ...state
            };
    }
};

export default utilReducer;