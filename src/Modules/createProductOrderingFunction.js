import { Product } from './product';
import { createCartProductFunction } from './createCartProductFunction';
import { updateProductSum } from './updateProductSum';
export const createProductOrderingFunction = (
    name,
    price,
    imageUrl,
    description,
    toppings,
    category
) => {
    const newDivElement = document.createElement('div');
    newDivElement.classList.add('completingProductElementContainer');

    newDivElement.innerHTML = `
        <div class="productImageContainer">
            <p class="productImagePlaceholder"></p>
        </div>
        <p class="productNameOrder">${name}</p>
        <div class="productPricingContainer">
            <p class="productPriceOrder">${price}</p>
            <div class="addToCartButton">Dodaj do Koszyka</div>
        </div>
        `;
    newDivElement.querySelector(
        '.productImagePlaceholder'
    ).style.backgroundImage = `url(${imageUrl})`;
    const addToCartButton = newDivElement.querySelector('.addToCartButton');
    let cartItemContainer = document.getElementById('cartItemContainer');
    addToCartButton.addEventListener('click', () => {
        let existingProductElements = Array.from(cartItemContainer.children);
        let existingProductElement = existingProductElements.find(
            (child) => child.dataset.name === name
        );

        if (existingProductElement !== undefined) {
            let numberOfItemsElement = existingProductElement.querySelector('.numberOfItems');
            let cartItemPrice = existingProductElement.querySelector('.cartItemPrice');

            if (numberOfItemsElement) {
                let currentQuantity = parseInt(numberOfItemsElement.textContent, 10);
                numberOfItemsElement.textContent = currentQuantity + 1;
                const priceOfProducts = (price * Number(numberOfItemsElement.textContent)).toFixed(
                    2
                );

                globalThis.sumOfAllProducts += price;
                cartItemPrice.textContent = priceOfProducts;
                updateProductSum();
            }
        } else {
            let cartProductElement = createCartProductFunction(
                name,
                price,
                imageUrl,
                description,
                toppings,
                category
            );

            cartItemContainer.appendChild(cartProductElement);
            globalThis.sumOfAllProducts += price;
            updateProductSum();
        }
    });
    if (category === 'pizza') {
        newDivElement.classList.add('categoryPizza');
    } else if (category === 'drink') {
        newDivElement.classList.add('categoryDrink');
    } else if (category === 'appetizer') {
        newDivElement.classList.add('categoryAppetizer');
    }
    return newDivElement;
};
