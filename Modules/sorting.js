
import { bubbleSort } from "./sortAscc.js";
import { reverseBubbleSort } from "./sortDesc.js";

    

export const sortingOrderingList = (sortingOptions,listOfProductOrderingElementArrayCopy) => {
    let listOfProductOrderingElement = document.getElementById('completingProductContainer');
    
    
    let sortingOptionsSelected = sortingOptions.value;
    let listOfProductOrderingElementArray = Array.from(listOfProductOrderingElement.children);

    let sortedListOfProductOrderingElementArray = [];

    if (sortingOptionsSelected === 'Rosnąco') {
        sortedListOfProductOrderingElementArray = bubbleSort(listOfProductOrderingElementArray);
    } else if (sortingOptionsSelected === 'Malejąco') {
        sortedListOfProductOrderingElementArray = reverseBubbleSort(
            listOfProductOrderingElementArray
        );
 
    } else if (sortingOptionsSelected === 'Domyślnie') {
        sortedListOfProductOrderingElementArray = listOfProductOrderingElementArrayCopy;
      
    }

    listOfProductOrderingElement.innerHTML = '';
    sortedListOfProductOrderingElementArray.forEach((el) => {
        listOfProductOrderingElement.appendChild(el);
    });
};


