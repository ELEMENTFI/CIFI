import {loadNetworks, selectNetwork} from "./networkActions";

export const initApp = () => {
    return dispatch => {
        dispatch(loadNetworks());
        let selectedNetwork = localStorage.getItem('network');
        if (!selectedNetwork) {
            selectedNetwork = 'testnet';
        }
        dispatch(selectNetwork(selectedNetwork));
    };
};