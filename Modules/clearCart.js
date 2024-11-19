import { updateProductSum } from "./updateProductSum.js";

export const clearCart = () => {
    const cartItemContainer = document.getElementById('cartItemContainer');
    cartItemContainer.innerHTML = ''; 
    globalThis.sumOfAllProducts = 0; 
    updateProductSum(); 
};