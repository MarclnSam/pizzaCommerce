class Product {
    constructor(name, price, imageUrl, description, toppings, category) {
        this.name = name;
        this.price = price;
        this.imageUrl = imageUrl;
        this.description = description;
        this.toppings = toppings;
        this.category = category;
    }
    createProduct() {
        const menuElement = document.createElement('div');
        menuElement.classList.add('productElement');

        menuElement.innerHTML = `

            <div class="productImage" id="productImage">
            </div>
                
            <div class="productDescription">
                    <div class="productTitleandPrize">
                        <h3 class="productTitle">${this.name}</h3>
                        <h3 class="productPrize">$${this.price}</h3>
                    </div>
                    <hr></hr>
                    <div class="productDescriptionText">
                        <p>
                            ${this.description}
                        </p>
                        <h5 class="productCompositionTitle ">składniki:</h5>
                        <p class="productComposition">
                           ${this.toppings}
                        </p>
                    </div>
            </div>
        `;
        menuElement.querySelector('#productImage').style.backgroundImage = `url(${this.imageUrl})`;
        if (this.category === 'pizza') {
            menuElement.classList.add('categoryPizza');
        } else if (this.category === 'drink') {
            menuElement.classList.add('categoryDrink');
        } else if (this.category === 'appetizer') {
            menuElement.classList.add('categoryAppetizer');
        }
        return menuElement;
    }
    createProductOrderingElement() {
        const newDivElement = document.createElement('div');
        newDivElement.classList.add('completingProductElementContainer');

        newDivElement.innerHTML = `
        <div class="productImageContainer">
            <p class="productImagePlaceholder"></p>
        </div>
        <p class="productNameOrder">${this.name}</p>
        <div class="productPricingContainer">
            <p class="productPriceOrder">${this.price}</p>
            <div class="addToCartButton">Dodaj do Koszyka</div>
        </div>
        `;
        newDivElement.querySelector(
            '.productImagePlaceholder'
        ).style.backgroundImage = `url(${this.imageUrl})`;
        const addToCartButton = newDivElement.querySelector('.addToCartButton');
        addToCartButton.addEventListener('click', () => {
          alert('js');
          let i = this.createCartProduct();
          cartItemContainer.appendChild(i);

        });
        if (this.category === 'pizza') {
            newDivElement.classList.add('categoryPizza');
        } else if (this.category === 'drink') {
            newDivElement.classList.add('categoryDrink');
        } else if (this.category === 'appetizer') {
            newDivElement.classList.add('categoryAppetizer');
        }
        return newDivElement;
    }
    createCartProduct() {
        let newCartItem = document.createElement('div');
        newCartItem.classList.add('cartItem');
        newCartItem.innerHTML = `
            <div class="cartItemImage"></div>
            <div class="cartItemDetails">
                <h3 class="cartItemProductName">Zrodzony z Mgły</h3>
                <div class="containercsa">
                    <div class="cartItemQuantityControls">
                        <div class="cartItemDecreaseQuantity">-</div>
                        <div class="cartItemQuantity">
                            <span>1</span> szt.
                        </div>
                        <div class="cartItemIncreaseQuantity">+</div>
                    </div>
                    <div class="cartItemRemove">usuń</div>
                </div>
            </div>
            <div class="cartItemPrice">69.99$</div>
      `;
      return newCartItem;
    }
}

zrodzonyZMgły = new Product(
    'Zrodzony z Mgły',
    15.99,
    'img/ZrodzonyZMgły.jfif',
    'Pizza pełna mocy, jak Zrodzony z Mgły przemierzający nocne ulice Luthadelu. Ostra, wyrazista, z dodatkiem papryczek jalapeño, które wyzwalają prawdziwą siłę każdego kęsa',
    ' Sos pomidorowy, ser mozzarella, pepperoni, papryczki jalapeño, oliwki, świeża bazylia.',
    'pizza'
);

ostatniImperator = new Product(
    'Ostatni Imperator',
    29.99,
    'img/OstatniImperator.jfif',
    ' Pizza godna samego Ostatniego Imperatora. Luksusowe prosciutto i kremowa burrata przeniosą Cię do sal cesarskich, gdzie władza smaku jest niezachwiana. W każdej chwili możesz poczuć dominację smaku!',
    'Sos pomidorowy, ser burrata, plastry prosciutto, rukola, parmezan, balsamico.',
    'pizza'
);
allomanta = new Product(
    'Allomanta',
    13.99,
    'img/Alomanta.jfif',
    'Jak prawdziwy Allomanta potrafi manipulować metalami, tak ta pizza łączy w sobie wszystkie smaki – dymny sos BBQ, chrupiącego kurczaka i kremowy sos ranch. Pizza, która balansuje smaki z perfekcyjną precyzją!',
    ' Sos BBQ, ser cheddar, kurczak z grilla, cebula, kukurydza, sos ranch.',
    'pizza'
);

mistrzMetali = new Product(
    'Mistrz Metali',
    14.99,
    'img/MistrzMetali.jfif',
    'Potężna jak feruchemiczne talenty, pizza pełna mięsnych składników, które wzmacniają każdy kęs. Od boczku po kiełbasę, każdy składnik buduje tę wybuchową kombinację.',
    'Sos pomidorowy, ser mozzarella, boczek, kiełbasa, szynka, cebula, pieczarki.',
    'pizza'
);

straznikKredikShaw = new Product(
    'Strażnik Kredik Shaw',
    11.99,
    'img/StraznikZKredikShaw.jfif',
    'Strażnicy Kredik Shaw zawsze byli na straży, a ta pizza jest ich hołdem – wykwintna, z wyrazistą gorgonzolą i delikatną oliwą truflową. Każdy kęs to przypomnienie luksusu i tajemnicy pałacu imperatorskiego.',
    'Sos pomidorowy, ser mozzarella, gorgonzola, suszone pomidory, rukola, czosnek, oliwa truflowa.',
    'pizza'
);

hemalurgicznyKolekcjoner = new Product(
    'Hemalurgiczny Kolekcjoner',
    12.99,
    'img/HemulurgicznyKolekcjoner.jfif',
    ' Pizza o intensywnym smaku, łącząca różne składniki niczym hemalurgiczne kolce, każdy wzmacniając poprzedni. Pieczarki portobello i karczochy nadają tej pizzy głęboki, niemal mistyczny smak.',
    'Sos śmietanowy, ser mozzarella, ser kozi, pieczarki portobello, karczochy, rozmaryn, oliwki.',
    'pizza'
);

skaaZwycięzca = new Product(
    'Skaa Zwycięzca',
    9.99,
    'img/SkaaZwyciezca.jfif',
    'Prostota i wytrwałość tej pizzy oddają ducha ludu skaa. Wyraźne, pikantne salami z pieprzem, świeże warzywa i odrobina pomidorków koktajlowych tworzą nieskomplikowane, ale pełne energii danie.',
    ' Sos pomidorowy, ser mozzarella, salami, pieprz, cebula, papryka, pomidorki koktajlowe.',
    'pizza'
);

zwiadowcaMglisty = new Product(
    'Zwiadowca Mglisty',
    11.99,
    'img/ZwiadowcaMglisty.jfif',
    'Lekka jak powiew mgły, pizza pełna świeżych warzyw i wyrazistego sera feta. Subtelna, lecz pełna smaku – idealna dla tych, którzy wolą delikatniejsze kompozycje smakowe, ale nie boją się odkrywać nowych terenów smaku.',
    'Sos pesto, ser feta, szpinak, karczochy, grillowane bakłażany, orzechy włoskie.',
    'pizza'
);

eliksirAllomantyczny = new Product(
    'Eliksir Allomantyczny',
    3.99,
    'img/EliksirAllomantyczny.jfif',
    'Orzeźwiający napój cytrynowo-miętowy z dodatkiem gazowanej wody i lodu. Wyobraź sobie, że to mikstura, która dodaje Ci energii jak płynny metal dla Allomanty. Idealny na ciepłe dni, by pobudzić zmysły i dodać Ci siły na każdą przygodę!',
    'Cytryna, mięta, woda gazowana, kostki lodu, syrop cukrowy.',
    'drink'
);

krwawaMgla = new Product(
    'Krwawa Mgła',
    4.99,
    'img/KrwawaMgła.jfif',
    'Ciemnoczerwony koktajl, który odważnie łączy smak granatu z nutą chili, oddając tajemniczość mgieł Luthadelu. Ostry i orzeźwiający – doskonały wybór dla poszukiwaczy przygód.',
    'Sok z granatu, limonka, chili, woda gazowana, kostki lodu.',
    'drink'
);

zlotyPierscien = new Product(
    'Złoty Pierścień',
    5.99,
    'img/ZłotyPierscien.jfif',
    'Złocisty napój o słodkim i rozgrzewającym smaku ananasowo-mango, z delikatną nutą imbiru, przypominający potęgę złotego metalu. Idealny na chłodniejsze wieczory.',
    'Sok z ananasa, mango, imbir, woda gazowana, miód.',
    'drink'
);

mgielnyTonik = new Product(
    'Mgielny Tonik',
    2.99,
    'img/MgielnyTonik.jfif',
    'Ziołowy napój z delikatnymi nutami jałowca i lawendy, idealny na relaks po długim dniu w mglistym imperium. Delikatny i uspokajający.',
    'Czarna herbata, jałowiec, limonka, lawenda, syrop miodowy.',
    'drink'
);

ognisteKulkiZKredikShaw = new Product(
    'Ogniste Kulki z Kredik Shaw',
    6.99,
    'img/OgniteKulki.jfif',
    'Pikantne, serowe kulki z mozzarelli, obtoczone w ostrych papryczkach chili i smażone do złocistości. Rozgrzewają niczym tajemnice Kredik Shaw!',
    'Mozzarella, papryczki chili, bułka tarta, głęboki olej.',
    'appetizer'
);

skaanskieChlebki = new Product(
    'Skaańskie Chlebki',
    5.49,
    'img/SkaanskieChlebki.jfif',
    'Proste, cienkie chlebki skaa, podawane z trzema aromatycznymi sosami – czosnkowym, pomidorowym i ziołowym. Niezwykła prostota, która kryje bogactwo smaku.',
    'Chrupiące chlebki, sos czosnkowy, sos pomidorowy, sos ziołowy.',
    'appetizer'
);
hemalurgiczneSzpikulce = new Product(
    'Hemalurgiczne Szpikulce',
    8.99,
    'img/HemalurgiczneSzpikulce.jfif',
    'Szaszłyki z grillowanego kurczaka i warzyw, podawane z wyrazistym sosem miodowo-musztardowym. Każdy kęs to eksplozja smaku niczym moc ukryta w hemalurgicznych kolcach.',
    'Kurczak, papryka, cebula, cukinia, sos miodowo-musztardowy, grill.',
    'appetizer'
);
let listOfProductOrderingElement = document.getElementById('completingProductContainer');
const productsContainer = document.getElementById('productsContainer');
const products = [
    ostatniImperator,
    zrodzonyZMgły,
    allomanta,
    mistrzMetali,
    straznikKredikShaw,
    hemalurgicznyKolekcjoner,
    skaaZwycięzca,
    zwiadowcaMglisty,
    eliksirAllomantyczny,
    krwawaMgla,
    zlotyPierscien,
    mgielnyTonik,
    ognisteKulkiZKredikShaw,
    skaanskieChlebki,
    hemalurgiczneSzpikulce,
];
products.forEach((product) => {
    const productMenuElement = product.createProduct();
    productsContainer.appendChild(productMenuElement); /* Tworzymy Elementy w menu */
    const productOrderingElement = product.createProductOrderingElement();
    listOfProductOrderingElement.appendChild(
        productOrderingElement
    ); /* Tworzymy Elementy w zamawianiu */
});

const pizzaButton = document.getElementById('pizzaButton');
const drinkButton = document.getElementById('drinkButton');
const appetizerButton = document.getElementById('appetizerButton');
const everythinkButton = document.getElementById('everythinkButton');
productListMenu = document.querySelectorAll('.productElement');

const sort = function (sortedAtribut, productList) {
    if (sortedAtribut === 'pizza') {
        for (let i = 0; i < productList.length; i++) {
            if (productList[i].classList.contains('categoryAppetizer')) {
                productList[i].style.display = 'none';
            }
            if (productList[i].classList.contains('categoryDrink')) {
                productList[i].style.display = 'none';
            }
            if (productList[i].classList.contains('categoryPizza')) {
                productList[i].style.display = 'flex';
            }
        }
    } else if (sortedAtribut === 'drink') {
        for (let i = 0; i < productList.length; i++) {
            if (productList[i].classList.contains('categoryAppetizer')) {
                productList[i].style.display = 'none';
            }
            if (productList[i].classList.contains('categoryDrink')) {
                productList[i].style.display = 'flex';
            }
            if (productList[i].classList.contains('categoryPizza')) {
                productList[i].style.display = 'none';
            }
        }
    } else if (sortedAtribut === 'appetizer') {
        for (let i = 0; i < productList.length; i++) {
            if (productList[i].classList.contains('categoryAppetizer')) {
                productList[i].style.display = 'flex';
            }
            if (productList[i].classList.contains('categoryDrink')) {
                productList[i].style.display = 'none';
            }
            if (productList[i].classList.contains('categoryPizza')) {
                productList[i].style.display = 'none';
            }
        }
    } else if (sortedAtribut === 'everythink') {
        for (let i = 0; i < productList.length; i++) {
            if (productList[i].classList.contains('categoryAppetizer')) {
                productList[i].style.display = 'flex';
            }
            if (productList[i].classList.contains('categoryDrink')) {
                productList[i].style.display = 'flex';
            }
            if (productList[i].classList.contains('categoryPizza')) {
                productList[i].style.display = 'flex';
            }
        }
    }
};

pizzaButton.addEventListener('click', () => sort('pizza', productListMenu));
drinkButton.addEventListener('click', () => sort('drink', productListMenu));
appetizerButton.addEventListener('click', () => sort('appetizer', productListMenu));
everythinkButton.addEventListener('click', () => sort('everythink', productListMenu));

/*Tutaj rób zmień klikanie sortowannie kończa menu zamawiania.. */
const pizzaCatgoryCheckbox = document.getElementById('pizzaCategory');
const appetizerCatgoryCheckbox = document.getElementById('starterCategory');
const drinksCatgoryCheckbox = document.getElementById('drinksCategory');
const filterByCheckBox = () => {
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
const getProductPrice = (el) => {
    const productPrice = Number(
        el.querySelector('.productPricingContainer .productPriceOrder').textContent
    );
    return productPrice;
};
const priceFromInput = document.getElementById('priceFromInput');
const priceToInput = document.getElementById('priceToInput');
const filterByPrice = () => {
    const priceMin = Number(priceFromInput.value) || 0;
    const priceMax = Number(priceToInput.value) || Infinity;

    for (let i = 0; i < listOfProductOrderingElement.children.length; i++) {
        /* console.log(listOfProductOrderingElement.children[i]); */
        const productPrice = getProductPrice(listOfProductOrderingElement.children[i]);
        if (productPrice <= priceMin || productPrice >= priceMax) {
            listOfProductOrderingElement.children[i].style.display = 'none';
        } else {
            listOfProductOrderingElement.children[i].style.display = 'flex';
        }
    }
};

let sortingOptions = document.getElementById('sortingOptions');
const listOfProductOrderingElementArrayCopy = Array.from(listOfProductOrderingElement.children);

function bubbleSort(array) {
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

function reverseBubbleSort(array) {
    const arrayLength = array.length;
    let swapped;

    // Zewnętrzna pętla, która przechodzi przez całą tablicę
    for (let i = 0; i < arrayLength - 1; i++) {
        swapped = false;

        // Wewnętrzna pętla do porównywania sąsiednich elementów
        for (let j = 0; j < arrayLength - 1 - i; j++) {
            // Zamiana miejscami, jeśli elementy są w złej kolejności (malejąco)
            if (getProductPrice(array[j]) < getProductPrice(array[j + 1])) {
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

/* const array = [64, 34, 25, 12, 22, 11, 90];
console.log("Nieposortowana tablica:", array);
const sortedArray = bubbleSort(array);
console.log("Posortowana tablica:", sortedArray); */

const sortingOrderingList = () => {
    let sortingOptionsSelected = sortingOptions.value;
    let listOfProductOrderingElementArray = Array.from(listOfProductOrderingElement.children);

    let sortedListOfProductOrderingElementArray = [];

    if (sortingOptionsSelected === 'Rosnąco') {
        sortedListOfProductOrderingElementArray = bubbleSort(listOfProductOrderingElementArray);
    } else if (sortingOptionsSelected === 'Malejąco') {
        sortedListOfProductOrderingElementArray = reverseBubbleSort(
            listOfProductOrderingElementArray
        );
        console.log(sortedListOfProductOrderingElementArray);
    } else if (sortingOptionsSelected === 'Domyślnie') {
        sortedListOfProductOrderingElementArray = listOfProductOrderingElementArrayCopy;
        console.log(sortedListOfProductOrderingElementArray);
    }

    listOfProductOrderingElement.innerHTML = '';
    sortedListOfProductOrderingElementArray.forEach((el) => {
        listOfProductOrderingElement.appendChild(el);
    });
};

sortingOptions.addEventListener('change', sortingOrderingList);
priceFromInput.addEventListener('input', filterByPrice);
priceToInput.addEventListener('input', filterByPrice);
pizzaCatgoryCheckbox.addEventListener('click', filterByCheckBox);
appetizerCatgoryCheckbox.addEventListener('click', filterByCheckBox);
drinksCatgoryCheckbox.addEventListener('click', filterByCheckBox);

const zdj = document.querySelector('.productElement').lastElementChild;
console.log(zdj);
console.log(zdj.getBoundingClientRect());
console.log(zdj.scrollHeight);
console.log(zdj.clientHeight);

const cartItemContainer = document.getElementById('cartItemContainer');
