const initialState = {
    loading: false
};
const walletReducer = (state = initialState, action) => {
    switch(action.type) {
        case 'LOAD_WALLET_BEGIN':
            return {
                ...state,
                loading: true,
                error: null
            };
        case 'LOAD_WALLET_SUCCESS':
            return {
                ...state,
                loading: false,
                ...action.payload
            };
        case 'LOAD_WALLET_FAILURE':
            return {
                ...state,
                loading: false,
                error: action.payload,
            };
        default:
            return {
                ...state
            };
    }
};

export default walletReducer;