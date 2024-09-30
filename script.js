class Product{
    constructor(name,price,imageUrl,description,toppings){
        this.name = name;
        this.price = price;
        this.imageUrl = imageUrl;
        this.description = description;
        this.toppings = toppings;
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
        return menuElement;
    }
}
zrodzonyZMgły = new Product('Zrodzony z Mgły',15.99,'img/ZrodzonyZMgły.jfif','Pizza pełna mocy, jak Zrodzony z Mgły przemierzający nocne ulice Luthadelu. Ostra, wyrazista, z dodatkiem papryczek jalapeño, które wyzwalają prawdziwą siłę każdego kęsa',' Sos pomidorowy, ser mozzarella, pepperoni, papryczki jalapeño, oliwki, świeża bazylia.');

ostatniImperator = new Product('Ostatni Imperator',29.99,'img/OstatniImperator.jfif',' Pizza godna samego Ostatniego Imperatora. Luksusowe prosciutto i kremowa burrata przeniosą Cię do sal cesarskich, gdzie władza smaku jest niezachwiana. W każdej chwili możesz poczuć dominację smaku!','Sos pomidorowy, ser burrata, plastry prosciutto, rukola, parmezan, balsamico.');
allomanta = new Product('Allomanta',13.99,'img/Alomanta.jfif','Jak prawdziwy Allomanta potrafi manipulować metalami, tak ta pizza łączy w sobie wszystkie smaki – dymny sos BBQ, chrupiącego kurczaka i kremowy sos ranch. Pizza, która balansuje smaki z perfekcyjną precyzją!',' Sos BBQ, ser cheddar, kurczak z grilla, cebula, kukurydza, sos ranch.');

mistrzMetali = new Product('Mistrz Metali', 14.99,'img/MistrzMetali.jfif','Potężna jak feruchemiczne talenty, pizza pełna mięsnych składników, które wzmacniają każdy kęs. Od boczku po kiełbasę, każdy składnik buduje tę wybuchową kombinację.','Sos pomidorowy, ser mozzarella, boczek, kiełbasa, szynka, cebula, pieczarki.');

straznikKredikShaw = new Product('Strażnik Kredik Shaw',11.99,'img/StraznikZKredikShaw.jfif', 'Strażnicy Kredik Shaw zawsze byli na straży, a ta pizza jest ich hołdem – wykwintna, z wyrazistą gorgonzolą i delikatną oliwą truflową. Każdy kęs to przypomnienie luksusu i tajemnicy pałacu imperatorskiego.','Sos pomidorowy, ser mozzarella, gorgonzola, suszone pomidory, rukola, czosnek, oliwa truflowa.');

hemalurgicznyKolekcjoner = new Product('Hemalurgiczny Kolekcjoner',12.99,'img/HemulurgicznyKolekcjoner.jfif', ' Pizza o intensywnym smaku, łącząca różne składniki niczym hemalurgiczne kolce, każdy wzmacniając poprzedni. Pieczarki portobello i karczochy nadają tej pizzy głęboki, niemal mistyczny smak.','Sos śmietanowy, ser mozzarella, ser kozi, pieczarki portobello, karczochy, rozmaryn, oliwki.');

skaaZwycięzca = new Product('Skaa Zwycięzca',9.99,'img/SkaaZwyciezca.jfif', 'Prostota i wytrwałość tej pizzy oddają ducha ludu skaa. Wyraźne, pikantne salami z pieprzem, świeże warzywa i odrobina pomidorków koktajlowych tworzą nieskomplikowane, ale pełne energii danie.',' Sos pomidorowy, ser mozzarella, salami, pieprz, cebula, papryka, pomidorki koktajlowe.');

zwiadowcaMglisty = new Product('Zwiadowca Mglisty',11.99,'img/ZwiadowcaMglisty.jfif','Lekka jak powiew mgły, pizza pełna świeżych warzyw i wyrazistego sera feta. Subtelna, lecz pełna smaku – idealna dla tych, którzy wolą delikatniejsze kompozycje smakowe, ale nie boją się odkrywać nowych terenów smaku.','Sos pesto, ser feta, szpinak, karczochy, grillowane bakłażany, orzechy włoskie.')


zrodzonyZMgłyElement = zrodzonyZMgły.createProduct();
ostatniImperatorElement = ostatniImperator.createProduct();
allomantaElement = allomanta.createProduct();
mistrzMetaliElement = mistrzMetali.createProduct();
straznikKredikShawElement = straznikKredikShaw.createProduct();
hemalurgicznyKolekcjonerElement = hemalurgicznyKolekcjoner.createProduct();
skaaZwycięzcaElement = skaaZwycięzca.createProduct();
zwiadowcaMglistyElement = zwiadowcaMglisty.createProduct();

const productsContainer = document.getElementById('productsContainer');
productsContainer.appendChild(zrodzonyZMgłyElement);
productsContainer.appendChild(ostatniImperatorElement);
productsContainer.appendChild(allomantaElement);
productsContainer.appendChild(mistrzMetaliElement);
productsContainer.appendChild(straznikKredikShawElement);
productsContainer.appendChild(hemalurgicznyKolekcjonerElement);
productsContainer.appendChild(skaaZwycięzcaElement);
productsContainer.appendChild(zwiadowcaMglistyElement);

