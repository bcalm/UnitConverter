import { getINRtoUSDExchangeRate } from '../services/ExchangeRateService';

export function convertINRToUSD(inrValue) {
    try {
        const exchangeRate = getINRtoUSDExchangeRate();
        if (!isNaN(inrValue)) {
            return (inrValue / exchangeRate).toFixed(2);
        }
        return '';
    } catch (error) {
        console.error('Error converting INR to USD:', error);
        throw error;
    }
}

export function convertUSDToINR(usdValue) {
    try {
        const exchangeRate = getINRtoUSDExchangeRate();
        if (!isNaN(usdValue)) {
            return (usdValue * exchangeRate).toFixed(2);
        }
        return '';
    } catch (error) {
        console.error('Error converting USD to INR:', error);
        throw error;
    }
}