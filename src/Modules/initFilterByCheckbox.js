import { filterByCheckBox } from './checkboxFilter.js';
export const initFilterByCheckbox = ()=>{
    const pizzaCatgoryCheckbox = document.getElementById('pizzaCategory');
    const appetizerCatgoryCheckbox = document.getElementById('starterCategory');
    const drinksCatgoryCheckbox = document.getElementById('drinksCategory');
    
    pizzaCatgoryCheckbox.addEventListener('change', filterByCheckBox);
    appetizerCatgoryCheckbox.addEventListener('change', filterByCheckBox);
    drinksCatgoryCheckbox.addEventListener('change', filterByCheckBox);
}
