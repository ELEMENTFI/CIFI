import {formatNumber} from 'accounting-js';

export function isNumber(n) {
    return !isNaN(parseFloat(n)) && isFinite(n);
}

export function isPositive(n) {
    return n >= 0;
}

export function isValidAssetDecimals(amount, decimals) {
    const amountSplit = amount.toString().split('.');
    if (amountSplit[1]) {
        const amountDecimal = amountSplit[1].length;
        return amountDecimal <= decimals;
    }
    return true;
}

export function getAmountInDecimals(amount, decimals) {
    return formatNumber(amount, {
        precision: decimals
    });
}

export function getAssetSupply(asset) {
    const supply = asset.params.total / Math.pow(10,asset.params.decimals);
    return getAmountInDecimals(supply, asset.params.decimals);
}