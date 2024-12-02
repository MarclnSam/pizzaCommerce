export const updateProductSum = ()=>{
    let productSumAmountItem = document.querySelector('.productSumAmountItem');
    productSumAmountItem.innerHTML = globalThis.sumOfAllProducts.toFixed(2);
}