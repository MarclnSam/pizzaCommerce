import { sortingOrderingList } from './sorting.js';

export const initSorting = () => {
    let sortingOptions = document.getElementById('sortingOptions');
    let listOfProductOrderingElement = document.getElementById('completingProductContainer');
    let listOfProductOrderingElementArrayCopy = Array.from(listOfProductOrderingElement.children);

    let sortingOrderingListHandler = () => {
        if (sortingOptions.value === 'Domyślnie') {
            sortingOrderingList(sortingOptions,listOfProductOrderingElementArrayCopy);
        } else {
            sortingOrderingList(sortingOptions);
        }
      
    };
    sortingOptions.addEventListener('change', sortingOrderingListHandler);
};
