export function convertUSDToEUR(usdValue) {
    if (!isNaN(usdValue)) {
        return (usdValue * 0.85).toFixed(2);
    }
    return '';
}

export function convertEURToUSD(eurValue) {
    if (!isNaN(eurValue)) {
        return (eurValue / 0.85).toFixed(2);
    }
    return '';
}
