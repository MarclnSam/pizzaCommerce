export const addToLocalStorageCart=(product)=> {
    let cart = JSON.parse(localStorage.getItem('cart')); // Pobranie koszyka z localStorage

    // Sprawdzamy, czy produkt już istnieje w koszyku
    let existingProduct = cart.find(item => item.id === product.id);
    if (existingProduct) {
        existingProduct.quantity += 1; // Jeśli istnieje, zwiększamy ilość
    } else {
        cart.push({...product, quantity: 1}); // Jeśli nie istnieje, dodajemy go z ilością 1
    }

    localStorage.setItem('cart', JSON.stringify(cart)); // Zapisujemy zaktualizowany koszyk w localStorage
}