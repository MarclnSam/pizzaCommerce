/* import { Product } from './Modules/product.js'; */
import { products } from './Modules/listOfProducts.js';
import { clearCart } from './Modules/clearCart.js';
/* import { updateProductSum } from './Modules/updateProductSum.js'; */
import { renderProducts } from './Modules/menuProductRender.js';
import { initFilterEventListeners } from './Modules/initSortEventListeners.js';
import { initFilterByCheckbox } from './Modules/initFilterByCheckbox.js';
import { initFilterByPrice } from './Modules/initFilterByPrice.js';
import { initSorting } from './Modules/initSorting.js';
import { pageRouting } from './Modules/pageRouter.js';
import { popupFunctions } from './Modules/popup.js';


// inicializacja zmiennej globalnej sumy produków
globalThis.sumOfAllProducts = 0;

// Pierwsze renderowanie produktów
renderProducts(products);

// Gdy produkty zostały wyrenderowane, inicjujemy inne elementy
const productListMenu = document.querySelectorAll('.productElement');
initFilterEventListeners(productListMenu);

// Filtrowanie po checkboxach
initFilterByCheckbox();

// Filtrowanie po cenie
initFilterByPrice();

// Sortowanie
initSorting();
//Nawigacja
pageRouting();
const clearCartButton = document.querySelector('.clearCartButton');
clearCartButton.addEventListener('click', clearCart);
//popup
popupFunctions();

document.querySelector('.hamburger_menu_button').addEventListener('click', ()=>{
    alert('Funkcja na razie nie dostępna w trakcie dystrybucji');
})
localStorage.setItem('cart', JSON.stringify([])); // Utworzenie pustego koszyka
