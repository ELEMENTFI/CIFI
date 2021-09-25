import algoSdk from "../../App/services/algoSdk";

export const LOAD_NETWORKS   = 'LOAD_NETWORKS';
export const SELECT_NETWORK   = 'SELECT_NETWORK';
export const USING_ALGO_SIGNER   = 'USING_ALGO_SIGNER';

export const loadNetworks = () => {
    const availableNetworks = algoSdk.getNetworks();
    return {
        type: LOAD_NETWORKS,
        payload: availableNetworks
    }
};

export const selectNetwork = (payload) => {
    algoSdk.selectNetwork(payload);
    localStorage.setItem('network', payload);
    return {
        type: SELECT_NETWORK,
        payload
    }
};

export const usingAlgoSigner = (payload) => {
    return {
        type: USING_ALGO_SIGNER,
        payload
    }
};