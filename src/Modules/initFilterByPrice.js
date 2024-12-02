import { filterByPrice } from "./priceFilter.js";
export const initFilterByPrice = () => {
    const priceFromInput = document.getElementById('priceFromInput');
    const priceToInput = document.getElementById('priceToInput');

 
    const handlePriceChange = () => {
        filterByPrice(priceFromInput,priceToInput); 
    };

    
    priceFromInput.addEventListener('change', handlePriceChange);
    priceToInput.addEventListener('change', handlePriceChange);

 
};