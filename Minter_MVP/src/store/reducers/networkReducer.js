const initialState = {
    availableNetworks: [],
    usingAlgoSigner: false
};
const networkReducer = (state = initialState, action) => {
    switch(action.type) {
        case 'LOAD_NETWORKS':
            return {
                ...state,
                availableNetworks: [
                    ...action.payload
                ]
            };
        case 'SELECT_NETWORK':
            return {
                ...state,
                selected: action.payload
            };
        case 'USING_ALGO_SIGNER':
            return {
                ...state,
                usingAlgoSigner: action.payload
            };
        default:
            return {
                ...state
            };
    }
};

export default networkReducer;