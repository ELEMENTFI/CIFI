export const ALGO_SIGNER_INSTALLATION_URL = 'https://www.purestake.com/technology/algosigner/';
export function isAlgoSignerInstalled() {
    return typeof AlgoSigner != 'undefined';
}