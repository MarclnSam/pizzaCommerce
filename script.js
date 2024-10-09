class Product{
    constructor(name,price,imageUrl,description,toppings,category){
        this.name = name;
        this.price = price;
        this.imageUrl = imageUrl;
        this.description = description;
        this.toppings = toppings;
        this.category = category;
    }
    createProduct(){
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
        menuElement.querySelector('#productImage').style.backgroundImage=`url(${this.imageUrl})`;
        if (this.category === 'pizza'){
            menuElement.classList.add('categoryPizza');
        }else if (this.category === 'drink'){
            menuElement.classList.add('categoryDrink');
        }else if(this.category === 'appetizer'){
            menuElement.classList.add('categoryAppetizer');
        }
        return menuElement;

    }
    createProductOrderingElement(){
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
        `
        newDivElement.querySelector('.productImagePlaceholder').style.backgroundImage = `url(${this.imageUrl})`;
        const addToCartButton = newDivElement.querySelector('.addToCartButton');
        addToCartButton.addEventListener('click',()=>{});
        if (this.category === 'pizza'){
            newDivElement.classList.add('categoryPizza');
        }else if (this.category === 'drink'){
            newDivElement.classList.add('categoryDrink');
        }else if(this.category === 'appetizer'){
            newDivElement.classList.add('categoryAppetizer');
        }
        return newDivElement;
    }
   
}



zrodzonyZMgły = new Product('Zrodzony z Mgły',15.99,'img/ZrodzonyZMgły.jfif','Pizza pełna mocy, jak Zrodzony z Mgły przemierzający nocne ulice Luthadelu. Ostra, wyrazista, z dodatkiem papryczek jalapeño, które wyzwalają prawdziwą siłę każdego kęsa',' Sos pomidorowy, ser mozzarella, pepperoni, papryczki jalapeño, oliwki, świeża bazylia.', 'pizza');

ostatniImperator = new Product('Ostatni Imperator',29.99,'img/OstatniImperator.jfif',' Pizza godna samego Ostatniego Imperatora. Luksusowe prosciutto i kremowa burrata przeniosą Cię do sal cesarskich, gdzie władza smaku jest niezachwiana. W każdej chwili możesz poczuć dominację smaku!','Sos pomidorowy, ser burrata, plastry prosciutto, rukola, parmezan, balsamico.','pizza');
allomanta = new Product('Allomanta',13.99,'img/Alomanta.jfif','Jak prawdziwy Allomanta potrafi manipulować metalami, tak ta pizza łączy w sobie wszystkie smaki – dymny sos BBQ, chrupiącego kurczaka i kremowy sos ranch. Pizza, która balansuje smaki z perfekcyjną precyzją!',' Sos BBQ, ser cheddar, kurczak z grilla, cebula, kukurydza, sos ranch.','pizza');

mistrzMetali = new Product('Mistrz Metali', 14.99,'img/MistrzMetali.jfif','Potężna jak feruchemiczne talenty, pizza pełna mięsnych składników, które wzmacniają każdy kęs. Od boczku po kiełbasę, każdy składnik buduje tę wybuchową kombinację.','Sos pomidorowy, ser mozzarella, boczek, kiełbasa, szynka, cebula, pieczarki.','pizza');

straznikKredikShaw = new Product('Strażnik Kredik Shaw',11.99,'img/StraznikZKredikShaw.jfif', 'Strażnicy Kredik Shaw zawsze byli na straży, a ta pizza jest ich hołdem – wykwintna, z wyrazistą gorgonzolą i delikatną oliwą truflową. Każdy kęs to przypomnienie luksusu i tajemnicy pałacu imperatorskiego.','Sos pomidorowy, ser mozzarella, gorgonzola, suszone pomidory, rukola, czosnek, oliwa truflowa.','pizza');

hemalurgicznyKolekcjoner = new Product('Hemalurgiczny Kolekcjoner',12.99,'img/HemulurgicznyKolekcjoner.jfif', ' Pizza o intensywnym smaku, łącząca różne składniki niczym hemalurgiczne kolce, każdy wzmacniając poprzedni. Pieczarki portobello i karczochy nadają tej pizzy głęboki, niemal mistyczny smak.','Sos śmietanowy, ser mozzarella, ser kozi, pieczarki portobello, karczochy, rozmaryn, oliwki.','pizza');

skaaZwycięzca = new Product('Skaa Zwycięzca',9.99,'img/SkaaZwyciezca.jfif', 'Prostota i wytrwałość tej pizzy oddają ducha ludu skaa. Wyraźne, pikantne salami z pieprzem, świeże warzywa i odrobina pomidorków koktajlowych tworzą nieskomplikowane, ale pełne energii danie.',' Sos pomidorowy, ser mozzarella, salami, pieprz, cebula, papryka, pomidorki koktajlowe.','pizza');

zwiadowcaMglisty = new Product('Zwiadowca Mglisty',11.99,'img/ZwiadowcaMglisty.jfif','Lekka jak powiew mgły, pizza pełna świeżych warzyw i wyrazistego sera feta. Subtelna, lecz pełna smaku – idealna dla tych, którzy wolą delikatniejsze kompozycje smakowe, ale nie boją się odkrywać nowych terenów smaku.','Sos pesto, ser feta, szpinak, karczochy, grillowane bakłażany, orzechy włoskie.','pizza');

eliksirAllomantyczny = new Product('Eliksir Allomantyczny',3.99,'img/EliksirAllomantyczny.jfif','Orzeźwiający napój cytrynowo-miętowy z dodatkiem gazowanej wody i lodu. Wyobraź sobie, że to mikstura, która dodaje Ci energii jak płynny metal dla Allomanty. Idealny na ciepłe dni, by pobudzić zmysły i dodać Ci siły na każdą przygodę!','Cytryna, mięta, woda gazowana, kostki lodu, syrop cukrowy.','drink');

krwawaMgla = new Product('Krwawa Mgła',4.99,'img/KrwawaMgła.jfif','Ciemnoczerwony koktajl, który odważnie łączy smak granatu z nutą chili, oddając tajemniczość mgieł Luthadelu. Ostry i orzeźwiający – doskonały wybór dla poszukiwaczy przygód.','Sok z granatu, limonka, chili, woda gazowana, kostki lodu.','drink');

zlotyPierscien = new Product('Złoty Pierścień',5.99,'img/ZłotyPierscien.jfif','Złocisty napój o słodkim i rozgrzewającym smaku ananasowo-mango, z delikatną nutą imbiru, przypominający potęgę złotego metalu. Idealny na chłodniejsze wieczory.','Sok z ananasa, mango, imbir, woda gazowana, miód.','drink');

mgielnyTonik = new Product('Mgielny Tonik',2.99,'img/MgielnyTonik.jfif','Ziołowy napój z delikatnymi nutami jałowca i lawendy, idealny na relaks po długim dniu w mglistym imperium. Delikatny i uspokajający.','Czarna herbata, jałowiec, limonka, lawenda, syrop miodowy.','drink');

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
const listOfProductOrderingElement = document.getElementById('completingProductContainer');
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
    hemalurgiczneSzpikulce
];
products.forEach(product => {
    const productMenuElement = product.createProduct();
    productsContainer.appendChild(productMenuElement); /* Tworzymy Elementy w menu */
    const productOrderingElement = product.createProductOrderingElement();
    listOfProductOrderingElement.appendChild(productOrderingElement); /* Tworzymy Elementy w zamawianiu */
});

const pizzaButton = document.getElementById('pizzaButton');
const drinkButton = document.getElementById('drinkButton');
const appetizerButton = document.getElementById('appetizerButton');
const everythinkButton = document.getElementById('everythinkButton');
productListMenu= document.querySelectorAll('.productElement');

const sort = function(sortedAtribut,productList){
    if(sortedAtribut === 'pizza'){
        for(let i=0;i<productList.length;i++){
            if(productList[i].classList.contains('categoryAppetizer')){
                productList[i].style.display = 'none';
            }
            if(productList[i].classList.contains('categoryDrink')){
                productList[i].style.display = 'none';
            }
            if(productList[i].classList.contains('categoryPizza')){
                productList[i].style.display = 'flex';
            }
        }
    }
    else if(sortedAtribut === 'drink'){
        for(let i=0;i<productList.length;i++){
            if(productList[i].classList.contains('categoryAppetizer')){
                productList[i].style.display = 'none';
            }
            if(productList[i].classList.contains('categoryDrink')){
                productList[i].style.display = 'flex';
            }
            if(productList[i].classList.contains('categoryPizza')){
                productList[i].style.display = 'none';
            }
        }
    }
    else if(sortedAtribut === 'appetizer'){
        for(let i=0;i<productList.length;i++){
            if(productList[i].classList.contains('categoryAppetizer')){
                productList[i].style.display = 'flex';
            }
            if(productList[i].classList.contains('categoryDrink')){
                productList[i].style.display = 'none';
            }
            if(productList[i].classList.contains('categoryPizza')){
                productList[i].style.display = 'none';
            }
        }
    }
    else if(sortedAtribut === 'everythink'){
        for(let i=0;i<productList.length;i++){
            if(productList[i].classList.contains('categoryAppetizer')){
                productList[i].style.display = 'flex';
            }
            if(productList[i].classList.contains('categoryDrink')){
                productList[i].style.display = 'flex';
            }
            if(productList[i].classList.contains('categoryPizza')){
                productList[i].style.display = 'flex';
            }
        }
    }
}


pizzaButton.addEventListener('click',()=>sort('pizza',productListMenu));
drinkButton.addEventListener('click',()=>sort('drink',productListMenu));
appetizerButton.addEventListener('click',()=>sort('appetizer',productListMenu));
everythinkButton.addEventListener('click',()=>sort('everythink',productListMenu));

const pizzaCatgoryClicker = document.getElementById('pizzaCategory');
const appetizerCatgoryClicker = document.getElementById('starterCategory');
const drinksCatgoryClicker = document.getElementById('drinksCategory');

pizzaCatgoryClicker.addEventListener('click',()=>sort('pizza',listOfProductOrderingElement.children));
appetizerCatgoryClicker.addEventListener('click',()=>sort('appetizer',listOfProductOrderingElement.children));
drinksCatgoryClicker.addEventListener('click',()=>sort('drink',listOfProductOrderingElement.children));



/* console.log(productList);
function czyPizza(){
    for(let i=0;i<productList.length;i++){
        if(productList[i].classList.contains('categoryPizza')){
            productList[i].style.display = 'none';
        }
    }
} */
/* czyPizza(); */
/* console.log(productList[0].style.display = 'none'); */
/* pizzaButton.addEventListener('click',()=>{
    alert('jd');
}) */

    