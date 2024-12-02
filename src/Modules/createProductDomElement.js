import { Product } from "./product";

export const createProductFunction = (name, price, imageUrl, description, toppings, category) => {
    const menuElement = document.createElement('div');
    menuElement.classList.add('productElement');

    menuElement.innerHTML = `

        <div class="productImage" id="productImage">
        </div>
            
        <div class="productDescription">
                <div class="productTitleandPrize">
                    <h3 class="productTitle">${name}</h3>
                    <h3 class="productPrize">$${price}</h3>
                </div>
                <hr></hr>
                <div class="productDescriptionText">
                    <p>
                        ${description}
                    </p>
                    <h5 class="productCompositionTitle ">składniki:</h5>
                    <p class="productComposition">
                       ${toppings}
                    </p>
                </div>
        </div>
    `;
    menuElement.querySelector('#productImage').style.backgroundImage = `url(${imageUrl})`;
    if (category === 'pizza') {
        menuElement.classList.add('categoryPizza');
    } else if (category === 'drink') {
        menuElement.classList.add('categoryDrink');
    } else if (category === 'appetizer') {
        menuElement.classList.add('categoryAppetizer');
    }
    return menuElement;
}