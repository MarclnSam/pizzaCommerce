import { getProductPrice } from "./getProductPrice.js";
export function reverseBubbleSort(array) {
    const arrayLength = array.length;
    let swapped;


    for (let i = 0; i < arrayLength - 1; i++) {
        swapped = false;

    
        for (let j = 0; j < arrayLength - 1 - i; j++) {
        
            if (getProductPrice(array[j]) < getProductPrice(array[j + 1])) {
                [array[j], array[j + 1]] = [array[j + 1], array[j]];
                swapped = true;
            }
        }


        if (!swapped) {
            break;
        }
    }
    return array;
}