import { Product } from "./product.js";
import zrodzonyZMglyImg from '../../img/ZrodzonyZMgły.jfif';
import ostatniImperatorImg from '../../img/OstatniImperator.jfif';
import allomantaImg from '../../img/Alomanta.jfif';
import mistrzMetaliImg from '../../img/MistrzMetali.jfif';
import straznikKredikShawImg from '../../img/StraznikZKredikShaw.jfif';
import hemalurgicznyKolekcjonerImg from '../../img/HemulurgicznyKolekcjoner.jfif';
import skaaZwyciezcaImg from '../../img/SkaaZwyciezca.jfif';
import zwiadowcaMglistyImg from '../../img/ZwiadowcaMglisty.jfif';
import eliksirAllomantycznyImg from '../../img/EliksirAllomantyczny.jfif';
import krwawaMglaImg from '../../img/KrwawaMgła.jfif';
import zlotyPierscienImg from '../../img/ZłotyPierscien.jfif';
import mgielnyTonikImg from '../../img/MgielnyTonik.jfif';
import ognisteKulkiZKredikShawImg from '../../img/OgniteKulki.jfif';
import skaanskieChlebkiImg from '../../img/SkaanskieChlebki.jfif';
import hemalurgiczneSzpikulceImg from '../../img/HemalurgiczneSzpikulce.jfif';


let zrodzonyZMgły = new Product(
    'Zrodzony z Mgły',
    15.99,
    zrodzonyZMglyImg,
    'Pizza pełna mocy, jak Zrodzony z Mgły przemierzający nocne ulice Luthadelu. Ostra, wyrazista, z dodatkiem papryczek jalapeño, które wyzwalają prawdziwą siłę każdego kęsa',
    ' Sos pomidorowy, ser mozzarella, pepperoni, papryczki jalapeño, oliwki, świeża bazylia.',
    'pizza'
);

let ostatniImperator = new Product(
    'Ostatni Imperator',
    29.99,
    ostatniImperatorImg,
    'Pizza godna samego Ostatniego Imperatora. Luksusowe prosciutto i kremowa burrata przeniosą Cię do sal cesarskich, gdzie władza smaku jest niezachwiana. W każdej chwili możesz poczuć dominację smaku!',
    'Sos pomidorowy, ser burrata, plastry prosciutto, rukola, parmezan, balsamico.',
    'pizza'
);

let allomanta = new Product(
    'Allomanta',
    13.99,
    allomantaImg,
    'Jak prawdziwy Allomanta potrafi manipulować metalami, tak ta pizza łączy w sobie wszystkie smaki – dymny sos BBQ, chrupiącego kurczaka i kremowy sos ranch. Pizza, która balansuje smaki z perfekcyjną precyzją!',
    ' Sos BBQ, ser cheddar, kurczak z grilla, cebula, kukurydza, sos ranch.',
    'pizza'
);

let mistrzMetali = new Product(
    'Mistrz Metali',
    14.99,
    mistrzMetaliImg,
    'Potężna jak feruchemiczne talenty, pizza pełna mięsnych składników, które wzmacniają każdy kęs. Od boczku po kiełbasę, każdy składnik buduje tę wybuchową kombinację.',
    'Sos pomidorowy, ser mozzarella, boczek, kiełbasa, szynka, cebula, pieczarki.',
    'pizza'
);

let straznikKredikShaw = new Product(
    'Strażnik Kredik Shaw',
    11.99,
    straznikKredikShawImg,
    'Strażnicy Kredik Shaw zawsze byli na straży, a ta pizza jest ich hołdem – wykwintna, z wyrazistą gorgonzolą i delikatną oliwą truflową. Każdy kęs to przypomnienie luksusu i tajemnicy pałacu imperatorskiego.',
    'Sos pomidorowy, ser mozzarella, gorgonzola, suszone pomidory, rukola, czosnek, oliwa truflowa.',
    'pizza'
);

let hemalurgicznyKolekcjoner = new Product(
    'Hemalurgiczny Kolekcjoner',
    12.99,
    hemalurgicznyKolekcjonerImg,
    'Pizza o intensywnym smaku, łącząca różne składniki niczym hemalurgiczne kolce, każdy wzmacniając poprzedni. Pieczarki portobello i karczochy nadają tej pizzy głęboki, niemal mistyczny smak.',
    'Sos śmietanowy, ser mozzarella, ser kozi, pieczarki portobello, karczochy, rozmaryn, oliwki.',
    'pizza'
);

let skaaZwycięzca = new Product(
    'Skaa Zwycięzca',
    9.99,
    skaaZwyciezcaImg,
    'Prostota i wytrwałość tej pizzy oddają ducha ludu skaa. Wyraźne, pikantne salami z pieprzem, świeże warzywa i odrobina pomidorków koktajlowych tworzą nieskomplikowane, ale pełne energii danie.',
    ' Sos pomidorowy, ser mozzarella, salami, pieprz, cebula, papryka, pomidorki koktajlowe.',
    'pizza'
);

let zwiadowcaMglisty = new Product(
    'Zwiadowca Mglisty',
    11.99,
    zwiadowcaMglistyImg,
    'Lekka jak powiew mgły, pizza pełna świeżych warzyw i wyrazistego sera feta. Subtelna, lecz pełna smaku – idealna dla tych, którzy wolą delikatniejsze kompozycje smakowe, ale nie boją się odkrywać nowych terenów smaku.',
    'Sos pesto, ser feta, szpinak, karczochy, grillowane bakłażany, orzechy włoskie.',
    'pizza'
);

let eliksirAllomantyczny = new Product(
    'Eliksir Allomantyczny',
    3.99,
    eliksirAllomantycznyImg,
    'Orzeźwiający napój cytrynowo-miętowy z dodatkiem gazowanej wody i lodu. Wyobraź sobie, że to mikstura, która dodaje Ci energii jak płynny metal dla Allomanty. Idealny na ciepłe dni, by pobudzić zmysły i dodać Ci siły na każdą przygodę!',
    'Cytryna, mięta, woda gazowana, kostki lodu, syrop cukrowy.',
    'drink'
);

let krwawaMgla = new Product(
    'Krwawa Mgła',
    4.99,
    krwawaMglaImg,
    'Ciemnoczerwony koktajl, który odważnie łączy smak granatu z nutą chili, oddając tajemniczość mgieł Luthadelu. Ostry i orzeźwiający – doskonały wybór dla poszukiwaczy przygód.',
    'Sok z granatu, limonka, chili, woda gazowana, kostki lodu.',
    'drink'
);

let zlotyPierscien = new Product(
    'Złoty Pierścień',
    5.99,
    zlotyPierscienImg,
    'Złocisty napój o słodkim i rozgrzewającym smaku ananasowo-mango, z delikatną nutą imbiru, przypominający potęgę złotego metalu. Idealny na chłodniejsze wieczory.',
    'Sok z ananasa, mango, imbir, woda gazowana, miód.',
    'drink'
);

let mgielnyTonik = new Product(
    'Mgielny Tonik',
    2.99,
    mgielnyTonikImg,
    'Ziołowy napój z delikatnymi nutami jałowca i lawendy, idealny na relaks po długim dniu w mglistym imperium. Delikatny i uspokajający.',
    'Czarna herbata, jałowiec, limonka, lawenda, syrop miodowy.',
    'drink'
);

let ognisteKulkiZKredikShaw = new Product(
    'Ogniste Kulki z Kredik Shaw',
    6.99,
    ognisteKulkiZKredikShawImg,
    'Pikantne, serowe kulki z mozzarelli, obtoczone w ostrych papryczkach chili i smażone do złocistości. Rozgrzewają niczym tajemnice Kredik Shaw!',
    'Mozzarella, papryczki chili, bułka tarta, głęboki olej.',
    'appetizer'
);

let skaanskieChlebki = new Product(
    'Skaańskie Chlebki',
    5.49,
    skaanskieChlebkiImg,
    'Proste, cienkie chlebki skaa, podawane z trzema aromatycznymi sosami – czosnkowym, pomidorowym i ziołowym. Niezwykła prostota, która kryje bogactwo smaku.',
    'Chrupiące chlebki, sos czosnkowy, sos pomidorowy, sos ziołowy.',
    'appetizer'
);

let hemalurgiczneSzpikulce = new Product(
    'Hemalurgiczne Szpikulce',
    8.99,
    hemalurgiczneSzpikulceImg,
    'Szaszłyki z grillowanego kurczaka i warzyw, podawane z wyrazistym sosem miodowo-musztardowym. Każdy kęs to eksplozja smaku niczym moc ukryta w hemalurgicznych kolcach.',
    'Kurczak, papryka, cebula, cukinia, sos miodowo-musztardowy, grill.',
    'appetizer'
);

 export const products = [
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