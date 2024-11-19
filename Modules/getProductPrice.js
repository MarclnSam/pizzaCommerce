export const getProductPrice = (el) => {
    const productPrice = Number(
        el.querySelector('.productPricingContainer .productPriceOrder').textContent
    );
    return productPrice;
};