
import { updateProductSum } from "./updateProductSum.js";
export class Product {
    constructor(name, price, imageUrl, description, toppings, category) {
        this.name = name;
        this.price = price;
        this.imageUrl = imageUrl;
        this.description = description;
        this.toppings = toppings;
        this.category = category;
    }
   
    createProduct() {
        const menuElement = document.createElement('div');
        menuElement.classList.add('productElement');

        menuElement.innerHTML = `

            <div class="productImage" id="productImage">
            </div>
                
            <div class="productDescription">
                    <div class="productTitleandPrize">
                        <h3 class="productTitle">${this.name}</h3>
                        <h3 class="productPrize">$${this.price}</h3>
                    </div>
                    <hr></hr>
                    <div class="productDescriptionText">
                        <p>
                            ${this.description}
                        </p>
                        <h5 class="productCompositionTitle ">składniki:</h5>
                        <p class="productComposition">
                           ${this.toppings}
                        </p>
                    </div>
            </div>
        `;
        menuElement.querySelector('#productImage').style.backgroundImage = `url(${this.imageUrl})`;
        if (this.category === 'pizza') {
            menuElement.classList.add('categoryPizza');
        } else if (this.category === 'drink') {
            menuElement.classList.add('categoryDrink');
        } else if (this.category === 'appetizer') {
            menuElement.classList.add('categoryAppetizer');
        }
        return menuElement;
    }
    createProductOrderingElement() {
        const newDivElement = document.createElement('div');
        newDivElement.classList.add('completingProductElementContainer');

        newDivElement.innerHTML = `
        <div class="productImageContainer">
            <p class="productImagePlaceholder"></p>
        </div>
        <p class="productNameOrder">${this.name}</p>
        <div class="productPricingContainer">
            <p class="productPriceOrder">${this.price}</p>
            <div class="addToCartButton">Dodaj do Koszyka</div>
        </div>
        `;
        newDivElement.querySelector(
            '.productImagePlaceholder'
        ).style.backgroundImage = `url(${this.imageUrl})`;
        const addToCartButton = newDivElement.querySelector('.addToCartButton');
        let cartItemContainer = document.getElementById('cartItemContainer');
        addToCartButton.addEventListener('click', () => {
            let i = this.createCartProduct();
            console.log(i);
            cartItemContainer.appendChild(i);
            globalThis.sumOfAllProducts += this.price;
            updateProductSum();
            console.log(cartItemContainer);
        });
        if (this.category === 'pizza') {
            newDivElement.classList.add('categoryPizza');
        } else if (this.category === 'drink') {
            newDivElement.classList.add('categoryDrink');
        } else if (this.category === 'appetizer') {
            newDivElement.classList.add('categoryAppetizer');
        }
        return newDivElement;
    }
    createCartProduct() {
        let newCartItem = document.createElement('div');
        newCartItem.classList.add('cartItem');
        newCartItem.innerHTML = `
            <div class="cartItemImage"></div>
            <div class="cartItemDetails">
                <h3 class="cartItemProductName">${this.name}</h3>
                <div class="containercsa">
                    <div class="cartItemQuantityControls">
                        <div class="cartItemDecreaseQuantity">-</div>
                        <div class="cartItemQuantity">
                            <span class="numberOfItems">1</span> szt.
                        </div>
                        <div class="cartItemIncreaseQuantity">+</div>
                    </div>
                    <div class="cartItemRemove">usuń</div>
                </div>
            </div>
            <div class="cartItemPrice">${this.price}</div>
      `;
        let cartItemImage = newCartItem.querySelector('.cartItemImage');
        cartItemImage.style.backgroundImage = `url("${this.imageUrl}")`;
        let cartItemPrice = newCartItem.querySelector('.cartItemPrice');

        const deleteButton = newCartItem.querySelector('.cartItemRemove');
        deleteButton.addEventListener('click', () => {
            console.log(Number(newCartItem.querySelector('.cartItemPrice').textContent));
            globalThis.sumOfAllProducts -= Number(newCartItem.querySelector('.cartItemPrice').textContent);
            updateProductSum();
            newCartItem.remove();
        });
        const cartItemDecreaseQuantity = newCartItem.querySelector('.cartItemDecreaseQuantity');
        const cartItemIncreaseQuantity = newCartItem.querySelector('.cartItemIncreaseQuantity');
        const numberOfItems = newCartItem.querySelector('.numberOfItems');

        cartItemDecreaseQuantity.addEventListener('click', () => {
            globalThis.sumOfAllProducts -= this.price;
            updateProductSum();
            const num = Number(numberOfItems.textContent) - 1;
            const priceOfProducts = (this.price * num).toFixed(2);
            numberOfItems.innerHTML = num;
            if (numberOfItems.textContent < 1) {
                newCartItem.remove();
            } else {
                console.log(priceOfProducts);
                cartItemPrice.innerHTML = priceOfProducts;
                num;
            }
        });

        cartItemIncreaseQuantity.addEventListener('click', () => {
            globalThis.sumOfAllProducts += this.price;
            updateProductSum();
            const num = Number(numberOfItems.textContent) + 1;
            numberOfItems.innerHTML = num;
            const priceOfProducts = (this.price * num).toFixed(2);
            console.log(priceOfProducts);

            cartItemPrice.innerHTML = priceOfProducts;
        });
        const productSumAmountItem = document.querySelector('.productSumAmountItem');
        return newCartItem;
    }
}