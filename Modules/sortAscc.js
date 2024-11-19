import { getProductPrice } from "./getProductPrice.js";
export function bubbleSort(array) {
    const arrayLength = array.length;
    let swapped;

    // Zewnętrzna pętla, która przechodzi przez całą tablicę
    for (let i = 0; i < arrayLength - 1; i++) {
        swapped = false;

        // Wewnętrzna pętla do porównywania sąsiednich elementów

        for (let j = 0; j < arrayLength - 1 - i; j++) {
            if (getProductPrice(array[j]) > getProductPrice(array[j + 1])) {
                /*  console.log(getProductPrice(array[j]));
                console.log(getProductPrice(array[j+1])); */
                // Zamiana miejscami, jeśli elementy są w złej kolejności
                [array[j], array[j + 1]] = [array[j + 1], array[j]];
                swapped = true;
            }
        }

        // Jeśli w danym przebiegu nie dokonano żadnej zamiany, tablica jest już posortowana
        if (!swapped) {
            break;
        }
    }
    return array;
}
