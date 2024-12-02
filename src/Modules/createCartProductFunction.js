import { updateProductSum } from "./updateProductSum";
export const createCartProductFunction = (
    name,
    price,
    imageUrl,
    description,
    toppings,
    category
) => {
    let newCartItem = document.createElement('div');
    newCartItem.classList.add('cartItem');
    newCartItem.innerHTML = `
    <div class="cartItemImage"></div>
    <div class="cartItemDetails">
        <h3 class="cartItemProductName">${name}</h3>
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
    <div class="cartItemPrice">${price}</div>
`;
    newCartItem.dataset.name = name;
    let cartItemImage = newCartItem.querySelector('.cartItemImage');
    cartItemImage.style.backgroundImage = `url("${imageUrl}")`;
    let cartItemPrice = newCartItem.querySelector('.cartItemPrice');
    const deleteButton = newCartItem.querySelector('.cartItemRemove');
    deleteButton.addEventListener('click', () => {
        console.log(Number(newCartItem.querySelector('.cartItemPrice').textContent));
        globalThis.sumOfAllProducts -= Number(
            newCartItem.querySelector('.cartItemPrice').textContent
        );
        updateProductSum();
        newCartItem.remove();
    });
    const cartItemDecreaseQuantity = newCartItem.querySelector('.cartItemDecreaseQuantity');
    const cartItemIncreaseQuantity = newCartItem.querySelector('.cartItemIncreaseQuantity');
    const numberOfItems = newCartItem.querySelector('.numberOfItems');

    cartItemDecreaseQuantity.addEventListener('click', () => {
        globalThis.sumOfAllProducts -= price;
        updateProductSum();
        const num = Number(numberOfItems.textContent) - 1;
        const priceOfProducts = (price * num).toFixed(2);
        numberOfItems.innerHTML = num;
        if (numberOfItems.textContent < 1) {
            newCartItem.remove();
        } else {
            console.log(priceOfProducts);
            cartItemPrice.innerHTML = priceOfProducts;
            num;
        }
    });
    const cartItemIncreaseQuantityFunction = () => {
        globalThis.sumOfAllProducts += price;
        updateProductSum();
        const num = Number(numberOfItems.textContent) + 1;
        numberOfItems.innerHTML = num;
        const priceOfProducts = (price * num).toFixed(2);
        console.log(priceOfProducts);
        cartItemPrice.innerHTML = priceOfProducts;
    };
    cartItemIncreaseQuantity.addEventListener('click', () => {
        cartItemIncreaseQuantityFunction();
    });
    const productSumAmountItem = document.querySelector('.productSumAmountItem');
    return newCartItem;
};
