import { sort } from "./filterProductsMenu.js";
export const initFilterEventListeners =(productListMenu)=>{

    const pizzaButton = document.getElementById('pizzaButton');
    const drinkButton = document.getElementById('drinkButton');
    const appetizerButton = document.getElementById('appetizerButton');
    const everythinkButton = document.getElementById('everythinkButton');
   
    pizzaButton.addEventListener('click', () => sort('pizza', productListMenu));
    drinkButton.addEventListener('click', () => sort('drink', productListMenu));
    appetizerButton.addEventListener('click', () => sort('appetizer', productListMenu));
    everythinkButton.addEventListener('click', () => sort('everythink', productListMenu));
    
}
