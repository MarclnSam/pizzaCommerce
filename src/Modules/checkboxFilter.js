export const filterByCheckBox = () => {
    const pizzaCatgoryCheckbox = document.getElementById('pizzaCategory');
    const appetizerCatgoryCheckbox = document.getElementById('starterCategory');
    const drinksCatgoryCheckbox = document.getElementById('drinksCategory');
    let listOfProductOrderingElement = document.getElementById('completingProductContainer');
    for (let i = 0; i < listOfProductOrderingElement.children.length; i++) {
        if (listOfProductOrderingElement.children[i].classList.contains('categoryPizza')) {
            if (pizzaCatgoryCheckbox.checked) {
                listOfProductOrderingElement.children[i].style.display = 'flex';
            } else {
                listOfProductOrderingElement.children[i].style.display = 'none';
            }
        }
        if (listOfProductOrderingElement.children[i].classList.contains('categoryAppetizer')) {
            if (appetizerCatgoryCheckbox.checked) {
                listOfProductOrderingElement.children[i].style.display = 'flex';
            } else {
                listOfProductOrderingElement.children[i].style.display = 'none';
            }
        }
        if (listOfProductOrderingElement.children[i].classList.contains('categoryDrink')) {
            if (drinksCatgoryCheckbox.checked) {
                listOfProductOrderingElement.children[i].style.display = 'flex';
            } else {
                listOfProductOrderingElement.children[i].style.display = 'none';
            }
        }
        if (
            !drinksCatgoryCheckbox.checked &&
            !appetizerCatgoryCheckbox.checked &&
            !pizzaCatgoryCheckbox.checked
        ) {
            listOfProductOrderingElement.children[i].style.display = 'flex';
        }
    }
};
