import { Product } from "./product.js";

export const renderProducts=(products) =>{
    let listOfProductOrderingElement = document.getElementById('completingProductContainer');
    const productsContainer = document.getElementById('productsContainer');

    // Renderowanie produktów
    products.forEach((product) => {
        // Tworzymy Elementy w menu
        const productMenuElement = product.createProduct();
        productsContainer.appendChild(productMenuElement);

        // Tworzymy Elementy w zamawianiu
        const productOrderingElement = product.createProductOrderingElement();
        listOfProductOrderingElement.appendChild(productOrderingElement);
    });
}
