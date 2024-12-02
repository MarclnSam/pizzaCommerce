import { addToLocalStorageCart } from './addToLocalStorage.js';
import { createProductFunction } from './createProductDomElement.js';
import { createProductOrderingFunction } from './createProductOrderingFunction.js';
import { createCartProductFunction } from './createCartProductFunction.js';
import { products } from './listOfProducts.js';

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
       
        const menuElement = createProductFunction(
            this.name,
            this.price,
            this.imageUrl,
            this.description,
            this.toppings,
            this.category
        );
        return menuElement;
    }
    createProductOrderingElement() {
        const newDivElement = createProductOrderingFunction(
            this.name,
            this.price,
            this.imageUrl,
            this.description,
            this.toppings,
            this.category
        )
        return newDivElement;
    }
    
}
