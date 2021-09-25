import { combineReducers } from 'redux';
import walletReducer from "./walletReducer";
import assetReducer from "./assetReducer";
import networkReducer from "./networkReducer";
import utilReducer from "./utilReducer";

const allReducers = combineReducers({
    wallet: walletReducer,
    asset: assetReducer,
    network: networkReducer,
    utils: utilReducer
});

export default allReducers;