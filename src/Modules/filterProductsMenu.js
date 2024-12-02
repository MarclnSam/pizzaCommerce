
export const sort = function (sortedAtribut, productList) {
    if (sortedAtribut === 'pizza') {
        for (let i = 0; i < productList.length; i++) {
            if (productList[i].classList.contains('categoryAppetizer')) {
                productList[i].style.display = 'none';
            }
            if (productList[i].classList.contains('categoryDrink')) {
                productList[i].style.display = 'none';
            }
            if (productList[i].classList.contains('categoryPizza')) {
                productList[i].style.display = 'flex';
            }
        }
    } else if (sortedAtribut === 'drink') {
        for (let i = 0; i < productList.length; i++) {
            if (productList[i].classList.contains('categoryAppetizer')) {
                productList[i].style.display = 'none';
            }
            if (productList[i].classList.contains('categoryDrink')) {
                productList[i].style.display = 'flex';
            }
            if (productList[i].classList.contains('categoryPizza')) {
                productList[i].style.display = 'none';
            }
        }
    } else if (sortedAtribut === 'appetizer') {
        for (let i = 0; i < productList.length; i++) {
            if (productList[i].classList.contains('categoryAppetizer')) {
                productList[i].style.display = 'flex';
            }
            if (productList[i].classList.contains('categoryDrink')) {
                productList[i].style.display = 'none';
            }
            if (productList[i].classList.contains('categoryPizza')) {
                productList[i].style.display = 'none';
            }
        }
    } else if (sortedAtribut === 'everythink') {
        for (let i = 0; i < productList.length; i++) {
            if (productList[i].classList.contains('categoryAppetizer')) {
                productList[i].style.display = 'flex';
            }
            if (productList[i].classList.contains('categoryDrink')) {
                productList[i].style.display = 'flex';
            }
            if (productList[i].classList.contains('categoryPizza')) {
                productList[i].style.display = 'flex';
            }
        }
    }
};
