import { getProductPrice } from "./getProductPrice.js";

export const filterByPrice = (priceFromInput,priceToInput) => {

    let listOfProductOrderingElement = document.getElementById('completingProductContainer');

    const priceMin = Number(priceFromInput.value) || 0;
    const priceMax = Number(priceToInput.value) || Infinity;

    for (let i = 0; i < listOfProductOrderingElement.children.length; i++) {
        /* console.log(listOfProductOrderingElement.children[i]); */
        const productPrice = getProductPrice(listOfProductOrderingElement.children[i]);
        if (productPrice <= priceMin || productPrice >= priceMax) {
            listOfProductOrderingElement.children[i].style.display = 'none';
        } else {
            listOfProductOrderingElement.children[i].style.display = 'flex';
        }
    }
};