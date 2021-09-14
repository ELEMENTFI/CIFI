const initialState = {
    list: [],
    loading: 0
};
const assetReducer = (state = initialState, action) => {
    switch(action.type) {
        case 'CLEAR_ASSETS':
            return {
                ...state,
                list: []
            };
        case 'LOAD_ASSET_BEGIN':
            return {
                ...state,
                loading: ++state.loading,
                error: null
            };
        case 'LOAD_ASSET_SUCCESS':
            return {
                ...state,
                loading: --state.loading,
                list: [
                    ...state.list,
                    action.payload
                ]
            };
        case 'LOAD_ASSET_FAILURE':
            return {
                ...state,
                loading: --state.loading,
                error: action.payload,
            };
        case 'DESTROY_ASSET_BEGIN':
            return {
                ...state,
                destroying: true,
                error: null
            };
        case 'DESTROY_ASSET_SUCCESS': {
            return {
                ...state,
                destroying: false
            };
        }
        case 'DESTROY_ASSET_FAILURE':
            return {
                ...state,
                destroying: false,
                error: action.payload,
            };

        case 'CREATE_ASSET_BEGIN':
            return {
                ...state,
                creating: true,
                error: null
            };
        case 'CREATE_ASSET_SUCCESS': {
            const assetId = action.payload;
            return {
                ...state,
                creating: false
            };
        }
        case 'CREATE_ASSET_FAILURE':
            return {
                ...state,
                creating: false,
                error: action.payload,
            };
        case 'MODIFY_ASSET_BEGIN':
            return {
                ...state,
                modifying: true,
                error: null
            };
        case 'MODIFY_ASSET_SUCCESS':
            return {
                ...state,
                modifying: false
            };
        case 'MODIFY_ASSET_FAILURE':
            return {
                ...state,
                modifying: false,
                error: action.payload,
            };
        case 'FREEZE_ASSET_BEGIN':
            return {
                ...state,
                freezing: true,
                error: null
            };
        case 'FREEZE_ASSET_SUCCESS': {
            return {
                ...state,
                freezing: false
            };
        }
        case 'FREEZE_ASSET_FAILURE':
            return {
                ...state,
                freezing: false,
                error: action.payload,
            };
        case 'SEND_ASSETS_BEGIN':
            return {
                ...state,
                sending: true,
                error: null
            };
        case 'SEND_ASSETS_SUCCESS': {
            return {
                ...state,
                sending: false
            };
        }
        case 'SEND_ASSETS_FAILURE':
            return {
                ...state,
                sending: false,
                error: action.payload,
            };
        case 'REVOKE_ASSETS_BEGIN':
            return {
                ...state,
                revoking: true,
                error: null
            };
        case 'REVOKE_ASSETS_SUCCESS': {
            return {
                ...state,
                revoking: false
            };
        }
        case 'REVOKE_ASSETS_FAILURE':
            return {
                ...state,
                revoking: false,
                error: action.payload,
            };
        default:
            return {
                ...state
            };
    }
};

export default assetReducer;