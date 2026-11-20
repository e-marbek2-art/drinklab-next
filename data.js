/*
 * DRINKLAB – DATA.JS
 *
 * INNHALDSLISTE
 * 1. DRIKKAR OG ANIMASJONSSTEG (31 drikkar)
 * 2. INGREDIENSARTIKLAR (96 stoff)
 * 3. NYNORSKE SIDETEKSTAR
 * 4. KJELDER TIL PRODUKTBILETA
 *
 * SLIK FINN DU FRAM
 * Bruk Ctrl + F: "DRIKK 1.01:" finn Red Bull, "STOFF 2.01:" finn
 * første ingrediens, og "DEL 3:" finn språkordboka. Sjå registeret under.
 * ID-ar koplar saman drikkar, artiklar og animasjonssteg; dei blir brukte
 * av script.js og er dei same på engelsk og nynorsk.
 *
 * FELTA I EIN DRIKKE – seks nummererte underdelar per drikke
 * .1 id/name/category: identitet; size/sizeUnit: behaldarstorleik.
 *    image: produktbilete i bilete/; accent/tint: dekorfargar.
 *    liquid: sluttfarge; carbonated: kullsyre; source/label/note: kjelder.
 * .2 ingredients: ID-ar til ingrediensane som er knytte til drikka.
 * .3 stages: tidslinja for animation.js. start/duration er sekund;
 *    delivery er t.d. powder eller pour; color er illustrasjonsfargen.
 *    layer er visuell lagstorleik, ikkje målt ingrediensmengde.
 *    ingredientIds/learn koplar steget til ingrediensartiklar.
 * .4 nutrition: rows er næringsradene. per100 gjeld referenceUnit;
 *    perServing gjeld behaldaren. massRows er eventuelle vektbaserte tal.
 *    null betyr ukjent mengd; 0 betyr oppgitt null.
 * .5 contexts: forklaringar og atterhald som gjeld denne drikka.
 * .6 discoveries/recipeDiscoveries: ID-ar til vidare utforsking.
 *
 * FELTA I EIN INGREDIENSARTIKKEL
 * what: kva stoffet er; body: verknad i kroppen; good: fordelar;
 * bad: ulemper; evidence: dokumentasjon og atterhald; sources: kjelder.
 * areas: relevante kroppsdelar/område; nn: den nynorske artikkelen.
 *
 * SPRÅKORDBOKA
 * Engelsk originaltekst står til venstre, nynorsk tekst til høgre.
 * Behald plasshaldarar som {drink}, {count} og {speed} i omsetjingane.
 *
 * REGISTER – DRIKKAR
 * 1.01 Red Bull Original [red-bull]
 * 1.02 Monster Original [monster]
 * 1.03 Battery Original [battery]
 * 1.04 Burn Original [burn]
 * 1.05 Red Bull Sugarfree [red-bull-sugarfree]
 * 1.06 Pepsi [pepsi]
 * 1.07 Coca-Cola Original [coca-cola]
 * 1.08 Sprite [sprite]
 * 1.09 Powerade Mountain Blast [powerade-blue]
 * 1.10 Urge Original [urge]
 * 1.11 Fanta Orange [fanta-orange]
 * 1.12 Lipton Ice Tea Lemon [lipton-ice-tea]
 * 1.13 Gatorade Orange [gatorade-orange]
 * 1.14 Litago Original [litago-original]
 * 1.15 TINE IsKaffe Original Cappuccino [tine-iskaffe]
 * 1.16 Villa Original [villa]
 * 1.17 Mozell Original [mozell]
 * 1.18 Ringnes Julebrus (Red) [ringnes-julebrus]
 * 1.19 Hamar & Lillehammer Julebrus (Brown) [hamar-julebrus]
 * 1.20 Sunniva isTe Fersken [sunniva-iste]
 * 1.21 FUN Light Bringebær [fun-light-bringebaer]
 * 1.22 Farris Bris Sitron & Sitrongress [farris-bris]
 * 1.23 Fanta Exotic [fanta-exotic]
 * 1.24 7UP Original [7up-original]
 * 1.25 Capri-Sun Multivitamin [capri-sun-multivitamin]
 * 1.26 NOCCO Caribbean [nocco-caribbean]
 * 1.27 Biola Blåbær [biola-blueberry]
 * 1.28 Black filter coffee [filter-coffee]
 * 1.29 Black tea [black-tea]
 * 1.30 100% orange juice [orange-juice]
 * 1.31 Plain sparkling water [sparkling-water]
 *
 * REGISTER – INGREDIENSAR
 * 2.01 Koffein [caffeine]
 * 2.02 Taurin [taurine]
 * 2.03 Sukrose og glukose [sugar]
 * 2.04 Niacin · vitamin B3 [b3]
 * 2.05 Pantotensyre · B5 [b5]
 * 2.06 Pyridoksin · vitamin B6 [b6]
 * 2.07 Kobalamin · vitamin B12 [b12]
 * 2.08 Sukralose og acesulfam K [sweeteners]
 * 2.09 Sitronsyre og surheitsregulerande middel [acidity]
 * 2.10 Panax ginseng [ginseng]
 * 2.11 Inositol [inositol]
 * 2.12 Sorbinsyre og benzosyre [preservatives]
 * 2.13 Vatn [water]
 * 2.14 Karbondioksid [carbonation]
 * 2.15 Riboflavin · vitamin B2 [b2]
 * 2.16 Sukralose [sucralose]
 * 2.17 Fosforsyre [phosphoric-acid]
 * 2.18 Aromastoff [flavourings]
 * 2.19 Fargestoff og karamell [colours]
 * 2.20 Stoff trekte ut av kaffi [coffee-solids]
 * 2.21 Stoff trekte ut av te [tea-solids]
 * 2.22 Vitamin C · askorbinsyre [vitamin-c]
 * 2.23 Fruktstoff og fruktkjøt [fruit-solids]
 * 2.24 Naturleg førekomande fruktsyrer [fruit-acids]
 * 2.25 Glukose · dekstrose [glucose]
 * 2.26 Fruktose [fructose]
 * 2.27 Sitronsyre [citric-acid]
 * 2.28 Natriumsitrat [sodium-citrate]
 * 2.29 Kaliumsitrat [potassium-citrate]
 * 2.30 Maltodekstrin [maltodextrin]
 * 2.31 Guaranafrøekstrakt [guarana]
 * 2.32 Kaffiekstrakt [coffee-extract]
 * 2.33 Natriumbenzoat [sodium-benzoate]
 * 2.34 Kaliumsorbat [potassium-sorbate]
 * 2.35 Sulfittammoniakkaramell [caramel]
 * 2.36 Aspartam [aspartame]
 * 2.37 Acesulfamkalium [acesulfame-k]
 * 2.38 Gummi arabikum · akasiegummi [gum-arabic]
 * 2.39 Glyserolesterar av treharpiks [wood-rosin-esters]
 * 2.40 Briljantblå FCF [brilliant-blue]
 * 2.41 Betakaroten [beta-carotene]
 * 2.42 Johannesbrødkjernemjøl [locust-bean-gum]
 * 2.43 Appelsinjuice frå konsentrat [orange-concentrate]
 * 2.44 Lettmjølk [milk]
 * 2.45 Kakaopulver [cocoa]
 * 2.46 Mysepulver [whey-powder]
 * 2.47 Gellangummi [gellan-gum]
 * 2.48 Guargummi [guar-gum]
 * 2.49 Eplesyre [malic-acid]
 * 2.50 Sitronjuice frå konsentrat [lemon-concentrate]
 * 2.51 Steviolglykosid [steviol-glycosides]
 * 2.52 Salt · natriumklorid [salt]
 * 2.53 Monokaliumfosfat [monopotassium-phosphate]
 * 2.54 Sukroseacetatisobutyrat [sucrose-acetate-isobutyrate]
 * 2.55 Paraoransje FCF [sunset-yellow]
 * 2.56 Frukt- og grønsakskonsentrat [fruit-veg-concentrates]
 * 2.57 Eple- og druejuice frå konsentrat [apple-grape-juice]
 * 2.58 Ferskenjuice frå konsentrat [peach-concentrate]
 * 2.59 Sulfittkaramellfarge [sulfite-caramel]
 * 2.60 Antocyan [anthocyanins]
 * 2.61 L-karnitin L-tartrat [l-carnitine-tartrate]
 * 2.62 D-glukuronolakton [glucuronolactone]
 * 2.63 Sorbinsyre [sorbic-acid]
 * 2.64 Benzosyre [benzoic-acid]
 * 2.65 Glukosesirup [glucose-syrup]
 * 2.66 Natriumkarbonat [sodium-carbonates]
 * 2.67 Magnesiumkarbonat [magnesium-carbonates]
 * 2.68 Karamellfarge · klasse ikkje oppgitt [caramel-unspecified]
 * 2.69 Teobromin [theobromine]
 * 2.70 Kakaoflavanolar · epikatekin [cocoa-flavanols]
 * 2.71 Laktose [lactose]
 * 2.72 Kaseinprotein [casein]
 * 2.73 Klorogensyrer [chlorogenic-acids]
 * 2.74 Trigonellin [trigonelline]
 * 2.75 Melanoidinar i kaffi [coffee-melanoidins]
 * 2.76 L-teanin [l-theanine]
 * 2.77 Teaflavinar [theaflavins]
 * 2.78 Hesperidin [hesperidin]
 * 2.79 L-leucin [l-leucine]
 * 2.80 L-valin [l-valine]
 * 2.81 L-isoleucin [l-isoleucine]
 * 2.82 Ekstrakt av grøn te [green-tea-extract]
 * 2.83 Folsyre · vitamin B9 [folic-acid]
 * 2.84 Biotin · vitamin B7 [biotin]
 * 2.85 Vitamin D [vitamin-d]
 * 2.86 Vitamin E [vitamin-e]
 * 2.87 Blanda fruktjuicar frå konsentrat [mixed-fruit-juice]
 * 2.88 Sitrusekstrakt [citrus-extract]
 * 2.89 Blåbærjuice frå konsentrat [blueberry-juice]
 * 2.90 Solbærjuice frå konsentrat [blackcurrant-juice]
 * 2.91 Pektin [pectins]
 * 2.92 Startkulturar for yoghurt [yoghurt-cultures]
 * 2.93 LA-5-kultur [culture-la5]
 * 2.94 BB-12-kultur [culture-bb12]
 * 2.95 LGG-kultur [culture-lgg]
 * 2.96 Glukose–fruktosesirup [glucose-fructose-syrup]
 *
 * REGISTER – SPRÅKTEKSTAR
 * 3.1 Drikkeforklaringar, kjeldemerknader og lengre tekstar
 * 3.2 Ingrediensnamn, mengder, einingar og produktnamn
 * 3.3 Tal og faste storleikar
 * 3.4 Kategoriar, datoar og manglande verdiar
 * 3.5 Navigasjon, framside, drikkesider og ingrediensbibliotek
 * 3.6 Om DrinkLab og kjeldeprinsipp
 * 3.7 Behaldarar, tilsetjingstypar og fleire avspelingstekstar
 */

// =====================================================================
// DEL 1: DRIKKAR OG ANIMASJONSSTEG
// =====================================================================

window.DRINKLAB_DRINKS = [
  // ── DRIKK 1.01: Red Bull Original [red-bull] ──
  {
    // 1.01.1 – Namn, bilete, mengder, fargar og kjelder
    "id": "red-bull",
    "name": "Red Bull Original",
    "category": "Energy",
    "size": 250,
    "caffeine": 80,
    "sugar": "27 g",
    "calories": "115",
    "image": "/redbull-original.png",
    "accent": "#2463eb",
    "tint": "#edf3ff",
    "liquid": "#d7a42c",
    "carbonated": true,
    "description": "A familiar can. A closer look at taurine, caffeine and the B-vitamin blend.",
    "source": "https://www.redbull.com/no-no/energydrink/products/red-bull-energy-drink-ingredients-list",
    "label": "https://www.encon.no/red-bull-energidrikk-250-ml/5637146308.p",
    "reviewed": "4 November 2026",
    "note": "Norwegian brand nutrition values and the linked Encon ingredient list. The label names sodium carbonates and magnesium carbonates at family level, and caramel without a class; no more specific form is guessed. Riboflavin is also listed as a colour, with no separate vitamin dose. The brand’s 80 mg caffeine takes precedence over the label’s rounded percentage. Taurine is shown as 1,000 mg per 250 ml serving. Layer sizes are illustrative.",
    // 1.01.2 – Ingrediens-ID-ar for denne drikka
    "ingredients": [
      "water",
      "carbonation",
      "sugar",
      "glucose",
      "citric-acid",
      "taurine",
      "sodium-carbonates",
      "magnesium-carbonates",
      "caffeine",
      "b3",
      "b5",
      "b6",
      "b12",
      "flavourings",
      "caramel-unspecified",
      "b2"
    ],
    // 1.01.3 – Animasjonssteg – start og duration er i sekund
    "stages": [
      {
        "kind": "water",
        "delivery": "pour",
        "name": "Water",
        "short": "Water",
        "amount": "The foundation",
        "unit": "A clear starting point",
        "description": "A clear first pour settles into the glass. The separate layers that follow are enlarged teaching colours, not real concentrations or a factory recipe.",
        "color": "#c9e7f1",
        "duration": 10,
        "formula": "H₂O",
        "ingredientIds": [
          "water"
        ],
        "learn": "water",
        "layer": 1.25,
        "start": 0
      },
      {
        "kind": "carbonation",
        "delivery": "gas",
        "name": "Carbon dioxide",
        "short": "CO₂",
        "amount": "Quantity undisclosed",
        "unit": "Listed ingredient · individual dose not published",
        "description": "Carbon dioxide disperses through the water. Small bubbles rise along the glass; the gas does not form a separate liquid layer in the real drink.",
        "color": "#d9f1f6",
        "duration": 4.5,
        "formula": "CO₂",
        "ingredientIds": [
          "carbonation"
        ],
        "learn": "carbonation",
        "layer": 0.045,
        "start": 10
      },
      {
        "kind": "sugar",
        "delivery": "crystals",
        "name": "Sugar",
        "short": "Sugar",
        "amount": "27 g",
        "unit": "Combined sugars per 250 ml · see source note",
        "description": "Carbohydrate that gives a drink sweetness and calories. Your body breaks sugars down and uses them for fuel. Bacteria in your mouth also use sugar and make acids that can damage your teeth.",
        "color": "#eee6c8",
        "duration": 7,
        "formula": "Sweetness + energy",
        "ingredientIds": [
          "sugar"
        ],
        "learn": "sugar",
        "layer": 0.27,
        "start": 14.5
      },
      {
        "kind": "glucose",
        "delivery": "crystals",
        "name": "Glucose · dextrose",
        "short": "Dextrose",
        "amount": "Part of 27 g",
        "unit": "Combined sugars per 250 ml · individual split undisclosed",
        "description": "A simple sugar. Dextrose is another name for the same sugar. Glucose enters your blood after digestion. Your cells use it for energy. Bacteria in your mouth can also use it and make acids that damage teeth.",
        "color": "#f1ddab",
        "duration": 5.3,
        "formula": "C₆H₁₂O₆",
        "ingredientIds": [
          "glucose"
        ],
        "learn": "glucose",
        "layer": 0.18,
        "start": 21.5
      },
      {
        "kind": "citric-acid",
        "delivery": "crystals",
        "name": "Citric acid",
        "short": "Citric acid",
        "amount": "Quantity undisclosed",
        "unit": "Listed ingredient · individual dose not published",
        "description": "An acid that makes drinks taste sharp or sour. Its code is E330. Acidic drinks can wear away tooth enamel and may trigger heartburn. Citric acid’s job in the recipe is flavour and acidity, not making you more alert.",
        "color": "#c6d992",
        "duration": 5.3,
        "formula": "E330 · C₆H₈O₇",
        "ingredientIds": [
          "citric-acid"
        ],
        "learn": "citric-acid",
        "layer": 0.11,
        "start": 26.8
      },
      {
        "kind": "taurine",
        "delivery": "powder",
        "name": "Taurine",
        "short": "Taurine",
        "amount": "1,000 mg",
        "unit": "Calculated from the label · per 250 ml",
        "description": "A substance your body makes and also gets from some foods. Your cells use taurine to help control water and calcium. Calcium signals help muscles work. Having this normal role does not prove that extra taurine in a drink improves your muscles or heart.",
        "color": "#c8b1e1",
        "duration": 5.3,
        "formula": "C₂H₇NO₃S",
        "ingredientIds": [
          "taurine"
        ],
        "learn": "taurine",
        "layer": 0.15,
        "start": 32.1
      },
      {
        "kind": "sodium-carbonates",
        "delivery": "powder",
        "name": "Sodium carbonates",
        "short": "E500",
        "amount": "Quantity undisclosed",
        "unit": "Listed ingredient · individual dose not published",
        "description": "A family of salts used to control acidity; the label does not specify one exact form. They help balance the drink’s acidity. A familiar example in this family is sodium bicarbonate, but that exact form is not inferred from this label.",
        "color": "#b8d5cb",
        "duration": 5.3,
        "formula": "E500 family",
        "ingredientIds": [
          "sodium-carbonates"
        ],
        "learn": "sodium-carbonates",
        "layer": 0.08,
        "start": 37.4
      },
      {
        "kind": "magnesium-carbonates",
        "delivery": "powder",
        "name": "Magnesium carbonates",
        "short": "E504",
        "amount": "Quantity undisclosed",
        "unit": "Listed ingredient · individual dose not published",
        "description": "Magnesium salts used as acidity regulators in the selected Red Bull recipe. Here their role is to help control the formula. A magnesium-containing ingredient does not tell you that the drink supplies a meaningful magnesium dose.",
        "color": "#bed4b2",
        "duration": 5.3,
        "formula": "E504 family",
        "ingredientIds": [
          "magnesium-carbonates"
        ],
        "learn": "magnesium-carbonates",
        "layer": 0.08,
        "start": 42.7
      },
      {
        "kind": "caffeine",
        "delivery": "powder",
        "name": "Caffeine",
        "short": "Caffeine",
        "amount": "80 mg",
        "unit": "Total caffeine per 250 ml",
        "description": "The ingredient that can make you feel more awake. In your brain, caffeine blocks some of the signals that make you feel sleepy. Too much can also make your heart race and keep you awake at night.",
        "color": "#8cbbeb",
        "duration": 5.3,
        "formula": "C₈H₁₀N₄O₂",
        "ingredientIds": [
          "caffeine"
        ],
        "learn": "caffeine",
        "layer": 0.13,
        "start": 48
      },
      {
        "kind": "b3",
        "delivery": "powder",
        "name": "Niacin · vitamin B3",
        "short": "B3",
        "amount": "16 mg",
        "unit": "Per 250 ml · see nutrition source below",
        "description": "Vitamin B3, usually called niacin on the label. Your cells use B3 to help turn food into usable energy. It supports normal skin and nerve function. It is not a stimulant.",
        "color": "#efd397",
        "duration": 5.3,
        "formula": "B3",
        "ingredientIds": [
          "b3"
        ],
        "learn": "b3",
        "layer": 0.065,
        "start": 53.3
      },
      {
        "kind": "b5",
        "delivery": "powder",
        "name": "Pantothenic acid · B5",
        "short": "B5",
        "amount": "5 mg",
        "unit": "Per 250 ml · see nutrition source below",
        "description": "Vitamin B5, also called pantothenic acid. Your cells use B5 when making and breaking down fats and releasing energy from food. It does not directly wake up your brain.",
        "color": "#efbd82",
        "duration": 5.3,
        "formula": "B5",
        "ingredientIds": [
          "b5"
        ],
        "learn": "b5",
        "layer": 0.065,
        "start": 58.6
      },
      {
        "kind": "b6",
        "delivery": "powder",
        "name": "Pyridoxine · vitamin B6",
        "short": "B6",
        "amount": "0.5 mg",
        "unit": "Per 250 ml · see nutrition source below",
        "description": "Vitamin B6, sometimes listed as pyridoxine hydrochloride. B6 helps your body use protein and make haemoglobin, the part of red blood cells that carries oxygen. It also helps nerves work normally.",
        "color": "#ebd779",
        "duration": 5.3,
        "formula": "B6",
        "ingredientIds": [
          "b6"
        ],
        "learn": "b6",
        "layer": 0.065,
        "start": 63.9
      },
      {
        "kind": "b12",
        "delivery": "powder",
        "name": "Cobalamin · vitamin B12",
        "short": "B12",
        "amount": "Quantity undisclosed",
        "unit": "Listed ingredient · individual dose not published",
        "description": "Vitamin B12, sometimes listed as cyanocobalamin. B12 helps keep nerve cells healthy and helps make red blood cells. Too little can cause tiredness and nerve problems.",
        "color": "#dda19f",
        "duration": 5.3,
        "formula": "B12",
        "ingredientIds": [
          "b12"
        ],
        "learn": "b12",
        "layer": 0.065,
        "start": 69.2
      },
      {
        "kind": "flavourings",
        "delivery": "droplets",
        "name": "Flavourings",
        "short": "Flavourings",
        "amount": "Quantity undisclosed",
        "unit": "Listed ingredient · individual dose not published",
        "description": "Ingredients that create a drink’s taste and smell. Your nose and taste buds detect them. “Flavourings” describes a mixture, not one substance with one predictable effect on your organs.",
        "color": "#d7bca2",
        "duration": 5.3,
        "formula": "Taste + aroma",
        "ingredientIds": [
          "flavourings"
        ],
        "learn": "flavourings",
        "layer": 0.09,
        "start": 74.5
      },
      {
        "kind": "caramel-unspecified",
        "delivery": "droplets",
        "name": "Caramel colour · class undisclosed",
        "short": "Caramel",
        "amount": "Quantity undisclosed",
        "unit": "Listed ingredient · individual dose not published",
        "description": "A caramel colour listed without its exact class in the selected Red Bull information. It contributes colour. The word caramel does not tell us which manufacturing class is present or give a nutritional benefit.",
        "color": "#b58a51",
        "duration": 5.3,
        "formula": "Caramel family",
        "ingredientIds": [
          "caramel-unspecified"
        ],
        "learn": "caramel-unspecified",
        "layer": 0.08,
        "start": 79.8
      },
      {
        "kind": "b2",
        "delivery": "powder",
        "name": "Riboflavin · colour and vitamin B2",
        "short": "B2",
        "amount": "Quantity undisclosed",
        "unit": "Listed as a colour · separate nutrient amount not published",
        "description": "Vitamin B2, also called riboflavin. Your body uses B2 to release energy from food. It also helps keep your eyes, skin and nerves working normally.",
        "color": "#e3d25b",
        "duration": 5.3,
        "formula": "B2",
        "ingredientIds": [
          "b2"
        ],
        "learn": "b2",
        "layer": 0.065,
        "start": 85.1
      },
      {
        "kind": "final",
        "delivery": "pour",
        "name": "From layers to a drink.",
        "short": "Mix together",
        "amount": "250",
        "unit": "ml · Red Bull Original",
        "description": "The teaching colours curl into one another as the spoon stirs. They gradually become this drink’s representative colour. Colour, viscosity and light transmission remain visual approximations.",
        "color": "#d7a42c",
        "duration": 14,
        "formula": "One complete mixture",
        "ingredientIds": [],
        "layer": 0,
        "start": 90.4
      }
    ],
    // 1.01.4 – Næring – per100 er referansemengd, perServing er éin behaldar
    "nutrition": {
      "rows": [
        {
          "id": "kcal",
          "name": "Energy",
          "unit": "kcal",
          "per100": 46,
          "perServing": 115
        },
        {
          "id": "kj",
          "name": "Energy",
          "unit": "kJ",
          "per100": 195,
          "perServing": 487.5
        },
        {
          "id": "caffeine",
          "name": "Caffeine",
          "unit": "mg",
          "guide": "caffeine",
          "per100": 32,
          "perServing": 80
        },
        {
          "id": "carbs",
          "name": "Carbohydrate",
          "unit": "g",
          "per100": 11,
          "perServing": 27.5
        },
        {
          "id": "sugars",
          "name": "of which sugars",
          "unit": "g",
          "guide": "sugar",
          "per100": 11,
          "perServing": 27
        },
        {
          "id": "fat",
          "name": "Fat",
          "unit": "g",
          "per100": 0,
          "perServing": 0
        },
        {
          "id": "saturates",
          "name": "of which saturates",
          "unit": "g",
          "per100": 0,
          "perServing": 0
        },
        {
          "id": "protein",
          "name": "Protein",
          "unit": "g",
          "per100": 0,
          "perServing": 0
        },
        {
          "id": "salt",
          "name": "Salt",
          "unit": "g",
          "per100": 0.1,
          "perServing": 0.25
        },
        {
          "id": "taurine",
          "name": "Taurine",
          "unit": "mg",
          "guide": "taurine",
          "per100": 400,
          "perServing": 1000
        },
        {
          "id": "b2",
          "name": "Vitamin B2",
          "unit": "mg",
          "guide": "b2",
          "per100": null,
          "perServing": null
        },
        {
          "id": "b3",
          "name": "Niacin · B3",
          "unit": "mg",
          "guide": "b3",
          "per100": 6.4,
          "perServing": 16
        },
        {
          "id": "b5",
          "name": "Pantothenic acid · B5",
          "unit": "mg",
          "guide": "b5",
          "per100": 2,
          "perServing": 5
        },
        {
          "id": "b6",
          "name": "Vitamin B6",
          "unit": "mg",
          "guide": "b6",
          "per100": 0.2,
          "perServing": 0.5
        },
        {
          "id": "b12",
          "name": "Vitamin B12",
          "unit": "µg",
          "guide": "b12",
          "per100": null,
          "perServing": null
        }
      ],
      "massRows": [],
      "container": "can",
      "referenceUnit": "ml",
      "note": "The brand also gives 27 g sugar per can. That package figure and the rounded 11 g per 100 ml do not scale exactly. B12 is listed, but the source page has an unclear unit, so its amount is not shown.",
      "source": "https://www.redbull.com/no-no/energydrink/products/red-bull-energy-drink-ingredients-list"
    },
    // 1.01.5 – Drikkespesifikke forklaringar og atterhald
    "contexts": [],
    // 1.01.6 – Lenkjer til vidare utforsking av ingrediensane
    "discoveries": [
      "sodium-carbonates",
      "magnesium-carbonates",
      "caramel-unspecified",
      "taurine",
      "citric-acid",
      "b3",
      "b5",
      "b6",
      "b12",
      "b2"
    ],
    "recipeDiscoveries": [
      "sodium-carbonates",
      "magnesium-carbonates",
      "caramel-unspecified",
      "taurine",
      "citric-acid",
      "b3",
      "b5",
      "b6",
      "b12",
      "b2"
    ]
  },
  // ── DRIKK 1.02: Monster Original [monster] ──
  {
    // 1.02.1 – Namn, bilete, mengder, fargar og kjelder
    "id": "monster",
    "name": "Monster Original",
    "category": "Energy",
    "size": 500,
    "caffeine": 160,
    "sugar": "Not verified",
    "calories": "237",
    "image": "/monster-original.png",
    "accent": "#578c26",
    "tint": "#f1f5e9",
    "liquid": "#b9a42e",
    "carbonated": true,
    "description": "L-carnitine L-tartrate, D-glucuronolactone and two named preservatives. An extended formula to explore.",
    "source": "https://www.monsterenergy.com/no-no/energy-drinks/monster-energy/originale-green/",
    "reviewed": "4 November 2026",
    "label": "https://www.xxl.no/monster-monster-energy-energidrikke/p/1263215_1_Style",
    "note": "The Norwegian brand confirms volume, caffeine and calories. The detailed recipe follows the linked Norwegian XXL listing, including L-carnitine L-tartrate (0.04%), D-glucuronolactone, guarana and named preservatives. Check your current can because formulations can change. The brand’s 160 mg caffeine total takes precedence over the retailer’s rounded 0.03%; extracts do not create a second caffeine dose. Recipe percentages are not converted into measured milligrams.",
    // 1.02.2 – Ingrediens-ID-ar for denne drikka
    "ingredients": [
      "water",
      "carbonation",
      "sugar",
      "glucose-syrup",
      "citric-acid",
      "flavourings",
      "taurine",
      "sodium-citrate",
      "ginseng",
      "l-carnitine-tartrate",
      "caffeine",
      "sorbic-acid",
      "benzoic-acid",
      "anthocyanins",
      "b2",
      "b3",
      "b6",
      "b12",
      "salt",
      "glucuronolactone",
      "guarana",
      "inositol",
      "sucralose"
    ],
    // 1.02.3 – Animasjonssteg – start og duration er i sekund
    "stages": [
      {
        "kind": "water",
        "delivery": "pour",
        "name": "Water",
        "short": "Water",
        "amount": "The foundation",
        "unit": "A clear starting point",
        "description": "A clear first pour settles into the glass. The separate layers that follow are enlarged teaching colours, not real concentrations or a factory recipe.",
        "color": "#c9e7f1",
        "duration": 10,
        "formula": "H₂O",
        "ingredientIds": [
          "water"
        ],
        "learn": "water",
        "layer": 1.25,
        "start": 0
      },
      {
        "kind": "carbonation",
        "delivery": "gas",
        "name": "Carbon dioxide",
        "short": "CO₂",
        "amount": "Quantity undisclosed",
        "unit": "Norwegian retailer recipe · check the current can",
        "description": "Carbon dioxide disperses through the water. Small bubbles rise along the glass; the gas does not form a separate liquid layer in the real drink.",
        "color": "#d9f1f6",
        "duration": 4.5,
        "formula": "CO₂",
        "ingredientIds": [
          "carbonation"
        ],
        "learn": "carbonation",
        "layer": 0.045,
        "start": 10
      },
      {
        "kind": "sugar",
        "delivery": "crystals",
        "name": "Sugar",
        "short": "Sugar",
        "amount": "Not verified",
        "unit": "Combined sugars per 500 ml · see source note",
        "description": "Carbohydrate that gives a drink sweetness and calories. Your body breaks sugars down and uses them for fuel. Bacteria in your mouth also use sugar and make acids that can damage your teeth.",
        "color": "#eee6c8",
        "duration": 7,
        "formula": "Sweetness + energy",
        "ingredientIds": [
          "sugar"
        ],
        "learn": "sugar",
        "layer": 0.27,
        "start": 14.5
      },
      {
        "kind": "glucose-syrup",
        "delivery": "extract",
        "name": "Glucose syrup",
        "short": "Glucose syrup",
        "amount": "Part of total sugars",
        "unit": "Individual syrup amount not published",
        "description": "A syrup containing glucose and other carbohydrates made by breaking down starch. Its sugars supply energy and contribute to the one total sugars figure. It is a syrup mixture, rather than a separate dose of pure dextrose powder.",
        "color": "#e4cc95",
        "duration": 5.3,
        "formula": "A starch-derived sugar mixture",
        "ingredientIds": [
          "glucose-syrup"
        ],
        "learn": "glucose-syrup",
        "layer": 0.18,
        "start": 21.5
      },
      {
        "kind": "citric-acid",
        "delivery": "crystals",
        "name": "Citric acid",
        "short": "Citric acid",
        "amount": "Quantity undisclosed",
        "unit": "Norwegian retailer recipe · check the current can",
        "description": "An acid that makes drinks taste sharp or sour. Its code is E330. Acidic drinks can wear away tooth enamel and may trigger heartburn. Citric acid’s job in the recipe is flavour and acidity, not making you more alert.",
        "color": "#c6d992",
        "duration": 5.3,
        "formula": "E330 · C₆H₈O₇",
        "ingredientIds": [
          "citric-acid"
        ],
        "learn": "citric-acid",
        "layer": 0.11,
        "start": 26.8
      },
      {
        "kind": "flavourings",
        "delivery": "droplets",
        "name": "Flavourings",
        "short": "Flavourings",
        "amount": "Quantity undisclosed",
        "unit": "Norwegian retailer recipe · check the current can",
        "description": "Ingredients that create a drink’s taste and smell. Your nose and taste buds detect them. “Flavourings” describes a mixture, not one substance with one predictable effect on your organs.",
        "color": "#d7bca2",
        "duration": 5.3,
        "formula": "Taste + aroma",
        "ingredientIds": [
          "flavourings"
        ],
        "learn": "flavourings",
        "layer": 0.09,
        "start": 32.1
      },
      {
        "kind": "taurine",
        "delivery": "powder",
        "name": "Taurine",
        "short": "Taurine",
        "amount": "Quantity undisclosed",
        "unit": "Norwegian retailer recipe · check the current can",
        "description": "A substance your body makes and also gets from some foods. Your cells use taurine to help control water and calcium. Calcium signals help muscles work. Having this normal role does not prove that extra taurine in a drink improves your muscles or heart.",
        "color": "#c8b1e1",
        "duration": 5.3,
        "formula": "C₂H₇NO₃S",
        "ingredientIds": [
          "taurine"
        ],
        "learn": "taurine",
        "layer": 0.15,
        "start": 37.4
      },
      {
        "kind": "sodium-citrate",
        "delivery": "powder",
        "name": "Sodium citrate",
        "short": "E331",
        "amount": "Quantity undisclosed",
        "unit": "Norwegian retailer recipe · check the current can",
        "description": "A salt related to citric acid. Its code is E331. It helps control the drink’s acidity and adds some sodium. The ingredient name does not tell us how much sodium the bottle supplies.",
        "color": "#bbd8aa",
        "duration": 5.3,
        "formula": "E331 · citrate salts",
        "ingredientIds": [
          "sodium-citrate"
        ],
        "learn": "sodium-citrate",
        "layer": 0.09,
        "start": 42.7
      },
      {
        "kind": "ginseng",
        "delivery": "extract",
        "name": "Panax ginseng",
        "short": "Ginseng",
        "amount": "Quantity undisclosed",
        "unit": "Norwegian retailer recipe · check the current can",
        "description": "An extract from Asian ginseng root. Some studies test ginseng for tiredness. It can also make sleeping harder and interact with medicines. An energy drink may use a very different amount from a study.",
        "color": "#a4ba85",
        "duration": 5.3,
        "formula": "Ginsenosides",
        "ingredientIds": [
          "ginseng"
        ],
        "learn": "ginseng",
        "layer": 0.12,
        "start": 48
      },
      {
        "kind": "l-carnitine-tartrate",
        "delivery": "powder",
        "name": "L-carnitine L-tartrate",
        "short": "L-carnitine",
        "amount": "0.04% in recipe",
        "unit": "Retailer label percentage · not a measured pure-carnitine dose",
        "description": "A form of carnitine listed in the Norwegian retailer recipe for Monster Original. Your cells use carnitine to move fatty acids into the parts of cells that release energy. Most healthy people make enough themselves.",
        "color": "#b5c6e5",
        "duration": 5.3,
        "formula": "Carnitine + tartrate",
        "ingredientIds": [
          "l-carnitine-tartrate"
        ],
        "learn": "l-carnitine-tartrate",
        "layer": 0.1,
        "start": 53.3
      },
      {
        "kind": "caffeine",
        "delivery": "powder",
        "name": "Caffeine",
        "short": "Caffeine",
        "amount": "160 mg",
        "unit": "Total caffeine per 500 ml",
        "description": "Caffeine is counted once: the total already includes contributions from guarana and other extracts. This separate blue layer explains the stimulant, without adding another caffeine dose.",
        "color": "#8cbbeb",
        "duration": 5.3,
        "formula": "C₈H₁₀N₄O₂",
        "ingredientIds": [
          "caffeine"
        ],
        "learn": "caffeine",
        "layer": 0.13,
        "start": 58.6
      },
      {
        "kind": "sorbic-acid",
        "delivery": "powder",
        "name": "Sorbic acid",
        "short": "E200",
        "amount": "Quantity undisclosed",
        "unit": "Norwegian retailer recipe · check the current can",
        "description": "A preservative used to limit spoilage, distinct from potassium sorbate. Its job is to protect the drink in the container. It does not stimulate your brain or supply a nutritional benefit to your organs.",
        "color": "#b8cbb7",
        "duration": 5.3,
        "formula": "E200",
        "ingredientIds": [
          "sorbic-acid"
        ],
        "learn": "sorbic-acid",
        "layer": 0.08,
        "start": 63.9
      },
      {
        "kind": "benzoic-acid",
        "delivery": "powder",
        "name": "Benzoic acid",
        "short": "E210",
        "amount": "Quantity undisclosed",
        "unit": "Norwegian retailer recipe · check the current can",
        "description": "A preservative named in the Monster recipe, distinct from sodium benzoate. It helps preserve the product. E210 is benzoic acid; E211 is its sodium salt. Neither is added as a nutrient for a particular organ.",
        "color": "#b7c8d9",
        "duration": 5.3,
        "formula": "E210",
        "ingredientIds": [
          "benzoic-acid"
        ],
        "learn": "benzoic-acid",
        "layer": 0.08,
        "start": 69.2
      },
      {
        "kind": "anthocyanins",
        "delivery": "droplets",
        "name": "Anthocyanins",
        "short": "E163",
        "amount": "Quantity undisclosed",
        "unit": "Norwegian retailer recipe · check the current can",
        "description": "A family of plant pigments that can give food and drinks red, purple or blue shades. In these recipes they are added for colour. A plant pigment in a drink is not evidence that the bottle protects your heart or brain.",
        "color": "#c34876",
        "duration": 5.3,
        "formula": "E163 · plant pigments",
        "ingredientIds": [
          "anthocyanins"
        ],
        "learn": "anthocyanins",
        "layer": 0.1,
        "start": 74.5
      },
      {
        "kind": "b2",
        "delivery": "powder",
        "name": "Riboflavin · vitamin B2",
        "short": "B2",
        "amount": "Quantity undisclosed",
        "unit": "Norwegian retailer recipe · check the current can",
        "description": "Vitamin B2, also called riboflavin. Your body uses B2 to release energy from food. It also helps keep your eyes, skin and nerves working normally.",
        "color": "#e3d25b",
        "duration": 5.3,
        "formula": "B2",
        "ingredientIds": [
          "b2"
        ],
        "learn": "b2",
        "layer": 0.065,
        "start": 79.8
      },
      {
        "kind": "b3",
        "delivery": "powder",
        "name": "Niacin · vitamin B3",
        "short": "B3",
        "amount": "Quantity undisclosed",
        "unit": "Norwegian retailer recipe · check the current can",
        "description": "Vitamin B3, usually called niacin on the label. Your cells use B3 to help turn food into usable energy. It supports normal skin and nerve function. It is not a stimulant.",
        "color": "#efd397",
        "duration": 5.3,
        "formula": "B3",
        "ingredientIds": [
          "b3"
        ],
        "learn": "b3",
        "layer": 0.065,
        "start": 85.1
      },
      {
        "kind": "b6",
        "delivery": "powder",
        "name": "Pyridoxine · vitamin B6",
        "short": "B6",
        "amount": "Quantity undisclosed",
        "unit": "Norwegian retailer recipe · check the current can",
        "description": "Vitamin B6, sometimes listed as pyridoxine hydrochloride. B6 helps your body use protein and make haemoglobin, the part of red blood cells that carries oxygen. It also helps nerves work normally.",
        "color": "#ebd779",
        "duration": 5.3,
        "formula": "B6",
        "ingredientIds": [
          "b6"
        ],
        "learn": "b6",
        "layer": 0.065,
        "start": 90.4
      },
      {
        "kind": "b12",
        "delivery": "powder",
        "name": "Cobalamin · vitamin B12",
        "short": "B12",
        "amount": "Quantity undisclosed",
        "unit": "Norwegian retailer recipe · check the current can",
        "description": "Vitamin B12, sometimes listed as cyanocobalamin. B12 helps keep nerve cells healthy and helps make red blood cells. Too little can cause tiredness and nerve problems.",
        "color": "#dda19f",
        "duration": 5.3,
        "formula": "B12",
        "ingredientIds": [
          "b12"
        ],
        "learn": "b12",
        "layer": 0.065,
        "start": 95.7
      },
      {
        "kind": "salt",
        "delivery": "crystals",
        "name": "Salt · sodium chloride",
        "short": "Salt",
        "amount": "Quantity undisclosed",
        "unit": "Norwegian retailer recipe · check the current can",
        "description": "Table salt is sodium chloride. Sodium and chloride are electrolytes. Your nerves and muscles use electrolytes, and sodium helps control fluid balance. Too much salt overall can raise blood pressure.",
        "color": "#dae1e9",
        "duration": 5.3,
        "formula": "NaCl",
        "ingredientIds": [
          "salt"
        ],
        "learn": "salt",
        "layer": 0.09,
        "start": 101
      },
      {
        "kind": "glucuronolactone",
        "delivery": "powder",
        "name": "D-glucuronolactone",
        "short": "D-glucurono…",
        "amount": "Quantity undisclosed",
        "unit": "Norwegian retailer recipe · check the current can",
        "description": "A compound related to glucose metabolism, added to some energy drinks. It is related to substances your body already makes. That does not mean drinking more improves your liver’s work or removes toxins.",
        "color": "#d2b5d9",
        "duration": 5.3,
        "formula": "C₆H₈O₆",
        "ingredientIds": [
          "glucuronolactone"
        ],
        "learn": "glucuronolactone",
        "layer": 0.1,
        "start": 106.3
      },
      {
        "kind": "guarana",
        "delivery": "extract",
        "name": "Guarana seed extract",
        "short": "Guarana",
        "amount": "Quantity undisclosed",
        "unit": "Norwegian retailer recipe · check the current can",
        "description": "A seed extract that contains caffeine. Its caffeine contributes to the drink’s total; “plant-derived” does not make the stimulant milder or remove its sleep effects. The extract amount is not an extra caffeine amount.",
        "color": "#ad8862",
        "duration": 5.3,
        "formula": "Paullinia cupana",
        "ingredientIds": [
          "guarana"
        ],
        "learn": "guarana",
        "layer": 0.1,
        "start": 111.6
      },
      {
        "kind": "inositol",
        "delivery": "powder",
        "name": "Inositol",
        "short": "Inositol",
        "amount": "Quantity undisclosed",
        "unit": "Norwegian retailer recipe · check the current can",
        "description": "A substance your body makes and uses inside cells. Inositol helps cells pass messages inside them. It is sometimes called B8, but it is not an essential B vitamin.",
        "color": "#c6bde4",
        "duration": 5.3,
        "formula": "C₆H₁₂O₆",
        "ingredientIds": [
          "inositol"
        ],
        "learn": "inositol",
        "layer": 0.1,
        "start": 116.9
      },
      {
        "kind": "sucralose",
        "delivery": "powder",
        "name": "Sucralose",
        "short": "Sucralose",
        "amount": "Quantity undisclosed",
        "unit": "Norwegian retailer recipe · check the current can",
        "description": "An intense sweetener also called E955. Sucralose gives a sweet taste using much less ingredient than sugar. It does not act as a stimulant in your brain.",
        "color": "#a0d6d3",
        "duration": 5.3,
        "formula": "E955",
        "ingredientIds": [
          "sucralose"
        ],
        "learn": "sucralose",
        "layer": 0.09,
        "start": 122.2
      },
      {
        "kind": "final",
        "delivery": "pour",
        "name": "From layers to a drink.",
        "short": "Mix together",
        "amount": "500",
        "unit": "ml · Monster Original",
        "description": "The teaching colours curl into one another as the spoon stirs. They gradually become this drink’s representative colour. Colour, viscosity and light transmission remain visual approximations.",
        "color": "#b9a42e",
        "duration": 14,
        "formula": "One complete mixture",
        "ingredientIds": [],
        "layer": 0,
        "start": 127.5
      }
    ],
    // 1.02.4 – Næring – per100 er referansemengd, perServing er éin behaldar
    "nutrition": {
      "rows": [
        {
          "id": "kcal",
          "name": "Energy",
          "unit": "kcal",
          "per100": 47.4,
          "perServing": 237
        },
        {
          "id": "kj",
          "name": "Energy",
          "unit": "kJ",
          "per100": 201.2,
          "perServing": 1006
        },
        {
          "id": "caffeine",
          "name": "Caffeine",
          "unit": "mg",
          "guide": "caffeine",
          "per100": 32,
          "perServing": 160
        },
        {
          "id": "carbs",
          "name": "Carbohydrate",
          "unit": "g",
          "per100": null,
          "perServing": null
        },
        {
          "id": "sugars",
          "name": "of which sugars",
          "unit": "g",
          "guide": "sugar",
          "per100": null,
          "perServing": null
        },
        {
          "id": "fat",
          "name": "Fat",
          "unit": "g",
          "per100": 0,
          "perServing": 0
        },
        {
          "id": "saturates",
          "name": "of which saturates",
          "unit": "g",
          "per100": null,
          "perServing": null
        },
        {
          "id": "protein",
          "name": "Protein",
          "unit": "g",
          "per100": null,
          "perServing": null
        },
        {
          "id": "salt",
          "name": "Salt",
          "unit": "g",
          "per100": null,
          "perServing": null
        },
        {
          "id": "taurine",
          "name": "Taurine",
          "unit": "mg",
          "guide": "taurine",
          "per100": null,
          "perServing": null
        },
        {
          "id": "b2",
          "name": "Vitamin B2",
          "unit": "mg",
          "guide": "b2",
          "per100": null,
          "perServing": null
        },
        {
          "id": "b3",
          "name": "Niacin · B3",
          "unit": "mg",
          "guide": "b3",
          "per100": null,
          "perServing": null
        },
        {
          "id": "b6",
          "name": "Vitamin B6",
          "unit": "mg",
          "guide": "b6",
          "per100": null,
          "perServing": null
        },
        {
          "id": "b12",
          "name": "Vitamin B12",
          "unit": "µg",
          "guide": "b12",
          "per100": null,
          "perServing": null
        }
      ],
      "massRows": [],
      "container": "can",
      "referenceUnit": "ml",
      "note": "The Norwegian brand page confirms energy, fat and caffeine. The other amounts are not published there, so they are left unknown instead of taken from a different-market can.",
      "source": "https://www.monsterenergy.com/no-no/energy-drinks/monster-energy/originale-green/"
    },
    // 1.02.5 – Drikkespesifikke forklaringar og atterhald
    "contexts": [],
    // 1.02.6 – Lenkjer til vidare utforsking av ingrediensane
    "discoveries": [
      "l-carnitine-tartrate",
      "glucuronolactone",
      "anthocyanins",
      "inositol",
      "ginseng",
      "sorbic-acid",
      "benzoic-acid",
      "guarana",
      "sucralose",
      "sodium-citrate",
      "taurine",
      "glucose-syrup",
      "citric-acid",
      "b2",
      "b3",
      "b6",
      "b12"
    ],
    "recipeDiscoveries": [
      "l-carnitine-tartrate",
      "glucuronolactone",
      "anthocyanins",
      "inositol",
      "ginseng",
      "sorbic-acid",
      "benzoic-acid",
      "guarana",
      "sucralose",
      "sodium-citrate",
      "taurine",
      "glucose-syrup",
      "citric-acid",
      "b2",
      "b3",
      "b6",
      "b12"
    ]
  },
  // ── DRIKK 1.03: Battery Original [battery] ──
  {
    // 1.03.1 – Namn, bilete, mengder, fargar og kjelder
    "id": "battery",
    "name": "Battery Original",
    "category": "Energy",
    "size": 500,
    "caffeine": 160,
    "sugar": "55 g",
    "calories": "250",
    "image": "/battery-original.png",
    "accent": "#c39327",
    "tint": "#faf4e6",
    "liquid": "#b87519",
    "carbonated": true,
    "description": "Guarana, coffee extract and maltodextrin. Follow a more intricate energy formula.",
    "source": "https://www.ringnes.no/produkter/battery/battery-original/",
    "label": "https://www.ringnes.no/produkter/battery/battery-original/",
    "note": "Norwegian Ringnes recipe. Per 500 ml: 160 mg total caffeine, including the extracts, and 2,000 mg taurine, calculated from 320 mg/l and 4,000 mg/l. Sugar and calories scaled from 11 g and 50 kcal per 100 ml. Extracts do not add a second caffeine total.",
    // 1.03.2 – Ingrediens-ID-ar for denne drikka
    "ingredients": [
      "water",
      "carbonation",
      "sugar",
      "citric-acid",
      "maltodextrin",
      "taurine",
      "flavourings",
      "coffee-extract",
      "guarana",
      "caffeine",
      "sodium-benzoate",
      "caramel",
      "b3",
      "b5",
      "b2",
      "b6",
      "b12"
    ],
    // 1.03.3 – Animasjonssteg – start og duration er i sekund
    "stages": [
      {
        "kind": "water",
        "delivery": "pour",
        "name": "Water",
        "short": "Water",
        "amount": "The foundation",
        "unit": "A clear starting point",
        "description": "A clear first pour settles into the glass. The separate layers that follow are enlarged teaching colours, not real concentrations or a factory recipe.",
        "color": "#c9e7f1",
        "duration": 10,
        "formula": "H₂O",
        "ingredientIds": [
          "water"
        ],
        "learn": "water",
        "layer": 1.25,
        "start": 0
      },
      {
        "kind": "carbonation",
        "delivery": "gas",
        "name": "Carbon dioxide",
        "short": "CO₂",
        "amount": "Quantity undisclosed",
        "unit": "Listed ingredient · individual dose not published",
        "description": "Carbon dioxide disperses through the water. Small bubbles rise along the glass; the gas does not form a separate liquid layer in the real drink.",
        "color": "#d9f1f6",
        "duration": 4.5,
        "formula": "CO₂",
        "ingredientIds": [
          "carbonation"
        ],
        "learn": "carbonation",
        "layer": 0.045,
        "start": 10
      },
      {
        "kind": "sugar",
        "delivery": "crystals",
        "name": "Sugar",
        "short": "Sugar",
        "amount": "55 g",
        "unit": "Combined sugars per 500 ml · see source note",
        "description": "Carbohydrate that gives a drink sweetness and calories. Your body breaks sugars down and uses them for fuel. Bacteria in your mouth also use sugar and make acids that can damage your teeth.",
        "color": "#eee6c8",
        "duration": 7,
        "formula": "Sweetness + energy",
        "ingredientIds": [
          "sugar"
        ],
        "learn": "sugar",
        "layer": 0.27,
        "start": 14.5
      },
      {
        "kind": "citric-acid",
        "delivery": "crystals",
        "name": "Citric acid",
        "short": "Citric acid",
        "amount": "Quantity undisclosed",
        "unit": "Listed ingredient · individual dose not published",
        "description": "An acid that makes drinks taste sharp or sour. Its code is E330. Acidic drinks can wear away tooth enamel and may trigger heartburn. Citric acid’s job in the recipe is flavour and acidity, not making you more alert.",
        "color": "#c6d992",
        "duration": 5.3,
        "formula": "E330 · C₆H₈O₇",
        "ingredientIds": [
          "citric-acid"
        ],
        "learn": "citric-acid",
        "layer": 0.11,
        "start": 21.5
      },
      {
        "kind": "maltodextrin",
        "delivery": "powder",
        "name": "Maltodextrin",
        "short": "Maltodextrin",
        "amount": "Quantity undisclosed",
        "unit": "Listed ingredient · individual dose not published",
        "description": "Short chains of glucose made by breaking down starch. Your body can break ordinary maltodextrin down into glucose and use it for energy. It counts as carbohydrate even when it is not in the “sugars” number.",
        "color": "#e1d1b2",
        "duration": 5.3,
        "formula": "Glucose chains",
        "ingredientIds": [
          "maltodextrin"
        ],
        "learn": "maltodextrin",
        "layer": 0.14,
        "start": 26.8
      },
      {
        "kind": "taurine",
        "delivery": "powder",
        "name": "Taurine",
        "short": "Taurine",
        "amount": "2,000 mg",
        "unit": "Calculated from the label · per 500 ml",
        "description": "A substance your body makes and also gets from some foods. Your cells use taurine to help control water and calcium. Calcium signals help muscles work. Having this normal role does not prove that extra taurine in a drink improves your muscles or heart.",
        "color": "#c8b1e1",
        "duration": 5.3,
        "formula": "C₂H₇NO₃S",
        "ingredientIds": [
          "taurine"
        ],
        "learn": "taurine",
        "layer": 0.15,
        "start": 32.1
      },
      {
        "kind": "flavourings",
        "delivery": "droplets",
        "name": "Flavourings",
        "short": "Flavourings",
        "amount": "Quantity undisclosed",
        "unit": "Listed ingredient · individual dose not published",
        "description": "Ingredients that create a drink’s taste and smell. Your nose and taste buds detect them. “Flavourings” describes a mixture, not one substance with one predictable effect on your organs.",
        "color": "#d7bca2",
        "duration": 5.3,
        "formula": "Taste + aroma",
        "ingredientIds": [
          "flavourings"
        ],
        "learn": "flavourings",
        "layer": 0.09,
        "start": 37.4
      },
      {
        "kind": "coffee-extract",
        "delivery": "extract",
        "name": "Coffee extract",
        "short": "Coffee extract",
        "amount": "Quantity undisclosed",
        "unit": "Listed ingredient · individual dose not published",
        "description": "Battery lists coffee extract alongside guarana. It is shown separately from ordinary brewed coffee. Its caffeine is already included in the declared 160 mg total for this serving.",
        "color": "#b39271",
        "duration": 5.3,
        "formula": "Extracted coffee compounds",
        "ingredientIds": [
          "coffee-extract"
        ],
        "learn": "coffee-extract",
        "layer": 0.09,
        "start": 42.7
      },
      {
        "kind": "guarana",
        "delivery": "extract",
        "name": "Guarana seed extract",
        "short": "Guarana",
        "amount": "Quantity undisclosed",
        "unit": "Listed ingredient · individual dose not published",
        "description": "A seed extract that contains caffeine. Its caffeine contributes to the drink’s total; “plant-derived” does not make the stimulant milder or remove its sleep effects. The extract amount is not an extra caffeine amount.",
        "color": "#ad8862",
        "duration": 5.3,
        "formula": "Paullinia cupana",
        "ingredientIds": [
          "guarana"
        ],
        "learn": "guarana",
        "layer": 0.1,
        "start": 48
      },
      {
        "kind": "caffeine",
        "delivery": "powder",
        "name": "Caffeine",
        "short": "Caffeine",
        "amount": "160 mg",
        "unit": "Total caffeine per 500 ml",
        "description": "Caffeine is counted once: the total already includes contributions from guarana and other extracts. This separate blue layer explains the stimulant, without adding another caffeine dose.",
        "color": "#8cbbeb",
        "duration": 5.3,
        "formula": "C₈H₁₀N₄O₂",
        "ingredientIds": [
          "caffeine"
        ],
        "learn": "caffeine",
        "layer": 0.13,
        "start": 53.3
      },
      {
        "kind": "sodium-benzoate",
        "delivery": "powder",
        "name": "Sodium benzoate",
        "short": "E211",
        "amount": "Quantity undisclosed",
        "unit": "Listed ingredient · individual dose not published",
        "description": "A preservative that helps stop spoilage. Its code is E211. It mainly works in the drink by limiting microbes that could spoil it. It is not there to give your body energy or improve an organ.",
        "color": "#b7c7db",
        "duration": 5.3,
        "formula": "E211 · C₇H₅NaO₂",
        "ingredientIds": [
          "sodium-benzoate"
        ],
        "learn": "sodium-benzoate",
        "layer": 0.085,
        "start": 58.6
      },
      {
        "kind": "caramel",
        "delivery": "droplets",
        "name": "Sulphite ammonia caramel",
        "short": "E150d",
        "amount": "Quantity undisclosed",
        "unit": "Listed ingredient · individual dose not published",
        "description": "A brown food colour made by controlled processing of carbohydrates. Its code is E150d. It makes cola and some energy drinks brown. It is not added to help your organs or make you more awake.",
        "color": "#ae7950",
        "duration": 5.3,
        "formula": "E150d · class IV caramel",
        "ingredientIds": [
          "caramel"
        ],
        "learn": "caramel",
        "layer": 0.1,
        "start": 63.9
      },
      {
        "kind": "b3",
        "delivery": "powder",
        "name": "Niacin · vitamin B3",
        "short": "B3",
        "amount": "Quantity undisclosed",
        "unit": "Listed ingredient · individual dose not published",
        "description": "Vitamin B3, usually called niacin on the label. Your cells use B3 to help turn food into usable energy. It supports normal skin and nerve function. It is not a stimulant.",
        "color": "#efd397",
        "duration": 5.3,
        "formula": "B3",
        "ingredientIds": [
          "b3"
        ],
        "learn": "b3",
        "layer": 0.065,
        "start": 69.2
      },
      {
        "kind": "b5",
        "delivery": "powder",
        "name": "Pantothenic acid · B5",
        "short": "B5",
        "amount": "Quantity undisclosed",
        "unit": "Listed ingredient · individual dose not published",
        "description": "Vitamin B5, also called pantothenic acid. Your cells use B5 when making and breaking down fats and releasing energy from food. It does not directly wake up your brain.",
        "color": "#efbd82",
        "duration": 5.3,
        "formula": "B5",
        "ingredientIds": [
          "b5"
        ],
        "learn": "b5",
        "layer": 0.065,
        "start": 74.5
      },
      {
        "kind": "b2",
        "delivery": "powder",
        "name": "Riboflavin · vitamin B2",
        "short": "B2",
        "amount": "Quantity undisclosed",
        "unit": "Listed ingredient · individual dose not published",
        "description": "Vitamin B2, also called riboflavin. Your body uses B2 to release energy from food. It also helps keep your eyes, skin and nerves working normally.",
        "color": "#e3d25b",
        "duration": 5.3,
        "formula": "B2",
        "ingredientIds": [
          "b2"
        ],
        "learn": "b2",
        "layer": 0.065,
        "start": 79.8
      },
      {
        "kind": "b6",
        "delivery": "powder",
        "name": "Pyridoxine · vitamin B6",
        "short": "B6",
        "amount": "Quantity undisclosed",
        "unit": "Listed ingredient · individual dose not published",
        "description": "Vitamin B6, sometimes listed as pyridoxine hydrochloride. B6 helps your body use protein and make haemoglobin, the part of red blood cells that carries oxygen. It also helps nerves work normally.",
        "color": "#ebd779",
        "duration": 5.3,
        "formula": "B6",
        "ingredientIds": [
          "b6"
        ],
        "learn": "b6",
        "layer": 0.065,
        "start": 85.1
      },
      {
        "kind": "b12",
        "delivery": "powder",
        "name": "Cobalamin · vitamin B12",
        "short": "B12",
        "amount": "Quantity undisclosed",
        "unit": "Listed ingredient · individual dose not published",
        "description": "Vitamin B12, sometimes listed as cyanocobalamin. B12 helps keep nerve cells healthy and helps make red blood cells. Too little can cause tiredness and nerve problems.",
        "color": "#dda19f",
        "duration": 5.3,
        "formula": "B12",
        "ingredientIds": [
          "b12"
        ],
        "learn": "b12",
        "layer": 0.065,
        "start": 90.4
      },
      {
        "kind": "final",
        "delivery": "pour",
        "name": "From layers to a drink.",
        "short": "Mix together",
        "amount": "500",
        "unit": "ml · Battery Original",
        "description": "The teaching colours curl into one another as the spoon stirs. They gradually become this drink’s representative colour. Colour, viscosity and light transmission remain visual approximations.",
        "color": "#b87519",
        "duration": 14,
        "formula": "One complete mixture",
        "ingredientIds": [],
        "layer": 0,
        "start": 95.7
      }
    ],
    // 1.03.4 – Næring – per100 er referansemengd, perServing er éin behaldar
    "nutrition": {
      "rows": [
        {
          "id": "kcal",
          "name": "Energy",
          "unit": "kcal",
          "per100": 50,
          "perServing": 250
        },
        {
          "id": "kj",
          "name": "Energy",
          "unit": "kJ",
          "per100": 210,
          "perServing": 1050
        },
        {
          "id": "caffeine",
          "name": "Caffeine",
          "unit": "mg",
          "guide": "caffeine",
          "per100": 32,
          "perServing": 160
        },
        {
          "id": "carbs",
          "name": "Carbohydrate",
          "unit": "g",
          "per100": 11.5,
          "perServing": 57.5
        },
        {
          "id": "sugars",
          "name": "of which sugars",
          "unit": "g",
          "guide": "sugar",
          "per100": 11,
          "perServing": 55
        },
        {
          "id": "fat",
          "name": "Fat",
          "unit": "g",
          "per100": 0,
          "perServing": 0
        },
        {
          "id": "saturates",
          "name": "of which saturates",
          "unit": "g",
          "per100": 0,
          "perServing": 0
        },
        {
          "id": "protein",
          "name": "Protein",
          "unit": "g",
          "per100": 0.4,
          "perServing": 2
        },
        {
          "id": "salt",
          "name": "Salt",
          "unit": "g",
          "per100": 0,
          "perServing": 0
        },
        {
          "id": "taurine",
          "name": "Taurine",
          "unit": "mg",
          "guide": "taurine",
          "per100": 400,
          "perServing": 2000
        },
        {
          "id": "b2",
          "name": "Vitamin B2",
          "unit": "mg",
          "guide": "b2",
          "per100": null,
          "perServing": null
        },
        {
          "id": "b3",
          "name": "Niacin · B3",
          "unit": "mg",
          "guide": "b3",
          "per100": null,
          "perServing": null
        },
        {
          "id": "b5",
          "name": "Pantothenic acid · B5",
          "unit": "mg",
          "guide": "b5",
          "per100": null,
          "perServing": null
        },
        {
          "id": "b6",
          "name": "Vitamin B6",
          "unit": "mg",
          "guide": "b6",
          "per100": null,
          "perServing": null
        },
        {
          "id": "b12",
          "name": "Vitamin B12",
          "unit": "µg",
          "guide": "b12",
          "per100": null,
          "perServing": null
        }
      ],
      "massRows": [],
      "container": "can",
      "referenceUnit": "ml",
      "note": "Caffeine includes the coffee and guarana extracts. It is counted once. The listed B vitamins have no amounts on the source page.",
      "source": "https://www.ringnes.no/produkter/battery/battery-original/"
    },
    // 1.03.5 – Drikkespesifikke forklaringar og atterhald
    "contexts": [],
    // 1.03.6 – Lenkjer til vidare utforsking av ingrediensane
    "discoveries": [
      "maltodextrin",
      "guarana",
      "coffee-extract",
      "caramel",
      "sodium-benzoate",
      "taurine",
      "citric-acid",
      "b3",
      "b5",
      "b2",
      "b6",
      "b12"
    ],
    "recipeDiscoveries": [
      "maltodextrin",
      "guarana",
      "coffee-extract",
      "caramel",
      "sodium-benzoate",
      "taurine",
      "citric-acid",
      "b3",
      "b5",
      "b2",
      "b6",
      "b12"
    ]
  },
  // ── DRIKK 1.04: Burn Original [burn] ──
  {
    // 1.04.1 – Namn, bilete, mengder, fargar og kjelder
    "id": "burn",
    "name": "Burn Original",
    "category": "Energy",
    "size": 500,
    "caffeine": 160,
    "sugar": "75 g",
    "calories": "Not verified",
    "image": "/burn-original.png",
    "accent": "#db6b28",
    "tint": "#fff1e8",
    "liquid": "#c64b2c",
    "carbonated": true,
    "description": "A full-strength blend with inositol, guarana, preservatives and a vitamin mix.",
    "source": "https://www.burn.com/no-no/products/original/",
    "label": "https://www.encon.no/burn-original-500ml-bx/5637146238.p",
    "note": "Burn’s Norwegian brand page states 32 mg caffeine and 15 g sugar per 100 ml, scaled to a 500 ml can. Ingredient identities follow the Norwegian Encon listing; its rounded 0.03% caffeine is not used to override the brand’s declared total. Taurine is calculated from 0.4%. Calories remain unverified.",
    // 1.04.2 – Ingrediens-ID-ar for denne drikka
    "ingredients": [
      "water",
      "carbonation",
      "sugar",
      "citric-acid",
      "taurine",
      "sodium-citrate",
      "potassium-sorbate",
      "sodium-benzoate",
      "caramel",
      "flavourings",
      "caffeine",
      "inositol",
      "b3",
      "b5",
      "b6",
      "b12",
      "guarana",
      "vitamin-c"
    ],
    // 1.04.3 – Animasjonssteg – start og duration er i sekund
    "stages": [
      {
        "kind": "water",
        "delivery": "pour",
        "name": "Water",
        "short": "Water",
        "amount": "The foundation",
        "unit": "A clear starting point",
        "description": "A clear first pour settles into the glass. The separate layers that follow are enlarged teaching colours, not real concentrations or a factory recipe.",
        "color": "#c9e7f1",
        "duration": 10,
        "formula": "H₂O",
        "ingredientIds": [
          "water"
        ],
        "learn": "water",
        "layer": 1.25,
        "start": 0
      },
      {
        "kind": "carbonation",
        "delivery": "gas",
        "name": "Carbon dioxide",
        "short": "CO₂",
        "amount": "Quantity undisclosed",
        "unit": "Listed ingredient · individual dose not published",
        "description": "Carbon dioxide disperses through the water. Small bubbles rise along the glass; the gas does not form a separate liquid layer in the real drink.",
        "color": "#d9f1f6",
        "duration": 4.5,
        "formula": "CO₂",
        "ingredientIds": [
          "carbonation"
        ],
        "learn": "carbonation",
        "layer": 0.045,
        "start": 10
      },
      {
        "kind": "sugar",
        "delivery": "crystals",
        "name": "Sugar",
        "short": "Sugar",
        "amount": "75 g",
        "unit": "Combined sugars per 500 ml · see source note",
        "description": "Carbohydrate that gives a drink sweetness and calories. Your body breaks sugars down and uses them for fuel. Bacteria in your mouth also use sugar and make acids that can damage your teeth.",
        "color": "#eee6c8",
        "duration": 7,
        "formula": "Sweetness + energy",
        "ingredientIds": [
          "sugar"
        ],
        "learn": "sugar",
        "layer": 0.27,
        "start": 14.5
      },
      {
        "kind": "citric-acid",
        "delivery": "crystals",
        "name": "Citric acid",
        "short": "Citric acid",
        "amount": "Quantity undisclosed",
        "unit": "Listed ingredient · individual dose not published",
        "description": "An acid that makes drinks taste sharp or sour. Its code is E330. Acidic drinks can wear away tooth enamel and may trigger heartburn. Citric acid’s job in the recipe is flavour and acidity, not making you more alert.",
        "color": "#c6d992",
        "duration": 5.3,
        "formula": "E330 · C₆H₈O₇",
        "ingredientIds": [
          "citric-acid"
        ],
        "learn": "citric-acid",
        "layer": 0.11,
        "start": 21.5
      },
      {
        "kind": "taurine",
        "delivery": "powder",
        "name": "Taurine",
        "short": "Taurine",
        "amount": "2,000 mg",
        "unit": "Calculated from the label · per 500 ml",
        "description": "A substance your body makes and also gets from some foods. Your cells use taurine to help control water and calcium. Calcium signals help muscles work. Having this normal role does not prove that extra taurine in a drink improves your muscles or heart.",
        "color": "#c8b1e1",
        "duration": 5.3,
        "formula": "C₂H₇NO₃S",
        "ingredientIds": [
          "taurine"
        ],
        "learn": "taurine",
        "layer": 0.15,
        "start": 26.8
      },
      {
        "kind": "sodium-citrate",
        "delivery": "powder",
        "name": "Sodium citrate",
        "short": "E331",
        "amount": "Quantity undisclosed",
        "unit": "Listed ingredient · individual dose not published",
        "description": "A salt related to citric acid. Its code is E331. It helps control the drink’s acidity and adds some sodium. The ingredient name does not tell us how much sodium the bottle supplies.",
        "color": "#bbd8aa",
        "duration": 5.3,
        "formula": "E331 · citrate salts",
        "ingredientIds": [
          "sodium-citrate"
        ],
        "learn": "sodium-citrate",
        "layer": 0.09,
        "start": 32.1
      },
      {
        "kind": "potassium-sorbate",
        "delivery": "powder",
        "name": "Potassium sorbate",
        "short": "E202",
        "amount": "Quantity undisclosed",
        "unit": "Listed ingredient · individual dose not published",
        "description": "A preservative made from sorbic acid. Its code is E202. It helps stop a drink spoiling. The word “potassium” does not mean the drink supplies a useful mineral dose from this ingredient.",
        "color": "#d1c2d8",
        "duration": 5.3,
        "formula": "E202 · C₆H₇KO₂",
        "ingredientIds": [
          "potassium-sorbate"
        ],
        "learn": "potassium-sorbate",
        "layer": 0.085,
        "start": 37.4
      },
      {
        "kind": "sodium-benzoate",
        "delivery": "powder",
        "name": "Sodium benzoate",
        "short": "E211",
        "amount": "Quantity undisclosed",
        "unit": "Listed ingredient · individual dose not published",
        "description": "A preservative that helps stop spoilage. Its code is E211. It mainly works in the drink by limiting microbes that could spoil it. It is not there to give your body energy or improve an organ.",
        "color": "#b7c7db",
        "duration": 5.3,
        "formula": "E211 · C₇H₅NaO₂",
        "ingredientIds": [
          "sodium-benzoate"
        ],
        "learn": "sodium-benzoate",
        "layer": 0.085,
        "start": 42.7
      },
      {
        "kind": "caramel",
        "delivery": "droplets",
        "name": "Sulphite ammonia caramel",
        "short": "E150d",
        "amount": "Quantity undisclosed",
        "unit": "Listed ingredient · individual dose not published",
        "description": "A brown food colour made by controlled processing of carbohydrates. Its code is E150d. It makes cola and some energy drinks brown. It is not added to help your organs or make you more awake.",
        "color": "#ae7950",
        "duration": 5.3,
        "formula": "E150d · class IV caramel",
        "ingredientIds": [
          "caramel"
        ],
        "learn": "caramel",
        "layer": 0.1,
        "start": 48
      },
      {
        "kind": "flavourings",
        "delivery": "droplets",
        "name": "Flavourings",
        "short": "Flavourings",
        "amount": "Quantity undisclosed",
        "unit": "Listed ingredient · individual dose not published",
        "description": "Ingredients that create a drink’s taste and smell. Your nose and taste buds detect them. “Flavourings” describes a mixture, not one substance with one predictable effect on your organs.",
        "color": "#d7bca2",
        "duration": 5.3,
        "formula": "Taste + aroma",
        "ingredientIds": [
          "flavourings"
        ],
        "learn": "flavourings",
        "layer": 0.09,
        "start": 53.3
      },
      {
        "kind": "caffeine",
        "delivery": "powder",
        "name": "Caffeine",
        "short": "Caffeine",
        "amount": "160 mg",
        "unit": "Total caffeine per 500 ml",
        "description": "Caffeine is counted once: the total already includes contributions from guarana and other extracts. This separate blue layer explains the stimulant, without adding another caffeine dose.",
        "color": "#8cbbeb",
        "duration": 5.3,
        "formula": "C₈H₁₀N₄O₂",
        "ingredientIds": [
          "caffeine"
        ],
        "learn": "caffeine",
        "layer": 0.13,
        "start": 58.6
      },
      {
        "kind": "inositol",
        "delivery": "powder",
        "name": "Inositol",
        "short": "Inositol",
        "amount": "Quantity undisclosed",
        "unit": "Listed ingredient · individual dose not published",
        "description": "A substance your body makes and uses inside cells. Inositol helps cells pass messages inside them. It is sometimes called B8, but it is not an essential B vitamin.",
        "color": "#c6bde4",
        "duration": 5.3,
        "formula": "C₆H₁₂O₆",
        "ingredientIds": [
          "inositol"
        ],
        "learn": "inositol",
        "layer": 0.1,
        "start": 63.9
      },
      {
        "kind": "b3",
        "delivery": "powder",
        "name": "Niacin · vitamin B3",
        "short": "B3",
        "amount": "Quantity undisclosed",
        "unit": "Listed ingredient · individual dose not published",
        "description": "Vitamin B3, usually called niacin on the label. Your cells use B3 to help turn food into usable energy. It supports normal skin and nerve function. It is not a stimulant.",
        "color": "#efd397",
        "duration": 5.3,
        "formula": "B3",
        "ingredientIds": [
          "b3"
        ],
        "learn": "b3",
        "layer": 0.065,
        "start": 69.2
      },
      {
        "kind": "b5",
        "delivery": "powder",
        "name": "Pantothenic acid · B5",
        "short": "B5",
        "amount": "Quantity undisclosed",
        "unit": "Listed ingredient · individual dose not published",
        "description": "Vitamin B5, also called pantothenic acid. Your cells use B5 when making and breaking down fats and releasing energy from food. It does not directly wake up your brain.",
        "color": "#efbd82",
        "duration": 5.3,
        "formula": "B5",
        "ingredientIds": [
          "b5"
        ],
        "learn": "b5",
        "layer": 0.065,
        "start": 74.5
      },
      {
        "kind": "b6",
        "delivery": "powder",
        "name": "Pyridoxine · vitamin B6",
        "short": "B6",
        "amount": "Quantity undisclosed",
        "unit": "Listed ingredient · individual dose not published",
        "description": "Vitamin B6, sometimes listed as pyridoxine hydrochloride. B6 helps your body use protein and make haemoglobin, the part of red blood cells that carries oxygen. It also helps nerves work normally.",
        "color": "#ebd779",
        "duration": 5.3,
        "formula": "B6",
        "ingredientIds": [
          "b6"
        ],
        "learn": "b6",
        "layer": 0.065,
        "start": 79.8
      },
      {
        "kind": "b12",
        "delivery": "powder",
        "name": "Cobalamin · vitamin B12",
        "short": "B12",
        "amount": "Quantity undisclosed",
        "unit": "Listed ingredient · individual dose not published",
        "description": "Vitamin B12, sometimes listed as cyanocobalamin. B12 helps keep nerve cells healthy and helps make red blood cells. Too little can cause tiredness and nerve problems.",
        "color": "#dda19f",
        "duration": 5.3,
        "formula": "B12",
        "ingredientIds": [
          "b12"
        ],
        "learn": "b12",
        "layer": 0.065,
        "start": 85.1
      },
      {
        "kind": "guarana",
        "delivery": "extract",
        "name": "Guarana seed extract",
        "short": "Guarana",
        "amount": "Quantity undisclosed",
        "unit": "Listed ingredient · individual dose not published",
        "description": "A seed extract that contains caffeine. Its caffeine contributes to the drink’s total; “plant-derived” does not make the stimulant milder or remove its sleep effects. The extract amount is not an extra caffeine amount.",
        "color": "#ad8862",
        "duration": 5.3,
        "formula": "Paullinia cupana",
        "ingredientIds": [
          "guarana"
        ],
        "learn": "guarana",
        "layer": 0.1,
        "start": 90.4
      },
      {
        "kind": "vitamin-c",
        "delivery": "powder",
        "name": "Vitamin C · ascorbic acid",
        "short": "Vitamin C",
        "amount": "Quantity undisclosed",
        "unit": "Listed ingredient · individual dose not published",
        "description": "Ascorbic acid, also known as vitamin C, is listed here as an antioxidant to protect the recipe from oxidation. Its presence does not establish a meaningful vitamin dose or make this a vitamin supplement.",
        "color": "#efd376",
        "duration": 5.3,
        "formula": "E300 · C₆H₈O₆",
        "ingredientIds": [
          "vitamin-c"
        ],
        "learn": "vitamin-c",
        "layer": 0.09,
        "start": 95.7
      },
      {
        "kind": "final",
        "delivery": "pour",
        "name": "From layers to a drink.",
        "short": "Mix together",
        "amount": "500",
        "unit": "ml · Burn Original",
        "description": "The teaching colours curl into one another as the spoon stirs. They gradually become this drink’s representative colour. Colour, viscosity and light transmission remain visual approximations.",
        "color": "#c64b2c",
        "duration": 14,
        "formula": "One complete mixture",
        "ingredientIds": [],
        "layer": 0,
        "start": 101
      }
    ],
    // 1.04.4 – Næring – per100 er referansemengd, perServing er éin behaldar
    "nutrition": {
      "rows": [
        {
          "id": "kcal",
          "name": "Energy",
          "unit": "kcal",
          "per100": null,
          "perServing": null
        },
        {
          "id": "kj",
          "name": "Energy",
          "unit": "kJ",
          "per100": null,
          "perServing": null
        },
        {
          "id": "caffeine",
          "name": "Caffeine",
          "unit": "mg",
          "guide": "caffeine",
          "per100": 32,
          "perServing": 160
        },
        {
          "id": "carbs",
          "name": "Carbohydrate",
          "unit": "g",
          "per100": null,
          "perServing": null
        },
        {
          "id": "sugars",
          "name": "of which sugars",
          "unit": "g",
          "guide": "sugar",
          "per100": 15,
          "perServing": 75
        },
        {
          "id": "fat",
          "name": "Fat",
          "unit": "g",
          "per100": null,
          "perServing": null
        },
        {
          "id": "saturates",
          "name": "of which saturates",
          "unit": "g",
          "per100": null,
          "perServing": null
        },
        {
          "id": "protein",
          "name": "Protein",
          "unit": "g",
          "per100": null,
          "perServing": null
        },
        {
          "id": "salt",
          "name": "Salt",
          "unit": "g",
          "per100": null,
          "perServing": null
        },
        {
          "id": "taurine",
          "name": "Taurine",
          "unit": "mg",
          "guide": "taurine",
          "per100": 400,
          "perServing": 2000
        },
        {
          "id": "b3",
          "name": "Niacin · B3",
          "unit": "mg",
          "guide": "b3",
          "per100": null,
          "perServing": null
        },
        {
          "id": "b5",
          "name": "Pantothenic acid · B5",
          "unit": "mg",
          "guide": "b5",
          "per100": null,
          "perServing": null
        },
        {
          "id": "b6",
          "name": "Vitamin B6",
          "unit": "mg",
          "guide": "b6",
          "per100": null,
          "perServing": null
        },
        {
          "id": "b12",
          "name": "Vitamin B12",
          "unit": "µg",
          "guide": "b12",
          "per100": null,
          "perServing": null
        },
        {
          "id": "vitamin-c",
          "name": "Vitamin C",
          "unit": "mg",
          "guide": "vitamin-c",
          "per100": null,
          "perServing": null
        }
      ],
      "massRows": [],
      "container": "can",
      "referenceUnit": "ml",
      "note": "The Norwegian brand page confirms sugar and caffeine. Taurine is calculated from the separately linked label’s 0.4%. Other nutrition amounts remain unknown.",
      "source": "https://www.burn.com/no-no/products/original/"
    },
    // 1.04.5 – Drikkespesifikke forklaringar og atterhald
    "contexts": [],
    // 1.04.6 – Lenkjer til vidare utforsking av ingrediensane
    "discoveries": [
      "inositol",
      "guarana",
      "caramel",
      "sodium-citrate",
      "sodium-benzoate",
      "potassium-sorbate",
      "taurine",
      "citric-acid",
      "b3",
      "b5",
      "b6",
      "b12"
    ],
    "recipeDiscoveries": [
      "inositol",
      "guarana",
      "caramel",
      "sodium-citrate",
      "sodium-benzoate",
      "potassium-sorbate",
      "taurine",
      "citric-acid",
      "b3",
      "b5",
      "b6",
      "b12"
    ]
  },
  // ── DRIKK 1.05: Red Bull Sugarfree [red-bull-sugarfree] ──
  {
    // 1.05.1 – Namn, bilete, mengder, fargar og kjelder
    "id": "red-bull-sugarfree",
    "name": "Red Bull Sugarfree",
    "category": "Energy",
    "size": 250,
    "caffeine": 80,
    "sugar": "0 g",
    "calories": "Not verified",
    "image": "/redbull-sugarfree.png",
    "accent": "#3987a7",
    "tint": "#edf8fb",
    "liquid": "#d3b04e",
    "carbonated": true,
    "description": "A sugar-free comparison, with a different route to sweetness.",
    "source": "https://www.redbull.com/no-no/energydrink/products/red-bull-sugarfree",
    "label": "https://www.redbull.com/no-no/energydrink/questions/what-is-red-bull-sugarfree",
    "note": "The Norwegian manufacturer confirms the key ingredients and sucralose/acesulfame K. This page shows that confirmed subset; a complete current can label is still needed for the remaining additives. Photograph packaging may vary by market.",
    // 1.05.2 – Ingrediens-ID-ar for denne drikka
    "ingredients": [
      "water",
      "carbonation",
      "caffeine",
      "taurine",
      "b3",
      "b5",
      "b6",
      "b12",
      "sucralose",
      "acesulfame-k"
    ],
    // 1.05.3 – Animasjonssteg – start og duration er i sekund
    "stages": [
      {
        "kind": "water",
        "delivery": "pour",
        "name": "Water",
        "short": "Water",
        "amount": "The foundation",
        "unit": "A clear starting point",
        "description": "A clear first pour settles into the glass. The separate layers that follow are enlarged teaching colours, not real concentrations or a factory recipe.",
        "color": "#c9e7f1",
        "duration": 10,
        "formula": "H₂O",
        "ingredientIds": [
          "water"
        ],
        "learn": "water",
        "layer": 1.25,
        "start": 0
      },
      {
        "kind": "carbonation",
        "delivery": "gas",
        "name": "Carbon dioxide",
        "short": "CO₂",
        "amount": "Quantity undisclosed",
        "unit": "Listed ingredient · individual dose not published",
        "description": "Carbon dioxide disperses through the water. Small bubbles rise along the glass; the gas does not form a separate liquid layer in the real drink.",
        "color": "#d9f1f6",
        "duration": 4.5,
        "formula": "CO₂",
        "ingredientIds": [
          "carbonation"
        ],
        "learn": "carbonation",
        "layer": 0.045,
        "start": 10
      },
      {
        "kind": "caffeine",
        "delivery": "powder",
        "name": "Caffeine",
        "short": "Caffeine",
        "amount": "80 mg",
        "unit": "Total caffeine per 250 ml",
        "description": "The ingredient that can make you feel more awake. In your brain, caffeine blocks some of the signals that make you feel sleepy. Too much can also make your heart race and keep you awake at night.",
        "color": "#8cbbeb",
        "duration": 5.3,
        "formula": "C₈H₁₀N₄O₂",
        "ingredientIds": [
          "caffeine"
        ],
        "learn": "caffeine",
        "layer": 0.13,
        "start": 14.5
      },
      {
        "kind": "taurine",
        "delivery": "powder",
        "name": "Taurine",
        "short": "Taurine",
        "amount": "Quantity undisclosed",
        "unit": "Listed ingredient · individual dose not published",
        "description": "A substance your body makes and also gets from some foods. Your cells use taurine to help control water and calcium. Calcium signals help muscles work. Having this normal role does not prove that extra taurine in a drink improves your muscles or heart.",
        "color": "#c8b1e1",
        "duration": 5.3,
        "formula": "C₂H₇NO₃S",
        "ingredientIds": [
          "taurine"
        ],
        "learn": "taurine",
        "layer": 0.15,
        "start": 19.8
      },
      {
        "kind": "b3",
        "delivery": "powder",
        "name": "Niacin · vitamin B3",
        "short": "B3",
        "amount": "Quantity undisclosed",
        "unit": "Listed ingredient · individual dose not published",
        "description": "Vitamin B3, usually called niacin on the label. Your cells use B3 to help turn food into usable energy. It supports normal skin and nerve function. It is not a stimulant.",
        "color": "#efd397",
        "duration": 5.3,
        "formula": "B3",
        "ingredientIds": [
          "b3"
        ],
        "learn": "b3",
        "layer": 0.065,
        "start": 25.1
      },
      {
        "kind": "b5",
        "delivery": "powder",
        "name": "Pantothenic acid · B5",
        "short": "B5",
        "amount": "Quantity undisclosed",
        "unit": "Listed ingredient · individual dose not published",
        "description": "Vitamin B5, also called pantothenic acid. Your cells use B5 when making and breaking down fats and releasing energy from food. It does not directly wake up your brain.",
        "color": "#efbd82",
        "duration": 5.3,
        "formula": "B5",
        "ingredientIds": [
          "b5"
        ],
        "learn": "b5",
        "layer": 0.065,
        "start": 30.4
      },
      {
        "kind": "b6",
        "delivery": "powder",
        "name": "Pyridoxine · vitamin B6",
        "short": "B6",
        "amount": "Quantity undisclosed",
        "unit": "Listed ingredient · individual dose not published",
        "description": "Vitamin B6, sometimes listed as pyridoxine hydrochloride. B6 helps your body use protein and make haemoglobin, the part of red blood cells that carries oxygen. It also helps nerves work normally.",
        "color": "#ebd779",
        "duration": 5.3,
        "formula": "B6",
        "ingredientIds": [
          "b6"
        ],
        "learn": "b6",
        "layer": 0.065,
        "start": 35.7
      },
      {
        "kind": "b12",
        "delivery": "powder",
        "name": "Cobalamin · vitamin B12",
        "short": "B12",
        "amount": "Quantity undisclosed",
        "unit": "Listed ingredient · individual dose not published",
        "description": "Vitamin B12, sometimes listed as cyanocobalamin. B12 helps keep nerve cells healthy and helps make red blood cells. Too little can cause tiredness and nerve problems.",
        "color": "#dda19f",
        "duration": 5.3,
        "formula": "B12",
        "ingredientIds": [
          "b12"
        ],
        "learn": "b12",
        "layer": 0.065,
        "start": 41
      },
      {
        "kind": "sucralose",
        "delivery": "powder",
        "name": "Sucralose",
        "short": "Sucralose",
        "amount": "Quantity undisclosed",
        "unit": "Listed ingredient · individual dose not published",
        "description": "An intense sweetener also called E955. Sucralose gives a sweet taste using much less ingredient than sugar. It does not act as a stimulant in your brain.",
        "color": "#a0d6d3",
        "duration": 5.3,
        "formula": "E955",
        "ingredientIds": [
          "sucralose"
        ],
        "learn": "sucralose",
        "layer": 0.09,
        "start": 46.3
      },
      {
        "kind": "acesulfame-k",
        "delivery": "powder",
        "name": "Acesulfame potassium",
        "short": "Ace-K",
        "amount": "Quantity undisclosed",
        "unit": "Listed ingredient · individual dose not published",
        "description": "An intense sweetener also called Ace-K or E950. It provides a sweet taste without the same amount of sugar. It is not a stimulant and does not provide a useful potassium supplement dose.",
        "color": "#9acdc1",
        "duration": 5.3,
        "formula": "E950 · Ace-K",
        "ingredientIds": [
          "acesulfame-k"
        ],
        "learn": "acesulfame-k",
        "layer": 0.09,
        "start": 51.6
      },
      {
        "kind": "final",
        "delivery": "pour",
        "name": "From layers to a drink.",
        "short": "Mix together",
        "amount": "250",
        "unit": "ml · Red Bull Sugarfree",
        "description": "The teaching colours curl into one another as the spoon stirs. They gradually become this drink’s representative colour. Colour, viscosity and light transmission remain visual approximations.",
        "color": "#d3b04e",
        "duration": 14,
        "formula": "One complete mixture",
        "ingredientIds": [],
        "layer": 0,
        "start": 56.9
      }
    ],
    // 1.05.4 – Næring – per100 er referansemengd, perServing er éin behaldar
    "nutrition": {
      "rows": [
        {
          "id": "kcal",
          "name": "Energy",
          "unit": "kcal",
          "per100": null,
          "perServing": null
        },
        {
          "id": "kj",
          "name": "Energy",
          "unit": "kJ",
          "per100": null,
          "perServing": null
        },
        {
          "id": "caffeine",
          "name": "Caffeine",
          "unit": "mg",
          "guide": "caffeine",
          "per100": 32,
          "perServing": 80
        },
        {
          "id": "carbs",
          "name": "Carbohydrate",
          "unit": "g",
          "per100": null,
          "perServing": null
        },
        {
          "id": "sugars",
          "name": "of which sugars",
          "unit": "g",
          "guide": "sugar",
          "per100": 0,
          "perServing": 0
        },
        {
          "id": "fat",
          "name": "Fat",
          "unit": "g",
          "per100": null,
          "perServing": null
        },
        {
          "id": "saturates",
          "name": "of which saturates",
          "unit": "g",
          "per100": null,
          "perServing": null
        },
        {
          "id": "protein",
          "name": "Protein",
          "unit": "g",
          "per100": null,
          "perServing": null
        },
        {
          "id": "salt",
          "name": "Salt",
          "unit": "g",
          "per100": null,
          "perServing": null
        },
        {
          "id": "taurine",
          "name": "Taurine",
          "unit": "mg",
          "guide": "taurine",
          "per100": null,
          "perServing": null
        },
        {
          "id": "b3",
          "name": "Niacin · B3",
          "unit": "mg",
          "guide": "b3",
          "per100": null,
          "perServing": null
        },
        {
          "id": "b5",
          "name": "Pantothenic acid · B5",
          "unit": "mg",
          "guide": "b5",
          "per100": null,
          "perServing": null
        },
        {
          "id": "b6",
          "name": "Vitamin B6",
          "unit": "mg",
          "guide": "b6",
          "per100": null,
          "perServing": null
        },
        {
          "id": "b12",
          "name": "Vitamin B12",
          "unit": "µg",
          "guide": "b12",
          "per100": null,
          "perServing": null
        }
      ],
      "massRows": [],
      "container": "can",
      "referenceUnit": "ml",
      "note": "The Norwegian source confirms no sugar and the caffeine amount. A complete current nutrition panel is still needed for the remaining values.",
      "source": "https://www.redbull.com/no-no/energydrink/products/red-bull-sugarfree"
    },
    // 1.05.5 – Drikkespesifikke forklaringar og atterhald
    "contexts": [],
    // 1.05.6 – Lenkjer til vidare utforsking av ingrediensane
    "discoveries": [
      "acesulfame-k",
      "sucralose",
      "taurine",
      "b3",
      "b5",
      "b6",
      "b12"
    ],
    "recipeDiscoveries": [
      "acesulfame-k",
      "sucralose",
      "taurine",
      "b3",
      "b5",
      "b6",
      "b12"
    ]
  },
  // ── DRIKK 1.06: Pepsi [pepsi] ──
  {
    // 1.06.1 – Namn, bilete, mengder, fargar og kjelder
    "id": "pepsi",
    "name": "Pepsi",
    "category": "Soft drinks",
    "size": 500,
    "caffeine": null,
    "sugar": "23 g",
    "calories": "90",
    "image": "/pepsi.png",
    "accent": "#2159b5",
    "tint": "#edf3fd",
    "liquid": "#341b10",
    "carbonated": true,
    "description": "Sugar and two intense sweeteners, with caramel colour and phosphoric acid.",
    "source": "https://www.ringnes.no/produkter/pepsi/pepsi-cola/",
    "label": "https://www.ringnes.no/produkter/pepsi/pepsi-cola/",
    "note": "Current Norwegian Ringnes page: 4.6 g sugar and 18 kcal per 100 ml, scaled to a 500 ml bottle. This recipe contains both sugar and sweeteners. Other markets and older bottles differ. Caffeine is listed within the flavourings; its amount is not disclosed.",
    // 1.06.2 – Ingrediens-ID-ar for denne drikka
    "ingredients": [
      "water",
      "carbonation",
      "sugar",
      "caramel",
      "flavourings",
      "caffeine",
      "phosphoric-acid",
      "acesulfame-k",
      "sucralose"
    ],
    // 1.06.3 – Animasjonssteg – start og duration er i sekund
    "stages": [
      {
        "kind": "water",
        "delivery": "pour",
        "name": "Water",
        "short": "Water",
        "amount": "The foundation",
        "unit": "A clear starting point",
        "description": "A clear first pour settles into the glass. The separate layers that follow are enlarged teaching colours, not real concentrations or a factory recipe.",
        "color": "#c9e7f1",
        "duration": 10,
        "formula": "H₂O",
        "ingredientIds": [
          "water"
        ],
        "learn": "water",
        "layer": 1.25,
        "start": 0
      },
      {
        "kind": "carbonation",
        "delivery": "gas",
        "name": "Carbon dioxide",
        "short": "CO₂",
        "amount": "Quantity undisclosed",
        "unit": "Listed ingredient · individual dose not published",
        "description": "Carbon dioxide disperses through the water. Small bubbles rise along the glass; the gas does not form a separate liquid layer in the real drink.",
        "color": "#d9f1f6",
        "duration": 4.5,
        "formula": "CO₂",
        "ingredientIds": [
          "carbonation"
        ],
        "learn": "carbonation",
        "layer": 0.045,
        "start": 10
      },
      {
        "kind": "sugar",
        "delivery": "crystals",
        "name": "Sugar",
        "short": "Sugar",
        "amount": "23 g",
        "unit": "Combined sugars per 500 ml · see source note",
        "description": "Carbohydrate that gives a drink sweetness and calories. Your body breaks sugars down and uses them for fuel. Bacteria in your mouth also use sugar and make acids that can damage your teeth.",
        "color": "#eee6c8",
        "duration": 7,
        "formula": "Sweetness + energy",
        "ingredientIds": [
          "sugar"
        ],
        "learn": "sugar",
        "layer": 0.27,
        "start": 14.5
      },
      {
        "kind": "caramel",
        "delivery": "droplets",
        "name": "Sulphite ammonia caramel",
        "short": "E150d",
        "amount": "Quantity undisclosed",
        "unit": "Listed ingredient · individual dose not published",
        "description": "A brown food colour made by controlled processing of carbohydrates. Its code is E150d. It makes cola and some energy drinks brown. It is not added to help your organs or make you more awake.",
        "color": "#ae7950",
        "duration": 5.3,
        "formula": "E150d · class IV caramel",
        "ingredientIds": [
          "caramel"
        ],
        "learn": "caramel",
        "layer": 0.1,
        "start": 21.5
      },
      {
        "kind": "flavourings",
        "delivery": "droplets",
        "name": "Flavourings",
        "short": "Flavourings",
        "amount": "Quantity undisclosed",
        "unit": "Listed ingredient · individual dose not published",
        "description": "Ingredients that create a drink’s taste and smell. Your nose and taste buds detect them. “Flavourings” describes a mixture, not one substance with one predictable effect on your organs.",
        "color": "#d7bca2",
        "duration": 5.3,
        "formula": "Taste + aroma",
        "ingredientIds": [
          "flavourings"
        ],
        "learn": "flavourings",
        "layer": 0.09,
        "start": 26.8
      },
      {
        "kind": "caffeine",
        "delivery": "powder",
        "name": "Caffeine",
        "short": "Caffeine",
        "amount": "Present",
        "unit": "Present · amount not disclosed",
        "description": "The ingredient that can make you feel more awake. In your brain, caffeine blocks some of the signals that make you feel sleepy. Too much can also make your heart race and keep you awake at night.",
        "color": "#8cbbeb",
        "duration": 5.3,
        "formula": "C₈H₁₀N₄O₂",
        "ingredientIds": [
          "caffeine"
        ],
        "learn": "caffeine",
        "layer": 0.13,
        "start": 32.1
      },
      {
        "kind": "phosphoric-acid",
        "delivery": "droplets",
        "name": "Phosphoric acid",
        "short": "E338",
        "amount": "Quantity undisclosed",
        "unit": "Listed ingredient · individual dose not published",
        "description": "An acid used to give cola its sharp taste, also called E338. Its main job is in the drink. Acidic drinks can affect tooth enamel and can trigger heartburn in some people; this is not an energy ingredient.",
        "color": "#b6c797",
        "duration": 5.3,
        "formula": "E338",
        "ingredientIds": [
          "phosphoric-acid"
        ],
        "learn": "phosphoric-acid",
        "layer": 0.1,
        "start": 37.4
      },
      {
        "kind": "acesulfame-k",
        "delivery": "powder",
        "name": "Acesulfame potassium",
        "short": "Ace-K",
        "amount": "Quantity undisclosed",
        "unit": "Listed ingredient · individual dose not published",
        "description": "An intense sweetener also called Ace-K or E950. It provides a sweet taste without the same amount of sugar. It is not a stimulant and does not provide a useful potassium supplement dose.",
        "color": "#9acdc1",
        "duration": 5.3,
        "formula": "E950 · Ace-K",
        "ingredientIds": [
          "acesulfame-k"
        ],
        "learn": "acesulfame-k",
        "layer": 0.09,
        "start": 42.7
      },
      {
        "kind": "sucralose",
        "delivery": "powder",
        "name": "Sucralose",
        "short": "Sucralose",
        "amount": "Quantity undisclosed",
        "unit": "Listed ingredient · individual dose not published",
        "description": "An intense sweetener also called E955. Sucralose gives a sweet taste using much less ingredient than sugar. It does not act as a stimulant in your brain.",
        "color": "#a0d6d3",
        "duration": 5.3,
        "formula": "E955",
        "ingredientIds": [
          "sucralose"
        ],
        "learn": "sucralose",
        "layer": 0.09,
        "start": 48
      },
      {
        "kind": "final",
        "delivery": "pour",
        "name": "From layers to a drink.",
        "short": "Mix together",
        "amount": "500",
        "unit": "ml · Pepsi",
        "description": "The teaching colours curl into one another as the spoon stirs. They gradually become this drink’s representative colour. Colour, viscosity and light transmission remain visual approximations.",
        "color": "#341b10",
        "duration": 14,
        "formula": "One complete mixture",
        "ingredientIds": [],
        "layer": 0,
        "start": 53.3
      }
    ],
    // 1.06.4 – Næring – per100 er referansemengd, perServing er éin behaldar
    "nutrition": {
      "rows": [
        {
          "id": "kcal",
          "name": "Energy",
          "unit": "kcal",
          "per100": 18,
          "perServing": 90
        },
        {
          "id": "kj",
          "name": "Energy",
          "unit": "kJ",
          "per100": 78,
          "perServing": 390
        },
        {
          "id": "caffeine",
          "name": "Caffeine",
          "unit": "mg",
          "guide": "caffeine",
          "per100": null,
          "perServing": null
        },
        {
          "id": "carbs",
          "name": "Carbohydrate",
          "unit": "g",
          "per100": 4.6,
          "perServing": 23
        },
        {
          "id": "sugars",
          "name": "of which sugars",
          "unit": "g",
          "guide": "sugar",
          "per100": 4.6,
          "perServing": 23
        },
        {
          "id": "fat",
          "name": "Fat",
          "unit": "g",
          "per100": 0,
          "perServing": 0
        },
        {
          "id": "saturates",
          "name": "of which saturates",
          "unit": "g",
          "per100": 0,
          "perServing": 0
        },
        {
          "id": "protein",
          "name": "Protein",
          "unit": "g",
          "per100": 0,
          "perServing": 0
        },
        {
          "id": "salt",
          "name": "Salt",
          "unit": "g",
          "per100": {
            "value": 0.01,
            "lessThan": true
          },
          "perServing": {
            "value": 0.05,
            "lessThan": true
          }
        }
      ],
      "massRows": [],
      "container": "bottle",
      "referenceUnit": "ml",
      "note": "Norwegian Pepsi contains both sugar and sweeteners. Caffeine is present, but the source does not publish its amount.",
      "source": "https://www.ringnes.no/produkter/pepsi/pepsi-cola/"
    },
    // 1.06.5 – Drikkespesifikke forklaringar og atterhald
    "contexts": [],
    // 1.06.6 – Lenkjer til vidare utforsking av ingrediensane
    "discoveries": [
      "caramel",
      "phosphoric-acid",
      "acesulfame-k",
      "sucralose"
    ],
    "recipeDiscoveries": [
      "caramel",
      "phosphoric-acid",
      "acesulfame-k",
      "sucralose"
    ]
  },
  // ── DRIKK 1.07: Coca-Cola Original [coca-cola] ──
  {
    // 1.07.1 – Namn, bilete, mengder, fargar og kjelder
    "id": "coca-cola",
    "name": "Coca-Cola Original",
    "category": "Soft drinks",
    "size": 330,
    "caffeine": null,
    "sugar": "35 g",
    "calories": "139",
    "image": "/cola.png",
    "accent": "#cf343b",
    "tint": "#fcf0ef",
    "liquid": "#432013",
    "carbonated": true,
    "description": "Caramel colour, phosphoric acid and the formula behind a classic cola.",
    "source": "https://www.coca-cola.com/no/no/brands/coca-cola",
    "label": "https://www.coca-cola.com/no/no/brands/coca-cola",
    "note": "Norwegian manufacturer: 10.6 g sugar and 42 kcal per 100 ml, scaled and rounded to a 330 ml serving. Caffeine is listed but its amount is not disclosed on that page.",
    // 1.07.2 – Ingrediens-ID-ar for denne drikka
    "ingredients": [
      "water",
      "carbonation",
      "sugar",
      "caffeine",
      "phosphoric-acid",
      "caramel",
      "flavourings"
    ],
    // 1.07.3 – Animasjonssteg – start og duration er i sekund
    "stages": [
      {
        "kind": "water",
        "delivery": "pour",
        "name": "Water",
        "short": "Water",
        "amount": "The foundation",
        "unit": "A clear starting point",
        "description": "A clear first pour settles into the glass. The separate layers that follow are enlarged teaching colours, not real concentrations or a factory recipe.",
        "color": "#c9e7f1",
        "duration": 10,
        "formula": "H₂O",
        "ingredientIds": [
          "water"
        ],
        "learn": "water",
        "layer": 1.25,
        "start": 0
      },
      {
        "kind": "carbonation",
        "delivery": "gas",
        "name": "Carbon dioxide",
        "short": "CO₂",
        "amount": "Quantity undisclosed",
        "unit": "Listed ingredient · individual dose not published",
        "description": "Carbon dioxide disperses through the water. Small bubbles rise along the glass; the gas does not form a separate liquid layer in the real drink.",
        "color": "#d9f1f6",
        "duration": 4.5,
        "formula": "CO₂",
        "ingredientIds": [
          "carbonation"
        ],
        "learn": "carbonation",
        "layer": 0.045,
        "start": 10
      },
      {
        "kind": "sugar",
        "delivery": "crystals",
        "name": "Sugar",
        "short": "Sugar",
        "amount": "35 g",
        "unit": "Combined sugars per 330 ml · see source note",
        "description": "Carbohydrate that gives a drink sweetness and calories. Your body breaks sugars down and uses them for fuel. Bacteria in your mouth also use sugar and make acids that can damage your teeth.",
        "color": "#eee6c8",
        "duration": 7,
        "formula": "Sweetness + energy",
        "ingredientIds": [
          "sugar"
        ],
        "learn": "sugar",
        "layer": 0.27,
        "start": 14.5
      },
      {
        "kind": "caffeine",
        "delivery": "powder",
        "name": "Caffeine",
        "short": "Caffeine",
        "amount": "Present",
        "unit": "Present · amount not disclosed",
        "description": "The ingredient that can make you feel more awake. In your brain, caffeine blocks some of the signals that make you feel sleepy. Too much can also make your heart race and keep you awake at night.",
        "color": "#8cbbeb",
        "duration": 5.3,
        "formula": "C₈H₁₀N₄O₂",
        "ingredientIds": [
          "caffeine"
        ],
        "learn": "caffeine",
        "layer": 0.13,
        "start": 21.5
      },
      {
        "kind": "phosphoric-acid",
        "delivery": "droplets",
        "name": "Phosphoric acid",
        "short": "E338",
        "amount": "Quantity undisclosed",
        "unit": "Listed ingredient · individual dose not published",
        "description": "An acid used to give cola its sharp taste, also called E338. Its main job is in the drink. Acidic drinks can affect tooth enamel and can trigger heartburn in some people; this is not an energy ingredient.",
        "color": "#b6c797",
        "duration": 5.3,
        "formula": "E338",
        "ingredientIds": [
          "phosphoric-acid"
        ],
        "learn": "phosphoric-acid",
        "layer": 0.1,
        "start": 26.8
      },
      {
        "kind": "caramel",
        "delivery": "droplets",
        "name": "Sulphite ammonia caramel",
        "short": "E150d",
        "amount": "Quantity undisclosed",
        "unit": "Listed ingredient · individual dose not published",
        "description": "A brown food colour made by controlled processing of carbohydrates. Its code is E150d. It makes cola and some energy drinks brown. It is not added to help your organs or make you more awake.",
        "color": "#ae7950",
        "duration": 5.3,
        "formula": "E150d · class IV caramel",
        "ingredientIds": [
          "caramel"
        ],
        "learn": "caramel",
        "layer": 0.1,
        "start": 32.1
      },
      {
        "kind": "flavourings",
        "delivery": "droplets",
        "name": "Flavourings",
        "short": "Flavourings",
        "amount": "Quantity undisclosed",
        "unit": "Listed ingredient · individual dose not published",
        "description": "Ingredients that create a drink’s taste and smell. Your nose and taste buds detect them. “Flavourings” describes a mixture, not one substance with one predictable effect on your organs.",
        "color": "#d7bca2",
        "duration": 5.3,
        "formula": "Taste + aroma",
        "ingredientIds": [
          "flavourings"
        ],
        "learn": "flavourings",
        "layer": 0.09,
        "start": 37.4
      },
      {
        "kind": "final",
        "delivery": "pour",
        "name": "From layers to a drink.",
        "short": "Mix together",
        "amount": "330",
        "unit": "ml · Coca-Cola Original",
        "description": "The teaching colours curl into one another as the spoon stirs. They gradually become this drink’s representative colour. Colour, viscosity and light transmission remain visual approximations.",
        "color": "#432013",
        "duration": 14,
        "formula": "One complete mixture",
        "ingredientIds": [],
        "layer": 0,
        "start": 42.7
      }
    ],
    // 1.07.4 – Næring – per100 er referansemengd, perServing er éin behaldar
    "nutrition": {
      "rows": [
        {
          "id": "kcal",
          "name": "Energy",
          "unit": "kcal",
          "per100": 42,
          "perServing": 138.6
        },
        {
          "id": "kj",
          "name": "Energy",
          "unit": "kJ",
          "per100": 180,
          "perServing": 594
        },
        {
          "id": "caffeine",
          "name": "Caffeine",
          "unit": "mg",
          "guide": "caffeine",
          "per100": null,
          "perServing": null
        },
        {
          "id": "carbs",
          "name": "Carbohydrate",
          "unit": "g",
          "per100": 10.6,
          "perServing": 34.98
        },
        {
          "id": "sugars",
          "name": "of which sugars",
          "unit": "g",
          "guide": "sugar",
          "per100": 10.6,
          "perServing": 34.98
        },
        {
          "id": "fat",
          "name": "Fat",
          "unit": "g",
          "per100": 0,
          "perServing": 0
        },
        {
          "id": "saturates",
          "name": "of which saturates",
          "unit": "g",
          "per100": 0,
          "perServing": 0
        },
        {
          "id": "protein",
          "name": "Protein",
          "unit": "g",
          "per100": 0,
          "perServing": 0
        },
        {
          "id": "sodium",
          "name": "Sodium",
          "unit": "g",
          "per100": 0,
          "perServing": 0
        }
      ],
      "massRows": [],
      "container": "can",
      "referenceUnit": "ml",
      "note": "This source labels the mineral row as sodium. Sodium and salt are different measures. Caffeine is listed without an amount.",
      "source": "https://www.coca-cola.com/no/no/brands/coca-cola"
    },
    // 1.07.5 – Drikkespesifikke forklaringar og atterhald
    "contexts": [],
    // 1.07.6 – Lenkjer til vidare utforsking av ingrediensane
    "discoveries": [
      "caramel",
      "phosphoric-acid"
    ],
    "recipeDiscoveries": [
      "caramel",
      "phosphoric-acid"
    ]
  },
  // ── DRIKK 1.08: Sprite [sprite] ──
  {
    // 1.08.1 – Namn, bilete, mengder, fargar og kjelder
    "id": "sprite",
    "name": "Sprite",
    "category": "Soft drinks",
    "size": 500,
    "caffeine": 0,
    "sugar": "50.5 g",
    "calories": "210",
    "image": "/sprite.png",
    "accent": "#3d945d",
    "tint": "#eef8f1",
    "liquid": "#e0edcb",
    "carbonated": true,
    "description": "Lemon, lime and fizz. Explore a shorter ingredient list.",
    "source": "https://www.coca-cola.com/no/no/brands/sprite",
    "label": "https://www.coca-cola.com/no/no/brands/sprite",
    "note": "Norwegian Original formula, 500 ml bottle. Values scaled from 10.1 g sugar and 42 kcal per 100 ml. Caffeine is not listed in the manufacturer’s formula.",
    // 1.08.2 – Ingrediens-ID-ar for denne drikka
    "ingredients": [
      "water",
      "carbonation",
      "sugar",
      "acidity",
      "flavourings"
    ],
    // 1.08.3 – Animasjonssteg – start og duration er i sekund
    "stages": [
      {
        "kind": "water",
        "delivery": "pour",
        "name": "Water",
        "short": "Water",
        "amount": "The foundation",
        "unit": "A clear starting point",
        "description": "A clear first pour settles into the glass. The separate layers that follow are enlarged teaching colours, not real concentrations or a factory recipe.",
        "color": "#c9e7f1",
        "duration": 10,
        "formula": "H₂O",
        "ingredientIds": [
          "water"
        ],
        "learn": "water",
        "layer": 1.25,
        "start": 0
      },
      {
        "kind": "carbonation",
        "delivery": "gas",
        "name": "Carbon dioxide",
        "short": "CO₂",
        "amount": "Quantity undisclosed",
        "unit": "Listed ingredient · individual dose not published",
        "description": "Carbon dioxide disperses through the water. Small bubbles rise along the glass; the gas does not form a separate liquid layer in the real drink.",
        "color": "#d9f1f6",
        "duration": 4.5,
        "formula": "CO₂",
        "ingredientIds": [
          "carbonation"
        ],
        "learn": "carbonation",
        "layer": 0.045,
        "start": 10
      },
      {
        "kind": "sugar",
        "delivery": "crystals",
        "name": "Sugar",
        "short": "Sugar",
        "amount": "50.5 g",
        "unit": "Combined sugars per 500 ml · see source note",
        "description": "Carbohydrate that gives a drink sweetness and calories. Your body breaks sugars down and uses them for fuel. Bacteria in your mouth also use sugar and make acids that can damage your teeth.",
        "color": "#eee6c8",
        "duration": 7,
        "formula": "Sweetness + energy",
        "ingredientIds": [
          "sugar"
        ],
        "learn": "sugar",
        "layer": 0.27,
        "start": 14.5
      },
      {
        "kind": "acidity",
        "delivery": "powder",
        "name": "Citric acid & acidity regulators",
        "short": "Acidity",
        "amount": "Quantity undisclosed",
        "unit": "Listed ingredient · individual dose not published",
        "description": "Acids and related salts that control how sour a drink tastes. Acid can wear away the hard outer surface of teeth. Acidic drinks can also trigger heartburn in some people. Regulating the recipe does not mean the drink is acid-free.",
        "color": "#c5d68f",
        "duration": 5.3,
        "formula": "E330 · citrate · carbonates",
        "ingredientIds": [
          "acidity"
        ],
        "learn": "acidity",
        "layer": 0.12,
        "start": 21.5
      },
      {
        "kind": "flavourings",
        "delivery": "droplets",
        "name": "Flavourings",
        "short": "Flavourings",
        "amount": "Quantity undisclosed",
        "unit": "Listed ingredient · individual dose not published",
        "description": "Ingredients that create a drink’s taste and smell. Your nose and taste buds detect them. “Flavourings” describes a mixture, not one substance with one predictable effect on your organs.",
        "color": "#d7bca2",
        "duration": 5.3,
        "formula": "Taste + aroma",
        "ingredientIds": [
          "flavourings"
        ],
        "learn": "flavourings",
        "layer": 0.09,
        "start": 26.8
      },
      {
        "kind": "final",
        "delivery": "pour",
        "name": "From layers to a drink.",
        "short": "Mix together",
        "amount": "500",
        "unit": "ml · Sprite",
        "description": "The teaching colours curl into one another as the spoon stirs. They gradually become this drink’s representative colour. Colour, viscosity and light transmission remain visual approximations.",
        "color": "#e0edcb",
        "duration": 14,
        "formula": "One complete mixture",
        "ingredientIds": [],
        "layer": 0,
        "start": 32.1
      }
    ],
    // 1.08.4 – Næring – per100 er referansemengd, perServing er éin behaldar
    "nutrition": {
      "rows": [
        {
          "id": "kcal",
          "name": "Energy",
          "unit": "kcal",
          "per100": 42,
          "perServing": 210
        },
        {
          "id": "kj",
          "name": "Energy",
          "unit": "kJ",
          "per100": 177,
          "perServing": 885
        },
        {
          "id": "caffeine",
          "name": "Caffeine",
          "unit": "mg",
          "guide": "caffeine",
          "per100": 0,
          "perServing": 0
        },
        {
          "id": "carbs",
          "name": "Carbohydrate",
          "unit": "g",
          "per100": 10.1,
          "perServing": 50.5
        },
        {
          "id": "sugars",
          "name": "of which sugars",
          "unit": "g",
          "guide": "sugar",
          "per100": 10.1,
          "perServing": 50.5
        },
        {
          "id": "fat",
          "name": "Fat",
          "unit": "g",
          "per100": 0,
          "perServing": 0
        },
        {
          "id": "saturates",
          "name": "of which saturates",
          "unit": "g",
          "per100": 0,
          "perServing": 0
        },
        {
          "id": "protein",
          "name": "Protein",
          "unit": "g",
          "per100": 0,
          "perServing": 0
        },
        {
          "id": "sodium",
          "name": "Sodium",
          "unit": "g",
          "per100": 0,
          "perServing": 0
        }
      ],
      "massRows": [],
      "container": "bottle",
      "referenceUnit": "ml",
      "note": "Norwegian Original recipe. The source labels the mineral row as sodium. No caffeine is listed in this recipe.",
      "source": "https://www.coca-cola.com/no/no/brands/sprite"
    },
    // 1.08.5 – Drikkespesifikke forklaringar og atterhald
    "contexts": [],
    // 1.08.6 – Lenkjer til vidare utforsking av ingrediensane
    "discoveries": [
      "acidity"
    ],
    "recipeDiscoveries": [
      "acidity"
    ]
  },
  // ── DRIKK 1.09: Powerade Mountain Blast [powerade-blue] ──
  {
    // 1.09.1 – Namn, bilete, mengder, fargar og kjelder
    "id": "powerade-blue",
    "name": "Powerade Mountain Blast",
    "category": "Sports drinks",
    "size": 500,
    "caffeine": 0,
    "sugar": "20.5 g",
    "calories": "90",
    "image": "/powerade-blue.png",
    "accent": "#168ebd",
    "tint": "#eaf7fd",
    "liquid": "#1499dc",
    "carbonated": false,
    "description": "The blue sports drink: dextrose, citrate salts, stabilisers and Brilliant Blue FCF.",
    "source": "https://www.coca-cola.com/no/no/brands/powerade",
    "label": "https://www.coca-cola.com/no/no/brands/powerade",
    "note": "Norwegian Mountain Blast recipe for the standard bottle, not Zero or the separately listed 1-litre recipe. Sugar and calories scaled from 4.1 g and 18 kcal per 100 ml. Dextrose and fructose contribute to the combined 20.5 g sugar total; their individual amounts are undisclosed. No caffeine is listed.",
    // 1.09.2 – Ingrediens-ID-ar for denne drikka
    "ingredients": [
      "water",
      "glucose",
      "citric-acid",
      "sodium-citrate",
      "potassium-citrate",
      "fructose",
      "gum-arabic",
      "wood-rosin-esters",
      "aspartame",
      "acesulfame-k",
      "flavourings",
      "brilliant-blue",
      "b6"
    ],
    // 1.09.3 – Animasjonssteg – start og duration er i sekund
    "stages": [
      {
        "kind": "water",
        "delivery": "pour",
        "name": "Water",
        "short": "Water",
        "amount": "The foundation",
        "unit": "A clear starting point",
        "description": "A clear first pour settles into the glass. The separate layers that follow are enlarged teaching colours, not real concentrations or a factory recipe.",
        "color": "#c9e7f1",
        "duration": 10,
        "formula": "H₂O",
        "ingredientIds": [
          "water"
        ],
        "learn": "water",
        "layer": 1.25,
        "start": 0
      },
      {
        "kind": "glucose",
        "delivery": "crystals",
        "name": "Glucose · dextrose",
        "short": "Dextrose",
        "amount": "Part of 20.5 g",
        "unit": "Combined sugars per 500 ml · individual split undisclosed",
        "description": "A simple sugar. Dextrose is another name for the same sugar. Glucose enters your blood after digestion. Your cells use it for energy. Bacteria in your mouth can also use it and make acids that damage teeth.",
        "color": "#f1ddab",
        "duration": 5.3,
        "formula": "C₆H₁₂O₆",
        "ingredientIds": [
          "glucose"
        ],
        "learn": "glucose",
        "layer": 0.18,
        "start": 10
      },
      {
        "kind": "citric-acid",
        "delivery": "crystals",
        "name": "Citric acid",
        "short": "Citric acid",
        "amount": "Quantity undisclosed",
        "unit": "Listed ingredient · individual dose not published",
        "description": "An acid that makes drinks taste sharp or sour. Its code is E330. Acidic drinks can wear away tooth enamel and may trigger heartburn. Citric acid’s job in the recipe is flavour and acidity, not making you more alert.",
        "color": "#c6d992",
        "duration": 5.3,
        "formula": "E330 · C₆H₈O₇",
        "ingredientIds": [
          "citric-acid"
        ],
        "learn": "citric-acid",
        "layer": 0.11,
        "start": 15.3
      },
      {
        "kind": "sodium-citrate",
        "delivery": "powder",
        "name": "Sodium citrate",
        "short": "E331",
        "amount": "Quantity undisclosed",
        "unit": "Listed ingredient · individual dose not published",
        "description": "A salt related to citric acid. Its code is E331. It helps control the drink’s acidity and adds some sodium. The ingredient name does not tell us how much sodium the bottle supplies.",
        "color": "#bbd8aa",
        "duration": 5.3,
        "formula": "E331 · citrate salts",
        "ingredientIds": [
          "sodium-citrate"
        ],
        "learn": "sodium-citrate",
        "layer": 0.09,
        "start": 20.6
      },
      {
        "kind": "potassium-citrate",
        "delivery": "powder",
        "name": "Potassium citrate",
        "short": "E332",
        "amount": "Quantity undisclosed",
        "unit": "Listed ingredient · individual dose not published",
        "description": "A potassium salt used to help control acidity. Its code is E332. Potassium helps nerves send signals and muscles contract. Your kidneys help control the amount in your blood. The quantity in this recipe is not published.",
        "color": "#a4c9b1",
        "duration": 5.3,
        "formula": "E332 · citrate salts",
        "ingredientIds": [
          "potassium-citrate"
        ],
        "learn": "potassium-citrate",
        "layer": 0.09,
        "start": 25.9
      },
      {
        "kind": "fructose",
        "delivery": "crystals",
        "name": "Fructose",
        "short": "Fructose",
        "amount": "Part of 20.5 g",
        "unit": "Combined sugars per 500 ml · individual split undisclosed",
        "description": "A simple sugar used to add sweetness. Your body processes fructose and can use it for energy. In this sports drink it is an added sugar, even though fructose also occurs naturally in fruit.",
        "color": "#ead5ac",
        "duration": 5.3,
        "formula": "C₆H₁₂O₆ · a different structure",
        "ingredientIds": [
          "fructose"
        ],
        "learn": "fructose",
        "layer": 0.15,
        "start": 31.2
      },
      {
        "kind": "gum-arabic",
        "delivery": "powder",
        "name": "Gum arabic · acacia gum",
        "short": "E414",
        "amount": "Quantity undisclosed",
        "unit": "Listed ingredient · individual dose not published",
        "description": "A plant-derived gum that helps ingredients stay mixed. Its code is E414. Its main job here is to keep parts of the drink from separating. This small, unreported amount is not a proven treatment for your gut.",
        "color": "#d9caaa",
        "duration": 5.3,
        "formula": "E414 · a polysaccharide",
        "ingredientIds": [
          "gum-arabic"
        ],
        "learn": "gum-arabic",
        "layer": 0.11,
        "start": 36.5
      },
      {
        "kind": "wood-rosin-esters",
        "delivery": "droplets",
        "name": "Glycerol esters of wood rosins",
        "short": "E445",
        "amount": "Quantity undisclosed",
        "unit": "Listed ingredient · individual dose not published",
        "description": "A processed food ingredient that helps flavour components stay mixed. Its code is E445. It mainly works in the bottle, helping parts of the recipe stay together. There is no proven body or organ benefit from its use in this drink.",
        "color": "#cab997",
        "duration": 5.3,
        "formula": "E445 · ester gum",
        "ingredientIds": [
          "wood-rosin-esters"
        ],
        "learn": "wood-rosin-esters",
        "layer": 0.1,
        "start": 41.8
      },
      {
        "kind": "aspartame",
        "delivery": "powder",
        "name": "Aspartame",
        "short": "Aspartame",
        "amount": "Quantity undisclosed",
        "unit": "Listed ingredient · individual dose not published",
        "description": "A strong sweetener used instead of some sugar. Its code is E951. It makes a drink sweet using a much smaller amount than sugar. People with PKU cannot handle one of its breakdown products, phenylalanine, normally.",
        "color": "#b5d7ce",
        "duration": 5.3,
        "formula": "E951 · C₁₄H₁₈N₂O₅",
        "ingredientIds": [
          "aspartame"
        ],
        "learn": "aspartame",
        "layer": 0.09,
        "start": 47.1
      },
      {
        "kind": "acesulfame-k",
        "delivery": "powder",
        "name": "Acesulfame potassium",
        "short": "Ace-K",
        "amount": "Quantity undisclosed",
        "unit": "Listed ingredient · individual dose not published",
        "description": "An intense sweetener also called Ace-K or E950. It provides a sweet taste without the same amount of sugar. It is not a stimulant and does not provide a useful potassium supplement dose.",
        "color": "#9acdc1",
        "duration": 5.3,
        "formula": "E950 · Ace-K",
        "ingredientIds": [
          "acesulfame-k"
        ],
        "learn": "acesulfame-k",
        "layer": 0.09,
        "start": 52.4
      },
      {
        "kind": "flavourings",
        "delivery": "droplets",
        "name": "Flavourings",
        "short": "Flavourings",
        "amount": "Quantity undisclosed",
        "unit": "Listed ingredient · individual dose not published",
        "description": "Ingredients that create a drink’s taste and smell. Your nose and taste buds detect them. “Flavourings” describes a mixture, not one substance with one predictable effect on your organs.",
        "color": "#d7bca2",
        "duration": 5.3,
        "formula": "Taste + aroma",
        "ingredientIds": [
          "flavourings"
        ],
        "learn": "flavourings",
        "layer": 0.09,
        "start": 57.7
      },
      {
        "kind": "brilliant-blue",
        "delivery": "droplets",
        "name": "Brilliant Blue FCF",
        "short": "E133",
        "amount": "Quantity undisclosed",
        "unit": "Listed ingredient · individual dose not published",
        "description": "The blue food colouring in this Powerade recipe. Its code is E133. It makes the drink blue. It does not give your muscles electrolytes or stimulate your brain.",
        "color": "#239edb",
        "duration": 5.3,
        "formula": "E133 · a food colour",
        "ingredientIds": [
          "brilliant-blue"
        ],
        "learn": "brilliant-blue",
        "layer": 0.11,
        "start": 63
      },
      {
        "kind": "b6",
        "delivery": "powder",
        "name": "Pyridoxine · vitamin B6",
        "short": "B6",
        "amount": "0.55 mg",
        "unit": "Per 500 ml · see nutrition source below",
        "description": "Vitamin B6, sometimes listed as pyridoxine hydrochloride. B6 helps your body use protein and make haemoglobin, the part of red blood cells that carries oxygen. It also helps nerves work normally.",
        "color": "#ebd779",
        "duration": 5.3,
        "formula": "B6",
        "ingredientIds": [
          "b6"
        ],
        "learn": "b6",
        "layer": 0.065,
        "start": 68.3
      },
      {
        "kind": "final",
        "delivery": "pour",
        "name": "From layers to a drink.",
        "short": "Mix together",
        "amount": "500",
        "unit": "ml · Powerade Mountain Blast",
        "description": "The teaching colours curl into one another as the spoon stirs. They gradually become this drink’s representative colour. Colour, viscosity and light transmission remain visual approximations.",
        "color": "#1499dc",
        "duration": 14,
        "formula": "One complete mixture",
        "ingredientIds": [],
        "layer": 0,
        "start": 73.6
      }
    ],
    // 1.09.4 – Næring – per100 er referansemengd, perServing er éin behaldar
    "nutrition": {
      "rows": [
        {
          "id": "kcal",
          "name": "Energy",
          "unit": "kcal",
          "per100": 18,
          "perServing": 90
        },
        {
          "id": "kj",
          "name": "Energy",
          "unit": "kJ",
          "per100": 77,
          "perServing": 385
        },
        {
          "id": "caffeine",
          "name": "Caffeine",
          "unit": "mg",
          "guide": "caffeine",
          "per100": 0,
          "perServing": 0
        },
        {
          "id": "carbs",
          "name": "Carbohydrate",
          "unit": "g",
          "per100": 4.1,
          "perServing": 20.5
        },
        {
          "id": "sugars",
          "name": "of which sugars",
          "unit": "g",
          "guide": "sugar",
          "per100": 4.1,
          "perServing": 20.5
        },
        {
          "id": "fat",
          "name": "Fat",
          "unit": "g",
          "per100": 0,
          "perServing": 0
        },
        {
          "id": "saturates",
          "name": "of which saturates",
          "unit": "g",
          "per100": 0,
          "perServing": 0
        },
        {
          "id": "protein",
          "name": "Protein",
          "unit": "g",
          "per100": 0,
          "perServing": 0
        },
        {
          "id": "sodium",
          "name": "Sodium",
          "unit": "g",
          "per100": 0.13,
          "perServing": 0.65
        },
        {
          "id": "b6",
          "name": "Vitamin B6",
          "unit": "mg",
          "guide": "b6",
          "per100": 0.11,
          "perServing": 0.55
        }
      ],
      "massRows": [],
      "container": "bottle",
      "referenceUnit": "ml",
      "note": "Standard Norwegian Mountain Blast bottle. The source labels 0.13 g as sodium, which is kept under that name. Dextrose and fructose are included in the one total sugars figure.",
      "source": "https://www.coca-cola.com/no/no/brands/powerade"
    },
    // 1.09.5 – Drikkespesifikke forklaringar og atterhald
    "contexts": [],
    // 1.09.6 – Lenkjer til vidare utforsking av ingrediensane
    "discoveries": [
      "wood-rosin-esters",
      "gum-arabic",
      "brilliant-blue",
      "acesulfame-k",
      "aspartame",
      "potassium-citrate",
      "sodium-citrate",
      "citric-acid",
      "b6"
    ],
    "recipeDiscoveries": [
      "wood-rosin-esters",
      "gum-arabic",
      "brilliant-blue",
      "acesulfame-k",
      "aspartame",
      "potassium-citrate",
      "sodium-citrate",
      "citric-acid",
      "b6"
    ]
  },
  // ── DRIKK 1.10: Urge Original [urge] ──
  {
    // 1.10.1 – Namn, bilete, mengder, fargar og kjelder
    "id": "urge",
    "name": "Urge Original",
    "category": "Soft drinks",
    "size": 500,
    "caffeine": null,
    "sugar": "56 g",
    "calories": "280",
    "image": "/urge.jpg",
    "accent": "#77a12b",
    "tint": "#f1f7e7",
    "liquid": "#d5c327",
    "carbonated": true,
    "description": "A citrus soda with maltodextrin, locust bean gum and beta-carotene.",
    "source": "https://www.coca-cola.com/no/no/brands/urge",
    "label": "https://www.coca-cola.com/no/no/brands/urge",
    "note": "Norwegian Original recipe. Sugar and calories scaled from 11.2 g and 56 kcal per 100 ml. Caffeine is listed without a quantity. Orange concentrate, stabiliser and antioxidant quantities are undisclosed; the formula is distinct from Urge Zero.",
    // 1.10.2 – Ingrediens-ID-ar for denne drikka
    "ingredients": [
      "water",
      "carbonation",
      "sugar",
      "maltodextrin",
      "citric-acid",
      "orange-concentrate",
      "potassium-sorbate",
      "sodium-citrate",
      "flavourings",
      "caffeine",
      "vitamin-c",
      "beta-carotene",
      "locust-bean-gum"
    ],
    // 1.10.3 – Animasjonssteg – start og duration er i sekund
    "stages": [
      {
        "kind": "water",
        "delivery": "pour",
        "name": "Water",
        "short": "Water",
        "amount": "The foundation",
        "unit": "A clear starting point",
        "description": "A clear first pour settles into the glass. The separate layers that follow are enlarged teaching colours, not real concentrations or a factory recipe.",
        "color": "#c9e7f1",
        "duration": 10,
        "formula": "H₂O",
        "ingredientIds": [
          "water"
        ],
        "learn": "water",
        "layer": 1.25,
        "start": 0
      },
      {
        "kind": "carbonation",
        "delivery": "gas",
        "name": "Carbon dioxide",
        "short": "CO₂",
        "amount": "Quantity undisclosed",
        "unit": "Listed ingredient · individual dose not published",
        "description": "Carbon dioxide disperses through the water. Small bubbles rise along the glass; the gas does not form a separate liquid layer in the real drink.",
        "color": "#d9f1f6",
        "duration": 4.5,
        "formula": "CO₂",
        "ingredientIds": [
          "carbonation"
        ],
        "learn": "carbonation",
        "layer": 0.045,
        "start": 10
      },
      {
        "kind": "sugar",
        "delivery": "crystals",
        "name": "Sugar",
        "short": "Sugar",
        "amount": "56 g",
        "unit": "Combined sugars per 500 ml · see source note",
        "description": "Carbohydrate that gives a drink sweetness and calories. Your body breaks sugars down and uses them for fuel. Bacteria in your mouth also use sugar and make acids that can damage your teeth.",
        "color": "#eee6c8",
        "duration": 7,
        "formula": "Sweetness + energy",
        "ingredientIds": [
          "sugar"
        ],
        "learn": "sugar",
        "layer": 0.27,
        "start": 14.5
      },
      {
        "kind": "maltodextrin",
        "delivery": "powder",
        "name": "Maltodextrin",
        "short": "Maltodextrin",
        "amount": "Quantity undisclosed",
        "unit": "Listed ingredient · individual dose not published",
        "description": "Short chains of glucose made by breaking down starch. Your body can break ordinary maltodextrin down into glucose and use it for energy. It counts as carbohydrate even when it is not in the “sugars” number.",
        "color": "#e1d1b2",
        "duration": 5.3,
        "formula": "Glucose chains",
        "ingredientIds": [
          "maltodextrin"
        ],
        "learn": "maltodextrin",
        "layer": 0.14,
        "start": 21.5
      },
      {
        "kind": "citric-acid",
        "delivery": "crystals",
        "name": "Citric acid",
        "short": "Citric acid",
        "amount": "Quantity undisclosed",
        "unit": "Listed ingredient · individual dose not published",
        "description": "An acid that makes drinks taste sharp or sour. Its code is E330. Acidic drinks can wear away tooth enamel and may trigger heartburn. Citric acid’s job in the recipe is flavour and acidity, not making you more alert.",
        "color": "#c6d992",
        "duration": 5.3,
        "formula": "E330 · C₆H₈O₇",
        "ingredientIds": [
          "citric-acid"
        ],
        "learn": "citric-acid",
        "layer": 0.11,
        "start": 26.8
      },
      {
        "kind": "orange-concentrate",
        "delivery": "extract",
        "name": "Orange juice from concentrate",
        "short": "Concentrate",
        "amount": "Quantity undisclosed",
        "unit": "Listed ingredient · individual dose not published",
        "description": "Concentrated orange juice used as part of a soft-drink recipe. It adds fruit taste and some fruit sugars and acids. A small amount in soda does not give the same food structure as eating an orange.",
        "color": "#f0bb69",
        "duration": 5.3,
        "formula": "A reconstituted fruit ingredient",
        "ingredientIds": [
          "orange-concentrate"
        ],
        "learn": "orange-concentrate",
        "layer": 0.13,
        "start": 32.1
      },
      {
        "kind": "potassium-sorbate",
        "delivery": "powder",
        "name": "Potassium sorbate",
        "short": "E202",
        "amount": "Quantity undisclosed",
        "unit": "Listed ingredient · individual dose not published",
        "description": "A preservative made from sorbic acid. Its code is E202. It helps stop a drink spoiling. The word “potassium” does not mean the drink supplies a useful mineral dose from this ingredient.",
        "color": "#d1c2d8",
        "duration": 5.3,
        "formula": "E202 · C₆H₇KO₂",
        "ingredientIds": [
          "potassium-sorbate"
        ],
        "learn": "potassium-sorbate",
        "layer": 0.085,
        "start": 37.4
      },
      {
        "kind": "sodium-citrate",
        "delivery": "powder",
        "name": "Sodium citrate",
        "short": "E331",
        "amount": "Quantity undisclosed",
        "unit": "Listed ingredient · individual dose not published",
        "description": "A salt related to citric acid. Its code is E331. It helps control the drink’s acidity and adds some sodium. The ingredient name does not tell us how much sodium the bottle supplies.",
        "color": "#bbd8aa",
        "duration": 5.3,
        "formula": "E331 · citrate salts",
        "ingredientIds": [
          "sodium-citrate"
        ],
        "learn": "sodium-citrate",
        "layer": 0.09,
        "start": 42.7
      },
      {
        "kind": "flavourings",
        "delivery": "droplets",
        "name": "Flavourings",
        "short": "Flavourings",
        "amount": "Quantity undisclosed",
        "unit": "Listed ingredient · individual dose not published",
        "description": "Ingredients that create a drink’s taste and smell. Your nose and taste buds detect them. “Flavourings” describes a mixture, not one substance with one predictable effect on your organs.",
        "color": "#d7bca2",
        "duration": 5.3,
        "formula": "Taste + aroma",
        "ingredientIds": [
          "flavourings"
        ],
        "learn": "flavourings",
        "layer": 0.09,
        "start": 48
      },
      {
        "kind": "caffeine",
        "delivery": "powder",
        "name": "Caffeine",
        "short": "Caffeine",
        "amount": "Present",
        "unit": "Present · amount not disclosed",
        "description": "The ingredient that can make you feel more awake. In your brain, caffeine blocks some of the signals that make you feel sleepy. Too much can also make your heart race and keep you awake at night.",
        "color": "#8cbbeb",
        "duration": 5.3,
        "formula": "C₈H₁₀N₄O₂",
        "ingredientIds": [
          "caffeine"
        ],
        "learn": "caffeine",
        "layer": 0.13,
        "start": 53.3
      },
      {
        "kind": "vitamin-c",
        "delivery": "powder",
        "name": "Vitamin C · ascorbic acid",
        "short": "Vitamin C",
        "amount": "Quantity undisclosed",
        "unit": "Listed ingredient · individual dose not published",
        "description": "Ascorbic acid, also known as vitamin C, is listed here as an antioxidant to protect the recipe from oxidation. Its presence does not establish a meaningful vitamin dose or make this a vitamin supplement.",
        "color": "#efd376",
        "duration": 5.3,
        "formula": "E300 · C₆H₈O₆",
        "ingredientIds": [
          "vitamin-c"
        ],
        "learn": "vitamin-c",
        "layer": 0.09,
        "start": 58.6
      },
      {
        "kind": "beta-carotene",
        "delivery": "droplets",
        "name": "Beta-carotene",
        "short": "E160a",
        "amount": "Quantity undisclosed",
        "unit": "Listed ingredient · individual dose not published",
        "description": "An orange-yellow colour that the body can also turn into vitamin A. Its code is E160a. Vitamin A supports normal sight and immune function. But a little beta-carotene used for colour is not the same as a declared useful vitamin dose.",
        "color": "#ecad54",
        "duration": 5.3,
        "formula": "E160a · a carotenoid",
        "ingredientIds": [
          "beta-carotene"
        ],
        "learn": "beta-carotene",
        "layer": 0.09,
        "start": 63.9
      },
      {
        "kind": "locust-bean-gum",
        "delivery": "powder",
        "name": "Locust bean gum",
        "short": "E410",
        "amount": "Quantity undisclosed",
        "unit": "Listed ingredient · individual dose not published",
        "description": "A gum from carob seeds that helps keep the recipe stable. Its code is E410. It mainly changes how the drink stays mixed and feels in your mouth. It is not a stimulant or a proven organ-boosting ingredient.",
        "color": "#c1c79b",
        "duration": 5.3,
        "formula": "E410 · a galactomannan",
        "ingredientIds": [
          "locust-bean-gum"
        ],
        "learn": "locust-bean-gum",
        "layer": 0.1,
        "start": 69.2
      },
      {
        "kind": "final",
        "delivery": "pour",
        "name": "From layers to a drink.",
        "short": "Mix together",
        "amount": "500",
        "unit": "ml · Urge Original",
        "description": "The teaching colours curl into one another as the spoon stirs. They gradually become this drink’s representative colour. Colour, viscosity and light transmission remain visual approximations.",
        "color": "#d5c327",
        "duration": 14,
        "formula": "One complete mixture",
        "ingredientIds": [],
        "layer": 0,
        "start": 74.5
      }
    ],
    // 1.10.4 – Næring – per100 er referansemengd, perServing er éin behaldar
    "nutrition": {
      "rows": [
        {
          "id": "kcal",
          "name": "Energy",
          "unit": "kcal",
          "per100": 56,
          "perServing": 280
        },
        {
          "id": "kj",
          "name": "Energy",
          "unit": "kJ",
          "per100": 239,
          "perServing": 1195
        },
        {
          "id": "caffeine",
          "name": "Caffeine",
          "unit": "mg",
          "guide": "caffeine",
          "per100": null,
          "perServing": null
        },
        {
          "id": "carbs",
          "name": "Carbohydrate",
          "unit": "g",
          "per100": 13.6,
          "perServing": 68
        },
        {
          "id": "sugars",
          "name": "of which sugars",
          "unit": "g",
          "guide": "sugar",
          "per100": 11.2,
          "perServing": 56
        },
        {
          "id": "fat",
          "name": "Fat",
          "unit": "g",
          "per100": 0,
          "perServing": 0
        },
        {
          "id": "saturates",
          "name": "of which saturates",
          "unit": "g",
          "per100": 0,
          "perServing": 0
        },
        {
          "id": "protein",
          "name": "Protein",
          "unit": "g",
          "per100": 0,
          "perServing": 0
        },
        {
          "id": "sodium",
          "name": "Sodium",
          "unit": "g",
          "per100": 0.02,
          "perServing": 0.1
        },
        {
          "id": "vitamin-c",
          "name": "Vitamin C",
          "unit": "mg",
          "guide": "vitamin-c",
          "per100": null,
          "perServing": null
        }
      ],
      "massRows": [],
      "container": "bottle",
      "referenceUnit": "ml",
      "note": "Norwegian Original recipe. Sodium is shown as named in the source. Caffeine and vitamin C are listed without individual amounts.",
      "source": "https://www.coca-cola.com/no/no/brands/urge"
    },
    // 1.10.5 – Drikkespesifikke forklaringar og atterhald
    "contexts": [
      {
        "id": "hesperidin",
        "parentId": "orange-concentrate"
      }
    ],
    // 1.10.6 – Lenkjer til vidare utforsking av ingrediensane
    "discoveries": [
      "hesperidin",
      "locust-bean-gum",
      "maltodextrin",
      "sodium-citrate",
      "potassium-sorbate",
      "citric-acid",
      "beta-carotene"
    ],
    "recipeDiscoveries": [
      "locust-bean-gum",
      "maltodextrin",
      "sodium-citrate",
      "potassium-sorbate",
      "citric-acid",
      "beta-carotene"
    ]
  },
  // ── DRIKK 1.11: Fanta Orange [fanta-orange] ──
  {
    "reviewed": "3 November 2026",
    // 1.11.1 – Namn, bilete, mengder, fargar og kjelder
    "id": "fanta-orange",
    "name": "Fanta Orange",
    "category": "Soft drinks",
    "size": 500,
    "caffeine": 0,
    "sugar": "Not verified",
    "calories": "150",
    "image": "/fanta-orange.jpg",
    "accent": "#e88921",
    "tint": "#fff4e5",
    "liquid": "#efa32f",
    "carbonated": true,
    "container": "bottle",
    "description": "Orange juice, sweeteners and stabilisers behind a familiar orange fizz.",
    "source": "https://www.coca-cola.com/no/no/brands/fanta",
    "label": "https://www.coca-cola.com/no/no/brands/fanta",
    "note": "Norwegian Original formula, shown as a 500 ml bottle. The brand page lists both sugar and sweeteners, plus 4.5% orange juice from concentrate. It reports more sugars than total carbohydrate, so both amounts are withheld pending a checked package label. Energy is scaled from the published 30 kcal per 100 ml. No caffeine is listed.",
    // 1.11.2 – Ingrediens-ID-ar for denne drikka
    "ingredients": [
      "water",
      "carbonation",
      "sugar",
      "orange-concentrate",
      "citric-acid",
      "potassium-sorbate",
      "flavourings",
      "acesulfame-k",
      "aspartame",
      "gum-arabic",
      "wood-rosin-esters",
      "guar-gum",
      "vitamin-c",
      "fruit-veg-concentrates",
      "beta-carotene"
    ],
    // 1.11.3 – Animasjonssteg – start og duration er i sekund
    "stages": [
      {
        "kind": "water",
        "delivery": "pour",
        "name": "Water",
        "short": "Water",
        "amount": "The foundation",
        "unit": "A clear starting point",
        "description": "A clear first pour settles into the glass. The separate layers that follow are enlarged teaching colours, not real concentrations or a factory recipe.",
        "color": "#c9e7f1",
        "duration": 10,
        "formula": "H₂O",
        "ingredientIds": [
          "water"
        ],
        "learn": "water",
        "layer": 1.25,
        "start": 0
      },
      {
        "kind": "carbonation",
        "delivery": "gas",
        "name": "Carbon dioxide",
        "short": "CO₂",
        "amount": "Quantity undisclosed",
        "unit": "Listed ingredient · individual dose not published",
        "description": "Carbon dioxide disperses through the water. Small bubbles rise along the glass; the gas does not form a separate liquid layer in the real drink.",
        "color": "#d9f1f6",
        "duration": 4.5,
        "formula": "CO₂",
        "ingredientIds": [
          "carbonation"
        ],
        "learn": "carbonation",
        "layer": 0.045,
        "start": 10
      },
      {
        "kind": "sugar",
        "delivery": "crystals",
        "name": "Sugar",
        "short": "Sugar",
        "amount": "Not verified",
        "unit": "Combined sugars per 500 ml · see source note",
        "description": "Carbohydrate that gives a drink sweetness and calories. Your body breaks sugars down and uses them for fuel. Bacteria in your mouth also use sugar and make acids that can damage your teeth.",
        "color": "#eee6c8",
        "duration": 7,
        "formula": "Sweetness + energy",
        "ingredientIds": [
          "sugar"
        ],
        "learn": "sugar",
        "layer": 0.27,
        "start": 14.5
      },
      {
        "kind": "orange-concentrate",
        "delivery": "extract",
        "name": "Orange juice from concentrate",
        "short": "Concentrate",
        "amount": "Quantity undisclosed",
        "unit": "Listed ingredient · individual dose not published",
        "description": "Concentrated orange juice used as part of a soft-drink recipe. It adds fruit taste and some fruit sugars and acids. A small amount in soda does not give the same food structure as eating an orange.",
        "color": "#f0bb69",
        "duration": 5.3,
        "formula": "A reconstituted fruit ingredient",
        "ingredientIds": [
          "orange-concentrate"
        ],
        "learn": "orange-concentrate",
        "layer": 0.13,
        "start": 21.5
      },
      {
        "kind": "citric-acid",
        "delivery": "crystals",
        "name": "Citric acid",
        "short": "Citric acid",
        "amount": "Quantity undisclosed",
        "unit": "Listed ingredient · individual dose not published",
        "description": "An acid that makes drinks taste sharp or sour. Its code is E330. Acidic drinks can wear away tooth enamel and may trigger heartburn. Citric acid’s job in the recipe is flavour and acidity, not making you more alert.",
        "color": "#c6d992",
        "duration": 5.3,
        "formula": "E330 · C₆H₈O₇",
        "ingredientIds": [
          "citric-acid"
        ],
        "learn": "citric-acid",
        "layer": 0.11,
        "start": 26.8
      },
      {
        "kind": "potassium-sorbate",
        "delivery": "powder",
        "name": "Potassium sorbate",
        "short": "E202",
        "amount": "Quantity undisclosed",
        "unit": "Listed ingredient · individual dose not published",
        "description": "A preservative made from sorbic acid. Its code is E202. It helps stop a drink spoiling. The word “potassium” does not mean the drink supplies a useful mineral dose from this ingredient.",
        "color": "#d1c2d8",
        "duration": 5.3,
        "formula": "E202 · C₆H₇KO₂",
        "ingredientIds": [
          "potassium-sorbate"
        ],
        "learn": "potassium-sorbate",
        "layer": 0.085,
        "start": 32.1
      },
      {
        "kind": "flavourings",
        "delivery": "droplets",
        "name": "Flavourings",
        "short": "Flavourings",
        "amount": "Quantity undisclosed",
        "unit": "Listed ingredient · individual dose not published",
        "description": "Ingredients that create a drink’s taste and smell. Your nose and taste buds detect them. “Flavourings” describes a mixture, not one substance with one predictable effect on your organs.",
        "color": "#d7bca2",
        "duration": 5.3,
        "formula": "Taste + aroma",
        "ingredientIds": [
          "flavourings"
        ],
        "learn": "flavourings",
        "layer": 0.09,
        "start": 37.4
      },
      {
        "kind": "acesulfame-k",
        "delivery": "powder",
        "name": "Acesulfame potassium",
        "short": "Ace-K",
        "amount": "Quantity undisclosed",
        "unit": "Listed ingredient · individual dose not published",
        "description": "An intense sweetener also called Ace-K or E950. It provides a sweet taste without the same amount of sugar. It is not a stimulant and does not provide a useful potassium supplement dose.",
        "color": "#9acdc1",
        "duration": 5.3,
        "formula": "E950 · Ace-K",
        "ingredientIds": [
          "acesulfame-k"
        ],
        "learn": "acesulfame-k",
        "layer": 0.09,
        "start": 42.7
      },
      {
        "kind": "aspartame",
        "delivery": "powder",
        "name": "Aspartame",
        "short": "Aspartame",
        "amount": "Quantity undisclosed",
        "unit": "Listed ingredient · individual dose not published",
        "description": "A strong sweetener used instead of some sugar. Its code is E951. It makes a drink sweet using a much smaller amount than sugar. People with PKU cannot handle one of its breakdown products, phenylalanine, normally.",
        "color": "#b5d7ce",
        "duration": 5.3,
        "formula": "E951 · C₁₄H₁₈N₂O₅",
        "ingredientIds": [
          "aspartame"
        ],
        "learn": "aspartame",
        "layer": 0.09,
        "start": 48
      },
      {
        "kind": "gum-arabic",
        "delivery": "powder",
        "name": "Gum arabic · acacia gum",
        "short": "E414",
        "amount": "Quantity undisclosed",
        "unit": "Listed ingredient · individual dose not published",
        "description": "A plant-derived gum that helps ingredients stay mixed. Its code is E414. Its main job here is to keep parts of the drink from separating. This small, unreported amount is not a proven treatment for your gut.",
        "color": "#d9caaa",
        "duration": 5.3,
        "formula": "E414 · a polysaccharide",
        "ingredientIds": [
          "gum-arabic"
        ],
        "learn": "gum-arabic",
        "layer": 0.11,
        "start": 53.3
      },
      {
        "kind": "wood-rosin-esters",
        "delivery": "droplets",
        "name": "Glycerol esters of wood rosins",
        "short": "E445",
        "amount": "Quantity undisclosed",
        "unit": "Listed ingredient · individual dose not published",
        "description": "A processed food ingredient that helps flavour components stay mixed. Its code is E445. It mainly works in the bottle, helping parts of the recipe stay together. There is no proven body or organ benefit from its use in this drink.",
        "color": "#cab997",
        "duration": 5.3,
        "formula": "E445 · ester gum",
        "ingredientIds": [
          "wood-rosin-esters"
        ],
        "learn": "wood-rosin-esters",
        "layer": 0.1,
        "start": 58.6
      },
      {
        "kind": "guar-gum",
        "delivery": "powder",
        "name": "Guar gum",
        "short": "E412",
        "amount": "Quantity undisclosed",
        "unit": "Listed ingredient · individual dose not published",
        "description": "A plant-derived thickener made from guar seeds. It binds water and changes texture. Seeing it in a soda does not tell you that the drink provides a useful amount of dietary fibre.",
        "color": "#d7cda8",
        "duration": 5.3,
        "formula": "E412",
        "ingredientIds": [
          "guar-gum"
        ],
        "learn": "guar-gum",
        "layer": 0.08,
        "start": 63.9
      },
      {
        "kind": "vitamin-c",
        "delivery": "powder",
        "name": "Vitamin C · ascorbic acid",
        "short": "Vitamin C",
        "amount": "Quantity undisclosed",
        "unit": "Listed ingredient · individual dose not published",
        "description": "Ascorbic acid, also known as vitamin C, is listed here as an antioxidant to protect the recipe from oxidation. Its presence does not establish a meaningful vitamin dose or make this a vitamin supplement.",
        "color": "#efd376",
        "duration": 5.3,
        "formula": "E300 · C₆H₈O₆",
        "ingredientIds": [
          "vitamin-c"
        ],
        "learn": "vitamin-c",
        "layer": 0.09,
        "start": 69.2
      },
      {
        "kind": "fruit-veg-concentrates",
        "delivery": "extract",
        "name": "Fruit & vegetable concentrates",
        "short": "Concentrates",
        "amount": "Quantity undisclosed",
        "unit": "Listed ingredient · individual dose not published",
        "description": "Concentrated plant ingredients listed alongside the orange juice in Fanta. They contribute to the recipe’s colour or flavour. Their presence does not establish a useful dose of vitamins or fibre.",
        "color": "#cf9c5d",
        "duration": 5.3,
        "formula": "Carrot · blackcurrant",
        "ingredientIds": [
          "fruit-veg-concentrates"
        ],
        "learn": "fruit-veg-concentrates",
        "layer": 0.1,
        "start": 74.5
      },
      {
        "kind": "beta-carotene",
        "delivery": "droplets",
        "name": "Beta-carotene",
        "short": "E160a",
        "amount": "Quantity undisclosed",
        "unit": "Listed ingredient · individual dose not published",
        "description": "An orange-yellow colour that the body can also turn into vitamin A. Its code is E160a. Vitamin A supports normal sight and immune function. But a little beta-carotene used for colour is not the same as a declared useful vitamin dose.",
        "color": "#ecad54",
        "duration": 5.3,
        "formula": "E160a · a carotenoid",
        "ingredientIds": [
          "beta-carotene"
        ],
        "learn": "beta-carotene",
        "layer": 0.09,
        "start": 79.8
      },
      {
        "kind": "final",
        "delivery": "pour",
        "name": "From layers to a drink.",
        "short": "Mix together",
        "amount": "500",
        "unit": "ml · Fanta Orange",
        "description": "The teaching colours curl into one another as the spoon stirs. They gradually become this drink’s representative colour. Colour, viscosity and light transmission remain visual approximations.",
        "color": "#efa32f",
        "duration": 14,
        "formula": "One complete mixture",
        "ingredientIds": [],
        "layer": 0,
        "start": 85.1
      }
    ],
    // 1.11.4 – Næring – per100 er referansemengd, perServing er éin behaldar
    "nutrition": {
      "rows": [
        {
          "id": "kcal",
          "name": "Energy",
          "unit": "kcal",
          "per100": 30,
          "perServing": 150
        },
        {
          "id": "kj",
          "name": "Energy",
          "unit": "kJ",
          "per100": 126,
          "perServing": 630
        },
        {
          "id": "caffeine",
          "name": "Caffeine",
          "unit": "mg",
          "guide": "caffeine",
          "per100": 0,
          "perServing": 0
        },
        {
          "id": "carbs",
          "name": "Carbohydrate",
          "unit": "g",
          "per100": null,
          "perServing": null
        },
        {
          "id": "sugars",
          "name": "of which sugars",
          "unit": "g",
          "guide": "sugar",
          "per100": null,
          "perServing": null
        },
        {
          "id": "fat",
          "name": "Fat",
          "unit": "g",
          "per100": 0,
          "perServing": 0
        },
        {
          "id": "saturates",
          "name": "of which saturates",
          "unit": "g",
          "per100": 0,
          "perServing": 0
        },
        {
          "id": "protein",
          "name": "Protein",
          "unit": "g",
          "per100": 0,
          "perServing": 0
        },
        {
          "id": "sodium",
          "name": "Sodium",
          "unit": "g",
          "per100": 0,
          "perServing": 0
        },
        {
          "id": "vitamin-c",
          "name": "Vitamin C",
          "unit": "mg",
          "guide": "vitamin-c",
          "per100": null,
          "perServing": null
        }
      ],
      "massRows": [],
      "container": "bottle",
      "referenceUnit": "ml",
      "note": "The Norwegian source reports 7.2 g carbohydrate but 11 g sugars per 100 ml. Sugars cannot exceed total carbohydrate, so both are left unavailable until a checked package label resolves the conflict. Published energy is retained. Vitamin C is listed as an antioxidant without a dose.",
      "source": "https://www.coca-cola.com/no/no/brands/fanta"
    },
    // 1.11.5 – Drikkespesifikke forklaringar og atterhald
    "contexts": [
      {
        "id": "hesperidin",
        "parentId": "orange-concentrate"
      }
    ],
    // 1.11.6 – Lenkjer til vidare utforsking av ingrediensane
    "discoveries": [
      "hesperidin",
      "wood-rosin-esters",
      "guar-gum",
      "gum-arabic",
      "acesulfame-k",
      "aspartame",
      "potassium-sorbate",
      "citric-acid",
      "fruit-veg-concentrates",
      "beta-carotene"
    ],
    "recipeDiscoveries": [
      "wood-rosin-esters",
      "guar-gum",
      "gum-arabic",
      "acesulfame-k",
      "aspartame",
      "potassium-sorbate",
      "citric-acid",
      "fruit-veg-concentrates",
      "beta-carotene"
    ]
  },
  // ── DRIKK 1.12: Lipton Ice Tea Lemon [lipton-ice-tea] ──
  {
    "reviewed": "3 November 2026",
    // 1.12.1 – Namn, bilete, mengder, fargar og kjelder
    "id": "lipton-ice-tea",
    "name": "Lipton Ice Tea Lemon",
    "category": "Iced tea",
    "size": 500,
    "caffeine": null,
    "sugar": "15 g",
    "calories": "65",
    "image": "/lipton-lemon.jpg",
    "accent": "#ad7e24",
    "tint": "#fff7df",
    "liquid": "#af681e",
    "carbonated": false,
    "container": "bottle",
    "description": "Classic lemon iced tea: black tea extract, two sugars and a stevia sweetener.",
    "source": "https://www.liptonicedtea.com/en-gb/our-ice-teas/black-ice-tea/lipton-ice-tea-lemon",
    "label": "https://www.liptonicedtea.com/en-gb/our-ice-teas/black-ice-tea/lipton-ice-tea-lemon",
    "note": "UK 500 ml Lemon recipe, selected as the classic iced tea. The manufacturer lists sucrose and fructose together, black tea extract (0.12%) and lemon juice from concentrate (0.1%). Tea naturally contains caffeine; its amount is not published for this bottle. The caffeine chapter explains a tea compound, not separately added caffeine. Sugars share one 15 g total. Other markets may differ.",
    // 1.12.2 – Ingrediens-ID-ar for denne drikka
    "ingredients": [
      "water",
      "sugar",
      "fructose",
      "citric-acid",
      "malic-acid",
      "tea-solids",
      "lemon-concentrate",
      "sodium-citrate",
      "flavourings",
      "vitamin-c",
      "steviol-glycosides",
      "caffeine"
    ],
    // 1.12.3 – Animasjonssteg – start og duration er i sekund
    "stages": [
      {
        "kind": "water",
        "delivery": "pour",
        "name": "Water",
        "short": "Water",
        "amount": "The foundation",
        "unit": "A clear starting point",
        "description": "A clear first pour settles into the glass. The separate layers that follow are enlarged teaching colours, not real concentrations or a factory recipe.",
        "color": "#c9e7f1",
        "duration": 10,
        "formula": "H₂O",
        "ingredientIds": [
          "water"
        ],
        "learn": "water",
        "layer": 1.25,
        "start": 0
      },
      {
        "kind": "sugar",
        "delivery": "crystals",
        "name": "Sugar",
        "short": "Sugar",
        "amount": "15 g",
        "unit": "Combined sugars per 500 ml · see source note",
        "description": "Carbohydrate that gives a drink sweetness and calories. Your body breaks sugars down and uses them for fuel. Bacteria in your mouth also use sugar and make acids that can damage your teeth.",
        "color": "#eee6c8",
        "duration": 7,
        "formula": "Sweetness + energy",
        "ingredientIds": [
          "sugar"
        ],
        "learn": "sugar",
        "layer": 0.27,
        "start": 10
      },
      {
        "kind": "fructose",
        "delivery": "crystals",
        "name": "Fructose",
        "short": "Fructose",
        "amount": "Part of 15 g",
        "unit": "Combined sugars per 500 ml · individual split undisclosed",
        "description": "A simple sugar used to add sweetness. Your body processes fructose and can use it for energy. In this sports drink it is an added sugar, even though fructose also occurs naturally in fruit.",
        "color": "#ead5ac",
        "duration": 5.3,
        "formula": "C₆H₁₂O₆ · a different structure",
        "ingredientIds": [
          "fructose"
        ],
        "learn": "fructose",
        "layer": 0.15,
        "start": 17
      },
      {
        "kind": "citric-acid",
        "delivery": "crystals",
        "name": "Citric acid",
        "short": "Citric acid",
        "amount": "Quantity undisclosed",
        "unit": "Listed ingredient · individual dose not published",
        "description": "An acid that makes drinks taste sharp or sour. Its code is E330. Acidic drinks can wear away tooth enamel and may trigger heartburn. Citric acid’s job in the recipe is flavour and acidity, not making you more alert.",
        "color": "#c6d992",
        "duration": 5.3,
        "formula": "E330 · C₆H₈O₇",
        "ingredientIds": [
          "citric-acid"
        ],
        "learn": "citric-acid",
        "layer": 0.11,
        "start": 22.3
      },
      {
        "kind": "malic-acid",
        "delivery": "crystals",
        "name": "Malic acid",
        "short": "E296",
        "amount": "Quantity undisclosed",
        "unit": "Listed ingredient · individual dose not published",
        "description": "An acid used to give drinks a tart flavour; it also occurs in fruit. It changes the acidity of the drink. It is not a stimulant, and its name does not mean it provides the benefits of eating fruit.",
        "color": "#d4dc9f",
        "duration": 5.3,
        "formula": "E296",
        "ingredientIds": [
          "malic-acid"
        ],
        "learn": "malic-acid",
        "layer": 0.1,
        "start": 27.6
      },
      {
        "kind": "tea-solids",
        "delivery": "extract",
        "name": "Extracted tea compounds",
        "short": "Tea",
        "amount": "0.12% extract",
        "unit": "Manufacturer recipe share · includes naturally present tea compounds",
        "description": "The mix of substances that moves from tea leaves into hot water. These substances give tea its colour and taste. The caffeine in tea is shown separately because that is what can make you feel more awake or affect sleep.",
        "color": "#dcb262",
        "duration": 8,
        "formula": "An infusion",
        "ingredientIds": [
          "tea-solids"
        ],
        "learn": "tea-solids",
        "layer": 0.6,
        "start": 32.9
      },
      {
        "kind": "lemon-concentrate",
        "delivery": "extract",
        "name": "Lemon juice from concentrate",
        "short": "Lemon",
        "amount": "Quantity undisclosed",
        "unit": "Listed ingredient · individual dose not published",
        "description": "Lemon juice that has had water removed and is used as an ingredient in the recipe. It supplies lemon flavour and fruit acids. A small juice percentage does not make an iced tea nutritionally equivalent to a serving of fruit.",
        "color": "#ebd175",
        "duration": 5.3,
        "formula": "Concentrated juice",
        "ingredientIds": [
          "lemon-concentrate"
        ],
        "learn": "lemon-concentrate",
        "layer": 0.12,
        "start": 40.9
      },
      {
        "kind": "sodium-citrate",
        "delivery": "powder",
        "name": "Sodium citrate",
        "short": "E331",
        "amount": "Quantity undisclosed",
        "unit": "Listed ingredient · individual dose not published",
        "description": "A salt related to citric acid. Its code is E331. It helps control the drink’s acidity and adds some sodium. The ingredient name does not tell us how much sodium the bottle supplies.",
        "color": "#bbd8aa",
        "duration": 5.3,
        "formula": "E331 · citrate salts",
        "ingredientIds": [
          "sodium-citrate"
        ],
        "learn": "sodium-citrate",
        "layer": 0.09,
        "start": 46.2
      },
      {
        "kind": "flavourings",
        "delivery": "droplets",
        "name": "Flavourings",
        "short": "Flavourings",
        "amount": "Quantity undisclosed",
        "unit": "Listed ingredient · individual dose not published",
        "description": "Ingredients that create a drink’s taste and smell. Your nose and taste buds detect them. “Flavourings” describes a mixture, not one substance with one predictable effect on your organs.",
        "color": "#d7bca2",
        "duration": 5.3,
        "formula": "Taste + aroma",
        "ingredientIds": [
          "flavourings"
        ],
        "learn": "flavourings",
        "layer": 0.09,
        "start": 51.5
      },
      {
        "kind": "vitamin-c",
        "delivery": "powder",
        "name": "Vitamin C · ascorbic acid",
        "short": "Vitamin C",
        "amount": "Quantity undisclosed",
        "unit": "Listed ingredient · individual dose not published",
        "description": "Ascorbic acid, also known as vitamin C, is listed here as an antioxidant to protect the recipe from oxidation. Its presence does not establish a meaningful vitamin dose or make this a vitamin supplement.",
        "color": "#efd376",
        "duration": 5.3,
        "formula": "E300 · C₆H₈O₆",
        "ingredientIds": [
          "vitamin-c"
        ],
        "learn": "vitamin-c",
        "layer": 0.09,
        "start": 56.8
      },
      {
        "kind": "steviol-glycosides",
        "delivery": "powder",
        "name": "Steviol glycosides",
        "short": "Stevia",
        "amount": "Quantity undisclosed",
        "unit": "Listed ingredient · individual dose not published",
        "description": "Intensely sweet compounds associated with the stevia plant, used as sweeteners. They provide sweetness with much less material than sugar. They do not act like caffeine or make an acidic drink neutral.",
        "color": "#aed0a8",
        "duration": 5.3,
        "formula": "Stevia · E960 family",
        "ingredientIds": [
          "steviol-glycosides"
        ],
        "learn": "steviol-glycosides",
        "layer": 0.08,
        "start": 62.1
      },
      {
        "kind": "caffeine",
        "delivery": "powder",
        "name": "Caffeine",
        "short": "Caffeine",
        "amount": "Present",
        "unit": "Present · amount not disclosed",
        "description": "The ingredient that can make you feel more awake. In your brain, caffeine blocks some of the signals that make you feel sleepy. Too much can also make your heart race and keep you awake at night.",
        "color": "#8cbbeb",
        "duration": 5.3,
        "formula": "C₈H₁₀N₄O₂",
        "ingredientIds": [
          "caffeine"
        ],
        "learn": "caffeine",
        "layer": 0.13,
        "start": 67.4
      },
      {
        "kind": "final",
        "delivery": "pour",
        "name": "From layers to a drink.",
        "short": "Mix together",
        "amount": "500",
        "unit": "ml · Lipton Ice Tea Lemon",
        "description": "The teaching colours curl into one another as the spoon stirs. They gradually become this drink’s representative colour. Colour, viscosity and light transmission remain visual approximations.",
        "color": "#af681e",
        "duration": 14,
        "formula": "One complete mixture",
        "ingredientIds": [],
        "layer": 0,
        "start": 72.7
      }
    ],
    // 1.12.4 – Næring – per100 er referansemengd, perServing er éin behaldar
    "nutrition": {
      "rows": [
        {
          "id": "kcal",
          "name": "Energy",
          "unit": "kcal",
          "per100": 13,
          "perServing": 65
        },
        {
          "id": "kj",
          "name": "Energy",
          "unit": "kJ",
          "per100": 55,
          "perServing": 275
        },
        {
          "id": "caffeine",
          "name": "Caffeine",
          "unit": "mg",
          "guide": "caffeine",
          "per100": null,
          "perServing": null
        },
        {
          "id": "carbs",
          "name": "Carbohydrate",
          "unit": "g",
          "per100": 3.1,
          "perServing": 15.5
        },
        {
          "id": "sugars",
          "name": "of which sugars",
          "unit": "g",
          "guide": "sugar",
          "per100": 3,
          "perServing": 15
        },
        {
          "id": "fat",
          "name": "Fat",
          "unit": "g",
          "per100": 0,
          "perServing": 0
        },
        {
          "id": "saturates",
          "name": "of which saturates",
          "unit": "g",
          "per100": 0,
          "perServing": 0
        },
        {
          "id": "protein",
          "name": "Protein",
          "unit": "g",
          "per100": 0,
          "perServing": 0
        },
        {
          "id": "salt",
          "name": "Salt",
          "unit": "g",
          "per100": 0.03,
          "perServing": 0.15
        },
        {
          "id": "vitamin-c",
          "name": "Vitamin C",
          "unit": "mg",
          "guide": "vitamin-c",
          "per100": null,
          "perServing": null
        }
      ],
      "massRows": [],
      "container": "bottle",
      "referenceUnit": "ml",
      "note": "UK Lemon recipe. Values are per 100 ml on the manufacturer’s page and scaled to 500 ml. Sucrose and fructose share the one sugar total. Tea contributes caffeine, but its amount is not published; ascorbic acid has no published dose.",
      "source": "https://www.liptonicedtea.com/en-gb/our-ice-teas/black-ice-tea/lipton-ice-tea-lemon"
    },
    // 1.12.5 – Drikkespesifikke forklaringar og atterhald
    "contexts": [
      {
        "id": "l-theanine",
        "parentId": "tea-solids"
      },
      {
        "id": "theaflavins",
        "parentId": "tea-solids"
      }
    ],
    // 1.12.6 – Lenkjer til vidare utforsking av ingrediensane
    "discoveries": [
      "l-theanine",
      "theaflavins",
      "steviol-glycosides",
      "sodium-citrate",
      "citric-acid",
      "malic-acid"
    ],
    "recipeDiscoveries": [
      "steviol-glycosides",
      "sodium-citrate",
      "citric-acid",
      "malic-acid"
    ]
  },
  // ── DRIKK 1.13: Gatorade Orange [gatorade-orange] ──
  {
    "reviewed": "3 November 2026",
    // 1.13.1 – Namn, bilete, mengder, fargar og kjelder
    "id": "gatorade-orange",
    "name": "Gatorade Orange",
    "category": "Sports drinks",
    "size": 500,
    "caffeine": 0,
    "sugar": "29 g",
    "calories": "120",
    "image": "/gatorade-orange.jpg",
    "accent": "#dd7625",
    "tint": "#fff1e7",
    "liquid": "#ee8e20",
    "carbonated": false,
    "container": "bottle",
    "description": "An orange sports drink with dextrose, electrolyte salts and emulsion stabilisers.",
    "source": "https://smartlabel.pepsico.info/052000059120-0001-en-US/index.html",
    "label": "https://smartlabel.pepsico.info/052000059120-0001-en-US/index.html",
    "note": "US Thirst Quencher Orange 500 ml bottle, UPC 052000059120. PepsiCo SmartLabel lists 120 kcal, 29 g total sugars, 230 mg sodium and 70 mg potassium per bottle. Per 100 ml values are calculated from that rounded label. Dextrose is part of the combined sugars, not a second 29 g. This US recipe contains Yellow 6; European bottles may differ. No caffeine is listed.",
    // 1.13.2 – Ingrediens-ID-ar for denne drikka
    "ingredients": [
      "water",
      "sugar",
      "glucose",
      "citric-acid",
      "salt",
      "sodium-citrate",
      "monopotassium-phosphate",
      "gum-arabic",
      "flavourings",
      "sucrose-acetate-isobutyrate",
      "wood-rosin-esters",
      "sunset-yellow"
    ],
    // 1.13.3 – Animasjonssteg – start og duration er i sekund
    "stages": [
      {
        "kind": "water",
        "delivery": "pour",
        "name": "Water",
        "short": "Water",
        "amount": "The foundation",
        "unit": "A clear starting point",
        "description": "A clear first pour settles into the glass. The separate layers that follow are enlarged teaching colours, not real concentrations or a factory recipe.",
        "color": "#c9e7f1",
        "duration": 10,
        "formula": "H₂O",
        "ingredientIds": [
          "water"
        ],
        "learn": "water",
        "layer": 1.25,
        "start": 0
      },
      {
        "kind": "sugar",
        "delivery": "crystals",
        "name": "Sugar",
        "short": "Sugar",
        "amount": "29 g",
        "unit": "Combined sugars per 500 ml · see source note",
        "description": "Carbohydrate that gives a drink sweetness and calories. Your body breaks sugars down and uses them for fuel. Bacteria in your mouth also use sugar and make acids that can damage your teeth.",
        "color": "#eee6c8",
        "duration": 7,
        "formula": "Sweetness + energy",
        "ingredientIds": [
          "sugar"
        ],
        "learn": "sugar",
        "layer": 0.27,
        "start": 10
      },
      {
        "kind": "glucose",
        "delivery": "crystals",
        "name": "Glucose · dextrose",
        "short": "Dextrose",
        "amount": "Part of 29 g",
        "unit": "Combined sugars per 500 ml · individual split undisclosed",
        "description": "A simple sugar. Dextrose is another name for the same sugar. Glucose enters your blood after digestion. Your cells use it for energy. Bacteria in your mouth can also use it and make acids that damage teeth.",
        "color": "#f1ddab",
        "duration": 5.3,
        "formula": "C₆H₁₂O₆",
        "ingredientIds": [
          "glucose"
        ],
        "learn": "glucose",
        "layer": 0.18,
        "start": 17
      },
      {
        "kind": "citric-acid",
        "delivery": "crystals",
        "name": "Citric acid",
        "short": "Citric acid",
        "amount": "Quantity undisclosed",
        "unit": "Listed ingredient · individual dose not published",
        "description": "An acid that makes drinks taste sharp or sour. Its code is E330. Acidic drinks can wear away tooth enamel and may trigger heartburn. Citric acid’s job in the recipe is flavour and acidity, not making you more alert.",
        "color": "#c6d992",
        "duration": 5.3,
        "formula": "E330 · C₆H₈O₇",
        "ingredientIds": [
          "citric-acid"
        ],
        "learn": "citric-acid",
        "layer": 0.11,
        "start": 22.3
      },
      {
        "kind": "salt",
        "delivery": "crystals",
        "name": "Salt · sodium chloride",
        "short": "Salt",
        "amount": "Quantity undisclosed",
        "unit": "Listed ingredient · individual dose not published",
        "description": "Table salt is sodium chloride. Sodium and chloride are electrolytes. Your nerves and muscles use electrolytes, and sodium helps control fluid balance. Too much salt overall can raise blood pressure.",
        "color": "#dae1e9",
        "duration": 5.3,
        "formula": "NaCl",
        "ingredientIds": [
          "salt"
        ],
        "learn": "salt",
        "layer": 0.09,
        "start": 27.6
      },
      {
        "kind": "sodium-citrate",
        "delivery": "powder",
        "name": "Sodium citrate",
        "short": "E331",
        "amount": "Quantity undisclosed",
        "unit": "Listed ingredient · individual dose not published",
        "description": "A salt related to citric acid. Its code is E331. It helps control the drink’s acidity and adds some sodium. The ingredient name does not tell us how much sodium the bottle supplies.",
        "color": "#bbd8aa",
        "duration": 5.3,
        "formula": "E331 · citrate salts",
        "ingredientIds": [
          "sodium-citrate"
        ],
        "learn": "sodium-citrate",
        "layer": 0.09,
        "start": 32.9
      },
      {
        "kind": "monopotassium-phosphate",
        "delivery": "powder",
        "name": "Monopotassium phosphate",
        "short": "E340(i)",
        "amount": "Quantity undisclosed",
        "unit": "Listed ingredient · individual dose not published",
        "description": "A potassium and phosphate salt used in food and drink formulas. It can supply potassium and phosphorus. Phosphorus is used in bones and cells, but its normal role does not prove an extra benefit from this bottle.",
        "color": "#b5cfcb",
        "duration": 5.3,
        "formula": "KH₂PO₄ · E340(i)",
        "ingredientIds": [
          "monopotassium-phosphate"
        ],
        "learn": "monopotassium-phosphate",
        "layer": 0.09,
        "start": 38.2
      },
      {
        "kind": "gum-arabic",
        "delivery": "powder",
        "name": "Gum arabic · acacia gum",
        "short": "E414",
        "amount": "Quantity undisclosed",
        "unit": "Listed ingredient · individual dose not published",
        "description": "A plant-derived gum that helps ingredients stay mixed. Its code is E414. Its main job here is to keep parts of the drink from separating. This small, unreported amount is not a proven treatment for your gut.",
        "color": "#d9caaa",
        "duration": 5.3,
        "formula": "E414 · a polysaccharide",
        "ingredientIds": [
          "gum-arabic"
        ],
        "learn": "gum-arabic",
        "layer": 0.11,
        "start": 43.5
      },
      {
        "kind": "flavourings",
        "delivery": "droplets",
        "name": "Flavourings",
        "short": "Flavourings",
        "amount": "Quantity undisclosed",
        "unit": "Listed ingredient · individual dose not published",
        "description": "Ingredients that create a drink’s taste and smell. Your nose and taste buds detect them. “Flavourings” describes a mixture, not one substance with one predictable effect on your organs.",
        "color": "#d7bca2",
        "duration": 5.3,
        "formula": "Taste + aroma",
        "ingredientIds": [
          "flavourings"
        ],
        "learn": "flavourings",
        "layer": 0.09,
        "start": 48.8
      },
      {
        "kind": "sucrose-acetate-isobutyrate",
        "delivery": "droplets",
        "name": "Sucrose acetate isobutyrate",
        "short": "E444",
        "amount": "Quantity undisclosed",
        "unit": "Listed ingredient · individual dose not published",
        "description": "A modified sucrose-based ingredient used to stabilise drink emulsions. It helps ingredients stay distributed in the bottle. Despite the word sucrose, it is not the same ingredient as table sugar.",
        "color": "#dccfa7",
        "duration": 5.3,
        "formula": "E444 · SAIB",
        "ingredientIds": [
          "sucrose-acetate-isobutyrate"
        ],
        "learn": "sucrose-acetate-isobutyrate",
        "layer": 0.09,
        "start": 54.1
      },
      {
        "kind": "wood-rosin-esters",
        "delivery": "droplets",
        "name": "Glycerol esters of wood rosins",
        "short": "E445",
        "amount": "Quantity undisclosed",
        "unit": "Listed ingredient · individual dose not published",
        "description": "A processed food ingredient that helps flavour components stay mixed. Its code is E445. It mainly works in the bottle, helping parts of the recipe stay together. There is no proven body or organ benefit from its use in this drink.",
        "color": "#cab997",
        "duration": 5.3,
        "formula": "E445 · ester gum",
        "ingredientIds": [
          "wood-rosin-esters"
        ],
        "learn": "wood-rosin-esters",
        "layer": 0.1,
        "start": 59.4
      },
      {
        "kind": "sunset-yellow",
        "delivery": "droplets",
        "name": "Sunset Yellow FCF",
        "short": "Yellow 6",
        "amount": "Quantity undisclosed",
        "unit": "Listed ingredient · individual dose not published",
        "description": "A food colour called Yellow 6 on the selected US Gatorade label. Its purpose is colour. It is not vitamin A, and the orange shade does not tell you that the drink contains orange juice.",
        "color": "#ef9a26",
        "duration": 5.3,
        "formula": "Yellow 6 · E110",
        "ingredientIds": [
          "sunset-yellow"
        ],
        "learn": "sunset-yellow",
        "layer": 0.1,
        "start": 64.7
      },
      {
        "kind": "final",
        "delivery": "pour",
        "name": "From layers to a drink.",
        "short": "Mix together",
        "amount": "500",
        "unit": "ml · Gatorade Orange",
        "description": "The teaching colours curl into one another as the spoon stirs. They gradually become this drink’s representative colour. Colour, viscosity and light transmission remain visual approximations.",
        "color": "#ee8e20",
        "duration": 14,
        "formula": "One complete mixture",
        "ingredientIds": [],
        "layer": 0,
        "start": 70
      }
    ],
    // 1.13.4 – Næring – per100 er referansemengd, perServing er éin behaldar
    "nutrition": {
      "rows": [
        {
          "id": "kcal",
          "name": "Energy",
          "unit": "kcal",
          "per100": 24,
          "perServing": 120
        },
        {
          "id": "kj",
          "name": "Energy",
          "unit": "kJ",
          "per100": null,
          "perServing": null
        },
        {
          "id": "caffeine",
          "name": "Caffeine",
          "unit": "mg",
          "guide": "caffeine",
          "per100": 0,
          "perServing": 0
        },
        {
          "id": "carbs",
          "name": "Carbohydrate",
          "unit": "g",
          "per100": 6.2,
          "perServing": 31
        },
        {
          "id": "sugars",
          "name": "of which sugars",
          "unit": "g",
          "guide": "sugar",
          "per100": 5.8,
          "perServing": 29
        },
        {
          "id": "fat",
          "name": "Fat",
          "unit": "g",
          "per100": 0,
          "perServing": 0
        },
        {
          "id": "saturates",
          "name": "of which saturates",
          "unit": "g",
          "per100": null,
          "perServing": null
        },
        {
          "id": "protein",
          "name": "Protein",
          "unit": "g",
          "per100": 0,
          "perServing": 0
        },
        {
          "id": "sodium",
          "name": "Sodium",
          "unit": "g",
          "per100": 0.046,
          "perServing": 0.23
        },
        {
          "id": "potassium",
          "name": "Potassium",
          "unit": "mg",
          "per100": 14,
          "perServing": 70
        }
      ],
      "massRows": [],
      "container": "bottle",
      "referenceUnit": "ml",
      "note": "US 500 ml SmartLabel, UPC 052000059120. Per-bottle values are the declared rounded label amounts; per 100 ml is one fifth. Sodium is shown in grams, converted from 230 mg per bottle. Saturates and kJ are not quantified on this label and are not invented. Sodium and potassium are totals across the recipe.",
      "source": "https://smartlabel.pepsico.info/052000059120-0001-en-US/index.html"
    },
    // 1.13.5 – Drikkespesifikke forklaringar og atterhald
    "contexts": [],
    // 1.13.6 – Lenkjer til vidare utforsking av ingrediensane
    "discoveries": [
      "sucrose-acetate-isobutyrate",
      "wood-rosin-esters",
      "gum-arabic",
      "monopotassium-phosphate",
      "sunset-yellow",
      "sodium-citrate",
      "citric-acid"
    ],
    "recipeDiscoveries": [
      "sucrose-acetate-isobutyrate",
      "wood-rosin-esters",
      "gum-arabic",
      "monopotassium-phosphate",
      "sunset-yellow",
      "sodium-citrate",
      "citric-acid"
    ]
  },
  // ── DRIKK 1.14: Litago Original [litago-original] ──
  {
    "reviewed": "3 November 2026",
    // 1.14.1 – Namn, bilete, mengder, fargar og kjelder
    "id": "litago-original",
    "name": "Litago Original",
    "category": "Flavoured milk",
    "size": 500,
    "caffeine": null,
    "sugar": "See label",
    "calories": "See label",
    "image": "/litago-original.png",
    "accent": "#855237",
    "tint": "#f8eee6",
    "liquid": "#835138",
    "carbonated": false,
    "container": "carton",
    "opaque": true,
    "description": "Milk, cocoa and gellan gum. Watch a creamy chocolate drink come together.",
    "source": "https://www.tine.no/merkevarer/litago/produkter/litago-original-sjokolademelk-05-liter",
    "label": "https://www.tine.no/merkevarer/litago/produkter/litago-original-sjokolademelk-05-liter",
    "note": "Norwegian 500 ml carton. Contains milk. TINE lists low-fat milk, 5% added sugar, 2% cocoa, flavourings and gellan gum. Its nutrition panel is per 100 g; those values are shown separately without assuming 1 g equals 1 ml. Total sugars include milk sugar as well as added sugar. Cocoa can contain caffeine; no total amount is published. The animation starts with milk rather than a separate water ingredient.",
    // 1.14.2 – Ingrediens-ID-ar for denne drikka
    "ingredients": [
      "milk",
      "sugar",
      "cocoa",
      "flavourings",
      "gellan-gum"
    ],
    // 1.14.3 – Animasjonssteg – start og duration er i sekund
    "stages": [
      {
        "kind": "milk",
        "delivery": "pour",
        "name": "Low-fat milk",
        "short": "Milk",
        "amount": "Quantity undisclosed",
        "unit": "Listed ingredient · individual dose not published",
        "description": "Low-fat milk fills the glass. It already contains water, protein, fat, lactose and minerals; they are not added again as separate recipe steps. Contains milk.",
        "color": "#fff6e4",
        "duration": 10,
        "formula": "Protein · lactose · calcium",
        "ingredientIds": [
          "milk"
        ],
        "learn": "milk",
        "layer": 1.7,
        "start": 0
      },
      {
        "kind": "sugar",
        "delivery": "crystals",
        "name": "Sugar",
        "short": "Sugar",
        "amount": "5% added",
        "unit": "By weight · separate from naturally present milk sugars",
        "description": "The manufacturer lists 5% added sugar by weight. Milk also contains lactose, so added sugar and total sugars are different numbers. This percentage is not converted to grams per carton without a verified package weight.",
        "color": "#eee6c8",
        "duration": 7,
        "formula": "Sweetness + energy",
        "ingredientIds": [
          "sugar"
        ],
        "learn": "sugar",
        "layer": 0.27,
        "start": 10
      },
      {
        "kind": "cocoa",
        "delivery": "powder",
        "name": "Cocoa powder",
        "short": "Cocoa",
        "amount": "Quantity undisclosed",
        "unit": "Listed ingredient · individual dose not published",
        "description": "Fine cocoa powder gives chocolate flavour and brown colour. The label lists 2% cocoa by weight. It can naturally contain caffeine and theobromine; neither amount is disclosed for this carton.",
        "color": "#885332",
        "duration": 5.3,
        "formula": "Chocolate colour + flavour",
        "ingredientIds": [
          "cocoa"
        ],
        "learn": "cocoa",
        "layer": 0.24,
        "start": 17
      },
      {
        "kind": "flavourings",
        "delivery": "droplets",
        "name": "Flavourings",
        "short": "Flavourings",
        "amount": "Quantity undisclosed",
        "unit": "Listed ingredient · individual dose not published",
        "description": "Ingredients that create a drink’s taste and smell. Your nose and taste buds detect them. “Flavourings” describes a mixture, not one substance with one predictable effect on your organs.",
        "color": "#d7bca2",
        "duration": 5.3,
        "formula": "Taste + aroma",
        "ingredientIds": [
          "flavourings"
        ],
        "learn": "flavourings",
        "layer": 0.09,
        "start": 22.3
      },
      {
        "kind": "gellan-gum",
        "delivery": "powder",
        "name": "Gellan gum",
        "short": "E418",
        "amount": "Quantity undisclosed",
        "unit": "Listed ingredient · individual dose not published",
        "description": "A stabiliser made by fermentation that helps keep a drink evenly mixed. Its main job is in the carton: it helps control texture and keep particles suspended. It is not added to stimulate your organs.",
        "color": "#d6d9c4",
        "duration": 5.3,
        "formula": "E418",
        "ingredientIds": [
          "gellan-gum"
        ],
        "learn": "gellan-gum",
        "layer": 0.08,
        "start": 27.6
      },
      {
        "kind": "final",
        "delivery": "pour",
        "name": "From layers to a drink.",
        "short": "Mix together",
        "amount": "500",
        "unit": "ml · Litago Original",
        "description": "The teaching colours curl into one another as the spoon stirs. They gradually become this drink’s representative colour. Colour, viscosity and light transmission remain visual approximations.",
        "color": "#835138",
        "duration": 14,
        "formula": "One complete mixture",
        "ingredientIds": [],
        "layer": 0,
        "start": 32.9
      }
    ],
    // 1.14.4 – Næring – per100 er referansemengd, perServing er éin behaldar
    "nutrition": {
      "rows": [
        {
          "id": "kcal",
          "name": "Energy",
          "unit": "kcal",
          "per100": null,
          "perServing": null
        },
        {
          "id": "kj",
          "name": "Energy",
          "unit": "kJ",
          "per100": null,
          "perServing": null
        },
        {
          "id": "caffeine",
          "name": "Caffeine",
          "unit": "mg",
          "guide": "caffeine",
          "per100": null,
          "perServing": null
        },
        {
          "id": "carbs",
          "name": "Carbohydrate",
          "unit": "g",
          "per100": null,
          "perServing": null
        },
        {
          "id": "sugars",
          "name": "of which sugars",
          "unit": "g",
          "guide": "sugar",
          "per100": null,
          "perServing": null
        },
        {
          "id": "fat",
          "name": "Fat",
          "unit": "g",
          "per100": null,
          "perServing": null
        },
        {
          "id": "saturates",
          "name": "of which saturates",
          "unit": "g",
          "per100": null,
          "perServing": null
        },
        {
          "id": "protein",
          "name": "Protein",
          "unit": "g",
          "per100": null,
          "perServing": null
        },
        {
          "id": "salt",
          "name": "Salt",
          "unit": "g",
          "per100": null,
          "perServing": null
        }
      ],
      "massRows": [
        {
          "id": "kcal",
          "name": "Energy",
          "unit": "kcal",
          "amount": 69
        },
        {
          "id": "kj",
          "name": "Energy",
          "unit": "kJ",
          "amount": 291
        },
        {
          "id": "carbs",
          "name": "Carbohydrate",
          "unit": "g",
          "amount": 9.8
        },
        {
          "id": "sugars",
          "name": "of which sugars",
          "unit": "g",
          "guide": "sugar",
          "amount": 9.6
        },
        {
          "id": "fat",
          "name": "Fat",
          "unit": "g",
          "amount": 1.6
        },
        {
          "id": "saturates",
          "name": "of which saturates",
          "unit": "g",
          "amount": 1
        },
        {
          "id": "protein",
          "name": "Protein",
          "unit": "g",
          "amount": 3.6
        },
        {
          "id": "salt",
          "name": "Salt",
          "unit": "g",
          "amount": 0.1
        },
        {
          "id": "b2",
          "name": "Vitamin B2",
          "unit": "mg",
          "guide": "b2",
          "amount": 0.15
        },
        {
          "id": "b12",
          "name": "Vitamin B12",
          "unit": "µg",
          "guide": "b12",
          "amount": 0.19
        },
        {
          "id": "potassium",
          "name": "Potassium",
          "unit": "mg",
          "amount": 206
        },
        {
          "id": "calcium",
          "name": "Calcium",
          "unit": "mg",
          "amount": 112
        },
        {
          "id": "phosphorus",
          "name": "Phosphorus",
          "unit": "mg",
          "amount": 103
        },
        {
          "id": "iodine",
          "name": "Iodine",
          "unit": "µg",
          "amount": 15.6
        },
        {
          "id": "biotin",
          "name": "Biotin",
          "unit": "µg",
          "amount": 5.3
        }
      ],
      "container": "carton",
      "referenceUnit": "ml",
      "note": "TINE supplies nutrition per 100 g, not per 100 ml. The source values are preserved in the separate weight-based table. A verified product density or total package weight is needed to calculate volume-based values. Cocoa can contain caffeine, but its amount is not published.",
      "source": "https://www.tine.no/merkevarer/litago/produkter/litago-original-sjokolademelk-05-liter"
    },
    // 1.14.5 – Drikkespesifikke forklaringar og atterhald
    "contexts": [
      {
        "id": "lactose",
        "parentId": "milk"
      },
      {
        "id": "casein",
        "parentId": "milk"
      },
      {
        "id": "theobromine",
        "parentId": "cocoa"
      },
      {
        "id": "cocoa-flavanols",
        "parentId": "cocoa"
      }
    ],
    // 1.14.6 – Lenkjer til vidare utforsking av ingrediensane
    "discoveries": [
      "theobromine",
      "cocoa-flavanols",
      "casein",
      "lactose",
      "gellan-gum",
      "cocoa"
    ],
    "recipeDiscoveries": [
      "gellan-gum",
      "cocoa"
    ]
  },
  // ── DRIKK 1.15: TINE IsKaffe Original Cappuccino [tine-iskaffe] ──
  {
    "reviewed": "3 November 2026",
    // 1.15.1 – Namn, bilete, mengder, fargar og kjelder
    "id": "tine-iskaffe",
    "name": "TINE IsKaffe Original Cappuccino",
    "category": "Coffee & tea",
    "size": 330,
    "caffeine": null,
    "sugar": "See label",
    "calories": "See label",
    "image": "/tine-iskaffe.png",
    "accent": "#926044",
    "tint": "#f8f0e7",
    "liquid": "#aa7850",
    "carbonated": false,
    "container": "carton",
    "opaque": true,
    "description": "A chilled milk coffee with whey powder, sodium citrate and gellan gum.",
    "source": "https://www.tine.no/merkevarer/tine-iskaffe/produkter/tine-iskaffe-original-cappuccino",
    "label": "https://www.tine.no/merkevarer/tine-iskaffe/produkter/tine-iskaffe-original-cappuccino",
    "note": "Norwegian 330 ml carton. Contains milk. TINE lists low-fat milk, 30% coffee, 5% sugar, whey powder, sodium citrates, gellan gum and flavourings. Caffeine comes from the coffee; its exact amount is not published here. The separate caffeine chapter is explanatory, not an additional dose. Nutrition is supplied per 100 g and is shown separately without an unverified volume conversion.",
    // 1.15.2 – Ingrediens-ID-ar for denne drikka
    "ingredients": [
      "milk",
      "coffee-solids",
      "sugar",
      "whey-powder",
      "sodium-citrate",
      "gellan-gum",
      "flavourings",
      "caffeine"
    ],
    // 1.15.3 – Animasjonssteg – start og duration er i sekund
    "stages": [
      {
        "kind": "milk",
        "delivery": "pour",
        "name": "Low-fat milk",
        "short": "Milk",
        "amount": "Quantity undisclosed",
        "unit": "Listed ingredient · individual dose not published",
        "description": "Low-fat milk fills the glass. It already contains water, protein, fat, lactose and minerals; they are not added again as separate recipe steps. Contains milk.",
        "color": "#fff6e4",
        "duration": 10,
        "formula": "Protein · lactose · calcium",
        "ingredientIds": [
          "milk"
        ],
        "learn": "milk",
        "layer": 1.7,
        "start": 0
      },
      {
        "kind": "coffee-solids",
        "delivery": "extract",
        "name": "Brewed coffee",
        "short": "Coffee",
        "amount": "30% coffee",
        "unit": "Manufacturer recipe share · caffeine is already in the coffee",
        "description": "The recipe lists brewed coffee, not dry coffee powder. Extracted coffee compounds bring colour, flavour and caffeine into the milk. The later caffeine chapter explains that same caffeine rather than adding a second dose.",
        "color": "#9f7353",
        "duration": 8,
        "formula": "Brewed, not blended",
        "ingredientIds": [
          "coffee-solids"
        ],
        "learn": "coffee-solids",
        "layer": 0.6,
        "start": 10
      },
      {
        "kind": "sugar",
        "delivery": "crystals",
        "name": "Sugar",
        "short": "Sugar",
        "amount": "5% added",
        "unit": "By weight · separate from naturally present milk sugars",
        "description": "The manufacturer lists 5% added sugar by weight. Milk also contains lactose, so added sugar and total sugars are different numbers. This percentage is not converted to grams per carton without a verified package weight.",
        "color": "#eee6c8",
        "duration": 7,
        "formula": "Sweetness + energy",
        "ingredientIds": [
          "sugar"
        ],
        "learn": "sugar",
        "layer": 0.27,
        "start": 18
      },
      {
        "kind": "whey-powder",
        "delivery": "powder",
        "name": "Whey powder",
        "short": "Whey",
        "amount": "Quantity undisclosed",
        "unit": "Listed ingredient · individual dose not published",
        "description": "A dried ingredient made from the liquid part of milk left during cheesemaking. It adds milk solids, which can include lactose and protein. Whey powder is not automatically the same as a concentrated sports protein supplement.",
        "color": "#eee4c7",
        "duration": 5.3,
        "formula": "Milk-derived solids",
        "ingredientIds": [
          "whey-powder"
        ],
        "learn": "whey-powder",
        "layer": 0.12,
        "start": 25
      },
      {
        "kind": "sodium-citrate",
        "delivery": "powder",
        "name": "Sodium citrate",
        "short": "E331",
        "amount": "Quantity undisclosed",
        "unit": "Listed ingredient · individual dose not published",
        "description": "A salt related to citric acid. Its code is E331. It helps control the drink’s acidity and adds some sodium. The ingredient name does not tell us how much sodium the bottle supplies.",
        "color": "#bbd8aa",
        "duration": 5.3,
        "formula": "E331 · citrate salts",
        "ingredientIds": [
          "sodium-citrate"
        ],
        "learn": "sodium-citrate",
        "layer": 0.09,
        "start": 30.3
      },
      {
        "kind": "gellan-gum",
        "delivery": "powder",
        "name": "Gellan gum",
        "short": "E418",
        "amount": "Quantity undisclosed",
        "unit": "Listed ingredient · individual dose not published",
        "description": "A stabiliser made by fermentation that helps keep a drink evenly mixed. Its main job is in the carton: it helps control texture and keep particles suspended. It is not added to stimulate your organs.",
        "color": "#d6d9c4",
        "duration": 5.3,
        "formula": "E418",
        "ingredientIds": [
          "gellan-gum"
        ],
        "learn": "gellan-gum",
        "layer": 0.08,
        "start": 35.6
      },
      {
        "kind": "flavourings",
        "delivery": "droplets",
        "name": "Flavourings",
        "short": "Flavourings",
        "amount": "Quantity undisclosed",
        "unit": "Listed ingredient · individual dose not published",
        "description": "Ingredients that create a drink’s taste and smell. Your nose and taste buds detect them. “Flavourings” describes a mixture, not one substance with one predictable effect on your organs.",
        "color": "#d7bca2",
        "duration": 5.3,
        "formula": "Taste + aroma",
        "ingredientIds": [
          "flavourings"
        ],
        "learn": "flavourings",
        "layer": 0.09,
        "start": 40.9
      },
      {
        "kind": "caffeine",
        "delivery": "powder",
        "name": "Caffeine",
        "short": "Caffeine",
        "amount": "Present",
        "unit": "Present · amount not disclosed",
        "description": "The ingredient that can make you feel more awake. In your brain, caffeine blocks some of the signals that make you feel sleepy. Too much can also make your heart race and keep you awake at night.",
        "color": "#8cbbeb",
        "duration": 5.3,
        "formula": "C₈H₁₀N₄O₂",
        "ingredientIds": [
          "caffeine"
        ],
        "learn": "caffeine",
        "layer": 0.13,
        "start": 46.2
      },
      {
        "kind": "final",
        "delivery": "pour",
        "name": "From layers to a drink.",
        "short": "Mix together",
        "amount": "330",
        "unit": "ml · TINE IsKaffe Original Cappuccino",
        "description": "The teaching colours curl into one another as the spoon stirs. They gradually become this drink’s representative colour. Colour, viscosity and light transmission remain visual approximations.",
        "color": "#aa7850",
        "duration": 14,
        "formula": "One complete mixture",
        "ingredientIds": [],
        "layer": 0,
        "start": 51.5
      }
    ],
    // 1.15.4 – Næring – per100 er referansemengd, perServing er éin behaldar
    "nutrition": {
      "rows": [
        {
          "id": "kcal",
          "name": "Energy",
          "unit": "kcal",
          "per100": null,
          "perServing": null
        },
        {
          "id": "kj",
          "name": "Energy",
          "unit": "kJ",
          "per100": null,
          "perServing": null
        },
        {
          "id": "caffeine",
          "name": "Caffeine",
          "unit": "mg",
          "guide": "caffeine",
          "per100": null,
          "perServing": null
        },
        {
          "id": "carbs",
          "name": "Carbohydrate",
          "unit": "g",
          "per100": null,
          "perServing": null
        },
        {
          "id": "sugars",
          "name": "of which sugars",
          "unit": "g",
          "guide": "sugar",
          "per100": null,
          "perServing": null
        },
        {
          "id": "fat",
          "name": "Fat",
          "unit": "g",
          "per100": null,
          "perServing": null
        },
        {
          "id": "saturates",
          "name": "of which saturates",
          "unit": "g",
          "per100": null,
          "perServing": null
        },
        {
          "id": "protein",
          "name": "Protein",
          "unit": "g",
          "per100": null,
          "perServing": null
        },
        {
          "id": "salt",
          "name": "Salt",
          "unit": "g",
          "per100": null,
          "perServing": null
        }
      ],
      "massRows": [
        {
          "id": "kcal",
          "name": "Energy",
          "unit": "kcal",
          "amount": 56
        },
        {
          "id": "kj",
          "name": "Energy",
          "unit": "kJ",
          "amount": 236
        },
        {
          "id": "carbs",
          "name": "Carbohydrate",
          "unit": "g",
          "amount": 9.5
        },
        {
          "id": "sugars",
          "name": "of which sugars",
          "unit": "g",
          "guide": "sugar",
          "amount": 9
        },
        {
          "id": "fat",
          "name": "Fat",
          "unit": "g",
          "amount": 0.7
        },
        {
          "id": "saturates",
          "name": "of which saturates",
          "unit": "g",
          "amount": 0.5
        },
        {
          "id": "protein",
          "name": "Protein",
          "unit": "g",
          "amount": 2.8
        },
        {
          "id": "salt",
          "name": "Salt",
          "unit": "g",
          "amount": 0.2
        },
        {
          "id": "b2",
          "name": "Vitamin B2",
          "unit": "mg",
          "guide": "b2",
          "amount": 0.13
        },
        {
          "id": "potassium",
          "name": "Potassium",
          "unit": "mg",
          "amount": 157
        },
        {
          "id": "calcium",
          "name": "Calcium",
          "unit": "mg",
          "amount": 90.8
        },
        {
          "id": "phosphorus",
          "name": "Phosphorus",
          "unit": "mg",
          "amount": 78
        },
        {
          "id": "iodine",
          "name": "Iodine",
          "unit": "µg",
          "amount": 14.3
        },
        {
          "id": "biotin",
          "name": "Biotin",
          "unit": "µg",
          "amount": 4.6
        }
      ],
      "container": "carton",
      "referenceUnit": "ml",
      "note": "TINE supplies nutrition per 100 g. Those source values appear separately below, without assuming that 330 ml weighs 330 g. Total sugars include milk sugar. Coffee supplies caffeine, but an exact caffeine amount is not published on the source page.",
      "source": "https://www.tine.no/merkevarer/tine-iskaffe/produkter/tine-iskaffe-original-cappuccino"
    },
    // 1.15.5 – Drikkespesifikke forklaringar og atterhald
    "contexts": [
      {
        "id": "lactose",
        "parentId": "milk"
      },
      {
        "id": "casein",
        "parentId": "milk"
      },
      {
        "id": "chlorogenic-acids",
        "parentId": "coffee-solids"
      },
      {
        "id": "trigonelline",
        "parentId": "coffee-solids"
      },
      {
        "id": "coffee-melanoidins",
        "parentId": "coffee-solids"
      }
    ],
    // 1.15.6 – Lenkjer til vidare utforsking av ingrediensane
    "discoveries": [
      "chlorogenic-acids",
      "trigonelline",
      "casein",
      "lactose",
      "coffee-melanoidins",
      "gellan-gum",
      "sodium-citrate",
      "whey-powder"
    ],
    "recipeDiscoveries": [
      "gellan-gum",
      "sodium-citrate",
      "whey-powder"
    ]
  },
  // ── DRIKK 1.16: Villa Original [villa] ──
  {
    "reviewed": "4 November 2026",
    // 1.16.1 – Namn, bilete, mengder, fargar og kjelder
    "id": "villa",
    "name": "Villa Original",
    "category": "Soft drinks",
    "size": 500,
    "container": "bottle",
    "caffeine": 0,
    "sugar": "56 g",
    "calories": "225",
    "image": "/villa.png",
    "accent": "#b17b38",
    "tint": "#fcf4e6",
    "liquid": "#c78d3d",
    "carbonated": true,
    "description": "A Norwegian classic with caramel colour, citric acid and sodium benzoate.",
    "source": "https://www.ringnes.no/produkter/villa/villa/",
    "label": "https://www.ringnes.no/produkter/villa/villa/",
    "note": "Norwegian Original recipe, shown as a 500 ml bottle. Ringnes gives 11.2 g sugars and 45 kcal per 100 ml. No caffeine or intense sweeteners are listed. E150d gives colour; its individual amount is not published.",
    // 1.16.2 – Ingrediens-ID-ar for denne drikka
    "ingredients": [
      "water",
      "carbonation",
      "sugar",
      "citric-acid",
      "flavourings",
      "caramel",
      "sodium-benzoate"
    ],
    // 1.16.3 – Animasjonssteg – start og duration er i sekund
    "stages": [
      {
        "kind": "water",
        "delivery": "pour",
        "name": "Water",
        "short": "Water",
        "amount": "The foundation",
        "unit": "A clear starting point",
        "description": "A clear first pour settles into the glass. The separate layers that follow are enlarged teaching colours, not real concentrations or a factory recipe.",
        "color": "#c9e7f1",
        "duration": 10,
        "formula": "H₂O",
        "ingredientIds": [
          "water"
        ],
        "learn": "water",
        "layer": 1.25,
        "start": 0
      },
      {
        "kind": "carbonation",
        "delivery": "gas",
        "name": "Carbon dioxide",
        "short": "CO₂",
        "amount": "Quantity undisclosed",
        "unit": "Listed ingredient · individual dose not published",
        "description": "Carbon dioxide disperses through the water. Small bubbles rise along the glass; the gas does not form a separate liquid layer in the real drink.",
        "color": "#d9f1f6",
        "duration": 4.5,
        "formula": "CO₂",
        "ingredientIds": [
          "carbonation"
        ],
        "learn": "carbonation",
        "layer": 0.045,
        "start": 10
      },
      {
        "kind": "sugar",
        "delivery": "crystals",
        "name": "Sugar",
        "short": "Sugar",
        "amount": "56 g",
        "unit": "Combined sugars per 500 ml · see source note",
        "description": "Carbohydrate that gives a drink sweetness and calories. Your body breaks sugars down and uses them for fuel. Bacteria in your mouth also use sugar and make acids that can damage your teeth.",
        "color": "#eee6c8",
        "duration": 7,
        "formula": "Sweetness + energy",
        "ingredientIds": [
          "sugar"
        ],
        "learn": "sugar",
        "layer": 0.27,
        "start": 14.5
      },
      {
        "kind": "citric-acid",
        "delivery": "crystals",
        "name": "Citric acid",
        "short": "Citric acid",
        "amount": "Quantity undisclosed",
        "unit": "Listed ingredient · individual dose not published",
        "description": "An acid that makes drinks taste sharp or sour. Its code is E330. Acidic drinks can wear away tooth enamel and may trigger heartburn. Citric acid’s job in the recipe is flavour and acidity, not making you more alert.",
        "color": "#c6d992",
        "duration": 5.3,
        "formula": "E330 · C₆H₈O₇",
        "ingredientIds": [
          "citric-acid"
        ],
        "learn": "citric-acid",
        "layer": 0.11,
        "start": 21.5
      },
      {
        "kind": "flavourings",
        "delivery": "droplets",
        "name": "Flavourings",
        "short": "Flavourings",
        "amount": "Quantity undisclosed",
        "unit": "Listed ingredient · individual dose not published",
        "description": "Ingredients that create a drink’s taste and smell. Your nose and taste buds detect them. “Flavourings” describes a mixture, not one substance with one predictable effect on your organs.",
        "color": "#d7bca2",
        "duration": 5.3,
        "formula": "Taste + aroma",
        "ingredientIds": [
          "flavourings"
        ],
        "learn": "flavourings",
        "layer": 0.09,
        "start": 26.8
      },
      {
        "kind": "caramel",
        "delivery": "droplets",
        "name": "Sulphite ammonia caramel",
        "short": "E150d",
        "amount": "Quantity undisclosed",
        "unit": "Listed ingredient · individual dose not published",
        "description": "A brown food colour made by controlled processing of carbohydrates. Its code is E150d. It makes cola and some energy drinks brown. It is not added to help your organs or make you more awake.",
        "color": "#ae7950",
        "duration": 5.3,
        "formula": "E150d · class IV caramel",
        "ingredientIds": [
          "caramel"
        ],
        "learn": "caramel",
        "layer": 0.1,
        "start": 32.1
      },
      {
        "kind": "sodium-benzoate",
        "delivery": "powder",
        "name": "Sodium benzoate",
        "short": "E211",
        "amount": "Quantity undisclosed",
        "unit": "Listed ingredient · individual dose not published",
        "description": "A preservative that helps stop spoilage. Its code is E211. It mainly works in the drink by limiting microbes that could spoil it. It is not there to give your body energy or improve an organ.",
        "color": "#b7c7db",
        "duration": 5.3,
        "formula": "E211 · C₇H₅NaO₂",
        "ingredientIds": [
          "sodium-benzoate"
        ],
        "learn": "sodium-benzoate",
        "layer": 0.085,
        "start": 37.4
      },
      {
        "kind": "final",
        "delivery": "pour",
        "name": "From layers to a drink.",
        "short": "Mix together",
        "amount": "500",
        "unit": "ml · Villa Original",
        "description": "The teaching colours curl into one another as the spoon stirs. They gradually become this drink’s representative colour. Colour, viscosity and light transmission remain visual approximations.",
        "color": "#c78d3d",
        "duration": 14,
        "formula": "One complete mixture",
        "ingredientIds": [],
        "layer": 0,
        "start": 42.7
      }
    ],
    // 1.16.4 – Næring – per100 er referansemengd, perServing er éin behaldar
    "nutrition": {
      "rows": [
        {
          "id": "kcal",
          "name": "Energy",
          "unit": "kcal",
          "per100": 45,
          "perServing": 225
        },
        {
          "id": "kj",
          "name": "Energy",
          "unit": "kJ",
          "per100": 189,
          "perServing": 945
        },
        {
          "id": "caffeine",
          "name": "Caffeine",
          "unit": "mg",
          "guide": "caffeine",
          "per100": 0,
          "perServing": 0
        },
        {
          "id": "carbs",
          "name": "Carbohydrate",
          "unit": "g",
          "per100": 11.2,
          "perServing": 56
        },
        {
          "id": "sugars",
          "name": "of which sugars",
          "unit": "g",
          "guide": "sugar",
          "per100": 11.2,
          "perServing": 56
        },
        {
          "id": "fat",
          "name": "Fat",
          "unit": "g",
          "per100": 0,
          "perServing": 0
        },
        {
          "id": "saturates",
          "name": "of which saturates",
          "unit": "g",
          "per100": 0,
          "perServing": 0
        },
        {
          "id": "protein",
          "name": "Protein",
          "unit": "g",
          "per100": 0,
          "perServing": 0
        },
        {
          "id": "salt",
          "name": "Salt",
          "unit": "g",
          "per100": 0,
          "perServing": 0
        }
      ],
      "massRows": [],
      "container": "bottle",
      "referenceUnit": "ml",
      "note": "Norwegian Original recipe, scaled from Ringnes’s per-100-ml panel to one 500 ml bottle. No caffeine or sweeteners are listed.",
      "source": "https://www.ringnes.no/produkter/villa/villa/"
    },
    // 1.16.5 – Drikkespesifikke forklaringar og atterhald
    "contexts": [],
    // 1.16.6 – Lenkjer til vidare utforsking av ingrediensane
    "discoveries": [
      "caramel",
      "sodium-benzoate",
      "citric-acid"
    ],
    "recipeDiscoveries": [
      "caramel",
      "sodium-benzoate",
      "citric-acid"
    ]
  },
  // ── DRIKK 1.17: Mozell Original [mozell] ──
  {
    "reviewed": "4 November 2026",
    // 1.17.1 – Namn, bilete, mengder, fargar og kjelder
    "id": "mozell",
    "name": "Mozell Original",
    "category": "Soft drinks",
    "size": 500,
    "container": "bottle",
    "caffeine": 0,
    "sugar": "36.5 g",
    "calories": "150",
    "image": "/mozell.png",
    "accent": "#6b983d",
    "tint": "#f2f7e9",
    "liquid": "#d9b663",
    "carbonated": true,
    "description": "Apple and grape juice, two preservatives and a different class of caramel colour.",
    "source": "https://www.ringnes.no/produkter/mozell/mozell/",
    "label": "https://www.ringnes.no/produkter/mozell/mozell/",
    "note": "Norwegian Original recipe, 500 ml bottle. Ringnes lists 20% juice from concentrate: 12% grape and 8% apple. The 36.5 g total sugars includes sugars from that juice and added sugar; it must not be counted twice. This recipe uses E150b, not the E150d in cola and Villa. No caffeine is listed.",
    // 1.17.2 – Ingrediens-ID-ar for denne drikka
    "ingredients": [
      "water",
      "carbonation",
      "apple-grape-juice",
      "sugar",
      "citric-acid",
      "flavourings",
      "potassium-sorbate",
      "sodium-benzoate",
      "sulfite-caramel",
      "vitamin-c"
    ],
    // 1.17.3 – Animasjonssteg – start og duration er i sekund
    "stages": [
      {
        "kind": "water",
        "delivery": "pour",
        "name": "Water",
        "short": "Water",
        "amount": "The foundation",
        "unit": "A clear starting point",
        "description": "A clear first pour settles into the glass. The separate layers that follow are enlarged teaching colours, not real concentrations or a factory recipe.",
        "color": "#c9e7f1",
        "duration": 10,
        "formula": "H₂O",
        "ingredientIds": [
          "water"
        ],
        "learn": "water",
        "layer": 1.25,
        "start": 0
      },
      {
        "kind": "carbonation",
        "delivery": "gas",
        "name": "Carbon dioxide",
        "short": "CO₂",
        "amount": "Quantity undisclosed",
        "unit": "Listed ingredient · individual dose not published",
        "description": "Carbon dioxide disperses through the water. Small bubbles rise along the glass; the gas does not form a separate liquid layer in the real drink.",
        "color": "#d9f1f6",
        "duration": 4.5,
        "formula": "CO₂",
        "ingredientIds": [
          "carbonation"
        ],
        "learn": "carbonation",
        "layer": 0.045,
        "start": 10
      },
      {
        "kind": "apple-grape-juice",
        "delivery": "extract",
        "name": "Apple & grape juice from concentrate",
        "short": "Apple & grape",
        "amount": "20% juice",
        "unit": "12% grape + 8% apple · manufacturer recipe",
        "description": "Mozell lists grape and apple juice from concentrate as one 20% fruit-juice portion. The juice sugars already belong to the nutrition panel’s combined sugars figure. The visible layer size does not represent this percentage.",
        "color": "#d9c782",
        "duration": 5.3,
        "formula": "12% grape · 8% apple",
        "ingredientIds": [
          "apple-grape-juice"
        ],
        "learn": "apple-grape-juice",
        "layer": 0.2,
        "start": 14.5
      },
      {
        "kind": "sugar",
        "delivery": "crystals",
        "name": "Sugar",
        "short": "Sugar",
        "amount": "36.5 g",
        "unit": "Combined sugars per 500 ml · see source note",
        "description": "The 36.5 g total covers the entire bottle: added sugar and sugars from the apple and grape juices together. The juice stage does not add a second sugar total.",
        "color": "#eee6c8",
        "duration": 7,
        "formula": "Sweetness + energy",
        "ingredientIds": [
          "sugar"
        ],
        "learn": "sugar",
        "layer": 0.27,
        "start": 19.8
      },
      {
        "kind": "citric-acid",
        "delivery": "crystals",
        "name": "Citric acid",
        "short": "Citric acid",
        "amount": "Quantity undisclosed",
        "unit": "Listed ingredient · individual dose not published",
        "description": "An acid that makes drinks taste sharp or sour. Its code is E330. Acidic drinks can wear away tooth enamel and may trigger heartburn. Citric acid’s job in the recipe is flavour and acidity, not making you more alert.",
        "color": "#c6d992",
        "duration": 5.3,
        "formula": "E330 · C₆H₈O₇",
        "ingredientIds": [
          "citric-acid"
        ],
        "learn": "citric-acid",
        "layer": 0.11,
        "start": 26.8
      },
      {
        "kind": "flavourings",
        "delivery": "droplets",
        "name": "Flavourings",
        "short": "Flavourings",
        "amount": "Quantity undisclosed",
        "unit": "Listed ingredient · individual dose not published",
        "description": "Ingredients that create a drink’s taste and smell. Your nose and taste buds detect them. “Flavourings” describes a mixture, not one substance with one predictable effect on your organs.",
        "color": "#d7bca2",
        "duration": 5.3,
        "formula": "Taste + aroma",
        "ingredientIds": [
          "flavourings"
        ],
        "learn": "flavourings",
        "layer": 0.09,
        "start": 32.1
      },
      {
        "kind": "potassium-sorbate",
        "delivery": "powder",
        "name": "Potassium sorbate",
        "short": "E202",
        "amount": "Quantity undisclosed",
        "unit": "Listed ingredient · individual dose not published",
        "description": "A preservative made from sorbic acid. Its code is E202. It helps stop a drink spoiling. The word “potassium” does not mean the drink supplies a useful mineral dose from this ingredient.",
        "color": "#d1c2d8",
        "duration": 5.3,
        "formula": "E202 · C₆H₇KO₂",
        "ingredientIds": [
          "potassium-sorbate"
        ],
        "learn": "potassium-sorbate",
        "layer": 0.085,
        "start": 37.4
      },
      {
        "kind": "sodium-benzoate",
        "delivery": "powder",
        "name": "Sodium benzoate",
        "short": "E211",
        "amount": "Quantity undisclosed",
        "unit": "Listed ingredient · individual dose not published",
        "description": "A preservative that helps stop spoilage. Its code is E211. It mainly works in the drink by limiting microbes that could spoil it. It is not there to give your body energy or improve an organ.",
        "color": "#b7c7db",
        "duration": 5.3,
        "formula": "E211 · C₇H₅NaO₂",
        "ingredientIds": [
          "sodium-benzoate"
        ],
        "learn": "sodium-benzoate",
        "layer": 0.085,
        "start": 42.7
      },
      {
        "kind": "sulfite-caramel",
        "delivery": "droplets",
        "name": "Sulfite caramel colour",
        "short": "E150b",
        "amount": "Quantity undisclosed",
        "unit": "Listed ingredient · individual dose not published",
        "description": "A brown food colour made by heating carbohydrates using a sulfite process. Its job is to colour the drink. It is a different class from E150d and does not provide an established benefit to a particular organ.",
        "color": "#ae7c43",
        "duration": 5.3,
        "formula": "E150b · Class II",
        "ingredientIds": [
          "sulfite-caramel"
        ],
        "learn": "sulfite-caramel",
        "layer": 0.1,
        "start": 48
      },
      {
        "kind": "vitamin-c",
        "delivery": "powder",
        "name": "Vitamin C · ascorbic acid",
        "short": "Vitamin C",
        "amount": "Quantity undisclosed",
        "unit": "Listed ingredient · individual dose not published",
        "description": "Ascorbic acid, also known as vitamin C, is listed here as an antioxidant to protect the recipe from oxidation. Its presence does not establish a meaningful vitamin dose or make this a vitamin supplement.",
        "color": "#efd376",
        "duration": 5.3,
        "formula": "E300 · C₆H₈O₆",
        "ingredientIds": [
          "vitamin-c"
        ],
        "learn": "vitamin-c",
        "layer": 0.09,
        "start": 53.3
      },
      {
        "kind": "final",
        "delivery": "pour",
        "name": "From layers to a drink.",
        "short": "Mix together",
        "amount": "500",
        "unit": "ml · Mozell Original",
        "description": "The teaching colours curl into one another as the spoon stirs. They gradually become this drink’s representative colour. Colour, viscosity and light transmission remain visual approximations.",
        "color": "#d9b663",
        "duration": 14,
        "formula": "One complete mixture",
        "ingredientIds": [],
        "layer": 0,
        "start": 58.6
      }
    ],
    // 1.17.4 – Næring – per100 er referansemengd, perServing er éin behaldar
    "nutrition": {
      "rows": [
        {
          "id": "kcal",
          "name": "Energy",
          "unit": "kcal",
          "per100": 30,
          "perServing": 150
        },
        {
          "id": "kj",
          "name": "Energy",
          "unit": "kJ",
          "per100": 130,
          "perServing": 650
        },
        {
          "id": "caffeine",
          "name": "Caffeine",
          "unit": "mg",
          "guide": "caffeine",
          "per100": 0,
          "perServing": 0
        },
        {
          "id": "carbs",
          "name": "Carbohydrate",
          "unit": "g",
          "per100": 7.4,
          "perServing": 37
        },
        {
          "id": "sugars",
          "name": "of which sugars",
          "unit": "g",
          "guide": "sugar",
          "per100": 7.3,
          "perServing": 36.5
        },
        {
          "id": "fat",
          "name": "Fat",
          "unit": "g",
          "per100": 0,
          "perServing": 0
        },
        {
          "id": "saturates",
          "name": "of which saturates",
          "unit": "g",
          "per100": 0,
          "perServing": 0
        },
        {
          "id": "protein",
          "name": "Protein",
          "unit": "g",
          "per100": 0,
          "perServing": 0
        },
        {
          "id": "salt",
          "name": "Salt",
          "unit": "g",
          "per100": 0,
          "perServing": 0
        },
        {
          "id": "vitamin-c",
          "name": "Vitamin C",
          "unit": "mg",
          "guide": "vitamin-c",
          "per100": null,
          "perServing": null
        }
      ],
      "massRows": [],
      "container": "bottle",
      "referenceUnit": "ml",
      "note": "Norwegian Original recipe. Total sugars includes the 20% apple-and-grape juice blend and added sugar. Ascorbic acid is an antioxidant ingredient with no published vitamin dose.",
      "source": "https://www.ringnes.no/produkter/mozell/mozell/"
    },
    // 1.17.5 – Drikkespesifikke forklaringar og atterhald
    "contexts": [],
    // 1.17.6 – Lenkjer til vidare utforsking av ingrediensane
    "discoveries": [
      "sulfite-caramel",
      "sodium-benzoate",
      "potassium-sorbate",
      "citric-acid"
    ],
    "recipeDiscoveries": [
      "sulfite-caramel",
      "sodium-benzoate",
      "potassium-sorbate",
      "citric-acid"
    ]
  },
  // ── DRIKK 1.18: Ringnes Julebrus (Red) [ringnes-julebrus] ──
  {
    "reviewed": "4 November 2026",
    // 1.18.1 – Namn, bilete, mengder, fargar og kjelder
    "id": "ringnes-julebrus",
    "name": "Ringnes Julebrus (Red)",
    "category": "Soft drinks",
    "size": 500,
    "container": "bottle",
    "caffeine": 0,
    "sugar": "55 g",
    "calories": "220",
    "image": "/ringnes-julebrus.png",
    "accent": "#c83e4c",
    "tint": "#fff0f1",
    "liquid": "#b91632",
    "carbonated": true,
    "description": "Red Christmas soda: anthocyanins, caramel colour and a sweet festive formula.",
    "source": "https://www.ringnes.no/produkter/ringnes/ringnes-julebrus/",
    "label": "https://www.ringnes.no/produkter/ringnes/ringnes-julebrus/",
    "note": "The red Norwegian Ringnes Julebrus with sugar, shown as a 500 ml bottle. The manufacturer lists 11 g sugars and 44 kcal per 100 ml. Its colour blend contains E163 and E150d, shown as separate teaching chapters. No caffeine is listed. This is the Original recipe, not the light version.",
    // 1.18.2 – Ingrediens-ID-ar for denne drikka
    "ingredients": [
      "water",
      "carbonation",
      "sugar",
      "citric-acid",
      "flavourings",
      "anthocyanins",
      "caramel",
      "sodium-benzoate"
    ],
    // 1.18.3 – Animasjonssteg – start og duration er i sekund
    "stages": [
      {
        "kind": "water",
        "delivery": "pour",
        "name": "Water",
        "short": "Water",
        "amount": "The foundation",
        "unit": "A clear starting point",
        "description": "A clear first pour settles into the glass. The separate layers that follow are enlarged teaching colours, not real concentrations or a factory recipe.",
        "color": "#c9e7f1",
        "duration": 10,
        "formula": "H₂O",
        "ingredientIds": [
          "water"
        ],
        "learn": "water",
        "layer": 1.25,
        "start": 0
      },
      {
        "kind": "carbonation",
        "delivery": "gas",
        "name": "Carbon dioxide",
        "short": "CO₂",
        "amount": "Quantity undisclosed",
        "unit": "Listed ingredient · individual dose not published",
        "description": "Carbon dioxide disperses through the water. Small bubbles rise along the glass; the gas does not form a separate liquid layer in the real drink.",
        "color": "#d9f1f6",
        "duration": 4.5,
        "formula": "CO₂",
        "ingredientIds": [
          "carbonation"
        ],
        "learn": "carbonation",
        "layer": 0.045,
        "start": 10
      },
      {
        "kind": "sugar",
        "delivery": "crystals",
        "name": "Sugar",
        "short": "Sugar",
        "amount": "55 g",
        "unit": "Combined sugars per 500 ml · see source note",
        "description": "Carbohydrate that gives a drink sweetness and calories. Your body breaks sugars down and uses them for fuel. Bacteria in your mouth also use sugar and make acids that can damage your teeth.",
        "color": "#eee6c8",
        "duration": 7,
        "formula": "Sweetness + energy",
        "ingredientIds": [
          "sugar"
        ],
        "learn": "sugar",
        "layer": 0.27,
        "start": 14.5
      },
      {
        "kind": "citric-acid",
        "delivery": "crystals",
        "name": "Citric acid",
        "short": "Citric acid",
        "amount": "Quantity undisclosed",
        "unit": "Listed ingredient · individual dose not published",
        "description": "An acid that makes drinks taste sharp or sour. Its code is E330. Acidic drinks can wear away tooth enamel and may trigger heartburn. Citric acid’s job in the recipe is flavour and acidity, not making you more alert.",
        "color": "#c6d992",
        "duration": 5.3,
        "formula": "E330 · C₆H₈O₇",
        "ingredientIds": [
          "citric-acid"
        ],
        "learn": "citric-acid",
        "layer": 0.11,
        "start": 21.5
      },
      {
        "kind": "flavourings",
        "delivery": "droplets",
        "name": "Flavourings",
        "short": "Flavourings",
        "amount": "Quantity undisclosed",
        "unit": "Listed ingredient · individual dose not published",
        "description": "Ingredients that create a drink’s taste and smell. Your nose and taste buds detect them. “Flavourings” describes a mixture, not one substance with one predictable effect on your organs.",
        "color": "#d7bca2",
        "duration": 5.3,
        "formula": "Taste + aroma",
        "ingredientIds": [
          "flavourings"
        ],
        "learn": "flavourings",
        "layer": 0.09,
        "start": 26.8
      },
      {
        "kind": "anthocyanins",
        "delivery": "droplets",
        "name": "Anthocyanins",
        "short": "E163",
        "amount": "Quantity undisclosed",
        "unit": "Listed ingredient · individual dose not published",
        "description": "A family of plant pigments that can give food and drinks red, purple or blue shades. In these recipes they are added for colour. A plant pigment in a drink is not evidence that the bottle protects your heart or brain.",
        "color": "#c34876",
        "duration": 5.3,
        "formula": "E163 · plant pigments",
        "ingredientIds": [
          "anthocyanins"
        ],
        "learn": "anthocyanins",
        "layer": 0.1,
        "start": 32.1
      },
      {
        "kind": "caramel",
        "delivery": "droplets",
        "name": "Sulphite ammonia caramel",
        "short": "E150d",
        "amount": "Quantity undisclosed",
        "unit": "Listed ingredient · individual dose not published",
        "description": "A brown food colour made by controlled processing of carbohydrates. Its code is E150d. It makes cola and some energy drinks brown. It is not added to help your organs or make you more awake.",
        "color": "#ae7950",
        "duration": 5.3,
        "formula": "E150d · class IV caramel",
        "ingredientIds": [
          "caramel"
        ],
        "learn": "caramel",
        "layer": 0.1,
        "start": 37.4
      },
      {
        "kind": "sodium-benzoate",
        "delivery": "powder",
        "name": "Sodium benzoate",
        "short": "E211",
        "amount": "Quantity undisclosed",
        "unit": "Listed ingredient · individual dose not published",
        "description": "A preservative that helps stop spoilage. Its code is E211. It mainly works in the drink by limiting microbes that could spoil it. It is not there to give your body energy or improve an organ.",
        "color": "#b7c7db",
        "duration": 5.3,
        "formula": "E211 · C₇H₅NaO₂",
        "ingredientIds": [
          "sodium-benzoate"
        ],
        "learn": "sodium-benzoate",
        "layer": 0.085,
        "start": 42.7
      },
      {
        "kind": "final",
        "delivery": "pour",
        "name": "From layers to a drink.",
        "short": "Mix together",
        "amount": "500",
        "unit": "ml · Ringnes Julebrus (Red)",
        "description": "The teaching colours curl into one another as the spoon stirs. They gradually become this drink’s representative colour. Colour, viscosity and light transmission remain visual approximations.",
        "color": "#b91632",
        "duration": 14,
        "formula": "One complete mixture",
        "ingredientIds": [],
        "layer": 0,
        "start": 48
      }
    ],
    // 1.18.4 – Næring – per100 er referansemengd, perServing er éin behaldar
    "nutrition": {
      "rows": [
        {
          "id": "kcal",
          "name": "Energy",
          "unit": "kcal",
          "per100": 44,
          "perServing": 220
        },
        {
          "id": "kj",
          "name": "Energy",
          "unit": "kJ",
          "per100": 187,
          "perServing": 935
        },
        {
          "id": "caffeine",
          "name": "Caffeine",
          "unit": "mg",
          "guide": "caffeine",
          "per100": 0,
          "perServing": 0
        },
        {
          "id": "carbs",
          "name": "Carbohydrate",
          "unit": "g",
          "per100": 11,
          "perServing": 55
        },
        {
          "id": "sugars",
          "name": "of which sugars",
          "unit": "g",
          "guide": "sugar",
          "per100": 11,
          "perServing": 55
        },
        {
          "id": "fat",
          "name": "Fat",
          "unit": "g",
          "per100": 0,
          "perServing": 0
        },
        {
          "id": "saturates",
          "name": "of which saturates",
          "unit": "g",
          "per100": 0,
          "perServing": 0
        },
        {
          "id": "protein",
          "name": "Protein",
          "unit": "g",
          "per100": 0,
          "perServing": 0
        },
        {
          "id": "salt",
          "name": "Salt",
          "unit": "g",
          "per100": 0,
          "perServing": 0
        }
      ],
      "massRows": [],
      "container": "bottle",
      "referenceUnit": "ml",
      "note": "Red Ringnes Julebrus with sugar, using the manufacturer’s per-100-ml values and a 500 ml bottle. No caffeine is listed.",
      "source": "https://www.ringnes.no/produkter/ringnes/ringnes-julebrus/"
    },
    // 1.18.5 – Drikkespesifikke forklaringar og atterhald
    "contexts": [],
    // 1.18.6 – Lenkjer til vidare utforsking av ingrediensane
    "discoveries": [
      "anthocyanins",
      "caramel",
      "sodium-benzoate",
      "citric-acid"
    ],
    "recipeDiscoveries": [
      "anthocyanins",
      "caramel",
      "sodium-benzoate",
      "citric-acid"
    ]
  },
  // ── DRIKK 1.19: Hamar & Lillehammer Julebrus (Brown) [hamar-julebrus] ──
  {
    "reviewed": "4 November 2026",
    // 1.19.1 – Namn, bilete, mengder, fargar og kjelder
    "id": "hamar-julebrus",
    "name": "Hamar & Lillehammer Julebrus (Brown)",
    "category": "Soft drinks",
    "size": 500,
    "container": "bottle",
    "caffeine": 0,
    "sugar": "56 g",
    "calories": "225",
    "image": "/hamar-julebrus.png",
    "accent": "#ad7334",
    "tint": "#fcf2e5",
    "liquid": "#b4782d",
    "carbonated": true,
    "description": "Brown Christmas soda with caramel colour, citric acid and a distinct festive flavour.",
    "source": "https://www.ringnes.no/produkter/hamar-og-lillehammer-bryggeri/hamar-og-lillehammer-julebrus/",
    "label": "https://www.ringnes.no/produkter/hamar-og-lillehammer-bryggeri/hamar-og-lillehammer-julebrus/",
    "note": "Norwegian Hamar og Lillehammer Julebrus with sugar, shown as a 500 ml bottle. Ringnes gives 11.2 g sugars and 45 kcal per 100 ml. E150d provides the brown colour. No caffeine or intense sweeteners are listed. The separate light recipe is not used.",
    // 1.19.2 – Ingrediens-ID-ar for denne drikka
    "ingredients": [
      "water",
      "carbonation",
      "sugar",
      "citric-acid",
      "flavourings",
      "caramel",
      "sodium-benzoate"
    ],
    // 1.19.3 – Animasjonssteg – start og duration er i sekund
    "stages": [
      {
        "kind": "water",
        "delivery": "pour",
        "name": "Water",
        "short": "Water",
        "amount": "The foundation",
        "unit": "A clear starting point",
        "description": "A clear first pour settles into the glass. The separate layers that follow are enlarged teaching colours, not real concentrations or a factory recipe.",
        "color": "#c9e7f1",
        "duration": 10,
        "formula": "H₂O",
        "ingredientIds": [
          "water"
        ],
        "learn": "water",
        "layer": 1.25,
        "start": 0
      },
      {
        "kind": "carbonation",
        "delivery": "gas",
        "name": "Carbon dioxide",
        "short": "CO₂",
        "amount": "Quantity undisclosed",
        "unit": "Listed ingredient · individual dose not published",
        "description": "Carbon dioxide disperses through the water. Small bubbles rise along the glass; the gas does not form a separate liquid layer in the real drink.",
        "color": "#d9f1f6",
        "duration": 4.5,
        "formula": "CO₂",
        "ingredientIds": [
          "carbonation"
        ],
        "learn": "carbonation",
        "layer": 0.045,
        "start": 10
      },
      {
        "kind": "sugar",
        "delivery": "crystals",
        "name": "Sugar",
        "short": "Sugar",
        "amount": "56 g",
        "unit": "Combined sugars per 500 ml · see source note",
        "description": "Carbohydrate that gives a drink sweetness and calories. Your body breaks sugars down and uses them for fuel. Bacteria in your mouth also use sugar and make acids that can damage your teeth.",
        "color": "#eee6c8",
        "duration": 7,
        "formula": "Sweetness + energy",
        "ingredientIds": [
          "sugar"
        ],
        "learn": "sugar",
        "layer": 0.27,
        "start": 14.5
      },
      {
        "kind": "citric-acid",
        "delivery": "crystals",
        "name": "Citric acid",
        "short": "Citric acid",
        "amount": "Quantity undisclosed",
        "unit": "Listed ingredient · individual dose not published",
        "description": "An acid that makes drinks taste sharp or sour. Its code is E330. Acidic drinks can wear away tooth enamel and may trigger heartburn. Citric acid’s job in the recipe is flavour and acidity, not making you more alert.",
        "color": "#c6d992",
        "duration": 5.3,
        "formula": "E330 · C₆H₈O₇",
        "ingredientIds": [
          "citric-acid"
        ],
        "learn": "citric-acid",
        "layer": 0.11,
        "start": 21.5
      },
      {
        "kind": "flavourings",
        "delivery": "droplets",
        "name": "Flavourings",
        "short": "Flavourings",
        "amount": "Quantity undisclosed",
        "unit": "Listed ingredient · individual dose not published",
        "description": "Ingredients that create a drink’s taste and smell. Your nose and taste buds detect them. “Flavourings” describes a mixture, not one substance with one predictable effect on your organs.",
        "color": "#d7bca2",
        "duration": 5.3,
        "formula": "Taste + aroma",
        "ingredientIds": [
          "flavourings"
        ],
        "learn": "flavourings",
        "layer": 0.09,
        "start": 26.8
      },
      {
        "kind": "caramel",
        "delivery": "droplets",
        "name": "Sulphite ammonia caramel",
        "short": "E150d",
        "amount": "Quantity undisclosed",
        "unit": "Listed ingredient · individual dose not published",
        "description": "A brown food colour made by controlled processing of carbohydrates. Its code is E150d. It makes cola and some energy drinks brown. It is not added to help your organs or make you more awake.",
        "color": "#ae7950",
        "duration": 5.3,
        "formula": "E150d · class IV caramel",
        "ingredientIds": [
          "caramel"
        ],
        "learn": "caramel",
        "layer": 0.1,
        "start": 32.1
      },
      {
        "kind": "sodium-benzoate",
        "delivery": "powder",
        "name": "Sodium benzoate",
        "short": "E211",
        "amount": "Quantity undisclosed",
        "unit": "Listed ingredient · individual dose not published",
        "description": "A preservative that helps stop spoilage. Its code is E211. It mainly works in the drink by limiting microbes that could spoil it. It is not there to give your body energy or improve an organ.",
        "color": "#b7c7db",
        "duration": 5.3,
        "formula": "E211 · C₇H₅NaO₂",
        "ingredientIds": [
          "sodium-benzoate"
        ],
        "learn": "sodium-benzoate",
        "layer": 0.085,
        "start": 37.4
      },
      {
        "kind": "final",
        "delivery": "pour",
        "name": "From layers to a drink.",
        "short": "Mix together",
        "amount": "500",
        "unit": "ml · Hamar & Lillehammer Julebrus (Brown)",
        "description": "The teaching colours curl into one another as the spoon stirs. They gradually become this drink’s representative colour. Colour, viscosity and light transmission remain visual approximations.",
        "color": "#b4782d",
        "duration": 14,
        "formula": "One complete mixture",
        "ingredientIds": [],
        "layer": 0,
        "start": 42.7
      }
    ],
    // 1.19.4 – Næring – per100 er referansemengd, perServing er éin behaldar
    "nutrition": {
      "rows": [
        {
          "id": "kcal",
          "name": "Energy",
          "unit": "kcal",
          "per100": 45,
          "perServing": 225
        },
        {
          "id": "kj",
          "name": "Energy",
          "unit": "kJ",
          "per100": 190,
          "perServing": 950
        },
        {
          "id": "caffeine",
          "name": "Caffeine",
          "unit": "mg",
          "guide": "caffeine",
          "per100": 0,
          "perServing": 0
        },
        {
          "id": "carbs",
          "name": "Carbohydrate",
          "unit": "g",
          "per100": 11.2,
          "perServing": 56
        },
        {
          "id": "sugars",
          "name": "of which sugars",
          "unit": "g",
          "guide": "sugar",
          "per100": 11.2,
          "perServing": 56
        },
        {
          "id": "fat",
          "name": "Fat",
          "unit": "g",
          "per100": 0,
          "perServing": 0
        },
        {
          "id": "saturates",
          "name": "of which saturates",
          "unit": "g",
          "per100": 0,
          "perServing": 0
        },
        {
          "id": "protein",
          "name": "Protein",
          "unit": "g",
          "per100": 0,
          "perServing": 0
        },
        {
          "id": "salt",
          "name": "Salt",
          "unit": "g",
          "per100": 0,
          "perServing": 0
        }
      ],
      "massRows": [],
      "container": "bottle",
      "referenceUnit": "ml",
      "note": "Brown Hamar og Lillehammer Julebrus with sugar. Quantities are scaled to 500 ml from the manufacturer’s per-100-ml panel. The light recipe is not substituted.",
      "source": "https://www.ringnes.no/produkter/hamar-og-lillehammer-bryggeri/hamar-og-lillehammer-julebrus/"
    },
    // 1.19.5 – Drikkespesifikke forklaringar og atterhald
    "contexts": [],
    // 1.19.6 – Lenkjer til vidare utforsking av ingrediensane
    "discoveries": [
      "caramel",
      "sodium-benzoate",
      "citric-acid"
    ],
    "recipeDiscoveries": [
      "caramel",
      "sodium-benzoate",
      "citric-acid"
    ]
  },
  // ── DRIKK 1.20: Sunniva isTe Fersken [sunniva-iste] ──
  {
    "reviewed": "4 November 2026",
    // 1.20.1 – Namn, bilete, mengder, fargar og kjelder
    "id": "sunniva-iste",
    "name": "Sunniva isTe Fersken",
    "category": "Iced tea",
    "size": 500,
    "container": "bottle",
    "caffeine": null,
    "sugar": "See label",
    "calories": "See label",
    "image": "/sunniva-iste.png",
    "accent": "#cf8b3c",
    "tint": "#fff3e4",
    "liquid": "#bb6d24",
    "carbonated": false,
    "description": "Norwegian peach iced tea with black tea extract, fruit juices and potassium sorbate.",
    "source": "https://www.tine.no/merkevarer/sunniva-iste/produkter/sunniva-iste-fersken",
    "label": "https://www.tine.no/merkevarer/sunniva-iste/produkter/sunniva-iste-fersken",
    "note": "Norwegian Original Fersken recipe, shown as a 500 ml bottle. TINE lists 6.8% added sugar plus peach and lemon juice from concentrate. Its nutrition panel is per 100 g and appears in a separate weight-based table; no density is assumed for volume calculations. Caffeine occurs naturally in the tea extract, with no published amount. Its chapter is explanatory, not a second added dose.",
    // 1.20.2 – Ingrediens-ID-ar for denne drikka
    "ingredients": [
      "water",
      "sugar",
      "peach-concentrate",
      "citric-acid",
      "flavourings",
      "tea-solids",
      "lemon-concentrate",
      "sodium-citrate",
      "potassium-sorbate",
      "vitamin-c",
      "caffeine"
    ],
    // 1.20.3 – Animasjonssteg – start og duration er i sekund
    "stages": [
      {
        "kind": "water",
        "delivery": "pour",
        "name": "Water",
        "short": "Water",
        "amount": "The foundation",
        "unit": "A clear starting point",
        "description": "A clear first pour settles into the glass. The separate layers that follow are enlarged teaching colours, not real concentrations or a factory recipe.",
        "color": "#c9e7f1",
        "duration": 10,
        "formula": "H₂O",
        "ingredientIds": [
          "water"
        ],
        "learn": "water",
        "layer": 1.25,
        "start": 0
      },
      {
        "kind": "sugar",
        "delivery": "crystals",
        "name": "Sugar",
        "short": "Sugar",
        "amount": "6.8% added sugar",
        "unit": "Recipe percentage · total sugars also include juice sugars",
        "description": "TINE lists 6.8% added sugar in this recipe. Peach and lemon juices also contribute sugars. Nutrition is published per 100 g; the recipe percentage is not used to guess grams per 500 ml bottle.",
        "color": "#eee6c8",
        "duration": 7,
        "formula": "Sweetness + energy",
        "ingredientIds": [
          "sugar"
        ],
        "learn": "sugar",
        "layer": 0.27,
        "start": 10
      },
      {
        "kind": "peach-concentrate",
        "delivery": "extract",
        "name": "Peach juice from concentrate",
        "short": "Peach juice",
        "amount": "Quantity undisclosed",
        "unit": "Listed ingredient · individual dose not published",
        "description": "Peach juice that has been concentrated and used in a prepared drink recipe. It brings peach flavour and naturally occurring sugars. Those juice sugars are part of the drink’s total sugars, alongside any added sugar.",
        "color": "#e5b285",
        "duration": 5.3,
        "formula": "Peach flavour",
        "ingredientIds": [
          "peach-concentrate"
        ],
        "learn": "peach-concentrate",
        "layer": 0.12,
        "start": 17
      },
      {
        "kind": "citric-acid",
        "delivery": "crystals",
        "name": "Citric acid",
        "short": "Citric acid",
        "amount": "Quantity undisclosed",
        "unit": "Listed ingredient · individual dose not published",
        "description": "An acid that makes drinks taste sharp or sour. Its code is E330. Acidic drinks can wear away tooth enamel and may trigger heartburn. Citric acid’s job in the recipe is flavour and acidity, not making you more alert.",
        "color": "#c6d992",
        "duration": 5.3,
        "formula": "E330 · C₆H₈O₇",
        "ingredientIds": [
          "citric-acid"
        ],
        "learn": "citric-acid",
        "layer": 0.11,
        "start": 22.3
      },
      {
        "kind": "flavourings",
        "delivery": "droplets",
        "name": "Flavourings",
        "short": "Flavourings",
        "amount": "Quantity undisclosed",
        "unit": "Listed ingredient · individual dose not published",
        "description": "Ingredients that create a drink’s taste and smell. Your nose and taste buds detect them. “Flavourings” describes a mixture, not one substance with one predictable effect on your organs.",
        "color": "#d7bca2",
        "duration": 5.3,
        "formula": "Taste + aroma",
        "ingredientIds": [
          "flavourings"
        ],
        "learn": "flavourings",
        "layer": 0.09,
        "start": 27.6
      },
      {
        "kind": "tea-solids",
        "delivery": "extract",
        "name": "Extracted tea compounds",
        "short": "Tea",
        "amount": "Quantity undisclosed",
        "unit": "Listed ingredient · individual dose not published",
        "description": "The mix of substances that moves from tea leaves into hot water. These substances give tea its colour and taste. The caffeine in tea is shown separately because that is what can make you feel more awake or affect sleep.",
        "color": "#dcb262",
        "duration": 8,
        "formula": "An infusion",
        "ingredientIds": [
          "tea-solids"
        ],
        "learn": "tea-solids",
        "layer": 0.6,
        "start": 32.9
      },
      {
        "kind": "lemon-concentrate",
        "delivery": "extract",
        "name": "Lemon juice from concentrate",
        "short": "Lemon",
        "amount": "Quantity undisclosed",
        "unit": "Listed ingredient · individual dose not published",
        "description": "Lemon juice that has had water removed and is used as an ingredient in the recipe. It supplies lemon flavour and fruit acids. A small juice percentage does not make an iced tea nutritionally equivalent to a serving of fruit.",
        "color": "#ebd175",
        "duration": 5.3,
        "formula": "Concentrated juice",
        "ingredientIds": [
          "lemon-concentrate"
        ],
        "learn": "lemon-concentrate",
        "layer": 0.12,
        "start": 40.9
      },
      {
        "kind": "sodium-citrate",
        "delivery": "powder",
        "name": "Sodium citrate",
        "short": "E331",
        "amount": "Quantity undisclosed",
        "unit": "Listed ingredient · individual dose not published",
        "description": "A salt related to citric acid. Its code is E331. It helps control the drink’s acidity and adds some sodium. The ingredient name does not tell us how much sodium the bottle supplies.",
        "color": "#bbd8aa",
        "duration": 5.3,
        "formula": "E331 · citrate salts",
        "ingredientIds": [
          "sodium-citrate"
        ],
        "learn": "sodium-citrate",
        "layer": 0.09,
        "start": 46.2
      },
      {
        "kind": "potassium-sorbate",
        "delivery": "powder",
        "name": "Potassium sorbate",
        "short": "E202",
        "amount": "Quantity undisclosed",
        "unit": "Listed ingredient · individual dose not published",
        "description": "A preservative made from sorbic acid. Its code is E202. It helps stop a drink spoiling. The word “potassium” does not mean the drink supplies a useful mineral dose from this ingredient.",
        "color": "#d1c2d8",
        "duration": 5.3,
        "formula": "E202 · C₆H₇KO₂",
        "ingredientIds": [
          "potassium-sorbate"
        ],
        "learn": "potassium-sorbate",
        "layer": 0.085,
        "start": 51.5
      },
      {
        "kind": "vitamin-c",
        "delivery": "powder",
        "name": "Vitamin C · ascorbic acid",
        "short": "Vitamin C",
        "amount": "Quantity undisclosed",
        "unit": "Listed ingredient · individual dose not published",
        "description": "Ascorbic acid, also known as vitamin C, is listed here as an antioxidant to protect the recipe from oxidation. Its presence does not establish a meaningful vitamin dose or make this a vitamin supplement.",
        "color": "#efd376",
        "duration": 5.3,
        "formula": "E300 · C₆H₈O₆",
        "ingredientIds": [
          "vitamin-c"
        ],
        "learn": "vitamin-c",
        "layer": 0.09,
        "start": 56.8
      },
      {
        "kind": "caffeine",
        "delivery": "powder",
        "name": "Caffeine",
        "short": "Caffeine",
        "amount": "Present",
        "unit": "Present · amount not disclosed",
        "description": "Black tea extract naturally contains caffeine. This chapter explains a compound already present in the tea rather than adding another stimulant dose. The manufacturer does not publish its amount for this bottle.",
        "color": "#8cbbeb",
        "duration": 5.3,
        "formula": "C₈H₁₀N₄O₂",
        "ingredientIds": [
          "caffeine"
        ],
        "learn": "caffeine",
        "layer": 0.13,
        "start": 62.1
      },
      {
        "kind": "final",
        "delivery": "pour",
        "name": "From layers to a drink.",
        "short": "Mix together",
        "amount": "500",
        "unit": "ml · Sunniva isTe Fersken",
        "description": "The teaching colours curl into one another as the spoon stirs. They gradually become this drink’s representative colour. Colour, viscosity and light transmission remain visual approximations.",
        "color": "#bb6d24",
        "duration": 14,
        "formula": "One complete mixture",
        "ingredientIds": [],
        "layer": 0,
        "start": 67.4
      }
    ],
    // 1.20.4 – Næring – per100 er referansemengd, perServing er éin behaldar
    "nutrition": {
      "rows": [
        {
          "id": "kcal",
          "name": "Energy",
          "unit": "kcal",
          "per100": null,
          "perServing": null
        },
        {
          "id": "kj",
          "name": "Energy",
          "unit": "kJ",
          "per100": null,
          "perServing": null
        },
        {
          "id": "caffeine",
          "name": "Caffeine",
          "unit": "mg",
          "guide": "caffeine",
          "per100": null,
          "perServing": null
        },
        {
          "id": "carbs",
          "name": "Carbohydrate",
          "unit": "g",
          "per100": null,
          "perServing": null
        },
        {
          "id": "sugars",
          "name": "of which sugars",
          "unit": "g",
          "guide": "sugar",
          "per100": null,
          "perServing": null
        },
        {
          "id": "fat",
          "name": "Fat",
          "unit": "g",
          "per100": null,
          "perServing": null
        },
        {
          "id": "saturates",
          "name": "of which saturates",
          "unit": "g",
          "per100": null,
          "perServing": null
        },
        {
          "id": "protein",
          "name": "Protein",
          "unit": "g",
          "per100": null,
          "perServing": null
        },
        {
          "id": "salt",
          "name": "Salt",
          "unit": "g",
          "per100": null,
          "perServing": null
        },
        {
          "id": "vitamin-c",
          "name": "Vitamin C",
          "unit": "mg",
          "guide": "vitamin-c",
          "per100": null,
          "perServing": null
        }
      ],
      "massRows": [
        {
          "id": "kcal",
          "name": "Energy",
          "unit": "kcal",
          "amount": 29
        },
        {
          "id": "kj",
          "name": "Energy",
          "unit": "kJ",
          "amount": 124
        },
        {
          "id": "carbs",
          "name": "Carbohydrate",
          "unit": "g",
          "amount": 7
        },
        {
          "id": "sugars",
          "name": "of which sugars",
          "unit": "g",
          "guide": "sugar",
          "amount": 7
        },
        {
          "id": "fat",
          "name": "Fat",
          "unit": "g",
          "amount": 0
        },
        {
          "id": "saturates",
          "name": "of which saturates",
          "unit": "g",
          "amount": 0
        },
        {
          "id": "protein",
          "name": "Protein",
          "unit": "g",
          "amount": 0
        },
        {
          "id": "salt",
          "name": "Salt",
          "unit": "g",
          "amount": 0.05
        }
      ],
      "container": "bottle",
      "referenceUnit": "ml",
      "note": "TINE publishes nutrition per 100 g. Those weight-based figures are shown separately; the volume-based figures stay unavailable without a verified conversion. The 6.8% added sugar in the recipe is not the same as the 7 g total sugars per 100 g. Caffeine from tea and the antioxidant’s vitamin C amount are not quantified.",
      "source": "https://www.tine.no/merkevarer/sunniva-iste/produkter/sunniva-iste-fersken"
    },
    // 1.20.5 – Drikkespesifikke forklaringar og atterhald
    "contexts": [
      {
        "id": "l-theanine",
        "parentId": "tea-solids"
      },
      {
        "id": "theaflavins",
        "parentId": "tea-solids"
      }
    ],
    // 1.20.6 – Lenkjer til vidare utforsking av ingrediensane
    "discoveries": [
      "l-theanine",
      "theaflavins",
      "sodium-citrate",
      "potassium-sorbate",
      "citric-acid"
    ],
    "recipeDiscoveries": [
      "sodium-citrate",
      "potassium-sorbate",
      "citric-acid"
    ]
  },
  // ── DRIKK 1.21: FUN Light Bringebær [fun-light-bringebaer] ──
  {
    "reviewed": "4 November 2026",
    // 1.21.1 – Namn, bilete, mengder, fargar og kjelder
    "id": "fun-light-bringebaer",
    "name": "FUN Light Bringebær",
    "category": "Squash",
    "size": 250,
    "container": "glass",
    "caffeine": 0,
    "sugar": "0 g",
    "calories": "3",
    "image": "/fun-light-bringebaer.png",
    "accent": "#b43765",
    "tint": "#fff0f6",
    "liquid": "#ce4671",
    "carbonated": false,
    "preparation": {
      "waterMl": 225,
      "concentrateMl": 25,
      "ratio": "1 + 9"
    },
    "description": "Raspberry squash with sucralose, acesulfame K and anthocyanins, diluted as directed.",
    "source": "https://www.funlight.no/produkter/fun-light-bringebaer/",
    "label": "https://www.funlight.no/produkter/fun-light-bringebaer/",
    "note": "Sugar-free FUN Light, retained by request. The picture shows the concentrate bottle; this experience represents a prepared 250 ml glass. Dilute 1 part concentrate with 9 parts water: 25 ml concentrate plus 225 ml water. Nutrition is for the diluted drink, not the whole bottle or neat concentrate. Additive chapters describe ingredients already in the concentrate. No caffeine is listed.",
    // 1.21.2 – Ingrediens-ID-ar for denne drikka
    "ingredients": [
      "water",
      "malic-acid",
      "sodium-citrate",
      "anthocyanins",
      "sucralose",
      "acesulfame-k",
      "flavourings",
      "potassium-sorbate"
    ],
    // 1.21.3 – Animasjonssteg – start og duration er i sekund
    "stages": [
      {
        "kind": "water",
        "delivery": "pour",
        "name": "Water",
        "short": "Water",
        "amount": "225 ml added water",
        "unit": "Plus 25 ml concentrate · 1 + 9 dilution",
        "description": "The prepared glass starts with the measured water used for dilution. The concentrate also contains water, so this is not a claim about the total water content. Later chapters explain what is already in that concentrate, using enlarged teaching layers.",
        "color": "#c9e7f1",
        "duration": 10,
        "formula": "H₂O",
        "ingredientIds": [
          "water"
        ],
        "learn": "water",
        "layer": 1.25,
        "start": 0
      },
      {
        "kind": "malic-acid",
        "delivery": "crystals",
        "name": "Malic acid",
        "short": "E296",
        "amount": "Quantity undisclosed",
        "unit": "Listed ingredient · individual dose not published",
        "description": "An acid used to give drinks a tart flavour; it also occurs in fruit. It changes the acidity of the drink. It is not a stimulant, and its name does not mean it provides the benefits of eating fruit.",
        "color": "#d4dc9f",
        "duration": 5.3,
        "formula": "E296",
        "ingredientIds": [
          "malic-acid"
        ],
        "learn": "malic-acid",
        "layer": 0.1,
        "start": 10
      },
      {
        "kind": "sodium-citrate",
        "delivery": "powder",
        "name": "Sodium citrate",
        "short": "E331",
        "amount": "Quantity undisclosed",
        "unit": "Listed ingredient · individual dose not published",
        "description": "A salt related to citric acid. Its code is E331. It helps control the drink’s acidity and adds some sodium. The ingredient name does not tell us how much sodium the bottle supplies.",
        "color": "#bbd8aa",
        "duration": 5.3,
        "formula": "E331 · citrate salts",
        "ingredientIds": [
          "sodium-citrate"
        ],
        "learn": "sodium-citrate",
        "layer": 0.09,
        "start": 15.3
      },
      {
        "kind": "anthocyanins",
        "delivery": "droplets",
        "name": "Anthocyanins",
        "short": "E163",
        "amount": "Quantity undisclosed",
        "unit": "Listed ingredient · individual dose not published",
        "description": "A family of plant pigments that can give food and drinks red, purple or blue shades. In these recipes they are added for colour. A plant pigment in a drink is not evidence that the bottle protects your heart or brain.",
        "color": "#c34876",
        "duration": 5.3,
        "formula": "E163 · plant pigments",
        "ingredientIds": [
          "anthocyanins"
        ],
        "learn": "anthocyanins",
        "layer": 0.1,
        "start": 20.6
      },
      {
        "kind": "sucralose",
        "delivery": "powder",
        "name": "Sucralose",
        "short": "Sucralose",
        "amount": "Quantity undisclosed",
        "unit": "Listed ingredient · individual dose not published",
        "description": "An intense sweetener also called E955. Sucralose gives a sweet taste using much less ingredient than sugar. It does not act as a stimulant in your brain.",
        "color": "#a0d6d3",
        "duration": 5.3,
        "formula": "E955",
        "ingredientIds": [
          "sucralose"
        ],
        "learn": "sucralose",
        "layer": 0.09,
        "start": 25.9
      },
      {
        "kind": "acesulfame-k",
        "delivery": "powder",
        "name": "Acesulfame potassium",
        "short": "Ace-K",
        "amount": "Quantity undisclosed",
        "unit": "Listed ingredient · individual dose not published",
        "description": "An intense sweetener also called Ace-K or E950. It provides a sweet taste without the same amount of sugar. It is not a stimulant and does not provide a useful potassium supplement dose.",
        "color": "#9acdc1",
        "duration": 5.3,
        "formula": "E950 · Ace-K",
        "ingredientIds": [
          "acesulfame-k"
        ],
        "learn": "acesulfame-k",
        "layer": 0.09,
        "start": 31.2
      },
      {
        "kind": "flavourings",
        "delivery": "droplets",
        "name": "Flavourings",
        "short": "Flavourings",
        "amount": "Quantity undisclosed",
        "unit": "Listed ingredient · individual dose not published",
        "description": "Ingredients that create a drink’s taste and smell. Your nose and taste buds detect them. “Flavourings” describes a mixture, not one substance with one predictable effect on your organs.",
        "color": "#d7bca2",
        "duration": 5.3,
        "formula": "Taste + aroma",
        "ingredientIds": [
          "flavourings"
        ],
        "learn": "flavourings",
        "layer": 0.09,
        "start": 36.5
      },
      {
        "kind": "potassium-sorbate",
        "delivery": "powder",
        "name": "Potassium sorbate",
        "short": "E202",
        "amount": "Quantity undisclosed",
        "unit": "Listed ingredient · individual dose not published",
        "description": "A preservative made from sorbic acid. Its code is E202. It helps stop a drink spoiling. The word “potassium” does not mean the drink supplies a useful mineral dose from this ingredient.",
        "color": "#d1c2d8",
        "duration": 5.3,
        "formula": "E202 · C₆H₇KO₂",
        "ingredientIds": [
          "potassium-sorbate"
        ],
        "learn": "potassium-sorbate",
        "layer": 0.085,
        "start": 41.8
      },
      {
        "kind": "final",
        "delivery": "pour",
        "name": "From layers to a drink.",
        "short": "Mix together",
        "amount": "250",
        "unit": "ml · FUN Light Bringebær",
        "description": "The teaching colours curl into one another as the spoon stirs. They gradually become this drink’s representative colour. Colour, viscosity and light transmission remain visual approximations.",
        "color": "#ce4671",
        "duration": 14,
        "formula": "One complete mixture",
        "ingredientIds": [],
        "layer": 0,
        "start": 47.1
      }
    ],
    // 1.21.4 – Næring – per100 er referansemengd, perServing er éin behaldar
    "nutrition": {
      "rows": [
        {
          "id": "kcal",
          "name": "Energy",
          "unit": "kcal",
          "per100": 1,
          "perServing": 3
        },
        {
          "id": "kj",
          "name": "Energy",
          "unit": "kJ",
          "per100": 3,
          "perServing": 8
        },
        {
          "id": "caffeine",
          "name": "Caffeine",
          "unit": "mg",
          "guide": "caffeine",
          "per100": 0,
          "perServing": 0
        },
        {
          "id": "carbs",
          "name": "Carbohydrate",
          "unit": "g",
          "per100": 0,
          "perServing": 0
        },
        {
          "id": "sugars",
          "name": "of which sugars",
          "unit": "g",
          "guide": "sugar",
          "per100": 0,
          "perServing": 0
        },
        {
          "id": "fat",
          "name": "Fat",
          "unit": "g",
          "per100": 0,
          "perServing": 0
        },
        {
          "id": "saturates",
          "name": "of which saturates",
          "unit": "g",
          "per100": 0,
          "perServing": 0
        },
        {
          "id": "protein",
          "name": "Protein",
          "unit": "g",
          "per100": 0,
          "perServing": 0
        },
        {
          "id": "salt",
          "name": "Salt",
          "unit": "g",
          "per100": 0,
          "perServing": 0
        }
      ],
      "massRows": [],
      "container": "glass",
      "referenceUnit": "ml",
      "note": "For a prepared glass diluted 1 + 9 with water, not neat concentrate. The manufacturer publishes 3 kJ / 1 kcal per 100 ml and 8 kJ / 3 kcal per 250 ml; both rounded label figures are retained. No caffeine is listed. Sugar-free does not mean flavourings, acids and sweeteners are absent.",
      "source": "https://www.funlight.no/produkter/fun-light-bringebaer/"
    },
    // 1.21.5 – Drikkespesifikke forklaringar og atterhald
    "contexts": [],
    // 1.21.6 – Lenkjer til vidare utforsking av ingrediensane
    "discoveries": [
      "anthocyanins",
      "acesulfame-k",
      "sucralose",
      "sodium-citrate",
      "potassium-sorbate",
      "malic-acid"
    ],
    "recipeDiscoveries": [
      "anthocyanins",
      "acesulfame-k",
      "sucralose",
      "sodium-citrate",
      "potassium-sorbate",
      "malic-acid"
    ]
  },
  // ── DRIKK 1.22: Farris Bris Sitron & Sitrongress [farris-bris] ──
  {
    "reviewed": "4 November 2026",
    // 1.22.1 – Namn, bilete, mengder, fargar og kjelder
    "id": "farris-bris",
    "name": "Farris Bris Sitron & Sitrongress",
    "category": "Juice & water",
    "size": 500,
    "container": "bottle",
    "caffeine": 0,
    "sugar": "0 g",
    "calories": "0",
    "image": "/farris-bris.png",
    "accent": "#3a9bb1",
    "tint": "#edf9fb",
    "liquid": "#effafe",
    "carbonated": true,
    "clear": true,
    "description": "Mineral water, lighter carbonation and lemon–lemongrass flavour, without sugar or sweeteners.",
    "source": "https://www.ringnes.no/produkter/farris/farris-bris-sitron-sitrongress/",
    "label": "https://www.ringnes.no/produkter/farris/farris-bris-sitron-sitrongress/",
    "note": "Norwegian 500 ml bottle. The manufacturer lists natural mineral water, water, carbon dioxide and flavouring, with 0.06 g salt per 100 ml. Salt is a nutrition measure for the finished drink; no separate added table-salt ingredient is listed. No lemon juice, citric acid, sugar, sweeteners or caffeine are inferred from the flavour name.",
    // 1.22.2 – Ingrediens-ID-ar for denne drikka
    "ingredients": [
      "water",
      "carbonation",
      "flavourings"
    ],
    // 1.22.3 – Animasjonssteg – start og duration er i sekund
    "stages": [
      {
        "kind": "water",
        "delivery": "pour",
        "name": "Water",
        "short": "Water",
        "amount": "The foundation",
        "unit": "A clear starting point",
        "description": "Natural mineral water and water form the base. The minerals are already dissolved. The nutrition panel reports salt, but the manufacturer does not list added table salt or disclose individual mineral amounts here.",
        "color": "#c9e7f1",
        "duration": 10,
        "formula": "H₂O",
        "ingredientIds": [
          "water"
        ],
        "learn": "water",
        "layer": 1.25,
        "start": 0
      },
      {
        "kind": "carbonation",
        "delivery": "gas",
        "name": "Carbon dioxide",
        "short": "CO₂",
        "amount": "Quantity undisclosed",
        "unit": "Listed ingredient · individual dose not published",
        "description": "Carbon dioxide disperses through the water. Small bubbles rise along the glass; the gas does not form a separate liquid layer in the real drink.",
        "color": "#d9f1f6",
        "duration": 4.5,
        "formula": "CO₂",
        "ingredientIds": [
          "carbonation"
        ],
        "learn": "carbonation",
        "layer": 0.045,
        "start": 10
      },
      {
        "kind": "flavourings",
        "delivery": "droplets",
        "name": "Flavourings",
        "short": "Flavourings",
        "amount": "Quantity undisclosed",
        "unit": "Listed ingredient · individual dose not published",
        "description": "Ingredients that create a drink’s taste and smell. Your nose and taste buds detect them. “Flavourings” describes a mixture, not one substance with one predictable effect on your organs.",
        "color": "#d7bca2",
        "duration": 5.3,
        "formula": "Taste + aroma",
        "ingredientIds": [
          "flavourings"
        ],
        "learn": "flavourings",
        "layer": 0.09,
        "start": 14.5
      },
      {
        "kind": "final",
        "delivery": "pour",
        "name": "From layers to a drink.",
        "short": "Mix together",
        "amount": "500",
        "unit": "ml · Farris Bris Sitron & Sitrongress",
        "description": "The teaching colours curl into one another as the spoon stirs. They gradually become this drink’s representative colour. Colour, viscosity and light transmission remain visual approximations.",
        "color": "#effafe",
        "duration": 14,
        "formula": "One complete mixture",
        "ingredientIds": [],
        "layer": 0,
        "start": 19.8
      }
    ],
    // 1.22.4 – Næring – per100 er referansemengd, perServing er éin behaldar
    "nutrition": {
      "rows": [
        {
          "id": "kcal",
          "name": "Energy",
          "unit": "kcal",
          "per100": 0,
          "perServing": 0
        },
        {
          "id": "kj",
          "name": "Energy",
          "unit": "kJ",
          "per100": 0,
          "perServing": 0
        },
        {
          "id": "caffeine",
          "name": "Caffeine",
          "unit": "mg",
          "guide": "caffeine",
          "per100": 0,
          "perServing": 0
        },
        {
          "id": "carbs",
          "name": "Carbohydrate",
          "unit": "g",
          "per100": 0,
          "perServing": 0
        },
        {
          "id": "sugars",
          "name": "of which sugars",
          "unit": "g",
          "guide": "sugar",
          "per100": 0,
          "perServing": 0
        },
        {
          "id": "fat",
          "name": "Fat",
          "unit": "g",
          "per100": 0,
          "perServing": 0
        },
        {
          "id": "saturates",
          "name": "of which saturates",
          "unit": "g",
          "per100": 0,
          "perServing": 0
        },
        {
          "id": "protein",
          "name": "Protein",
          "unit": "g",
          "per100": 0,
          "perServing": 0
        },
        {
          "id": "salt",
          "name": "Salt",
          "unit": "g",
          "per100": 0.06,
          "perServing": 0.3
        }
      ],
      "massRows": [],
      "container": "bottle",
      "referenceUnit": "ml",
      "note": "Norwegian Sitron & Sitrongress recipe. Salt is 0.06 g per 100 ml and 0.3 g per 500 ml bottle. This nutrition measure is not treated as a separate added table-salt ingredient. Individual minerals are not quantified on this source page.",
      "source": "https://www.ringnes.no/produkter/farris/farris-bris-sitron-sitrongress/"
    },
    // 1.22.5 – Drikkespesifikke forklaringar og atterhald
    "contexts": [],
    // 1.22.6 – Lenkjer til vidare utforsking av ingrediensane
    "discoveries": [],
    "recipeDiscoveries": []
  },
  // ── DRIKK 1.23: Fanta Exotic [fanta-exotic] ──
  {
    "reviewed": "5 November 2026",
    // 1.23.1 – Namn, bilete, mengder, fargar og kjelder
    "id": "fanta-exotic",
    "name": "Fanta Exotic",
    "category": "Soft drinks",
    "size": 500,
    "container": "bottle",
    "caffeine": 0,
    "sugar": "66 g",
    "calories": "265",
    "image": "/fanta-exotic.jpg",
    "accent": "#d73e35",
    "tint": "#fff0ed",
    "liquid": "#e33028",
    "carbonated": true,
    "description": "A red tropical soda with citrus extract, fruit concentrates and two emulsion stabilisers.",
    "source": "https://www.coca-cola.com/no/no/brands/fanta",
    "label": "https://www.coca-cola.com/no/no/brands/fanta",
    "note": "Norwegian Original Exotic formula, shown as a 500 ml bottle. The manufacturer lists 3% juice from concentrate: 2.6% orange, 0.2% passion fruit and 0.2% peach. It gives 13.2 g sugars and 53 kcal per 100 ml. The separate Zero recipe is not used. E445 and E414 stabilise the mixture. Juice sugars and added sugars share one nutrition total; fruit colours are not assigned guessed individual pigment doses.",
    // 1.23.2 – Ingrediens-ID-ar for denne drikka
    "ingredients": [
      "water",
      "carbonation",
      "sugar",
      "mixed-fruit-juice",
      "citrus-extract",
      "citric-acid",
      "fruit-veg-concentrates",
      "flavourings",
      "wood-rosin-esters",
      "gum-arabic"
    ],
    // 1.23.3 – Animasjonssteg – start og duration er i sekund
    "stages": [
      {
        "kind": "water",
        "delivery": "pour",
        "name": "Water",
        "short": "Water",
        "amount": "The foundation",
        "unit": "A clear starting point",
        "description": "A clear first pour settles into the glass. The separate layers that follow are enlarged teaching colours, not real concentrations or a factory recipe.",
        "color": "#c9e7f1",
        "duration": 10,
        "formula": "H₂O",
        "ingredientIds": [
          "water"
        ],
        "learn": "water",
        "layer": 1.25,
        "start": 0
      },
      {
        "kind": "carbonation",
        "delivery": "gas",
        "name": "Carbon dioxide",
        "short": "CO₂",
        "amount": "Quantity undisclosed",
        "unit": "Listed ingredient · individual dose not published",
        "description": "Carbon dioxide disperses through the water. Small bubbles rise along the glass; the gas does not form a separate liquid layer in the real drink.",
        "color": "#d9f1f6",
        "duration": 4.5,
        "formula": "CO₂",
        "ingredientIds": [
          "carbonation"
        ],
        "learn": "carbonation",
        "layer": 0.045,
        "start": 10
      },
      {
        "kind": "sugar",
        "delivery": "crystals",
        "name": "Sugar",
        "short": "Sugar",
        "amount": "66 g",
        "unit": "Combined sugars per 500 ml · see source note",
        "description": "Carbohydrate that gives a drink sweetness and calories. Your body breaks sugars down and uses them for fuel. Bacteria in your mouth also use sugar and make acids that can damage your teeth.",
        "color": "#eee6c8",
        "duration": 7,
        "formula": "Sweetness + energy",
        "ingredientIds": [
          "sugar"
        ],
        "learn": "sugar",
        "layer": 0.27,
        "start": 14.5
      },
      {
        "kind": "mixed-fruit-juice",
        "delivery": "extract",
        "name": "Mixed fruit juices from concentrate",
        "short": "Fruit blend",
        "amount": "3% fruit juice",
        "unit": "2.6% orange + 0.2% passion fruit + 0.2% peach",
        "description": "These three juices come from concentrate. Their sugars are already part of the bottle’s 66 g total sugars, together with added sugar. The enlarged juice layer is not its measured volume.",
        "color": "#eab97a",
        "duration": 5.3,
        "formula": "A recipe-specific fruit blend",
        "ingredientIds": [
          "mixed-fruit-juice"
        ],
        "learn": "mixed-fruit-juice",
        "layer": 0.22,
        "start": 21.5
      },
      {
        "kind": "citrus-extract",
        "delivery": "extract",
        "name": "Citrus extract",
        "short": "Citrus extract",
        "amount": "Quantity undisclosed",
        "unit": "Listed ingredient · individual dose not published",
        "description": "A citrus-derived extract named separately from the juice in Fanta Exotic. It contributes citrus character to the recipe. The broad name does not disclose which individual aroma compounds or nutrient amounts are present.",
        "color": "#d8c878",
        "duration": 5.3,
        "formula": "A flavouring mixture",
        "ingredientIds": [
          "citrus-extract"
        ],
        "learn": "citrus-extract",
        "layer": 0.09,
        "start": 26.8
      },
      {
        "kind": "citric-acid",
        "delivery": "crystals",
        "name": "Citric acid",
        "short": "Citric acid",
        "amount": "Quantity undisclosed",
        "unit": "Listed ingredient · individual dose not published",
        "description": "An acid that makes drinks taste sharp or sour. Its code is E330. Acidic drinks can wear away tooth enamel and may trigger heartburn. Citric acid’s job in the recipe is flavour and acidity, not making you more alert.",
        "color": "#c6d992",
        "duration": 5.3,
        "formula": "E330 · C₆H₈O₇",
        "ingredientIds": [
          "citric-acid"
        ],
        "learn": "citric-acid",
        "layer": 0.11,
        "start": 32.1
      },
      {
        "kind": "fruit-veg-concentrates",
        "delivery": "extract",
        "name": "Fruit & vegetable concentrates",
        "short": "Concentrates",
        "amount": "Quantity undisclosed",
        "unit": "Listed ingredient · individual dose not published",
        "description": "Concentrated plant ingredients listed alongside the orange juice in Fanta. They contribute to the recipe’s colour or flavour. Their presence does not establish a useful dose of vitamins or fibre.",
        "color": "#cf9c5d",
        "duration": 5.3,
        "formula": "Carrot · blackcurrant",
        "ingredientIds": [
          "fruit-veg-concentrates"
        ],
        "learn": "fruit-veg-concentrates",
        "layer": 0.1,
        "start": 37.4
      },
      {
        "kind": "flavourings",
        "delivery": "droplets",
        "name": "Flavourings",
        "short": "Flavourings",
        "amount": "Quantity undisclosed",
        "unit": "Listed ingredient · individual dose not published",
        "description": "Ingredients that create a drink’s taste and smell. Your nose and taste buds detect them. “Flavourings” describes a mixture, not one substance with one predictable effect on your organs.",
        "color": "#d7bca2",
        "duration": 5.3,
        "formula": "Taste + aroma",
        "ingredientIds": [
          "flavourings"
        ],
        "learn": "flavourings",
        "layer": 0.09,
        "start": 42.7
      },
      {
        "kind": "wood-rosin-esters",
        "delivery": "droplets",
        "name": "Glycerol esters of wood rosins",
        "short": "E445",
        "amount": "Quantity undisclosed",
        "unit": "Listed ingredient · individual dose not published",
        "description": "A processed food ingredient that helps flavour components stay mixed. Its code is E445. It mainly works in the bottle, helping parts of the recipe stay together. There is no proven body or organ benefit from its use in this drink.",
        "color": "#cab997",
        "duration": 5.3,
        "formula": "E445 · ester gum",
        "ingredientIds": [
          "wood-rosin-esters"
        ],
        "learn": "wood-rosin-esters",
        "layer": 0.1,
        "start": 48
      },
      {
        "kind": "gum-arabic",
        "delivery": "powder",
        "name": "Gum arabic · acacia gum",
        "short": "E414",
        "amount": "Quantity undisclosed",
        "unit": "Listed ingredient · individual dose not published",
        "description": "A plant-derived gum that helps ingredients stay mixed. Its code is E414. Its main job here is to keep parts of the drink from separating. This small, unreported amount is not a proven treatment for your gut.",
        "color": "#d9caaa",
        "duration": 5.3,
        "formula": "E414 · a polysaccharide",
        "ingredientIds": [
          "gum-arabic"
        ],
        "learn": "gum-arabic",
        "layer": 0.11,
        "start": 53.3
      },
      {
        "kind": "final",
        "delivery": "pour",
        "name": "From layers to a drink.",
        "short": "Mix together",
        "amount": "500",
        "unit": "ml · Fanta Exotic",
        "description": "The teaching colours curl into one another as the spoon stirs. They gradually become this drink’s representative colour. Colour, viscosity and light transmission remain visual approximations.",
        "color": "#e33028",
        "duration": 14,
        "formula": "One complete mixture",
        "ingredientIds": [],
        "layer": 0,
        "start": 58.6
      }
    ],
    // 1.23.4 – Næring – per100 er referansemengd, perServing er éin behaldar
    "nutrition": {
      "rows": [
        {
          "id": "kcal",
          "name": "Energy",
          "unit": "kcal",
          "per100": 53,
          "perServing": 265
        },
        {
          "id": "kj",
          "name": "Energy",
          "unit": "kJ",
          "per100": 227,
          "perServing": 1135
        },
        {
          "id": "caffeine",
          "name": "Caffeine",
          "unit": "mg",
          "guide": "caffeine",
          "per100": 0,
          "perServing": 0
        },
        {
          "id": "carbs",
          "name": "Carbohydrate",
          "unit": "g",
          "per100": 13.2,
          "perServing": 66
        },
        {
          "id": "sugars",
          "name": "of which sugars",
          "unit": "g",
          "guide": "sugar",
          "per100": 13.2,
          "perServing": 66
        },
        {
          "id": "fat",
          "name": "Fat",
          "unit": "g",
          "per100": 0,
          "perServing": 0
        },
        {
          "id": "saturates",
          "name": "of which saturates",
          "unit": "g",
          "per100": 0,
          "perServing": 0
        },
        {
          "id": "protein",
          "name": "Protein",
          "unit": "g",
          "per100": 0,
          "perServing": 0
        },
        {
          "id": "sodium",
          "name": "Sodium",
          "unit": "g",
          "per100": 0,
          "perServing": 0
        }
      ],
      "massRows": [],
      "container": "bottle",
      "referenceUnit": "ml",
      "note": "Norwegian Original Exotic panel, scaled from 100 ml to 500 ml. Its mineral row is labelled sodium, so that wording is preserved. The 3% fruit blend and added sugar contribute to one combined sugars amount. The separate Zero formula is not used.",
      "source": "https://www.coca-cola.com/no/no/brands/fanta"
    },
    // 1.23.5 – Drikkespesifikke forklaringar og atterhald
    "contexts": [],
    // 1.23.6 – Lenkjer til vidare utforsking av ingrediensane
    "discoveries": [
      "wood-rosin-esters",
      "gum-arabic",
      "mixed-fruit-juice",
      "citrus-extract",
      "citric-acid",
      "fruit-veg-concentrates"
    ],
    "recipeDiscoveries": [
      "wood-rosin-esters",
      "gum-arabic",
      "mixed-fruit-juice",
      "citrus-extract",
      "citric-acid",
      "fruit-veg-concentrates"
    ]
  },
  // ── DRIKK 1.24: 7UP Original [7up-original] ──
  {
    "reviewed": "5 November 2026",
    // 1.24.1 – Namn, bilete, mengder, fargar og kjelder
    "id": "7up-original",
    "name": "7UP Original",
    "category": "Soft drinks",
    "size": 1500,
    "container": "bottle",
    "caffeine": 0,
    "sugar": "109.5 g",
    "calories": "450",
    "image": "/7up-original.png",
    "accent": "#2a9e59",
    "tint": "#eff9f1",
    "liquid": "#f0faf5",
    "carbonated": true,
    "clear": true,
    "description": "Sugar and steviol glycosides, two acids and a clear lemon–lime finish.",
    "source": "https://www.ringnes.no/produkter/7up/7up/",
    "label": "https://www.ringnes.no/produkter/7up/7up/",
    "note": "Norwegian Original recipe, shown as the 1.5 litre bottle in the manufacturer’s photo. This is a whole-package comparison, not a suggested portion. Ringnes lists sugar and steviol glycosides together, with citric acid, malic acid and sodium citrate. Values scale from its per-100-ml panel. No caffeine, added colour or separate lemon/lime juice is listed. 7UP Free is a different recipe.",
    // 1.24.2 – Ingrediens-ID-ar for denne drikka
    "ingredients": [
      "water",
      "carbonation",
      "sugar",
      "citric-acid",
      "malic-acid",
      "flavourings",
      "sodium-citrate",
      "steviol-glycosides"
    ],
    // 1.24.3 – Animasjonssteg – start og duration er i sekund
    "stages": [
      {
        "kind": "water",
        "delivery": "pour",
        "name": "Water",
        "short": "Water",
        "amount": "The foundation",
        "unit": "A clear starting point",
        "description": "A clear first pour settles into the glass. The separate layers that follow are enlarged teaching colours, not real concentrations or a factory recipe.",
        "color": "#c9e7f1",
        "duration": 10,
        "formula": "H₂O",
        "ingredientIds": [
          "water"
        ],
        "learn": "water",
        "layer": 1.25,
        "start": 0
      },
      {
        "kind": "carbonation",
        "delivery": "gas",
        "name": "Carbon dioxide",
        "short": "CO₂",
        "amount": "Quantity undisclosed",
        "unit": "Listed ingredient · individual dose not published",
        "description": "Carbon dioxide disperses through the water. Small bubbles rise along the glass; the gas does not form a separate liquid layer in the real drink.",
        "color": "#d9f1f6",
        "duration": 4.5,
        "formula": "CO₂",
        "ingredientIds": [
          "carbonation"
        ],
        "learn": "carbonation",
        "layer": 0.045,
        "start": 10
      },
      {
        "kind": "sugar",
        "delivery": "crystals",
        "name": "Sugar",
        "short": "Sugar",
        "amount": "109.5 g",
        "unit": "Combined sugars per 1500 ml · see source note",
        "description": "Carbohydrate that gives a drink sweetness and calories. Your body breaks sugars down and uses them for fuel. Bacteria in your mouth also use sugar and make acids that can damage your teeth.",
        "color": "#eee6c8",
        "duration": 7,
        "formula": "Sweetness + energy",
        "ingredientIds": [
          "sugar"
        ],
        "learn": "sugar",
        "layer": 0.27,
        "start": 14.5
      },
      {
        "kind": "citric-acid",
        "delivery": "crystals",
        "name": "Citric acid",
        "short": "Citric acid",
        "amount": "Quantity undisclosed",
        "unit": "Listed ingredient · individual dose not published",
        "description": "An acid that makes drinks taste sharp or sour. Its code is E330. Acidic drinks can wear away tooth enamel and may trigger heartburn. Citric acid’s job in the recipe is flavour and acidity, not making you more alert.",
        "color": "#c6d992",
        "duration": 5.3,
        "formula": "E330 · C₆H₈O₇",
        "ingredientIds": [
          "citric-acid"
        ],
        "learn": "citric-acid",
        "layer": 0.11,
        "start": 21.5
      },
      {
        "kind": "malic-acid",
        "delivery": "crystals",
        "name": "Malic acid",
        "short": "E296",
        "amount": "Quantity undisclosed",
        "unit": "Listed ingredient · individual dose not published",
        "description": "An acid used to give drinks a tart flavour; it also occurs in fruit. It changes the acidity of the drink. It is not a stimulant, and its name does not mean it provides the benefits of eating fruit.",
        "color": "#d4dc9f",
        "duration": 5.3,
        "formula": "E296",
        "ingredientIds": [
          "malic-acid"
        ],
        "learn": "malic-acid",
        "layer": 0.1,
        "start": 26.8
      },
      {
        "kind": "flavourings",
        "delivery": "droplets",
        "name": "Flavourings",
        "short": "Flavourings",
        "amount": "Quantity undisclosed",
        "unit": "Listed ingredient · individual dose not published",
        "description": "Ingredients that create a drink’s taste and smell. Your nose and taste buds detect them. “Flavourings” describes a mixture, not one substance with one predictable effect on your organs.",
        "color": "#d7bca2",
        "duration": 5.3,
        "formula": "Taste + aroma",
        "ingredientIds": [
          "flavourings"
        ],
        "learn": "flavourings",
        "layer": 0.09,
        "start": 32.1
      },
      {
        "kind": "sodium-citrate",
        "delivery": "powder",
        "name": "Sodium citrate",
        "short": "E331",
        "amount": "Quantity undisclosed",
        "unit": "Listed ingredient · individual dose not published",
        "description": "A salt related to citric acid. Its code is E331. It helps control the drink’s acidity and adds some sodium. The ingredient name does not tell us how much sodium the bottle supplies.",
        "color": "#bbd8aa",
        "duration": 5.3,
        "formula": "E331 · citrate salts",
        "ingredientIds": [
          "sodium-citrate"
        ],
        "learn": "sodium-citrate",
        "layer": 0.09,
        "start": 37.4
      },
      {
        "kind": "steviol-glycosides",
        "delivery": "powder",
        "name": "Steviol glycosides",
        "short": "Stevia",
        "amount": "Quantity undisclosed",
        "unit": "Listed ingredient · individual dose not published",
        "description": "Intensely sweet compounds associated with the stevia plant, used as sweeteners. They provide sweetness with much less material than sugar. They do not act like caffeine or make an acidic drink neutral.",
        "color": "#aed0a8",
        "duration": 5.3,
        "formula": "Stevia · E960 family",
        "ingredientIds": [
          "steviol-glycosides"
        ],
        "learn": "steviol-glycosides",
        "layer": 0.08,
        "start": 42.7
      },
      {
        "kind": "final",
        "delivery": "pour",
        "name": "From layers to a drink.",
        "short": "Mix together",
        "amount": "1500",
        "unit": "ml · 7UP Original",
        "description": "The teaching colours curl into one another as the spoon stirs. They gradually become this drink’s representative colour. Colour, viscosity and light transmission remain visual approximations.",
        "color": "#f0faf5",
        "duration": 14,
        "formula": "One complete mixture",
        "ingredientIds": [],
        "layer": 0,
        "start": 48
      }
    ],
    // 1.24.4 – Næring – per100 er referansemengd, perServing er éin behaldar
    "nutrition": {
      "rows": [
        {
          "id": "kcal",
          "name": "Energy",
          "unit": "kcal",
          "per100": 30,
          "perServing": 450
        },
        {
          "id": "kj",
          "name": "Energy",
          "unit": "kJ",
          "per100": 126,
          "perServing": 1890
        },
        {
          "id": "caffeine",
          "name": "Caffeine",
          "unit": "mg",
          "guide": "caffeine",
          "per100": 0,
          "perServing": 0
        },
        {
          "id": "carbs",
          "name": "Carbohydrate",
          "unit": "g",
          "per100": 7.3,
          "perServing": 109.5
        },
        {
          "id": "sugars",
          "name": "of which sugars",
          "unit": "g",
          "guide": "sugar",
          "per100": 7.3,
          "perServing": 109.5
        },
        {
          "id": "fat",
          "name": "Fat",
          "unit": "g",
          "per100": 0,
          "perServing": 0
        },
        {
          "id": "saturates",
          "name": "of which saturates",
          "unit": "g",
          "per100": 0,
          "perServing": 0
        },
        {
          "id": "protein",
          "name": "Protein",
          "unit": "g",
          "per100": 0,
          "perServing": 0
        },
        {
          "id": "salt",
          "name": "Salt",
          "unit": "g",
          "per100": 0.04,
          "perServing": 0.6
        }
      ],
      "massRows": [],
      "container": "bottle",
      "referenceUnit": "ml",
      "note": "Ringnes’s Norwegian Original formula, with sugar and steviol glycosides. The bottle shown contains 1500 ml, so the package column is 15 times the per-100-ml figures. It represents the whole bottle rather than a suggested drinking portion.",
      "source": "https://www.ringnes.no/produkter/7up/7up/"
    },
    // 1.24.5 – Drikkespesifikke forklaringar og atterhald
    "contexts": [],
    // 1.24.6 – Lenkjer til vidare utforsking av ingrediensane
    "discoveries": [
      "steviol-glycosides",
      "sodium-citrate",
      "citric-acid",
      "malic-acid"
    ],
    "recipeDiscoveries": [
      "steviol-glycosides",
      "sodium-citrate",
      "citric-acid",
      "malic-acid"
    ]
  },
  // ── DRIKK 1.25: Capri-Sun Multivitamin [capri-sun-multivitamin] ──
  {
    "reviewed": "5 November 2026",
    // 1.25.1 – Namn, bilete, mengder, fargar og kjelder
    "id": "capri-sun-multivitamin",
    "name": "Capri-Sun Multivitamin",
    "category": "Fruit drinks",
    "size": 330,
    "container": "pouch",
    "caffeine": 0,
    "sugar": "30.36 g",
    "calories": "125.4",
    "image": "/capri-sun-multivitamin.png",
    "accent": "#e69a28",
    "tint": "#fff7e9",
    "liquid": "#e6b458",
    "carbonated": false,
    "description": "Mixed fruit juices, a glucose–fructose syrup and a vitamin blend with biotin and vitamin E.",
    "source": "https://gomarked.no/produkt/capri-sun-multi-vitamin-drikke-330ml/",
    "label": "https://gomarked.no/produkt/capri-sun-multi-vitamin-drikke-330ml/",
    "note": "330 ml resealable pouch, Norwegian Go Marked listing, GTIN 4000177162316. This selected recipe contains 10% mixed fruit juice, sugar and glucose–fructose syrup. All contribute to one total sugars figure. Other importers list different formulas; check your own pouch. B12 is named without an amount. No B1 is inferred from other versions. The source’s less-than nutrient values retain their qualifiers when scaled.",
    // 1.25.2 – Ingrediens-ID-ar for denne drikka
    "ingredients": [
      "water",
      "mixed-fruit-juice",
      "sugar",
      "citric-acid",
      "flavourings",
      "vitamin-c",
      "b3",
      "vitamin-e",
      "b6",
      "biotin",
      "b12",
      "glucose-fructose-syrup"
    ],
    // 1.25.3 – Animasjonssteg – start og duration er i sekund
    "stages": [
      {
        "kind": "water",
        "delivery": "pour",
        "name": "Water",
        "short": "Water",
        "amount": "The foundation",
        "unit": "A clear starting point",
        "description": "A clear first pour settles into the glass. The separate layers that follow are enlarged teaching colours, not real concentrations or a factory recipe.",
        "color": "#c9e7f1",
        "duration": 10,
        "formula": "H₂O",
        "ingredientIds": [
          "water"
        ],
        "learn": "water",
        "layer": 1.25,
        "start": 0
      },
      {
        "kind": "mixed-fruit-juice",
        "delivery": "extract",
        "name": "Mixed fruit juices from concentrate",
        "short": "Fruit blend",
        "amount": "10% fruit juice",
        "unit": "Selected 330 ml retailer recipe",
        "description": "The selected recipe blends orange, apple, passion fruit, kiwi, pineapple, grapefruit, lime and banana juices from concentrate. Their individual split is not imported from a different formula. Juice sugars belong to the pouch’s one total sugars figure.",
        "color": "#eab97a",
        "duration": 5.3,
        "formula": "A recipe-specific fruit blend",
        "ingredientIds": [
          "mixed-fruit-juice"
        ],
        "learn": "mixed-fruit-juice",
        "layer": 0.22,
        "start": 10
      },
      {
        "kind": "sugar",
        "delivery": "crystals",
        "name": "Sugar",
        "short": "Sugar",
        "amount": "30.36 g",
        "unit": "Combined sugars per 330 ml · see source note",
        "description": "Carbohydrate that gives a drink sweetness and calories. Your body breaks sugars down and uses them for fuel. Bacteria in your mouth also use sugar and make acids that can damage your teeth.",
        "color": "#eee6c8",
        "duration": 7,
        "formula": "Sweetness + energy",
        "ingredientIds": [
          "sugar"
        ],
        "learn": "sugar",
        "layer": 0.27,
        "start": 15.3
      },
      {
        "kind": "citric-acid",
        "delivery": "crystals",
        "name": "Citric acid",
        "short": "Citric acid",
        "amount": "Quantity undisclosed",
        "unit": "Listed ingredient · individual dose not published",
        "description": "An acid that makes drinks taste sharp or sour. Its code is E330. Acidic drinks can wear away tooth enamel and may trigger heartburn. Citric acid’s job in the recipe is flavour and acidity, not making you more alert.",
        "color": "#c6d992",
        "duration": 5.3,
        "formula": "E330 · C₆H₈O₇",
        "ingredientIds": [
          "citric-acid"
        ],
        "learn": "citric-acid",
        "layer": 0.11,
        "start": 22.3
      },
      {
        "kind": "flavourings",
        "delivery": "droplets",
        "name": "Flavourings",
        "short": "Flavourings",
        "amount": "Quantity undisclosed",
        "unit": "Listed ingredient · individual dose not published",
        "description": "Ingredients that create a drink’s taste and smell. Your nose and taste buds detect them. “Flavourings” describes a mixture, not one substance with one predictable effect on your organs.",
        "color": "#d7bca2",
        "duration": 5.3,
        "formula": "Taste + aroma",
        "ingredientIds": [
          "flavourings"
        ],
        "learn": "flavourings",
        "layer": 0.09,
        "start": 27.6
      },
      {
        "kind": "vitamin-c",
        "delivery": "powder",
        "name": "Vitamin C · ascorbic acid",
        "short": "Vitamin C",
        "amount": "39.6 mg",
        "unit": "Per 330 ml · see nutrition source below",
        "description": "Ascorbic acid, also known as vitamin C, is listed here as an antioxidant to protect the recipe from oxidation. Its presence does not establish a meaningful vitamin dose or make this a vitamin supplement.",
        "color": "#efd376",
        "duration": 5.3,
        "formula": "E300 · C₆H₈O₆",
        "ingredientIds": [
          "vitamin-c"
        ],
        "learn": "vitamin-c",
        "layer": 0.09,
        "start": 32.9
      },
      {
        "kind": "b3",
        "delivery": "powder",
        "name": "Niacin · vitamin B3",
        "short": "B3",
        "amount": "7.92 mg",
        "unit": "Per 330 ml · see nutrition source below",
        "description": "Vitamin B3, usually called niacin on the label. Your cells use B3 to help turn food into usable energy. It supports normal skin and nerve function. It is not a stimulant.",
        "color": "#efd397",
        "duration": 5.3,
        "formula": "B3",
        "ingredientIds": [
          "b3"
        ],
        "learn": "b3",
        "layer": 0.065,
        "start": 38.2
      },
      {
        "kind": "vitamin-e",
        "delivery": "droplets",
        "name": "Vitamin E",
        "short": "Vitamin E",
        "amount": "5.94 mg",
        "unit": "Per 330 ml · see nutrition source below",
        "description": "A fat-soluble vitamin included in the selected Capri-Sun vitamin blend. Vitamin E helps protect cell components from oxidative damage. This normal function is different from proof that a particular drink prevents disease.",
        "color": "#d7cf83",
        "duration": 5.3,
        "formula": "A family of tocopherols",
        "ingredientIds": [
          "vitamin-e"
        ],
        "learn": "vitamin-e",
        "layer": 0.065,
        "start": 43.5
      },
      {
        "kind": "b6",
        "delivery": "powder",
        "name": "Pyridoxine · vitamin B6",
        "short": "B6",
        "amount": "0.693 mg",
        "unit": "Per 330 ml · see nutrition source below",
        "description": "Vitamin B6, sometimes listed as pyridoxine hydrochloride. B6 helps your body use protein and make haemoglobin, the part of red blood cells that carries oxygen. It also helps nerves work normally.",
        "color": "#ebd779",
        "duration": 5.3,
        "formula": "B6",
        "ingredientIds": [
          "b6"
        ],
        "learn": "b6",
        "layer": 0.065,
        "start": 48.8
      },
      {
        "kind": "biotin",
        "delivery": "powder",
        "name": "Biotin · vitamin B7",
        "short": "B7",
        "amount": "24.75 µg",
        "unit": "Per 330 ml · see nutrition source below",
        "description": "A vitamin that helps enzymes process nutrients from food. Biotin helps enzymes break down fats, carbohydrates and proteins. It does not directly supply calories or make a caffeinated drink cancel tiredness.",
        "color": "#d6c0e8",
        "duration": 5.3,
        "formula": "B7 · also called vitamin H",
        "ingredientIds": [
          "biotin"
        ],
        "learn": "biotin",
        "layer": 0.065,
        "start": 54.1
      },
      {
        "kind": "b12",
        "delivery": "powder",
        "name": "Cobalamin · vitamin B12",
        "short": "B12",
        "amount": "Quantity undisclosed",
        "unit": "Listed ingredient · individual dose not published",
        "description": "Vitamin B12, sometimes listed as cyanocobalamin. B12 helps keep nerve cells healthy and helps make red blood cells. Too little can cause tiredness and nerve problems.",
        "color": "#dda19f",
        "duration": 5.3,
        "formula": "B12",
        "ingredientIds": [
          "b12"
        ],
        "learn": "b12",
        "layer": 0.065,
        "start": 59.4
      },
      {
        "kind": "glucose-fructose-syrup",
        "delivery": "extract",
        "name": "Glucose–fructose syrup",
        "short": "Sugar syrup",
        "amount": "Part of total sugars",
        "unit": "Individual amount and glucose-to-fructose ratio not published",
        "description": "A sweet syrup containing both glucose and fructose. These sugars supply energy and count towards the same total sugars figure as the recipe’s other sugars. The label does not give their individual ratio.",
        "color": "#e7d1a0",
        "duration": 5.3,
        "formula": "A mixture of two sugars",
        "ingredientIds": [
          "glucose-fructose-syrup"
        ],
        "learn": "glucose-fructose-syrup",
        "layer": 0.17,
        "start": 64.7
      },
      {
        "kind": "final",
        "delivery": "pour",
        "name": "From layers to a drink.",
        "short": "Mix together",
        "amount": "330",
        "unit": "ml · Capri-Sun Multivitamin",
        "description": "The teaching colours curl into one another as the spoon stirs. They gradually become this drink’s representative colour. Colour, viscosity and light transmission remain visual approximations.",
        "color": "#e6b458",
        "duration": 14,
        "formula": "One complete mixture",
        "ingredientIds": [],
        "layer": 0,
        "start": 70
      }
    ],
    // 1.25.4 – Næring – per100 er referansemengd, perServing er éin behaldar
    "nutrition": {
      "rows": [
        {
          "id": "kcal",
          "name": "Energy",
          "unit": "kcal",
          "per100": 38,
          "perServing": 125.39999999999999
        },
        {
          "id": "kj",
          "name": "Energy",
          "unit": "kJ",
          "per100": 163,
          "perServing": 537.9
        },
        {
          "id": "caffeine",
          "name": "Caffeine",
          "unit": "mg",
          "guide": "caffeine",
          "per100": 0,
          "perServing": 0
        },
        {
          "id": "carbs",
          "name": "Carbohydrate",
          "unit": "g",
          "per100": 9.2,
          "perServing": 30.359999999999996
        },
        {
          "id": "sugars",
          "name": "of which sugars",
          "unit": "g",
          "guide": "sugar",
          "per100": 9.2,
          "perServing": 30.359999999999996
        },
        {
          "id": "fat",
          "name": "Fat",
          "unit": "g",
          "per100": {
            "value": 0.5,
            "lessThan": true
          },
          "perServing": {
            "value": 1.65,
            "lessThan": true
          }
        },
        {
          "id": "saturates",
          "name": "of which saturates",
          "unit": "g",
          "per100": {
            "value": 0.1,
            "lessThan": true
          },
          "perServing": {
            "value": 0.33,
            "lessThan": true
          }
        },
        {
          "id": "protein",
          "name": "Protein",
          "unit": "g",
          "per100": {
            "value": 0.5,
            "lessThan": true
          },
          "perServing": {
            "value": 1.65,
            "lessThan": true
          }
        },
        {
          "id": "salt",
          "name": "Salt",
          "unit": "g",
          "per100": {
            "value": 0.01,
            "lessThan": true
          },
          "perServing": {
            "value": 0.033,
            "lessThan": true
          }
        },
        {
          "id": "b3",
          "name": "Niacin · B3",
          "unit": "mg",
          "guide": "b3",
          "per100": 2.4,
          "perServing": 7.919999999999999
        },
        {
          "id": "b6",
          "name": "Vitamin B6",
          "unit": "mg",
          "guide": "b6",
          "per100": 0.21,
          "perServing": 0.693
        },
        {
          "id": "b12",
          "name": "Vitamin B12",
          "unit": "µg",
          "guide": "b12",
          "per100": null,
          "perServing": null
        },
        {
          "id": "vitamin-c",
          "name": "Vitamin C",
          "unit": "mg",
          "guide": "vitamin-c",
          "per100": 12,
          "perServing": 39.599999999999994
        },
        {
          "id": "biotin",
          "name": "Biotin",
          "unit": "µg",
          "per100": 7.5,
          "perServing": 24.75
        },
        {
          "id": "vitamin-e",
          "name": "Vitamin E",
          "unit": "mg",
          "guide": "vitamin-e",
          "per100": 1.8,
          "perServing": 5.9399999999999995
        }
      ],
      "massRows": [],
      "container": "pouch",
      "referenceUnit": "ml",
      "note": "Selected Norwegian retailer label for the 330 ml pouch, GTIN 4000177162316. This version has 10% juice and glucose–fructose syrup. Figures are not combined with different 12% juice or Zero formulas. The listed B12 dose is unavailable. Less-than values remain less-than values when scaled.",
      "source": "https://gomarked.no/produkt/capri-sun-multi-vitamin-drikke-330ml/"
    },
    // 1.25.5 – Drikkespesifikke forklaringar og atterhald
    "contexts": [],
    // 1.25.6 – Lenkjer til vidare utforsking av ingrediensane
    "discoveries": [
      "biotin",
      "vitamin-e",
      "mixed-fruit-juice",
      "citric-acid",
      "b3",
      "b6",
      "b12",
      "glucose-fructose-syrup"
    ],
    "recipeDiscoveries": [
      "biotin",
      "vitamin-e",
      "mixed-fruit-juice",
      "citric-acid",
      "b3",
      "b6",
      "b12",
      "glucose-fructose-syrup"
    ]
  },
  // ── DRIKK 1.26: NOCCO Caribbean [nocco-caribbean] ──
  {
    "reviewed": "5 November 2026",
    // 1.26.1 – Namn, bilete, mengder, fargar og kjelder
    "id": "nocco-caribbean",
    "name": "NOCCO Caribbean",
    "category": "Energy",
    "size": 330,
    "container": "can",
    "caffeine": null,
    "sugar": "Sugar-free",
    "calories": "Not verified",
    "image": "/nocco-caribbean.png",
    "accent": "#139db7",
    "tint": "#e9f9fc",
    "liquid": "#e4dba0",
    "carbonated": true,
    "description": "Three named BCAA amino acids, green-tea extract and a vitamin mix. Explore what each actually does.",
    "source": "https://oda.com/no/products/31169-nocco-nocco-caribbean/",
    "label": "https://oda.com/no/products/31169-nocco-nocco-caribbean/",
    "note": "Norwegian supplier Nbev’s 330 ml recipe as listed by Oda, including green-tea extract and vitamin D. The listing is unavailable for sale, so it is not confirmation of today’s can. Caffeine, BCAA ratio and vitamin doses are not published there. Its nutrition heading says “per 100g/ml”; an exact volume conversion is not assumed. The manufacturer photo shows a 180 mg reference can, while quantities vary by market; that photo is not used to assign a dose to this selected Norwegian recipe. Caffeine from extracts counts towards one total.",
    // 1.26.2 – Ingrediens-ID-ar for denne drikka
    "ingredients": [
      "water",
      "carbonation",
      "l-leucine",
      "l-valine",
      "l-isoleucine",
      "caffeine",
      "green-tea-extract",
      "b3",
      "b6",
      "folic-acid",
      "biotin",
      "vitamin-d",
      "b12",
      "citric-acid",
      "flavourings",
      "sucralose",
      "beta-carotene"
    ],
    // 1.26.3 – Animasjonssteg – start og duration er i sekund
    "stages": [
      {
        "kind": "water",
        "delivery": "pour",
        "name": "Water",
        "short": "Water",
        "amount": "The foundation",
        "unit": "A clear starting point",
        "description": "A clear first pour settles into the glass. The separate layers that follow are enlarged teaching colours, not real concentrations or a factory recipe.",
        "color": "#c9e7f1",
        "duration": 10,
        "formula": "H₂O",
        "ingredientIds": [
          "water"
        ],
        "learn": "water",
        "layer": 1.25,
        "start": 0
      },
      {
        "kind": "carbonation",
        "delivery": "gas",
        "name": "Carbon dioxide",
        "short": "CO₂",
        "amount": "Quantity undisclosed",
        "unit": "Listed ingredient · individual dose not published",
        "description": "Carbon dioxide disperses through the water. Small bubbles rise along the glass; the gas does not form a separate liquid layer in the real drink.",
        "color": "#d9f1f6",
        "duration": 4.5,
        "formula": "CO₂",
        "ingredientIds": [
          "carbonation"
        ],
        "learn": "carbonation",
        "layer": 0.045,
        "start": 10
      },
      {
        "kind": "l-leucine",
        "delivery": "powder",
        "name": "L-leucine",
        "short": "L-leucine",
        "amount": "Part of the BCAA blend",
        "unit": "Individual amount and blend ratio not verified",
        "description": "One of the three branched-chain amino acids, often shortened to BCAAs. Your body uses leucine as a building block for proteins. It also takes part in signalling involved in making muscle protein, but it cannot supply all the building blocks by itself.",
        "color": "#d1b5df",
        "duration": 5.3,
        "formula": "C₆H₁₃NO₂",
        "ingredientIds": [
          "l-leucine"
        ],
        "learn": "l-leucine",
        "layer": 0.11,
        "start": 14.5
      },
      {
        "kind": "l-valine",
        "delivery": "powder",
        "name": "L-valine",
        "short": "L-valine",
        "amount": "Part of the BCAA blend",
        "unit": "Individual amount and blend ratio not verified",
        "description": "An essential amino acid in the BCAA group, alongside leucine and isoleucine. Valine becomes part of proteins your body makes. Your body needs a balanced supply of amino acids rather than just one isolated BCAA.",
        "color": "#b7c9e5",
        "duration": 5.3,
        "formula": "C₅H₁₁NO₂",
        "ingredientIds": [
          "l-valine"
        ],
        "learn": "l-valine",
        "layer": 0.11,
        "start": 19.8
      },
      {
        "kind": "l-isoleucine",
        "delivery": "powder",
        "name": "L-isoleucine",
        "short": "L-isoleucine",
        "amount": "Part of the BCAA blend",
        "unit": "Individual amount and blend ratio not verified",
        "description": "An essential BCAA with the same molecular formula as leucine but a different structure. Your body uses isoleucine to build proteins. Having the same formula as leucine does not make the two substances identical or interchangeable.",
        "color": "#c5d6b1",
        "duration": 5.3,
        "formula": "C₆H₁₃NO₂",
        "ingredientIds": [
          "l-isoleucine"
        ],
        "learn": "l-isoleucine",
        "layer": 0.11,
        "start": 25.1
      },
      {
        "kind": "caffeine",
        "delivery": "powder",
        "name": "Caffeine",
        "short": "Caffeine",
        "amount": "Present",
        "unit": "Present · amount not disclosed",
        "description": "The ingredient that can make you feel more awake. In your brain, caffeine blocks some of the signals that make you feel sleepy. Too much can also make your heart race and keep you awake at night.",
        "color": "#8cbbeb",
        "duration": 5.3,
        "formula": "C₈H₁₀N₄O₂",
        "ingredientIds": [
          "caffeine"
        ],
        "learn": "caffeine",
        "layer": 0.13,
        "start": 30.4
      },
      {
        "kind": "green-tea-extract",
        "delivery": "extract",
        "name": "Green-tea extract",
        "short": "Green tea",
        "amount": "Quantity undisclosed",
        "unit": "Listed ingredient · individual dose not published",
        "description": "The Norwegian supplier recipe lists a green-tea extract. Caffeine from that extract belongs to the same overall caffeine exposure, not a second total. The extract’s quantity and catechin content are not disclosed.",
        "color": "#a7bb75",
        "duration": 5.3,
        "formula": "An extracted plant mixture",
        "ingredientIds": [
          "green-tea-extract"
        ],
        "learn": "green-tea-extract",
        "layer": 0.1,
        "start": 35.7
      },
      {
        "kind": "b3",
        "delivery": "powder",
        "name": "Niacin · vitamin B3",
        "short": "B3",
        "amount": "Quantity undisclosed",
        "unit": "Listed ingredient · individual dose not published",
        "description": "Vitamin B3, usually called niacin on the label. Your cells use B3 to help turn food into usable energy. It supports normal skin and nerve function. It is not a stimulant.",
        "color": "#efd397",
        "duration": 5.3,
        "formula": "B3",
        "ingredientIds": [
          "b3"
        ],
        "learn": "b3",
        "layer": 0.065,
        "start": 41
      },
      {
        "kind": "b6",
        "delivery": "powder",
        "name": "Pyridoxine · vitamin B6",
        "short": "B6",
        "amount": "Quantity undisclosed",
        "unit": "Listed ingredient · individual dose not published",
        "description": "Vitamin B6, sometimes listed as pyridoxine hydrochloride. B6 helps your body use protein and make haemoglobin, the part of red blood cells that carries oxygen. It also helps nerves work normally.",
        "color": "#ebd779",
        "duration": 5.3,
        "formula": "B6",
        "ingredientIds": [
          "b6"
        ],
        "learn": "b6",
        "layer": 0.065,
        "start": 46.3
      },
      {
        "kind": "folic-acid",
        "delivery": "powder",
        "name": "Folic acid · vitamin B9",
        "short": "B9",
        "amount": "Quantity undisclosed",
        "unit": "Listed ingredient · individual dose not published",
        "description": "A form of folate used in some fortified foods and supplements. Your body uses folate to make DNA and help cells divide. It is important for normal blood-cell production, rather than acting as a caffeine-like stimulant.",
        "color": "#e4c769",
        "duration": 5.3,
        "formula": "B9 · folate family",
        "ingredientIds": [
          "folic-acid"
        ],
        "learn": "folic-acid",
        "layer": 0.065,
        "start": 51.6
      },
      {
        "kind": "biotin",
        "delivery": "powder",
        "name": "Biotin · vitamin B7",
        "short": "B7",
        "amount": "Quantity undisclosed",
        "unit": "Listed ingredient · individual dose not published",
        "description": "A vitamin that helps enzymes process nutrients from food. Biotin helps enzymes break down fats, carbohydrates and proteins. It does not directly supply calories or make a caffeinated drink cancel tiredness.",
        "color": "#d6c0e8",
        "duration": 5.3,
        "formula": "B7 · also called vitamin H",
        "ingredientIds": [
          "biotin"
        ],
        "learn": "biotin",
        "layer": 0.065,
        "start": 56.9
      },
      {
        "kind": "vitamin-d",
        "delivery": "droplets",
        "name": "Vitamin D",
        "short": "Vitamin D",
        "amount": "Quantity undisclosed",
        "unit": "Listed ingredient · individual dose not published",
        "description": "A vitamin used to support normal calcium handling in the body. Vitamin D helps your intestine absorb calcium. Your body needs it for normal bones and muscles, but extra intake does not automatically mean stronger immunity.",
        "color": "#e6d2a2",
        "duration": 5.3,
        "formula": "D · exact form undisclosed",
        "ingredientIds": [
          "vitamin-d"
        ],
        "learn": "vitamin-d",
        "layer": 0.065,
        "start": 62.2
      },
      {
        "kind": "b12",
        "delivery": "powder",
        "name": "Cobalamin · vitamin B12",
        "short": "B12",
        "amount": "Quantity undisclosed",
        "unit": "Listed ingredient · individual dose not published",
        "description": "Vitamin B12, sometimes listed as cyanocobalamin. B12 helps keep nerve cells healthy and helps make red blood cells. Too little can cause tiredness and nerve problems.",
        "color": "#dda19f",
        "duration": 5.3,
        "formula": "B12",
        "ingredientIds": [
          "b12"
        ],
        "learn": "b12",
        "layer": 0.065,
        "start": 67.5
      },
      {
        "kind": "citric-acid",
        "delivery": "crystals",
        "name": "Citric acid",
        "short": "Citric acid",
        "amount": "Quantity undisclosed",
        "unit": "Listed ingredient · individual dose not published",
        "description": "An acid that makes drinks taste sharp or sour. Its code is E330. Acidic drinks can wear away tooth enamel and may trigger heartburn. Citric acid’s job in the recipe is flavour and acidity, not making you more alert.",
        "color": "#c6d992",
        "duration": 5.3,
        "formula": "E330 · C₆H₈O₇",
        "ingredientIds": [
          "citric-acid"
        ],
        "learn": "citric-acid",
        "layer": 0.11,
        "start": 72.8
      },
      {
        "kind": "flavourings",
        "delivery": "droplets",
        "name": "Flavourings",
        "short": "Flavourings",
        "amount": "Quantity undisclosed",
        "unit": "Listed ingredient · individual dose not published",
        "description": "Ingredients that create a drink’s taste and smell. Your nose and taste buds detect them. “Flavourings” describes a mixture, not one substance with one predictable effect on your organs.",
        "color": "#d7bca2",
        "duration": 5.3,
        "formula": "Taste + aroma",
        "ingredientIds": [
          "flavourings"
        ],
        "learn": "flavourings",
        "layer": 0.09,
        "start": 78.1
      },
      {
        "kind": "sucralose",
        "delivery": "powder",
        "name": "Sucralose",
        "short": "Sucralose",
        "amount": "Quantity undisclosed",
        "unit": "Listed ingredient · individual dose not published",
        "description": "An intense sweetener also called E955. Sucralose gives a sweet taste using much less ingredient than sugar. It does not act as a stimulant in your brain.",
        "color": "#a0d6d3",
        "duration": 5.3,
        "formula": "E955",
        "ingredientIds": [
          "sucralose"
        ],
        "learn": "sucralose",
        "layer": 0.09,
        "start": 83.4
      },
      {
        "kind": "beta-carotene",
        "delivery": "droplets",
        "name": "Beta-carotene",
        "short": "E160a",
        "amount": "Quantity undisclosed",
        "unit": "Listed ingredient · individual dose not published",
        "description": "An orange-yellow colour that the body can also turn into vitamin A. Its code is E160a. Vitamin A supports normal sight and immune function. But a little beta-carotene used for colour is not the same as a declared useful vitamin dose.",
        "color": "#ecad54",
        "duration": 5.3,
        "formula": "E160a · a carotenoid",
        "ingredientIds": [
          "beta-carotene"
        ],
        "learn": "beta-carotene",
        "layer": 0.09,
        "start": 88.7
      },
      {
        "kind": "final",
        "delivery": "pour",
        "name": "From layers to a drink.",
        "short": "Mix together",
        "amount": "330",
        "unit": "ml · NOCCO Caribbean",
        "description": "The teaching colours curl into one another as the spoon stirs. They gradually become this drink’s representative colour. Colour, viscosity and light transmission remain visual approximations.",
        "color": "#e4dba0",
        "duration": 14,
        "formula": "One complete mixture",
        "ingredientIds": [],
        "layer": 0,
        "start": 94
      }
    ],
    // 1.26.4 – Næring – per100 er referansemengd, perServing er éin behaldar
    "nutrition": {
      "rows": [
        {
          "id": "kcal",
          "name": "Energy",
          "unit": "kcal",
          "per100": null,
          "perServing": null
        },
        {
          "id": "kj",
          "name": "Energy",
          "unit": "kJ",
          "per100": null,
          "perServing": null
        },
        {
          "id": "caffeine",
          "name": "Caffeine",
          "unit": "mg",
          "guide": "caffeine",
          "per100": null,
          "perServing": null
        },
        {
          "id": "carbs",
          "name": "Carbohydrate",
          "unit": "g",
          "per100": null,
          "perServing": null
        },
        {
          "id": "sugars",
          "name": "of which sugars",
          "unit": "g",
          "guide": "sugar",
          "per100": null,
          "perServing": null
        },
        {
          "id": "fat",
          "name": "Fat",
          "unit": "g",
          "per100": null,
          "perServing": null
        },
        {
          "id": "saturates",
          "name": "of which saturates",
          "unit": "g",
          "per100": null,
          "perServing": null
        },
        {
          "id": "protein",
          "name": "Protein",
          "unit": "g",
          "per100": null,
          "perServing": null
        },
        {
          "id": "salt",
          "name": "Salt",
          "unit": "g",
          "per100": null,
          "perServing": null
        },
        {
          "id": "b3",
          "name": "Niacin · B3",
          "unit": "mg",
          "guide": "b3",
          "per100": null,
          "perServing": null
        },
        {
          "id": "b6",
          "name": "Vitamin B6",
          "unit": "mg",
          "guide": "b6",
          "per100": null,
          "perServing": null
        },
        {
          "id": "b12",
          "name": "Vitamin B12",
          "unit": "µg",
          "guide": "b12",
          "per100": null,
          "perServing": null
        },
        {
          "id": "biotin",
          "name": "Biotin",
          "unit": "µg",
          "per100": null,
          "perServing": null
        },
        {
          "id": "folic-acid",
          "name": "Folic acid · B9",
          "unit": "µg",
          "guide": "folic-acid",
          "per100": null,
          "perServing": null
        },
        {
          "id": "vitamin-d",
          "name": "Vitamin D",
          "unit": "µg",
          "guide": "vitamin-d",
          "per100": null,
          "perServing": null
        },
        {
          "id": "bcaa",
          "name": "BCAA · combined total",
          "unit": "mg",
          "per100": null,
          "perServing": null
        }
      ],
      "massRows": [],
      "container": "can",
      "referenceUnit": "ml",
      "note": "For the selected Norwegian supplier recipe, caffeine, individual amino acids, total BCAA and vitamin doses are not verified. Oda reports 17 kJ / 4 kcal and 1 g protein under the ambiguous heading “per 100g/ml”; those are not converted into volume-based values here. The manufacturer’s 180 mg reference can and other-market panels are not substituted for a checked Norwegian package label. Sugar-free is a product description rather than an invented complete nutrition panel.",
      "source": "https://oda.com/no/products/31169-nocco-nocco-caribbean/"
    },
    // 1.26.5 – Drikkespesifikke forklaringar og atterhald
    "contexts": [],
    // 1.26.6 – Lenkjer til vidare utforsking av ingrediensane
    "discoveries": [
      "l-leucine",
      "l-valine",
      "l-isoleucine",
      "green-tea-extract",
      "biotin",
      "folic-acid",
      "vitamin-d",
      "sucralose",
      "b3",
      "b6",
      "b12",
      "citric-acid",
      "beta-carotene"
    ],
    "recipeDiscoveries": [
      "l-leucine",
      "l-valine",
      "l-isoleucine",
      "green-tea-extract",
      "biotin",
      "folic-acid",
      "vitamin-d",
      "sucralose",
      "b3",
      "b6",
      "b12",
      "citric-acid",
      "beta-carotene"
    ]
  },
  // ── DRIKK 1.27: Biola Blåbær [biola-blueberry] ──
  {
    "reviewed": "5 November 2026",
    // 1.27.1 – Namn, bilete, mengder, fargar og kjelder
    "id": "biola-blueberry",
    "name": "Biola Blåbær",
    "category": "Cultured dairy",
    "size": 1000,
    "sizeUnit": "g",
    "container": "carton",
    "caffeine": 0,
    "sugar": "93 g",
    "calories": "500",
    "image": "/biola-blueberry.png",
    "accent": "#7362ac",
    "tint": "#f4f0fc",
    "liquid": "#bda6c8",
    "carbonated": false,
    "opaque": true,
    "description": "Blueberry cultured milk with pectins, yoghurt starters and the LA-5, BB-12 and LGG cultures.",
    "source": "https://www.tine.no/produkter/biola-syrnet-melk-med-blabaer",
    "label": "https://www.tine.no/produkter/biola-syrnet-melk-med-blabaer",
    "note": "Current TINE Original Blåbær recipe, 1000 g carton. The package and nutrition are measured by weight, so this comparison uses grams rather than treating 1000 g as 1000 ml. Contains milk; not labelled lactose-free. TINE lists 8% blueberry juice from concentrate, 5% added sugar and 1% blackcurrant juice from concentrate, pectins, yoghurt starters, LA-5, BB-12, LGG and vitamin D. Individual viable culture counts are not published here. Culture chapters explain fermentation and are not extra measured doses or a factory sequence.",
    // 1.27.2 – Ingrediens-ID-ar for denne drikka
    "ingredients": [
      "milk",
      "blueberry-juice",
      "sugar",
      "blackcurrant-juice",
      "pectins",
      "flavourings",
      "sodium-citrate",
      "yoghurt-cultures",
      "culture-la5",
      "culture-bb12",
      "culture-lgg",
      "vitamin-d"
    ],
    // 1.27.3 – Animasjonssteg – start og duration er i sekund
    "stages": [
      {
        "kind": "milk",
        "delivery": "pour",
        "name": "Skimmed milk",
        "short": "Milk",
        "amount": "Quantity undisclosed",
        "unit": "Listed ingredient · individual dose not published",
        "description": "Skimmed milk is the foundation. It already contains milk proteins, lactose and minerals. Fermentation changes part of that mixture; the later culture chapters explain the process rather than adding a second milk dose. Contains milk.",
        "color": "#fff6e4",
        "duration": 10,
        "formula": "Protein · lactose · calcium",
        "ingredientIds": [
          "milk"
        ],
        "learn": "milk",
        "layer": 1.7,
        "start": 0
      },
      {
        "kind": "blueberry-juice",
        "delivery": "extract",
        "name": "Blueberry juice from concentrate",
        "short": "Blueberry",
        "amount": "8% of recipe",
        "unit": "TINE label · by weight",
        "description": "Blueberry juice restored from concentrate, listed as an 8% share of the Biola recipe. It brings berry flavour, colour and some naturally present sugars. Those sugars belong to the same total as the drink’s milk sugar and added sugar.",
        "color": "#8e72b2",
        "duration": 5.3,
        "formula": "Berry juice · 8% in Biola",
        "ingredientIds": [
          "blueberry-juice"
        ],
        "learn": "blueberry-juice",
        "layer": 0.2,
        "start": 10
      },
      {
        "kind": "sugar",
        "delivery": "crystals",
        "name": "Sugar",
        "short": "Sugar",
        "amount": "50 g added sugar",
        "unit": "Within 93 g total sugars per 1000 g carton",
        "description": "TINE lists 5% added sugar in a 1000 g carton, equivalent to 50 g. The nutrition total is 93 g sugars, including remaining milk sugar and juice sugars. These are overlapping figures, not two amounts to add together.",
        "color": "#eee6c8",
        "duration": 7,
        "formula": "Sweetness + energy",
        "ingredientIds": [
          "sugar"
        ],
        "learn": "sugar",
        "layer": 0.27,
        "start": 15.3
      },
      {
        "kind": "blackcurrant-juice",
        "delivery": "extract",
        "name": "Blackcurrant juice from concentrate",
        "short": "Blackcurrant",
        "amount": "1% of recipe",
        "unit": "TINE label · by weight",
        "description": "A concentrated-juice ingredient providing another berry component in Biola Blåbær. It contributes flavour, acidity and colour to the mixture. The label’s juice percentage does not establish a separate vitamin C or pigment dose.",
        "color": "#8b4d87",
        "duration": 5.3,
        "formula": "Berry juice · 1% in Biola",
        "ingredientIds": [
          "blackcurrant-juice"
        ],
        "learn": "blackcurrant-juice",
        "layer": 0.11,
        "start": 22.3
      },
      {
        "kind": "pectins",
        "delivery": "powder",
        "name": "Pectins",
        "short": "E440",
        "amount": "Quantity undisclosed",
        "unit": "Listed ingredient · individual dose not published",
        "description": "Plant carbohydrates used to thicken and stabilise the cultured milk. Pectin helps control texture. Gut bacteria can ferment it, but an undeclared amount in a drink does not establish a meaningful fibre benefit.",
        "color": "#dbc8b3",
        "duration": 5.3,
        "formula": "E440 family",
        "ingredientIds": [
          "pectins"
        ],
        "learn": "pectins",
        "layer": 0.09,
        "start": 27.6
      },
      {
        "kind": "flavourings",
        "delivery": "droplets",
        "name": "Flavourings",
        "short": "Flavourings",
        "amount": "Quantity undisclosed",
        "unit": "Listed ingredient · individual dose not published",
        "description": "Ingredients that create a drink’s taste and smell. Your nose and taste buds detect them. “Flavourings” describes a mixture, not one substance with one predictable effect on your organs.",
        "color": "#d7bca2",
        "duration": 5.3,
        "formula": "Taste + aroma",
        "ingredientIds": [
          "flavourings"
        ],
        "learn": "flavourings",
        "layer": 0.09,
        "start": 32.9
      },
      {
        "kind": "sodium-citrate",
        "delivery": "powder",
        "name": "Sodium citrate",
        "short": "E331",
        "amount": "Quantity undisclosed",
        "unit": "Listed ingredient · individual dose not published",
        "description": "A salt related to citric acid. Its code is E331. It helps control the drink’s acidity and adds some sodium. The ingredient name does not tell us how much sodium the bottle supplies.",
        "color": "#bbd8aa",
        "duration": 5.3,
        "formula": "E331 · citrate salts",
        "ingredientIds": [
          "sodium-citrate"
        ],
        "learn": "sodium-citrate",
        "layer": 0.09,
        "start": 38.2
      },
      {
        "kind": "yoghurt-cultures",
        "delivery": "droplets",
        "name": "Yoghurt starter cultures",
        "short": "Starters",
        "amount": "Viable count undisclosed",
        "unit": "Named culture · enlarged teaching illustration",
        "description": "Starter bacteria used to turn milk into a cultured dairy product. The bacteria ferment some milk sugar into lactic acid. Sufficient live yoghurt starters can help lactose digestion in the fermented product for people who digest lactose poorly. This chapter does not show an actual factory addition or a measured number of bacteria.",
        "color": "#ccd5dd",
        "duration": 5.3,
        "formula": "S. thermophilus · L. bulgaricus",
        "ingredientIds": [
          "yoghurt-cultures"
        ],
        "learn": "yoghurt-cultures",
        "layer": 0.08,
        "start": 43.5
      },
      {
        "kind": "culture-la5",
        "delivery": "droplets",
        "name": "LA-5 culture",
        "short": "LA-5",
        "amount": "Viable count undisclosed",
        "unit": "Named culture · enlarged teaching illustration",
        "description": "One of the specifically named bacterial cultures in Biola. LA-5 identifies a particular strain of lactic-acid bacteria. A strain name matters because findings about one culture do not automatically apply to every other bacterium. This chapter does not show an actual factory addition or a measured number of bacteria.",
        "color": "#c1b4dd",
        "duration": 5.3,
        "formula": "Lactobacillus acidophilus LA-5",
        "ingredientIds": [
          "culture-la5"
        ],
        "learn": "culture-la5",
        "layer": 0.07,
        "start": 48.8
      },
      {
        "kind": "culture-bb12",
        "delivery": "droplets",
        "name": "BB-12 culture",
        "short": "BB-12",
        "amount": "Viable count undisclosed",
        "unit": "Named culture · enlarged teaching illustration",
        "description": "A named bifidobacterial culture included alongside Biola’s other cultures. BB-12 is a strain identifier. It helps distinguish this organism from other bacteria studied for digestive effects, rather than describing a vitamin or stimulant. This chapter does not show an actual factory addition or a measured number of bacteria.",
        "color": "#b9cde0",
        "duration": 5.3,
        "formula": "Bifidobacterium animalis subsp. lactis BB-12",
        "ingredientIds": [
          "culture-bb12"
        ],
        "learn": "culture-bb12",
        "layer": 0.07,
        "start": 54.1
      },
      {
        "kind": "culture-lgg",
        "delivery": "droplets",
        "name": "LGG culture",
        "short": "LGG",
        "amount": "Viable count undisclosed",
        "unit": "Named culture · enlarged teaching illustration",
        "description": "A specific bacterial strain commonly referred to by the short name LGG. LGG is different from the yoghurt starter pair and the other cultures in this recipe. Evidence depends on the strain and viable dose used in a study. This chapter does not show an actual factory addition or a measured number of bacteria.",
        "color": "#b5d7cb",
        "duration": 5.3,
        "formula": "Lacticaseibacillus rhamnosus GG",
        "ingredientIds": [
          "culture-lgg"
        ],
        "learn": "culture-lgg",
        "layer": 0.07,
        "start": 59.4
      },
      {
        "kind": "vitamin-d",
        "delivery": "droplets",
        "name": "Vitamin D",
        "short": "Vitamin D",
        "amount": "7.8 µg",
        "unit": "Per 1000 g · see nutrition source below",
        "description": "A vitamin used to support normal calcium handling in the body. Vitamin D helps your intestine absorb calcium. Your body needs it for normal bones and muscles, but extra intake does not automatically mean stronger immunity.",
        "color": "#e6d2a2",
        "duration": 5.3,
        "formula": "D · exact form undisclosed",
        "ingredientIds": [
          "vitamin-d"
        ],
        "learn": "vitamin-d",
        "layer": 0.065,
        "start": 64.7
      },
      {
        "kind": "final",
        "delivery": "pour",
        "name": "From layers to a drink.",
        "short": "Mix together",
        "amount": "1000",
        "unit": "g · Biola Blåbær",
        "description": "The teaching colours curl into one another as the spoon stirs. They gradually become this drink’s representative colour. Colour, viscosity and light transmission remain visual approximations.",
        "color": "#bda6c8",
        "duration": 14,
        "formula": "One complete mixture",
        "ingredientIds": [],
        "layer": 0,
        "start": 70
      }
    ],
    // 1.27.4 – Næring – per100 er referansemengd, perServing er éin behaldar
    "nutrition": {
      "rows": [
        {
          "id": "kcal",
          "name": "Energy",
          "unit": "kcal",
          "per100": 50,
          "perServing": 500
        },
        {
          "id": "kj",
          "name": "Energy",
          "unit": "kJ",
          "per100": 214,
          "perServing": 2140
        },
        {
          "id": "caffeine",
          "name": "Caffeine",
          "unit": "mg",
          "guide": "caffeine",
          "per100": 0,
          "perServing": 0
        },
        {
          "id": "carbs",
          "name": "Carbohydrate",
          "unit": "g",
          "per100": 9.3,
          "perServing": 93
        },
        {
          "id": "sugars",
          "name": "of which sugars",
          "unit": "g",
          "guide": "sugar",
          "per100": 9.3,
          "perServing": 93
        },
        {
          "id": "fat",
          "name": "Fat",
          "unit": "g",
          "per100": 0,
          "perServing": 0
        },
        {
          "id": "saturates",
          "name": "of which saturates",
          "unit": "g",
          "per100": 0,
          "perServing": 0
        },
        {
          "id": "protein",
          "name": "Protein",
          "unit": "g",
          "per100": 3.1,
          "perServing": 31
        },
        {
          "id": "salt",
          "name": "Salt",
          "unit": "g",
          "per100": 0.11,
          "perServing": 1.1
        },
        {
          "id": "b2",
          "name": "Vitamin B2",
          "unit": "mg",
          "guide": "b2",
          "per100": 0.13,
          "perServing": 1.3
        },
        {
          "id": "b12",
          "name": "Vitamin B12",
          "unit": "µg",
          "guide": "b12",
          "per100": 0.43,
          "perServing": 4.3
        },
        {
          "id": "calcium",
          "name": "Calcium",
          "unit": "mg",
          "per100": 104,
          "perServing": 1040
        },
        {
          "id": "phosphorus",
          "name": "Phosphorus",
          "unit": "mg",
          "per100": 86.8,
          "perServing": 868
        },
        {
          "id": "iodine",
          "name": "Iodine",
          "unit": "µg",
          "per100": 14.8,
          "perServing": 148
        },
        {
          "id": "vitamin-d",
          "name": "Vitamin D",
          "unit": "µg",
          "guide": "vitamin-d",
          "per100": 0.78,
          "perServing": 7.800000000000001
        }
      ],
      "massRows": [],
      "container": "carton",
      "referenceUnit": "g",
      "note": "TINE’s package is 1000 g and its panel is per 100 g. Both columns therefore use weight: one whole carton and 100 g. No product density is assumed and no per-100-ml conversion is made. Total sugars include milk sugar, juice sugars and added sugar together. The whole-carton column is a package comparison, not a suggested portion. Viable culture doses are not quantified.",
      "source": "https://www.tine.no/produkter/biola-syrnet-melk-med-blabaer"
    },
    // 1.27.5 – Drikkespesifikke forklaringar og atterhald
    "contexts": [
      {
        "id": "lactose",
        "parentId": "milk"
      },
      {
        "id": "casein",
        "parentId": "milk"
      }
    ],
    // 1.27.6 – Lenkjer til vidare utforsking av ingrediensane
    "discoveries": [
      "culture-la5",
      "culture-bb12",
      "culture-lgg",
      "pectins",
      "yoghurt-cultures",
      "vitamin-d",
      "casein",
      "lactose",
      "sodium-citrate",
      "blueberry-juice",
      "blackcurrant-juice"
    ],
    "recipeDiscoveries": [
      "culture-la5",
      "culture-bb12",
      "culture-lgg",
      "pectins",
      "yoghurt-cultures",
      "vitamin-d",
      "sodium-citrate",
      "blueberry-juice",
      "blackcurrant-juice"
    ]
  },
  // ── DRIKK 1.28: Black filter coffee [filter-coffee] ──
  {
    // 1.28.1 – Namn, bilete, mengder, fargar og kjelder
    "id": "filter-coffee",
    "name": "Black filter coffee",
    "category": "Coffee & tea",
    "size": 200,
    "caffeine": 90,
    "approximate": true,
    "sugar": "0 g added",
    "calories": "Varies",
    "image": "/coffee.svg",
    "accent": "#916449",
    "tint": "#f8f0e9",
    "liquid": "#3c1a0c",
    "carbonated": false,
    "description": "No energy blend. Just water, extracted coffee compounds and caffeine.",
    "source": "https://www.efsa.europa.eu/en/topics/topic/caffeine",
    "label": "https://www.nhs.uk/live-well/eat-well/food-guidelines-and-food-labels/water-drinks-nutrition/",
    "note": "An illustrative unsweetened 200 ml filter coffee. EFSA’s typical caffeine estimate is 90 mg; bean, brew strength and preparation change the actual value. Not a branded recipe or laboratory analysis.",
    // 1.28.2 – Ingrediens-ID-ar for denne drikka
    "ingredients": [
      "water",
      "coffee-solids",
      "caffeine"
    ],
    // 1.28.3 – Animasjonssteg – start og duration er i sekund
    "stages": [
      {
        "kind": "water",
        "delivery": "pour",
        "name": "Water",
        "short": "Water",
        "amount": "The foundation",
        "unit": "A clear starting point",
        "description": "A clear first pour settles into the glass. The separate layers that follow are enlarged teaching colours, not real concentrations or a factory recipe.",
        "color": "#c9e7f1",
        "duration": 10,
        "formula": "H₂O",
        "ingredientIds": [
          "water"
        ],
        "learn": "water",
        "layer": 1.25,
        "start": 0
      },
      {
        "kind": "coffee-solids",
        "delivery": "extract",
        "name": "Extracted coffee compounds",
        "short": "Coffee",
        "amount": "Quantity undisclosed",
        "unit": "Listed ingredient · individual dose not published",
        "description": "The mix of coffee substances that dissolves into water when you brew it. These substances give coffee its brown colour, smell and taste. Coffee can trigger heartburn in some people. Caffeine’s effects on your brain and heart are covered in the separate caffeine guide.",
        "color": "#9f7353",
        "duration": 8,
        "formula": "Brewed, not blended",
        "ingredientIds": [
          "coffee-solids"
        ],
        "learn": "coffee-solids",
        "layer": 0.6,
        "start": 10
      },
      {
        "kind": "caffeine",
        "delivery": "powder",
        "name": "Caffeine",
        "short": "Caffeine",
        "amount": "≈ 90 mg",
        "unit": "Typical estimate per 200 ml",
        "description": "The ingredient that can make you feel more awake. In your brain, caffeine blocks some of the signals that make you feel sleepy. Too much can also make your heart race and keep you awake at night.",
        "color": "#8cbbeb",
        "duration": 5.3,
        "formula": "C₈H₁₀N₄O₂",
        "ingredientIds": [
          "caffeine"
        ],
        "learn": "caffeine",
        "layer": 0.13,
        "start": 18
      },
      {
        "kind": "final",
        "delivery": "pour",
        "name": "From layers to a drink.",
        "short": "Mix together",
        "amount": "200",
        "unit": "ml · Black filter coffee",
        "description": "The teaching colours curl into one another as the spoon stirs. They gradually become this drink’s representative colour. Colour, viscosity and light transmission remain visual approximations.",
        "color": "#3c1a0c",
        "duration": 14,
        "formula": "One complete mixture",
        "ingredientIds": [],
        "layer": 0,
        "start": 23.3
      }
    ],
    // 1.28.4 – Næring – per100 er referansemengd, perServing er éin behaldar
    "nutrition": {
      "rows": [
        {
          "id": "kcal",
          "name": "Energy",
          "unit": "kcal",
          "per100": null,
          "perServing": null
        },
        {
          "id": "kj",
          "name": "Energy",
          "unit": "kJ",
          "per100": null,
          "perServing": null
        },
        {
          "id": "caffeine",
          "name": "Caffeine",
          "unit": "mg",
          "guide": "caffeine",
          "per100": {
            "value": 45,
            "approximate": true
          },
          "perServing": {
            "value": 90,
            "approximate": true
          }
        },
        {
          "id": "carbs",
          "name": "Carbohydrate",
          "unit": "g",
          "per100": null,
          "perServing": null
        },
        {
          "id": "sugars",
          "name": "of which sugars",
          "unit": "g",
          "guide": "sugar",
          "per100": null,
          "perServing": null
        },
        {
          "id": "fat",
          "name": "Fat",
          "unit": "g",
          "per100": null,
          "perServing": null
        },
        {
          "id": "saturates",
          "name": "of which saturates",
          "unit": "g",
          "per100": null,
          "perServing": null
        },
        {
          "id": "protein",
          "name": "Protein",
          "unit": "g",
          "per100": null,
          "perServing": null
        },
        {
          "id": "salt",
          "name": "Salt",
          "unit": "g",
          "per100": null,
          "perServing": null
        }
      ],
      "massRows": [],
      "container": "cup",
      "referenceUnit": "ml",
      "note": "A representative plain brew, not a fixed packaged recipe. Caffeine is a typical estimate; strength changes with brewing. No sugar is added, but that is not used to invent a full measured nutrition panel.",
      "source": "https://www.efsa.europa.eu/en/topics/topic/caffeine"
    },
    // 1.28.5 – Drikkespesifikke forklaringar og atterhald
    "contexts": [
      {
        "id": "chlorogenic-acids",
        "parentId": "coffee-solids"
      },
      {
        "id": "trigonelline",
        "parentId": "coffee-solids"
      },
      {
        "id": "coffee-melanoidins",
        "parentId": "coffee-solids"
      }
    ],
    // 1.28.6 – Lenkjer til vidare utforsking av ingrediensane
    "discoveries": [
      "chlorogenic-acids",
      "trigonelline",
      "coffee-melanoidins"
    ],
    "recipeDiscoveries": []
  },
  // ── DRIKK 1.29: Black tea [black-tea] ──
  {
    // 1.29.1 – Namn, bilete, mengder, fargar og kjelder
    "id": "black-tea",
    "name": "Black tea",
    "category": "Coffee & tea",
    "size": 220,
    "caffeine": 50,
    "approximate": true,
    "sugar": "0 g added",
    "calories": "Varies",
    "image": "/tea.svg",
    "accent": "#b47b32",
    "tint": "#fcf5e8",
    "liquid": "#a45b15",
    "carbonated": false,
    "description": "See what brewing extracts from tea leaves, without sugar or milk.",
    "source": "https://www.efsa.europa.eu/en/topics/topic/caffeine",
    "label": "https://www.nhs.uk/live-well/eat-well/food-guidelines-and-food-labels/water-drinks-nutrition/",
    "note": "Representative unsweetened 220 ml black tea, using EFSA’s typical 50 mg caffeine estimate. Leaf type, steeping time and water temperature affect the cup. Tea compounds are grouped rather than exhaustively listed.",
    // 1.29.2 – Ingrediens-ID-ar for denne drikka
    "ingredients": [
      "water",
      "tea-solids",
      "caffeine"
    ],
    // 1.29.3 – Animasjonssteg – start og duration er i sekund
    "stages": [
      {
        "kind": "water",
        "delivery": "pour",
        "name": "Water",
        "short": "Water",
        "amount": "The foundation",
        "unit": "A clear starting point",
        "description": "A clear first pour settles into the glass. The separate layers that follow are enlarged teaching colours, not real concentrations or a factory recipe.",
        "color": "#c9e7f1",
        "duration": 10,
        "formula": "H₂O",
        "ingredientIds": [
          "water"
        ],
        "learn": "water",
        "layer": 1.25,
        "start": 0
      },
      {
        "kind": "tea-solids",
        "delivery": "extract",
        "name": "Extracted tea compounds",
        "short": "Tea",
        "amount": "Quantity undisclosed",
        "unit": "Listed ingredient · individual dose not published",
        "description": "The mix of substances that moves from tea leaves into hot water. These substances give tea its colour and taste. The caffeine in tea is shown separately because that is what can make you feel more awake or affect sleep.",
        "color": "#dcb262",
        "duration": 8,
        "formula": "An infusion",
        "ingredientIds": [
          "tea-solids"
        ],
        "learn": "tea-solids",
        "layer": 0.6,
        "start": 10
      },
      {
        "kind": "caffeine",
        "delivery": "powder",
        "name": "Caffeine",
        "short": "Caffeine",
        "amount": "≈ 50 mg",
        "unit": "Typical estimate per 220 ml",
        "description": "The ingredient that can make you feel more awake. In your brain, caffeine blocks some of the signals that make you feel sleepy. Too much can also make your heart race and keep you awake at night.",
        "color": "#8cbbeb",
        "duration": 5.3,
        "formula": "C₈H₁₀N₄O₂",
        "ingredientIds": [
          "caffeine"
        ],
        "learn": "caffeine",
        "layer": 0.13,
        "start": 18
      },
      {
        "kind": "final",
        "delivery": "pour",
        "name": "From layers to a drink.",
        "short": "Mix together",
        "amount": "220",
        "unit": "ml · Black tea",
        "description": "The teaching colours curl into one another as the spoon stirs. They gradually become this drink’s representative colour. Colour, viscosity and light transmission remain visual approximations.",
        "color": "#a45b15",
        "duration": 14,
        "formula": "One complete mixture",
        "ingredientIds": [],
        "layer": 0,
        "start": 23.3
      }
    ],
    // 1.29.4 – Næring – per100 er referansemengd, perServing er éin behaldar
    "nutrition": {
      "rows": [
        {
          "id": "kcal",
          "name": "Energy",
          "unit": "kcal",
          "per100": null,
          "perServing": null
        },
        {
          "id": "kj",
          "name": "Energy",
          "unit": "kJ",
          "per100": null,
          "perServing": null
        },
        {
          "id": "caffeine",
          "name": "Caffeine",
          "unit": "mg",
          "guide": "caffeine",
          "per100": {
            "value": 22.727272727272727,
            "approximate": true
          },
          "perServing": {
            "value": 50,
            "approximate": true
          }
        },
        {
          "id": "carbs",
          "name": "Carbohydrate",
          "unit": "g",
          "per100": null,
          "perServing": null
        },
        {
          "id": "sugars",
          "name": "of which sugars",
          "unit": "g",
          "guide": "sugar",
          "per100": null,
          "perServing": null
        },
        {
          "id": "fat",
          "name": "Fat",
          "unit": "g",
          "per100": null,
          "perServing": null
        },
        {
          "id": "saturates",
          "name": "of which saturates",
          "unit": "g",
          "per100": null,
          "perServing": null
        },
        {
          "id": "protein",
          "name": "Protein",
          "unit": "g",
          "per100": null,
          "perServing": null
        },
        {
          "id": "salt",
          "name": "Salt",
          "unit": "g",
          "per100": null,
          "perServing": null
        }
      ],
      "massRows": [],
      "container": "cup",
      "referenceUnit": "ml",
      "note": "A representative plain black tea. Caffeine is a typical estimate; steeping time and leaves change it. No added sugar is different from a measured total-sugar result.",
      "source": "https://www.efsa.europa.eu/en/topics/topic/caffeine"
    },
    // 1.29.5 – Drikkespesifikke forklaringar og atterhald
    "contexts": [
      {
        "id": "l-theanine",
        "parentId": "tea-solids"
      },
      {
        "id": "theaflavins",
        "parentId": "tea-solids"
      }
    ],
    // 1.29.6 – Lenkjer til vidare utforsking av ingrediensane
    "discoveries": [
      "l-theanine",
      "theaflavins"
    ],
    "recipeDiscoveries": []
  },
  // ── DRIKK 1.30: 100% orange juice [orange-juice] ──
  {
    // 1.30.1 – Namn, bilete, mengder, fargar og kjelder
    "id": "orange-juice",
    "name": "100% orange juice",
    "category": "Juice & water",
    "size": 150,
    "caffeine": 0,
    "sugar": "Naturally present",
    "calories": "Varies",
    "image": "/juice.svg",
    "accent": "#de922a",
    "tint": "#fff5e7",
    "liquid": "#f1a52e",
    "carbonated": false,
    "description": "Naturally occurring sugars, vitamin C and the role of the fruit matrix.",
    "source": "https://www.nhs.uk/live-well/eat-well/food-guidelines-and-food-labels/water-drinks-nutrition/",
    "label": "https://ods.od.nih.gov/factsheets/VitaminC-Consumer/",
    "note": "A generic 150 ml serving of 100% orange juice without added sugar. Sugar and vitamin C vary with fruit and processing, so precise amounts are not assigned. This is a composition overview, not a specific product label.",
    // 1.30.2 – Ingrediens-ID-ar for denne drikka
    "ingredients": [
      "water",
      "sugar",
      "vitamin-c",
      "fruit-acids",
      "fruit-solids"
    ],
    // 1.30.3 – Animasjonssteg – start og duration er i sekund
    "stages": [
      {
        "kind": "water",
        "delivery": "pour",
        "name": "Water",
        "short": "Water",
        "amount": "The foundation",
        "unit": "A clear starting point",
        "description": "A clear first pour settles into the glass. The separate layers that follow are enlarged teaching colours, not real concentrations or a factory recipe.",
        "color": "#c9e7f1",
        "duration": 10,
        "formula": "H₂O",
        "ingredientIds": [
          "water"
        ],
        "learn": "water",
        "layer": 1.25,
        "start": 0
      },
      {
        "kind": "sugar",
        "delivery": "crystals",
        "name": "Naturally occurring sugars",
        "short": "Sugar",
        "amount": "Naturally present",
        "unit": "Combined sugars per 150 ml · see source note",
        "description": "Juice contains naturally occurring sugars, already dissolved in the juice. They still count as free sugars. The separate crystal stream is an illustration, not an added ingredient or a real manufacturing step.",
        "color": "#eee6c8",
        "duration": 7,
        "formula": "Sweetness + energy",
        "ingredientIds": [
          "sugar"
        ],
        "learn": "sugar",
        "layer": 0.27,
        "start": 10
      },
      {
        "kind": "vitamin-c",
        "delivery": "powder",
        "name": "Vitamin C · ascorbic acid",
        "short": "Vitamin C",
        "amount": "Quantity undisclosed",
        "unit": "Listed ingredient · individual dose not published",
        "description": "Vitamin C, also called ascorbic acid or E300. Your body uses vitamin C to make collagen, which helps hold skin, gums and other tissues together. It supports normal immune function. In drinks it can also help stop ingredients reacting with oxygen.",
        "color": "#efd376",
        "duration": 5.3,
        "formula": "E300 · C₆H₈O₆",
        "ingredientIds": [
          "vitamin-c"
        ],
        "learn": "vitamin-c",
        "layer": 0.09,
        "start": 17
      },
      {
        "kind": "fruit-acids",
        "delivery": "droplets",
        "name": "Naturally occurring fruit acids",
        "short": "Fruit acids",
        "amount": "Quantity undisclosed",
        "unit": "Listed ingredient · individual dose not published",
        "description": "The acids naturally present in fruit juice. They give juice its sour taste. Acid can affect tooth enamel and may trigger heartburn, whether it comes from fruit or is added to a drink.",
        "color": "#d7d88d",
        "duration": 5.3,
        "formula": "Fruit acidity",
        "ingredientIds": [
          "fruit-acids"
        ],
        "learn": "fruit-acids",
        "layer": 0.12,
        "start": 22.3
      },
      {
        "kind": "fruit-solids",
        "delivery": "extract",
        "name": "Fruit compounds & pulp",
        "short": "Fruit",
        "amount": "Quantity undisclosed",
        "unit": "Listed ingredient · individual dose not published",
        "description": "Fruit-derived substances and any pulp left in the juice. They give juice flavour, colour and body. Juice does not have the same structure or fullness as eating a whole orange.",
        "color": "#f4b252",
        "duration": 5.3,
        "formula": "The fruit matrix",
        "ingredientIds": [
          "fruit-solids"
        ],
        "learn": "fruit-solids",
        "layer": 0.3,
        "start": 27.6
      },
      {
        "kind": "final",
        "delivery": "pour",
        "name": "From layers to a drink.",
        "short": "Mix together",
        "amount": "150",
        "unit": "ml · 100% orange juice",
        "description": "The teaching colours curl into one another as the spoon stirs. They gradually become this drink’s representative colour. Colour, viscosity and light transmission remain visual approximations.",
        "color": "#f1a52e",
        "duration": 14,
        "formula": "One complete mixture",
        "ingredientIds": [],
        "layer": 0,
        "start": 32.9
      }
    ],
    // 1.30.4 – Næring – per100 er referansemengd, perServing er éin behaldar
    "nutrition": {
      "rows": [
        {
          "id": "kcal",
          "name": "Energy",
          "unit": "kcal",
          "per100": null,
          "perServing": null
        },
        {
          "id": "kj",
          "name": "Energy",
          "unit": "kJ",
          "per100": null,
          "perServing": null
        },
        {
          "id": "caffeine",
          "name": "Caffeine",
          "unit": "mg",
          "guide": "caffeine",
          "per100": 0,
          "perServing": 0
        },
        {
          "id": "carbs",
          "name": "Carbohydrate",
          "unit": "g",
          "per100": null,
          "perServing": null
        },
        {
          "id": "sugars",
          "name": "of which sugars",
          "unit": "g",
          "guide": "sugar",
          "per100": null,
          "perServing": null
        },
        {
          "id": "fat",
          "name": "Fat",
          "unit": "g",
          "per100": null,
          "perServing": null
        },
        {
          "id": "saturates",
          "name": "of which saturates",
          "unit": "g",
          "per100": null,
          "perServing": null
        },
        {
          "id": "protein",
          "name": "Protein",
          "unit": "g",
          "per100": null,
          "perServing": null
        },
        {
          "id": "salt",
          "name": "Salt",
          "unit": "g",
          "per100": null,
          "perServing": null
        },
        {
          "id": "vitamin-c",
          "name": "Vitamin C",
          "unit": "mg",
          "guide": "vitamin-c",
          "per100": null,
          "perServing": null
        }
      ],
      "massRows": [],
      "container": "serving",
      "referenceUnit": "ml",
      "note": "Generic 100% orange juice. It contains naturally occurring sugars and vitamin C, but no exact brand or measured amounts have been selected.",
      "source": "https://www.nhs.uk/live-well/eat-well/food-guidelines-and-food-labels/water-drinks-nutrition/"
    },
    // 1.30.5 – Drikkespesifikke forklaringar og atterhald
    "contexts": [
      {
        "id": "hesperidin",
        "parentId": "fruit-solids"
      }
    ],
    // 1.30.6 – Lenkjer til vidare utforsking av ingrediensane
    "discoveries": [
      "hesperidin"
    ],
    "recipeDiscoveries": []
  },
  // ── DRIKK 1.31: Plain sparkling water [sparkling-water] ──
  {
    // 1.31.1 – Namn, bilete, mengder, fargar og kjelder
    "id": "sparkling-water",
    "name": "Plain sparkling water",
    "category": "Juice & water",
    "size": 250,
    "caffeine": 0,
    "sugar": "0 g",
    "calories": "0",
    "image": "/water.svg",
    "accent": "#5c9eb7",
    "tint": "#eef8fc",
    "liquid": "#f3fafc",
    "carbonated": true,
    "description": "The simplest experiment: water and carbon dioxide, with nothing sweet added.",
    "source": "https://www.nhs.uk/live-well/eat-well/food-guidelines-and-food-labels/water-drinks-nutrition/",
    "label": "https://www.nhs.uk/live-well/eat-well/food-guidelines-and-food-labels/water-drinks-nutrition/",
    "note": "Generic unflavoured carbonated water with no sugar or sweeteners. Natural mineral content depends on the source and is not quantified or included as a separate stage.",
    // 1.31.2 – Ingrediens-ID-ar for denne drikka
    "ingredients": [
      "water",
      "carbonation"
    ],
    // 1.31.3 – Animasjonssteg – start og duration er i sekund
    "stages": [
      {
        "kind": "water",
        "delivery": "pour",
        "name": "Water",
        "short": "Water",
        "amount": "The foundation",
        "unit": "A clear starting point",
        "description": "A clear first pour settles into the glass. The separate layers that follow are enlarged teaching colours, not real concentrations or a factory recipe.",
        "color": "#c9e7f1",
        "duration": 10,
        "formula": "H₂O",
        "ingredientIds": [
          "water"
        ],
        "learn": "water",
        "layer": 1.25,
        "start": 0
      },
      {
        "kind": "carbonation",
        "delivery": "gas",
        "name": "Carbon dioxide",
        "short": "CO₂",
        "amount": "Quantity undisclosed",
        "unit": "Listed ingredient · individual dose not published",
        "description": "Carbon dioxide disperses through the water. Small bubbles rise along the glass; the gas does not form a separate liquid layer in the real drink.",
        "color": "#d9f1f6",
        "duration": 4.5,
        "formula": "CO₂",
        "ingredientIds": [
          "carbonation"
        ],
        "learn": "carbonation",
        "layer": 0.045,
        "start": 10
      },
      {
        "kind": "final",
        "delivery": "pour",
        "name": "From layers to a drink.",
        "short": "Mix together",
        "amount": "250",
        "unit": "ml · Plain sparkling water",
        "description": "The teaching colours curl into one another as the spoon stirs. They gradually become this drink’s representative colour. Colour, viscosity and light transmission remain visual approximations.",
        "color": "#f3fafc",
        "duration": 14,
        "formula": "One complete mixture",
        "ingredientIds": [],
        "layer": 0,
        "start": 14.5
      }
    ],
    // 1.31.4 – Næring – per100 er referansemengd, perServing er éin behaldar
    "nutrition": {
      "rows": [
        {
          "id": "kcal",
          "name": "Energy",
          "unit": "kcal",
          "per100": 0,
          "perServing": 0
        },
        {
          "id": "kj",
          "name": "Energy",
          "unit": "kJ",
          "per100": 0,
          "perServing": 0
        },
        {
          "id": "caffeine",
          "name": "Caffeine",
          "unit": "mg",
          "guide": "caffeine",
          "per100": 0,
          "perServing": 0
        },
        {
          "id": "carbs",
          "name": "Carbohydrate",
          "unit": "g",
          "per100": 0,
          "perServing": 0
        },
        {
          "id": "sugars",
          "name": "of which sugars",
          "unit": "g",
          "guide": "sugar",
          "per100": 0,
          "perServing": 0
        },
        {
          "id": "fat",
          "name": "Fat",
          "unit": "g",
          "per100": 0,
          "perServing": 0
        },
        {
          "id": "saturates",
          "name": "of which saturates",
          "unit": "g",
          "per100": 0,
          "perServing": 0
        },
        {
          "id": "protein",
          "name": "Protein",
          "unit": "g",
          "per100": 0,
          "perServing": 0
        },
        {
          "id": "salt",
          "name": "Salt",
          "unit": "g",
          "per100": null,
          "perServing": null
        }
      ],
      "massRows": [],
      "container": "serving",
      "referenceUnit": "ml",
      "note": "Generic plain sparkling water without sugar. Mineral and salt content depend on the water source and are not assigned here.",
      "source": "https://www.nhs.uk/live-well/eat-well/food-guidelines-and-food-labels/water-drinks-nutrition/"
    },
    // 1.31.5 – Drikkespesifikke forklaringar og atterhald
    "contexts": [],
    // 1.31.6 – Lenkjer til vidare utforsking av ingrediensane
    "discoveries": [],
    "recipeDiscoveries": []
  }
];

;

// =====================================================================
// DEL 2: INGREDIENSARTIKLAR
// =====================================================================

// INGREDIENSRETTLEIINGAR
// Engelsk tekst står først. nn inneheld den fullstendige nynorske omsetjinga.
// ID-ar, faglege atterhald og kjeldeadresser er dei same på begge språk.
window.DRINKLAB_INGREDIENTS = [
  // ── STOFF 2.01: Caffeine [caffeine] ──
  {
    "id": "caffeine",
    "name": "Caffeine",
    "category": "Stimulant",
    "symbol": "C₈H₁₀N₄O₂",
    // Engelsk fagtekst: kva stoffet er, kroppen, fordelar og ulemper
    "what": "The ingredient that can make you feel more awake.",
    "body": "In your brain, caffeine blocks some of the signals that make you feel sleepy. Too much can also make your heart race and keep you awake at night.",
    "good": "You may feel more awake and find it easier to focus for a few hours. That can be useful when you need to stay alert. It does not give you food energy, and the effect wears off. You still need sleep.",
    "bad": "You may feel shaky, anxious or sick. Your heart can race or pound, and you may struggle to fall asleep. Drinking it late can affect your night even when you no longer feel a buzz. Coffee, cola and energy drinks all count towards your total.",
    "evidence": "People react differently. EFSA’s 200 mg single-dose and 400 mg daily figures concern healthy, non-pregnant adults. They are safety assessment levels, not goals. Children and pregnancy need different advice.",
    "sources": [
      {
        "name": "EFSA · caffeine",
        "url": "https://www.efsa.europa.eu/en/topics/topic/caffeine"
      },
      {
        "name": "FDA · caffeine effects and sensitivity",
        "url": "https://www.fda.gov/consumers/consumer-updates/spilling-beans-how-much-caffeine-too-much"
      }
    ],
    "areas": [
      "Brain",
      "Heart",
      "Sleep"
    ],
    // Same ingrediensartikkel på nynorsk
    "nn": {
      "name": "Koffein",
      "category": "Stimulerande stoff",
      "symbol": "C₈H₁₀N₄O₂",
      "areas": [
        "Hjernen",
        "Hjartet",
        "Søvn"
      ],
      "what": "Stoffet som kan få deg til å kjenne deg meir vaken.",
      "body": "I hjernen blokkerer koffein nokre av signala som gjer deg søvnig. For mykje kan òg få hjartet til å slå raskt og halde deg vaken om natta.",
      "good": "Du kan kjenne deg meir vaken og ha lettare for å konsentrere deg i nokre timar. Det kan vere nyttig når du må vere merksam. Koffein gir deg ikkje energi frå mat, og verknaden går over. Du treng framleis søvn.",
      "bad": "Du kan bli skjelven, uroleg eller kvalm. Hjartet kan slå raskt eller dunke hardt, og du kan få vanskar med å sovne. Drikk du koffein seint, kan det påverke nattesøvnen sjølv om du ikkje lenger kjenner deg oppkvikka. Kaffi, cola og energidrikkar tel alle med i den samla mengda.",
      "evidence": "Folk reagerer ulikt. Tala frå EFSA på 200 mg i éin dose og 400 mg per dag gjeld friske vaksne som ikkje er gravide. Dei er nivå som er brukte i tryggleiksvurderingar, ikkje mål du bør nå. Barn og gravide treng andre råd.",
      "sources": [
        {
          "name": "EFSA · koffein",
          "url": "https://www.efsa.europa.eu/en/topics/topic/caffeine"
        },
        {
          "name": "FDA · verknader av koffein og kor følsam du er",
          "url": "https://www.fda.gov/consumers/consumer-updates/spilling-beans-how-much-caffeine-too-much"
        }
      ],
      "reviewed": "30. oktober 2026"
    }
  },
  // ── STOFF 2.02: Taurine [taurine] ──
  {
    "id": "taurine",
    "name": "Taurine",
    "category": "Cell function",
    "symbol": "C₂H₇NO₃S",
    // Engelsk fagtekst: kva stoffet er, kroppen, fordelar og ulemper
    "what": "A substance your body makes and also gets from some foods.",
    "body": "Your cells use taurine to help control water and calcium. Calcium signals help muscles work. Having this normal role does not prove that extra taurine in a drink improves your muscles or heart.",
    "good": "Your body needs taurine for normal cell function, and it makes some itself. Meat and fish also contain it. These normal jobs explain why it appears in discussions about muscles. They do not show that drinking more gives a healthy person stronger muscles or more stamina.",
    "bad": "Added taurine has no clearly proven performance benefit from an ordinary energy drink. It also does not protect your heart or sleep from too much caffeine. A drink can therefore contain taurine and still make you feel shaky, cause a racing heart or keep you awake because of its caffeine.",
    "evidence": "Taurine’s normal role in the body and the effect of adding more are different questions. The evidence does not support treating it as a caffeine antidote.",
    "sources": [
      {
        "name": "BfR · taurine evidence",
        "url": "https://www.bfr.bund.de/en/release/frequently-asked-questions-on-caffeine-and-foods-containing-caffeine-including-energy-drinks/"
      }
    ],
    "areas": [
      "Cells",
      "Muscles"
    ],
    // Same ingrediensartikkel på nynorsk
    "nn": {
      "name": "Taurin",
      "category": "Cellefunksjon",
      "symbol": "C₂H₇NO₃S",
      "areas": [
        "Celler",
        "Musklane"
      ],
      "what": "Eit stoff kroppen lagar sjølv, og som du òg får frå nokre matvarer.",
      "body": "Cellene bruker taurin til å regulere vatn og kalsium. Kalsiumsignal hjelper musklane med å arbeide. Denne normale oppgåva viser ikkje at ekstra taurin i ein drikk gjer musklane eller hjartet betre.",
      "good": "Kroppen treng taurin for at cellene skal fungere normalt, og lagar noko av det sjølv. Kjøt og fisk inneheld òg taurin. Desse normale oppgåvene forklarer kvifor stoffet blir omtalt i samband med musklar. Dei viser ikkje at meir taurin i drikka gir ein frisk person sterkare musklar eller betre uthald.",
      "bad": "Det er ikkje tydeleg dokumentert at tilsett taurin i ein vanleg energidrikk betrar prestasjonsevna. Det vernar heller ikkje hjartet eller søvnen mot for mykje koffein. Ein drikk kan derfor innehalde taurin og likevel gjere deg skjelven, gi rask puls eller halde deg vaken på grunn av koffeinet.",
      "evidence": "Den normale rolla til taurin i kroppen og verknaden av å tilføre meir er to ulike spørsmål. Dokumentasjonen gir ikkje grunnlag for å sjå på taurin som ei motgift mot koffein.",
      "sources": [
        {
          "name": "BfR · dokumentasjon om taurin",
          "url": "https://www.bfr.bund.de/en/release/frequently-asked-questions-on-caffeine-and-foods-containing-caffeine-including-energy-drinks/"
        }
      ],
      "reviewed": "30. oktober 2026"
    }
  },
  // ── STOFF 2.03: Sucrose & glucose [sugar] ──
  {
    "id": "sugar",
    "name": "Sucrose & glucose",
    "category": "Carbohydrate",
    "symbol": "Sweetness + energy",
    // Engelsk fagtekst: kva stoffet er, kroppen, fordelar og ulemper
    "what": "Carbohydrate that gives a drink sweetness and calories.",
    "body": "Your body breaks sugars down and uses them for fuel. Bacteria in your mouth also use sugar and make acids that can damage your teeth.",
    "good": "Sugar gives your body usable energy. Your brain and muscles can use glucose as fuel, including during long exercise. It also makes a drink taste sweet. You can get carbohydrate from ordinary foods, so a sugary drink is not needed for everyday energy or hydration.",
    "bad": "Frequent sugary drinks increase your chance of tooth decay. They also add calories quickly, which can lead to weight gain when you regularly take in more energy than you use. Sugar in juice still counts as free sugar, even when no extra sugar has been added.",
    "evidence": "How much you drink and how often matter. The table shows grams; the animated layer does not measure them.",
    "sources": [
      {
        "name": "NHS · sugar and health",
        "url": "https://www.nhs.uk/live-well/eat-well/food-types/how-does-sugar-in-our-diet-affect-our-health/"
      },
      {
        "name": "WHO · healthy diet and free sugars",
        "url": "https://www.who.int/news-room/fact-sheets/detail/healthy-diet"
      }
    ],
    "areas": [
      "Energy",
      "Teeth",
      "Body weight"
    ],
    // Same ingrediensartikkel på nynorsk
    "nn": {
      "name": "Sukrose og glukose",
      "category": "Karbohydrat",
      "symbol": "Søtsmak + energi",
      "areas": [
        "Energi",
        "Tennene",
        "Kroppsvekt"
      ],
      "what": "Karbohydrat som gir drikka søtsmak og kaloriar.",
      "body": "Kroppen bryt ned sukkerartar og bruker dei som drivstoff. Bakteriar i munnen bruker òg sukker og lagar syrer som kan skade tennene.",
      "good": "Sukker gir kroppen energi han kan bruke. Hjernen og musklane kan bruke glukose som drivstoff, mellom anna under langvarig trening. Sukker gir òg drikka søtsmak. Du kan få karbohydrat frå vanleg mat, så sukkerhaldig drikke er ikkje nødvendig for dagleg energi eller væsketilførsel.",
      "bad": "Sukkerhaldig drikke ofte aukar faren for hol i tennene. Drikka gir òg raskt mange kaloriar, noko som kan føre til vektauke når du jamleg får i deg meir energi enn du bruker. Sukker i juice tel framleis som fritt sukker, sjølv når det ikkje er tilsett ekstra sukker.",
      "evidence": "Både kor mykje og kor ofte du drikk, har noko å seie. Tabellen viser gram; laget i animasjonen måler ikkje mengda.",
      "sources": [
        {
          "name": "NHS · sukker og helse",
          "url": "https://www.nhs.uk/live-well/eat-well/food-types/how-does-sugar-in-our-diet-affect-our-health/"
        },
        {
          "name": "WHO · sunt kosthald og frie sukkerartar",
          "url": "https://www.who.int/news-room/fact-sheets/detail/healthy-diet"
        }
      ],
      "reviewed": "30. oktober 2026"
    }
  },
  // ── STOFF 2.04: Niacin · vitamin B3 [b3] ──
  {
    "id": "b3",
    "name": "Niacin · vitamin B3",
    "category": "Vitamin",
    "symbol": "B3",
    // Engelsk fagtekst: kva stoffet er, kroppen, fordelar og ulemper
    "what": "Vitamin B3, usually called niacin on the label.",
    "body": "Your cells use B3 to help turn food into usable energy. It supports normal skin and nerve function. It is not a stimulant.",
    "good": "Getting enough B3 helps cells throughout your body do their normal work. You can get it from foods as well as some fortified drinks. If you already have enough, adding more has not been shown to give you an instant boost in alertness or physical energy.",
    "bad": "Large doses of one form, nicotinic acid, can make your skin hot, red and itchy. Much higher doses can harm the liver. Niacinamide is a different form with different risks. These high-dose effects should not be confused with the smaller amount normally used in a drink.",
    "evidence": "Both the amount and the form matter. The label may say niacinamide or nicotinamide rather than nicotinic acid.",
    "sources": [
      {
        "name": "NIH ODS · niacin",
        "url": "https://ods.od.nih.gov/factsheets/Niacin-Consumer/"
      },
      {
        "name": "NIH ODS · niacin",
        "url": "https://ods.od.nih.gov/factsheets/Niacin-Consumer/"
      }
    ],
    "areas": [
      "Cells",
      "Skin",
      "Nerves"
    ],
    // Same ingrediensartikkel på nynorsk
    "nn": {
      "name": "Niacin · vitamin B3",
      "category": "Vitamin",
      "symbol": "B3",
      "areas": [
        "Celler",
        "Huda",
        "Nervane"
      ],
      "what": "Vitamin B3, som vanlegvis står som niacin på etiketten.",
      "body": "Cellene bruker B3 til å omdanne mat til energi dei kan bruke. Vitaminet støttar normal funksjon i hud og nervar. Det er ikkje eit stimulerande stoff.",
      "good": "Nok B3 hjelper celler i heile kroppen med å gjere dei vanlege oppgåvene sine. Du kan få vitaminet frå mat og frå enkelte drikkar med tilsette næringsstoff. Har du allereie nok, er det ikkje vist at meir gir deg ei rask betring i kor vaken du er, eller i den fysiske energien din.",
      "bad": "Store dosar av éi form, nikotinsyre, kan gjere huda varm, raud og kløande. Mykje høgare dosar kan skade levra. Niacinamid er ei anna form med andre risikoforhold. Desse verknadene ved høge dosar må ikkje forvekslast med den mindre mengda som vanlegvis blir brukt i ein drikk.",
      "evidence": "Både mengda og forma har noko å seie. På etiketten kan det stå niacinamid eller nikotinamid i staden for nikotinsyre.",
      "sources": [
        {
          "name": "NIH ODS · niacin",
          "url": "https://ods.od.nih.gov/factsheets/Niacin-Consumer/"
        },
        {
          "name": "NIH ODS · niacin",
          "url": "https://ods.od.nih.gov/factsheets/Niacin-Consumer/"
        }
      ],
      "reviewed": "30. oktober 2026"
    }
  },
  // ── STOFF 2.05: Pantothenic acid · B5 [b5] ──
  {
    "id": "b5",
    "name": "Pantothenic acid · B5",
    "category": "Vitamin",
    "symbol": "B5",
    // Engelsk fagtekst: kva stoffet er, kroppen, fordelar og ulemper
    "what": "Vitamin B5, also called pantothenic acid.",
    "body": "Your cells use B5 when making and breaking down fats and releasing energy from food. It does not directly wake up your brain.",
    "good": "B5 helps your body process the food you eat and use its energy. It is found in many ordinary foods, so a varied diet usually supplies it. Added B5 can contribute to your intake, but its presence does not mean that an energy drink produces extra energy beyond its calories.",
    "bad": "Very large supplement doses can cause diarrhoea and stomach upset. That is different from a normal food serving. Taking extra B5 when you already get enough has no established stimulant effect, and it does not prevent sugar, caffeine or acids in the same drink from having their own effects.",
    "evidence": "The normal job of B5 does not show that more improves performance.",
    "sources": [
      {
        "name": "NIH ODS · pantothenic acid",
        "url": "https://ods.od.nih.gov/factsheets/PantothenicAcid-Consumer/"
      },
      {
        "name": "NIH ODS · pantothenic acid",
        "url": "https://ods.od.nih.gov/factsheets/PantothenicAcid-Consumer/"
      },
      {
        "name": "NHS · vitamin B5",
        "url": "https://www.nhs.uk/conditions/vitamins-and-minerals/vitamin-b/"
      }
    ],
    "areas": [
      "Cells",
      "Energy from food"
    ],
    // Same ingrediensartikkel på nynorsk
    "nn": {
      "name": "Pantotensyre · B5",
      "category": "Vitamin",
      "symbol": "B5",
      "areas": [
        "Celler",
        "Energi frå mat"
      ],
      "what": "Vitamin B5, òg kalla pantotensyre.",
      "body": "Cellene bruker B5 når dei lagar og bryt ned feitt og frigjer energi frå mat. Vitaminet gjer ikkje hjernen direkte meir vaken.",
      "good": "B5 hjelper kroppen med å omsetje maten du et, og bruke energien frå han. Vitaminet finst i mange vanlege matvarer, så eit variert kosthald gir vanlegvis nok. Tilsett B5 kan bidra til inntaket ditt, men at det finst i ein energidrikk, betyr ikkje at drikka gir ekstra energi utover kaloriane ho inneheld.",
      "bad": "Svært store dosar frå kosttilskot kan gi diaré og uroleg mage. Det er noko anna enn ein vanleg porsjon mat. Ekstra B5 når du allereie får nok, har ingen dokumentert stimulerande verknad. Det hindrar heller ikkje sukker, koffein eller syrer i den same drikka i å ha sine eigne verknader.",
      "evidence": "Den normale oppgåva til B5 viser ikkje at meir betrar prestasjonsevna.",
      "sources": [
        {
          "name": "NIH ODS · pantotensyre",
          "url": "https://ods.od.nih.gov/factsheets/PantothenicAcid-Consumer/"
        },
        {
          "name": "NIH ODS · pantotensyre",
          "url": "https://ods.od.nih.gov/factsheets/PantothenicAcid-Consumer/"
        },
        {
          "name": "NHS · vitamin B5",
          "url": "https://www.nhs.uk/conditions/vitamins-and-minerals/vitamin-b/"
        }
      ],
      "reviewed": "30. oktober 2026"
    }
  },
  // ── STOFF 2.06: Pyridoxine · vitamin B6 [b6] ──
  {
    "id": "b6",
    "name": "Pyridoxine · vitamin B6",
    "category": "Vitamin",
    "symbol": "B6",
    // Engelsk fagtekst: kva stoffet er, kroppen, fordelar og ulemper
    "what": "Vitamin B6, sometimes listed as pyridoxine hydrochloride.",
    "body": "B6 helps your body use protein and make haemoglobin, the part of red blood cells that carries oxygen. It also helps nerves work normally.",
    "good": "Getting enough B6 supports normal blood and nerve function. It helps your body use nutrients from food, rather than adding calories itself. A fortified drink can supply some B6, but extra B6 is not a quick way to feel awake or replace sleep when you are already getting enough.",
    "bad": "Taking too much B6 for a long time can damage nerves, causing tingling, numbness or trouble with balance. This is mainly a concern with repeated high supplemental intake. Amounts from supplements and fortified products add together, so one drink should not be judged separately from everything else you take.",
    "evidence": "The risk depends on dose and time. This does not mean one normal serving causes nerve damage.",
    "sources": [
      {
        "name": "NIH ODS · vitamin B6",
        "url": "https://ods.od.nih.gov/factsheets/VitaminB6-Consumer/"
      },
      {
        "name": "NIH ODS · vitamin B6",
        "url": "https://ods.od.nih.gov/factsheets/VitaminB6-Consumer/"
      },
      {
        "name": "EFSA · B6 upper intake assessment",
        "url": "https://efsa.onlinelibrary.wiley.com/doi/10.2903/j.efsa.2023.8006"
      }
    ],
    "areas": [
      "Nerves",
      "Blood"
    ],
    // Same ingrediensartikkel på nynorsk
    "nn": {
      "name": "Pyridoksin · vitamin B6",
      "category": "Vitamin",
      "symbol": "B6",
      "areas": [
        "Nervane",
        "Blodet"
      ],
      "what": "Vitamin B6, som nokre gonger står som pyridoksinhydroklorid.",
      "body": "B6 hjelper kroppen med å bruke protein og lage hemoglobin, den delen av dei raude blodcellene som fraktar oksygen. Vitaminet hjelper òg nervane med å fungere normalt.",
      "good": "Nok B6 støttar normal funksjon i blodet og nervane. Det hjelper kroppen med å bruke næringsstoff frå mat og tilfører ikkje kaloriar i seg sjølv. Ein drikk med tilsette næringsstoff kan gi noko B6, men ekstra B6 er ikkje ein rask måte å bli vaken på eller erstatte søvn når du allereie får nok.",
      "bad": "For mykje B6 over lang tid kan skade nervar og gi prikking, nedsett kjensle eller vanskar med balansen. Dette er særleg aktuelt ved gjenteke høgt inntak frå kosttilskot. Mengdene frå kosttilskot og produkt med tilsette næringsstoff blir lagde saman, så éin drikk bør ikkje vurderast isolert frå alt anna du får i deg.",
      "evidence": "Risikoen kjem an på dose og tid. Dette betyr ikkje at éin vanleg porsjon gir nerveskade.",
      "sources": [
        {
          "name": "NIH ODS · vitamin B6",
          "url": "https://ods.od.nih.gov/factsheets/VitaminB6-Consumer/"
        },
        {
          "name": "NIH ODS · vitamin B6",
          "url": "https://ods.od.nih.gov/factsheets/VitaminB6-Consumer/"
        },
        {
          "name": "EFSA · vurdering av øvre inntak av B6",
          "url": "https://efsa.onlinelibrary.wiley.com/doi/10.2903/j.efsa.2023.8006"
        }
      ],
      "reviewed": "30. oktober 2026"
    }
  },
  // ── STOFF 2.07: Cobalamin · vitamin B12 [b12] ──
  {
    "id": "b12",
    "name": "Cobalamin · vitamin B12",
    "category": "Vitamin",
    "symbol": "B12",
    // Engelsk fagtekst: kva stoffet er, kroppen, fordelar og ulemper
    "what": "Vitamin B12, sometimes listed as cyanocobalamin.",
    "body": "B12 helps keep nerve cells healthy and helps make red blood cells. Too little can cause tiredness and nerve problems.",
    "good": "B12 matters for healthy blood and nerves. Correcting a true shortage can help problems caused by that shortage. Foods, fortified products and supplements can supply it, depending on a person’s diet and needs. An energy drink is only one possible source and is not a treatment for unexplained tiredness.",
    "bad": "Extra B12 does not reliably boost energy when you already have enough. Tiredness can have many causes, and caffeine can hide how sleepy you feel without fixing them. The vitamin also does not remove the sugar, caffeine or acidity in a drink, so the whole recipe still matters.",
    "evidence": "B12 deficiency and an extra “energy boost” are different issues. The caffeine effect is explained in its own guide.",
    "sources": [
      {
        "name": "NIH ODS · vitamin B12",
        "url": "https://ods.od.nih.gov/factsheets/VitaminB12-Consumer/"
      },
      {
        "name": "NIH ODS · vitamin B12",
        "url": "https://ods.od.nih.gov/factsheets/VitaminB12-Consumer/"
      }
    ],
    "areas": [
      "Nerves",
      "Red blood cells"
    ],
    // Same ingrediensartikkel på nynorsk
    "nn": {
      "name": "Kobalamin · vitamin B12",
      "category": "Vitamin",
      "symbol": "B12",
      "areas": [
        "Nervane",
        "Raude blodceller"
      ],
      "what": "Vitamin B12, som nokre gonger står som cyanokobalamin.",
      "body": "B12 hjelper med å halde nervecellene friske og med å lage raude blodceller. For lite kan gi trøyttleik og nerveproblem.",
      "good": "B12 er viktig for friskt blod og friske nervar. Å rette opp ein reell mangel kan hjelpe mot problem som mangelen har ført til. Mat, produkt med tilsette næringsstoff og kosttilskot kan gi B12, avhengig av kosthaldet og behova til personen. Ein energidrikk er berre éi mogleg kjelde og er ikkje behandling for uforklarleg trøyttleik.",
      "bad": "Ekstra B12 gir ikkje påliteleg meir energi når du allereie har nok. Trøyttleik kan ha mange årsaker, og koffein kan skjule kor søvnig du er utan å rette opp årsakene. Vitaminet fjernar heller ikkje sukkeret, koffeinet eller surleiken i ein drikk, så heile samansetjinga er framleis viktig.",
      "evidence": "B12-mangel og ein ekstra «energiløft» er ulike spørsmål. Verknaden av koffein blir forklart i ei eiga rettleiing.",
      "sources": [
        {
          "name": "NIH ODS · vitamin B12",
          "url": "https://ods.od.nih.gov/factsheets/VitaminB12-Consumer/"
        },
        {
          "name": "NIH ODS · vitamin B12",
          "url": "https://ods.od.nih.gov/factsheets/VitaminB12-Consumer/"
        }
      ],
      "reviewed": "30. oktober 2026"
    }
  },
  // ── STOFF 2.08: Sucralose & acesulfame K [sweeteners] ──
  {
    "id": "sweeteners",
    "name": "Sucralose & acesulfame K",
    "category": "Sweetener",
    "symbol": "E955 · E950",
    // Engelsk fagtekst: kva stoffet er, kroppen, fordelar og ulemper
    "what": "Sucralose and acesulfame K: sweeteners used instead of some or all sugar.",
    "body": "They make your mouth taste sweetness without the same sugar load. They do not work like caffeine or supply a vitamin boost.",
    "good": "Replacing a sugary drink with a lower-sugar version can reduce the sugar and calories you drink. These sweeteners help manufacturers keep a sweet taste while using less sugar. That benefit depends on what you replace, and it does not mean that simply adding a sugar-free drink improves your diet.",
    "bad": "Sugar-free does not mean caffeine-free or acid-free. You can still get a racing heart or poor sleep from caffeine, and acids can still affect teeth. A sweetener is also not a proven long-term weight-loss treatment. Check the whole drink, rather than using “sugar-free” as the only health clue.",
    "evidence": "The individual sweeteners have separate guides. Safety checks and evidence about long-term weight change answer different questions.",
    "sources": [
      {
        "name": "EFSA · sweetener assessments",
        "url": "https://www.efsa.europa.eu/en/topics/topic/sweeteners"
      },
      {
        "name": "NHS · sweeteners and PKU",
        "url": "https://www.nhs.uk/live-well/eat-well/food-types/are-sweeteners-safe/"
      }
    ],
    "areas": [
      "Sweet taste",
      "Lower sugar"
    ],
    // Same ingrediensartikkel på nynorsk
    "nn": {
      "name": "Sukralose og acesulfam K",
      "category": "Søtstoff",
      "symbol": "E955 · E950",
      "areas": [
        "Søtsmak",
        "Mindre sukker"
      ],
      "what": "Sukralose og acesulfam K: søtstoff som blir brukte i staden for noko eller alt sukkeret.",
      "body": "Dei gir søtsmak i munnen utan den same sukkermengda. Dei verkar ikkje som koffein og gir ikkje ei vitaminoppkvikking.",
      "good": "Å byte ut ein sukkerhaldig drikk med ein variant med mindre sukker kan redusere sukkeret og kaloriane du drikk. Desse søtstoffa hjelper produsentar med å halde på søtsmaken medan dei bruker mindre sukker. Fordelen kjem an på kva du byter ut; det betyr ikkje at kosthaldet blir betre berre ved å leggje til ein sukkerfri drikk.",
      "bad": "Sukkerfri betyr ikkje utan koffein eller syrer. Koffein kan framleis gi rask puls eller dårleg søvn, og syrer kan framleis påverke tennene. Eit søtstoff er heller ikkje ei dokumentert behandling for varig vektnedgang. Sjå på heile drikka, framfor å bruke «sukkerfri» som det einaste teiknet på korleis ho påverkar helsa.",
      "evidence": "Dei enkelte søtstoffa har eigne rettleiingar. Tryggleikskontrollar og dokumentasjon om vektendring over lang tid svarer på ulike spørsmål.",
      "sources": [
        {
          "name": "EFSA · vurderingar av søtstoff",
          "url": "https://www.efsa.europa.eu/en/topics/topic/sweeteners"
        },
        {
          "name": "NHS · søtstoff og PKU",
          "url": "https://www.nhs.uk/live-well/eat-well/food-types/are-sweeteners-safe/"
        }
      ],
      "reviewed": "30. oktober 2026"
    }
  },
  // ── STOFF 2.09: Citric acid & acidity regulators [acidity] ──
  {
    "id": "acidity",
    "name": "Citric acid & acidity regulators",
    "category": "Food additive",
    "symbol": "E330 · citrate · carbonates",
    // Engelsk fagtekst: kva stoffet er, kroppen, fordelar og ulemper
    "what": "Acids and related salts that control how sour a drink tastes.",
    "body": "Acid can wear away the hard outer surface of teeth. Acidic drinks can also trigger heartburn in some people. Regulating the recipe does not mean the drink is acid-free.",
    "good": "These ingredients balance sweetness and give drinks a sharp, fresh taste. They help the maker keep the recipe consistent. That is a useful job in the drink, rather than a special benefit for your brain or muscles. A citrate or magnesium salt on the label does not automatically mean a large mineral dose.",
    "bad": "Frequent contact with acidic drinks can wear down tooth enamel, the hard protective surface of teeth. Some people also notice heartburn, a burning feeling caused by stomach contents coming back up. Sugar-free drinks can still be acidic, so removing sugar does not remove every concern for teeth or stomach comfort.",
    "evidence": "The recipe, acidity and drinking frequency matter. The ingredient name alone cannot tell us the drink’s exact effect on teeth.",
    "sources": [
      {
        "name": "American Dental Association · acids and teeth",
        "url": "https://www.mouthhealthy.org/all-topics-a-z/dietary-acids-and-your-teeth"
      },
      {
        "name": "NIDDK · reflux and dietary triggers",
        "url": "https://www.niddk.nih.gov/health-information/digestive-diseases/acid-reflux-ger-gerd-adults/eating-diet-nutrition"
      },
      {
        "name": "European Commission · additives",
        "url": "https://food.ec.europa.eu/food-safety/food-improvement-agents/additives_en"
      }
    ],
    "areas": [
      "Teeth",
      "Stomach",
      "Sour taste"
    ],
    // Same ingrediensartikkel på nynorsk
    "nn": {
      "name": "Sitronsyre og surheitsregulerande middel",
      "category": "Tilsetjingsstoff",
      "symbol": "E330 · sitrat · karbonat",
      "areas": [
        "Tennene",
        "Magen",
        "Sur smak"
      ],
      "what": "Syrer og tilhøyrande salt som styrer kor surt drikka smakar.",
      "body": "Syre kan slite vekk den harde yttersida på tennene. Syrehaldig drikke kan òg utløyse halsbrann hos nokre. At surleiken blir regulert i oppskrifta, betyr ikkje at drikka er utan syre.",
      "good": "Desse ingrediensane balanserer søtsmaken og gir drikkar ein skarp, frisk smak. Dei hjelper produsenten med å halde samansetjinga jamn. Det er ei nyttig oppgåve i drikka, framfor ein særleg fordel for hjernen eller musklane dine. Eit sitrat- eller magnesiumsalt på etiketten betyr ikkje automatisk ein stor mineraldose.",
      "bad": "Hyppig kontakt med syrehaldig drikke kan slite ned tannemaljen, den harde overflata som vernar tennene. Nokre merkar òg halsbrann, ei brennande kjensle som kjem av at mageinnhald strøymer opp att. Sukkerfri drikke kan framleis vere sur, så å fjerne sukker fjernar ikkje alle omsyn til tenner eller korleis magen kjennest.",
      "evidence": "Samansetjinga, surleiken og kor ofte du drikk, har noko å seie. Ingrediensnamnet åleine kan ikkje fortelje nøyaktig korleis drikka påverkar tennene.",
      "sources": [
        {
          "name": "American Dental Association · syrer og tenner",
          "url": "https://www.mouthhealthy.org/all-topics-a-z/dietary-acids-and-your-teeth"
        },
        {
          "name": "NIDDK · refluks og mat som kan utløyse plager",
          "url": "https://www.niddk.nih.gov/health-information/digestive-diseases/acid-reflux-ger-gerd-adults/eating-diet-nutrition"
        },
        {
          "name": "Europakommisjonen · tilsetjingsstoff",
          "url": "https://food.ec.europa.eu/food-safety/food-improvement-agents/additives_en"
        }
      ],
      "reviewed": "30. oktober 2026"
    }
  },
  // ── STOFF 2.10: Panax ginseng [ginseng] ──
  {
    "id": "ginseng",
    "name": "Panax ginseng",
    "category": "Botanical",
    "symbol": "Ginsenosides",
    // Engelsk fagtekst: kva stoffet er, kroppen, fordelar og ulemper
    "what": "An extract from Asian ginseng root.",
    "body": "Some studies test ginseng for tiredness. It can also make sleeping harder and interact with medicines. An energy drink may use a very different amount from a study.",
    "good": "Some research suggests ginseng may help general tiredness a little, but results are mixed. The type of extract and dose matter. This does not prove that the unknown amount in a can improves your brain, heart or exercise performance, and it should not be counted as a reliable energy boost.",
    "bad": "Trouble sleeping is a known side effect of ginseng. It can also change how some medicines work. “Plant extract” does not automatically mean gentle or safe for everyone. These concerns are clearer for supplements; the unknown amount in a drink makes its separate effect difficult to judge.",
    "evidence": "The Monster entry uses an older retailer label. A current can is needed to confirm that exact recipe.",
    "sources": [
      {
        "name": "NIH NCCIH · Asian ginseng",
        "url": "https://www.nccih.nih.gov/health/asian-ginseng"
      }
    ],
    "areas": [
      "Fatigue research",
      "Sleep",
      "Medicine interactions"
    ],
    // Same ingrediensartikkel på nynorsk
    "nn": {
      "name": "Panax ginseng",
      "category": "Planteekstrakt",
      "symbol": "Ginsenosid",
      "areas": [
        "Forsking på trøyttleik",
        "Søvn",
        "Samverknad med legemiddel"
      ],
      "what": "Eit ekstrakt frå asiatisk ginsengrot.",
      "body": "Nokre studiar undersøkjer ginseng mot trøyttleik. Det kan òg gjere det vanskelegare å sove og påverke legemiddel. Ein energidrikk kan innehalde ei heilt anna mengd enn den som blir brukt i ein studie.",
      "good": "Noko forsking tyder på at ginseng kan hjelpe litt mot generell trøyttleik, men resultata spriker. Typen ekstrakt og dosen har noko å seie. Dette viser ikkje at den ukjende mengda i ein boks betrar hjernen, hjartet eller prestasjonsevna under trening, og ho bør ikkje reknast som ei påliteleg kjelde til ekstra overskot.",
      "bad": "Søvnvanskar er ein kjend biverknad av ginseng. Det kan òg endre korleis enkelte legemiddel verkar. «Planteekstrakt» betyr ikkje automatisk mildt eller trygt for alle. Desse omsyna er klarare for kosttilskot; den ukjende mengda i ein drikk gjer det vanskeleg å vurdere den eigne verknaden av ekstraktet.",
      "evidence": "Monster-oppføringa bruker ein eldre etikett frå ein forhandlar. Ein ny boks må til for å stadfeste akkurat den oppskrifta.",
      "sources": [
        {
          "name": "NIH NCCIH · asiatisk ginseng",
          "url": "https://www.nccih.nih.gov/health/asian-ginseng"
        }
      ],
      "reviewed": "30. oktober 2026"
    }
  },
  // ── STOFF 2.11: Inositol [inositol] ──
  {
    "id": "inositol",
    "name": "Inositol",
    "category": "Cell function",
    "symbol": "C₆H₁₂O₆",
    // Engelsk fagtekst: kva stoffet er, kroppen, fordelar og ulemper
    "what": "A substance your body makes and uses inside cells.",
    "body": "Inositol helps cells pass messages inside them. It is sometimes called B8, but it is not an essential B vitamin.",
    "good": "Your cells already use inositol in normal signalling and cell membranes. That explains why it is of scientific interest. It does not show that the added amount in an energy drink helps your organs work better, makes you more alert, or provides a useful extra boost when you are healthy.",
    "bad": "There is no clear proof here that the amount in a drink improves performance. Studies using much larger supplement doses cannot answer that question. Inositol also does not protect you from the sleep, anxiety or heart-racing effects of caffeine in the same drink, so drinking more is not justified by its presence.",
    "evidence": "A normal role inside cells is different from a proven benefit of taking extra.",
    "sources": [
      {
        "name": "BfR · energy-drink constituents",
        "url": "https://www.bfr.bund.de/en/release/frequently-asked-questions-on-caffeine-and-foods-containing-caffeine-including-energy-drinks/"
      }
    ],
    "areas": [
      "Cell signals"
    ],
    // Same ingrediensartikkel på nynorsk
    "nn": {
      "name": "Inositol",
      "category": "Cellefunksjon",
      "symbol": "C₆H₁₂O₆",
      "areas": [
        "Signal inne i cellene"
      ],
      "what": "Eit stoff kroppen lagar sjølv og bruker inne i cellene.",
      "body": "Inositol hjelper med å sende meldingar inne i cellene. Det blir nokre gonger kalla B8, men er ikkje eit livsnødvendig B-vitamin.",
      "good": "Cellene dine bruker allereie inositol i normal signaloverføring og i cellemembranar. Det forklarer kvifor stoffet er interessant for forskarar. Det viser ikkje at den tilsette mengda i ein energidrikk får organa til å fungere betre, gjer deg meir vaken eller gir eit nyttig ekstra overskot når du er frisk.",
      "bad": "Det finst ikkje tydeleg dokumentasjon her for at mengda i ein drikk betrar prestasjonsevna. Studiar med mykje større dosar frå kosttilskot kan ikkje svare på det spørsmålet. Inositol vernar deg heller ikkje mot koffein i den same drikka som påverkar søvn, gir uro eller får hjartet til å slå raskt. At stoffet er til stades, er derfor ikkje ein grunn til å drikke meir.",
      "evidence": "Ei normal rolle inne i cellene er noko anna enn ein dokumentert fordel av å få i seg ekstra.",
      "sources": [
        {
          "name": "BfR · innhaldsstoff i energidrikkar",
          "url": "https://www.bfr.bund.de/en/release/frequently-asked-questions-on-caffeine-and-foods-containing-caffeine-including-energy-drinks/"
        }
      ],
      "reviewed": "30. oktober 2026"
    }
  },
  // ── STOFF 2.12: Sorbic & benzoic acids [preservatives] ──
  {
    "id": "preservatives",
    "name": "Sorbic & benzoic acids",
    "category": "Food additive",
    "symbol": "E200 · E210",
    // Engelsk fagtekst: kva stoffet er, kroppen, fordelar og ulemper
    "what": "Ingredients that help stop a drink spoiling during storage.",
    "body": "They work in the can or bottle by limiting unwanted microbes. They are not added to wake up your brain or strengthen an organ.",
    "good": "Preservatives help a drink stay usable during its intended shelf life. They can reduce spoilage when the recipe is made and stored correctly. That is a practical benefit for the product, even though it is not extra nutrition or a substance your body needs more of to perform well.",
    "bad": "The exact preservative and its amount matter when checking safety. You cannot judge a whole group from one chemical name, or assume that unlimited amounts are safe. The label does not give every concentration, so this website cannot calculate your personal intake from the coloured band in the glass.",
    "evidence": "Specific sodium benzoate and potassium sorbate guides explain those ingredients separately. Only the preservatives listed for the selected drink are shown.",
    "sources": [
      {
        "name": "European Commission · additives",
        "url": "https://food.ec.europa.eu/food-safety/food-improvement-agents/additives_en"
      }
    ],
    "areas": [
      "Shelf life",
      "No stimulant effect"
    ],
    // Same ingrediensartikkel på nynorsk
    "nn": {
      "name": "Sorbinsyre og benzosyre",
      "category": "Tilsetjingsstoff",
      "symbol": "E200 · E210",
      "areas": [
        "Haldbarheit",
        "Ingen stimulerande verknad"
      ],
      "what": "Ingrediensar som hjelper med å hindre at drikka blir øydelagd under lagring.",
      "body": "Dei verkar i boksen eller flaska ved å avgrense uønskte mikroorganismar. Dei blir ikkje tilsette for å gjere hjernen vaken eller styrkje eit organ.",
      "good": "Konserveringsmiddel hjelper drikka med å halde seg brukande i den tiltenkte haldbarheitstida. Dei kan redusere øydelegging når drikka blir laga og lagra rett. Det er ein praktisk fordel for produktet, sjølv om det ikkje er ekstra næring eller eit stoff kroppen treng meir av for å prestere godt.",
      "bad": "Det konkrete konserveringsmiddelet og mengda har noko å seie når ein vurderer tryggleik. Du kan ikkje vurdere ei heil gruppe ut frå eitt kjemisk namn eller gå ut frå at uavgrensa mengder er trygge. Etiketten oppgir ikkje kvar konsentrasjon, så denne nettsida kan ikkje rekne ut ditt personlege inntak frå det farga bandet i glaset.",
      "evidence": "Eigne rettleiingar om natriumbenzoat og kaliumsorbat forklarer desse ingrediensane kvar for seg. Berre konserveringsmidla som er oppgitte for den valde drikka, blir viste.",
      "sources": [
        {
          "name": "Europakommisjonen · tilsetjingsstoff",
          "url": "https://food.ec.europa.eu/food-safety/food-improvement-agents/additives_en"
        }
      ],
      "reviewed": "30. oktober 2026"
    }
  },
  // ── STOFF 2.13: Water [water] ──
  {
    "id": "water",
    "name": "Water",
    "category": "Foundation",
    "symbol": "H₂O",
    // Engelsk fagtekst: kva stoffet er, kroppen, fordelar og ulemper
    "what": "The main fluid in every drink in the lab.",
    "body": "Water helps blood carry substances around your body, helps your kidneys remove waste, and lets your body cool itself through sweat.",
    "good": "Drinking enough fluid helps your body work normally. Water does this without adding sugar or caffeine. Coffee, tea and other drinks also contribute fluid, though their other ingredients change what else you are taking in. Plain water gives you fluid without needing a complicated added blend.",
    "bad": "Water is usually not the main concern in these recipes. A drink can contain plenty of water and still deliver a lot of sugar, caffeine or acid. The clear part of the animation does not make those other ingredients less important, and its size does not show their real concentration.",
    "evidence": "Fluid needs vary with activity and conditions. No special “detox” effect is claimed.",
    "sources": [
      {
        "name": "Public health guidance · fluids and hydration",
        "url": "https://www.nhs.uk/live-well/eat-well/food-guidelines-and-food-labels/water-drinks-nutrition/"
      }
    ],
    "areas": [
      "Blood",
      "Kidneys",
      "Body temperature"
    ],
    // Same ingrediensartikkel på nynorsk
    "nn": {
      "name": "Vatn",
      "category": "Grunnlag",
      "symbol": "H₂O",
      "areas": [
        "Blodet",
        "Nyrene",
        "Kroppstemperatur"
      ],
      "what": "Den viktigaste væska i alle drikkane i laboratoriet.",
      "body": "Vatn hjelper blodet med å frakte stoff rundt i kroppen, hjelper nyrene med å fjerne avfallsstoff og gjer at kroppen kan kjøle seg ned ved å sveitte.",
      "good": "Nok væske hjelper kroppen med å fungere normalt. Vatn gjer dette utan å tilføre sukker eller koffein. Kaffi, te og andre drikkar bidreg òg med væske, men dei andre ingrediensane endrar kva du elles får i deg. Reint vatn gir deg væske utan at du treng ei komplisert blanding av tilsette stoff.",
      "bad": "Vatn er vanlegvis ikkje det ein først må vere merksam på i desse oppskriftene. Ein drikk kan innehalde mykje vatn og likevel gi mykje sukker, koffein eller syre. Den klare delen av animasjonen gjer ikkje desse andre ingrediensane mindre viktige, og storleiken viser ikkje den verkelege konsentrasjonen deira.",
      "evidence": "Væskebehovet varierer med aktivitet og tilhøve. Det blir ikkje hevda at vatn har nokon særleg avgiftingsverknad.",
      "sources": [
        {
          "name": "Offentlege helseråd · væske og væskebalanse",
          "url": "https://www.nhs.uk/live-well/eat-well/food-guidelines-and-food-labels/water-drinks-nutrition/"
        }
      ],
      "reviewed": "30. oktober 2026"
    }
  },
  // ── STOFF 2.14: Carbon dioxide [carbonation] ──
  {
    "id": "carbonation",
    "name": "Carbon dioxide",
    "category": "Gas & texture",
    "symbol": "CO₂",
    // Engelsk fagtekst: kva stoffet er, kroppen, fordelar og ulemper
    "what": "Carbon dioxide gas dissolved in the drink.",
    "body": "The gas forms bubbles as it leaves the liquid. It can make you burp or feel bloated. It does not stimulate your brain.",
    "good": "Carbonation gives a drink its fizz and changes how it feels in your mouth. Plain sparkling water can provide fluid without adding sugar or caffeine. The bubbles are a taste and texture feature; they are not a source of calories or a separate energy ingredient for your body.",
    "bad": "Some people get burping, bloating or discomfort from fizzy drinks. Fizzy drinks may also worsen reflux symptoms for some people. Whether the drink contains sugar, caffeine or added acids is a separate issue: carbonation does not remove their effects or make every fizzy drink the same.",
    "evidence": "Plain sparkling water and a sugary acidic soda have different recipes and should not be judged as one product.",
    "sources": [
      {
        "name": "NIDDK · drinks and reflux context",
        "url": "https://www.niddk.nih.gov/health-information/digestive-diseases/acid-reflux-ger-gerd-adults/eating-diet-nutrition"
      }
    ],
    "areas": [
      "Stomach",
      "Fizz"
    ],
    // Same ingrediensartikkel på nynorsk
    "nn": {
      "name": "Karbondioksid",
      "category": "Gass og konsistens",
      "symbol": "CO₂",
      "areas": [
        "Magen",
        "Bobler"
      ],
      "what": "Karbondioksidgass som er løyst opp i drikka.",
      "body": "Gassen lagar bobler når han forlèt væska. Han kan få deg til å rape eller kjenne deg oppblåst. Han stimulerer ikkje hjernen.",
      "good": "Kullsyre gir drikka bobler og endrar korleis ho kjennest i munnen. Reint vatn med kullsyre kan gi væske utan å tilføre sukker eller koffein. Boblene er ein del av smaken og konsistensen; dei gir ikkje kaloriar og er ikkje ein eigen energiingrediens for kroppen.",
      "bad": "Nokre får raping, oppblåst mage eller ubehag av drikke med bobler. Slik drikke kan òg forverre refluksplager hos enkelte. Om drikka inneheld sukker, koffein eller tilsette syrer, er eit anna spørsmål: kullsyra fjernar ikkje verknadene deira og gjer ikkje alle drikkar med bobler like.",
      "evidence": "Reint vatn med kullsyre og sukkerhaldig, sur brus har ulike oppskrifter og bør ikkje vurderast som eitt og same produkt.",
      "sources": [
        {
          "name": "NIDDK · drikkar og refluks",
          "url": "https://www.niddk.nih.gov/health-information/digestive-diseases/acid-reflux-ger-gerd-adults/eating-diet-nutrition"
        }
      ],
      "reviewed": "30. oktober 2026"
    }
  },
  // ── STOFF 2.15: Riboflavin · vitamin B2 [b2] ──
  {
    "id": "b2",
    "name": "Riboflavin · vitamin B2",
    "category": "Vitamin",
    "symbol": "B2",
    // Engelsk fagtekst: kva stoffet er, kroppen, fordelar og ulemper
    "what": "Vitamin B2, also called riboflavin.",
    "body": "Your body uses B2 to release energy from food. It also helps keep your eyes, skin and nerves working normally.",
    "good": "Getting enough B2 helps your body use the food you eat. It supports normal eyes, skin and nerves. Food or fortified products can supply it. This is an everyday nutritional job, so extra B2 should not be expected to wake you up like caffeine does.",
    "bad": "More B2 does not mean more energy when you already get enough. There is limited information about taking very large doses over time. A drink with B2 can still contain lots of sugar or caffeine, so the vitamin does not cancel the effects of the rest of the drink.",
    "evidence": "A vitamin helps your body use food energy; it does not contain that energy itself.",
    "sources": [
      {
        "name": "NIH ODS · riboflavin",
        "url": "https://ods.od.nih.gov/factsheets/Riboflavin-HealthProfessional/"
      }
    ],
    "areas": [
      "Eyes",
      "Skin",
      "Nerves"
    ],
    // Same ingrediensartikkel på nynorsk
    "nn": {
      "name": "Riboflavin · vitamin B2",
      "category": "Vitamin",
      "symbol": "B2",
      "areas": [
        "Auga",
        "Huda",
        "Nervane"
      ],
      "what": "Vitamin B2, òg kalla riboflavin.",
      "body": "Kroppen bruker B2 til å frigjere energi frå mat. Det hjelper òg auga, huda og nervane med å fungere normalt.",
      "good": "Nok B2 hjelper kroppen med å bruke maten du et. Vitaminet støttar normale auge, normal hud og normale nervar. Mat og produkt med tilsette næringsstoff kan gi B2. Dette er ei vanleg ernæringsoppgåve, så du bør ikkje vente at ekstra B2 gjer deg vaken slik koffein gjer.",
      "bad": "Meir B2 betyr ikkje meir energi når du allereie får nok. Det finst avgrensa kunnskap om å ta svært store dosar over tid. Ein drikk med B2 kan framleis innehalde mykje sukker eller koffein, så vitaminet opphevar ikkje verknadene av resten av drikka.",
      "evidence": "Eit vitamin hjelper kroppen med å bruke energi frå maten; vitaminet inneheld ikkje denne energien sjølv.",
      "sources": [
        {
          "name": "NIH ODS · riboflavin",
          "url": "https://ods.od.nih.gov/factsheets/Riboflavin-HealthProfessional/"
        }
      ],
      "reviewed": "30. oktober 2026"
    }
  },
  // ── STOFF 2.16: Sucralose [sucralose] ──
  {
    "id": "sucralose",
    "name": "Sucralose",
    "category": "Sweetener",
    "symbol": "E955",
    // Engelsk fagtekst: kva stoffet er, kroppen, fordelar og ulemper
    "what": "An intense sweetener also called E955.",
    "body": "Sucralose gives a sweet taste using much less ingredient than sugar. It does not act as a stimulant in your brain.",
    "good": "Sucralose can help a drink use less sugar while still tasting sweet. If that drink replaces a higher-sugar one, it can lower the sugar and calories you consume. It can also appear alongside sugar, so the nutrition table is still needed to see what the finished drink contains.",
    "bad": "A drink with sucralose may still contain sugar, acid or caffeine. It can therefore still affect your teeth or sleep through those ingredients. The presence of this sweetener alone does not prove a long-term weight benefit, and its amount cannot be judged from how sweet the drink tastes.",
    "evidence": "Regulators assess particular uses and amounts. This guide does not claim that an unlimited amount has been tested.",
    "sources": [
      {
        "name": "EFSA · sweeteners",
        "url": "https://www.efsa.europa.eu/en/topics/topic/sweeteners"
      }
    ],
    "areas": [
      "Sweet taste",
      "Lower sugar"
    ],
    // Same ingrediensartikkel på nynorsk
    "nn": {
      "name": "Sukralose",
      "category": "Søtstoff",
      "symbol": "E955",
      "areas": [
        "Søtsmak",
        "Mindre sukker"
      ],
      "what": "Eit intenst søtstoff, òg kalla E955.",
      "body": "Sukralose gir søtsmak med mykje mindre mengd av ingrediensen enn sukker. Det verkar ikkje som eit stimulerande stoff i hjernen.",
      "good": "Sukralose kan hjelpe produsenten med å bruke mindre sukker og likevel få ei søt drikke. Dersom denne drikka erstattar ei med meir sukker, kan ho redusere sukkeret og kaloriane du får i deg. Stoffet kan òg stå saman med sukker på ingredienslista, så næringstabellen trengst framleis for å sjå kva den ferdige drikka inneheld.",
      "bad": "Ein drikk med sukralose kan framleis innehalde sukker, syre eller koffein. Desse ingrediensane kan derfor framleis påverke tennene eller søvnen. At dette søtstoffet finst i drikka, viser ikkje åleine ein fordel for vekta over lang tid, og du kan ikkje vurdere mengda ut frå kor søtt drikka smakar.",
      "evidence": "Styresmaktene vurderer bestemte bruksområde og mengder. Denne rettleiinga hevdar ikkje at ei uavgrensa mengd er testa.",
      "sources": [
        {
          "name": "EFSA · søtstoff",
          "url": "https://www.efsa.europa.eu/en/topics/topic/sweeteners"
        }
      ],
      "reviewed": "30. oktober 2026"
    }
  },
  // ── STOFF 2.17: Phosphoric acid [phosphoric-acid] ──
  {
    "id": "phosphoric-acid",
    "name": "Phosphoric acid",
    "category": "Acidity",
    "symbol": "E338",
    // Engelsk fagtekst: kva stoffet er, kroppen, fordelar og ulemper
    "what": "An acid used to give cola its sharp taste, also called E338.",
    "body": "Its main job is in the drink. Acidic drinks can affect tooth enamel and can trigger heartburn in some people; this is not an energy ingredient.",
    "good": "Phosphoric acid helps balance the sweetness of cola and gives it a familiar sharp taste. It is there to shape the recipe. The fact that it contains phosphorus does not mean this small ingredient is being used as a useful bone supplement or a reason to drink more cola.",
    "bad": "Repeated contact with acidic drinks can wear away tooth enamel. Cola may also trigger heartburn for some people. Those effects depend on the finished drink and drinking habits, rather than just this ingredient’s name. An unknown amount in a drink should not be treated as a phosphorus supplement dose.",
    "evidence": "A label lists the acid but usually does not give its amount or the drink’s pH.",
    "sources": [
      {
        "name": "American Dental Association · acids and teeth",
        "url": "https://www.mouthhealthy.org/all-topics-a-z/dietary-acids-and-your-teeth"
      },
      {
        "name": "NIDDK · individual dietary triggers",
        "url": "https://www.niddk.nih.gov/health-information/digestive-diseases/acid-reflux-ger-gerd-adults/eating-diet-nutrition"
      }
    ],
    "areas": [
      "Teeth",
      "Stomach",
      "Sour taste"
    ],
    // Same ingrediensartikkel på nynorsk
    "nn": {
      "name": "Fosforsyre",
      "category": "Surleik",
      "symbol": "E338",
      "areas": [
        "Tennene",
        "Magen",
        "Sur smak"
      ],
      "what": "Ei syre som gir cola den skarpe smaken, òg kalla E338.",
      "body": "Hovudoppgåva er i drikka. Syrehaldige drikkar kan påverke tannemaljen og utløyse halsbrann hos nokre; dette er ikkje ein energiingrediens.",
      "good": "Fosforsyre hjelper med å balansere søtsmaken i cola og gir den kjende, skarpe smaken. Ho blir brukt for å forme oppskrifta. At syra inneheld fosfor, betyr ikkje at denne vesle ingrediensen blir brukt som eit nyttig tilskot for skjelettet, eller at ho er ein grunn til å drikke meir cola.",
      "bad": "Gjenteken kontakt med syrehaldig drikke kan slite vekk tannemaljen. Cola kan òg utløyse halsbrann hos enkelte. Desse verknadene kjem an på den ferdige drikka og drikkevanane, ikkje berre namnet på denne ingrediensen. Ei ukjend mengd i ein drikk bør ikkje behandlast som ein dose fosfortilskot.",
      "evidence": "Ein etikett oppgir syra, men vanlegvis ikkje mengda eller pH-verdien til drikka.",
      "sources": [
        {
          "name": "American Dental Association · syrer og tenner",
          "url": "https://www.mouthhealthy.org/all-topics-a-z/dietary-acids-and-your-teeth"
        },
        {
          "name": "NIDDK · mat og drikke som kan utløyse individuelle plager",
          "url": "https://www.niddk.nih.gov/health-information/digestive-diseases/acid-reflux-ger-gerd-adults/eating-diet-nutrition"
        }
      ],
      "reviewed": "30. oktober 2026"
    }
  },
  // ── STOFF 2.18: Flavourings [flavourings] ──
  {
    "id": "flavourings",
    "name": "Flavourings",
    "category": "Sensory ingredients",
    "symbol": "Taste + aroma",
    // Engelsk fagtekst: kva stoffet er, kroppen, fordelar og ulemper
    "what": "Ingredients that create a drink’s taste and smell.",
    "body": "Your nose and taste buds detect them. “Flavourings” describes a mixture, not one substance with one predictable effect on your organs.",
    "good": "Flavourings help make a drink taste familiar and keep the flavour consistent between batches. They may supply citrus, berry or cola notes without listing every part of a recipe. This is mainly about enjoying taste and smell, rather than improving the function of your brain, heart or muscles.",
    "bad": "The word “flavourings” does not tell you every substance or its amount. It therefore cannot tell us every possible individual sensitivity. “Natural” also does not mean that everyone will tolerate a mixture. Where a recipe includes caffeine within its flavourings, that caffeine still counts towards the drink’s total.",
    "evidence": "DrinkLab does not invent a secret flavour recipe or claim one organ effect for the whole mixture.",
    "sources": [
      {
        "name": "European Commission · flavourings",
        "url": "https://food.ec.europa.eu/food-safety/food-improvement-agents/flavourings_en"
      }
    ],
    "areas": [
      "Taste",
      "Smell"
    ],
    // Same ingrediensartikkel på nynorsk
    "nn": {
      "name": "Aromastoff",
      "category": "Smaks- og duftstoff",
      "symbol": "Smak + duft",
      "areas": [
        "Smak",
        "Lukt"
      ],
      "what": "Ingrediensar som skaper smaken og lukta til ein drikk.",
      "body": "Nasen og smakslaukane registrerer dei. «Aromastoff» skildrar ei blanding, ikkje eitt stoff med éin føreseieleg verknad på organa dine.",
      "good": "Aromastoff hjelper drikka med å få ein kjend smak og med å smake likt frå produksjon til produksjon. Dei kan gi preg av sitrus, bær eller cola utan at kvar del av oppskrifta blir oppgitt. Dette handlar hovudsakleg om å nyte smak og lukt, framfor å betre funksjonen til hjernen, hjartet eller musklane.",
      "bad": "Ordet «aromastoff» fortel ikkje kva kvart stoff er, eller kor mykje det er av det. Derfor kan det ikkje fortelje om alle moglege individuelle reaksjonar. «Naturleg» betyr heller ikkje at alle vil tole ei blanding. Når ei oppskrift har koffein som del av aromastoffa, tel dette koffeinet framleis med i den samla mengda i drikka.",
      "evidence": "DrinkLab finn ikkje på ei hemmeleg smaksoppskrift eller hevdar at heile blandinga har éin verknad på eit organ.",
      "sources": [
        {
          "name": "Europakommisjonen · aromastoff",
          "url": "https://food.ec.europa.eu/food-safety/food-improvement-agents/flavourings_en"
        }
      ],
      "reviewed": "30. oktober 2026"
    }
  },
  // ── STOFF 2.19: Colours & caramel [colours] ──
  {
    "id": "colours",
    "name": "Colours & caramel",
    "category": "Appearance",
    "symbol": "Colour ≠ nutrition",
    // Engelsk fagtekst: kva stoffet er, kroppen, fordelar og ulemper
    "what": "Ingredients that change the colour of a drink.",
    "body": "Their main job is to change what you see. Colour does not measure sugar or caffeine, and it does not prove a benefit for an organ.",
    "good": "Colours help a drink look recognisable and consistent. Caramel gives cola its brown shade, while other colourings create different shades. This is an appearance benefit, not extra nutrition. The temporary colours used for other ingredients in the animation are teaching colours and are separate from actual food colouring.",
    "bad": "Different colours are different substances, so they do not all have one shared health effect. Their amounts matter when assessing safety. A clear drink can still be sugary, caffeinated or acidic, and a dark drink is not automatically stronger. You need the ingredient list and nutrition numbers to make those comparisons.",
    "evidence": "Specific E133, E150d and E160a colours have their own guides when a recipe names them.",
    "sources": [
      {
        "name": "EFSA · food colours",
        "url": "https://www.efsa.europa.eu/en/topics/topic/food-colours"
      }
    ],
    "areas": [
      "Appearance"
    ],
    // Same ingrediensartikkel på nynorsk
    "nn": {
      "name": "Fargestoff og karamell",
      "category": "Utsjånad",
      "symbol": "Farge ≠ næring",
      "areas": [
        "Utsjånad"
      ],
      "what": "Ingrediensar som endrar fargen på ein drikk.",
      "body": "Hovudoppgåva er å endre det du ser. Farge måler ikkje sukker eller koffein og viser ikkje ein fordel for eit organ.",
      "good": "Fargestoff hjelper drikka med å sjå attkjenneleg og lik ut frå gong til gong. Karamell gir cola brunfargen, medan andre fargestoff skaper andre nyansar. Dette er ein fordel for utsjånaden, ikkje ekstra næring. Dei mellombelse fargane som andre ingrediensar får i animasjonen, er undervisningsfargar og er noko anna enn verkelege fargestoff i mat.",
      "bad": "Ulike fargar kjem frå ulike stoff, så alle har ikkje éin felles helseeffekt. Mengdene er viktige når ein vurderer tryggleik. Ein klar drikk kan framleis innehalde sukker, koffein eller syre, og ei mørk drikke er ikkje automatisk sterkare. Du treng ingredienslista og næringstala for å samanlikne dette.",
      "evidence": "Dei konkrete fargestoffa E133, E150d og E160a har eigne rettleiingar når ei oppskrift nemner dei.",
      "sources": [
        {
          "name": "EFSA · fargestoff i mat",
          "url": "https://www.efsa.europa.eu/en/topics/topic/food-colours"
        }
      ],
      "reviewed": "30. oktober 2026"
    }
  },
  // ── STOFF 2.20: Extracted coffee compounds [coffee-solids] ──
  {
    "id": "coffee-solids",
    "name": "Extracted coffee compounds",
    "category": "Plant compounds",
    "symbol": "Brewed, not blended",
    // Engelsk fagtekst: kva stoffet er, kroppen, fordelar og ulemper
    "what": "The mix of coffee substances that dissolves into water when you brew it.",
    "body": "These substances give coffee its brown colour, smell and taste. Coffee can trigger heartburn in some people. Caffeine’s effects on your brain and heart are covered in the separate caffeine guide.",
    "good": "These brewed compounds make plain coffee taste and smell like coffee, without needing sugar or syrup. A cup also contributes fluid. This part of the guide explains the mixture that gives coffee its character; it does not treat that mixture as a proven way to protect a particular organ.",
    "bad": "Some people get heartburn after coffee: a burning feeling when stomach contents come back up. The strength and amount of coffee can change how it feels. Milk, sugar and syrups also change the drink. Sleep problems or a racing heart are more directly linked to caffeine, which has its own guide.",
    "evidence": "Coffee contains many substances. One mixed group cannot be given one single body effect, and the amount changes with brewing.",
    "sources": [
      {
        "name": "NIDDK · coffee, caffeine and dietary triggers",
        "url": "https://www.niddk.nih.gov/health-information/digestive-diseases/acid-reflux-ger-gerd-adults/eating-diet-nutrition"
      }
    ],
    "areas": [
      "Taste and smell",
      "Stomach"
    ],
    // Same ingrediensartikkel på nynorsk
    "nn": {
      "name": "Stoff trekte ut av kaffi",
      "category": "Plantestoff",
      "symbol": "Trakta, ikkje blanda",
      "areas": [
        "Smak og lukt",
        "Magen"
      ],
      "what": "Blandinga av kaffistoff som løyser seg i vatnet når du traktar kaffi.",
      "body": "Desse stoffa gir kaffi brunfarge, lukt og smak. Kaffi kan utløyse halsbrann hos enkelte. Verknadene koffein har på hjernen og hjartet, er forklarte i den eigne rettleiinga om koffein.",
      "good": "Desse uttrakte stoffa får rein kaffi til å smake og lukte kaffi utan at du treng sukker eller sirup. Ein kopp bidreg òg med væske. Denne delen av rettleiinga forklarer blandinga som gir kaffien særpreget sitt; ho framstiller ikkje blandinga som ein dokumentert måte å verne eit bestemt organ på.",
      "bad": "Nokre får halsbrann etter kaffi: ei brennande kjensle når mageinnhald kjem opp att. Styrken og mengda kaffi kan endre korleis det kjennest. Mjølk, sukker og sirupar endrar òg drikka. Søvnproblem og rask puls er meir direkte knytte til koffein, som har ei eiga rettleiing.",
      "evidence": "Kaffi inneheld mange stoff. Éi samla gruppe kan ikkje få tillagt éin enkelt verknad på kroppen, og mengda endrar seg med traktinga.",
      "sources": [
        {
          "name": "NIDDK · kaffi, koffein og mat som kan utløyse plager",
          "url": "https://www.niddk.nih.gov/health-information/digestive-diseases/acid-reflux-ger-gerd-adults/eating-diet-nutrition"
        }
      ],
      "reviewed": "30. oktober 2026"
    }
  },
  // ── STOFF 2.21: Extracted tea compounds [tea-solids] ──
  {
    "id": "tea-solids",
    "name": "Extracted tea compounds",
    "category": "Plant compounds",
    "symbol": "An infusion",
    // Engelsk fagtekst: kva stoffet er, kroppen, fordelar og ulemper
    "what": "The mix of substances that moves from tea leaves into hot water.",
    "body": "These substances give tea its colour and taste. The caffeine in tea is shown separately because that is what can make you feel more awake or affect sleep.",
    "good": "Brewed tea gives you flavour and fluid without needing added sugar. Its leaf compounds help explain why plain tea is different from water. This is not a promise that one cup protects your heart or prevents illness; the guide is describing an ordinary drink, rather than a concentrated tea supplement.",
    "bad": "Stronger tea can change both taste and caffeine intake. Tea can still disturb sleep if its caffeine affects you, even when it contains no sugar. Research on high-dose tea extracts cannot simply be applied to a normal cup, because the amount and mixture are very different.",
    "evidence": "This entry describes plain black tea. Use the caffeine guide for the main stimulant effects.",
    "sources": [
      {
        "name": "NIH / NCI · black tea",
        "url": "https://www.cancer.gov/publications/dictionaries/cancer-drug/def/black-tea"
      }
    ],
    "areas": [
      "Taste and colour",
      "Caffeine shown separately"
    ],
    // Same ingrediensartikkel på nynorsk
    "nn": {
      "name": "Stoff trekte ut av te",
      "category": "Plantestoff",
      "symbol": "Eit uttrekk",
      "areas": [
        "Smak og farge",
        "Koffein vist for seg"
      ],
      "what": "Blandinga av stoff som går frå teblada over i varmt vatn.",
      "body": "Desse stoffa gir teen farge og smak. Koffeinet i te blir vist for seg fordi det er dette som kan gjere deg meir vaken eller påverke søvnen.",
      "good": "Trekt te gir deg smak og væske utan at du treng tilsett sukker. Stoffa frå blada hjelper med å forklare kvifor rein te er noko anna enn vatn. Dette er ikkje ein lovnad om at éin kopp vernar hjartet eller førebyggjer sjukdom; rettleiinga skildrar ein vanleg drikk, ikkje eit konsentrert tetilskot.",
      "bad": "Sterkare te kan endre både smaken og koffeininntaket. Te kan framleis forstyrre søvnen dersom koffeinet påverkar deg, sjølv om han ikkje inneheld sukker. Forsking på høge dosar teekstrakt kan ikkje utan vidare overførast til ein vanleg kopp, fordi mengda og blandinga er svært ulike.",
      "evidence": "Denne oppføringa skildrar rein svart te. Bruk rettleiinga om koffein for dei viktigaste stimulerande verknadene.",
      "sources": [
        {
          "name": "NIH / NCI · svart te",
          "url": "https://www.cancer.gov/publications/dictionaries/cancer-drug/def/black-tea"
        }
      ],
      "reviewed": "30. oktober 2026"
    }
  },
  // ── STOFF 2.22: Vitamin C · ascorbic acid [vitamin-c] ──
  {
    "id": "vitamin-c",
    "name": "Vitamin C · ascorbic acid",
    "category": "Vitamin / antioxidant",
    "symbol": "E300 · C₆H₈O₆",
    // Engelsk fagtekst: kva stoffet er, kroppen, fordelar og ulemper
    "what": "Vitamin C, also called ascorbic acid or E300.",
    "body": "Your body uses vitamin C to make collagen, which helps hold skin, gums and other tissues together. It supports normal immune function. In drinks it can also help stop ingredients reacting with oxygen.",
    "good": "Getting enough vitamin C supports healthy tissues and normal immune function. Fruit and juice can supply it. Ascorbic acid can also help protect a recipe during storage. That recipe job does not tell us how much vitamin the drink gives you; the nutrition table is needed for that.",
    "bad": "Very large supplement doses can cause diarrhoea, stomach cramps and nausea. Those amounts are different from an ordinary serving of food or drink. Extra vitamin C does not remove the sugar or caffeine in a recipe, and an unknown antioxidant amount is not proof that a soft drink helps prevent illness.",
    "evidence": "In orange juice it occurs naturally. Burn and Urge list it as an antioxidant, with no separate vitamin amount on the source pages.",
    "sources": [
      {
        "name": "NIH ODS · vitamin C",
        "url": "https://ods.od.nih.gov/factsheets/VitaminC-Consumer/"
      }
    ],
    "areas": [
      "Skin and gums",
      "Immune system",
      "Recipe protection"
    ],
    // Same ingrediensartikkel på nynorsk
    "nn": {
      "name": "Vitamin C · askorbinsyre",
      "category": "Vitamin / antioksidant",
      "symbol": "E300 · C₆H₈O₆",
      "areas": [
        "Hud og tannkjøt",
        "Immunforsvaret",
        "Vern av oppskrifta"
      ],
      "what": "Vitamin C, òg kalla askorbinsyre eller E300.",
      "body": "Kroppen bruker vitamin C til å lage kollagen, som hjelper med å halde hud, tannkjøt og anna vev saman. Vitaminet støttar normal funksjon i immunforsvaret. I drikkar kan det òg hjelpe med å hindre at ingrediensar reagerer med oksygen.",
      "good": "Nok vitamin C støttar friskt vev og normal funksjon i immunforsvaret. Frukt og juice kan gi vitaminet. Askorbinsyre kan òg hjelpe med å verne ei oppskrift under lagring. Denne oppgåva i oppskrifta fortel ikkje kor mykje vitamin drikka gir deg; det treng du næringstabellen til.",
      "bad": "Svært store dosar frå kosttilskot kan gi diaré, magekrampar og kvalme. Desse mengdene er noko anna enn ein vanleg porsjon mat eller drikke. Ekstra vitamin C fjernar ikkje sukkeret eller koffeinet i ei oppskrift, og ei ukjend antioksidantmengd viser ikkje at ein brus hjelper med å førebyggje sjukdom.",
      "evidence": "I appelsinjuice finst vitaminet naturleg. Burn og Urge oppgir det som antioksidant, utan ei eiga vitaminmengd på kjeldesidene.",
      "sources": [
        {
          "name": "NIH ODS · vitamin C",
          "url": "https://ods.od.nih.gov/factsheets/VitaminC-Consumer/"
        }
      ],
      "reviewed": "30. oktober 2026"
    }
  },
  // ── STOFF 2.23: Fruit compounds & pulp [fruit-solids] ──
  {
    "id": "fruit-solids",
    "name": "Fruit compounds & pulp",
    "category": "Plant compounds",
    "symbol": "The fruit matrix",
    // Engelsk fagtekst: kva stoffet er, kroppen, fordelar og ulemper
    "what": "Fruit-derived substances and any pulp left in the juice.",
    "body": "They give juice flavour, colour and body. Juice does not have the same structure or fullness as eating a whole orange.",
    "good": "Juice contains more than water and sugar: it can retain fruit flavour, pulp and nutrients such as vitamin C. This explains why it is different from a plain sugar solution. How much pulp and vitamin remains depends on the fruit and processing, so the glass is an example rather than a measured carton.",
    "bad": "Juice sugars still count as free sugars, and a large glass can deliver a lot quickly. Juice is also different from chewing whole fruit, which has a different structure and fibre content. A little pulp does not automatically make juice equal to a whole orange or remove its effects on teeth.",
    "evidence": "NHS guidance limits juice and smoothies together to 150 ml a day, with meals. This is the serving used in the lab.",
    "sources": [
      {
        "name": "NHS · fruit juice, smoothies and sugars",
        "url": "https://www.nhs.uk/Live-well/eat-well/how-to-eat-a-balanced-diet/how-to-cut-down-on-sugar-in-your-diet/"
      }
    ],
    "areas": [
      "Fruit flavour",
      "Food structure"
    ],
    // Same ingrediensartikkel på nynorsk
    "nn": {
      "name": "Fruktstoff og fruktkjøt",
      "category": "Plantestoff",
      "symbol": "Fruktstrukturen",
      "areas": [
        "Fruktsmak",
        "Strukturen i maten"
      ],
      "what": "Stoff frå frukta og eventuelt fruktkjøt som er att i juicen.",
      "body": "Dei gir juice smak, farge og fylde. Juice har ikkje den same strukturen eller mettinga som når du et ein heil appelsin.",
      "good": "Juice inneheld meir enn vatn og sukker: han kan behalde fruktsmak, fruktkjøt og næringsstoff som vitamin C. Dette forklarer kvifor juice er noko anna enn ei rein sukkerløysing. Kor mykje fruktkjøt og vitamin som er att, kjem an på frukta og behandlinga. Glaset er derfor eit døme, ikkje ein målt kartong.",
      "bad": "Sukker i juice tel framleis som fritt sukker, og eit stort glas kan raskt gi mykje. Juice er òg noko anna enn å tyggje heil frukt, som har ein annan struktur og eit anna fiberinnhald. Litt fruktkjøt gjer ikkje automatisk juice lik ein heil appelsin og fjernar ikkje verknadene på tennene.",
      "evidence": "NHS tilrår høgst 150 ml juice og smoothie til saman om dagen, saman med måltid. Det er denne porsjonen som blir brukt i laboratoriet.",
      "sources": [
        {
          "name": "NHS · fruktjuice, smoothie og sukker",
          "url": "https://www.nhs.uk/Live-well/eat-well/how-to-eat-a-balanced-diet/how-to-cut-down-on-sugar-in-your-diet/"
        }
      ],
      "reviewed": "30. oktober 2026"
    }
  },
  // ── STOFF 2.24: Naturally occurring fruit acids [fruit-acids] ──
  {
    "id": "fruit-acids",
    "name": "Naturally occurring fruit acids",
    "category": "Acidity",
    "symbol": "Fruit acidity",
    // Engelsk fagtekst: kva stoffet er, kroppen, fordelar og ulemper
    "what": "The acids naturally present in fruit juice.",
    "body": "They give juice its sour taste. Acid can affect tooth enamel and may trigger heartburn, whether it comes from fruit or is added to a drink.",
    "good": "Fruit acids are part of the normal taste of orange juice. They do not have to be added in a factory to be present. Understanding this helps you recognise why a drink made only from fruit can still taste sharp and be acidic, without treating the acid as a special health ingredient.",
    "bad": "Frequent contact with acidic juice can wear down the hard surface of teeth. Citrus juice can also trigger heartburn for some people. “Natural” does not remove these effects, although the whole recipe still differs from a soft drink. The animation cannot measure the juice’s acidity or tell you your individual tolerance.",
    "evidence": "These are naturally present acids. The generic juice is not assumed to have added acidity regulators.",
    "sources": [
      {
        "name": "American Dental Association · acids and teeth",
        "url": "https://www.mouthhealthy.org/all-topics-a-z/dietary-acids-and-your-teeth"
      },
      {
        "name": "NIDDK · citrus foods and reflux context",
        "url": "https://www.niddk.nih.gov/health-information/digestive-diseases/acid-reflux-ger-gerd-adults/eating-diet-nutrition"
      }
    ],
    "areas": [
      "Teeth",
      "Stomach"
    ],
    // Same ingrediensartikkel på nynorsk
    "nn": {
      "name": "Naturleg førekomande fruktsyrer",
      "category": "Surleik",
      "symbol": "Surleik frå frukt",
      "areas": [
        "Tennene",
        "Magen"
      ],
      "what": "Syrene som finst naturleg i fruktjuice.",
      "body": "Dei gir juice sur smak. Syre kan påverke tannemaljen og utløyse halsbrann, anten ho kjem frå frukt eller blir tilsett i ein drikk.",
      "good": "Fruktsyrer er ein del av den vanlege smaken til appelsinjuice. Dei treng ikkje vere tilsette på ein fabrikk for å finnast i drikka. Å forstå dette hjelper deg med å sjå kvifor ein drikk laga berre av frukt likevel kan smake skarpt og vere sur, utan å framstille syra som ein særleg helseingrediens.",
      "bad": "Hyppig kontakt med sur juice kan slite ned den harde overflata på tennene. Sitrusjuice kan òg utløyse halsbrann hos enkelte. «Naturleg» fjernar ikkje desse verknadene, sjølv om heile samansetjinga framleis skil seg frå brus. Animasjonen kan ikkje måle surleiken i juicen eller fortelje kva du sjølv toler.",
      "evidence": "Dette er syrer som finst naturleg. Det blir ikkje føresett at den generiske juicen har tilsette surheitsregulerande middel.",
      "sources": [
        {
          "name": "American Dental Association · syrer og tenner",
          "url": "https://www.mouthhealthy.org/all-topics-a-z/dietary-acids-and-your-teeth"
        },
        {
          "name": "NIDDK · sitrusfrukt og refluks",
          "url": "https://www.niddk.nih.gov/health-information/digestive-diseases/acid-reflux-ger-gerd-adults/eating-diet-nutrition"
        }
      ],
      "reviewed": "30. oktober 2026"
    }
  },
  // ── STOFF 2.25: Glucose · dextrose [glucose] ──
  {
    "id": "glucose",
    "name": "Glucose · dextrose",
    "category": "Carbohydrate",
    "symbol": "C₆H₁₂O₆",
    // Engelsk fagtekst: kva stoffet er, kroppen, fordelar og ulemper
    "what": "A simple sugar. Dextrose is another name for the same sugar.",
    "body": "Glucose enters your blood after digestion. Your cells use it for energy. Bacteria in your mouth can also use it and make acids that damage teeth.",
    "good": "Glucose is a source of fuel for your body. During long exercise, carbohydrate can help replace some of the energy your muscles use. It also makes drinks sweet. This is why it appears in sports drinks, though ordinary daily hydration does not usually require a sugary sports drink.",
    "bad": "Added glucose increases the sugar and calories in a drink. Having sugary drinks often raises the risk of tooth decay, and excess calories can lead to weight gain. The word “sports” does not change those effects when you drink it without needing the extra exercise fuel.",
    "evidence": "Powerade’s glucose and fructose are parts of one sugar total. Do not add the total twice.",
    "sources": [
      {
        "name": "NHS · sugars and the nutrition label",
        "url": "https://www.nhs.uk/live-well/eat-well/food-types/how-does-sugar-in-our-diet-affect-our-health/"
      }
    ],
    "areas": [
      "Blood sugar",
      "Muscles",
      "Teeth"
    ],
    // Same ingrediensartikkel på nynorsk
    "nn": {
      "name": "Glukose · dekstrose",
      "category": "Karbohydrat",
      "symbol": "C₆H₁₂O₆",
      "areas": [
        "Blodsukker",
        "Musklane",
        "Tennene"
      ],
      "what": "Ein enkel sukkerart. Dekstrose er eit anna namn på den same sukkerarten.",
      "body": "Glukose går over i blodet etter fordøyinga. Cellene bruker han som energi. Bakteriar i munnen kan òg bruke glukose og lage syrer som skader tennene.",
      "good": "Glukose er ei kjelde til drivstoff for kroppen. Under langvarig trening kan karbohydrat hjelpe med å erstatte noko av energien musklane bruker. Glukose gir òg drikkar søtsmak. Derfor finst det i sportsdrikkar, sjølv om vanleg dagleg væsketilførsel som regel ikkje krev ein sukkerhaldig sportsdrikk.",
      "bad": "Tilsett glukose aukar mengda sukker og kaloriar i ein drikk. Å drikke sukkerhaldig drikke ofte aukar faren for hol i tennene, og eit overskot av kaloriar kan føre til vektauke. Ordet «sport» endrar ikkje desse verknadene når du drikk utan å trenge ekstra drivstoff til trening.",
      "evidence": "Glukosen og fruktosen i Powerade er delar av éi samla sukkermengd. Ikkje legg til totalen to gonger.",
      "sources": [
        {
          "name": "NHS · sukkerartar og næringsdeklarasjonen",
          "url": "https://www.nhs.uk/live-well/eat-well/food-types/how-does-sugar-in-our-diet-affect-our-health/"
        }
      ],
      "reviewed": "30. oktober 2026"
    }
  },
  // ── STOFF 2.26: Fructose [fructose] ──
  {
    "id": "fructose",
    "name": "Fructose",
    "category": "Carbohydrate",
    "symbol": "C₆H₁₂O₆ · a different structure",
    // Engelsk fagtekst: kva stoffet er, kroppen, fordelar og ulemper
    "what": "A simple sugar used to add sweetness.",
    "body": "Your body processes fructose and can use it for energy. In this sports drink it is an added sugar, even though fructose also occurs naturally in fruit.",
    "good": "Fructose adds sweetness and carbohydrate energy. Manufacturers may combine it with glucose to create the taste and carbohydrate mix they want. It is one part of the recipe, rather than a separate vitamin or stimulant. The nutrition table adds the different sugars together so you can see the total.",
    "bad": "Added fructose still counts as free sugar and contributes calories. It does not give a drink the same fibre or structure as whole fruit. Frequent sugary drinks can contribute to tooth decay, and extra calories can contribute to weight gain when you regularly take in more than you use.",
    "evidence": "The source gives combined sugars, not a separate fructose amount. No dose-specific liver effect is claimed.",
    "sources": [
      {
        "name": "NHS · free sugars",
        "url": "https://www.nhs.uk/live-well/eat-well/food-types/how-does-sugar-in-our-diet-affect-our-health/"
      }
    ],
    "areas": [
      "Energy",
      "Teeth"
    ],
    // Same ingrediensartikkel på nynorsk
    "nn": {
      "name": "Fruktose",
      "category": "Karbohydrat",
      "symbol": "C₆H₁₂O₆ · ein annan struktur",
      "areas": [
        "Energi",
        "Tennene"
      ],
      "what": "Ein enkel sukkerart som blir brukt for å gi søtsmak.",
      "body": "Kroppen omset fruktose og kan bruke han som energi. I denne sportsdrikka er han tilsett sukker, sjølv om fruktose òg finst naturleg i frukt.",
      "good": "Fruktose gir søtsmak og energi frå karbohydrat. Produsentar kan kombinere han med glukose for å få den smaken og karbohydratblandinga dei ønskjer. Han er éin del av oppskrifta, ikkje eit eige vitamin eller eit stimulerande stoff. Næringstabellen legg dei ulike sukkerartane saman, slik at du kan sjå totalen.",
      "bad": "Tilsett fruktose tel framleis som fritt sukker og bidreg med kaloriar. Han gir ikkje drikka det same fiberinnhaldet eller den same strukturen som heil frukt. Sukkerhaldig drikke ofte kan bidra til hol i tennene, og ekstra kaloriar kan bidra til vektauke når du jamleg får i deg meir enn du bruker.",
      "evidence": "Kjelda oppgir sukkerartane samla, ikkje ei eiga fruktosemengd. Det blir ikkje hevda nokon dosebestemt verknad på levra.",
      "sources": [
        {
          "name": "NHS · frie sukkerartar",
          "url": "https://www.nhs.uk/live-well/eat-well/food-types/how-does-sugar-in-our-diet-affect-our-health/"
        }
      ],
      "reviewed": "30. oktober 2026"
    }
  },
  // ── STOFF 2.27: Citric acid [citric-acid] ──
  {
    "id": "citric-acid",
    "name": "Citric acid",
    "category": "Acidity",
    "symbol": "E330 · C₆H₈O₇",
    // Engelsk fagtekst: kva stoffet er, kroppen, fordelar og ulemper
    "what": "An acid that makes drinks taste sharp or sour. Its code is E330.",
    "body": "Acidic drinks can wear away tooth enamel and may trigger heartburn. Citric acid’s job in the recipe is flavour and acidity, not making you more alert.",
    "good": "Citric acid balances a drink’s sweetness and gives it a sharp taste. It helps the maker keep the recipe consistent. It is also naturally present in citrus fruit, though food makers can produce it separately. Neither source makes it a special energy ingredient or a vitamin supplement.",
    "bad": "Frequent contact with acidic drinks can wear down the hard outer surface of your teeth. Some people also get heartburn after acidic drinks. Sugar-free versions can still have these effects, because taking sugar out does not take the acid out. The whole recipe and drinking habits matter.",
    "evidence": "The list does not tell us the finished acidity or the amount of citric acid. The layer is enlarged for visibility.",
    "sources": [
      {
        "name": "American Dental Association · acids and teeth",
        "url": "https://www.mouthhealthy.org/all-topics-a-z/dietary-acids-and-your-teeth"
      },
      {
        "name": "NIDDK · acidic foods and individual reflux triggers",
        "url": "https://www.niddk.nih.gov/health-information/digestive-diseases/acid-reflux-ger-gerd-adults/eating-diet-nutrition"
      }
    ],
    "areas": [
      "Teeth",
      "Stomach"
    ],
    // Same ingrediensartikkel på nynorsk
    "nn": {
      "name": "Sitronsyre",
      "category": "Surleik",
      "symbol": "E330 · C₆H₈O₇",
      "areas": [
        "Tennene",
        "Magen"
      ],
      "what": "Ei syre som gir drikkar skarp eller sur smak. Koden er E330.",
      "body": "Syrehaldig drikke kan slite vekk tannemaljen og utløyse halsbrann. Oppgåva til sitronsyre i oppskrifta er smak og surleik, ikkje å gjere deg meir vaken.",
      "good": "Sitronsyre balanserer søtsmaken i drikka og gir henne ein skarp smak. Ho hjelper produsenten med å halde oppskrifta jamn. Syra finst òg naturleg i sitrusfrukt, men matprodusentar kan framstille henne for seg. Ingen av kjeldene gjer sitronsyre til ein særleg energiingrediens eller eit vitamintilskot.",
      "bad": "Hyppig kontakt med syrehaldig drikke kan slite ned den harde yttersida på tennene. Nokre får òg halsbrann etter syrehaldige drikkar. Sukkerfrie variantar kan framleis ha desse verknadene, fordi det å fjerne sukker ikkje fjernar syra. Heile oppskrifta og drikkevanane har noko å seie.",
      "evidence": "Lista oppgir ikkje den ferdige surleiken eller mengda sitronsyre. Laget er forstørra for at du skal sjå det.",
      "sources": [
        {
          "name": "American Dental Association · syrer og tenner",
          "url": "https://www.mouthhealthy.org/all-topics-a-z/dietary-acids-and-your-teeth"
        },
        {
          "name": "NIDDK · syrehaldig mat og individuelle refluksutløysarar",
          "url": "https://www.niddk.nih.gov/health-information/digestive-diseases/acid-reflux-ger-gerd-adults/eating-diet-nutrition"
        }
      ],
      "reviewed": "30. oktober 2026"
    }
  },
  // ── STOFF 2.28: Sodium citrate [sodium-citrate] ──
  {
    "id": "sodium-citrate",
    "name": "Sodium citrate",
    "category": "Acidity regulator",
    "symbol": "E331 · citrate salts",
    // Engelsk fagtekst: kva stoffet er, kroppen, fordelar og ulemper
    "what": "A salt related to citric acid. Its code is E331.",
    "body": "It helps control the drink’s acidity and adds some sodium. The ingredient name does not tell us how much sodium the bottle supplies.",
    "good": "Sodium citrate helps balance sourness and keep a drink consistent. In a sports drink it can also contribute an electrolyte, a mineral carried in body fluids. That may be useful in a suitable exercise recipe, but it does not mean everyone needs extra sodium from a sweetened drink.",
    "bad": "The amount matters: a small recipe ingredient is different from a medical electrolyte treatment. Seeing sodium citrate on a label does not show that a drink treats dehydration or provides the right mineral balance for you. It also does not cancel the drink’s other acids, sugar or caffeine.",
    "evidence": "Use the sodium or salt value in the nutrition table when it is published, rather than guessing from this ingredient name.",
    "sources": [
      {
        "name": "European Commission · food additive roles and authorised uses",
        "url": "https://food.ec.europa.eu/food-safety/food-improvement-agents/additives_en"
      }
    ],
    "areas": [
      "Acidity control",
      "Sodium"
    ],
    // Same ingrediensartikkel på nynorsk
    "nn": {
      "name": "Natriumsitrat",
      "category": "Surheitsregulerande middel",
      "symbol": "E331 · sitratsalt",
      "areas": [
        "Regulering av surleik",
        "Natrium"
      ],
      "what": "Eit salt som er i slekt med sitronsyre. Koden er E331.",
      "body": "Det hjelper med å regulere surleiken i drikka og tilfører noko natrium. Ingrediensnamnet fortel ikkje kor mykje natrium flaska gir.",
      "good": "Natriumsitrat hjelper med å balansere sur smak og halde drikka jamn. I ein sportsdrikk kan det òg bidra med ein elektrolytt, eit mineral som blir frakta i kroppsvæskene. Det kan vere nyttig i ei høveleg treningsoppskrift, men betyr ikkje at alle treng ekstra natrium frå ei søta drikke.",
      "bad": "Mengda er viktig: ein liten ingrediens i ei oppskrift er noko anna enn medisinsk elektrolyttbehandling. Natriumsitrat på etiketten viser ikkje at drikka behandlar væskemangel eller gir den rette mineralbalansen for deg. Det opphevar heller ikkje verknadene av andre syrer, sukker eller koffein i drikka.",
      "evidence": "Bruk natrium- eller saltverdien i næringstabellen når han er oppgitt, framfor å gjette ut frå dette ingrediensnamnet.",
      "sources": [
        {
          "name": "Europakommisjonen · oppgåver og godkjend bruk for tilsetjingsstoff i mat",
          "url": "https://food.ec.europa.eu/food-safety/food-improvement-agents/additives_en"
        }
      ],
      "reviewed": "30. oktober 2026"
    }
  },
  // ── STOFF 2.29: Potassium citrate [potassium-citrate] ──
  {
    "id": "potassium-citrate",
    "name": "Potassium citrate",
    "category": "Acidity regulator",
    "symbol": "E332 · citrate salts",
    // Engelsk fagtekst: kva stoffet er, kroppen, fordelar og ulemper
    "what": "A potassium salt used to help control acidity. Its code is E332.",
    "body": "Potassium helps nerves send signals and muscles contract. Your kidneys help control the amount in your blood. The quantity in this recipe is not published.",
    "good": "Potassium is needed for normal muscle and nerve function. Potassium citrate can add some of it while also balancing a drink’s acidity. These are two different jobs. The name on a bottle does not show that the drink supplies a large or useful share of your daily potassium needs.",
    "bad": "People with some kidney conditions or taking certain medicines can have trouble removing excess potassium from their blood. This is especially relevant to concentrated sources and supplements. It does not mean this unknown drink amount is harmful, but a sports drink should not be treated as a prescribed potassium treatment.",
    "evidence": "A medical potassium dose cannot be compared with this recipe without knowing its actual amount.",
    "sources": [
      {
        "name": "NIH ODS · potassium functions and limits",
        "url": "https://ods.od.nih.gov/factsheets/Potassium-Consumer/"
      }
    ],
    "areas": [
      "Nerves and muscles",
      "Kidneys"
    ],
    // Same ingrediensartikkel på nynorsk
    "nn": {
      "name": "Kaliumsitrat",
      "category": "Surheitsregulerande middel",
      "symbol": "E332 · sitratsalt",
      "areas": [
        "Nervar og musklar",
        "Nyrene"
      ],
      "what": "Eit kaliumsalt som hjelper med å regulere surleik. Koden er E332.",
      "body": "Kalium hjelper nervane med å sende signal og musklane med å trekkje seg saman. Nyrene hjelper med å regulere mengda i blodet. Mengda i denne oppskrifta er ikkje oppgitt.",
      "good": "Kalium er nødvendig for at musklar og nervar skal fungere normalt. Kaliumsitrat kan tilføre noko kalium medan det òg balanserer surleiken i ein drikk. Dette er to ulike oppgåver. Namnet på ei flaske viser ikkje at drikka gir ein stor eller nyttig del av det daglege kaliumbehovet ditt.",
      "bad": "Personar med enkelte nyresjukdommar eller som bruker visse legemiddel, kan ha vanskar med å fjerne overskot av kalium frå blodet. Dette er særleg relevant for konsentrerte kjelder og kosttilskot. Det betyr ikkje at den ukjende mengda i drikka er skadeleg, men ein sportsdrikk bør ikkje behandlast som føreskriven kaliumbehandling.",
      "evidence": "Ein medisinsk kaliumdose kan ikkje samanliknast med denne oppskrifta utan at ein kjenner den faktiske mengda.",
      "sources": [
        {
          "name": "NIH ODS · oppgåvene til kalium og grenser for inntak",
          "url": "https://ods.od.nih.gov/factsheets/Potassium-Consumer/"
        }
      ],
      "reviewed": "30. oktober 2026"
    }
  },
  // ── STOFF 2.30: Maltodextrin [maltodextrin] ──
  {
    "id": "maltodextrin",
    "name": "Maltodextrin",
    "category": "Carbohydrate",
    "symbol": "Glucose chains",
    // Engelsk fagtekst: kva stoffet er, kroppen, fordelar og ulemper
    "what": "Short chains of glucose made by breaking down starch.",
    "body": "Your body can break ordinary maltodextrin down into glucose and use it for energy. It counts as carbohydrate even when it is not in the “sugars” number.",
    "good": "Maltodextrin can add carbohydrate energy, carry flavours and give a drink more body without making it as sweet as table sugar. Its complicated name describes chains of sugar units. It has a practical recipe role, but it is not a stimulant and does not wake up your brain like caffeine.",
    "bad": "It can add calories even when the sugar figure looks lower. Check total carbohydrate as well as sugar if you want to understand the drink’s fuel content. Ordinary maltodextrin is also different from specially made resistant dextrins sold as fibre; the normal ingredient name does not prove those fibre benefits.",
    "evidence": "Battery and Urge do not publish separate maltodextrin amounts. The animated powder is not a measured portion.",
    "sources": [
      {
        "name": "USP · maltodextrin definition",
        "url": "https://doi.usp.org/USPNF/USPNF_M47125_04_01.html"
      }
    ],
    "areas": [
      "Carbohydrate energy"
    ],
    // Same ingrediensartikkel på nynorsk
    "nn": {
      "name": "Maltodekstrin",
      "category": "Karbohydrat",
      "symbol": "Glukosekjeder",
      "areas": [
        "Energi frå karbohydrat"
      ],
      "what": "Korte glukosekjeder som blir laga ved å bryte ned stivelse.",
      "body": "Kroppen kan bryte vanleg maltodekstrin ned til glukose og bruke det som energi. Det tel som karbohydrat sjølv når det ikkje inngår i talet for «sukkerartar».",
      "good": "Maltodekstrin kan tilføre energi frå karbohydrat, bere aromastoff og gi drikka meir fylde utan å gjere henne like søt som vanleg sukker. Det kompliserte namnet skildrar kjeder av sukkereiningar. Stoffet har ei praktisk oppgåve i oppskrifta, men er ikkje eit stimulerande stoff og gjer ikkje hjernen vaken slik koffein gjer.",
      "bad": "Det kan tilføre kaloriar sjølv når sukkertalet ser lågare ut. Sjå på samla karbohydrat i tillegg til sukker dersom du vil forstå energiinnhaldet i drikka. Vanleg maltodekstrin er òg noko anna enn særskilt framstilte resistente dekstrin som blir selde som fiber; det vanlege ingrediensnamnet dokumenterer ikkje desse fiberfordelane.",
      "evidence": "Battery og Urge oppgir ikkje eigne mengder maltodekstrin. Pulveret i animasjonen er ikkje ein målt porsjon.",
      "sources": [
        {
          "name": "USP · definisjon av maltodekstrin",
          "url": "https://doi.usp.org/USPNF/USPNF_M47125_04_01.html"
        }
      ],
      "reviewed": "30. oktober 2026"
    }
  },
  // ── STOFF 2.31: Guarana seed extract [guarana] ──
  {
    "id": "guarana",
    "name": "Guarana seed extract",
    "category": "Botanical",
    "symbol": "Paullinia cupana",
    // Engelsk fagtekst: kva stoffet er, kroppen, fordelar og ulemper
    "what": "An extract from guarana seeds that contains caffeine.",
    "body": "Its caffeine can make you feel more awake, but can also cause a racing heart or poor sleep. Plant-derived caffeine is still caffeine.",
    "good": "The caffeine in guarana can temporarily help you feel alert. The extract is one way manufacturers add plant-derived ingredients to an energy blend. For understanding what you drink, the total caffeine amount is more useful than the fact that some of it came from a seed.",
    "bad": "Guarana does not make caffeine gentler or protect your heart from too much. It can still contribute to shakiness, anxiety and trouble sleeping. Extract strength varies, so the weight of extract is not the weight of caffeine. Do not add a guessed extra caffeine dose to a manufacturer’s already combined total.",
    "evidence": "Battery’s total includes its extracts. Burn’s declared caffeine total is used once.",
    "sources": [
      {
        "name": "NIH NCCIH · energy drinks and guarana",
        "url": "https://www.nccih.nih.gov/health/energy-drinks"
      }
    ],
    "areas": [
      "Brain",
      "Heart",
      "Sleep"
    ],
    // Same ingrediensartikkel på nynorsk
    "nn": {
      "name": "Guaranafrøekstrakt",
      "category": "Planteekstrakt",
      "symbol": "Paullinia cupana",
      "areas": [
        "Hjernen",
        "Hjartet",
        "Søvn"
      ],
      "what": "Eit ekstrakt frå guaranafrø som inneheld koffein.",
      "body": "Koffeinet kan gjere deg meir vaken, men òg gi rask puls eller dårleg søvn. Koffein frå planter er framleis koffein.",
      "good": "Koffeinet i guarana kan hjelpe deg med å kjenne deg meir vaken ei stund. Ekstraktet er éin måte produsentar tilfører ingrediensar frå planter til ei energiblanding på. For å forstå kva du drikk, er den samla koffeinmengda meir nyttig enn opplysninga om at noko av koffeinet kom frå eit frø.",
      "bad": "Guarana gjer ikkje koffein mildare og vernar ikkje hjartet mot for mykje. Det kan framleis bidra til skjelving, uro og søvnvanskar. Styrken på ekstrakt varierer, så vekta av ekstraktet er ikkje vekta av koffeinet. Ikkje legg til ein gjetta ekstra koffeindose til ein total produsenten allereie har rekna saman.",
      "evidence": "Totalen for Battery omfattar ekstrakta. Den oppgitte koffeintotalen for Burn blir brukt éin gong.",
      "sources": [
        {
          "name": "NIH NCCIH · energidrikkar og guarana",
          "url": "https://www.nccih.nih.gov/health/energy-drinks"
        }
      ],
      "reviewed": "30. oktober 2026"
    }
  },
  // ── STOFF 2.32: Coffee extract [coffee-extract] ──
  {
    "id": "coffee-extract",
    "name": "Coffee extract",
    "category": "Botanical",
    "symbol": "Extracted coffee compounds",
    // Engelsk fagtekst: kva stoffet er, kroppen, fordelar og ulemper
    "what": "Coffee-derived extract used in the Battery recipe.",
    "body": "It can add coffee flavour and caffeine. The caffeine affects alertness and sleep; it is already included in Battery’s total caffeine figure.",
    "good": "Coffee extract lets the maker add coffee-derived flavour and caffeine to a consistent recipe. Its caffeine may help you feel more awake for a while. This does not make the drink the same as a cup of brewed coffee, because the other ingredients and their amounts are different.",
    "bad": "Caffeine from coffee extract still counts towards the amount that can cause poor sleep, nervousness or a pounding heart. The extract does not remove Battery’s sugar or acidity. Its separate amount is not published, so a normal coffee serving cannot be used to guess the dose in this recipe.",
    "evidence": "Battery’s declared 160 mg per 500 ml already includes its coffee and guarana extracts.",
    "sources": [
      {
        "name": "Ringnes · Norwegian Battery ingredient declaration",
        "url": "https://www.ringnes.no/produkter/battery/battery-original/"
      }
    ],
    "areas": [
      "Brain and sleep: caffeine",
      "Coffee flavour"
    ],
    // Same ingrediensartikkel på nynorsk
    "nn": {
      "name": "Kaffiekstrakt",
      "category": "Planteekstrakt",
      "symbol": "Uttrekte kaffistoff",
      "areas": [
        "Hjernen og søvn: koffein",
        "Kaffismak"
      ],
      "what": "Ekstrakt frå kaffi som blir brukt i Battery-oppskrifta.",
      "body": "Det kan tilføre kaffismak og koffein. Koffeinet påverkar kor vaken du er, og søvnen; det er allereie medrekna i den samla koffeinmengda for Battery.",
      "good": "Kaffiekstrakt lèt produsenten tilføre smak og koffein frå kaffi til ei jamn oppskrift. Koffeinet kan hjelpe deg med å kjenne deg meir vaken ei stund. Dette gjer ikkje drikka lik ein kopp trakta kaffi, fordi dei andre ingrediensane og mengdene deira er annleis.",
      "bad": "Koffein frå kaffiekstrakt tel framleis med i mengda som kan gi dårleg søvn, nervøsitet eller eit dunkande hjarte. Ekstraktet fjernar ikkje sukkeret eller surleiken i Battery. Den eigne ekstraktmengda er ikkje oppgitt, så ein vanleg kaffiporsjon kan ikkje brukast til å gjette dosen i denne oppskrifta.",
      "evidence": "Dei oppgitte 160 mg per 500 ml i Battery omfattar allereie kaffi- og guaranaekstrakta.",
      "sources": [
        {
          "name": "Ringnes · norsk ingrediensdeklarasjon for Battery",
          "url": "https://www.ringnes.no/produkter/battery/battery-original/"
        }
      ],
      "reviewed": "30. oktober 2026"
    }
  },
  // ── STOFF 2.33: Sodium benzoate [sodium-benzoate] ──
  {
    "id": "sodium-benzoate",
    "name": "Sodium benzoate",
    "category": "Preservative",
    "symbol": "E211 · C₇H₅NaO₂",
    // Engelsk fagtekst: kva stoffet er, kroppen, fordelar og ulemper
    "what": "A preservative that helps stop spoilage. Its code is E211.",
    "body": "It mainly works in the drink by limiting microbes that could spoil it. It is not there to give your body energy or improve an organ.",
    "good": "Sodium benzoate helps a suitable recipe stay usable during storage. This can reduce spoilage within the product’s intended shelf life. That is a benefit to the drink, rather than an added nutrient. It is useful to separate this job from the caffeine and sugar that can affect how you feel.",
    "bad": "The amount you get from all foods and drinks matters for safety. EFSA found some higher-intake situations that needed attention, especially children often drinking flavoured drinks. This does not show that one serving causes harm. Without the amount used, we cannot work out how close a serving is to an intake limit.",
    "evidence": "A big teaching layer does not mean a big dose. The actual concentration is not disclosed.",
    "sources": [
      {
        "name": "EFSA · benzoic acid and benzoates",
        "url": "https://efsa.onlinelibrary.wiley.com/doi/10.2903/j.efsa.2016.4433"
      }
    ],
    "areas": [
      "Shelf life"
    ],
    // Same ingrediensartikkel på nynorsk
    "nn": {
      "name": "Natriumbenzoat",
      "category": "Konserveringsmiddel",
      "symbol": "E211 · C₇H₅NaO₂",
      "areas": [
        "Haldbarheit"
      ],
      "what": "Eit konserveringsmiddel som bidreg til å hindre at drikka blir skjemd. Koden er E211.",
      "body": "Det verkar hovudsakleg i drikka ved å avgrense mikroorganismar som kan skjemme henne. Det er ikkje der for å gi kroppen energi eller få eit organ til å fungere betre.",
      "good": "Natriumbenzoat hjelper ei eigna oppskrift med å halde seg brukande under lagring. Det kan redusere faren for at produktet blir skjemt innanfor den tiltenkte haldbarheita. Dette er ein fordel for drikka, heller enn eit ekstra næringsstoff. Det er nyttig å skilje denne oppgåva frå koffeinet og sukkeret som kan påverke korleis du kjenner deg.",
      "bad": "Tryggleiken avheng av mengda du får frå all mat og drikke samla. EFSA fann nokre situasjonar med høgare inntak som trong merksemd, særleg blant barn som ofte drakk smaksette drikkar. Det viser ikkje at éin porsjon gjer skade. Utan å vite mengda som er brukt, kan vi ikkje rekne ut kor nær ein porsjon er ei inntaksgrense.",
      "evidence": "Eit stort lag i illustrasjonen tyder ikkje ein stor dose. Den faktiske konsentrasjonen er ikkje oppgitt.",
      "sources": [
        {
          "name": "EFSA · benzosyre og benzoat",
          "url": "https://efsa.onlinelibrary.wiley.com/doi/10.2903/j.efsa.2016.4433"
        }
      ],
      "reviewed": "30. oktober 2026"
    }
  },
  // ── STOFF 2.34: Potassium sorbate [potassium-sorbate] ──
  {
    "id": "potassium-sorbate",
    "name": "Potassium sorbate",
    "category": "Preservative",
    "symbol": "E202 · C₆H₇KO₂",
    // Engelsk fagtekst: kva stoffet er, kroppen, fordelar og ulemper
    "what": "A preservative made from sorbic acid. Its code is E202.",
    "body": "It helps stop a drink spoiling. The word “potassium” does not mean the drink supplies a useful mineral dose from this ingredient.",
    "good": "Potassium sorbate helps control spoilage during a product’s intended storage life. Its job is to help preserve the drink’s quality, rather than wake you up or feed your muscles. A preservative can have a useful role in the bottle without being something your body needs more of.",
    "bad": "Safety depends on how much is used and how much you get overall. EFSA found the estimated intakes in its review were below its safety limit, but that does not mean unlimited amounts are suitable. The amount in these drinks is not published, so a personal intake calculation would be a guess.",
    "evidence": "No organ benefit or separate electrolyte dose is claimed for this preservative.",
    "sources": [
      {
        "name": "EFSA · sorbic acid and potassium sorbate",
        "url": "https://efsa.onlinelibrary.wiley.com/doi/10.2903/j.efsa.2019.5625"
      }
    ],
    "areas": [
      "Shelf life"
    ],
    // Same ingrediensartikkel på nynorsk
    "nn": {
      "name": "Kaliumsorbat",
      "category": "Konserveringsmiddel",
      "symbol": "E202 · C₆H₇KO₂",
      "areas": [
        "Haldbarheit"
      ],
      "what": "Eit konserveringsmiddel laga av sorbinsyre. Koden er E202.",
      "body": "Det bidreg til å hindre at drikka blir skjemd. Ordet «kalium» tyder ikkje at denne ingrediensen gir drikka ein nyttig mineraldose.",
      "good": "Kaliumsorbat bidreg til å halde drikka frå å bli skjemd i den tiltenkte lagringstida. Oppgåva er å bevare kvaliteten på drikka, heller enn å gjere deg vaken eller gi næring til musklane. Eit konserveringsmiddel kan ha ei nyttig oppgåve i flaska utan å vere noko kroppen din treng meir av.",
      "bad": "Tryggleiken avheng av kor mykje som blir brukt, og kor mykje du får i deg totalt. EFSA fann at dei berekna inntaka i gjennomgangen låg under tryggleiksgrensa, men det tyder ikkje at uavgrensa mengder er eigna. Mengda i desse drikkane er ikkje publisert, så ei utrekning av ditt personlege inntak ville vere gjetting.",
      "evidence": "Det blir ikkje hevda at dette konserveringsmiddelet har ein fordel for organa eller gir ein eigen elektrolyttdose.",
      "sources": [
        {
          "name": "EFSA · sorbinsyre og kaliumsorbat",
          "url": "https://efsa.onlinelibrary.wiley.com/doi/10.2903/j.efsa.2019.5625"
        }
      ],
      "reviewed": "30. oktober 2026"
    }
  },
  // ── STOFF 2.35: Sulphite ammonia caramel [caramel] ──
  {
    "id": "caramel",
    "name": "Sulphite ammonia caramel",
    "category": "Colour",
    "symbol": "E150d · class IV caramel",
    // Engelsk fagtekst: kva stoffet er, kroppen, fordelar og ulemper
    "what": "A brown food colour made by controlled processing of carbohydrates. Its code is E150d.",
    "body": "It makes cola and some energy drinks brown. It is not added to help your organs or make you more awake.",
    "good": "Caramel colour gives a drink its familiar brown appearance and helps batches look consistent. This is a visual job. E150d is a particular type of caramel colour, so the name tells you more than simply calling it “caramel”. The colour does not show how much caffeine or sugar the drink contains.",
    "bad": "Colours have no proven need as extra nutrients in these drinks. Safety checks consider the particular colour, substances formed while making it, and how much people consume. An unknown amount cannot be judged from how dark the drink looks. A brown shade is not proof of either a large dose or harm to an organ.",
    "evidence": "E150d has its own safety assessment. It should not be treated as identical to every other caramel colour.",
    "sources": [
      {
        "name": "EFSA · caramel colours and exposure",
        "url": "https://www.efsa.europa.eu/en/press/news/121219"
      }
    ],
    "areas": [
      "Appearance"
    ],
    // Same ingrediensartikkel på nynorsk
    "nn": {
      "name": "Sulfittammoniakkaramell",
      "category": "Fargestoff",
      "symbol": "E150d · karamell i klasse IV",
      "areas": [
        "Utsjånad"
      ],
      "what": "Eit brunt næringsmiddelfargestoff laga ved kontrollert handsaming av karbohydrat. Koden er E150d.",
      "body": "Det gjer cola og nokre energidrikkar brune. Det er ikkje tilsett for å hjelpe organa eller gjere deg meir vaken.",
      "good": "Karamellfarge gir drikka den velkjende brune utsjånaden og hjelper ulike produksjonsparti med å sjå like ut. Dette er ei visuell oppgåve. E150d er ein bestemt type karamellfarge, så namnet fortel meir enn berre «karamell». Fargen viser ikkje kor mykje koffein eller sukker drikka inneheld.",
      "bad": "Det er ikkje påvist at desse drikkane treng fargestoff som ekstra næringsstoff. Tryggleiksvurderingar ser på det bestemte fargestoffet, stoff som blir danna under produksjonen, og kor mykje folk får i seg. Ei ukjend mengd kan ikkje vurderast ut frå kor mørk drikka er. Ein brun fargetone beviser korkje ein stor dose eller skade på eit organ.",
      "evidence": "E150d har si eiga tryggleiksvurdering. Det bør ikkje reknast som identisk med alle andre karamellfargar.",
      "sources": [
        {
          "name": "EFSA · karamellfargar og eksponering",
          "url": "https://www.efsa.europa.eu/en/press/news/121219"
        }
      ],
      "reviewed": "30. oktober 2026"
    }
  },
  // ── STOFF 2.36: Aspartame [aspartame] ──
  {
    "id": "aspartame",
    "name": "Aspartame",
    "category": "Sweetener",
    "symbol": "E951 · C₁₄H₁₈N₂O₅",
    // Engelsk fagtekst: kva stoffet er, kroppen, fordelar og ulemper
    "what": "A strong sweetener used instead of some sugar. Its code is E951.",
    "body": "It makes a drink sweet using a much smaller amount than sugar. People with PKU cannot handle one of its breakdown products, phenylalanine, normally.",
    "good": "Aspartame helps a recipe taste sweet while using less sugar. If a lower-sugar drink replaces a sugary one, it can reduce the sugar and calories you drink. It does not act like caffeine, and its presence does not tell you whether the rest of the drink contains acids or other stimulants.",
    "bad": "People with phenylketonuria, called PKU, need to avoid or limit aspartame because it supplies phenylalanine. For other people, safety assessments consider amount and usual use. A drink with this sweetener is still not a proven weight-loss treatment, and taking out sugar does not automatically protect teeth from the other acids.",
    "evidence": "The PKU warning is a specific known exception. It is different from saying the ingredient harms everyone.",
    "sources": [
      {
        "name": "FDA · aspartame and the PKU exception",
        "url": "https://www.fda.gov/food/food-additives-petitions/aspartame-and-other-sweeteners-food"
      }
    ],
    "areas": [
      "Sweet taste",
      "PKU exception"
    ],
    // Same ingrediensartikkel på nynorsk
    "nn": {
      "name": "Aspartam",
      "category": "Søtstoff",
      "symbol": "E951 · C₁₄H₁₈N₂O₅",
      "areas": [
        "Søt smak",
        "Unntaket ved PKU"
      ],
      "what": "Eit sterkt søtstoff som blir brukt i staden for noko av sukkeret. Koden er E951.",
      "body": "Det gjer drikka søt med ei mykje mindre mengd enn sukker. Personar med PKU kan ikkje omsetje fenylalanin, eit av nedbrytingsprodukta, på vanleg måte.",
      "good": "Aspartam hjelper oppskrifta med å smake søtt med mindre sukker. Dersom ei drikke med mindre sukker erstattar ei sukkerhaldig drikke, kan det redusere sukkeret og kaloriane du drikk. Det verkar ikkje som koffein, og innhaldet fortel ikkje om resten av drikka inneheld syrer eller andre stimulerande stoff.",
      "bad": "Personar med fenylketonuri, kalla PKU, må unngå eller avgrense aspartam fordi det gir fenylalanin. For andre personar tek tryggleiksvurderingar omsyn til mengd og vanleg bruk. Ei drikke med dette søtstoffet er framleis ikkje ei dokumentert behandling for vektnedgang, og det å fjerne sukker vernar ikkje automatisk tennene mot dei andre syrene.",
      "evidence": "PKU-åtvaringa er eit bestemt, kjent unntak. Det er noko anna enn å seie at ingrediensen skadar alle.",
      "sources": [
        {
          "name": "FDA · aspartam og unntaket ved PKU",
          "url": "https://www.fda.gov/food/food-additives-petitions/aspartame-and-other-sweeteners-food"
        }
      ],
      "reviewed": "30. oktober 2026"
    }
  },
  // ── STOFF 2.37: Acesulfame potassium [acesulfame-k] ──
  {
    "id": "acesulfame-k",
    "name": "Acesulfame potassium",
    "category": "Sweetener",
    "symbol": "E950 · Ace-K",
    // Engelsk fagtekst: kva stoffet er, kroppen, fordelar og ulemper
    "what": "An intense sweetener also called Ace-K or E950.",
    "body": "It provides a sweet taste without the same amount of sugar. It is not a stimulant and does not provide a useful potassium supplement dose.",
    "good": "Ace-K can help make a lower-sugar drink taste sweet. Makers often mix it with another sweetener, and sometimes with sugar too. Norwegian Pepsi is one example with both sugar and sweeteners. Whether it reduces your sugar intake depends on the whole recipe and what you drink instead.",
    "bad": "A drink with Ace-K can still contain sugar, caffeine or acids. Those can still affect teeth, sleep and how your heart feels. Being lower in sugar is not the same as having a proven long-term weight benefit, and sweetness alone cannot tell you how much sweetener was used.",
    "evidence": "EFSA reviewed Ace-K in 2025. Safety limits are not targets to aim for.",
    "sources": [
      {
        "name": "EFSA · 2025 acesulfame K evaluation",
        "url": "https://www.efsa.europa.eu/en/plain-language-summary/re-evaluation-acesulfame-k-e-950-food-additive"
      }
    ],
    "areas": [
      "Sweet taste",
      "Lower sugar"
    ],
    // Same ingrediensartikkel på nynorsk
    "nn": {
      "name": "Acesulfamkalium",
      "category": "Søtstoff",
      "symbol": "E950 · Ace-K",
      "areas": [
        "Søt smak",
        "Mindre sukker"
      ],
      "what": "Eit intenst søtstoff som òg blir kalla Ace-K eller E950.",
      "body": "Det gir søt smak utan den same mengda sukker. Det er ikkje eit stimulerande stoff og gir ikkje ein nyttig dose som kaliumtilskot.",
      "good": "Ace-K kan hjelpe ei drikke med mindre sukker til å smake søtt. Produsentar blandar det ofte med eit anna søtstoff, og somme gonger òg med sukker. Norsk Pepsi er eit døme med både sukker og søtstoff. Om det reduserer sukkerinntaket ditt, avheng av heile oppskrifta og kva du drikk i staden.",
      "bad": "Ei drikke med Ace-K kan framleis innehalde sukker, koffein eller syrer. Desse kan framleis påverke tennene, søvnen og korleis hjartet kjennest. Mindre sukker er ikkje det same som ein dokumentert fordel for vekta på lang sikt, og søtsmaken åleine kan ikkje fortelje kor mykje søtstoff som er brukt.",
      "evidence": "EFSA vurderte Ace-K på nytt i 2025. Tryggleiksgrenser er ikkje mål du skal sikte mot.",
      "sources": [
        {
          "name": "EFSA · vurdering av acesulfam K frå 2025",
          "url": "https://www.efsa.europa.eu/en/plain-language-summary/re-evaluation-acesulfame-k-e-950-food-additive"
        }
      ],
      "reviewed": "30. oktober 2026"
    }
  },
  // ── STOFF 2.38: Gum arabic · acacia gum [gum-arabic] ──
  {
    "id": "gum-arabic",
    "name": "Gum arabic · acacia gum",
    "category": "Stabiliser",
    "symbol": "E414 · a polysaccharide",
    // Engelsk fagtekst: kva stoffet er, kroppen, fordelar og ulemper
    "what": "A plant-derived gum that helps ingredients stay mixed. Its code is E414.",
    "body": "Its main job here is to keep parts of the drink from separating. This small, unreported amount is not a proven treatment for your gut.",
    "good": "Gum arabic helps keep flavour ingredients evenly spread through the liquid. That helps a drink look and feel consistent during storage. It is a type of complex carbohydrate, but its use as a stabiliser does not prove that the bottle gives the same digestive benefits as a measured fibre supplement.",
    "bad": "Do not assume that an unknown small amount will improve digestion just because some fibres can do that. Studies of concentrated supplements use different doses. EFSA found no safety concern for the ordinary food-additive intakes it assessed; that is not a claim that every possible amount has been tested.",
    "evidence": "No separate gut-health benefit or measured fibre amount is assigned to Powerade from E414.",
    "sources": [
      {
        "name": "EFSA · acacia gum re-evaluation",
        "url": "https://efsa.onlinelibrary.wiley.com/doi/10.2903/j.efsa.2017.4741"
      }
    ],
    "areas": [
      "Recipe stability",
      "Gut: amount matters"
    ],
    // Same ingrediensartikkel på nynorsk
    "nn": {
      "name": "Gummi arabikum · akasiegummi",
      "category": "Stabilisator",
      "symbol": "E414 · eit polysakkarid",
      "areas": [
        "Stabilitet i oppskrifta",
        "Tarm: mengda er viktig"
      ],
      "what": "Ein plantebasert gummi som hjelper ingrediensane med å halde seg blanda. Koden er E414.",
      "body": "Hovudoppgåva her er å hindre at delar av drikka skil seg. Denne vesle, ikkje oppgitte mengda er ikkje ei dokumentert behandling for tarmen.",
      "good": "Gummi arabikum hjelper smaksingrediensar med å halde seg jamt fordelte i væska. Det hjelper drikka med å ha jamn utsjånad og konsistens under lagring. Det er ein type komplekst karbohydrat, men bruk som stabilisator beviser ikkje at flaska gir dei same fordelane for fordøyinga som eit fibertilskot med målt dose.",
      "bad": "Ikkje gå ut frå at ei ukjend, lita mengd vil betre fordøyinga berre fordi somme typar fiber kan gjere det. Studiar av konsentrerte tilskot bruker andre dosar. EFSA fann ingen grunn til uro for tryggleiken ved dei vanlege inntaka som tilsetjingsstoff dei vurderte. Det er ikkje ein påstand om at alle moglege mengder er testa.",
      "evidence": "E414 blir ikkje brukt til å tilordne Powerade ein eigen fordel for tarmhelsa eller ei målt fibermengd.",
      "sources": [
        {
          "name": "EFSA · ny vurdering av akasiegummi",
          "url": "https://efsa.onlinelibrary.wiley.com/doi/10.2903/j.efsa.2017.4741"
        }
      ],
      "reviewed": "30. oktober 2026"
    }
  },
  // ── STOFF 2.39: Glycerol esters of wood rosins [wood-rosin-esters] ──
  {
    "id": "wood-rosin-esters",
    "name": "Glycerol esters of wood rosins",
    "category": "Stabiliser",
    "symbol": "E445 · ester gum",
    // Engelsk fagtekst: kva stoffet er, kroppen, fordelar og ulemper
    "what": "A processed food ingredient that helps flavour components stay mixed. Its code is E445.",
    "body": "It mainly works in the bottle, helping parts of the recipe stay together. There is no proven body or organ benefit from its use in this drink.",
    "good": "E445 helps keep some flavour ingredients from separating during storage. That makes the drink more consistent from one sip to the next. The food-grade ingredient has been processed for this job; it is different from raw wood or household resin. Its name describes its source and processing, rather than a nutritional benefit.",
    "bad": "Safety depends on what the mixture contains, its purity and the amount used. EFSA’s review discussed gaps in the available evidence, so “natural” is not a complete safety answer. The dose in this bottle is not given, and we cannot turn its complicated name into a claim that it damages a particular organ.",
    "evidence": "The honest answer is a known recipe role and no proven extra body benefit. An unknown dose also limits a personal risk estimate.",
    "sources": [
      {
        "name": "EFSA · glycerol esters of wood rosin",
        "url": "https://efsa.onlinelibrary.wiley.com/doi/10.2903/j.efsa.2018.5370"
      }
    ],
    "areas": [
      "Recipe stability"
    ],
    // Same ingrediensartikkel på nynorsk
    "nn": {
      "name": "Glyserolesterar av treharpiks",
      "category": "Stabilisator",
      "symbol": "E445 · estergummi",
      "areas": [
        "Stabilitet i oppskrifta"
      ],
      "what": "Ein handsama næringsmiddelingrediens som hjelper smakskomponentar med å halde seg blanda. Koden er E445.",
      "body": "Han verkar hovudsakleg i flaska ved å hjelpe delar av oppskrifta med å halde saman. Det er ikkje påvist nokon fordel for kroppen eller organa frå bruken i denne drikka.",
      "good": "E445 hjelper somme smaksingrediensar med å unngå å skilje seg under lagring. Det gir ei jamnare drikke frå slurk til slurk. Ingrediensen er handsama for bruk i mat og denne oppgåva. Han er noko anna enn ubehandla tre eller harpiks til hushaldsbruk. Namnet skildrar opphavet og handsaminga, heller enn ein ernæringsfordel.",
      "bad": "Tryggleiken avheng av kva blandinga inneheld, kor rein ho er, og mengda som blir brukt. Gjennomgangen til EFSA drøfta manglar i den tilgjengelege dokumentasjonen, så «naturleg» er ikkje eit fullstendig svar om tryggleik. Dosen i denne flaska er ikkje oppgitt, og vi kan ikkje gjere det kompliserte namnet til ein påstand om at stoffet skadar eit bestemt organ.",
      "evidence": "Det ærlege svaret er ei kjend oppgåve i oppskrifta og ingen dokumentert ekstra fordel for kroppen. Ein ukjend dose avgrensar òg ei personleg risikovurdering.",
      "sources": [
        {
          "name": "EFSA · glyserolesterar av treharpiks",
          "url": "https://efsa.onlinelibrary.wiley.com/doi/10.2903/j.efsa.2018.5370"
        }
      ],
      "reviewed": "30. oktober 2026"
    }
  },
  // ── STOFF 2.40: Brilliant Blue FCF [brilliant-blue] ──
  {
    "id": "brilliant-blue",
    "name": "Brilliant Blue FCF",
    "category": "Colour",
    "symbol": "E133 · a food colour",
    // Engelsk fagtekst: kva stoffet er, kroppen, fordelar og ulemper
    "what": "The blue food colouring in this Powerade recipe. Its code is E133.",
    "body": "It makes the drink blue. It does not give your muscles electrolytes or stimulate your brain.",
    "good": "Brilliant Blue gives Powerade a recognisable, consistent colour. A small amount of a strong colour can be easy to see, so the shade is not a dose measurement. This is an appearance benefit for the product, rather than evidence that the colouring improves hydration or helps an organ work better.",
    "bad": "Food-colour safety checks consider the particular substance and how much people consume. JECFA found no health concern at the intakes it reviewed, but an unreported amount still cannot be used to calculate your own intake. A bright blue drink is not automatically healthier or more harmful than a clear one.",
    "evidence": "E133 is the actual blue colour. The other temporary layer colours in the animation are just visual labels.",
    "sources": [
      {
        "name": "WHO / JECFA · Brilliant Blue FCF",
        "url": "https://apps.who.int/food-additives-contaminants-jecfa-database/Home/Chemical/3309"
      }
    ],
    "areas": [
      "Appearance"
    ],
    // Same ingrediensartikkel på nynorsk
    "nn": {
      "name": "Briljantblå FCF",
      "category": "Fargestoff",
      "symbol": "E133 · eit næringsmiddelfargestoff",
      "areas": [
        "Utsjånad"
      ],
      "what": "Det blå næringsmiddelfargestoffet i denne Powerade-oppskrifta. Koden er E133.",
      "body": "Det gjer drikka blå. Det gir ikkje musklane elektrolyttar og stimulerer ikkje hjernen.",
      "good": "Briljantblå gir Powerade ein attkjenneleg og jamn farge. Ei lita mengd av ein sterk farge kan vere lett å sjå, så fargetonen er ikkje eit mål på dosen. Dette er ein fordel for utsjånaden til produktet, heller enn dokumentasjon på at fargestoffet betrar væskebalansen eller hjelper eit organ med å fungere betre.",
      "bad": "Tryggleiksvurderingar av næringsmiddelfargar ser på det bestemte stoffet og kor mykje folk får i seg. JECFA fann ingen grunn til helseuro ved inntaka dei vurderte, men ei mengd som ikkje er oppgitt, kan framleis ikkje brukast til å rekne ut ditt eige inntak. Ei knallblå drikke er ikkje automatisk sunnare eller meir skadeleg enn ei klar drikke.",
      "evidence": "E133 er det faktiske blå fargestoffet. Dei andre, mellombelse lagfargane i animasjonen er berre visuelle merkelappar.",
      "sources": [
        {
          "name": "WHO / JECFA · Briljantblå FCF",
          "url": "https://apps.who.int/food-additives-contaminants-jecfa-database/Home/Chemical/3309"
        }
      ],
      "reviewed": "30. oktober 2026"
    }
  },
  // ── STOFF 2.41: Beta-carotene [beta-carotene] ──
  {
    "id": "beta-carotene",
    "name": "Beta-carotene",
    "category": "Colour",
    "symbol": "E160a · a carotenoid",
    // Engelsk fagtekst: kva stoffet er, kroppen, fordelar og ulemper
    "what": "An orange-yellow colour that the body can also turn into vitamin A. Its code is E160a.",
    "body": "Vitamin A supports normal sight and immune function. But a little beta-carotene used for colour is not the same as a declared useful vitamin dose.",
    "good": "Beta-carotene gives a drink an orange-yellow colour. Your body can also use it to make vitamin A, which matters for normal vision and immune function. These are different jobs: the colouring listed in Urge does not tell us how much vitamin A the drink can supply.",
    "bad": "High-dose beta-carotene supplements have increased lung-cancer risk in some people who smoke, used to smoke, or were exposed to asbestos. Those study doses are different from an unknown colouring amount in a soft drink. The lesson is that more of a vitamin-related substance is not automatically better for your body.",
    "evidence": "The supplement risk must not be directly applied to a small colouring dose. No vitamin A amount is invented for Urge.",
    "sources": [
      {
        "name": "NIH ODS · vitamin A, carotenoids and high-dose risks",
        "url": "https://ods.od.nih.gov/factsheets/VitaminA-Consumer/"
      }
    ],
    "areas": [
      "Vitamin A precursor",
      "Appearance"
    ],
    // Same ingrediensartikkel på nynorsk
    "nn": {
      "name": "Betakaroten",
      "category": "Fargestoff",
      "symbol": "E160a · eit karotenoid",
      "areas": [
        "Forstadium til vitamin A",
        "Utsjånad"
      ],
      "what": "Eit oransjegult fargestoff som kroppen òg kan omdanne til vitamin A. Koden er E160a.",
      "body": "Vitamin A støttar normalt syn og immunforsvar. Men litt betakaroten brukt som fargestoff er ikkje det same som ein oppgitt, nyttig vitamindose.",
      "good": "Betakaroten gir drikka ein oransjegul farge. Kroppen kan òg bruke det til å lage vitamin A, som er viktig for normalt syn og immunforsvar. Dette er ulike oppgåver: fargestoffet som er oppgitt i Urge, fortel ikkje kor mykje vitamin A drikka kan gi.",
      "bad": "Tilskot med høge dosar betakaroten har auka risikoen for lungekreft hos somme som røykjer, har røykt tidlegare eller har vore utsette for asbest. Dosane i desse studiane er noko anna enn ei ukjend fargestoffmengd i brus. Lærdomen er at meir av eit vitaminrelatert stoff ikkje automatisk er betre for kroppen.",
      "evidence": "Risikoen frå tilskot må ikkje overførast direkte til ein liten fargestoffdose. Vi finn ikkje på ei vitamin A-mengd for Urge.",
      "sources": [
        {
          "name": "NIH ODS · vitamin A, karotenoid og risiko ved høge dosar",
          "url": "https://ods.od.nih.gov/factsheets/VitaminA-Consumer/"
        }
      ],
      "reviewed": "30. oktober 2026"
    }
  },
  // ── STOFF 2.42: Locust bean gum [locust-bean-gum] ──
  {
    "id": "locust-bean-gum",
    "name": "Locust bean gum",
    "category": "Stabiliser",
    "symbol": "E410 · a galactomannan",
    // Engelsk fagtekst: kva stoffet er, kroppen, fordelar og ulemper
    "what": "A gum from carob seeds that helps keep the recipe stable. Its code is E410.",
    "body": "It mainly changes how the drink stays mixed and feels in your mouth. It is not a stimulant or a proven organ-boosting ingredient.",
    "good": "Locust bean gum helps keep ingredients evenly spread and gives the maker control over texture. Its long carbohydrate chains can affect a recipe at a small amount. This explains why it is used, without assuming that a little stabiliser provides a useful fibre dose or improves the way your gut works.",
    "bad": "The effect depends on amount and use. A small recipe ingredient is different from a concentrated supplement or thickener used for a medical purpose. You cannot transfer results between those uses without checking the dose. The enlarged layer in this animation is not enough information to predict digestive effects.",
    "evidence": "It is listed in Urge Original. Another citrus drink should not inherit the same stabiliser unless its own label lists it.",
    "sources": [
      {
        "name": "EFSA · locust bean gum re-evaluation",
        "url": "https://efsa.onlinelibrary.wiley.com/doi/10.2903/j.efsa.2017.4646"
      }
    ],
    "areas": [
      "Recipe stability"
    ],
    // Same ingrediensartikkel på nynorsk
    "nn": {
      "name": "Johannesbrødkjernemjøl",
      "category": "Stabilisator",
      "symbol": "E410 · eit galaktomannan",
      "areas": [
        "Stabilitet i oppskrifta"
      ],
      "what": "Ein gummi frå johannesbrødfrø som hjelper oppskrifta med å halde seg stabil. Koden er E410.",
      "body": "Det påverkar hovudsakleg korleis drikka held seg blanda og kjennest i munnen. Det er ikkje eit stimulerande stoff eller ein ingrediens som dokumentert får organa til å fungere betre.",
      "good": "Johannesbrødkjernemjøl hjelper ingrediensane med å halde seg jamt fordelte og gir produsenten kontroll over konsistensen. Dei lange karbohydratkjedene kan påverke oppskrifta sjølv i ei lita mengd. Det forklarer kvifor det blir brukt, utan å gå ut frå at litt stabilisator gir ein nyttig fiberdose eller betrar tarmfunksjonen.",
      "bad": "Effekten avheng av mengd og bruk. Ei lita mengd i oppskrifta er noko anna enn eit konsentrert tilskot eller eit fortjukkingsmiddel brukt til medisinske føremål. Du kan ikkje overføre resultat mellom desse bruksområda utan å kontrollere dosen. Det forstørra laget i animasjonen gir ikkje nok informasjon til å føreseie verknader på fordøyinga.",
      "evidence": "Det er oppgitt i Urge Original. Ein annan sitrusdrikk skal ikkje få den same stabilisatoren med mindre han står på etiketten til den drikka.",
      "sources": [
        {
          "name": "EFSA · ny vurdering av johannesbrødkjernemjøl",
          "url": "https://efsa.onlinelibrary.wiley.com/doi/10.2903/j.efsa.2017.4646"
        }
      ],
      "reviewed": "30. oktober 2026"
    }
  },
  // ── STOFF 2.43: Orange juice from concentrate [orange-concentrate] ──
  {
    "id": "orange-concentrate",
    "name": "Orange juice from concentrate",
    "category": "Fruit ingredient",
    "symbol": "A reconstituted fruit ingredient",
    // Engelsk fagtekst: kva stoffet er, kroppen, fordelar og ulemper
    "what": "Concentrated orange juice used as part of a soft-drink recipe.",
    "body": "It adds fruit taste and some fruit sugars and acids. A small amount in soda does not give the same food structure as eating an orange.",
    "good": "Orange concentrate contributes real citrus flavour and some naturally occurring fruit substances to the recipe. That helps explain the taste of Urge. It is a mixture rather than one chemical, but the unknown amount does not prove the bottle supplies a useful fruit portion or a useful vitamin C dose.",
    "bad": "Sugars from juice still count as free sugars. A soda containing some orange concentrate is different from 100% juice and from whole fruit. The word “orange” does not remove the drink’s total sugar, caffeine or acidity, or establish that it helps your immune system.",
    "evidence": "The manufacturer does not publish the concentrate percentage on the source page, so this site does not guess it.",
    "sources": [
      {
        "name": "NHS · juice sugars and whole-fruit context",
        "url": "https://www.nhs.uk/live-well/eat-well/food-types/how-does-sugar-in-our-diet-affect-our-health/"
      }
    ],
    "areas": [
      "Fruit flavour",
      "Free sugars"
    ],
    // Same ingrediensartikkel på nynorsk
    "nn": {
      "name": "Appelsinjuice frå konsentrat",
      "category": "Fruktingrediens",
      "symbol": "Ein rekonstituert fruktingrediens",
      "areas": [
        "Fruktsmak",
        "Fritt sukker"
      ],
      "what": "Konsentrert appelsinjuice brukt som ein del av ei brusoppskrift.",
      "body": "Han gir fruktsmak og noko fruktsukker og fruktsyrer. Ei lita mengd i brus gir ikkje den same matstrukturen som å ete ein appelsin.",
      "good": "Appelsinkonsentrat gir oppskrifta ekte sitrussmak og nokre naturlege stoff frå frukta. Det er med på å forklare smaken til Urge. Det er ei blanding heller enn eitt kjemisk stoff, men den ukjende mengda beviser ikkje at flaska gir ein nyttig fruktporsjon eller ein nyttig dose vitamin C.",
      "bad": "Sukker frå juice blir framleis rekna som fritt sukker. Brus som inneheld noko appelsinkonsentrat, er noko anna enn 100 % juice og heil frukt. Ordet «appelsin» fjernar ikkje det samla sukkerinnhaldet, koffeinet eller surleiken i drikka og viser heller ikkje at ho hjelper immunforsvaret.",
      "evidence": "Produsenten publiserer ikkje prosentdelen konsentrat på kjeldesida, så denne nettsida gjettar ikkje på han.",
      "sources": [
        {
          "name": "NHS · juicesukker og samanhengen med heil frukt",
          "url": "https://www.nhs.uk/live-well/eat-well/food-types/how-does-sugar-in-our-diet-affect-our-health/"
        }
      ],
      "reviewed": "30. oktober 2026"
    }
  },
  // ── STOFF 2.44: Low-fat milk [milk] ──
  {
    "id": "milk",
    "name": "Low-fat milk",
    "category": "Dairy",
    "symbol": "Protein · lactose · calcium",
    "areas": [
      "Bones",
      "Muscles",
      "Digestion"
    ],
    // Engelsk fagtekst: kva stoffet er, kroppen, fordelar og ulemper
    "what": "Milk is a mixture of water, milk sugar, protein, fat and minerals.",
    "body": "Your gut breaks down milk protein and lactose. Calcium supports bones and teeth; the proteins supply building blocks used throughout your body.",
    "good": "Milk can contribute protein and calcium to your diet. Protein helps your body maintain and repair tissues, including muscle. Calcium helps keep bones and teeth strong. These nutrients are already in the milk; they are not extra ingredients poured in separately during this animation.",
    "bad": "Milk allergy and lactose intolerance are different. An allergy involves a reaction to milk proteins. Lactose intolerance means your gut struggles to digest milk sugar and can cause wind, bloating or diarrhoea. Chocolate milk can also contain added sugar, so its milk content does not describe the whole drink.",
    "evidence": "Both dairy drinks in this collection contain milk. Low-fat milk still contains lactose and milk proteins. The nutrient amount depends on the actual product label.",
    "sources": [
      {
        "name": "NHS · dairy nutrients and milk allergy",
        "url": "https://www.nhs.uk/Live-well/eat-well/food-types/milk-and-dairy-nutrition/"
      },
      {
        "name": "NHS · lactose intolerance",
        "url": "https://www.nhs.uk/conditions/lactose-intolerance/"
      }
    ],
    "reviewed": "3 November 2026",
    // Same ingrediensartikkel på nynorsk
    "nn": {
      "name": "Lettmjølk",
      "category": "Mjølkeprodukt",
      "symbol": "Protein · laktose · kalsium",
      "areas": [
        "Skjelett",
        "Musklane",
        "Fordøying"
      ],
      "what": "Mjølk er ei blanding av vatn, mjølkesukker, protein, feitt og mineral.",
      "body": "Tarmen bryt ned mjølkeprotein og laktose. Kalsium støttar skjelettet og tennene, medan proteina gir byggjesteinar som blir brukte i heile kroppen.",
      "good": "Mjølk kan bidra med protein og kalsium i kosthaldet. Protein hjelper kroppen med å halde ved like og reparere vev, mellom anna musklar. Kalsium hjelper med å halde skjelettet og tennene sterke. Desse næringsstoffa finst allereie i mjølka. Dei er ikkje ekstra ingrediensar som blir helte oppi kvar for seg i animasjonen.",
      "bad": "Mjølkeallergi og laktoseintoleranse er ulike tilstandar. Ein allergi inneber ein reaksjon på mjølkeproteina. Laktoseintoleranse tyder at tarmen strevar med å fordøye mjølkesukker, og kan gi luft, oppblåst mage eller diaré. Sjokolademjølk kan òg innehalde tilsett sukker, så mjølkeinnhaldet skildrar ikkje heile drikka.",
      "evidence": "Begge mjølkedrikkane i denne samlinga inneheld mjølk. Lettmjølk inneheld framleis laktose og mjølkeprotein. Næringsmengda avheng av etiketten til det faktiske produktet.",
      "sources": [
        {
          "name": "NHS · næringsstoff i mjølkeprodukt og mjølkeallergi",
          "url": "https://www.nhs.uk/Live-well/eat-well/food-types/milk-and-dairy-nutrition/"
        },
        {
          "name": "NHS · laktoseintoleranse",
          "url": "https://www.nhs.uk/conditions/lactose-intolerance/"
        }
      ],
      "reviewed": "3. november 2026"
    }
  },
  // ── STOFF 2.45: Cocoa powder [cocoa] ──
  {
    "id": "cocoa",
    "name": "Cocoa powder",
    "category": "Plant ingredient",
    "symbol": "Chocolate colour + flavour",
    "areas": [
      "Taste",
      "Sleep"
    ],
    // Engelsk fagtekst: kva stoffet er, kroppen, fordelar og ulemper
    "what": "Powder made from cocoa beans, used for chocolate flavour and colour.",
    "body": "Cocoa brings flavour compounds and can naturally contain caffeine. A chocolate flavour does not tell you the amount of caffeine or establish a health benefit.",
    "good": "Cocoa makes the milk taste and look like chocolate. It lets you understand where the brown colour comes from, without assuming a separate brown food colouring is present. Litago lists 2% cocoa by weight, so it is a named part of the recipe rather than an unexplained flavour blend.",
    "bad": "Cocoa does not cancel the added sugar in a chocolate drink. It can contain caffeine, so chocolate milk should not automatically be described as having none. The amount in this carton is not published here, and the cocoa percentage alone cannot tell you whether you would notice a stimulant effect.",
    "evidence": "This guide does not claim that this drink improves heart health. Findings about particular cocoa preparations cannot establish benefits for a sweetened milk drink.",
    "sources": [
      {
        "name": "EFSA · caffeine in foods",
        "url": "https://www.efsa.europa.eu/en/topics/topic/caffeine"
      },
      {
        "name": "TINE · Litago recipe",
        "url": "https://www.tine.no/merkevarer/litago/produkter/litago-original-sjokolademelk-05-liter"
      }
    ],
    "reviewed": "3 November 2026",
    // Same ingrediensartikkel på nynorsk
    "nn": {
      "name": "Kakaopulver",
      "category": "Planteingrediens",
      "symbol": "Sjokoladefarge + smak",
      "areas": [
        "Smak",
        "Søvn"
      ],
      "what": "Pulver laga av kakaobønner, brukt for sjokoladesmak og farge.",
      "body": "Kakao gir smaksstoff og kan naturleg innehalde koffein. Sjokoladesmak fortel ikkje kor mykje koffein det er, og dokumenterer heller ikkje ein helsefordel.",
      "good": "Kakao får mjølka til å smake og sjå ut som sjokolade. Det hjelper deg med å forstå kvar brunfargen kjem frå, utan å gå ut frå at eit eige brunt næringsmiddelfargestoff er tilsett. Litago oppgir 2 % kakao etter vekt, så dette er ein namngitt del av oppskrifta, heller enn ei uforklart smaksblanding.",
      "bad": "Kakao opphevar ikkje det tilsette sukkeret i ei sjokoladedrikke. Kakao kan innehalde koffein, så sjokolademjølk bør ikkje automatisk omtalast som koffeinfri. Mengda i denne kartongen er ikkje publisert her, og kakaoprosenten åleine kan ikkje fortelje om du ville merke ein stimulerande effekt.",
      "evidence": "Denne forklaringa hevdar ikkje at drikka betrar hjartehelsa. Funn om bestemte kakaoprodukt kan ikkje dokumentere fordelar for ei søta mjølkedrikke.",
      "sources": [
        {
          "name": "EFSA · koffein i matvarer",
          "url": "https://www.efsa.europa.eu/en/topics/topic/caffeine"
        },
        {
          "name": "TINE · oppskrifta til Litago",
          "url": "https://www.tine.no/merkevarer/litago/produkter/litago-original-sjokolademelk-05-liter"
        }
      ],
      "reviewed": "3. november 2026"
    }
  },
  // ── STOFF 2.46: Whey powder [whey-powder] ──
  {
    "id": "whey-powder",
    "name": "Whey powder",
    "category": "Dairy",
    "symbol": "Milk-derived solids",
    "areas": [
      "Muscles",
      "Digestion"
    ],
    // Engelsk fagtekst: kva stoffet er, kroppen, fordelar og ulemper
    "what": "A dried ingredient made from the liquid part of milk left during cheesemaking.",
    "body": "It adds milk solids, which can include lactose and protein. Whey powder is not automatically the same as a concentrated sports protein supplement.",
    "good": "Whey powder helps build the milk flavour and body of an iced coffee. Its milk proteins contribute to the protein already counted in the nutrition panel. Your body can use digested protein to maintain and repair tissues. The recipe does not disclose a separate whey dose or protein contribution.",
    "bad": "Whey is a milk ingredient, so it matters to people with milk allergy. It can also contain lactose, which may cause gut symptoms in people who do not digest lactose well. Adding whey does not remove the sugar or caffeine elsewhere in the same drink.",
    "evidence": "Do not transfer claims about high-dose whey protein supplements to an undisclosed amount of ordinary whey powder in iced coffee.",
    "sources": [
      {
        "name": "NHS · milk proteins and nutrients",
        "url": "https://www.nhs.uk/Live-well/eat-well/food-types/milk-and-dairy-nutrition/"
      },
      {
        "name": "NHS · lactose symptoms",
        "url": "https://www.nhs.uk/conditions/lactose-intolerance/"
      }
    ],
    "reviewed": "3 November 2026",
    // Same ingrediensartikkel på nynorsk
    "nn": {
      "name": "Mysepulver",
      "category": "Mjølkeprodukt",
      "symbol": "Tørrstoff frå mjølk",
      "areas": [
        "Musklane",
        "Fordøying"
      ],
      "what": "Ein tørka ingrediens laga av væskedelen av mjølk som er att etter osteproduksjon.",
      "body": "Det tilfører mjølketørrstoff, som kan omfatte laktose og protein. Mysepulver er ikkje automatisk det same som eit konsentrert proteintilskot for trening.",
      "good": "Mysepulver er med på å gi iskaffi mjølkesmak og fylde. Mjølkeproteina i pulveret bidreg til proteinet som allereie er med i næringsoversikta. Kroppen kan bruke fordøyd protein til å halde ved like og reparere vev. Oppskrifta oppgir ikkje ein eigen mysedose eller kor mykje protein mysa bidreg med.",
      "bad": "Myse er ein mjølkeingrediens og er difor relevant for personar med mjølkeallergi. Ho kan òg innehalde laktose, som kan gi tarmplager hos personar som ikkje fordøyer laktose godt. Tilsetjing av myse fjernar ikkje sukkeret eller koffeinet andre stader i den same drikka.",
      "evidence": "Ikkje overfør påstandar om myseproteintilskot med høge dosar til ei ikkje oppgitt mengd vanleg mysepulver i iskaffi.",
      "sources": [
        {
          "name": "NHS · mjølkeprotein og næringsstoff",
          "url": "https://www.nhs.uk/Live-well/eat-well/food-types/milk-and-dairy-nutrition/"
        },
        {
          "name": "NHS · symptom på laktoseintoleranse",
          "url": "https://www.nhs.uk/conditions/lactose-intolerance/"
        }
      ],
      "reviewed": "3. november 2026"
    }
  },
  // ── STOFF 2.47: Gellan gum [gellan-gum] ──
  {
    "id": "gellan-gum",
    "name": "Gellan gum",
    "category": "Stabiliser",
    "symbol": "E418",
    "areas": [
      "Drink texture"
    ],
    // Engelsk fagtekst: kva stoffet er, kroppen, fordelar og ulemper
    "what": "A stabiliser made by fermentation that helps keep a drink evenly mixed.",
    "body": "Its main job is in the carton: it helps control texture and keep particles suspended. It is not added to stimulate your organs.",
    "good": "Gellan gum helps stop cocoa or other particles settling into a thick layer at the bottom. That makes the texture more consistent from one sip to the next. This is a useful effect in the drink, rather than evidence that it improves your muscles, brain or digestion.",
    "bad": "There is no established extra body benefit from the small, undisclosed amount in this carton. EFSA found no need for a numerical daily limit at the uses it assessed, but that does not mean unlimited amounts have been tested. The name alone is not evidence that it harms your gut.",
    "evidence": "EFSA’s assessment concerns the reported food uses and exposure levels. This animation enlarges the stabiliser layer to make it visible; it does not show its real concentration.",
    "sources": [
      {
        "name": "EFSA · gellan gum assessment",
        "url": "https://efsa.onlinelibrary.wiley.com/doi/abs/10.2903/j.efsa.2018.5296"
      }
    ],
    "reviewed": "3 November 2026",
    // Same ingrediensartikkel på nynorsk
    "nn": {
      "name": "Gellangummi",
      "category": "Stabilisator",
      "symbol": "E418",
      "areas": [
        "Konsistensen til drikka"
      ],
      "what": "Ein stabilisator laga ved fermentering som hjelper drikka med å halde seg jamt blanda.",
      "body": "Hovudoppgåva er i kartongen: han hjelper med å styre konsistensen og halde partiklar svevande i væska. Han er ikkje tilsett for å stimulere organa.",
      "good": "Gellangummi bidreg til å hindre at kakao eller andre partiklar søkk ned og dannar eit tjukt lag på botnen. Det gir ein jamnare konsistens frå slurk til slurk. Dette er ein nyttig effekt i drikka, heller enn dokumentasjon på at han betrar musklane, hjernen eller fordøyinga.",
      "bad": "Det er ikkje påvist nokon ekstra fordel for kroppen frå den vesle, ikkje oppgitte mengda i denne kartongen. EFSA fann ikkje behov for ei talfesta dagleg grense ved bruksområda dei vurderte, men det tyder ikkje at uavgrensa mengder er testa. Namnet åleine er ikkje dokumentasjon på at han skadar tarmen.",
      "evidence": "Vurderinga til EFSA gjeld dei rapporterte bruksområda i mat og eksponeringsnivåa. Denne animasjonen forstørrar stabilisatorlaget for å gjere det synleg. Han viser ikkje den verkelege konsentrasjonen.",
      "sources": [
        {
          "name": "EFSA · vurdering av gellangummi",
          "url": "https://efsa.onlinelibrary.wiley.com/doi/abs/10.2903/j.efsa.2018.5296"
        }
      ],
      "reviewed": "3. november 2026"
    }
  },
  // ── STOFF 2.48: Guar gum [guar-gum] ──
  {
    "id": "guar-gum",
    "name": "Guar gum",
    "category": "Stabiliser",
    "symbol": "E412",
    "areas": [
      "Drink texture"
    ],
    // Engelsk fagtekst: kva stoffet er, kroppen, fordelar og ulemper
    "what": "A plant-derived thickener made from guar seeds.",
    "body": "It binds water and changes texture. Seeing it in a soda does not tell you that the drink provides a useful amount of dietary fibre.",
    "good": "Guar gum helps give a drink a consistent texture and keeps its ingredients distributed. In Fanta it is one member of a stabiliser blend, alongside gum arabic and wood rosin esters. Its purpose is to help the recipe behave consistently rather than to provide an energy boost.",
    "bad": "The manufacturer does not disclose the individual amount, so this page cannot claim a fibre benefit or predict a gut effect from one bottle. A food additive used in a small amount is a different exposure from a large fibre supplement. Its plant origin alone is not a safety guarantee.",
    "evidence": "E412 identifies the additive; it does not give its quantity. The layer shown in the glass is enlarged for teaching.",
    "sources": [
      {
        "name": "FDA · guar gum and its food uses",
        "url": "https://hfpappexternal.fda.gov/Scripts/Fdcc/index.cfm?id=GUARGUM&set=FoodSubstances"
      }
    ],
    "reviewed": "3 November 2026",
    // Same ingrediensartikkel på nynorsk
    "nn": {
      "name": "Guargummi",
      "category": "Stabilisator",
      "symbol": "E412",
      "areas": [
        "Konsistensen til drikka"
      ],
      "what": "Eit plantebasert fortjukkingsmiddel laga av guarfrø.",
      "body": "Det bind vatn og endrar konsistensen. At det finst i ein brus, fortel ikkje at drikka gir ei nyttig mengd kostfiber.",
      "good": "Guargummi hjelper drikka med å få ein jamn konsistens og held ingrediensane fordelte. I Fanta er han ein del av ei stabilisatorblanding saman med gummi arabikum og ester av treharpiks. Føremålet er å få oppskrifta til å oppføre seg jamt, heller enn å gi eit energiløft.",
      "bad": "Produsenten oppgir ikkje den individuelle mengda, så denne sida kan ikkje hevde ein fiberfordel eller føreseie ein effekt på tarmen frå éi flaske. Eit tilsetjingsstoff brukt i ei lita mengd gir ei anna eksponering enn eit stort fibertilskot. Planteopphavet åleine er ingen garanti for tryggleik.",
      "evidence": "E412 identifiserer tilsetjingsstoffet, men oppgir ikkje mengda. Laget som blir vist i glaset, er forstørra for å forklare stoffet.",
      "sources": [
        {
          "name": "FDA · guargummi og bruk i mat",
          "url": "https://hfpappexternal.fda.gov/Scripts/Fdcc/index.cfm?id=GUARGUM&set=FoodSubstances"
        }
      ],
      "reviewed": "3. november 2026"
    }
  },
  // ── STOFF 2.49: Malic acid [malic-acid] ──
  {
    "id": "malic-acid",
    "name": "Malic acid",
    "category": "Acidity",
    "symbol": "E296",
    "areas": [
      "Taste",
      "Reflux"
    ],
    // Engelsk fagtekst: kva stoffet er, kroppen, fordelar og ulemper
    "what": "An acid used to give drinks a tart flavour; it also occurs in fruit.",
    "body": "It changes the acidity of the drink. It is not a stimulant, and its name does not mean it provides the benefits of eating fruit.",
    "good": "Malic acid helps balance sweetness with a sharper taste. In Lipton Lemon it works alongside citric acid; in FUN Light it is part of the acidity system. This explains why an ingredient can be useful to a recipe without being a nutrient your body needs more of.",
    "bad": "An acidic drink may trigger reflux symptoms in some people, although triggers vary. An ingredient list cannot tell you the finished drink’s pH or predict your symptoms. Being an acid that also occurs in fruit does not make frequent sipping of a sweet drink equivalent to eating whole fruit.",
    "evidence": "No individual malic-acid quantity or product pH is published here. Effects belong to the finished drink and the person, not just one ingredient name.",
    "sources": [
      {
        "name": "European Commission · food additive roles",
        "url": "https://food.ec.europa.eu/food-safety/food-improvement-agents/additives_en"
      },
      {
        "name": "NIDDK · reflux and dietary triggers",
        "url": "https://www.niddk.nih.gov/health-information/digestive-diseases/acid-reflux-ger-gerd-adults/eating-diet-nutrition"
      }
    ],
    "reviewed": "3 November 2026",
    // Same ingrediensartikkel på nynorsk
    "nn": {
      "name": "Eplesyre",
      "category": "Surleik",
      "symbol": "E296",
      "areas": [
        "Smak",
        "Sure oppstøyt"
      ],
      "what": "Ei syre som blir brukt for å gi drikkar ein syrleg smak. Ho finst òg i frukt.",
      "body": "Ho endrar surleiken i drikka. Ho er ikkje eit stimulerande stoff, og namnet tyder ikkje at ho gir fordelane ved å ete frukt.",
      "good": "Eplesyre hjelper med å balansere søtsmaken med ein skarpare smak. I Lipton Lemon verkar ho saman med sitronsyre. I FUN Light er ho ein del av systemet som styrer surleiken. Dette forklarer kvifor ein ingrediens kan vere nyttig i ei oppskrift utan å vere eit næringsstoff kroppen treng meir av.",
      "bad": "Ei sur drikke kan utløyse symptom på sure oppstøyt hos somme, men kva som utløyser plagene, varierer. Ei ingrediensliste kan ikkje fortelje pH-verdien til den ferdige drikka eller føreseie symptoma dine. At syra òg finst i frukt, gjer ikkje hyppige småslurkar av ei søt drikke til det same som å ete heil frukt.",
      "evidence": "Det blir ikkje publisert ei individuell mengd eplesyre eller ein pH-verdi for produktet her. Effektane gjeld den ferdige drikka og personen, ikkje berre eitt ingrediensnamn.",
      "sources": [
        {
          "name": "Europakommisjonen · oppgåvene til tilsetjingsstoff i mat",
          "url": "https://food.ec.europa.eu/food-safety/food-improvement-agents/additives_en"
        },
        {
          "name": "NIDDK · sure oppstøyt og utløysande matvarer",
          "url": "https://www.niddk.nih.gov/health-information/digestive-diseases/acid-reflux-ger-gerd-adults/eating-diet-nutrition"
        }
      ],
      "reviewed": "3. november 2026"
    }
  },
  // ── STOFF 2.50: Lemon juice from concentrate [lemon-concentrate] ──
  {
    "id": "lemon-concentrate",
    "name": "Lemon juice from concentrate",
    "category": "Fruit ingredient",
    "symbol": "Concentrated juice",
    "areas": [
      "Taste",
      "Teeth"
    ],
    // Engelsk fagtekst: kva stoffet er, kroppen, fordelar og ulemper
    "what": "Lemon juice that has had water removed and is used as an ingredient in the recipe.",
    "body": "It supplies lemon flavour and fruit acids. A small juice percentage does not make an iced tea nutritionally equivalent to a serving of fruit.",
    "good": "Lemon juice gives the tea a recognisable citrus taste. Concentrating juice makes it practical to transport and blend into a consistent recipe. The selected Lipton recipe lists 0.1% lemon juice from concentrate; that is a recipe detail, not a promise of a useful vitamin C dose.",
    "bad": "Juice in a sweetened drink does not cancel the added sugar around it. Juice sugars count as free sugars, and frequent sugary drinks can contribute to tooth decay. The lemon flavour also does not tell you the total acidity or whether this particular drink will trigger reflux for you.",
    "evidence": "No vitamin amount is calculated from this small juice percentage. Ascorbic acid is separately listed as an antioxidant in this recipe.",
    "sources": [
      {
        "name": "NHS · sugars and juice",
        "url": "https://www.nhs.uk/live-well/eat-well/food-types/how-does-sugar-in-our-diet-affect-our-health/"
      },
      {
        "name": "Lipton · Lemon recipe",
        "url": "https://www.liptonicedtea.com/en-gb/our-ice-teas/black-ice-tea/lipton-ice-tea-lemon"
      }
    ],
    "reviewed": "3 November 2026",
    // Same ingrediensartikkel på nynorsk
    "nn": {
      "name": "Sitronjuice frå konsentrat",
      "category": "Fruktingrediens",
      "symbol": "Konsentrert juice",
      "areas": [
        "Smak",
        "Tennene"
      ],
      "what": "Sitronjuice som har fått fjerna vatn og blir brukt som ein ingrediens i oppskrifta.",
      "body": "Han gir sitronsmak og fruktsyrer. Ein liten juiceprosent gjer ikkje iste ernæringsmessig lik ein porsjon frukt.",
      "good": "Sitronjuice gir teen ein attkjenneleg sitrussmak. Konsentrering av juice gjer det praktisk å transportere han og blande han inn i ei jamn oppskrift. Den valde Lipton-oppskrifta oppgir 0,1 % sitronjuice frå konsentrat. Det er ein oppskriftsdetalj, ikkje eit løfte om ein nyttig dose vitamin C.",
      "bad": "Juice i ei søta drikke opphevar ikkje det tilsette sukkeret rundt seg. Sukker frå juice blir rekna som fritt sukker, og hyppige sukkerhaldige drikkar kan bidra til hol i tennene. Sitronsmaken fortel heller ikkje den totale surleiken eller om akkurat denne drikka vil utløyse sure oppstøyt hos deg.",
      "evidence": "Det blir ikkje rekna ut ei vitaminmengd frå denne vesle juiceprosenten. Askorbinsyre er oppført som ein eigen antioksidant i oppskrifta.",
      "sources": [
        {
          "name": "NHS · sukker og juice",
          "url": "https://www.nhs.uk/live-well/eat-well/food-types/how-does-sugar-in-our-diet-affect-our-health/"
        },
        {
          "name": "Lipton · Lemon-oppskrifta",
          "url": "https://www.liptonicedtea.com/en-gb/our-ice-teas/black-ice-tea/lipton-ice-tea-lemon"
        }
      ],
      "reviewed": "3. november 2026"
    }
  },
  // ── STOFF 2.51: Steviol glycosides [steviol-glycosides] ──
  {
    "id": "steviol-glycosides",
    "name": "Steviol glycosides",
    "category": "Sweetener",
    "symbol": "Stevia · E960 family",
    "areas": [
      "Sweet taste"
    ],
    // Engelsk fagtekst: kva stoffet er, kroppen, fordelar og ulemper
    "what": "Intensely sweet compounds associated with the stevia plant, used as sweeteners.",
    "body": "They provide sweetness with much less material than sugar. They do not act like caffeine or make an acidic drink neutral.",
    "good": "Using an intense sweetener can let a manufacturer use less sugar while keeping a sweet taste. That can reduce the sugar and energy in a recipe compared with a version sweetened only with sugar. This iced tea still contains sucrose and fructose, so its actual sugar total matters.",
    "bad": "Plant-derived does not mean unlimited use has been tested or that the whole drink is healthy. Stevia sweeteners do not remove sugar already present in the bottle, and they do not prove a long-term weight benefit. Any caffeine from the tea also remains part of the drink.",
    "evidence": "EFSA evaluates sweeteners under specific uses and exposure levels. The label does not disclose the individual sweetener amount; it should not be inferred from the illustrated layer.",
    "sources": [
      {
        "name": "EFSA · sweeteners and steviol glycosides",
        "url": "https://www.efsa.europa.eu/en/topics/topic/sweeteners"
      }
    ],
    "reviewed": "3 November 2026",
    // Same ingrediensartikkel på nynorsk
    "nn": {
      "name": "Steviolglykosid",
      "category": "Søtstoff",
      "symbol": "Stevia · E960-familien",
      "areas": [
        "Søt smak"
      ],
      "what": "Intenst søte stoff knytte til steviaplanta, brukte som søtstoff.",
      "body": "Dei gir søtsmak med mykje mindre stoff enn sukker. Dei verkar ikkje som koffein og gjer ikkje ei sur drikke nøytral.",
      "good": "Eit intenst søtstoff kan gjere det mogleg for produsenten å bruke mindre sukker og likevel halde på den søte smaken. Det kan redusere sukkeret og energien i ei oppskrift samanlikna med ein versjon som berre er søta med sukker. Denne isteen inneheld framleis sukrose og fruktose, så den faktiske totalsummen av sukker er viktig.",
      "bad": "Plantebasert tyder ikkje at uavgrensa bruk er testa, eller at heile drikka er sunn. Steviasøtstoff fjernar ikkje sukker som allereie finst i flaska, og dokumenterer ikkje ein fordel for vekta på lang sikt. Eventuelt koffein frå teen er òg framleis ein del av drikka.",
      "evidence": "EFSA vurderer søtstoff ved bestemte bruksområde og eksponeringsnivå. Etiketten oppgir ikkje den individuelle søtstoffmengda. Ho skal ikkje utleiast frå laget i illustrasjonen.",
      "sources": [
        {
          "name": "EFSA · søtstoff og steviolglykosid",
          "url": "https://www.efsa.europa.eu/en/topics/topic/sweeteners"
        }
      ],
      "reviewed": "3. november 2026"
    }
  },
  // ── STOFF 2.52: Salt · sodium chloride [salt] ──
  {
    "id": "salt",
    "name": "Salt · sodium chloride",
    "category": "Electrolyte",
    "symbol": "NaCl",
    "areas": [
      "Nerves",
      "Muscles",
      "Blood pressure"
    ],
    // Engelsk fagtekst: kva stoffet er, kroppen, fordelar og ulemper
    "what": "Table salt is sodium chloride. Sodium and chloride are electrolytes.",
    "body": "Your nerves and muscles use electrolytes, and sodium helps control fluid balance. Too much salt overall can raise blood pressure.",
    "good": "Salt can help replace some sodium lost in sweat during prolonged activity. It also affects taste. The useful amount depends on the activity, your losses and what else you consume. For an ordinary day, the word electrolyte does not mean you need a sports drink.",
    "bad": "Too much salt across your diet can raise blood pressure, increasing the risk of heart attack and stroke over time. That is an overall intake issue, not a claim that one sports drink causes a heart problem. Sodium and salt are different label measures and must not be treated as equal grams.",
    "evidence": "Gatorade’s US label reports total sodium from the whole recipe, not the amount of sodium chloride alone. The animation does not assign all that sodium to this stage.",
    "sources": [
      {
        "name": "NHS · salt and blood pressure",
        "url": "https://www.nhs.uk/live-well/eat-well/food-types/salt-in-your-diet/"
      }
    ],
    "reviewed": "3 November 2026",
    // Same ingrediensartikkel på nynorsk
    "nn": {
      "name": "Salt · natriumklorid",
      "category": "Elektrolytt",
      "symbol": "NaCl",
      "areas": [
        "Nervane",
        "Musklane",
        "Blodtrykk"
      ],
      "what": "Bordsalt er natriumklorid. Natrium og klorid er elektrolyttar.",
      "body": "Nervane og musklane bruker elektrolyttar, og natrium hjelper med å styre væskebalansen. For mykje salt totalt kan auke blodtrykket.",
      "good": "Salt kan bidra til å erstatte noko av natriumet som går tapt gjennom sveitte under langvarig aktivitet. Det påverkar òg smaken. Den nyttige mengda avheng av aktiviteten, tapet ditt og kva anna du får i deg. På ein vanleg dag tyder ikkje ordet elektrolytt at du treng ein sportsdrikk.",
      "bad": "For mykje salt i det samla kosthaldet kan auke blodtrykket og dermed risikoen for hjarteinfarkt og hjerneslag over tid. Dette handlar om samla inntak, ikkje om at éin sportsdrikk gir eit hjarteproblem. Natrium og salt er ulike mål på etiketten og må ikkje behandlast som like mange gram.",
      "evidence": "Den amerikanske Gatorade-etiketten oppgir totalt natrium frå heile oppskrifta, ikkje berre mengda natriumklorid. Animasjonen legg ikkje alt dette natriumet til dette steget.",
      "sources": [
        {
          "name": "NHS · salt og blodtrykk",
          "url": "https://www.nhs.uk/live-well/eat-well/food-types/salt-in-your-diet/"
        }
      ],
      "reviewed": "3. november 2026"
    }
  },
  // ── STOFF 2.53: Monopotassium phosphate [monopotassium-phosphate] ──
  {
    "id": "monopotassium-phosphate",
    "name": "Monopotassium phosphate",
    "category": "Electrolyte",
    "symbol": "KH₂PO₄ · E340(i)",
    "areas": [
      "Cells",
      "Bones",
      "Kidneys"
    ],
    // Engelsk fagtekst: kva stoffet er, kroppen, fordelar og ulemper
    "what": "A potassium and phosphate salt used in food and drink formulas.",
    "body": "It can supply potassium and phosphorus. Phosphorus is used in bones and cells, but its normal role does not prove an extra benefit from this bottle.",
    "good": "This salt contributes to the sports drink’s mineral blend. Potassium and phosphorus have normal roles in the body, including cell function, and phosphorus is part of bones and teeth. The product’s total potassium is measured separately; it is not a second amount to add to this ingredient.",
    "bad": "A mineral name does not guarantee a benefit from extra intake. In severe chronic kidney disease, the kidneys may struggle to remove excess phosphorus, so phosphate intake can matter. The label does not publish this ingredient’s individual amount, and this page cannot judge its suitability for a particular medical diet.",
    "evidence": "The US bottle declares 70 mg total potassium but no phosphorus amount. No separate phosphate dose is invented here.",
    "sources": [
      {
        "name": "NIH ODS · phosphorus and kidney function",
        "url": "https://ods.od.nih.gov/factsheets/Phosphorus-Consumer/"
      },
      {
        "name": "PepsiCo · Gatorade label",
        "url": "https://smartlabel.pepsico.info/052000059120-0001-en-US/index.html"
      }
    ],
    "reviewed": "3 November 2026",
    // Same ingrediensartikkel på nynorsk
    "nn": {
      "name": "Monokaliumfosfat",
      "category": "Elektrolytt",
      "symbol": "KH₂PO₄ · E340(i)",
      "areas": [
        "Cellene",
        "Skjelett",
        "Nyrene"
      ],
      "what": "Eit kalium- og fosfatsalt brukt i mat- og drikkeoppskrifter.",
      "body": "Det kan gi kalium og fosfor. Fosfor blir brukt i skjelettet og cellene, men den normale oppgåva dokumenterer ikkje ein ekstra fordel frå denne flaska.",
      "good": "Dette saltet bidreg til mineralblandinga i sportsdrikka. Kalium og fosfor har normale oppgåver i kroppen, mellom anna for cellefunksjonen, og fosfor er ein del av skjelettet og tennene. Det totale kaliuminnhaldet i produktet blir målt for seg. Det er ikkje ei ekstra mengd som skal leggjast til denne ingrediensen.",
      "bad": "Eit mineralnamn garanterer ikkje ein fordel frå ekstra inntak. Ved alvorleg kronisk nyresjukdom kan nyrene streve med å fjerne overskot av fosfor, så fosfatinntaket kan vere viktig. Etiketten publiserer ikkje den individuelle mengda av denne ingrediensen, og denne sida kan ikkje vurdere om han passar i eit bestemt medisinsk kosthald.",
      "evidence": "Den amerikanske flaska oppgir 70 mg kalium totalt, men inga fosformengd. Vi finn ikkje på ein eigen fosfatdose her.",
      "sources": [
        {
          "name": "NIH ODS · fosfor og nyrefunksjon",
          "url": "https://ods.od.nih.gov/factsheets/Phosphorus-Consumer/"
        },
        {
          "name": "PepsiCo · Gatorade-etiketten",
          "url": "https://smartlabel.pepsico.info/052000059120-0001-en-US/index.html"
        }
      ],
      "reviewed": "3. november 2026"
    }
  },
  // ── STOFF 2.54: Sucrose acetate isobutyrate [sucrose-acetate-isobutyrate] ──
  {
    "id": "sucrose-acetate-isobutyrate",
    "name": "Sucrose acetate isobutyrate",
    "category": "Stabiliser",
    "symbol": "E444 · SAIB",
    "areas": [
      "Drink texture"
    ],
    // Engelsk fagtekst: kva stoffet er, kroppen, fordelar og ulemper
    "what": "A modified sucrose-based ingredient used to stabilise drink emulsions.",
    "body": "It helps ingredients stay distributed in the bottle. Despite the word sucrose, it is not the same ingredient as table sugar.",
    "good": "This stabiliser helps a flavoured drink stay evenly mixed rather than separating into different parts. That is why it can appear beside gum arabic and rosin esters in a sports drink. Its useful role is in the product’s consistency, not in making your muscles stronger or your brain more alert.",
    "bad": "There is no established nutritional benefit from the undisclosed amount in this bottle. Authorisation concerns particular uses and conditions, rather than unrestricted intake. A long chemical name does not by itself show that the ingredient damages an organ, and the visible layer cannot be used to estimate a real dose.",
    "evidence": "SAIB is E444. It is distinct from E445, glycerol esters of wood rosin, even though both can help stabilise a drink.",
    "sources": [
      {
        "name": "UK FSA · E444 authorisation",
        "url": "https://data.food.gov.uk/regulated-products/food_authorisations/e-444"
      },
      {
        "name": "FDA · sucrose acetate isobutyrate",
        "url": "https://hfpappexternal.fda.gov/Scripts/Fdcc/index.cfm?id=SUCROSEACETATEISOBUTYRATE&set=FoodSubstances"
      }
    ],
    "reviewed": "3 November 2026",
    // Same ingrediensartikkel på nynorsk
    "nn": {
      "name": "Sukroseacetatisobutyrat",
      "category": "Stabilisator",
      "symbol": "E444 · SAIB",
      "areas": [
        "Konsistensen til drikka"
      ],
      "what": "Ein modifisert ingrediens basert på sukrose, brukt til å stabilisere emulsjonar i drikkar.",
      "body": "Han hjelper ingrediensane med å halde seg fordelte i flaska. Trass i ordet sukrose er han ikkje den same ingrediensen som bordsukker.",
      "good": "Denne stabilisatoren hjelper ei smaksett drikke med å halde seg jamt blanda i staden for å skilje seg i ulike delar. Difor kan han stå saman med gummi arabikum og harpiksesterar i ein sportsdrikk. Den nyttige oppgåva gjeld den jamne konsistensen til produktet, ikkje å gjere musklane sterkare eller hjernen meir vaken.",
      "bad": "Det er ikkje påvist nokon ernæringsfordel frå den ikkje oppgitte mengda i denne flaska. Godkjenninga gjeld bestemte bruksområde og vilkår, heller enn uavgrensa inntak. Eit langt kjemisk namn viser ikkje i seg sjølv at ingrediensen skadar eit organ, og det synlege laget kan ikkje brukast til å anslå ein verkeleg dose.",
      "evidence": "SAIB er E444. Det er noko anna enn E445, glyserolesterar av treharpiks, sjølv om begge kan bidra til å stabilisere ei drikke.",
      "sources": [
        {
          "name": "Britiske FSA · godkjenning av E444",
          "url": "https://data.food.gov.uk/regulated-products/food_authorisations/e-444"
        },
        {
          "name": "FDA · sukroseacetatisobutyrat",
          "url": "https://hfpappexternal.fda.gov/Scripts/Fdcc/index.cfm?id=SUCROSEACETATEISOBUTYRATE&set=FoodSubstances"
        }
      ],
      "reviewed": "3. november 2026"
    }
  },
  // ── STOFF 2.55: Sunset Yellow FCF [sunset-yellow] ──
  {
    "id": "sunset-yellow",
    "name": "Sunset Yellow FCF",
    "category": "Colour",
    "symbol": "Yellow 6 · E110",
    "areas": [
      "Appearance",
      "Activity and attention"
    ],
    // Engelsk fagtekst: kva stoffet er, kroppen, fordelar og ulemper
    "what": "A food colour called Yellow 6 on the selected US Gatorade label.",
    "body": "Its purpose is colour. It is not vitamin A, and the orange shade does not tell you that the drink contains orange juice.",
    "good": "The colour gives the drink a consistent orange appearance. That can help people recognise the flavour, but it does not provide an established body benefit. The selected US formula states that it contains no fruit juice, so this is a useful example of colour and fruit content being different things.",
    "bad": "UK labelling rules require an activity-and-attention warning for foods containing this colour, with specified exceptions. That does not mean every child will react or that it causes ADHD. The individual colour amount in this US bottle is not disclosed, so a personal effect cannot be predicted from this page.",
    "evidence": "This guide applies to the selected US recipe. A different-market Gatorade may use a different colour and should be checked against its own label.",
    "sources": [
      {
        "name": "UK government · food colour warnings",
        "url": "https://www.gov.uk/food-labelling-and-packaging/food-and-drink-warnings"
      },
      {
        "name": "NHS Wales · colours and hyperactivity",
        "url": "https://111.wales.nhs.uk/foodcoloursandhyperactivity"
      }
    ],
    "reviewed": "3 November 2026",
    // Same ingrediensartikkel på nynorsk
    "nn": {
      "name": "Paraoransje FCF",
      "category": "Fargestoff",
      "symbol": "Yellow 6 · E110",
      "areas": [
        "Utsjånad",
        "Aktivitet og merksemd"
      ],
      "what": "Eit næringsmiddelfargestoff kalla Yellow 6 på den valde amerikanske Gatorade-etiketten.",
      "body": "Føremålet er farge. Det er ikkje vitamin A, og den oransje fargetonen fortel ikkje at drikka inneheld appelsinjuice.",
      "good": "Fargen gir drikka ein jamn oransje utsjånad. Det kan hjelpe folk med å kjenne att smaken, men gir ikkje ein dokumentert fordel for kroppen. Den valde amerikanske oppskrifta seier at ho ikkje inneheld fruktjuice. Dette er difor eit nyttig døme på at farge og fruktinnhald er ulike ting.",
      "bad": "Britiske merkereglar krev ei åtvaring om aktivitet og merksemd for matvarer som inneheld dette fargestoffet, med bestemte unntak. Det tyder ikkje at alle barn vil reagere, eller at stoffet gir ADHD. Den individuelle fargestoffmengda i denne amerikanske flaska er ikkje oppgitt, så sida kan ikkje føreseie ein personleg effekt.",
      "evidence": "Denne forklaringa gjeld den valde amerikanske oppskrifta. Gatorade frå ein annan marknad kan bruke eit anna fargestoff og bør kontrollerast mot sin eigen etikett.",
      "sources": [
        {
          "name": "Britiske styresmakter · åtvaringar om næringsmiddelfargar",
          "url": "https://www.gov.uk/food-labelling-and-packaging/food-and-drink-warnings"
        },
        {
          "name": "NHS i Wales · fargestoff og hyperaktivitet",
          "url": "https://111.wales.nhs.uk/foodcoloursandhyperactivity"
        }
      ],
      "reviewed": "3. november 2026"
    }
  },
  // ── STOFF 2.56: Fruit & vegetable concentrates [fruit-veg-concentrates] ──
  {
    "id": "fruit-veg-concentrates",
    "name": "Fruit & vegetable concentrates",
    "category": "Plant ingredient",
    "symbol": "Carrot · blackcurrant",
    "areas": [
      "Appearance",
      "Taste"
    ],
    // Engelsk fagtekst: kva stoffet er, kroppen, fordelar og ulemper
    "what": "Concentrated plant ingredients listed alongside the orange juice in Fanta.",
    "body": "They contribute to the recipe’s colour or flavour. Their presence does not establish a useful dose of vitamins or fibre.",
    "good": "Concentrates let a manufacturer use plant ingredients consistently within a drink recipe. The Norwegian Fanta page names carrot and blackcurrant in this group. Keeping this stage separate from the orange juice and beta-carotene helps explain the label without treating every source of colour as the same ingredient.",
    "bad": "A small amount of plant concentrate does not make a soda equivalent to eating vegetables or fruit. The individual amount is undisclosed, so this page cannot claim a fibre or vitamin benefit. The drink still needs to be understood through its sugar content, acidity, serving size and full recipe.",
    "evidence": "This group describes the named concentrates, not a complete nutrient analysis. Their layer colour and size are teaching aids.",
    "sources": [
      {
        "name": "Coca-Cola Norway · Fanta ingredients",
        "url": "https://www.coca-cola.com/no/no/brands/fanta"
      }
    ],
    "reviewed": "3 November 2026",
    // Same ingrediensartikkel på nynorsk
    "nn": {
      "name": "Frukt- og grønsakskonsentrat",
      "category": "Planteingrediens",
      "symbol": "Gulrot · solbær",
      "areas": [
        "Utsjånad",
        "Smak"
      ],
      "what": "Konsentrerte planteingrediensar oppførte saman med appelsinjuicen i Fanta.",
      "body": "Dei bidreg til fargen eller smaken i oppskrifta. Innhaldet av desse dokumenterer ikkje ein nyttig dose vitamin eller fiber.",
      "good": "Konsentrat gjer det mogleg for produsenten å bruke planteingrediensar jamt i ei drikkeoppskrift. Den norske Fanta-sida nemner gulrot og solbær i denne gruppa. Ved å halde dette steget skilt frå appelsinjuicen og betakarotenet kan etiketten forklarast utan å behandle alle fargekjelder som den same ingrediensen.",
      "bad": "Ei lita mengd plantekonsentrat gjer ikkje brus til det same som å ete grønsaker eller frukt. Den individuelle mengda er ikkje oppgitt, så sida kan ikkje hevde ein fordel frå fiber eller vitamin. Drikka må framleis forståast ut frå sukkerinnhald, surleik, porsjonsstorleik og heile oppskrifta.",
      "evidence": "Denne gruppa skildrar dei namngitte konsentrata, ikkje ein fullstendig næringsanalyse. Fargen og storleiken på laget er hjelpemiddel i forklaringa.",
      "sources": [
        {
          "name": "Coca-Cola Noreg · ingrediensane i Fanta",
          "url": "https://www.coca-cola.com/no/no/brands/fanta"
        }
      ],
      "reviewed": "3. november 2026"
    }
  },
  // ── STOFF 2.57: Apple & grape juice from concentrate [apple-grape-juice] ──
  {
    "id": "apple-grape-juice",
    "name": "Apple & grape juice from concentrate",
    "category": "Fruit ingredient",
    "symbol": "12% grape · 8% apple",
    "areas": [
      "Taste",
      "Teeth",
      "Energy intake"
    ],
    // Engelsk fagtekst: kva stoffet er, kroppen, fordelar og ulemper
    "what": "Fruit juices used together in Mozell, making up a declared 20% of its recipe.",
    "body": "They add fruit flavour and sugars. Your body uses those sugars for energy; juice sugars count as free sugars, even when no sugar was added to the fruit itself.",
    "good": "The apple and grape juices give Mozell a different flavour from a plain sugar-and-aroma soda. Their stated percentages help you understand the recipe: grape juice is the larger part of this blend. They contribute to the total carbohydrate already counted in the nutrition panel, rather than creating a second set of nutrients.",
    "bad": "Juice sugars still count as free sugars and can contribute to tooth decay, especially with frequent exposure. A bottle containing some juice does not give you the structure and fullness of whole fruit. Mozell also contains added sugar, so the juice percentage should not be used as a health score.",
    "evidence": "The bottle has one total sugars figure covering both juices and added sugar. No fibre or vitamin benefit is assigned without a verified amount.",
    "sources": [
      {
        "name": "Ringnes · Mozell ingredients",
        "url": "https://www.ringnes.no/produkter/mozell/mozell/"
      },
      {
        "name": "NHS · juice and free sugars",
        "url": "https://www.nhs.uk/live-well/eat-well/food-types/how-does-sugar-in-our-diet-affect-our-health/"
      }
    ],
    "reviewed": "4 November 2026",
    // Same ingrediensartikkel på nynorsk
    "nn": {
      "name": "Eple- og druejuice frå konsentrat",
      "category": "Fruktingrediens",
      "symbol": "12 % drue · 8 % eple",
      "areas": [
        "Smak",
        "Tennene",
        "Energiinntak"
      ],
      "what": "Fruktjuicar brukte saman i Mozell, med ein oppgitt del på 20 % av oppskrifta.",
      "body": "Dei gir fruktsmak og sukker. Kroppen bruker desse sukkera til energi. Sukker frå juice blir rekna som fritt sukker, sjølv når det ikkje er tilsett sukker i sjølve frukta.",
      "good": "Eple- og druejuicen gir Mozell ein annan smak enn ein enkel brus med sukker og aroma. Dei oppgitte prosentdelane hjelper deg med å forstå oppskrifta: druejuice er den største delen av denne blandinga. Dei bidreg til det samla karbohydratinnhaldet som allereie er rekna med i næringsoversikta, heller enn å skape eit ekstra sett med næringsstoff.",
      "bad": "Sukker frå juice blir framleis rekna som fritt sukker og kan bidra til hol i tennene, særleg ved hyppig eksponering. Ei flaske med noko juice gir ikkje strukturen og mettheita til heil frukt. Mozell inneheld òg tilsett sukker, så juiceprosenten bør ikkje brukast som ein helseskår.",
      "evidence": "Flaska har éin samla verdi for sukker som omfattar både juicane og tilsett sukker. Vi tilordnar ingen fiber- eller vitaminfordel utan ei stadfesta mengd.",
      "sources": [
        {
          "name": "Ringnes · ingrediensane i Mozell",
          "url": "https://www.ringnes.no/produkter/mozell/mozell/"
        },
        {
          "name": "NHS · juice og fritt sukker",
          "url": "https://www.nhs.uk/live-well/eat-well/food-types/how-does-sugar-in-our-diet-affect-our-health/"
        }
      ],
      "reviewed": "4. november 2026"
    }
  },
  // ── STOFF 2.58: Peach juice from concentrate [peach-concentrate] ──
  {
    "id": "peach-concentrate",
    "name": "Peach juice from concentrate",
    "category": "Fruit ingredient",
    "symbol": "Peach flavour",
    "areas": [
      "Taste",
      "Teeth"
    ],
    // Engelsk fagtekst: kva stoffet er, kroppen, fordelar og ulemper
    "what": "Peach juice that has been concentrated and used in a prepared drink recipe.",
    "body": "It brings peach flavour and naturally occurring sugars. Those juice sugars are part of the drink’s total sugars, alongside any added sugar.",
    "good": "Peach juice helps give Sunniva iced tea its familiar fruit taste. Using concentrate makes it practical to blend the juice with tea and water. The ingredient explains part of the flavour, but its presence alone does not establish a useful dose of vitamins or the amount of fruit in a serving.",
    "bad": "Your teeth are still exposed to free sugars from juice, even when a fruit name sounds reassuring. This iced tea also contains added sugar. A peach-flavoured drink is different from eating a peach, and the undisclosed juice quantity cannot be used to promise a fibre, vitamin or organ-health benefit.",
    "evidence": "The manufacturer lists peach juice from concentrate without a separate percentage. Its sugars must not be added again on top of the label’s total sugars.",
    "sources": [
      {
        "name": "TINE · Sunniva isTe Fersken recipe",
        "url": "https://www.tine.no/merkevarer/sunniva-iste/produkter/sunniva-iste-fersken"
      },
      {
        "name": "NHS · sugars in juice",
        "url": "https://www.nhs.uk/live-well/eat-well/food-types/how-does-sugar-in-our-diet-affect-our-health/"
      }
    ],
    "reviewed": "4 November 2026",
    // Same ingrediensartikkel på nynorsk
    "nn": {
      "name": "Ferskenjuice frå konsentrat",
      "category": "Fruktingrediens",
      "symbol": "Ferskensmak",
      "areas": [
        "Smak",
        "Tennene"
      ],
      "what": "Ferskenjuice som er konsentrert og brukt i ei oppskrift for ferdig drikke.",
      "body": "Han gir ferskensmak og naturleg sukker. Desse juicesukkera er ein del av det samla sukkerinnhaldet i drikka, saman med eventuelt tilsett sukker.",
      "good": "Ferskenjuice er med på å gi Sunniva iste den velkjende fruktsmaken. Konsentrat gjer det praktisk å blande juicen med te og vatn. Ingrediensen forklarer ein del av smaken, men innhaldet åleine dokumenterer ikkje ein nyttig vitamindose eller kor mykje frukt det er i ein porsjon.",
      "bad": "Tennene blir framleis utsette for fritt sukker frå juice, sjølv når eit fruktnamn høyrest trygt ut. Denne isteen inneheld òg tilsett sukker. Ei drikke med ferskensmak er noko anna enn å ete ein fersken, og den ikkje oppgitte juicemengda kan ikkje brukast til å love ein fordel frå fiber, vitamin eller betre organhelse.",
      "evidence": "Produsenten oppgir ferskenjuice frå konsentrat utan ein eigen prosentdel. Sukkeret frå juicen må ikkje leggjast til ein gong til oppå det totale sukkerinnhaldet på etiketten.",
      "sources": [
        {
          "name": "TINE · oppskrifta til Sunniva isTe Fersken",
          "url": "https://www.tine.no/merkevarer/sunniva-iste/produkter/sunniva-iste-fersken"
        },
        {
          "name": "NHS · sukker i juice",
          "url": "https://www.nhs.uk/live-well/eat-well/food-types/how-does-sugar-in-our-diet-affect-our-health/"
        }
      ],
      "reviewed": "4. november 2026"
    }
  },
  // ── STOFF 2.59: Sulfite caramel colour [sulfite-caramel] ──
  {
    "id": "sulfite-caramel",
    "name": "Sulfite caramel colour",
    "category": "Colour",
    "symbol": "E150b · Class II",
    "areas": [
      "Appearance"
    ],
    // Engelsk fagtekst: kva stoffet er, kroppen, fordelar og ulemper
    "what": "A brown food colour made by heating carbohydrates using a sulfite process.",
    "body": "Its job is to colour the drink. It is a different class from E150d and does not provide an established benefit to a particular organ.",
    "good": "E150b gives the recipe a consistent golden-brown colour. In Mozell, it helps explain why a drink containing apple and grape juices looks the way it does. Knowing the exact E-number also helps you tell this ingredient apart from E150d, which appears in several other drinks in the lab.",
    "bad": "The colour does not make the drink more nutritious or cancel its sugar content. Safety assessments consider exposure and manufacturing specifications, while the individual amount in this bottle is not disclosed. Its name alone is not enough to conclude that an ordinary serving harms your organs, or that any quantity is harmless.",
    "evidence": "Caramel colours are separate classes with separate manufacturing conditions. The animation and guide keep E150b distinct from E150d; the enlarged colour layer is not a real dose.",
    "sources": [
      {
        "name": "EFSA · caramel colour assessment",
        "url": "https://www.efsa.europa.eu/en/efsajournal/pub/2004"
      },
      {
        "name": "Ringnes · Mozell colour on the label",
        "url": "https://www.ringnes.no/produkter/mozell/mozell/"
      }
    ],
    "reviewed": "4 November 2026",
    // Same ingrediensartikkel på nynorsk
    "nn": {
      "name": "Sulfittkaramellfarge",
      "category": "Fargestoff",
      "symbol": "E150b · klasse II",
      "areas": [
        "Utsjånad"
      ],
      "what": "Eit brunt næringsmiddelfargestoff laga ved å varme opp karbohydrat i ein prosess med sulfitt.",
      "body": "Oppgåva er å farge drikka. Stoffet høyrer til ein annan klasse enn E150d og gir ikkje ein dokumentert fordel for eit bestemt organ.",
      "good": "E150b gir oppskrifta ein jamn gyllenbrun farge. I Mozell er det med på å forklare kvifor ei drikke med eple- og druejuice ser ut som ho gjer. Det nøyaktige E-nummeret hjelper deg òg med å skilje denne ingrediensen frå E150d, som finst i fleire andre drikkar i laboratoriet.",
      "bad": "Fargestoffet gjer ikkje drikka meir næringsrik og opphevar ikkje sukkerinnhaldet. Tryggleiksvurderingar tek omsyn til eksponering og produksjonsspesifikasjonar, medan den individuelle mengda i denne flaska ikkje er oppgitt. Namnet åleine er ikkje nok til å konkludere med at ein vanleg porsjon skadar organa dine, eller at alle mengder er ufarlege.",
      "evidence": "Karamellfargar er ulike klassar med ulike produksjonsvilkår. Animasjonen og forklaringa held E150b skilt frå E150d. Det forstørra fargelaget er ikkje ein verkeleg dose.",
      "sources": [
        {
          "name": "EFSA · vurdering av karamellfarge",
          "url": "https://www.efsa.europa.eu/en/efsajournal/pub/2004"
        },
        {
          "name": "Ringnes · Mozell-fargen på etiketten",
          "url": "https://www.ringnes.no/produkter/mozell/mozell/"
        }
      ],
      "reviewed": "4. november 2026"
    }
  },
  // ── STOFF 2.60: Anthocyanins [anthocyanins] ──
  {
    "id": "anthocyanins",
    "name": "Anthocyanins",
    "category": "Colour",
    "symbol": "E163 · plant pigments",
    "areas": [
      "Appearance"
    ],
    // Engelsk fagtekst: kva stoffet er, kroppen, fordelar og ulemper
    "what": "A family of plant pigments that can give food and drinks red, purple or blue shades.",
    "body": "In these recipes they are added for colour. A plant pigment in a drink is not evidence that the bottle protects your heart or brain.",
    "good": "Anthocyanins help give red julebrus and raspberry squash their recognisable colour. Their shade depends on the mixture and its acidity, so the same family of pigments can produce different appearances. That is a useful role in the recipe, but the finished colour does not tell you how much fruit is present.",
    "bad": "A natural colour does not automatically make a drink healthier. The colour name gives neither its exact source nor its dose, and it cannot justify transferring health claims about whole berries or concentrated supplements to this glass. A red drink may still contain substantial sugar, or may instead use intense sweeteners.",
    "evidence": "E163 covers a group of pigments rather than one fixed molecule. The source and amount are not fully specified for these drinks, so no extra nutritional or antioxidant benefit is claimed.",
    "sources": [
      {
        "name": "EFSA · anthocyanins assessment",
        "url": "https://www.efsa.europa.eu/en/efsajournal/pub/3145"
      },
      {
        "name": "UK FSA · E163 definition",
        "url": "https://data.food.gov.uk/regulated-products/id/food-additives/additive/e-163"
      }
    ],
    "reviewed": "4 November 2026",
    // Same ingrediensartikkel på nynorsk
    "nn": {
      "name": "Antocyan",
      "category": "Fargestoff",
      "symbol": "E163 · plantepigment",
      "areas": [
        "Utsjånad"
      ],
      "what": "Ein familie av plantepigment som kan gi mat og drikke raude, lilla eller blå fargetonar.",
      "body": "I desse oppskriftene er dei tilsette for fargen. Eit plantepigment i ei drikke er ikkje dokumentasjon på at flaska vernar hjartet eller hjernen.",
      "good": "Antocyan er med på å gi raud julebrus og bringebærsaft den attkjennelege fargen. Fargetonen avheng av blandinga og surleiken, så den same pigmentfamilien kan gi ulike utsjånader. Dette er ei nyttig oppgåve i oppskrifta, men den ferdige fargen fortel ikkje kor mykje frukt som er til stades.",
      "bad": "Ein naturleg farge gjer ikkje automatisk drikka sunnare. Fargenamnet oppgir korkje nøyaktig kjelde eller dose og kan ikkje rettferdiggjere å overføre helsepåstandar om heile bær eller konsentrerte tilskot til dette glaset. Ei raud drikke kan framleis innehalde mykje sukker, eller ho kan i staden bruke intense søtstoff.",
      "evidence": "E163 omfattar ei gruppe pigment, heller enn eitt fast molekyl. Kjelda og mengda er ikkje fullt spesifiserte for desse drikkane, så det blir ikkje hevda nokon ekstra ernærings- eller antioksidantfordel.",
      "sources": [
        {
          "name": "EFSA · vurdering av antocyan",
          "url": "https://www.efsa.europa.eu/en/efsajournal/pub/3145"
        },
        {
          "name": "Britiske FSA · definisjon av E163",
          "url": "https://data.food.gov.uk/regulated-products/id/food-additives/additive/e-163"
        }
      ],
      "reviewed": "4. november 2026"
    }
  },
  // ── STOFF 2.61: L-carnitine L-tartrate [l-carnitine-tartrate] ──
  {
    "id": "l-carnitine-tartrate",
    "name": "L-carnitine L-tartrate",
    "category": "Cell function",
    "symbol": "Carnitine + tartrate",
    "areas": [
      "Cells",
      "Muscles",
      "Digestion"
    ],
    // Engelsk fagtekst: kva stoffet er, kroppen, fordelar og ulemper
    "what": "A form of carnitine listed in the Norwegian retailer recipe for Monster Original.",
    "body": "Your cells use carnitine to move fatty acids into the parts of cells that release energy. Most healthy people make enough themselves.",
    "good": "Carnitine has a real job in normal energy metabolism. That explains why it is discussed in sports nutrition. The tartrate part identifies the form used in the ingredient. Having this normal role does not establish that extra carnitine in this can improves your muscles or burns extra body fat.",
    "bad": "Extra carnitine has not consistently improved exercise performance in studies. High supplement doses can cause nausea, stomach cramps, diarrhoea or a fishy body smell. Those supplement doses are a different exposure from this drink, and the label percentage is not used to invent a dose or a personal risk prediction.",
    "evidence": "The retailer lists 0.04% L-carnitine L-tartrate. It is retained as a recipe percentage, without treating it as pure carnitine or converting it to a measured amount per can.",
    "sources": [
      {
        "name": "NIH ODS · carnitine",
        "url": "https://ods.od.nih.gov/factsheets/Carnitine-Consumer/"
      },
      {
        "name": "XXL Norway · Monster ingredient list",
        "url": "https://www.xxl.no/monster-monster-energy-energidrikke/p/1263215_1_Style"
      }
    ],
    "compound": false,
    "reviewed": "4 November 2026",
    // Same ingrediensartikkel på nynorsk
    "nn": {
      "name": "L-karnitin L-tartrat",
      "category": "Cellefunksjon",
      "symbol": "Karnitin + tartrat",
      "areas": [
        "Cellene",
        "Musklane",
        "Fordøying"
      ],
      "what": "Ei form for karnitin oppgitt i den norske forhandlaroppskrifta for Monster Original.",
      "body": "Cellene bruker karnitin til å flytte feittsyrer inn i dei delane av cellene som frigjer energi. Dei fleste friske menneske lagar nok sjølve.",
      "good": "Karnitin har ei verkeleg oppgåve i normal energiomsetjing. Det forklarer kvifor stoffet blir omtala i sportsernæring. Tartratdelen identifiserer forma som blir brukt i ingrediensen. Denne normale oppgåva dokumenterer ikkje at ekstra karnitin i denne boksen betrar musklane eller forbrenn ekstra kroppsfeitt.",
      "bad": "Ekstra karnitin har ikkje konsekvent betra treningsprestasjonen i studiar. Høge tilskotsdosar kan gi kvalme, magekrampar, diaré eller ei fiskeliknande kroppslukt. Desse tilskotsdosane gir ei anna eksponering enn drikka, og prosentdelen på etiketten blir ikkje brukt til å finne på ein dose eller føreseie din personlege risiko.",
      "evidence": "Forhandlaren oppgir 0,04 % L-karnitin L-tartrat. Dette blir halde som ein prosentdel i oppskrifta, utan å behandle det som reint karnitin eller omrekne det til ei målt mengd per boks.",
      "sources": [
        {
          "name": "NIH ODS · karnitin",
          "url": "https://ods.od.nih.gov/factsheets/Carnitine-Consumer/"
        },
        {
          "name": "XXL Noreg · ingredienslista til Monster",
          "url": "https://www.xxl.no/monster-monster-energy-energidrikke/p/1263215_1_Style"
        }
      ],
      "reviewed": "4. november 2026"
    }
  },
  // ── STOFF 2.62: D-glucuronolactone [glucuronolactone] ──
  {
    "id": "glucuronolactone",
    "name": "D-glucuronolactone",
    "category": "Cell function",
    "symbol": "C₆H₈O₆",
    "areas": [
      "Normal metabolism"
    ],
    // Engelsk fagtekst: kva stoffet er, kroppen, fordelar og ulemper
    "what": "A compound related to glucose metabolism, added to some energy drinks.",
    "body": "It is related to substances your body already makes. That does not mean drinking more improves your liver’s work or removes toxins.",
    "good": "This is a useful example of a normal body compound appearing in an energy-drink recipe. EFSA has assessed its use at the exposures considered in energy drinks. Understanding that assessment helps separate the question of safety at a given exposure from a promise of improved alertness or performance.",
    "bad": "A proven extra performance benefit is not established here. It does not replace sleep, remove caffeine’s effects or justify drinking more cans. Its amount is not published in the selected Monster listing, so this guide cannot compare that can with a study dose or make a personal safety calculation.",
    "evidence": "EFSA’s safety assessment concerns the exposures studied. It is not evidence of a detox benefit or proof that unlimited intake is harmless.",
    "sources": [
      {
        "name": "EFSA · taurine and D-glucuronolactone",
        "url": "https://www.efsa.europa.eu/en/news/efsa-adopts-opinion-two-ingredients-commonly-used-some-energy-drinks"
      },
      {
        "name": "BfR · energy-drink ingredients",
        "url": "https://www.bfr.bund.de/en/release/frequently-asked-questions-on-caffeine-and-foods-containing-caffeine-including-energy-drinks/"
      }
    ],
    "compound": false,
    "reviewed": "4 November 2026",
    // Same ingrediensartikkel på nynorsk
    "nn": {
      "name": "D-glukuronolakton",
      "category": "Cellefunksjon",
      "symbol": "C₆H₈O₆",
      "areas": [
        "Normal stoffskiftefunksjon"
      ],
      "what": "Eit stoff knytt til glukoseomsetjinga, tilsett i nokre energidrikkar.",
      "body": "Det er knytt til stoff kroppen allereie lagar. Det tyder ikkje at meir av stoffet gjennom drikke betrar arbeidet til levra eller fjernar giftstoff.",
      "good": "Dette er eit nyttig døme på at eit vanleg stoff i kroppen finst i ei energidrikkoppskrift. EFSA har vurdert bruken ved eksponeringane som var omfatta av vurderinga av energidrikkar. Å forstå vurderinga hjelper med å skilje spørsmålet om tryggleik ved ei gitt eksponering frå eit løfte om betre vakenheit eller prestasjon.",
      "bad": "Ein dokumentert ekstra prestasjonsfordel er ikkje fastslått her. Stoffet erstattar ikkje søvn, fjernar ikkje koffeinverknadene og rettferdiggjer ikkje å drikke fleire boksar. Mengda er ikkje publisert i den valde Monster-oppføringa, så denne forklaringa kan ikkje samanlikne boksen med ein studiedose eller rekne ut personleg tryggleik.",
      "evidence": "Tryggleiksvurderinga til EFSA gjeld eksponeringane som blei undersøkte. Ho er ikkje dokumentasjon på ein avgiftingsfordel eller bevis for at uavgrensa inntak er ufarleg.",
      "sources": [
        {
          "name": "EFSA · taurin og D-glukuronolakton",
          "url": "https://www.efsa.europa.eu/en/news/efsa-adopts-opinion-two-ingredients-commonly-used-some-energy-drinks"
        },
        {
          "name": "BfR · ingrediensar i energidrikkar",
          "url": "https://www.bfr.bund.de/en/release/frequently-asked-questions-on-caffeine-and-foods-containing-caffeine-including-energy-drinks/"
        }
      ],
      "reviewed": "4. november 2026"
    }
  },
  // ── STOFF 2.63: Sorbic acid [sorbic-acid] ──
  {
    "id": "sorbic-acid",
    "name": "Sorbic acid",
    "category": "Preservative",
    "symbol": "E200",
    "areas": [
      "Shelf life"
    ],
    // Engelsk fagtekst: kva stoffet er, kroppen, fordelar og ulemper
    "what": "A preservative used to limit spoilage, distinct from potassium sorbate.",
    "body": "Its job is to protect the drink in the container. It does not stimulate your brain or supply a nutritional benefit to your organs.",
    "good": "Sorbic acid helps keep a suitable food or drink from spoiling. That is useful for shelf life and product quality. Naming it separately makes the label clearer: E200 is the acid, while E202 is potassium sorbate. They are related ingredients, but their names should not be silently swapped.",
    "bad": "Preservation is not an extra body benefit. The ingredient list does not reveal the amount used or your total exposure from different foods. Authorised use relates to specified conditions; a chemical name alone cannot tell you that the ingredient damages an organ, or that any amount would be harmless.",
    "evidence": "The selected Monster retailer list names sorbic acid. The enlarged animation layer is not its real concentration.",
    "sources": [
      {
        "name": "European Commission · additive roles and assessment",
        "url": "https://food.ec.europa.eu/food-safety/food-improvement-agents/additives_en"
      }
    ],
    "compound": false,
    "reviewed": "4 November 2026",
    // Same ingrediensartikkel på nynorsk
    "nn": {
      "name": "Sorbinsyre",
      "category": "Konserveringsmiddel",
      "symbol": "E200",
      "areas": [
        "Haldbarheit"
      ],
      "what": "Eit konserveringsmiddel brukt for å avgrense skjemming, ulikt kaliumsorbat.",
      "body": "Oppgåva er å verne drikka i behaldaren. Det stimulerer ikkje hjernen og gir ikkje ein ernæringsfordel for organa.",
      "good": "Sorbinsyre bidreg til å hindre at eigna mat eller drikke blir skjemd. Det er nyttig for haldbarheita og produktkvaliteten. Å namngi stoffet for seg gjer etiketten tydelegare: E200 er syra, medan E202 er kaliumsorbat. Ingrediensane er nærskylde, men namna deira skal ikkje bytast om utan at det blir forklart.",
      "bad": "Konservering er ikkje ein ekstra fordel for kroppen. Ingredienslista viser ikkje mengda som er brukt, eller den samla eksponeringa di frå ulike matvarer. Godkjend bruk er knytt til bestemte vilkår. Eit kjemisk namn åleine kan ikkje fortelje om ingrediensen skadar eit organ, eller om alle mengder ville vere ufarlege.",
      "evidence": "Den valde forhandlarlista for Monster nemner sorbinsyre. Det forstørra laget i animasjonen er ikkje den verkelege konsentrasjonen.",
      "sources": [
        {
          "name": "Europakommisjonen · oppgåver og vurdering av tilsetjingsstoff",
          "url": "https://food.ec.europa.eu/food-safety/food-improvement-agents/additives_en"
        }
      ],
      "reviewed": "4. november 2026"
    }
  },
  // ── STOFF 2.64: Benzoic acid [benzoic-acid] ──
  {
    "id": "benzoic-acid",
    "name": "Benzoic acid",
    "category": "Preservative",
    "symbol": "E210",
    "areas": [
      "Shelf life"
    ],
    // Engelsk fagtekst: kva stoffet er, kroppen, fordelar og ulemper
    "what": "A preservative named in the Monster recipe, distinct from sodium benzoate.",
    "body": "It helps preserve the product. E210 is benzoic acid; E211 is its sodium salt. Neither is added as a nutrient for a particular organ.",
    "good": "Benzoic acid helps limit microbial spoilage in suitable foods and drinks. This explains its practical place on an ingredient list. Learning the exact name also helps you compare formulas: Monster’s selected list names the acid, while several other sodas name sodium benzoate instead.",
    "bad": "Its presence does not establish a health or performance benefit. Safety depends on the amount and permitted use, and this drink’s individual preservative dose is undisclosed. It would therefore be misleading to assign it an organ-damage claim from the name alone or to describe an unmeasured amount as unlimited protection.",
    "evidence": "The guide follows the named E210 ingredient rather than replacing it with E211. General additive assessment is different from a measurement of this can.",
    "sources": [
      {
        "name": "European Commission · preservatives and exposure",
        "url": "https://food.ec.europa.eu/food-safety/food-improvement-agents/additives_en"
      }
    ],
    "compound": false,
    "reviewed": "4 November 2026",
    // Same ingrediensartikkel på nynorsk
    "nn": {
      "name": "Benzosyre",
      "category": "Konserveringsmiddel",
      "symbol": "E210",
      "areas": [
        "Haldbarheit"
      ],
      "what": "Eit konserveringsmiddel namngitt i Monster-oppskrifta, ulikt natriumbenzoat.",
      "body": "Det hjelper med å konservere produktet. E210 er benzosyre, medan E211 er natriumsaltet til syra. Ingen av dei er tilsette som næring for eit bestemt organ.",
      "good": "Benzosyre bidreg til å avgrense skjemming frå mikroorganismar i eigna mat og drikke. Det forklarer den praktiske plassen på ei ingrediensliste. Det nøyaktige namnet hjelper deg òg med å samanlikne oppskrifter: den valde lista til Monster nemner syra, medan fleire andre brusar nemner natriumbenzoat i staden.",
      "bad": "At stoffet finst i drikka, dokumenterer ikkje ein helse- eller prestasjonsfordel. Tryggleiken avheng av mengda og tillaten bruk, og den individuelle konserveringsmiddeldosen i denne drikka er ikkje oppgitt. Det ville difor vere misvisande å tilordne stoffet ein påstand om organskade ut frå namnet åleine, eller å omtale ei umålt mengd som uavgrensa vern.",
      "evidence": "Forklaringa følgjer den namngitte E210-ingrediensen i staden for å erstatte han med E211. Ei generell vurdering av tilsetjingsstoff er noko anna enn ei måling av denne boksen.",
      "sources": [
        {
          "name": "Europakommisjonen · konserveringsmiddel og eksponering",
          "url": "https://food.ec.europa.eu/food-safety/food-improvement-agents/additives_en"
        }
      ],
      "reviewed": "4. november 2026"
    }
  },
  // ── STOFF 2.65: Glucose syrup [glucose-syrup] ──
  {
    "id": "glucose-syrup",
    "name": "Glucose syrup",
    "category": "Carbohydrate",
    "symbol": "A starch-derived sugar mixture",
    "areas": [
      "Energy intake",
      "Teeth"
    ],
    // Engelsk fagtekst: kva stoffet er, kroppen, fordelar og ulemper
    "what": "A syrup containing glucose and other carbohydrates made by breaking down starch.",
    "body": "Its sugars supply energy and contribute to the one total sugars figure. It is a syrup mixture, rather than a separate dose of pure dextrose powder.",
    "good": "Glucose syrup gives a recipe sweetness and body as well as carbohydrate energy. Naming it helps explain why two drinks can list different sugar ingredients even when the nutrition table combines their sugars. Its share belongs to the same drink total and should not be added to that total again.",
    "bad": "Sugars from this syrup count as free sugars. Frequent sugary drinks can contribute to tooth decay, and extra energy beyond your needs can contribute to weight gain. A different name or a starch origin does not make the syrup’s sugars disappear from the nutrition comparison.",
    "evidence": "The selected Monster listing does not disclose the syrup’s separate amount. It is not assigned an extra sugar total or treated as high-fructose corn syrup.",
    "sources": [
      {
        "name": "NHS · glucose syrup and free sugars",
        "url": "https://www.nhs.uk/live-well/eat-well/food-types/how-does-sugar-in-our-diet-affect-our-health/"
      }
    ],
    "compound": false,
    "reviewed": "4 November 2026",
    // Same ingrediensartikkel på nynorsk
    "nn": {
      "name": "Glukosesirup",
      "category": "Karbohydrat",
      "symbol": "Ei sukkerblanding laga av stivelse",
      "areas": [
        "Energiinntak",
        "Tenner"
      ],
      "what": "Ein sirup med glukose og andre karbohydrat som er laga ved å bryte ned stivelse.",
      "body": "Sukkerartane i sirupen gir energi og inngår i den eine samla sukkermengda. Det er ei sirupblanding, ikkje ein eigen dose reint dekstrosepulver.",
      "good": "Glukosesirup gir ei oppskrift søtsmak og fylde, i tillegg til energi frå karbohydrat. Namnet hjelper deg å forstå kvifor to drikkar kan føre opp ulike sukkeringrediensar sjølv om næringstabellen samlar sukkeret deira i eitt tal. Sukkeret frå sirupen høyrer til den same totalsummen for drikka og skal ikkje leggjast til ein gong til.",
      "bad": "Sukkerartane frå denne sirupen blir rekna som fritt sukker. Dersom du ofte drikk sukkerhaldige drikkar, kan det bidra til hol i tennene. Meir energi enn du treng, kan bidra til vektauke. Eit anna namn eller opphav i stivelse får ikkje sukkeret i sirupen til å forsvinne frå næringssamanlikninga.",
      "evidence": "Den valde Monster-oppføringa oppgir ikkje den eigne mengda sirup. Sirupen får ikkje ein ekstra sukkersum og blir ikkje behandla som maissirup med høgt fruktoseinnhald.",
      "sources": [
        {
          "name": "NHS · glukosesirup og fritt sukker",
          "url": "https://www.nhs.uk/live-well/eat-well/food-types/how-does-sugar-in-our-diet-affect-our-health/"
        }
      ],
      "reviewed": "4. november 2026"
    }
  },
  // ── STOFF 2.66: Sodium carbonates [sodium-carbonates] ──
  {
    "id": "sodium-carbonates",
    "name": "Sodium carbonates",
    "category": "Acidity",
    "symbol": "E500 family",
    "areas": [
      "Drink acidity"
    ],
    // Engelsk fagtekst: kva stoffet er, kroppen, fordelar og ulemper
    "what": "A family of salts used to control acidity; the label does not specify one exact form.",
    "body": "They help balance the drink’s acidity. A familiar example in this family is sodium bicarbonate, but that exact form is not inferred from this label.",
    "good": "Carbonates can help a manufacturer control the recipe’s acidity and keep its taste consistent. This is the practical reason to put them in a drink. The sodium carbonate family has more than one member, so keeping the label’s family name is more accurate than choosing a specific molecule without evidence.",
    "bad": "Their useful job in the recipe does not mean the drink treats heartburn or changes your body into a healthier state. The individual amount is undisclosed. The word sodium also does not give you an extra sodium dose to add to the nutrition panel; that panel already describes the finished drink.",
    "evidence": "The Norwegian Red Bull listing says sodium carbonates. This guide preserves that family-level wording rather than claiming a more specific formula.",
    "sources": [
      {
        "name": "UK FSA · approved additives",
        "url": "https://www.food.gov.uk/print/pdf/node/847"
      },
      {
        "name": "Encon · Norwegian Red Bull label",
        "url": "https://www.encon.no/red-bull-energidrikk-250-ml/5637146308.p"
      }
    ],
    "compound": false,
    "reviewed": "4 November 2026",
    // Same ingrediensartikkel på nynorsk
    "nn": {
      "name": "Natriumkarbonat",
      "category": "Surleik",
      "symbol": "E500-familien",
      "areas": [
        "Surleik i drikka"
      ],
      "what": "Ein familie av salt som blir brukte til å regulere surleik. Etiketten oppgir ikkje éi bestemt form.",
      "body": "Dei hjelper til med å balansere surleiken i drikka. Natriumhydrogenkarbonat er eit kjent døme i denne familien, men etiketten gir ikkje grunnlag for å slå fast at det er nettopp denne forma.",
      "good": "Karbonat kan hjelpe produsenten med å regulere surleiken i oppskrifta og halde smaken jamn. Dette er den praktiske grunnen til å bruke dei i ei drikk. Natriumkarbonatfamilien har fleire medlemer, så det er meir presist å behalde familienamnet frå etiketten enn å velje eit bestemt molekyl utan dokumentasjon.",
      "bad": "Den nyttige oppgåva deira i oppskrifta betyr ikkje at drikka behandlar halsbrann eller gjer kroppen sunnare. Mengda av kvar ingrediens er ikkje oppgitt. Ordet natrium gir deg heller ikkje ein ekstra natriumdose som skal leggjast til næringstabellen. Tabellen skildrar allereie den ferdige drikka.",
      "evidence": "Den norske Red Bull-oppføringa seier natriumkarbonat. Denne rettleiinga beheld ordlyden på familienivå i staden for å hevde at ei meir spesifikk form er stadfesta.",
      "sources": [
        {
          "name": "UK FSA · godkjende tilsetjingsstoff",
          "url": "https://www.food.gov.uk/print/pdf/node/847"
        },
        {
          "name": "Encon · norsk Red Bull-etikett",
          "url": "https://www.encon.no/red-bull-energidrikk-250-ml/5637146308.p"
        }
      ],
      "reviewed": "4. november 2026"
    }
  },
  // ── STOFF 2.67: Magnesium carbonates [magnesium-carbonates] ──
  {
    "id": "magnesium-carbonates",
    "name": "Magnesium carbonates",
    "category": "Acidity",
    "symbol": "E504 family",
    "areas": [
      "Drink acidity"
    ],
    // Engelsk fagtekst: kva stoffet er, kroppen, fordelar og ulemper
    "what": "Magnesium salts used as acidity regulators in the selected Red Bull recipe.",
    "body": "Here their role is to help control the formula. A magnesium-containing ingredient does not tell you that the drink supplies a meaningful magnesium dose.",
    "good": "These salts help the recipe reach a suitable acidity and flavour balance. Learning their role makes the chemical name less mysterious. Magnesium has normal nutritional roles, but those roles are a separate question from why a manufacturer uses a magnesium carbonate ingredient in a drink.",
    "bad": "You cannot use this ingredient name to claim better muscles, better sleep or correction of a magnesium deficiency. The amount and exact form are not disclosed in the selected listing. Without those details, supplement results cannot be transferred to the can or used to promise a personal benefit.",
    "evidence": "No magnesium amount is invented in the nutrition table. The label identifies the E504 family without establishing a supplement-sized dose.",
    "sources": [
      {
        "name": "UK FSA · magnesium carbonates",
        "url": "https://data.food.gov.uk/regulated-products/id/food-additives/authorisation/e-504"
      },
      {
        "name": "Encon · Red Bull acidity regulators",
        "url": "https://www.encon.no/red-bull-energidrikk-250-ml/5637146308.p"
      }
    ],
    "compound": false,
    "reviewed": "4 November 2026",
    // Same ingrediensartikkel på nynorsk
    "nn": {
      "name": "Magnesiumkarbonat",
      "category": "Surleik",
      "symbol": "E504-familien",
      "areas": [
        "Surleik i drikka"
      ],
      "what": "Magnesiumsalt som blir brukte til å regulere surleiken i den valde Red Bull-oppskrifta.",
      "body": "Her er oppgåva deira å hjelpe til med å styre samansetjinga. Ein ingrediens som inneheld magnesium, fortel ikkje at drikka gir ein vesentleg dose magnesium.",
      "good": "Desse salta hjelper oppskrifta med å få ein passande surleik og smaksbalanse. Når du kjenner oppgåva deira, blir det kjemiske namnet mindre gåtefullt. Magnesium har vanlege ernæringsmessige oppgåver, men det er eit anna spørsmål enn kvifor produsenten bruker ein ingrediens frå magnesiumkarbonatfamilien i ei drikk.",
      "bad": "Du kan ikkje bruke dette ingrediensnamnet som grunnlag for påstandar om betre musklar, betre søvn eller behandling av magnesiummangel. Mengda og den nøyaktige forma er ikkje oppgitt i den valde oppføringa. Utan desse detaljane kan resultat frå kosttilskot ikkje overførast til boksen eller brukast til å love deg ein personleg fordel.",
      "evidence": "Det blir ikkje funne på ei magnesiummengd i næringstabellen. Etiketten identifiserer E504-familien utan å stadfeste ein dose på nivå med eit kosttilskot.",
      "sources": [
        {
          "name": "UK FSA · magnesiumkarbonat",
          "url": "https://data.food.gov.uk/regulated-products/id/food-additives/authorisation/e-504"
        },
        {
          "name": "Encon · surleiksregulatorar i Red Bull",
          "url": "https://www.encon.no/red-bull-energidrikk-250-ml/5637146308.p"
        }
      ],
      "reviewed": "4. november 2026"
    }
  },
  // ── STOFF 2.68: Caramel colour · class undisclosed [caramel-unspecified] ──
  {
    "id": "caramel-unspecified",
    "name": "Caramel colour · class undisclosed",
    "category": "Colour",
    "symbol": "Caramel family",
    "areas": [
      "Appearance"
    ],
    // Engelsk fagtekst: kva stoffet er, kroppen, fordelar og ulemper
    "what": "A caramel colour listed without its exact class in the selected Red Bull information.",
    "body": "It contributes colour. The word caramel does not tell us which manufacturing class is present or give a nutritional benefit.",
    "good": "Caramel colour helps give the drink a consistent appearance. Keeping the description at the label’s level of detail lets you compare it honestly with drinks that name E150b or E150d. It also shows why an ingredient list sometimes needs an explicit uncertainty rather than an impressive but guessed chemical name.",
    "bad": "The colour does not make the drink more nutritious. Different caramel classes have different production conditions, so a class-specific claim cannot be assigned when the class is undisclosed. The amount is also unknown; the visible brown layer is an illustration, not a measurement of this ingredient.",
    "evidence": "Do not read this generic caramel listing as confirmation of E150a, E150b, E150c or E150d. The class needs a more specific source.",
    "sources": [
      {
        "name": "EFSA · caramel classes",
        "url": "https://www.efsa.europa.eu/en/efsajournal/pub/2004"
      },
      {
        "name": "Encon · Red Bull colour listing",
        "url": "https://www.encon.no/red-bull-energidrikk-250-ml/5637146308.p"
      }
    ],
    "compound": false,
    "reviewed": "4 November 2026",
    // Same ingrediensartikkel på nynorsk
    "nn": {
      "name": "Karamellfarge · klasse ikkje oppgitt",
      "category": "Farge",
      "symbol": "Karamellfamilien",
      "areas": [
        "Utsjånad"
      ],
      "what": "Ein karamellfarge som er oppført utan nøyaktig klasse i den valde informasjonen om Red Bull.",
      "body": "Han bidreg med farge. Ordet karamell fortel ikkje kva produksjonsklasse som er til stades, og viser ikkje til ein ernæringsmessig fordel.",
      "good": "Karamellfarge hjelper drikka med å få ein jamn utsjånad. Når skildringa held seg til detaljnivået på etiketten, kan du samanlikne henne ærleg med drikkar som namngir E150b eller E150d. Det viser òg kvifor ei ingrediensliste somme tider treng eit tydeleg atterhald i staden for eit imponerande kjemisk namn som berre er gjetta.",
      "bad": "Fargen gjer ikkje drikka meir næringsrik. Dei ulike karamellklassane blir framstilte under ulike vilkår, så ein klassespesifikk påstand kan ikkje brukast når klassen ikkje er oppgitt. Mengda er òg ukjend. Det synlege brune laget er ein illustrasjon, ikkje ei måling av denne ingrediensen.",
      "evidence": "Ikkje les denne generelle karamelloppføringa som ei stadfesting av E150a, E150b, E150c eller E150d. Klassen krev ei meir spesifikk kjelde.",
      "sources": [
        {
          "name": "EFSA · karamellklassar",
          "url": "https://www.efsa.europa.eu/en/efsajournal/pub/2004"
        },
        {
          "name": "Encon · fargeoppføringa for Red Bull",
          "url": "https://www.encon.no/red-bull-energidrikk-250-ml/5637146308.p"
        }
      ],
      "reviewed": "4. november 2026"
    }
  },
  // ── STOFF 2.69: Theobromine [theobromine] ──
  {
    "id": "theobromine",
    "name": "Theobromine",
    "category": "Natural compound",
    "symbol": "C₇H₈N₄O₂",
    "areas": [
      "Taste",
      "Stimulant chemistry"
    ],
    // Engelsk fagtekst: kva stoffet er, kroppen, fordelar og ulemper
    "what": "A naturally occurring cocoa compound related to caffeine.",
    "body": "It contributes to cocoa’s bitterness. Its effects differ from caffeine, so the two should not be counted as the same stimulant dose.",
    "good": "Theobromine helps explain why cocoa has a bitter side as well as a chocolate aroma. It is a real part of cocoa chemistry, rather than an extra powder that must have been added to chocolate milk. Studying it helps you see how a short ingredient list can contain many naturally occurring molecules.",
    "bad": "A cocoa percentage does not reveal a measured theobromine dose or predict how a particular drink affects you. Effects of a concentrated supplement cannot be transferred to a sweetened cocoa drink. It also does not remove that drink’s sugar or establish a sleep, heart or exercise benefit.",
    "evidence": "This is background chemistry of cocoa. Processing changes composition, and the selected branded chocolate drink has not been measured for this compound here.",
    "sources": [
      {
        "name": "Primary study · cocoa methylxanthines and flavanols",
        "url": "https://pubmed.ncbi.nlm.nih.gov/27132838/"
      },
      {
        "name": "Health Canada · theobromine in foods",
        "url": "https://www.canada.ca/en/health-canada/services/food-nutrition/supplemented-foods/list-permitted-food-ingredients/information-ingredients-foods.html"
      }
    ],
    "compound": true,
    "reviewed": "4 November 2026",
    // Same ingrediensartikkel på nynorsk
    "nn": {
      "name": "Teobromin",
      "category": "Naturleg stoff",
      "symbol": "C₇H₈N₄O₂",
      "areas": [
        "Smak",
        "Kjemien bak stimulerande stoff"
      ],
      "what": "Eit stoff som finst naturleg i kakao og er i slekt med koffein.",
      "body": "Det bidreg til den bitre smaken i kakao. Verknadene skil seg frå koffein, så dei to skal ikkje reknast som den same dosen stimulerande stoff.",
      "good": "Teobromin hjelper deg å forstå kvifor kakao har ei bitter side i tillegg til sjokoladearomaen. Det er ein faktisk del av kakaokjemien, ikkje eit ekstra pulver som må ha blitt tilsett sjokolademjølka. Ved å lære om det ser du korleis ei kort ingrediensliste kan romme mange molekyl som finst naturleg.",
      "bad": "Ein kakaoprosent avslører ikkje ein målt teobromindose og kan ikkje føreseie korleis ei bestemt drikk påverkar deg. Verknader frå eit konsentrert kosttilskot kan ikkje overførast til ei søta kakaodrikk. Stoffet fjernar heller ikkje sukkeret i drikka eller dokumenterer ein fordel for søvn, hjarte eller trening.",
      "evidence": "Dette er bakgrunnskjemi om kakao. Bearbeiding endrar samansetjinga, og den valde sjokoladedrikka frå eit bestemt merke er ikkje analysert for dette stoffet her.",
      "sources": [
        {
          "name": "Primærstudie · metylxantin og flavanolar i kakao",
          "url": "https://pubmed.ncbi.nlm.nih.gov/27132838/"
        },
        {
          "name": "Health Canada · teobromin i matvarer",
          "url": "https://www.canada.ca/en/health-canada/services/food-nutrition/supplemented-foods/list-permitted-food-ingredients/information-ingredients-foods.html"
        }
      ],
      "reviewed": "4. november 2026"
    }
  },
  // ── STOFF 2.70: Cocoa flavanols · epicatechin [cocoa-flavanols] ──
  {
    "id": "cocoa-flavanols",
    "name": "Cocoa flavanols · epicatechin",
    "category": "Natural compound",
    "symbol": "Flavanol family",
    "areas": [
      "Plant chemistry",
      "Blood-vessel research"
    ],
    // Engelsk fagtekst: kva stoffet er, kroppen, fordelar og ulemper
    "what": "A group of cocoa compounds that includes epicatechin and catechin.",
    "body": "Researchers study how these compounds are absorbed and affect the body. Their presence in cocoa does not prove a benefit from this chocolate drink.",
    "good": "Flavanols give you another way to understand cocoa beyond its fat, sugar and flavour. Laboratory analysis can distinguish individual molecules such as epicatechin. That detail is useful for understanding research, because a carefully measured cocoa preparation can be chemically different from a sweetened milk drink.",
    "bad": "Cocoa processing can change flavanol levels substantially. A darker colour, stronger taste or cocoa percentage is not a reliable measurement of an individual flavanol dose. Benefits reported for a measured research preparation cannot automatically be promised for a product whose flavanol amount has not been published.",
    "evidence": "The guide describes typical cocoa chemistry, not a verified epicatechin amount in Litago. It does not turn the product into a health supplement.",
    "sources": [
      {
        "name": "Primary analysis · variation in cocoa flavanols",
        "url": "https://pubmed.ncbi.nlm.nih.gov/27132838/"
      },
      {
        "name": "Primary trial · measured cocoa extract",
        "url": "https://www.tandfonline.com/doi/abs/10.3402/fnr.v60.30449"
      }
    ],
    "compound": true,
    "reviewed": "4 November 2026",
    // Same ingrediensartikkel på nynorsk
    "nn": {
      "name": "Kakaoflavanolar · epikatekin",
      "category": "Naturleg stoff",
      "symbol": "Flavanolfamilien",
      "areas": [
        "Plantekjemi",
        "Forsking på blodårer"
      ],
      "what": "Ei gruppe kakaostoff som mellom anna omfattar epikatekin og katekin.",
      "body": "Forskarar undersøkjer korleis desse stoffa blir tekne opp og påverkar kroppen. At dei finst i kakao, beviser ikkje ein fordel frå denne sjokoladedrikka.",
      "good": "Flavanolar gir deg ein annan måte å forstå kakao på enn berre gjennom feitt, sukker og smak. Laboratorieanalysar kan skilje mellom enkeltmolekyl som epikatekin. Denne detaljen er nyttig når du skal forstå forsking, fordi eit nøyaktig målt kakaopreparat kan ha ei anna kjemisk samansetjing enn ei søta mjølkedrikk.",
      "bad": "Bearbeiding av kakao kan endre flavanolinnhaldet mykje. Mørkare farge, sterkare smak eller kakaoprosent er ikkje ei påliteleg måling av dosen av ein bestemt flavanol. Fordelar som er rapporterte for eit målt forskingspreparat, kan ikkje automatisk lovast for eit produkt der flavanolmengda ikkje er publisert.",
      "evidence": "Rettleiinga skildrar typisk kakaokjemi, ikkje ei stadfesta epikatekinmengd i Litago. Ho gjer ikkje produktet til eit helsekosttilskot.",
      "sources": [
        {
          "name": "Primæranalyse · variasjon i kakaoflavanolar",
          "url": "https://pubmed.ncbi.nlm.nih.gov/27132838/"
        },
        {
          "name": "Primærforsøk · målt kakaoekstrakt",
          "url": "https://www.tandfonline.com/doi/abs/10.3402/fnr.v60.30449"
        }
      ],
      "reviewed": "4. november 2026"
    }
  },
  // ── STOFF 2.71: Lactose [lactose] ──
  {
    "id": "lactose",
    "name": "Lactose",
    "category": "Natural compound",
    "symbol": "Milk sugar · C₁₂H₂₂O₁₁",
    "areas": [
      "Small intestine",
      "Digestion"
    ],
    // Engelsk fagtekst: kva stoffet er, kroppen, fordelar og ulemper
    "what": "The sugar that occurs naturally in milk.",
    "body": "An enzyme called lactase breaks lactose into smaller sugars in your small intestine. Low lactase activity can leave lactose undigested and cause gut symptoms.",
    "good": "When you digest lactose, its smaller sugars can be used for energy. Understanding lactose also helps you read a milk drink’s label: total sugars includes this naturally present milk sugar as well as any sugar added by the manufacturer. They are different sources within one total.",
    "bad": "People with lactose intolerance may get bloating, wind, abdominal pain or diarrhoea after consuming lactose. The amount tolerated varies. Lactose intolerance is different from milk-protein allergy, and a product being lactose-free would not by itself make it suitable for someone with a milk allergy.",
    "evidence": "Lactose is part of milk, not a separately added ingredient inferred for these cartons. No individual lactose quantity is calculated from the total sugars.",
    "sources": [
      {
        "name": "NIDDK · lactose digestion and intolerance",
        "url": "https://www.niddk.nih.gov/health-information/digestive-diseases/lactose-intolerance"
      },
      {
        "name": "NHS · milk and lactose",
        "url": "https://www.nhs.uk/conditions/lactose-intolerance/"
      }
    ],
    "compound": true,
    "reviewed": "4 November 2026",
    // Same ingrediensartikkel på nynorsk
    "nn": {
      "name": "Laktose",
      "category": "Naturleg stoff",
      "symbol": "Mjølkesukker · C₁₂H₂₂O₁₁",
      "areas": [
        "Tynntarm",
        "Fordøying"
      ],
      "what": "Sukkerarten som finst naturleg i mjølk.",
      "body": "Eit enzym som heiter laktase, bryt laktose ned til mindre sukkerartar i tynntarmen. Låg laktaseaktivitet kan føre til at laktose ikkje blir broten ned, og gi plager i magen og tarmen.",
      "good": "Når du fordøyer laktose, kan dei mindre sukkerartane brukast til energi. Kunnskap om laktose hjelper deg òg å lese etiketten på ei mjølkedrikk: samla sukkerinnhald omfattar både dette naturlege mjølkesukkeret og eventuelt sukker som produsenten har tilsett. Dei er ulike kjelder innanfor éin totalsum.",
      "bad": "Personar med laktoseintoleranse kan få oppblåst mage, luftplager, magesmerter eller diaré etter å ha fått i seg laktose. Kor mykje ein toler, varierer. Laktoseintoleranse er noko anna enn mjølkeproteinallergi. At eit produkt er laktosefritt, gjer det ikkje i seg sjølv eigna for nokon med mjølkeallergi.",
      "evidence": "Laktose er ein del av mjølka, ikkje ein ingrediens vi går ut frå er tilsett separat i desse kartongane. Det blir ikkje rekna ut ei eiga laktosemengd frå det samla sukkerinnhaldet.",
      "sources": [
        {
          "name": "NIDDK · laktosefordøying og intoleranse",
          "url": "https://www.niddk.nih.gov/health-information/digestive-diseases/lactose-intolerance"
        },
        {
          "name": "NHS · mjølk og laktose",
          "url": "https://www.nhs.uk/conditions/lactose-intolerance/"
        }
      ],
      "reviewed": "4. november 2026"
    }
  },
  // ── STOFF 2.72: Casein proteins [casein] ──
  {
    "id": "casein",
    "name": "Casein proteins",
    "category": "Natural compound",
    "symbol": "Milk-protein family",
    "areas": [
      "Muscles",
      "Immune system"
    ],
    // Engelsk fagtekst: kva stoffet er, kroppen, fordelar og ulemper
    "what": "A major family of proteins naturally present in cow’s milk.",
    "body": "Your gut breaks proteins down into building blocks your body uses for tissues. In milk allergy, the immune system can react to milk proteins such as casein.",
    "good": "Casein contributes to the protein already counted in a milk drink’s nutrition table. Your body can use the digested amino acids for normal tissue maintenance and repair. These proteins also help explain milk’s structure and texture, without assuming a separate casein supplement was added to the recipe.",
    "bad": "Casein matters to people with milk allergy. Removing lactose does not remove milk proteins, so lactose-free and safe for milk allergy are different questions. The presence of casein also does not make a sweetened milk drink an unlimited protein source or establish an extra muscle-building benefit from this carton.",
    "evidence": "This guide explains milk chemistry. The manufacturer does not provide a separate casein amount, and it is not counted again on top of total protein.",
    "sources": [
      {
        "name": "Health Canada · milk proteins and allergy",
        "url": "https://www.canada.ca/en/health-canada/services/food-nutrition/reports-publications/food-safety/milk-priority-food-allergen.html"
      },
      {
        "name": "NHS · dairy protein",
        "url": "https://www.nhs.uk/Live-well/eat-well/food-types/milk-and-dairy-nutrition/"
      }
    ],
    "compound": true,
    "reviewed": "4 November 2026",
    // Same ingrediensartikkel på nynorsk
    "nn": {
      "name": "Kaseinprotein",
      "category": "Naturleg stoff",
      "symbol": "Mjølkeproteinfamilien",
      "areas": [
        "Musklar",
        "Immunforsvar"
      ],
      "what": "Ein stor familie av protein som finst naturleg i kumjølk.",
      "body": "Tarmen bryt protein ned til byggjesteinar som kroppen bruker i veva. Ved mjølkeallergi kan immunforsvaret reagere på mjølkeprotein som kasein.",
      "good": "Kasein bidreg til proteinet som allereie er rekna med i næringstabellen til ei mjølkedrikk. Kroppen kan bruke aminosyrene etter fordøyinga til vanleg vedlikehald og reparasjon av vev. Desse proteina hjelper deg òg å forstå strukturen og konsistensen til mjølk, utan at vi går ut frå at eit eige kaseintilskot er tilsett oppskrifta.",
      "bad": "Kasein er relevant for personar med mjølkeallergi. Å fjerne laktose fjernar ikkje mjølkeproteina, så laktosefritt og trygt ved mjølkeallergi er to ulike spørsmål. At drikka inneheld kasein, gjer heller ikkje ei søta mjølkedrikk til ei uavgrensa proteinkjelde eller dokumenterer ein ekstra muskelbyggjande fordel frå denne kartongen.",
      "evidence": "Denne rettleiinga forklarer mjølkekjemi. Produsenten oppgir ikkje ei eiga kaseinmengd, og ho blir ikkje rekna ein gong til oppå den samla proteinmengda.",
      "sources": [
        {
          "name": "Health Canada · mjølkeprotein og allergi",
          "url": "https://www.canada.ca/en/health-canada/services/food-nutrition/reports-publications/food-safety/milk-priority-food-allergen.html"
        },
        {
          "name": "NHS · protein i mjølkeprodukt",
          "url": "https://www.nhs.uk/Live-well/eat-well/food-types/milk-and-dairy-nutrition/"
        }
      ],
      "reviewed": "4. november 2026"
    }
  },
  // ── STOFF 2.73: Chlorogenic acids [chlorogenic-acids] ──
  {
    "id": "chlorogenic-acids",
    "name": "Chlorogenic acids",
    "category": "Natural compound",
    "symbol": "A family of coffee polyphenols",
    "areas": [
      "Taste",
      "Research"
    ],
    // Engelsk fagtekst: kva stoffet er, kroppen, fordelar og ulemper
    "what": "A family of plant compounds found in coffee, including several different molecules.",
    "body": "They contribute to coffee chemistry and change during roasting. Laboratory antioxidant activity is not proof of a health benefit from one particular cup.",
    "good": "These compounds help explain why coffee contains more chemistry than caffeine alone. Analytical studies can measure different chlorogenic acids and show how bean type and roasting change the mixture. Learning the family name helps you understand why researchers describe coffee preparations more precisely than simply calling them coffee.",
    "bad": "There is no measured amount for the cup or branded iced coffee shown here. A bean-analysis result cannot simply be copied into a drink’s nutrition panel. Claims about supplements or concentrated extracts also cannot establish that the undisclosed amount in this serving improves blood sugar, blood pressure or a particular organ.",
    "evidence": "This is ingredient chemistry, not a verified product analysis. Species, roast, extraction and dilution can all change the final amount.",
    "sources": [
      {
        "name": "Primary coffee-composition study",
        "url": "https://doi.org/10.1016/j.jfca.2023.105140"
      },
      {
        "name": "IARC · coffee composition",
        "url": "https://www.ncbi.nlm.nih.gov/books/NBK507020/"
      }
    ],
    "compound": true,
    "reviewed": "4 November 2026",
    // Same ingrediensartikkel på nynorsk
    "nn": {
      "name": "Klorogensyrer",
      "category": "Naturleg stoff",
      "symbol": "Ein familie av kaffipolyfenol",
      "areas": [
        "Smak",
        "Forsking"
      ],
      "what": "Ein familie av plantestoff som finst i kaffi, med fleire ulike molekyl.",
      "body": "Dei er ein del av kaffikjemien og endrar seg under brenning. Antioksidantaktivitet i laboratoriet er ikkje bevis på ein helsefordel frå éin bestemt kopp.",
      "good": "Desse stoffa hjelper deg å forstå kvifor kaffi inneheld meir kjemi enn berre koffein. Analytiske studiar kan måle ulike klorogensyrer og vise korleis bønnetype og brenning endrar blandinga. Når du lærer familienamnet, forstår du betre kvifor forskarar skildrar kaffipreparat meir presist enn berre å kalle dei kaffi.",
      "bad": "Det finst inga målt mengd for koppen eller den merkte iskaffien som blir vist her. Eit analyseresultat frå bønner kan ikkje utan vidare kopierast inn i næringstabellen til ei drikk. Påstandar om kosttilskot eller konsentrerte ekstrakt kan heller ikkje dokumentere at den uoppgitte mengda i denne porsjonen betrar blodsukker, blodtrykk eller eit bestemt organ.",
      "evidence": "Dette er ingredienskjemi, ikkje ein stadfesta produktanalyse. Art, brenning, ekstraksjon og fortynning kan alle endre den endelege mengda.",
      "sources": [
        {
          "name": "Primærstudie av kaffisamansetjing",
          "url": "https://doi.org/10.1016/j.jfca.2023.105140"
        },
        {
          "name": "IARC · samansetjing av kaffi",
          "url": "https://www.ncbi.nlm.nih.gov/books/NBK507020/"
        }
      ],
      "reviewed": "4. november 2026"
    }
  },
  // ── STOFF 2.74: Trigonelline [trigonelline] ──
  {
    "id": "trigonelline",
    "name": "Trigonelline",
    "category": "Natural compound",
    "symbol": "C₇H₇NO₂",
    "areas": [
      "Roasting chemistry",
      "Taste"
    ],
    // Engelsk fagtekst: kva stoffet er, kroppen, fordelar og ulemper
    "what": "A naturally occurring coffee compound that changes during roasting.",
    "body": "Some trigonelline breaks down as beans are heated, contributing to roasting chemistry. It is different from caffeine and is not assigned caffeine’s effects.",
    "good": "Trigonelline gives you a concrete example of how roasting changes a food’s chemistry. Researchers measure it alongside caffeine and chlorogenic acids when comparing coffees. That helps explain why two cups can start from different chemical mixtures even before milk, sugar or flavourings are added.",
    "bad": "The presence of a compound in coffee does not prove that a drink treats a disease or protects your brain. Its amount in the selected cup or carton is not measured here. Research on a specific isolated dose cannot be used to promise a benefit from an ordinary serving with an unknown amount.",
    "evidence": "This background guide makes no treatment claim and does not convert bean concentrations into milligrams per drink.",
    "sources": [
      {
        "name": "Primary coffee-composition study",
        "url": "https://doi.org/10.1016/j.jfca.2023.105140"
      },
      {
        "name": "IARC · trigonelline and roasting",
        "url": "https://www.ncbi.nlm.nih.gov/books/NBK507020/"
      }
    ],
    "compound": true,
    "reviewed": "4 November 2026",
    // Same ingrediensartikkel på nynorsk
    "nn": {
      "name": "Trigonellin",
      "category": "Naturleg stoff",
      "symbol": "C₇H₇NO₂",
      "areas": [
        "Kjemi ved brenning",
        "Smak"
      ],
      "what": "Eit stoff som finst naturleg i kaffi og endrar seg under brenning.",
      "body": "Noko trigonellin blir brote ned når bønnene blir varma opp, og bidreg til kjemien under brenninga. Det er eit anna stoff enn koffein og får ikkje tillagt verknadene til koffein.",
      "good": "Trigonellin gir deg eit konkret døme på korleis brenning endrar kjemien i ei matvare. Forskarar måler det saman med koffein og klorogensyrer når dei samanliknar kaffitypar. Dette hjelper deg å forstå kvifor to koppar kan starte med ulike kjemiske blandingar allereie før mjølk, sukker eller aroma blir tilsette.",
      "bad": "At eit stoff finst i kaffi, beviser ikkje at ei drikk behandlar ein sjukdom eller vernar hjernen din. Mengda i den valde koppen eller kartongen er ikkje målt her. Forsking på ein bestemt, isolert dose kan ikkje brukast til å love ein fordel frå ein vanleg porsjon med ukjend mengd.",
      "evidence": "Denne bakgrunnsrettleiinga gir ingen behandlingspåstand og reknar ikkje konsentrasjonar i bønner om til milligram per drikk.",
      "sources": [
        {
          "name": "Primærstudie av kaffisamansetjing",
          "url": "https://doi.org/10.1016/j.jfca.2023.105140"
        },
        {
          "name": "IARC · trigonellin og brenning",
          "url": "https://www.ncbi.nlm.nih.gov/books/NBK507020/"
        }
      ],
      "reviewed": "4. november 2026"
    }
  },
  // ── STOFF 2.75: Coffee melanoidins [coffee-melanoidins] ──
  {
    "id": "coffee-melanoidins",
    "name": "Coffee melanoidins",
    "category": "Natural compound",
    "symbol": "A complex roasting mixture",
    "areas": [
      "Colour",
      "Roasting chemistry"
    ],
    // Engelsk fagtekst: kva stoffet er, kroppen, fordelar og ulemper
    "what": "Brown substances formed through reactions between food components during roasting.",
    "body": "They are part of roasted coffee’s complex brown mixture. They are different from a separately added caramel food colour.",
    "good": "Melanoidins help explain how coffee can become brown through roasting without a manufacturer adding an E150 colour. They are a mixture rather than one neat molecule. This makes them useful for learning why the chemistry of a brewed food can be more complex than its short ingredient list suggests.",
    "bad": "A brown colour cannot tell you the melanoidin amount or establish a digestive or organ-health benefit. Research methods and coffee preparations differ, and the cup shown here has not been analysed. It would be misleading to label an unmeasured roasting mixture as a proven treatment or assign it an invented nutrient dose.",
    "evidence": "This is roasting chemistry within coffee. It is not shown as an extra additive or counted as another physical ingredient layer.",
    "sources": [
      {
        "name": "Primary study · coffee melanoidins",
        "url": "https://doi.org/10.1016/j.jfca.2023.105140"
      },
      {
        "name": "IARC · roasted coffee composition",
        "url": "https://www.ncbi.nlm.nih.gov/books/NBK507020/"
      }
    ],
    "compound": true,
    "reviewed": "4 November 2026",
    // Same ingrediensartikkel på nynorsk
    "nn": {
      "name": "Melanoidinar i kaffi",
      "category": "Naturleg stoff",
      "symbol": "Ei samansett blanding frå brenning",
      "areas": [
        "Farge",
        "Kjemi ved brenning"
      ],
      "what": "Brune stoff som blir danna gjennom reaksjonar mellom matkomponentar under brenning.",
      "body": "Dei er ein del av den samansette brune blandinga i brend kaffi. Dei er noko anna enn ein karamellfarge som er tilsett separat.",
      "good": "Melanoidinar hjelper deg å forstå korleis kaffi kan bli brun gjennom brenning utan at produsenten tilset ein E150-farge. Dei er ei blanding, ikkje eitt enkelt molekyl. Derfor er dei nyttige når du vil lære kvifor kjemien i ei bryggja matvare kan vere meir samansett enn den korte ingredienslista tyder på.",
      "bad": "Ein brun farge kan ikkje fortelje deg melanoidinmengda eller dokumentere ein fordel for fordøyinga eller organa. Forskingsmetodar og kaffipreparat varierer, og koppen som er vist her, er ikkje analysert. Det ville vere misvisande å kalle ei umålt blanding frå brenning for dokumentert behandling eller tildele henne ein oppdikta næringsstoffdose.",
      "evidence": "Dette er kjemi som oppstår under brenning av kaffi. Stoffa blir ikkje viste som eit ekstra tilsetjingsstoff eller rekna som endå eit fysisk ingredienslag.",
      "sources": [
        {
          "name": "Primærstudie · melanoidinar i kaffi",
          "url": "https://doi.org/10.1016/j.jfca.2023.105140"
        },
        {
          "name": "IARC · samansetjing av brend kaffi",
          "url": "https://www.ncbi.nlm.nih.gov/books/NBK507020/"
        }
      ],
      "reviewed": "4. november 2026"
    }
  },
  // ── STOFF 2.76: L-theanine [l-theanine] ──
  {
    "id": "l-theanine",
    "name": "L-theanine",
    "category": "Natural compound",
    "symbol": "A tea amino acid",
    "areas": [
      "Tea chemistry",
      "Research"
    ],
    // Engelsk fagtekst: kva stoffet er, kroppen, fordelar og ulemper
    "what": "An amino acid naturally found in tea leaves and extracted during brewing.",
    "body": "The amount reaching a cup depends on the tea and preparation. It is studied separately from caffeine, which can still affect sleep and heart rate.",
    "good": "L-theanine is a good example of a less familiar tea compound that scientists can measure in brewed cups. Studies of preparation show why a brewing method matters. Learning its name helps separate tea’s different components, instead of treating every effect of the drink as the action of one ingredient.",
    "bad": "Its occurrence in tea does not make a caffeinated cup a reliable sleep aid or guarantee relaxation. An iced-tea extract may differ from a fresh brew, and these products have not been analysed for theanine here. Results from a measured supplement dose cannot simply be assigned to an unknown drink amount.",
    "evidence": "For branded iced teas this is background chemistry of their tea ingredient, not confirmation of a product-specific theanine dose.",
    "sources": [
      {
        "name": "Primary study · theanine in prepared tea",
        "url": "https://research-information.bris.ac.uk/en/publications/how-much-theanine-in-a-cup-of-tea-effects-of-tea-type-and-method-/"
      },
      {
        "name": "Primary analysis · theanine in tea ingredients",
        "url": "https://pubmed.ncbi.nlm.nih.gov/27633949/"
      }
    ],
    "compound": true,
    "reviewed": "4 November 2026",
    // Same ingrediensartikkel på nynorsk
    "nn": {
      "name": "L-teanin",
      "category": "Naturleg stoff",
      "symbol": "Ei aminosyre frå te",
      "areas": [
        "Tekjemi",
        "Forsking"
      ],
      "what": "Ei aminosyre som finst naturleg i teblad og blir trekt ut under brygging.",
      "body": "Mengda som når fram til koppen, er avhengig av teen og tillaginga. Stoffet blir studert skilt frå koffein, som framleis kan påverke søvn og puls.",
      "good": "L-teanin er eit godt døme på eit mindre kjent testoff som forskarar kan måle i bryggja koppar. Studiar av tillaging viser kvifor bryggjemåten har noko å seie. Når du lærer namnet, blir det lettare å skilje dei ulike bestanddelane i te frå kvarandre, i staden for å forklare kvar verknad av drikka med éin ingrediens.",
      "bad": "At stoffet finst i te, gjer ikkje ein koffeinhaldig kopp til eit påliteleg søvnmiddel eller ein garanti for avslapping. Eit isteekstrakt kan skilje seg frå nybryggja te, og desse produkta er ikkje analyserte for teanin her. Resultat frå ein målt kosttilskotsdose kan ikkje utan vidare overførast til ei ukjend mengd i ei drikk.",
      "evidence": "For iste frå bestemte merke er dette bakgrunnskjemi om teingrediensen, ikkje ei stadfesting av ein produktspesifikk teanindose.",
      "sources": [
        {
          "name": "Primærstudie · teanin i tillaga te",
          "url": "https://research-information.bris.ac.uk/en/publications/how-much-theanine-in-a-cup-of-tea-effects-of-tea-type-and-method-/"
        },
        {
          "name": "Primæranalyse · teanin i teingrediensar",
          "url": "https://pubmed.ncbi.nlm.nih.gov/27633949/"
        }
      ],
      "reviewed": "4. november 2026"
    }
  },
  // ── STOFF 2.77: Theaflavins [theaflavins] ──
  {
    "id": "theaflavins",
    "name": "Theaflavins",
    "category": "Natural compound",
    "symbol": "Black-tea polyphenols",
    "areas": [
      "Colour",
      "Taste"
    ],
    // Engelsk fagtekst: kva stoffet er, kroppen, fordelar og ulemper
    "what": "Compounds formed as tea leaves undergo the oxidation used to make black tea.",
    "body": "They are part of black tea’s colour and taste. Findings about concentrated extracts are different from evidence about one ordinary cup.",
    "good": "Theaflavins help explain why black tea looks and tastes different from green tea. Researchers can separate members of this family in chemical analyses. This is useful background for understanding the tea extract in a drink, even when the finished product’s ingredient list simply says black tea.",
    "bad": "Colour intensity is not a reliable dose measurement. Research can use quantities or extracts very different from an ordinary cup, and it cannot prove a heart or weight-control benefit from a sweetened iced tea with an undisclosed amount. The tea flavour also does not remove added sugar elsewhere in the recipe.",
    "evidence": "This guide describes black-tea chemistry. The branded iced teas have no verified theaflavin measurements in this project.",
    "sources": [
      {
        "name": "Primary study · analysis of tea components",
        "url": "https://link.springer.com/content/pdf/10.1007/s13197-017-2791-5.pdf"
      },
      {
        "name": "Primary study · theaflavin exposure",
        "url": "https://pubmed.ncbi.nlm.nih.gov/11530986/"
      }
    ],
    "compound": true,
    "reviewed": "4 November 2026",
    // Same ingrediensartikkel på nynorsk
    "nn": {
      "name": "Teaflavinar",
      "category": "Naturleg stoff",
      "symbol": "Polyfenol i svart te",
      "areas": [
        "Farge",
        "Smak"
      ],
      "what": "Stoff som blir danna når teblad går gjennom oksidasjonen som blir brukt til å lage svart te.",
      "body": "Dei er ein del av fargen og smaken i svart te. Funn om konsentrerte ekstrakt er noko anna enn dokumentasjon om éin vanleg kopp.",
      "good": "Teaflavinar hjelper deg å forstå kvifor svart te ser og smakar annleis enn grøn te. Forskarar kan skilje medlemer av denne familien frå kvarandre i kjemiske analysar. Det er nyttig bakgrunn når du skal forstå teekstraktet i ei drikk, sjølv om ingredienslista til det ferdige produktet berre seier svart te.",
      "bad": "Kor sterk fargen er, er ikkje ei påliteleg dosemåling. Forsking kan bruke mengder eller ekstrakt som skil seg mykje frå ein vanleg kopp. Ho kan ikkje bevise ein fordel for hjartet eller vektkontroll frå ein søta iste med ei mengd som ikkje er oppgitt. Tesmaken fjernar heller ikkje tilsett sukker andre stader i oppskrifta.",
      "evidence": "Denne rettleiinga skildrar kjemien i svart te. Det finst ingen stadfesta teaflavinmålingar for iste frå dei aktuelle merka i dette prosjektet.",
      "sources": [
        {
          "name": "Primærstudie · analyse av tekomponentar",
          "url": "https://link.springer.com/content/pdf/10.1007/s13197-017-2791-5.pdf"
        },
        {
          "name": "Primærstudie · eksponering for teaflavinar",
          "url": "https://pubmed.ncbi.nlm.nih.gov/11530986/"
        }
      ],
      "reviewed": "4. november 2026"
    }
  },
  // ── STOFF 2.78: Hesperidin [hesperidin] ──
  {
    "id": "hesperidin",
    "name": "Hesperidin",
    "category": "Natural compound",
    "symbol": "A citrus flavanone",
    "areas": [
      "Citrus chemistry",
      "Blood-vessel research"
    ],
    // Engelsk fagtekst: kva stoffet er, kroppen, fordelar og ulemper
    "what": "A naturally occurring citrus compound studied in orange juice.",
    "body": "After digestion, the body absorbs and processes related compounds. Trials have studied vascular effects, but results depend on the dose, preparation and outcome measured.",
    "good": "Hesperidin shows how orange juice contains compounds beyond sugars and vitamin C. It has been measured in human studies of orange juice and isolated preparations. That makes it interesting to learn about, while keeping a measured research drink separate from a soda containing a small amount of orange concentrate.",
    "bad": "You cannot calculate hesperidin from an orange flavour or a juice percentage alone. Clinical findings are mixed across study designs, and no amount is measured for these products here. It would therefore be misleading to promise that the soda lowers blood pressure or provides the same exposure as a trial preparation.",
    "evidence": "This is background citrus chemistry. No product-specific concentration or health effect is assigned to Fanta, Urge or the generic juice serving.",
    "sources": [
      {
        "name": "Primary orange-juice trial",
        "url": "https://pubmed.ncbi.nlm.nih.gov/21068346/"
      },
      {
        "name": "Primary trial with no acute cardiovascular benefit",
        "url": "https://pubmed.ncbi.nlm.nih.gov/25788001/"
      }
    ],
    "compound": true,
    "reviewed": "4 November 2026",
    // Same ingrediensartikkel på nynorsk
    "nn": {
      "name": "Hesperidin",
      "category": "Naturleg stoff",
      "symbol": "Ein sitrusflavanon",
      "areas": [
        "Sitruskjemi",
        "Forsking på blodårer"
      ],
      "what": "Eit stoff som finst naturleg i sitrusfrukt og er studert i appelsinjuice.",
      "body": "Etter fordøyinga tek kroppen opp og omset relaterte stoff. Forsøk har undersøkt verknader på blodårer, men resultata er avhengige av dosen, preparatet og kva utfall som blir målt.",
      "good": "Hesperidin viser korleis appelsinjuice inneheld andre stoff enn sukker og vitamin C. Det er målt i menneskestudiar av appelsinjuice og isolerte preparat. Det gjer stoffet interessant å lære om, samtidig som vi held ei målt forskingsdrikk skild frå ein brus som inneheld ei lita mengd appelsinkonsentrat.",
      "bad": "Du kan ikkje rekne ut hesperidinmengda berre frå ein appelsinsmak eller ein juiceprosent. Kliniske funn varierer mellom ulike studieopplegg, og det er ikkje målt noka mengd for desse produkta her. Det ville derfor vere misvisande å love at brusen senkar blodtrykket eller gir same eksponering som eit preparat brukt i eit forsøk.",
      "evidence": "Dette er bakgrunnskjemi om sitrus. Det blir ikkje tillagt ein produktspesifikk konsentrasjon eller helseverknad til Fanta, Urge eller den generelle juiceporsjonen.",
      "sources": [
        {
          "name": "Primærforsøk med appelsinjuice",
          "url": "https://pubmed.ncbi.nlm.nih.gov/21068346/"
        },
        {
          "name": "Primærforsøk utan akutt fordel for hjarte og blodårer",
          "url": "https://pubmed.ncbi.nlm.nih.gov/25788001/"
        }
      ],
      "reviewed": "4. november 2026"
    }
  },
  // ── STOFF 2.79: L-leucine [l-leucine] ──
  {
    "id": "l-leucine",
    "name": "L-leucine",
    "category": "Amino acid",
    "symbol": "C₆H₁₃NO₂",
    "areas": [
      "Muscles",
      "Protein building"
    ],
    // Engelsk fagtekst: kva stoffet er, kroppen, fordelar og ulemper
    "what": "One of the three branched-chain amino acids, often shortened to BCAAs.",
    "body": "Your body uses leucine as a building block for proteins. It also takes part in signalling involved in making muscle protein, but it cannot supply all the building blocks by itself.",
    "good": "Leucine is an essential amino acid, meaning you need to get it from food. Adequate intake helps your body maintain and repair proteins, including muscle tissue. Complete protein foods supply leucine together with the other essential amino acids needed to build those proteins.",
    "bad": "Adding leucine does not guarantee more muscle or better exercise performance when your diet already provides enough protein. A can containing three BCAAs is not the same as a complete protein meal. Evidence for extra BCAA supplementation is inconsistent, and the individual leucine dose in this selected recipe is undisclosed.",
    "evidence": "NOCCO’s Norwegian supplier recipe names L-leucine. No equal split or ratio between the three amino acids is assumed.",
    "sources": [
      {
        "name": "NIH ODS · amino acids and exercise",
        "url": "https://ods.od.nih.gov/factsheets/ExerciseAndAthleticPerformance-HealthProfessional/"
      }
    ],
    "reviewed": "5 November 2026",
    // Same ingrediensartikkel på nynorsk
    "nn": {
      "name": "L-leucin",
      "category": "Aminosyre",
      "symbol": "C₆H₁₃NO₂",
      "areas": [
        "Musklar",
        "Proteinbygging"
      ],
      "what": "Ei av dei tre forgreina aminosyrene, som ofte blir forkorta BCAA.",
      "body": "Kroppen bruker leucin som byggjestein i protein. Stoffet er òg med i signalprosessar som er knytte til danning av muskelprotein, men kan ikkje gi alle byggjesteinane åleine.",
      "good": "Leucin er ei essensiell aminosyre. Det betyr at du må få henne frå mat. Tilstrekkeleg inntak hjelper kroppen med å vedlikehalde og reparere protein, mellom anna muskelvev. Matvarer med fullverdig protein gir leucin saman med dei andre essensielle aminosyrene som trengst for å byggje desse proteina.",
      "bad": "Å tilsetje leucin gir ingen garanti for meir musklar eller betre treningsprestasjon når kosthaldet allereie gir nok protein. Ein boks med tre BCAA er ikkje det same som eit måltid med fullverdig protein. Dokumentasjonen for ekstra BCAA-tilskot er sprikjande, og den eigne leucindosen i denne valde oppskrifta er ikkje oppgitt.",
      "evidence": "Den norske leverandøroppskrifta for NOCCO namngir L-leucin. Det blir ikkje gått ut frå lik fordeling eller noko bestemt forhold mellom dei tre aminosyrene.",
      "sources": [
        {
          "name": "NIH ODS · aminosyrer og trening",
          "url": "https://ods.od.nih.gov/factsheets/ExerciseAndAthleticPerformance-HealthProfessional/"
        }
      ],
      "reviewed": "5. november 2026"
    }
  },
  // ── STOFF 2.80: L-valine [l-valine] ──
  {
    "id": "l-valine",
    "name": "L-valine",
    "category": "Amino acid",
    "symbol": "C₅H₁₁NO₂",
    "areas": [
      "Muscles",
      "Body proteins"
    ],
    // Engelsk fagtekst: kva stoffet er, kroppen, fordelar og ulemper
    "what": "An essential amino acid in the BCAA group, alongside leucine and isoleucine.",
    "body": "Valine becomes part of proteins your body makes. Your body needs a balanced supply of amino acids rather than just one isolated BCAA.",
    "good": "Getting enough valine supports the normal making and renewal of body proteins. That is why it is a nutrient rather than a mysterious artificial stimulant. It is already supplied by protein-containing foods, so learning its role helps separate normal nutrition from marketing about an added exercise boost.",
    "bad": "A normal role in proteins does not show that extra valine in a drink improves recovery or endurance. The amount in this can is not verified, and research on measured supplement mixtures cannot be applied to an unknown dose. It also does not reduce the effects of the drink’s caffeine.",
    "evidence": "The guide explains valine’s nutritional role. It does not turn the ingredient into a proven performance benefit from this product.",
    "sources": [
      {
        "name": "NIH ODS · amino acids and exercise",
        "url": "https://ods.od.nih.gov/factsheets/ExerciseAndAthleticPerformance-HealthProfessional/"
      }
    ],
    "reviewed": "5 November 2026",
    // Same ingrediensartikkel på nynorsk
    "nn": {
      "name": "L-valin",
      "category": "Aminosyre",
      "symbol": "C₅H₁₁NO₂",
      "areas": [
        "Musklar",
        "Protein i kroppen"
      ],
      "what": "Ei essensiell aminosyre i BCAA-gruppa, saman med leucin og isoleucin.",
      "body": "Valin blir ein del av protein som kroppen lagar. Kroppen treng ei balansert tilførsel av aminosyrer, ikkje berre éi isolert BCAA.",
      "good": "Å få nok valin støttar vanleg danning og fornying av protein i kroppen. Derfor er stoffet eit næringsstoff, ikkje eit mystisk, kunstig stimulerande middel. Mat som inneheld protein, gir allereie valin. Når du kjenner oppgåva til stoffet, kan du lettare skilje vanleg ernæring frå marknadsføring om eit ekstra treningsløft.",
      "bad": "Ei vanleg oppgåve i protein viser ikkje at ekstra valin i ei drikk gir betre restitusjon eller uthald. Mengda i denne boksen er ikkje stadfesta, og forsking på målte blandingar av kosttilskot kan ikkje brukast om ein ukjend dose. Stoffet reduserer heller ikkje verknadene av koffeinet i drikka.",
      "evidence": "Rettleiinga forklarer den ernæringsmessige oppgåva til valin. Ho gjer ikkje ingrediensen til ein dokumentert prestasjonsfordel frå dette produktet.",
      "sources": [
        {
          "name": "NIH ODS · aminosyrer og trening",
          "url": "https://ods.od.nih.gov/factsheets/ExerciseAndAthleticPerformance-HealthProfessional/"
        }
      ],
      "reviewed": "5. november 2026"
    }
  },
  // ── STOFF 2.81: L-isoleucine [l-isoleucine] ──
  {
    "id": "l-isoleucine",
    "name": "L-isoleucine",
    "category": "Amino acid",
    "symbol": "C₆H₁₃NO₂",
    "areas": [
      "Muscles",
      "Protein building"
    ],
    // Engelsk fagtekst: kva stoffet er, kroppen, fordelar og ulemper
    "what": "An essential BCAA with the same molecular formula as leucine but a different structure.",
    "body": "Your body uses isoleucine to build proteins. Having the same formula as leucine does not make the two substances identical or interchangeable.",
    "good": "Isoleucine contributes to the supply of amino acids used to maintain body tissues. Ordinary protein foods provide it together with other amino acids. Its different structure is also an interesting chemistry example: a formula tells you which atoms are present, but not the whole arrangement or biological role.",
    "bad": "The body needs all essential amino acids, so three added BCAAs do not make the drink a complete source of protein nutrition. Extra exercise benefits are not established for this can. Its individual isoleucine amount and the mixture’s ratio are unknown and should not be replaced with guessed equal portions.",
    "evidence": "The source names L-isoleucine, not a separately measured dose. Any nutrition total already covering amino acids must not be counted again.",
    "sources": [
      {
        "name": "NIH ODS · amino acids and exercise",
        "url": "https://ods.od.nih.gov/factsheets/ExerciseAndAthleticPerformance-HealthProfessional/"
      }
    ],
    "reviewed": "5 November 2026",
    // Same ingrediensartikkel på nynorsk
    "nn": {
      "name": "L-isoleucin",
      "category": "Aminosyre",
      "symbol": "C₆H₁₃NO₂",
      "areas": [
        "Musklar",
        "Proteinbygging"
      ],
      "what": "Ei essensiell BCAA med same molekylformel som leucin, men ein annan struktur.",
      "body": "Kroppen bruker isoleucin til å byggje protein. At formelen er den same som for leucin, betyr ikkje at stoffa er identiske eller kan bytast ut med kvarandre.",
      "good": "Isoleucin bidreg til tilførselen av aminosyrer som blir brukte til å vedlikehalde vev i kroppen. Vanlege proteinmatvarer gir stoffet saman med andre aminosyrer. Den ulike strukturen er òg eit interessant døme frå kjemien: ein formel fortel kva atom som er til stades, men ikkje heile oppbygginga eller den biologiske oppgåva.",
      "bad": "Kroppen treng alle dei essensielle aminosyrene, så tre tilsette BCAA gjer ikkje drikka til ei fullverdig proteinkjelde. Ekstra treningsfordelar er ikkje dokumenterte for denne boksen. Den eigne isoleucinmengda og forholdet mellom stoffa i blandinga er ukjende og skal ikkje bytast ut med gjetting om like store delar.",
      "evidence": "Kjelda namngir L-isoleucin, ikkje ein separat målt dose. Ein næringssum som allereie omfattar aminosyrer, skal ikkje reknast ein gong til.",
      "sources": [
        {
          "name": "NIH ODS · aminosyrer og trening",
          "url": "https://ods.od.nih.gov/factsheets/ExerciseAndAthleticPerformance-HealthProfessional/"
        }
      ],
      "reviewed": "5. november 2026"
    }
  },
  // ── STOFF 2.82: Green-tea extract [green-tea-extract] ──
  {
    "id": "green-tea-extract",
    "name": "Green-tea extract",
    "category": "Botanical",
    "symbol": "An extracted plant mixture",
    "areas": [
      "Brain",
      "Liver research"
    ],
    // Engelsk fagtekst: kva stoffet er, kroppen, fordelar og ulemper
    "what": "A mixture taken from green tea, which can contain caffeine and plant compounds called catechins.",
    "body": "Its caffeine contributes to the drink’s total stimulant exposure. The extract name does not reveal the catechin or EGCG amount that reaches your body.",
    "good": "Green tea contains compounds that scientists can study separately, including caffeine and catechins. An extract makes those compounds part of a different preparation from a fresh cup of tea. Understanding that difference helps you read research accurately instead of assuming that every green-tea product has the same composition or effects.",
    "bad": "Caffeine can disturb sleep or cause jitters, whatever its plant source. Concentrated green-tea supplements can cause digestive problems, and rare liver injury has been reported, mainly with extracts in supplements. Those findings do not prove liver harm from this drink, whose extract and catechin amounts have not been measured here.",
    "evidence": "The Norwegian NOCCO listing names green-tea extract. No EGCG dose, weight-loss benefit or black-tea theaflavin content is inferred.",
    "sources": [
      {
        "name": "NIH NCCIH · green tea and extracts",
        "url": "https://www.nccih.nih.gov/health/green-tea"
      }
    ],
    "reviewed": "5 November 2026",
    // Same ingrediensartikkel på nynorsk
    "nn": {
      "name": "Ekstrakt av grøn te",
      "category": "Planteekstrakt",
      "symbol": "Ei blanding trekt ut frå planter",
      "areas": [
        "Hjerne",
        "Forsking på lever"
      ],
      "what": "Ei blanding trekt ut frå grøn te som kan innehalde koffein og plantestoff kalla katekin.",
      "body": "Koffeinet i ekstraktet bidreg til den samla eksponeringa for stimulerande stoff frå drikka. Namnet på ekstraktet avslører ikkje kor mykje katekin eller EGCG som når kroppen.",
      "good": "Grøn te inneheld stoff som forskarar kan studere kvar for seg, mellom anna koffein og katekin. Eit ekstrakt gjer desse stoffa til del av eit anna preparat enn ein kopp nybryggja te. Når du forstår skilnaden, kan du lese forsking meir presist i staden for å gå ut frå at alle produkt med grøn te har same samansetjing eller verknader.",
      "bad": "Koffein kan forstyrre søvnen eller gi uro, uavhengig av kva plante det kjem frå. Konsentrerte grøne te-tilskot kan gi fordøyingsplager, og sjeldne leverskadar er rapporterte, særleg ved ekstrakt i kosttilskot. Desse funna beviser ikkje leverskade frå denne drikka, der mengdene ekstrakt og katekin ikkje er målte her.",
      "evidence": "Den norske NOCCO-oppføringa namngir ekstrakt av grøn te. Det blir ikkje gått ut frå nokon EGCG-dose, fordel for vektnedgang eller noko innhald av teaflavinar frå svart te.",
      "sources": [
        {
          "name": "NIH NCCIH · grøn te og ekstrakt",
          "url": "https://www.nccih.nih.gov/health/green-tea"
        }
      ],
      "reviewed": "5. november 2026"
    }
  },
  // ── STOFF 2.83: Folic acid · vitamin B9 [folic-acid] ──
  {
    "id": "folic-acid",
    "name": "Folic acid · vitamin B9",
    "category": "Vitamin",
    "symbol": "B9 · folate family",
    "areas": [
      "Cells",
      "Blood",
      "Nervous system"
    ],
    // Engelsk fagtekst: kva stoffet er, kroppen, fordelar og ulemper
    "what": "A form of folate used in some fortified foods and supplements.",
    "body": "Your body uses folate to make DNA and help cells divide. It is important for normal blood-cell production, rather than acting as a caffeine-like stimulant.",
    "good": "Getting enough folate supports the normal renewal of cells and production of blood cells. That gives it a real nutritional role. Folic acid in a fortified product can contribute to intake when the amount is known, but a vitamin name alone does not tell you how much of your daily needs the drink supplies.",
    "bad": "High supplemental exposure can hide the anaemia caused by vitamin B12 deficiency while related nerve damage continues. That is a reason dose matters, not evidence that this can causes that problem. The selected NOCCO recipe does not disclose its folic-acid amount, so no individual exposure calculation is made.",
    "evidence": "Folic acid is a nutrient, not proof that the finished drink improves energy or replaces a varied diet.",
    "sources": [
      {
        "name": "NIH ODS · folate and folic acid",
        "url": "https://ods.od.nih.gov/factsheets/Folate-Consumer/"
      }
    ],
    "reviewed": "5 November 2026",
    // Same ingrediensartikkel på nynorsk
    "nn": {
      "name": "Folsyre · vitamin B9",
      "category": "Vitamin",
      "symbol": "B9 · folatfamilien",
      "areas": [
        "Celler",
        "Blod",
        "Nervesystem"
      ],
      "what": "Ei form av folat som blir brukt i somme matvarer med tilsette næringsstoff og i kosttilskot.",
      "body": "Kroppen bruker folat til å lage DNA og hjelpe celler med å dele seg. Det er viktig for vanleg danning av blodceller, ikkje eit stimulerande middel som verkar som koffein.",
      "good": "Å få nok folat støttar vanleg fornying av celler og danning av blodceller. Det gir stoffet ei reell ernæringsmessig oppgåve. Folsyre i eit produkt med tilsette næringsstoff kan bidra til inntaket når mengda er kjend. Eit vitaminnamn åleine fortel likevel ikkje kor stor del av det daglege behovet drikka dekkjer.",
      "bad": "Høg eksponering frå kosttilskot kan skjule blodmangelen som kjem av vitamin B12-mangel, medan tilhøyrande nerveskade held fram. Det viser kvifor dosen har noko å seie, ikkje at denne boksen fører til problemet. Den valde NOCCO-oppskrifta oppgir ikkje folsyremengda, så det blir ikkje laga noka individuell eksponeringsutrekning.",
      "evidence": "Folsyre er eit næringsstoff, ikkje eit bevis på at den ferdige drikka gir meir energi eller erstattar eit variert kosthald.",
      "sources": [
        {
          "name": "NIH ODS · folat og folsyre",
          "url": "https://ods.od.nih.gov/factsheets/Folate-Consumer/"
        }
      ],
      "reviewed": "5. november 2026"
    }
  },
  // ── STOFF 2.84: Biotin · vitamin B7 [biotin] ──
  {
    "id": "biotin",
    "name": "Biotin · vitamin B7",
    "category": "Vitamin",
    "symbol": "B7 · also called vitamin H",
    "areas": [
      "Metabolism",
      "Laboratory tests"
    ],
    // Engelsk fagtekst: kva stoffet er, kroppen, fordelar og ulemper
    "what": "A vitamin that helps enzymes process nutrients from food.",
    "body": "Biotin helps enzymes break down fats, carbohydrates and proteins. It does not directly supply calories or make a caffeinated drink cancel tiredness.",
    "good": "Adequate biotin supports normal metabolism. This is why it can appear in a vitamin blend even though the required quantities are small. A declared amount lets you compare products, while the mere presence of biotin does not establish an extra benefit for somebody who already gets enough.",
    "bad": "There is little evidence that extra biotin improves normal hair or nails in people without a deficiency. High supplemental amounts can interfere with some laboratory tests and produce misleading results. That concern relates to exposure and testing conditions; it is not a claim that an ordinary declared food amount causes harm.",
    "evidence": "Capri-Sun’s selected source publishes a biotin amount. The Norwegian NOCCO listing names it without a verified dose.",
    "sources": [
      {
        "name": "NIH ODS · biotin",
        "url": "https://ods.od.nih.gov/factsheets/Biotin-Consumer/"
      }
    ],
    "reviewed": "5 November 2026",
    // Same ingrediensartikkel på nynorsk
    "nn": {
      "name": "Biotin · vitamin B7",
      "category": "Vitamin",
      "symbol": "B7 · òg kalla vitamin H",
      "areas": [
        "Stoffskifte",
        "Laboratorieprøver"
      ],
      "what": "Eit vitamin som hjelper enzym med å omsetje næringsstoff frå maten.",
      "body": "Biotin hjelper enzym med å bryte ned feitt, karbohydrat og protein. Det gir ikkje kaloriar direkte eller gjer at ei koffeinhaldig drikk opphevar trøyttleik.",
      "good": "Tilstrekkeleg biotin støttar vanleg stoffskifte. Derfor kan stoffet vere med i ei vitaminblanding sjølv om mengdene kroppen treng, er små. Ei oppgitt mengd gjer det mogleg å samanlikne produkt. At biotin er til stades, dokumenterer derimot ikkje ein ekstra fordel for nokon som allereie får nok.",
      "bad": "Det finst lite dokumentasjon på at ekstra biotin betrar normalt hår eller normale negler hos personar utan mangel. Høge mengder frå kosttilskot kan forstyrre somme laboratorieprøver og gi misvisande resultat. Denne uroa gjeld eksponering og prøvevilkår. Ho er ikkje ein påstand om at ei vanleg, oppgitt matvaremengd gir skade.",
      "evidence": "Den valde kjelda for Capri-Sun publiserer ei biotinmengd. Den norske NOCCO-oppføringa namngir stoffet utan ein stadfesta dose.",
      "sources": [
        {
          "name": "NIH ODS · biotin",
          "url": "https://ods.od.nih.gov/factsheets/Biotin-Consumer/"
        }
      ],
      "reviewed": "5. november 2026"
    }
  },
  // ── STOFF 2.85: Vitamin D [vitamin-d] ──
  {
    "id": "vitamin-d",
    "name": "Vitamin D",
    "category": "Vitamin",
    "symbol": "D · exact form undisclosed",
    "areas": [
      "Intestine",
      "Bones",
      "Muscles",
      "Kidneys"
    ],
    // Engelsk fagtekst: kva stoffet er, kroppen, fordelar og ulemper
    "what": "A vitamin used to support normal calcium handling in the body.",
    "body": "Vitamin D helps your intestine absorb calcium. Your body needs it for normal bones and muscles, but extra intake does not automatically mean stronger immunity.",
    "good": "Getting enough vitamin D helps maintain bones and normal muscle function. Fortified foods can contribute to intake, and Biola’s label publishes a measured nutrition amount for comparison. Its normal immune-system role is real, but that does not establish that drinking more of the product prevents infections.",
    "bad": "Excessive vitamin D from supplements can raise blood calcium and may harm the kidneys and other tissues. Those exposures are different from the amount declared in an ordinary food. Total intake still matters; a beneficial vitamin is not a reason to treat fortified drinks as an unlimited source.",
    "evidence": "The ingredient lists used here do not establish whether the added form is D2 or D3. No more specific form is guessed.",
    "sources": [
      {
        "name": "NIH ODS · vitamin D",
        "url": "https://ods.od.nih.gov/factsheets/VitaminD-Consumer/"
      },
      {
        "name": "TINE · current Biola Blåbær recipe",
        "url": "https://www.tine.no/produkter/biola-syrnet-melk-med-blabaer"
      }
    ],
    "reviewed": "5 November 2026",
    // Same ingrediensartikkel på nynorsk
    "nn": {
      "name": "Vitamin D",
      "category": "Vitamin",
      "symbol": "D · nøyaktig form ikkje oppgitt",
      "areas": [
        "Tarm",
        "Knoklar",
        "Musklar",
        "Nyrer"
      ],
      "what": "Eit vitamin som støttar vanleg handtering av kalsium i kroppen.",
      "body": "Vitamin D hjelper tarmen med å ta opp kalsium. Kroppen treng det for normale knoklar og musklar, men ekstra inntak betyr ikkje automatisk eit sterkare immunforsvar.",
      "good": "Å få nok vitamin D hjelper til med å halde knoklane og muskelfunksjonen normale. Matvarer med tilsette næringsstoff kan bidra til inntaket, og Biola-etiketten publiserer ei målt næringsmengd som kan samanliknast. Den vanlege oppgåva i immunforsvaret er reell, men ho dokumenterer ikkje at meir av produktet førebyggjer infeksjonar.",
      "bad": "For mykje vitamin D frå kosttilskot kan auke kalsiuminnhaldet i blodet og kan skade nyrene og anna vev. Slik eksponering skil seg frå mengda som er oppgitt i ei vanleg matvare. Samla inntak har framleis noko å seie. Eit nyttig vitamin er ikkje ein grunn til å behandle drikkar med tilsette næringsstoff som ei uavgrensa kjelde.",
      "evidence": "Ingredienslistene som er brukte her, slår ikkje fast om den tilsette forma er D2 eller D3. Det blir ikkje gjetta på ei meir spesifikk form.",
      "sources": [
        {
          "name": "NIH ODS · vitamin D",
          "url": "https://ods.od.nih.gov/factsheets/VitaminD-Consumer/"
        },
        {
          "name": "TINE · gjeldande oppskrift for Biola Blåbær",
          "url": "https://www.tine.no/produkter/biola-syrnet-melk-med-blabaer"
        }
      ],
      "reviewed": "5. november 2026"
    }
  },
  // ── STOFF 2.86: Vitamin E [vitamin-e] ──
  {
    "id": "vitamin-e",
    "name": "Vitamin E",
    "category": "Vitamin",
    "symbol": "A family of tocopherols",
    "areas": [
      "Cells",
      "Blood clotting"
    ],
    // Engelsk fagtekst: kva stoffet er, kroppen, fordelar og ulemper
    "what": "A fat-soluble vitamin included in the selected Capri-Sun vitamin blend.",
    "body": "Vitamin E helps protect cell components from oxidative damage. This normal function is different from proof that a particular drink prevents disease.",
    "good": "Getting enough vitamin E supports normal cell protection and immune function. A published amount lets you see how a fortified drink contributes to intake. The useful role belongs to the nutrient; it does not mean the entire drink has the same nutritional value as foods that provide vitamin E alongside other nutrients.",
    "bad": "High-dose vitamin E supplements can increase bleeding risk and interact with medicines that affect clotting. Those supplement doses are different from a beverage’s declared amount. Taking more has not established a general disease-prevention benefit, so an antioxidant label should not be read as a promise of better organ health.",
    "evidence": "The selected Capri-Sun listing gives 1.8 mg per 100 ml. A specific tocopherol form is not inferred from its generic vitamin E wording.",
    "sources": [
      {
        "name": "NIH ODS · vitamin E",
        "url": "https://ods.od.nih.gov/factsheets/VitaminE-Consumer/"
      }
    ],
    "reviewed": "5 November 2026",
    // Same ingrediensartikkel på nynorsk
    "nn": {
      "name": "Vitamin E",
      "category": "Vitamin",
      "symbol": "Ein familie av tokoferol",
      "areas": [
        "Celler",
        "Blodlevring"
      ],
      "what": "Eit feittløyseleg vitamin som er med i den valde vitaminblandinga til Capri-Sun.",
      "body": "Vitamin E hjelper til med å verne celledelar mot oksidativ skade. Denne vanlege funksjonen er noko anna enn eit bevis på at ei bestemt drikk førebyggjer sjukdom.",
      "good": "Å få nok vitamin E støttar vanleg vern av celler og immunfunksjon. Ei publisert mengd viser korleis ei drikk med tilsette næringsstoff bidreg til inntaket. Den nyttige oppgåva høyrer til næringsstoffet. Ho betyr ikkje at heile drikka har same næringsverdi som matvarer som gir vitamin E saman med andre næringsstoff.",
      "bad": "Vitamin E-tilskot med høg dose kan auke blødingsfaren og verke inn på legemiddel som påverkar blodlevring. Desse tilskotsdosane skil seg frå den oppgitte mengda i ei drikk. Høgare inntak har ikkje dokumentert ein generell sjukdomsførebyggjande fordel. Ei antioksidantmerking bør derfor ikkje lesast som eit løfte om betre organhelse.",
      "evidence": "Den valde Capri-Sun-oppføringa oppgir 1,8 mg per 100 ml. Det blir ikkje gått ut frå ei bestemt tokoferolform når ordlyden berre er vitamin E.",
      "sources": [
        {
          "name": "NIH ODS · vitamin E",
          "url": "https://ods.od.nih.gov/factsheets/VitaminE-Consumer/"
        }
      ],
      "reviewed": "5. november 2026"
    }
  },
  // ── STOFF 2.87: Mixed fruit juices from concentrate [mixed-fruit-juice] ──
  {
    "id": "mixed-fruit-juice",
    "name": "Mixed fruit juices from concentrate",
    "category": "Fruit ingredient",
    "symbol": "A recipe-specific fruit blend",
    "areas": [
      "Taste",
      "Teeth",
      "Energy intake"
    ],
    // Engelsk fagtekst: kva stoffet er, kroppen, fordelar og ulemper
    "what": "A blend of fruit juices restored from concentrates; the fruits differ between recipes.",
    "body": "Juice brings fruit flavour and naturally present sugars. Those sugars are already included in the finished drink’s one total sugars figure.",
    "good": "A fruit blend helps explain a drink’s flavour and colour without assuming that every fruit component was added as a pure chemical powder. The selected Fanta list gives a 3% blend, while the selected Capri-Sun gives 10%. Those are recipe shares, not the thickness of the animation layers.",
    "bad": "Sugars in juice count as free sugars, even when they were naturally present in the fruit. Frequent sugary drinks can contribute to tooth decay, and their calories contribute to overall intake. A fruit percentage does not reveal the fibre, vitamin or individual plant-compound amount in the finished product.",
    "evidence": "Fruit sugars and separately added sugars are not counted twice. Different import-market Capri-Sun formulas must not be combined into one invented blend.",
    "sources": [
      {
        "name": "NHS · free sugars and teeth",
        "url": "https://www.nhs.uk/live-well/eat-well/food-types/how-does-sugar-in-our-diet-affect-our-health/"
      },
      {
        "name": "Coca-Cola Norway · Fanta Exotic",
        "url": "https://www.coca-cola.com/no/no/brands/fanta"
      }
    ],
    "reviewed": "5 November 2026",
    // Same ingrediensartikkel på nynorsk
    "nn": {
      "name": "Blanda fruktjuicar frå konsentrat",
      "category": "Fruktingrediens",
      "symbol": "Ei fruktblanding som følgjer oppskrifta",
      "areas": [
        "Smak",
        "Tenner",
        "Energiinntak"
      ],
      "what": "Ei blanding av fruktjuicar som er tilbakeførte frå konsentrat. Fruktene varierer mellom oppskriftene.",
      "body": "Juice gir fruktsmak og sukkerartar som finst naturleg. Desse sukkerartane er allereie med i den eine samla sukkermengda til den ferdige drikka.",
      "good": "Ei fruktblanding hjelper deg å forstå smaken og fargen til ei drikk, utan å gå ut frå at kvar fruktkomponent er tilsett som eit reint kjemisk pulver. Den valde Fanta-lista oppgir ei blanding på 3 %, medan den valde Capri-Sun oppgir 10 %. Dette er delar av oppskrifta, ikkje tjukna på laga i animasjonen.",
      "bad": "Sukker i juice blir rekna som fritt sukker, sjølv når det fanst naturleg i frukta. Hyppige sukkerhaldige drikkar kan bidra til hol i tennene, og kaloriane deira bidreg til det samla inntaket. Ein fruktprosent avslører ikkje mengda fiber, vitamin eller enkeltstoff frå planter i det ferdige produktet.",
      "evidence": "Fruktsukker og sukker som er tilsett separat, blir ikkje rekna to gonger. Ulike Capri-Sun-oppskrifter frå importmarknader skal ikkje setjast saman til éi oppdikta blanding.",
      "sources": [
        {
          "name": "NHS · fritt sukker og tenner",
          "url": "https://www.nhs.uk/live-well/eat-well/food-types/how-does-sugar-in-our-diet-affect-our-health/"
        },
        {
          "name": "Coca-Cola Noreg · Fanta Exotic",
          "url": "https://www.coca-cola.com/no/no/brands/fanta"
        }
      ],
      "reviewed": "5. november 2026"
    }
  },
  // ── STOFF 2.88: Citrus extract [citrus-extract] ──
  {
    "id": "citrus-extract",
    "name": "Citrus extract",
    "category": "Botanical",
    "symbol": "A flavouring mixture",
    "areas": [
      "Taste",
      "Recipe composition"
    ],
    // Engelsk fagtekst: kva stoffet er, kroppen, fordelar og ulemper
    "what": "A citrus-derived extract named separately from the juice in Fanta Exotic.",
    "body": "It contributes citrus character to the recipe. The broad name does not disclose which individual aroma compounds or nutrient amounts are present.",
    "good": "An extract can provide a concentrated flavour character in a small recipe addition. Learning to distinguish it from juice makes the label easier to understand. It also shows why an ingredient can be botanically derived without being a separate serving of fruit or a verified vitamin source.",
    "bad": "A citrus name does not establish a vitamin C dose, a digestive benefit or a beneficial effect on an organ. Its individual components and quantity are undisclosed in this recipe. It would therefore be misleading to select impressive-sounding citrus molecules and claim that each was definitely added to this bottle.",
    "evidence": "This follows the manufacturer’s broad ingredient name. It does not guess limonene, citral, a specific allergen or a measured extract dose.",
    "sources": [
      {
        "name": "Coca-Cola Norway · Exotic recipe",
        "url": "https://www.coca-cola.com/no/no/brands/fanta"
      }
    ],
    "reviewed": "5 November 2026",
    // Same ingrediensartikkel på nynorsk
    "nn": {
      "name": "Sitrusekstrakt",
      "category": "Planteekstrakt",
      "symbol": "Ei aromablanding",
      "areas": [
        "Smak",
        "Samansetjing av oppskrifta"
      ],
      "what": "Eit ekstrakt frå sitrusfrukt som er namngitt separat frå juicen i Fanta Exotic.",
      "body": "Det gir oppskrifta sitruspreg. Det generelle namnet avslører ikkje kva enkeltstoff i aromaen eller kva næringsmengder som er til stades.",
      "good": "Eit ekstrakt kan gi eit konsentrert smakspreg gjennom ei lita tilsetjing i oppskrifta. Når du lærer å skilje det frå juice, blir etiketten lettare å forstå. Det viser òg kvifor ein ingrediens kan kome frå planter utan å vere ein eigen fruktporsjon eller ei stadfesta vitaminkjelde.",
      "bad": "Eit sitrusnamn dokumenterer ikkje ein vitamin C-dose, ein fordøyingsfordel eller ein gunstig verknad på eit organ. Enkeltkomponentane og mengda er ikkje oppgitte i denne oppskrifta. Det ville derfor vere misvisande å velje sitrusmolekyl med imponerande namn og hevde at kvart av dei heilt sikkert er tilsett denne flaska.",
      "evidence": "Dette følgjer det generelle ingrediensnamnet til produsenten. Det blir ikkje gjetta på limonen, citral, eit bestemt allergen eller ein målt ekstraktdose.",
      "sources": [
        {
          "name": "Coca-Cola Noreg · Exotic-oppskrifta",
          "url": "https://www.coca-cola.com/no/no/brands/fanta"
        }
      ],
      "reviewed": "5. november 2026"
    }
  },
  // ── STOFF 2.89: Blueberry juice from concentrate [blueberry-juice] ──
  {
    "id": "blueberry-juice",
    "name": "Blueberry juice from concentrate",
    "category": "Fruit ingredient",
    "symbol": "Berry juice · 8% in Biola",
    "areas": [
      "Taste",
      "Teeth",
      "Recipe colour"
    ],
    // Engelsk fagtekst: kva stoffet er, kroppen, fordelar og ulemper
    "what": "Blueberry juice restored from concentrate, listed as an 8% share of the Biola recipe.",
    "body": "It brings berry flavour, colour and some naturally present sugars. Those sugars belong to the same total as the drink’s milk sugar and added sugar.",
    "good": "Blueberry juice makes the cultured milk taste and look different from plain yoghurt. Naming it separately explains the product’s berry character more accurately than treating it as a guessed artificial colour. Its 8% recipe share is useful label information, but it is not a measurement of a particular blueberry compound.",
    "bad": "Juice does not have the same structure as whole berries, and its sugars count as free sugars. A blueberry percentage cannot establish a fibre dose or prove a benefit for the brain, heart or eyes from this carton. The manufacturer does not publish individual berry-polyphenol amounts here.",
    "evidence": "The guide uses the current TINE recipe. It does not treat the visible purple teaching layer as a real concentration or a separate anthocyanin additive.",
    "sources": [
      {
        "name": "TINE · current Biola Blåbær recipe",
        "url": "https://www.tine.no/produkter/biola-syrnet-melk-med-blabaer"
      },
      {
        "name": "NHS · free sugars and teeth",
        "url": "https://www.nhs.uk/live-well/eat-well/food-types/how-does-sugar-in-our-diet-affect-our-health/"
      }
    ],
    "reviewed": "5 November 2026",
    // Same ingrediensartikkel på nynorsk
    "nn": {
      "name": "Blåbærjuice frå konsentrat",
      "category": "Fruktingrediens",
      "symbol": "Bærjuice · 8 % i Biola",
      "areas": [
        "Smak",
        "Tenner",
        "Farge i oppskrifta"
      ],
      "what": "Blåbærjuice tilbakeført frå konsentrat, oppført som ein del på 8 % av Biola-oppskrifta.",
      "body": "Han gir bærsmak, farge og noko naturleg sukker. Sukkeret høyrer til den same totalsummen som mjølkesukkeret og det tilsette sukkeret i drikka.",
      "good": "Blåbærjuice gir den syrna mjølka ein annan smak og utsjånad enn rein yoghurt. Når juicen blir namngitt separat, forklarer det bærpreget meir presist enn om ein gjetta at det kjem frå ein kunstig farge. Oppskriftsdelen på 8 % er nyttig etikettinformasjon, men ikkje ei måling av eit bestemt blåbærstoff.",
      "bad": "Juice har ikkje same struktur som heile bær, og sukkeret blir rekna som fritt sukker. Ein blåbærprosent dokumenterer ikkje ein fiberdose eller ein fordel for hjernen, hjartet eller auga frå denne kartongen. Produsenten publiserer ikkje mengder av dei enkelte bærpolyfenola her.",
      "evidence": "Rettleiinga bruker den gjeldande TINE-oppskrifta. Ho behandlar ikkje det synlege lilla undervisningslaget som ein faktisk konsentrasjon eller eit separat tilsett antocyaninfargestoff.",
      "sources": [
        {
          "name": "TINE · gjeldande oppskrift for Biola Blåbær",
          "url": "https://www.tine.no/produkter/biola-syrnet-melk-med-blabaer"
        },
        {
          "name": "NHS · fritt sukker og tenner",
          "url": "https://www.nhs.uk/live-well/eat-well/food-types/how-does-sugar-in-our-diet-affect-our-health/"
        }
      ],
      "reviewed": "5. november 2026"
    }
  },
  // ── STOFF 2.90: Blackcurrant juice from concentrate [blackcurrant-juice] ──
  {
    "id": "blackcurrant-juice",
    "name": "Blackcurrant juice from concentrate",
    "category": "Fruit ingredient",
    "symbol": "Berry juice · 1% in Biola",
    "areas": [
      "Taste",
      "Teeth",
      "Recipe colour"
    ],
    // Engelsk fagtekst: kva stoffet er, kroppen, fordelar og ulemper
    "what": "A concentrated-juice ingredient providing another berry component in Biola Blåbær.",
    "body": "It contributes flavour, acidity and colour to the mixture. The label’s juice percentage does not establish a separate vitamin C or pigment dose.",
    "good": "Blackcurrant juice helps explain why a drink named after one fruit can list another fruit too. It contributes to the overall berry recipe alongside blueberry juice. Reading the actual ingredient list gives you that detail without assuming that the product name describes every component in the carton.",
    "bad": "Fruit juice sugars still count towards free-sugar exposure and the finished drink’s total sugars. A small juice share is not evidence of the same nutritional effects as eating whole blackcurrants. No individual antioxidant amount or clinical benefit is measured for this product, so those claims should not be assigned from the name alone.",
    "evidence": "TINE lists 1% blackcurrant juice from concentrate. It is not an extra sugar total or confirmation of a purified added colour.",
    "sources": [
      {
        "name": "TINE · current Biola Blåbær recipe",
        "url": "https://www.tine.no/produkter/biola-syrnet-melk-med-blabaer"
      },
      {
        "name": "NHS · free sugars and teeth",
        "url": "https://www.nhs.uk/live-well/eat-well/food-types/how-does-sugar-in-our-diet-affect-our-health/"
      }
    ],
    "reviewed": "5 November 2026",
    // Same ingrediensartikkel på nynorsk
    "nn": {
      "name": "Solbærjuice frå konsentrat",
      "category": "Fruktingrediens",
      "symbol": "Bærjuice · 1 % i Biola",
      "areas": [
        "Smak",
        "Tenner",
        "Farge i oppskrifta"
      ],
      "what": "Ein juiceingrediens frå konsentrat som gir ein annan bærkomponent i Biola Blåbær.",
      "body": "Han bidreg med smak, surleik og farge i blandinga. Juiceprosenten på etiketten dokumenterer ikkje ein eigen dose vitamin C eller fargestoff.",
      "good": "Solbærjuice hjelper deg å forstå kvifor ei drikk som er kalla opp etter éi frukt, òg kan føre opp ei anna frukt. Han bidreg til den samla bæroppskrifta saman med blåbærjuice. Den faktiske ingredienslista gir deg denne detaljen, utan at du går ut frå at produktnamnet skildrar kvar komponent i kartongen.",
      "bad": "Sukker frå fruktjuice tel framleis med i eksponeringa for fritt sukker og i det samla sukkerinnhaldet i den ferdige drikka. Ein liten juicedel er ikkje dokumentasjon på dei same ernæringsverknadene som å ete heile solbær. Ingen eigen antioksidantmengd eller klinisk fordel er målt for dette produktet, så slike påstandar bør ikkje knytast til det ut frå namnet åleine.",
      "evidence": "TINE oppgir 1 % solbærjuice frå konsentrat. Det er ikkje ein ekstra sukkersum eller ei stadfesting av eit tilsett, reinsa fargestoff.",
      "sources": [
        {
          "name": "TINE · gjeldande oppskrift for Biola Blåbær",
          "url": "https://www.tine.no/produkter/biola-syrnet-melk-med-blabaer"
        },
        {
          "name": "NHS · fritt sukker og tenner",
          "url": "https://www.nhs.uk/live-well/eat-well/food-types/how-does-sugar-in-our-diet-affect-our-health/"
        }
      ],
      "reviewed": "5. november 2026"
    }
  },
  // ── STOFF 2.91: Pectins [pectins] ──
  {
    "id": "pectins",
    "name": "Pectins",
    "category": "Stabiliser",
    "symbol": "E440 family",
    "areas": [
      "Texture",
      "Gut fermentation"
    ],
    // Engelsk fagtekst: kva stoffet er, kroppen, fordelar og ulemper
    "what": "Plant carbohydrates used to thicken and stabilise the cultured milk.",
    "body": "Pectin helps control texture. Gut bacteria can ferment it, but an undeclared amount in a drink does not establish a meaningful fibre benefit.",
    "good": "Pectins can help keep the berry-and-milk mixture consistent rather than letting its components separate. This practical recipe role explains the unfamiliar name. Pectin is also studied as a dietary fibre, but those studies use known amounts that are different from an undisclosed stabiliser dose in a carton.",
    "bad": "Larger studied intakes have caused gas or bloating in some people. That does not show that the small, undisclosed amount in this recipe causes symptoms. Without a quantity, the ingredient name cannot support a cholesterol-lowering claim or be counted as a measured fibre contribution to the nutrition table.",
    "evidence": "The label says pectins. It does not establish a precise E440 subtype or allow the stabiliser amount to be calculated.",
    "sources": [
      {
        "name": "EFSA · pectins assessment",
        "url": "https://www.efsa.europa.eu/en/efsajournal/pub/4866"
      },
      {
        "name": "TINE · current Biola Blåbær recipe",
        "url": "https://www.tine.no/produkter/biola-syrnet-melk-med-blabaer"
      }
    ],
    "reviewed": "5 November 2026",
    // Same ingrediensartikkel på nynorsk
    "nn": {
      "name": "Pektin",
      "category": "Stabilisator",
      "symbol": "E440-familien",
      "areas": [
        "Konsistens",
        "Gjæring i tarmen"
      ],
      "what": "Plantekarbohydrat som blir brukte til å gjere den syrna mjølka tjukkare og meir stabil.",
      "body": "Pektin hjelper til med å styre konsistensen. Tarmbakteriar kan gjære det, men ei mengd i drikka som ikkje er oppgitt, dokumenterer ikkje ein vesentleg fiberfordel.",
      "good": "Pektin kan hjelpe bær- og mjølkeblandinga med å halde seg jamn i staden for at komponentane skil lag. Denne praktiske oppgåva i oppskrifta forklarer det ukjende namnet. Pektin blir òg studert som kostfiber, men desse studiane bruker kjende mengder som skil seg frå ein uoppgitt stabilisatordose i ein kartong.",
      "bad": "Større inntak i studiar har gitt luftplager eller oppblåst mage hos somme. Det viser ikkje at den vesle, uoppgitte mengda i denne oppskrifta gir symptom. Utan ei mengd kan ingrediensnamnet ikkje støtte ein påstand om lågare kolesterol eller reknast som eit målt fiberbidrag i næringstabellen.",
      "evidence": "Etiketten seier pektin. Han stadfestar ikkje ein nøyaktig undertype av E440 og gir ikkje grunnlag for å rekne ut mengda stabilisator.",
      "sources": [
        {
          "name": "EFSA · vurdering av pektin",
          "url": "https://www.efsa.europa.eu/en/efsajournal/pub/4866"
        },
        {
          "name": "TINE · gjeldande oppskrift for Biola Blåbær",
          "url": "https://www.tine.no/produkter/biola-syrnet-melk-med-blabaer"
        }
      ],
      "reviewed": "5. november 2026"
    }
  },
  // ── STOFF 2.92: Yoghurt starter cultures [yoghurt-cultures] ──
  {
    "id": "yoghurt-cultures",
    "name": "Yoghurt starter cultures",
    "category": "Live cultures",
    "symbol": "S. thermophilus · L. bulgaricus",
    "areas": [
      "Fermentation",
      "Small intestine"
    ],
    // Engelsk fagtekst: kva stoffet er, kroppen, fordelar og ulemper
    "what": "Starter bacteria used to turn milk into a cultured dairy product.",
    "body": "The bacteria ferment some milk sugar into lactic acid. Sufficient live yoghurt starters can help lactose digestion in the fermented product for people who digest lactose poorly.",
    "good": "Fermentation changes milk’s taste and structure, helping create the cultured drink. EFSA also recognises a lactose-digestion effect for products containing enough live starter cultures. This is a specific effect with conditions, rather than a general promise that any fermented drink fixes every digestive problem.",
    "bad": "Fermentation does not make a milk product safe for someone with milk-protein allergy. It also does not prove that all lactose has been removed. The required live starter count is not measured for this carton here, so the presence of the culture names alone is not used to guarantee a personal benefit.",
    "evidence": "TINE names S. thermophilus and L. bulgaricus. Their chapter explains fermentation, not the factory sequence or a measured culture dose.",
    "sources": [
      {
        "name": "EFSA · live yoghurt cultures and lactose digestion",
        "url": "https://www.efsa.europa.eu/en/efsajournal/pub/1763"
      },
      {
        "name": "TINE · current Biola Blåbær recipe",
        "url": "https://www.tine.no/produkter/biola-syrnet-melk-med-blabaer"
      }
    ],
    "reviewed": "5 November 2026",
    // Same ingrediensartikkel på nynorsk
    "nn": {
      "name": "Startkulturar for yoghurt",
      "category": "Levande kulturar",
      "symbol": "S. thermophilus · L. bulgaricus",
      "areas": [
        "Fermentering",
        "Tynntarm"
      ],
      "what": "Startbakteriar som blir brukte til å gjere mjølk om til eit syrna mjølkeprodukt.",
      "body": "Bakteriane fermenterer noko mjølkesukker til mjølkesyre. Nok levande yoghurtstartkulturar kan hjelpe personar som fordøyer laktose dårleg, med å fordøye laktosen i det fermenterte produktet.",
      "good": "Fermentering endrar smaken og strukturen til mjølka og hjelper til med å lage den syrna drikka. EFSA anerkjenner òg ein verknad på laktosefordøying for produkt med nok levande startkulturar. Dette er ein spesifikk verknad med vilkår, ikkje eit generelt løfte om at alle fermenterte drikkar løyser alle fordøyingsproblem.",
      "bad": "Fermentering gjer ikkje eit mjølkeprodukt trygt for nokon med mjølkeproteinallergi. Ho beviser heller ikkje at all laktose er fjerna. Det nødvendige talet på levande startbakteriar er ikkje målt for denne kartongen her. Kulturnamna åleine blir derfor ikkje brukte til å garantere deg ein personleg fordel.",
      "evidence": "TINE namngir S. thermophilus og L. bulgaricus. Kapittelet deira forklarer fermentering, ikkje fabrikkrekkjefølgja eller ein målt kulturdose.",
      "sources": [
        {
          "name": "EFSA · levande yoghurtkulturar og laktosefordøying",
          "url": "https://www.efsa.europa.eu/en/efsajournal/pub/1763"
        },
        {
          "name": "TINE · gjeldande oppskrift for Biola Blåbær",
          "url": "https://www.tine.no/produkter/biola-syrnet-melk-med-blabaer"
        }
      ],
      "reviewed": "5. november 2026"
    }
  },
  // ── STOFF 2.93: LA-5 culture [culture-la5] ──
  {
    "id": "culture-la5",
    "name": "LA-5 culture",
    "category": "Live cultures",
    "symbol": "Lactobacillus acidophilus LA-5",
    "areas": [
      "Gut",
      "Fermentation"
    ],
    // Engelsk fagtekst: kva stoffet er, kroppen, fordelar og ulemper
    "what": "One of the specifically named bacterial cultures in Biola.",
    "body": "LA-5 identifies a particular strain of lactic-acid bacteria. A strain name matters because findings about one culture do not automatically apply to every other bacterium.",
    "good": "Naming the strain lets you look for research on that particular organism instead of treating all probiotic products as identical. Some probiotic preparations have useful effects for particular conditions. Whether an effect applies depends on the strain, viable amount, preparation and people studied, not merely the word bacteria on a label.",
    "bad": "A named culture does not guarantee that the drink improves your immune system or treats a gut condition. Probiotics can cause gas, and rare infections are a concern particularly for seriously ill or immunocompromised people. Those general findings are not a measured risk prediction for this carton or every healthy consumer.",
    "evidence": "The individual viable LA-5 count is not published here. A brand claim per unspecified glass is not converted into a dose per carton.",
    "sources": [
      {
        "name": "NIH ODS · probiotics and strain-specific evidence",
        "url": "https://ods.od.nih.gov/factsheets/Probiotics-Consumer/"
      },
      {
        "name": "TINE · current Biola Blåbær recipe",
        "url": "https://www.tine.no/produkter/biola-syrnet-melk-med-blabaer"
      }
    ],
    "reviewed": "5 November 2026",
    // Same ingrediensartikkel på nynorsk
    "nn": {
      "name": "LA-5-kultur",
      "category": "Levande kulturar",
      "symbol": "Lactobacillus acidophilus LA-5",
      "areas": [
        "Tarm",
        "Fermentering"
      ],
      "what": "Ein av dei særskilt namngitte bakteriekulturane i Biola.",
      "body": "LA-5 identifiserer ein bestemt stamme av mjølkesyrebakteriar. Stammenamnet har noko å seie fordi funn om éin kultur ikkje automatisk gjeld alle andre bakteriar.",
      "good": "Når stammen er namngitt, kan du leite etter forsking på nettopp denne organismen i staden for å behandle alle probiotiske produkt som identiske. Somme probiotiske preparat har nyttige verknader ved bestemte tilstandar. Om ein verknad gjeld, er avhengig av stammen, den levande mengda, preparatet og personane som er studerte, ikkje berre ordet bakteriar på ein etikett.",
      "bad": "Ein namngitt kultur garanterer ikkje at drikka betrar immunforsvaret ditt eller behandlar ei tarmplage. Probiotika kan gi luftplager, og sjeldne infeksjonar er ei særleg bekymring for alvorleg sjuke eller personar med svekt immunforsvar. Desse generelle funna er ikkje ei målt risikovurdering for denne kartongen eller kvar frisk forbrukar.",
      "evidence": "Det individuelle talet på levande LA-5-bakteriar er ikkje publisert her. Ein merkepåstand per uspesifisert glas blir ikkje rekna om til ein dose per kartong.",
      "sources": [
        {
          "name": "NIH ODS · probiotika og stammespesifikk dokumentasjon",
          "url": "https://ods.od.nih.gov/factsheets/Probiotics-Consumer/"
        },
        {
          "name": "TINE · gjeldande oppskrift for Biola Blåbær",
          "url": "https://www.tine.no/produkter/biola-syrnet-melk-med-blabaer"
        }
      ],
      "reviewed": "5. november 2026"
    }
  },
  // ── STOFF 2.94: BB-12 culture [culture-bb12] ──
  {
    "id": "culture-bb12",
    "name": "BB-12 culture",
    "category": "Live cultures",
    "symbol": "Bifidobacterium animalis subsp. lactis BB-12",
    "areas": [
      "Gut",
      "Microbiology"
    ],
    // Engelsk fagtekst: kva stoffet er, kroppen, fordelar og ulemper
    "what": "A named bifidobacterial culture included alongside Biola’s other cultures.",
    "body": "BB-12 is a strain identifier. It helps distinguish this organism from other bacteria studied for digestive effects, rather than describing a vitamin or stimulant.",
    "good": "The strain name is useful when comparing labels and research. Probiotic evidence can be specific to an organism and a measured viable quantity, so this detail is more informative than a vague claim about good bacteria. It does not by itself establish what benefit a particular consumer gets from the drink.",
    "bad": "The manufacturer’s ingredient list does not disclose a separate viable BB-12 amount here. Studies of another strain, dose or product cannot simply be transferred to this carton. Probiotic preparations can cause digestive symptoms in some people, and safety concerns are different for people with serious illness or impaired immune defences.",
    "evidence": "The guide explains the named culture. It does not assign a disease-treatment claim or assume all bacteria survive processing and storage in a fixed amount.",
    "sources": [
      {
        "name": "NIH ODS · probiotics and strain-specific evidence",
        "url": "https://ods.od.nih.gov/factsheets/Probiotics-Consumer/"
      },
      {
        "name": "TINE · current Biola Blåbær recipe",
        "url": "https://www.tine.no/produkter/biola-syrnet-melk-med-blabaer"
      }
    ],
    "reviewed": "5 November 2026",
    // Same ingrediensartikkel på nynorsk
    "nn": {
      "name": "BB-12-kultur",
      "category": "Levande kulturar",
      "symbol": "Bifidobacterium animalis subsp. lactis BB-12",
      "areas": [
        "Tarm",
        "Mikrobiologi"
      ],
      "what": "Ein namngitt bifidobakteriekultur som er med saman med dei andre kulturane i Biola.",
      "body": "BB-12 er ein stammeidentifikator. Han hjelper til med å skilje denne organismen frå andre bakteriar som er studerte for fordøyingsverknader. Han skildrar ikkje eit vitamin eller eit stimulerande stoff.",
      "good": "Stammenamnet er nyttig når du samanliknar etikettar og forsking. Dokumentasjon om probiotika kan gjelde ein bestemt organisme og ei målt mengd levande bakteriar. Denne detaljen er derfor meir informativ enn ein vag påstand om gode bakteriar. Han dokumenterer ikkje i seg sjølv kva fordel ein bestemt forbrukar får frå drikka.",
      "bad": "Ingredienslista til produsenten oppgir ikkje ei eiga mengd levande BB-12 her. Studiar av ein annan stamme, dose eller eit anna produkt kan ikkje utan vidare overførast til denne kartongen. Probiotiske preparat kan gi fordøyingsplager hos somme, og tryggleiksomsyn er annleis for personar med alvorleg sjukdom eller svekt immunforsvar.",
      "evidence": "Rettleiinga forklarer den namngitte kulturen. Ho tilskriv ingen sjukdomsbehandlande verknad og går ikkje ut frå at alle bakteriane overlever bearbeiding og lagring i ei fast mengd.",
      "sources": [
        {
          "name": "NIH ODS · probiotika og stammespesifikk dokumentasjon",
          "url": "https://ods.od.nih.gov/factsheets/Probiotics-Consumer/"
        },
        {
          "name": "TINE · gjeldande oppskrift for Biola Blåbær",
          "url": "https://www.tine.no/produkter/biola-syrnet-melk-med-blabaer"
        }
      ],
      "reviewed": "5. november 2026"
    }
  },
  // ── STOFF 2.95: LGG culture [culture-lgg] ──
  {
    "id": "culture-lgg",
    "name": "LGG culture",
    "category": "Live cultures",
    "symbol": "Lacticaseibacillus rhamnosus GG",
    "areas": [
      "Gut",
      "Microbiology"
    ],
    // Engelsk fagtekst: kva stoffet er, kroppen, fordelar og ulemper
    "what": "A specific bacterial strain commonly referred to by the short name LGG.",
    "body": "LGG is different from the yoghurt starter pair and the other cultures in this recipe. Evidence depends on the strain and viable dose used in a study.",
    "good": "A precise strain name makes it possible to understand research more carefully. Some probiotic preparations are useful in specific circumstances, but that evidence concerns a particular organism, preparation and amount. Knowing the name helps you ask those questions instead of assuming that all fermented milk drinks work in the same way.",
    "bad": "The LGG name does not mean the drink prevents all infections or is a treatment for every digestive symptom. Its individual viable dose is not disclosed here. Digestive side effects and rare infection concerns with probiotics depend on the person and exposure, especially in people who are seriously ill or immunocompromised.",
    "evidence": "TINE lists LGG. The animation uses an enlarged teaching chapter, not a real count, dose or picture of the bacteria.",
    "sources": [
      {
        "name": "NIH ODS · probiotics and strain-specific evidence",
        "url": "https://ods.od.nih.gov/factsheets/Probiotics-Consumer/"
      },
      {
        "name": "TINE · current Biola Blåbær recipe",
        "url": "https://www.tine.no/produkter/biola-syrnet-melk-med-blabaer"
      }
    ],
    "reviewed": "5 November 2026",
    // Same ingrediensartikkel på nynorsk
    "nn": {
      "name": "LGG-kultur",
      "category": "Levande kulturar",
      "symbol": "Lacticaseibacillus rhamnosus GG",
      "areas": [
        "Tarm",
        "Mikrobiologi"
      ],
      "what": "Ein bestemt bakteriestamme som ofte blir omtalt med kortnamnet LGG.",
      "body": "LGG er noko anna enn paret av yoghurtstartbakteriar og dei andre kulturane i denne oppskrifta. Dokumentasjonen er avhengig av stammen og mengda levande bakteriar som er brukt i studien.",
      "good": "Eit presist stammenamn gjer det mogleg å forstå forsking meir nøye. Somme probiotiske preparat er nyttige i bestemte situasjonar, men dokumentasjonen gjeld ein bestemt organisme, eit bestemt preparat og ei bestemt mengd. Når du kjenner namnet, kan du stille slike spørsmål i staden for å gå ut frå at alle syrna mjølkedrikkar verkar på same måte.",
      "bad": "LGG-namnet betyr ikkje at drikka førebyggjer alle infeksjonar eller behandlar alle fordøyingssymptom. Den individuelle dosen levande bakteriar er ikkje oppgitt her. Fordøyingsbiverknader og uro for sjeldne infeksjonar ved probiotika er avhengige av personen og eksponeringa, særleg hos personar som er alvorleg sjuke eller har svekt immunforsvar.",
      "evidence": "TINE oppgir LGG. Animasjonen bruker eit forstørra undervisningskapittel, ikkje eit faktisk tal, ein dose eller eit bilete av bakteriane.",
      "sources": [
        {
          "name": "NIH ODS · probiotika og stammespesifikk dokumentasjon",
          "url": "https://ods.od.nih.gov/factsheets/Probiotics-Consumer/"
        },
        {
          "name": "TINE · gjeldande oppskrift for Biola Blåbær",
          "url": "https://www.tine.no/produkter/biola-syrnet-melk-med-blabaer"
        }
      ],
      "reviewed": "5. november 2026"
    }
  },
  // ── STOFF 2.96: Glucose–fructose syrup [glucose-fructose-syrup] ──
  {
    "id": "glucose-fructose-syrup",
    "name": "Glucose–fructose syrup",
    "category": "Carbohydrate",
    "symbol": "A mixture of two sugars",
    "areas": [
      "Energy intake",
      "Teeth"
    ],
    // Engelsk fagtekst: kva stoffet er, kroppen, fordelar og ulemper
    "what": "A sweet syrup containing both glucose and fructose.",
    "body": "These sugars supply energy and count towards the same total sugars figure as the recipe’s other sugars. The label does not give their individual ratio.",
    "good": "The syrup supplies sweetness and carbohydrate energy, and its mixture can help achieve the intended recipe. Learning its exact label name helps distinguish it from pure glucose or glucose syrup. The different name does not create another nutrient total on top of the sugars already reported for the pouch.",
    "bad": "Its sugars count as free sugars. Frequent sugary drinks can contribute to tooth decay, and extra calories can contribute to weight gain when overall intake exceeds needs. A syrup’s origin or a more complicated name does not remove those effects. The individual syrup amount is not disclosed in the selected product listing.",
    "evidence": "No glucose-to-fructose ratio or US high-fructose-corn-syrup grade is guessed. The selected retailer recipe is kept separate from other Capri-Sun formulas.",
    "sources": [
      {
        "name": "NHS · free sugars and teeth",
        "url": "https://www.nhs.uk/live-well/eat-well/food-types/how-does-sugar-in-our-diet-affect-our-health/"
      },
      {
        "name": "Go Marked · selected 330 ml recipe",
        "url": "https://gomarked.no/produkt/capri-sun-multi-vitamin-drikke-330ml/"
      }
    ],
    "reviewed": "5 November 2026",
    // Same ingrediensartikkel på nynorsk
    "nn": {
      "name": "Glukose–fruktosesirup",
      "category": "Karbohydrat",
      "symbol": "Ei blanding av to sukkerartar",
      "areas": [
        "Energiinntak",
        "Tenner"
      ],
      "what": "Ein søt sirup som inneheld både glukose og fruktose.",
      "body": "Desse sukkerartane gir energi og inngår i den same samla sukkermengda som dei andre sukkerartane i oppskrifta. Etiketten oppgir ikkje det innbyrdes forholdet mellom dei.",
      "good": "Sirupen gir søtsmak og energi frå karbohydrat, og blandinga kan hjelpe til med å oppnå den ønskte oppskrifta. Når du lærer det nøyaktige etikettnamnet, kan du skilje han frå rein glukose eller glukosesirup. Det ulike namnet lagar ikkje ein ekstra næringssum oppå sukkeret som allereie er oppgitt for posen.",
      "bad": "Sukkerartane i sirupen blir rekna som fritt sukker. Hyppige sukkerhaldige drikkar kan bidra til hol i tennene. Ekstra kaloriar kan bidra til vektauke når det samla inntaket er større enn behovet. Opphavet til ein sirup eller eit meir komplisert namn fjernar ikkje desse verknadene. Den eigne sirupmengda er ikkje oppgitt i den valde produktoppføringa.",
      "evidence": "Det blir ikkje gjetta på forholdet mellom glukose og fruktose eller ein amerikansk type maissirup med høgt fruktoseinnhald. Den valde butikkoppskrifta blir halden skild frå andre Capri-Sun-oppskrifter.",
      "sources": [
        {
          "name": "NHS · fritt sukker og tenner",
          "url": "https://www.nhs.uk/live-well/eat-well/food-types/how-does-sugar-in-our-diet-affect-our-health/"
        },
        {
          "name": "Go Marked · vald oppskrift for 330 ml",
          "url": "https://gomarked.no/produkt/capri-sun-multi-vitamin-drikke-330ml/"
        }
      ],
      "reviewed": "5. november 2026"
    }
  }
];

;

// =====================================================================
// DEL 3: NYNORSKE SIDETEKSTAR
// =====================================================================

// NYNORSK
// Engelsk originaltekst til venstre, nynorsk til høgre.
// {drink}, {count} og andre plasshaldarar blir fylte ut av script.js.
window.DRINKLAB_NN = {
  // 3.1 – Drikkeforklaringar, kjeldemerknader og lengre tekstar
  "A familiar can. A closer look at taurine, caffeine and the B-vitamin blend.": "Ein kjend boks. Sjå nærare på taurin, koffein og blandinga av B-vitamin.",
  "Norwegian brand nutrition values and the linked Encon ingredient list. The label names sodium carbonates and magnesium carbonates at family level, and caramel without a class; no more specific form is guessed. Riboflavin is also listed as a colour, with no separate vitamin dose. The brand’s 80 mg caffeine takes precedence over the label’s rounded percentage. Taurine is shown as 1,000 mg per 250 ml serving. Layer sizes are illustrative.": "Næringsverdiar frå den norske merkevaresida og den lenkja ingredienslista frå Encon. Etiketten oppgir natriumkarbonat og magnesiumkarbonat på familienivå, og karamell utan ei oppgitt klasse; det blir ikkje gjetta på meir konkrete former. Riboflavin er òg oppgitt som fargestoff, utan ei eiga vitaminmengd. Dei 80 mg koffein som merkevara oppgir, blir brukte framfor den avrunda prosentdelen på etiketten. Taurin blir vist som 1000 mg per porsjon på 250 ml. Storleiken på laga er illustrerande.",
  "The brand also gives 27 g sugar per can. That package figure and the rounded 11 g per 100 ml do not scale exactly. B12 is listed, but the source page has an unclear unit, so its amount is not shown.": "Merkevara oppgir òg 27 g sukker per boks. Dette talet for pakninga og den avrunda verdien på 11 g per 100 ml stemmer ikkje heilt overeins når ein skalerer. B12 er oppgitt, men kjeldesida har ei uklar eining, så mengda blir ikkje vist.",
  "A clear first pour settles into the glass. The separate layers that follow are enlarged teaching colours, not real concentrations or a factory recipe.": "Den første klare væska blir helt i glaset og legg seg til ro. Dei separate laga som kjem etterpå, er forstørra undervisningsfargar, ikkje verkelege konsentrasjonar eller ei fabrikkoppskrift.",
  "Carbon dioxide disperses through the water. Small bubbles rise along the glass; the gas does not form a separate liquid layer in the real drink.": "Karbondioksid spreier seg gjennom vatnet. Små bobler stig langs glaset; gassen dannar ikkje eit eige væskelag i den verkelege drikka.",
  "The teaching colours curl into one another as the spoon stirs. They gradually become this drink’s representative colour. Colour, viscosity and light transmission remain visual approximations.": "Undervisningsfargane slyngjer seg inn i kvarandre medan skeia rører. Dei blir gradvis til ein farge som er representativ for denne drikka. Farge, kor seig væska er, og korleis lyset slepp gjennom, er framleis visuelle tilnærmingar.",
  "L-carnitine L-tartrate, D-glucuronolactone and two named preservatives. An extended formula to explore.": "L-karnitin L-tartrat, D-glukuronolakton og to namngitte konserveringsmiddel. Ei meir omfattande oppskrift å utforske.",
  "The Norwegian brand confirms volume, caffeine and calories. The detailed recipe follows the linked Norwegian XXL listing, including L-carnitine L-tartrate (0.04%), D-glucuronolactone, guarana and named preservatives. Check your current can because formulations can change. The brand’s 160 mg caffeine total takes precedence over the retailer’s rounded 0.03%; extracts do not create a second caffeine dose. Recipe percentages are not converted into measured milligrams.": "Den norske merkevaresida stadfestar volum, koffein og kaloriar. Den detaljerte oppskrifta følgjer den lenkja norske XXL-oppføringa og omfattar L-karnitin L-tartrat (0,04 %), D-glukuronolakton, guarana og namngitte konserveringsmiddel. Sjekk boksen du har no, sidan samansetjingar kan endre seg. Den samla koffeinmengda på 160 mg frå merkevara blir brukt framfor dei avrunda 0,03 % frå forhandlaren; ekstrakta gir ikkje ein ekstra koffeindose. Prosentdelane i oppskrifta blir ikkje omrekna til målte milligram.",
  "The Norwegian brand page confirms energy, fat and caffeine. The other amounts are not published there, so they are left unknown instead of taken from a different-market can.": "Den norske merkevaresida stadfestar energi, feitt og koffein. Dei andre mengdene er ikkje publiserte der, så dei står som ukjende framfor å bli henta frå ein boks for ein annan marknad.",
  "Caffeine is counted once: the total already includes contributions from guarana and other extracts. This separate blue layer explains the stimulant, without adding another caffeine dose.": "Koffein blir rekna med éin gong: totalen omfattar allereie bidrag frå guarana og andre ekstrakt. Dette separate blå laget forklarer det stimulerande stoffet utan å leggje til ein ny koffeindose.",
  "A seed extract that contains caffeine. Its caffeine contributes to the drink’s total; “plant-derived” does not make the stimulant milder or remove its sleep effects. The extract amount is not an extra caffeine amount.": "Eit frøekstrakt som inneheld koffein. Koffeinet bidreg til den samla mengda i drikka; «frå planter» gjer ikkje det stimulerande stoffet mildare og fjernar ikkje verknadene på søvnen. Mengda ekstrakt er ikkje ei ekstra koffeinmengd.",
  "Guarana, coffee extract and maltodextrin. Follow a more intricate energy formula.": "Guarana, kaffiekstrakt og maltodekstrin. Følg ei meir samansett energioppskrift.",
  "Norwegian Ringnes recipe. Per 500 ml: 160 mg total caffeine, including the extracts, and 2,000 mg taurine, calculated from 320 mg/l and 4,000 mg/l. Sugar and calories scaled from 11 g and 50 kcal per 100 ml. Extracts do not add a second caffeine total.": "Norsk oppskrift frå Ringnes. Per 500 ml: 160 mg koffein totalt, medrekna ekstrakta, og 2000 mg taurin, rekna ut frå 320 mg/l og 4000 mg/l. Sukker og kaloriar er skalerte frå 11 g og 50 kcal per 100 ml. Ekstrakta gir ikkje ein ekstra koffeintotal.",
  "Caffeine includes the coffee and guarana extracts. It is counted once. The listed B vitamins have no amounts on the source page.": "Koffeintalet omfattar kaffi- og guaranaekstrakta. Det blir rekna med éin gong. Dei oppførte B-vitamina har ikkje oppgitte mengder på kjeldesida.",
  "Battery lists coffee extract alongside guarana. It is shown separately from ordinary brewed coffee. Its caffeine is already included in the declared 160 mg total for this serving.": "Battery oppgir kaffiekstrakt saman med guarana. Det blir vist for seg, skilt frå vanleg trakta kaffi. Koffeinet er allereie med i den oppgitte totalen på 160 mg for denne porsjonen.",
  "A full-strength blend with inositol, guarana, preservatives and a vitamin mix.": "Ei blanding med full styrke, med inositol, guarana, konserveringsmiddel og ei vitaminblanding.",
  "Burn’s Norwegian brand page states 32 mg caffeine and 15 g sugar per 100 ml, scaled to a 500 ml can. Ingredient identities follow the Norwegian Encon listing; its rounded 0.03% caffeine is not used to override the brand’s declared total. Taurine is calculated from 0.4%. Calories remain unverified.": "Den norske merkevaresida til Burn oppgir 32 mg koffein og 15 g sukker per 100 ml, skalert til ein boks på 500 ml. Namna på ingrediensane følgjer den norske Encon-oppføringa; den avrunda koffeinprosenten på 0,03 % der blir ikkje brukt til å overstyre den oppgitte totalen frå merkevara. Taurin er rekna ut frå 0,4 %. Kaloriane er framleis ikkje verifiserte.",
  "The Norwegian brand page confirms sugar and caffeine. Taurine is calculated from the separately linked label’s 0.4%. Other nutrition amounts remain unknown.": "Den norske merkevaresida stadfestar sukker og koffein. Taurin er rekna ut frå 0,4 % på etiketten som er lenkja til for seg. Dei andre næringsmengdene er framleis ukjende.",
  "Ascorbic acid, also known as vitamin C, is listed here as an antioxidant to protect the recipe from oxidation. Its presence does not establish a meaningful vitamin dose or make this a vitamin supplement.": "Askorbinsyre, òg kjend som vitamin C, er her oppgitt som ein antioksidant som skal verne oppskrifta mot oksidasjon. At ho er til stades, dokumenterer ikkje ei vitaminmengd som monnar og gjer ikkje dette til eit vitamintilskot.",
  "A sugar-free comparison, with a different route to sweetness.": "Ei sukkerfri samanlikning med ein annan veg til søtsmak.",
  "The Norwegian manufacturer confirms the key ingredients and sucralose/acesulfame K. This page shows that confirmed subset; a complete current can label is still needed for the remaining additives. Photograph packaging may vary by market.": "Den norske produsenten stadfestar hovudingrediensane og sukralose/acesulfam K. Denne sida viser den stadfesta delen; ein fullstendig etikett frå ein aktuell boks trengst framleis for resten av tilsetjingsstoffa. Pakninga på biletet kan variere med marknaden.",
  "The Norwegian source confirms no sugar and the caffeine amount. A complete current nutrition panel is still needed for the remaining values.": "Den norske kjelda stadfestar at drikka er utan sukker, og oppgir koffeinmengda. Ein fullstendig, aktuell næringsdeklarasjon trengst framleis for resten av verdiane.",
  "Sugar and two intense sweeteners, with caramel colour and phosphoric acid.": "Sukker og to intense søtstoff, saman med karamellfarge og fosforsyre.",
  "Current Norwegian Ringnes page: 4.6 g sugar and 18 kcal per 100 ml, scaled to a 500 ml bottle. This recipe contains both sugar and sweeteners. Other markets and older bottles differ. Caffeine is listed within the flavourings; its amount is not disclosed.": "Den noverande norske Ringnes-sida: 4,6 g sukker og 18 kcal per 100 ml, skalert til ei flaske på 500 ml. Denne oppskrifta inneheld både sukker og søtstoff. Andre marknader og eldre flasker kan ha ei anna samansetjing. Koffein er oppgitt som del av aromastoffa; mengda er ikkje oppgitt.",
  "Norwegian Pepsi contains both sugar and sweeteners. Caffeine is present, but the source does not publish its amount.": "Norsk Pepsi inneheld både sukker og søtstoff. Koffein er til stades, men kjelda publiserer ikkje mengda.",
  "Caramel colour, phosphoric acid and the formula behind a classic cola.": "Karamellfarge, fosforsyre og oppskrifta bak ein klassisk cola.",
  "Norwegian manufacturer: 10.6 g sugar and 42 kcal per 100 ml, scaled and rounded to a 330 ml serving. Caffeine is listed but its amount is not disclosed on that page.": "Norsk produsent: 10,6 g sukker og 42 kcal per 100 ml, skalert og avrunda til ein porsjon på 330 ml. Koffein er oppgitt, men mengda er ikkje opplyst på den sida.",
  "This source labels the mineral row as sodium. Sodium and salt are different measures. Caffeine is listed without an amount.": "Denne kjelda kallar mineralrada natrium. Natrium og salt er ulike mål. Koffein er oppgitt utan mengd.",
  "Lemon, lime and fizz. Explore a shorter ingredient list.": "Sitron, lime og bobler. Utforsk ei kortare ingrediensliste.",
  "Norwegian Original formula, 500 ml bottle. Values scaled from 10.1 g sugar and 42 kcal per 100 ml. Caffeine is not listed in the manufacturer’s formula.": "Norsk Original-oppskrift, flaske på 500 ml. Verdiane er skalerte frå 10,1 g sukker og 42 kcal per 100 ml. Koffein er ikkje oppgitt i oppskrifta til produsenten.",
  "Norwegian Original recipe. The source labels the mineral row as sodium. No caffeine is listed in this recipe.": "Norsk Original-oppskrift. Kjelda kallar mineralrada natrium. Det er ikkje oppgitt koffein i denne oppskrifta.",
  "The blue sports drink: dextrose, citrate salts, stabilisers and Brilliant Blue FCF.": "Den blå sportsdrikka: dekstrose, sitratsalt, stabilisatorar og Brilliant Blue FCF.",
  "Norwegian Mountain Blast recipe for the standard bottle, not Zero or the separately listed 1-litre recipe. Sugar and calories scaled from 4.1 g and 18 kcal per 100 ml. Dextrose and fructose contribute to the combined 20.5 g sugar total; their individual amounts are undisclosed. No caffeine is listed.": "Norsk Mountain Blast-oppskrift for standardflaska, ikkje Zero eller 1-litersoppskrifta som er oppført for seg. Sukker og kaloriar er skalerte frå 4,1 g og 18 kcal per 100 ml. Dekstrose og fruktose bidreg til den samla sukkermengda på 20,5 g; dei enkelte mengdene er ikkje oppgitte. Det er ikkje oppgitt koffein.",
  "Standard Norwegian Mountain Blast bottle. The source labels 0.13 g as sodium, which is kept under that name. Dextrose and fructose are included in the one total sugars figure.": "Norsk standardflaske med Mountain Blast. Kjelda kallar 0,13 g for natrium, og det namnet blir halde på. Dekstrose og fruktose er med i det eine samla talet for sukkerartar.",
  "A citrus soda with maltodextrin, locust bean gum and beta-carotene.": "Ein sitrusbrus med maltodekstrin, johannesbrødkjernemjøl og betakaroten.",
  "Norwegian Original recipe. Sugar and calories scaled from 11.2 g and 56 kcal per 100 ml. Caffeine is listed without a quantity. Orange concentrate, stabiliser and antioxidant quantities are undisclosed; the formula is distinct from Urge Zero.": "Norsk Original-oppskrift. Sukker og kaloriar er skalerte frå 11,2 g og 56 kcal per 100 ml. Koffein er oppgitt utan mengd. Mengdene appelsinkonsentrat, stabilisator og antioksidant er ikkje oppgitte; oppskrifta er ei anna enn Urge Zero.",
  "Norwegian Original recipe. Sodium is shown as named in the source. Caffeine and vitamin C are listed without individual amounts.": "Norsk Original-oppskrift. Natrium blir vist med det namnet som står i kjelda. Koffein og vitamin C er oppgitte utan eigne mengder.",
  "Orange juice, sweeteners and stabilisers behind a familiar orange fizz.": "Appelsinjuice, søtstoff og stabilisatorar bak ein kjend appelsinbrus med bobler.",
  "Norwegian Original formula, shown as a 500 ml bottle. The brand page lists both sugar and sweeteners, plus 4.5% orange juice from concentrate. It reports more sugars than total carbohydrate, so both amounts are withheld pending a checked package label. Energy is scaled from the published 30 kcal per 100 ml. No caffeine is listed.": "Norsk Original-oppskrift, vist som ei flaske på 500 ml. Merkevaresida oppgir både sukker og søtstoff, i tillegg til 4,5 % appelsinjuice frå konsentrat. Ho oppgir meir sukkerartar enn samla karbohydrat, så begge mengdene blir haldne tilbake til ein kontrollert pakningsetikett er tilgjengeleg. Energi er skalert frå dei publiserte 30 kcal per 100 ml. Det er ikkje oppgitt koffein.",
  "The Norwegian source reports 7.2 g carbohydrate but 11 g sugars per 100 ml. Sugars cannot exceed total carbohydrate, so both are left unavailable until a checked package label resolves the conflict. Published energy is retained. Vitamin C is listed as an antioxidant without a dose.": "Den norske kjelda oppgir 7,2 g karbohydrat, men 11 g sukkerartar per 100 ml. Sukkerartar kan ikkje overstige samla karbohydrat, så begge verdiane står som utilgjengelege til ein kontrollert pakningsetikett avklarer motseiinga. Den publiserte energiverdien blir behalden. Vitamin C er oppgitt som antioksidant utan dose.",
  "Classic lemon iced tea: black tea extract, two sugars and a stevia sweetener.": "Klassisk iste med sitron: svartteekstrakt, to sukkerartar og eit søtstoff frå stevia.",
  "UK 500 ml Lemon recipe, selected as the classic iced tea. The manufacturer lists sucrose and fructose together, black tea extract (0.12%) and lemon juice from concentrate (0.1%). Tea naturally contains caffeine; its amount is not published for this bottle. The caffeine chapter explains a tea compound, not separately added caffeine. Sugars share one 15 g total. Other markets may differ.": "Britisk Lemon-oppskrift på 500 ml, vald som den klassiske isteen. Produsenten oppgir sukrose og fruktose saman, svartteekstrakt (0,12 %) og sitronjuice frå konsentrat (0,1 %). Te inneheld naturleg koffein; mengda er ikkje publisert for denne flaska. Koffeinkapitlet forklarer eit stoff som finst i teen, ikkje koffein som er tilsett for seg. Sukkerartane deler éin total på 15 g. Andre marknader kan ha ei anna oppskrift.",
  "UK Lemon recipe. Values are per 100 ml on the manufacturer’s page and scaled to 500 ml. Sucrose and fructose share the one sugar total. Tea contributes caffeine, but its amount is not published; ascorbic acid has no published dose.": "Britisk Lemon-oppskrift. Verdiane på produsentsida er per 100 ml og er skalerte til 500 ml. Sukrose og fruktose deler den eine sukkertotalen. Te bidreg med koffein, men mengda er ikkje publisert; askorbinsyre har ingen publisert dose.",
  "An orange sports drink with dextrose, electrolyte salts and emulsion stabilisers.": "Ein oransje sportsdrikk med dekstrose, elektrolyttsalt og stabilisatorar for emulsjonen.",
  "US Thirst Quencher Orange 500 ml bottle, UPC 052000059120. PepsiCo SmartLabel lists 120 kcal, 29 g total sugars, 230 mg sodium and 70 mg potassium per bottle. Per 100 ml values are calculated from that rounded label. Dextrose is part of the combined sugars, not a second 29 g. This US recipe contains Yellow 6; European bottles may differ. No caffeine is listed.": "Amerikansk flaske med Thirst Quencher Orange på 500 ml, UPC 052000059120. PepsiCo SmartLabel oppgir 120 kcal, 29 g sukkerartar totalt, 230 mg natrium og 70 mg kalium per flaske. Verdiar per 100 ml er rekna ut frå den avrunda etiketten. Dekstrose er del av dei samla sukkerartane, ikkje nye 29 g. Denne amerikanske oppskrifta inneheld Yellow 6; europeiske flasker kan ha ei anna samansetjing. Det er ikkje oppgitt koffein.",
  "US 500 ml SmartLabel, UPC 052000059120. Per-bottle values are the declared rounded label amounts; per 100 ml is one fifth. Sodium is shown in grams, converted from 230 mg per bottle. Saturates and kJ are not quantified on this label and are not invented. Sodium and potassium are totals across the recipe.": "Amerikansk SmartLabel for 500 ml, UPC 052000059120. Verdiar per flaske er dei oppgitte, avrunda etikettmengdene; per 100 ml er ein femdel. Natrium blir vist i gram, omrekna frå 230 mg per flaske. Metta feitt og kJ er ikkje talfesta på denne etiketten og blir ikkje funne på. Natrium og kalium er totalar for heile oppskrifta.",
  "Milk, cocoa and gellan gum. Watch a creamy chocolate drink come together.": "Mjølk, kakao og gellangummi. Sjå ei kremete sjokoladedrikke bli til.",
  "Norwegian 500 ml carton. Contains milk. TINE lists low-fat milk, 5% added sugar, 2% cocoa, flavourings and gellan gum. Its nutrition panel is per 100 g; those values are shown separately without assuming 1 g equals 1 ml. Total sugars include milk sugar as well as added sugar. Cocoa can contain caffeine; no total amount is published. The animation starts with milk rather than a separate water ingredient.": "Norsk kartong på 500 ml. Inneheld mjølk. TINE oppgir lettmjølk, 5 % tilsett sukker, 2 % kakao, aromastoff og gellangummi. Næringsdeklarasjonen er per 100 g; desse verdiane blir viste for seg utan å føresetje at 1 g er lik 1 ml. Samla sukkerartar omfattar mjølkesukker i tillegg til tilsett sukker. Kakao kan innehalde koffein; inga samla mengd er publisert. Animasjonen startar med mjølk i staden for å vise vatn som ein eigen ingrediens.",
  "TINE supplies nutrition per 100 g, not per 100 ml. The source values are preserved in the separate weight-based table. A verified product density or total package weight is needed to calculate volume-based values. Cocoa can contain caffeine, but its amount is not published.": "TINE oppgir næring per 100 g, ikkje per 100 ml. Kjeldeverdiane blir haldne på i den separate vektbaserte tabellen. Verifisert tettleik for produktet eller total pakningsvekt trengst for å rekne ut volumbaserte verdiar. Kakao kan innehalde koffein, men mengda er ikkje publisert.",
  "Low-fat milk fills the glass. It already contains water, protein, fat, lactose and minerals; they are not added again as separate recipe steps. Contains milk.": "Lettmjølk fyller glaset. Ho inneheld allereie vatn, protein, feitt, laktose og mineral; dei blir ikkje tilsette på nytt som separate steg i oppskrifta. Inneheld mjølk.",
  "The manufacturer lists 5% added sugar by weight. Milk also contains lactose, so added sugar and total sugars are different numbers. This percentage is not converted to grams per carton without a verified package weight.": "Produsenten oppgir 5 % tilsett sukker etter vekt. Mjølk inneheld òg laktose, så tilsett sukker og samla sukkerartar er ulike tal. Denne prosentdelen blir ikkje omrekna til gram per kartong utan ei verifisert pakningsvekt.",
  "Fine cocoa powder gives chocolate flavour and brown colour. The label lists 2% cocoa by weight. It can naturally contain caffeine and theobromine; neither amount is disclosed for this carton.": "Fint kakaopulver gir sjokoladesmak og brunfarge. Etiketten oppgir 2 % kakao etter vekt. Kakao kan naturleg innehalde koffein og teobromin; ingen av mengdene er oppgitte for denne kartongen.",
  "A chilled milk coffee with whey powder, sodium citrate and gellan gum.": "Ein kald mjølkekaffi med mysepulver, natriumsitrat og gellangummi.",
  "Norwegian 330 ml carton. Contains milk. TINE lists low-fat milk, 30% coffee, 5% sugar, whey powder, sodium citrates, gellan gum and flavourings. Caffeine comes from the coffee; its exact amount is not published here. The separate caffeine chapter is explanatory, not an additional dose. Nutrition is supplied per 100 g and is shown separately without an unverified volume conversion.": "Norsk kartong på 330 ml. Inneheld mjølk. TINE oppgir lettmjølk, 30 % kaffi, 5 % sukker, mysepulver, natriumsitrat, gellangummi og aromastoff. Koffein kjem frå kaffien; den nøyaktige mengda er ikkje publisert her. Det separate koffeinkapitlet er ei forklaring, ikkje ein ekstra dose. Næring er oppgitt per 100 g og blir vist for seg utan ei uverifisert omrekning til volum.",
  "TINE supplies nutrition per 100 g. Those source values appear separately below, without assuming that 330 ml weighs 330 g. Total sugars include milk sugar. Coffee supplies caffeine, but an exact caffeine amount is not published on the source page.": "TINE oppgir næring per 100 g. Desse kjeldeverdiane står for seg nedanfor, utan at ein føreset at 330 ml veg 330 g. Samla sukkerartar omfattar mjølkesukker. Kaffi bidreg med koffein, men ei nøyaktig koffeinmengd er ikkje publisert på kjeldesida.",
  "The recipe lists brewed coffee, not dry coffee powder. Extracted coffee compounds bring colour, flavour and caffeine into the milk. The later caffeine chapter explains that same caffeine rather than adding a second dose.": "Oppskrifta oppgir trakta kaffi, ikkje tørt kaffipulver. Stoffa som er trekte ut av kaffien, gir mjølka farge, smak og koffein. Det seinare koffeinkapitlet forklarer det same koffeinet framfor å leggje til ein ny dose.",
  "A Norwegian classic with caramel colour, citric acid and sodium benzoate.": "Ein norsk klassikar med karamellfarge, sitronsyre og natriumbenzoat.",
  "Norwegian Original recipe, shown as a 500 ml bottle. Ringnes gives 11.2 g sugars and 45 kcal per 100 ml. No caffeine or intense sweeteners are listed. E150d gives colour; its individual amount is not published.": "Norsk Original-oppskrift, vist som ei flaske på 500 ml. Ringnes oppgir 11,2 g sukkerartar og 45 kcal per 100 ml. Det er ikkje oppgitt koffein eller intense søtstoff. E150d gir farge; den eigne mengda er ikkje publisert.",
  "Norwegian Original recipe, scaled from Ringnes’s per-100-ml panel to one 500 ml bottle. No caffeine or sweeteners are listed.": "Norsk Original-oppskrift, skalert frå Ringnes sin deklarasjon per 100 ml til éi flaske på 500 ml. Det er ikkje oppgitt koffein eller søtstoff.",
  "Apple and grape juice, two preservatives and a different class of caramel colour.": "Eple- og druejuice, to konserveringsmiddel og ei anna klasse karamellfarge.",
  "Norwegian Original recipe, 500 ml bottle. Ringnes lists 20% juice from concentrate: 12% grape and 8% apple. The 36.5 g total sugars includes sugars from that juice and added sugar; it must not be counted twice. This recipe uses E150b, not the E150d in cola and Villa. No caffeine is listed.": "Norsk Original-oppskrift, flaske på 500 ml. Ringnes oppgir 20 % juice frå konsentrat: 12 % drue og 8 % eple. Dei 36,5 g sukker totalt omfattar sukker frå juicen og tilsett sukker. Det må ikkje teljast to gonger. Denne oppskrifta bruker E150b, ikkje E150d som i cola og Villa. Koffein er ikkje oppført.",
  "Norwegian Original recipe. Total sugars includes the 20% apple-and-grape juice blend and added sugar. Ascorbic acid is an antioxidant ingredient with no published vitamin dose.": "Norsk Original-oppskrift. Det samla sukkerinnhaldet omfattar juiceblandinga med 20 % eple og drue og tilsett sukker. Askorbinsyre er ein antioksidantingrediens utan publisert vitamindose.",
  "Mozell lists grape and apple juice from concentrate as one 20% fruit-juice portion. The juice sugars already belong to the nutrition panel’s combined sugars figure. The visible layer size does not represent this percentage.": "Mozell oppgir drue- og eplejuice frå konsentrat som éin fruktjuicedel på 20 %. Sukkeret frå juicen er allereie med i den samla sukkerverdien i næringsoversikta. Den synlege storleiken på laget viser ikkje denne prosentdelen.",
  "The 36.5 g total covers the entire bottle: added sugar and sugars from the apple and grape juices together. The juice stage does not add a second sugar total.": "Dei 36,5 g totalt gjeld heile flaska: tilsett sukker og sukker frå eple- og druejuicen saman. Juicesteget legg ikkje til ein ekstra sukkertotal.",
  "Red Christmas soda: anthocyanins, caramel colour and a sweet festive formula.": "Raud julebrus: antocyan, karamellfarge og ei søt, festprega oppskrift.",
  "The red Norwegian Ringnes Julebrus with sugar, shown as a 500 ml bottle. The manufacturer lists 11 g sugars and 44 kcal per 100 ml. Its colour blend contains E163 and E150d, shown as separate teaching chapters. No caffeine is listed. This is the Original recipe, not the light version.": "Den raude norske Ringnes Julebrus med sukker, vist som ei flaske på 500 ml. Produsenten oppgir 11 g sukker og 44 kcal per 100 ml. Fargeblandinga inneheld E163 og E150d, viste som eigne forklaringssteg. Koffein er ikkje oppført. Dette er Original-oppskrifta, ikkje lettversjonen.",
  "Red Ringnes Julebrus with sugar, using the manufacturer’s per-100-ml values and a 500 ml bottle. No caffeine is listed.": "Raud Ringnes Julebrus med sukker, med verdiane frå produsenten per 100 ml og ei flaske på 500 ml. Koffein er ikkje oppført.",
  "Brown Christmas soda with caramel colour, citric acid and a distinct festive flavour.": "Brun julebrus med karamellfarge, sitronsyre og ein særprega festsmak.",
  "Norwegian Hamar og Lillehammer Julebrus with sugar, shown as a 500 ml bottle. Ringnes gives 11.2 g sugars and 45 kcal per 100 ml. E150d provides the brown colour. No caffeine or intense sweeteners are listed. The separate light recipe is not used.": "Norsk Hamar og Lillehammer Julebrus med sukker, vist som ei flaske på 500 ml. Ringnes oppgir 11,2 g sukker og 45 kcal per 100 ml. E150d gir brunfargen. Koffein og intense søtstoff er ikkje oppførte. Den separate lettoppskrifta blir ikkje brukt.",
  "Brown Hamar og Lillehammer Julebrus with sugar. Quantities are scaled to 500 ml from the manufacturer’s per-100-ml panel. The light recipe is not substituted.": "Brun Hamar og Lillehammer Julebrus med sukker. Mengdene er skalerte til 500 ml frå næringsoversikta til produsenten per 100 ml. Lettoppskrifta er ikkje brukt i staden.",
  "Norwegian peach iced tea with black tea extract, fruit juices and potassium sorbate.": "Norsk iste med fersken, svart teekstrakt, fruktjuicar og kaliumsorbat.",
  "Norwegian Original Fersken recipe, shown as a 500 ml bottle. TINE lists 6.8% added sugar plus peach and lemon juice from concentrate. Its nutrition panel is per 100 g and appears in a separate weight-based table; no density is assumed for volume calculations. Caffeine occurs naturally in the tea extract, with no published amount. Its chapter is explanatory, not a second added dose.": "Norsk Original Fersken-oppskrift, vist som ei flaske på 500 ml. TINE oppgir 6,8 % tilsett sukker i tillegg til fersken- og sitronjuice frå konsentrat. Næringsoversikta er per 100 g og blir vist i ein eigen vektbasert tabell. Det blir ikkje gått ut frå ein tettleik i volumutrekningar. Koffein finst naturleg i teekstraktet, utan publisert mengd. Koffeinsteget forklarer stoffet og er ikkje ein ekstra tilsett dose.",
  "TINE publishes nutrition per 100 g. Those weight-based figures are shown separately; the volume-based figures stay unavailable without a verified conversion. The 6.8% added sugar in the recipe is not the same as the 7 g total sugars per 100 g. Caffeine from tea and the antioxidant’s vitamin C amount are not quantified.": "TINE publiserer næringsinnhaldet per 100 g. Dei vektbaserte tala blir viste for seg. Volumbaserte tal er framleis utilgjengelege utan ei stadfesta omrekning. Dei 6,8 % tilsett sukker i oppskrifta er ikkje det same som 7 g sukker totalt per 100 g. Koffeinet frå teen og vitamin C-mengda frå antioksidanten er ikkje talfesta.",
  "TINE lists 6.8% added sugar in this recipe. Peach and lemon juices also contribute sugars. Nutrition is published per 100 g; the recipe percentage is not used to guess grams per 500 ml bottle.": "TINE oppgir 6,8 % tilsett sukker i denne oppskrifta. Fersken- og sitronjuicen bidreg òg med sukker. Næringsinnhaldet er publisert per 100 g. Prosentdelen i oppskrifta blir ikkje brukt til å gjette gram per flaske på 500 ml.",
  "Black tea extract naturally contains caffeine. This chapter explains a compound already present in the tea rather than adding another stimulant dose. The manufacturer does not publish its amount for this bottle.": "Svart teekstrakt inneheld naturleg koffein. Dette steget forklarer eit stoff som allereie finst i teen, heller enn å leggje til ein ekstra stimulerande dose. Produsenten publiserer ikkje mengda for denne flaska.",
  "Raspberry squash with sucralose, acesulfame K and anthocyanins, diluted as directed.": "Bringebærsaft med sukralose, acesulfam K og antocyan, blanda ut som oppgitt.",
  "Sugar-free FUN Light, retained by request. The picture shows the concentrate bottle; this experience represents a prepared 250 ml glass. Dilute 1 part concentrate with 9 parts water: 25 ml concentrate plus 225 ml water. Nutrition is for the diluted drink, not the whole bottle or neat concentrate. Additive chapters describe ingredients already in the concentrate. No caffeine is listed.": "Sukkerfri FUN Light, behalden etter ønske. Biletet viser konsentratflaska. Denne opplevinga viser eit ferdig utblanda glas på 250 ml. Bland 1 del konsentrat med 9 delar vatn: 25 ml konsentrat og 225 ml vatn. Næringsinnhaldet gjeld den utblanda drikka, ikkje heile flaska eller reint konsentrat. Stega for tilsetjingsstoff skildrar ingrediensar som allereie finst i konsentratet. Koffein er ikkje oppført.",
  "For a prepared glass diluted 1 + 9 with water, not neat concentrate. The manufacturer publishes 3 kJ / 1 kcal per 100 ml and 8 kJ / 3 kcal per 250 ml; both rounded label figures are retained. No caffeine is listed. Sugar-free does not mean flavourings, acids and sweeteners are absent.": "For eit ferdig glas blanda ut 1 + 9 med vatn, ikkje reint konsentrat. Produsenten publiserer 3 kJ / 1 kcal per 100 ml og 8 kJ / 3 kcal per 250 ml. Begge dei avrunda etiketttala er bevarte. Koffein er ikkje oppført. Sukkerfri tyder ikkje at aroma, syrer og søtstoff er fråverande.",
  "The prepared glass starts with the measured water used for dilution. The concentrate also contains water, so this is not a claim about the total water content. Later chapters explain what is already in that concentrate, using enlarged teaching layers.": "Det ferdige glaset byrjar med det oppmålte vatnet brukt til utblanding. Konsentratet inneheld òg vatn, så dette er ikkje ein påstand om det totale vassinnhaldet. Seinare steg forklarer det som allereie finst i konsentratet, med forstørra lag som hjelp i forklaringa.",
  "Mineral water, lighter carbonation and lemon–lemongrass flavour, without sugar or sweeteners.": "Mineralvatn, lettare kolsyre og sitron- og sitrongrassmak, utan sukker eller søtstoff.",
  "Norwegian 500 ml bottle. The manufacturer lists natural mineral water, water, carbon dioxide and flavouring, with 0.06 g salt per 100 ml. Salt is a nutrition measure for the finished drink; no separate added table-salt ingredient is listed. No lemon juice, citric acid, sugar, sweeteners or caffeine are inferred from the flavour name.": "Norsk flaske på 500 ml. Produsenten oppgir naturleg mineralvatn, vatn, karbondioksid og aroma, med 0,06 g salt per 100 ml. Salt er eit næringsmål for den ferdige drikka. Bordsalt er ikkje oppført som ein eigen tilsett ingrediens. Det blir ikkje slutta frå smaksnamnet at drikka inneheld sitronjuice, sitronsyre, sukker, søtstoff eller koffein.",
  "Norwegian Sitron & Sitrongress recipe. Salt is 0.06 g per 100 ml and 0.3 g per 500 ml bottle. This nutrition measure is not treated as a separate added table-salt ingredient. Individual minerals are not quantified on this source page.": "Norsk Sitron & Sitrongress-oppskrift. Saltinnhaldet er 0,06 g per 100 ml og 0,3 g per flaske på 500 ml. Dette næringsmålet blir ikkje behandla som ein eigen tilsett bordsaltingrediens. Dei individuelle minerala er ikkje talfesta på denne kjeldesida.",
  "Natural mineral water and water form the base. The minerals are already dissolved. The nutrition panel reports salt, but the manufacturer does not list added table salt or disclose individual mineral amounts here.": "Naturleg mineralvatn og vatn dannar grunnlaget. Minerala er allereie oppløyste. Næringsoversikta oppgir salt, men produsenten oppfører ikkje tilsett bordsalt eller individuelle mineralmengder her.",
  "A red tropical soda with citrus extract, fruit concentrates and two emulsion stabilisers.": "Ein raud tropisk brus med sitrusekstrakt, fruktkonsentrat og to emulsjonsstabilisatorar.",
  "Norwegian Original Exotic formula, shown as a 500 ml bottle. The manufacturer lists 3% juice from concentrate: 2.6% orange, 0.2% passion fruit and 0.2% peach. It gives 13.2 g sugars and 53 kcal per 100 ml. The separate Zero recipe is not used. E445 and E414 stabilise the mixture. Juice sugars and added sugars share one nutrition total; fruit colours are not assigned guessed individual pigment doses.": "Norsk Original Exotic-oppskrift, vist som ei flaske på 500 ml. Produsenten oppgir 3 % juice frå konsentrat: 2,6 % appelsin, 0,2 % pasjonsfrukt og 0,2 % fersken. Oppgitte verdiar er 13,2 g sukker og 53 kcal per 100 ml. Den separate Zero-oppskrifta blir ikkje brukt. E445 og E414 stabiliserer blandinga. Sukker frå juice og tilsett sukker deler éin samla næringsverdi. Det blir ikkje gjetta individuelle pigmentdosar for fargane frå frukt.",
  "Norwegian Original Exotic panel, scaled from 100 ml to 500 ml. Its mineral row is labelled sodium, so that wording is preserved. The 3% fruit blend and added sugar contribute to one combined sugars amount. The separate Zero formula is not used.": "Norsk Original Exotic-næringsoversikt, skalert frå 100 ml til 500 ml. Mineralrada er merkt natrium, så det ordet er halde ved lag. Fruktblandinga på 3 % og tilsett sukker bidreg til éi samla sukkermengd. Den separate Zero-oppskrifta blir ikkje brukt.",
  "These three juices come from concentrate. Their sugars are already part of the bottle’s 66 g total sugars, together with added sugar. The enlarged juice layer is not its measured volume.": "Desse tre juicane kjem frå konsentrat. Sukkeret deira er allereie ein del av dei 66 g sukker totalt i flaska, saman med tilsett sukker. Det forstørra juicelaget er ikkje det målte volumet.",
  "Sugar and steviol glycosides, two acids and a clear lemon–lime finish.": "Sukker og steviolglykosid, to syrer og eit klart sitron- og limepreg.",
  "Norwegian Original recipe, shown as the 1.5 litre bottle in the manufacturer’s photo. This is a whole-package comparison, not a suggested portion. Ringnes lists sugar and steviol glycosides together, with citric acid, malic acid and sodium citrate. Values scale from its per-100-ml panel. No caffeine, added colour or separate lemon/lime juice is listed. 7UP Free is a different recipe.": "Norsk Original-oppskrift, vist som flaska på 1,5 liter på produsentbiletet. Dette er ei samanlikning av heile pakninga, ikkje ein føreslått porsjon. Ringnes oppgir sukker og steviolglykosid saman, med sitronsyre, eplesyre og natriumsitrat. Verdiane blir skalerte frå næringsoversikta per 100 ml. Koffein, tilsett farge og eigen sitron- eller limejuice er ikkje oppførte. 7UP Free har ei anna oppskrift.",
  "Ringnes’s Norwegian Original formula, with sugar and steviol glycosides. The bottle shown contains 1500 ml, so the package column is 15 times the per-100-ml figures. It represents the whole bottle rather than a suggested drinking portion.": "Den norske Original-oppskrifta til Ringnes, med sukker og steviolglykosid. Flaska som er vist, inneheld 1500 ml, så pakningskolonnen er 15 gonger verdiane per 100 ml. Han viser heile flaska, heller enn ein føreslått drikkeporsjon.",
  "Mixed fruit juices, a glucose–fructose syrup and a vitamin blend with biotin and vitamin E.": "Blanda fruktjuicar, glukose-fruktosesirup og ei vitaminblanding med biotin og vitamin E.",
  "330 ml resealable pouch, Norwegian Go Marked listing, GTIN 4000177162316. This selected recipe contains 10% mixed fruit juice, sugar and glucose–fructose syrup. All contribute to one total sugars figure. Other importers list different formulas; check your own pouch. B12 is named without an amount. No B1 is inferred from other versions. The source’s less-than nutrient values retain their qualifiers when scaled.": "Pose på 330 ml som kan lukkast att, frå den norske Go Marked-oppføringa, GTIN 4000177162316. Denne valde oppskrifta inneheld 10 % blanda fruktjuice, sukker og glukose-fruktosesirup. Alt bidreg til éin samla sukkerverdi. Andre importørar oppgir andre oppskrifter. Sjekk din eigen pose. B12 er namngitt utan mengd. B1 blir ikkje slutta frå andre versjonar. Mindre-enn-verdiane i kjelda held på avgrensinga si når dei blir skalerte.",
  "Selected Norwegian retailer label for the 330 ml pouch, GTIN 4000177162316. This version has 10% juice and glucose–fructose syrup. Figures are not combined with different 12% juice or Zero formulas. The listed B12 dose is unavailable. Less-than values remain less-than values when scaled.": "Vald norsk forhandlaretikett for posen på 330 ml, GTIN 4000177162316. Denne versjonen har 10 % juice og glukose-fruktosesirup. Tala blir ikkje kombinerte med andre oppskrifter med 12 % juice eller Zero-oppskrifter. Dosen av oppført B12 er ikkje tilgjengeleg. Mindre-enn-verdiar held fram med å vere mindre-enn-verdiar når dei blir skalerte.",
  "The selected recipe blends orange, apple, passion fruit, kiwi, pineapple, grapefruit, lime and banana juices from concentrate. Their individual split is not imported from a different formula. Juice sugars belong to the pouch’s one total sugars figure.": "Den valde oppskrifta blandar juice frå appelsin, eple, pasjonsfrukt, kiwi, ananas, grapefrukt, lime og banan frå konsentrat. Fordelinga mellom dei blir ikkje henta frå ei anna oppskrift. Sukkeret frå juicen høyrer til den eine samla sukkerverdien for posen.",
  "Three named BCAA amino acids, green-tea extract and a vitamin mix. Explore what each actually does.": "Tre namngitte BCAA-aminosyrer, grønt teekstrakt og ei vitaminblanding. Utforsk kva kvar av dei faktisk gjer.",
  "Norwegian supplier Nbev’s 330 ml recipe as listed by Oda, including green-tea extract and vitamin D. The listing is unavailable for sale, so it is not confirmation of today’s can. Caffeine, BCAA ratio and vitamin doses are not published there. Its nutrition heading says “per 100g/ml”; an exact volume conversion is not assumed. The manufacturer photo shows a 180 mg reference can, while quantities vary by market; that photo is not used to assign a dose to this selected Norwegian recipe. Caffeine from extracts counts towards one total.": "Oppskrifta på 330 ml frå den norske leverandøren Nbev, slik ho er oppgitt hos Oda, med grønt teekstrakt og vitamin D. Oppføringa er ikkje tilgjengeleg for sal og stadfestar difor ikkje dagens boks. Mengda koffein, BCAA-forholdet og vitamindosane er ikkje publiserte der. Overskrifta for næring seier «per 100g/ml». Det blir ikkje gått ut frå ei nøyaktig omrekning til volum. Produsentbiletet viser ein referanseboks med 180 mg, medan mengdene varierer mellom marknader. Biletet blir ikkje brukt til å tilordne ein dose til denne valde norske oppskrifta. Koffein frå ekstrakt er med i éin total.",
  "For the selected Norwegian supplier recipe, caffeine, individual amino acids, total BCAA and vitamin doses are not verified. Oda reports 17 kJ / 4 kcal and 1 g protein under the ambiguous heading “per 100g/ml”; those are not converted into volume-based values here. The manufacturer’s 180 mg reference can and other-market panels are not substituted for a checked Norwegian package label. Sugar-free is a product description rather than an invented complete nutrition panel.": "For den valde norske leverandøroppskrifta er mengda koffein, individuelle aminosyrer, BCAA totalt og vitamindosane ikkje stadfesta. Oda oppgir 17 kJ / 4 kcal og 1 g protein under den tvitydige overskrifta «per 100g/ml». Desse blir ikkje omrekna til volumbaserte verdiar her. Referanseboksen frå produsenten med 180 mg og næringsoversikter frå andre marknader blir ikkje brukte i staden for ein kontrollert norsk pakningsetikett. Sukkerfri er ei produktskildring, heller enn ei oppdikta fullstendig næringsoversikt.",
  "The Norwegian supplier recipe lists a green-tea extract. Caffeine from that extract belongs to the same overall caffeine exposure, not a second total. The extract’s quantity and catechin content are not disclosed.": "Den norske leverandøroppskrifta oppgir eit grønt teekstrakt. Koffeinet frå ekstraktet høyrer til den same samla koffeineksponeringa, ikkje ein ekstra total. Mengda ekstrakt og innhaldet av katekin er ikkje oppgitt.",
  "Blueberry cultured milk with pectins, yoghurt starters and the LA-5, BB-12 and LGG cultures.": "Syrna blåbærmjølk med pektin, yoghurtstartkulturar og kulturane LA-5, BB-12 og LGG.",
  "Current TINE Original Blåbær recipe, 1000 g carton. The package and nutrition are measured by weight, so this comparison uses grams rather than treating 1000 g as 1000 ml. Contains milk; not labelled lactose-free. TINE lists 8% blueberry juice from concentrate, 5% added sugar and 1% blackcurrant juice from concentrate, pectins, yoghurt starters, LA-5, BB-12, LGG and vitamin D. Individual viable culture counts are not published here. Culture chapters explain fermentation and are not extra measured doses or a factory sequence.": "Den noverande TINE Original Blåbær-oppskrifta, kartong på 1000 g. Pakninga og næringsinnhaldet er målte etter vekt, så samanlikninga bruker gram i staden for å behandle 1000 g som 1000 ml. Inneheld mjølk og er ikkje merkt laktosefri. TINE oppgir 8 % blåbærjuice frå konsentrat, 5 % tilsett sukker og 1 % solbærjuice frå konsentrat, pektin, yoghurtstartkulturar, LA-5, BB-12, LGG og vitamin D. Individuelle tal på levande kulturar er ikkje publiserte her. Kulturstega forklarer fermentering og er ikkje ekstra målte dosar eller ei produksjonsrekkjefølgje.",
  "TINE’s package is 1000 g and its panel is per 100 g. Both columns therefore use weight: one whole carton and 100 g. No product density is assumed and no per-100-ml conversion is made. Total sugars include milk sugar, juice sugars and added sugar together. The whole-carton column is a package comparison, not a suggested portion. Viable culture doses are not quantified.": "Pakninga til TINE er på 1000 g, og næringsoversikta er per 100 g. Begge kolonnane bruker difor vekt: éin heil kartong og 100 g. Det blir ikkje gått ut frå ein produkttettleik eller rekna om til per 100 ml. Det samla sukkerinnhaldet omfattar mjølkesukker, juicesukker og tilsett sukker saman. Kolonnen for heile kartongen er ei pakningssamanlikning, ikkje ein føreslått porsjon. Dosane av levande kulturar er ikkje talfesta.",
  "Skimmed milk is the foundation. It already contains milk proteins, lactose and minerals. Fermentation changes part of that mixture; the later culture chapters explain the process rather than adding a second milk dose. Contains milk.": "Skumma mjølk er grunnlaget. Ho inneheld allereie mjølkeprotein, laktose og mineral. Fermentering endrar ein del av denne blandinga. Dei seinare kulturstega forklarer prosessen, heller enn å leggje til ein ekstra mjølkedose. Inneheld mjølk.",
  "TINE lists 5% added sugar in a 1000 g carton, equivalent to 50 g. The nutrition total is 93 g sugars, including remaining milk sugar and juice sugars. These are overlapping figures, not two amounts to add together.": "TINE oppgir 5 % tilsett sukker i ein kartong på 1000 g, som svarer til 50 g. Næringstotalen er 93 g sukker og omfattar attverande mjølkesukker og juicesukker. Dette er overlappande tal, ikkje to mengder som skal leggjast saman.",
  "Starter bacteria used to turn milk into a cultured dairy product. The bacteria ferment some milk sugar into lactic acid. Sufficient live yoghurt starters can help lactose digestion in the fermented product for people who digest lactose poorly. This chapter does not show an actual factory addition or a measured number of bacteria.": "Startbakteriar brukte til å gjere mjølk om til eit syrna mjølkeprodukt. Bakteriane fermenterer noko av mjølkesukkeret til mjølkesyre. Tilstrekkeleg med levande yoghurtstartkulturar kan hjelpe personar som fordøyer laktose dårleg, med å fordøye laktosen i det fermenterte produktet. Dette steget viser ikkje ei faktisk tilsetjing i produksjonen eller eit målt tal på bakteriar.",
  "One of the specifically named bacterial cultures in Biola. LA-5 identifies a particular strain of lactic-acid bacteria. A strain name matters because findings about one culture do not automatically apply to every other bacterium. This chapter does not show an actual factory addition or a measured number of bacteria.": "Ein av dei særskilt namngitte bakteriekulturane i Biola. LA-5 identifiserer ein bestemt stamme av mjølkesyrebakteriar. Stammenamnet er viktig fordi funn om éin kultur ikkje automatisk gjeld alle andre bakteriar. Dette steget viser ikkje ei faktisk tilsetjing i produksjonen eller eit målt tal på bakteriar.",
  "A named bifidobacterial culture included alongside Biola’s other cultures. BB-12 is a strain identifier. It helps distinguish this organism from other bacteria studied for digestive effects, rather than describing a vitamin or stimulant. This chapter does not show an actual factory addition or a measured number of bacteria.": "Ein namngitt bifidobakteriekultur som finst saman med dei andre kulturane i Biola. BB-12 er ein stammeidentifikator. Han hjelper med å skilje denne organismen frå andre bakteriar som er undersøkte for verknader på fordøyinga, heller enn å skildre eit vitamin eller stimulerande stoff. Dette steget viser ikkje ei faktisk tilsetjing i produksjonen eller eit målt tal på bakteriar.",
  "A specific bacterial strain commonly referred to by the short name LGG. LGG is different from the yoghurt starter pair and the other cultures in this recipe. Evidence depends on the strain and viable dose used in a study. This chapter does not show an actual factory addition or a measured number of bacteria.": "Ein bestemt bakteriestamme som vanlegvis blir omtala med kortnamnet LGG. LGG er noko anna enn dei to yoghurtstartkulturane og dei andre kulturane i oppskrifta. Dokumentasjonen avheng av stammen og dosen med levande bakteriar som blei brukt i ein studie. Dette steget viser ikkje ei faktisk tilsetjing i produksjonen eller eit målt tal på bakteriar.",
  "No energy blend. Just water, extracted coffee compounds and caffeine.": "Inga energiblanding. Berre vatn, ekstraherte kaffistoff og koffein.",
  "An illustrative unsweetened 200 ml filter coffee. EFSA’s typical caffeine estimate is 90 mg; bean, brew strength and preparation change the actual value. Not a branded recipe or laboratory analysis.": "Ein illustrativ, usøta filterkaffi på 200 ml. EFSA sitt typiske koffeinanslag er 90 mg. Bønner, bryggjestyrke og tillaging endrar den faktiske verdien. Ikkje ei merkevareoppskrift eller ein laboratorieanalyse.",
  "A representative plain brew, not a fixed packaged recipe. Caffeine is a typical estimate; strength changes with brewing. No sugar is added, but that is not used to invent a full measured nutrition panel.": "Eit representativt, vanleg brygg, ikkje ei fast oppskrift for eit pakka produkt. Koffein er eit typisk anslag. Styrken endrar seg med brygginga. Sukker er ikkje tilsett, men det blir ikkje brukt til å finne på ei fullstendig målt næringsoversikt.",
  "See what brewing extracts from tea leaves, without sugar or milk.": "Sjå kva brygginga trekkjer ut frå teblada, utan sukker eller mjølk.",
  "Representative unsweetened 220 ml black tea, using EFSA’s typical 50 mg caffeine estimate. Leaf type, steeping time and water temperature affect the cup. Tea compounds are grouped rather than exhaustively listed.": "Representativ, usøta svart te på 220 ml, med EFSA sitt typiske anslag på 50 mg koffein. Bladtype, trekketid og vasstemperatur påverkar koppen. Testoffa er grupperte, heller enn fullstendig lista opp.",
  "A representative plain black tea. Caffeine is a typical estimate; steeping time and leaves change it. No added sugar is different from a measured total-sugar result.": "Ein representativ, vanleg svart te. Koffein er eit typisk anslag. Trekketida og blada endrar mengda. Ikkje tilsett sukker er noko anna enn eit målt resultat for sukker totalt.",
  "Naturally occurring sugars, vitamin C and the role of the fruit matrix.": "Naturleg sukker, vitamin C og oppgåva til fruktstrukturen.",
  "A generic 150 ml serving of 100% orange juice without added sugar. Sugar and vitamin C vary with fruit and processing, so precise amounts are not assigned. This is a composition overview, not a specific product label.": "Ein generell porsjon på 150 ml med 100 % appelsinjuice utan tilsett sukker. Sukker og vitamin C varierer med frukta og handsaminga, så det blir ikkje tilordna nøyaktige mengder. Dette er ei oversikt over samansetjinga, ikkje etiketten til eit bestemt produkt.",
  "Generic 100% orange juice. It contains naturally occurring sugars and vitamin C, but no exact brand or measured amounts have been selected.": "Generell 100 % appelsinjuice. Han inneheld naturleg sukker og vitamin C, men det er ikkje valt eit bestemt merke eller målte mengder.",
  "Juice contains naturally occurring sugars, already dissolved in the juice. They still count as free sugars. The separate crystal stream is an illustration, not an added ingredient or a real manufacturing step.": "Juice inneheld naturleg sukker, allereie oppløyst i juicen. Det blir framleis rekna som fritt sukker. Den eigne krystallstraumen er ein illustrasjon, ikkje ein tilsett ingrediens eller eit verkeleg produksjonssteg.",
  "The simplest experiment: water and carbon dioxide, with nothing sweet added.": "Det enklaste eksperimentet: vatn og karbondioksid, utan noko søtt tilsett.",
  "Generic unflavoured carbonated water with no sugar or sweeteners. Natural mineral content depends on the source and is not quantified or included as a separate stage.": "Generelt kolsyrevatn utan smak, sukker eller søtstoff. Det naturlege mineralinnhaldet avheng av kjelda og er ikkje talfesta eller lagt til som eit eige steg.",
  "Generic plain sparkling water without sugar. Mineral and salt content depend on the water source and are not assigned here.": "Generelt vanleg kolsyrevatn utan sukker. Mineral- og saltinnhaldet avheng av vasskjelda og blir ikkje tilordna her.",
  // 3.2 – Ingrediensnamn, mengder, einingar og produktnamn
  "The foundation": "Grunnlaget",
  "A clear starting point": "Eit klart utgangspunkt",
  "Quantity undisclosed": "Mengda er ikkje oppgitt",
  "Listed ingredient · individual dose not published": "Oppført ingrediens · eigen dose er ikkje publisert",
  "Sugar": "Sukker",
  "27 g": "27 g",
  "Combined sugars per 250 ml · see source note": "Samla sukker per 250 ml · sjå kjeldemerknaden",
  "Dextrose": "Dekstrose",
  "Part of 27 g": "Del av 27 g",
  "Combined sugars per 250 ml · individual split undisclosed": "Samla sukker per 250 ml · fordelinga er ikkje oppgitt",
  "1,000 mg": "1 000 mg",
  "Calculated from the label · per 250 ml": "Rekna ut frå etiketten · per 250 ml",
  "E500": "E500",
  "E504": "E504",
  "80 mg": "80 mg",
  "Total caffeine per 250 ml": "Samla koffein per 250 ml",
  "16 mg": "16 mg",
  "Per 250 ml · see nutrition source below": "Per 250 ml · sjå næringskjelda nedanfor",
  "5 mg": "5 mg",
  "0.5 mg": "0,5 mg",
  "Caramel": "Karamell",
  "Riboflavin · colour and vitamin B2": "Riboflavin · farge og vitamin B2",
  "Listed as a colour · separate nutrient amount not published": "Oppført som farge · eiga næringsmengd er ikkje publisert",
  "From layers to a drink.": "Frå lag til ei drikk.",
  "Mix together": "Bland saman",
  "250": "250",
  "ml · Red Bull Original": "ml · Red Bull Original",
  "One complete mixture": "Éi samla blanding",
  "Energy": "Energi",
  "Carbohydrate": "Karbohydrat",
  "of which sugars": "av dette sukkerartar",
  "Fat": "Feitt",
  "of which saturates": "av dette metta feitt",
  "Protein": "Protein",
  "Salt": "Salt",
  "Vitamin B2": "Vitamin B2",
  "Niacin · B3": "Niacin · B3",
  "Vitamin B6": "Vitamin B6",
  "Vitamin B12": "Vitamin B12",
  "Norwegian retailer recipe · check the current can": "Norsk butikkoppskrift · sjekk den gjeldande boksen",
  "Not verified": "Ikkje stadfesta",
  "Combined sugars per 500 ml · see source note": "Samla sukker per 500 ml · sjå kjeldemerknaden",
  "Part of total sugars": "Del av det samla sukkeret",
  "Individual syrup amount not published": "Eiga sirupmengd er ikkje publisert",
  "E331": "E331",
  "Ginseng": "Ginseng",
  "L-carnitine": "L-karnitin",
  "0.04% in recipe": "0,04 % i oppskrifta",
  "Retailer label percentage · not a measured pure-carnitine dose": "Prosent frå butikketiketten · ikkje ein målt dose reint karnitin",
  "160 mg": "160 mg",
  "Total caffeine per 500 ml": "Samla koffein per 500 ml",
  "E163": "E163",
  "D-glucurono…": "D-glukurono…",
  "Guarana": "Guarana",
  "500": "500",
  "ml · Monster Original": "ml · Monster Original",
  "55 g": "55 g",
  "2,000 mg": "2 000 mg",
  "Calculated from the label · per 500 ml": "Rekna ut frå etiketten · per 500 ml",
  "E211": "E211",
  "E150d": "E150d",
  "ml · Battery Original": "ml · Battery Original",
  "75 g": "75 g",
  "E202": "E202",
  "Vitamin C": "Vitamin C",
  "ml · Burn Original": "ml · Burn Original",
  "Ace-K": "Ace-K",
  "ml · Red Bull Sugarfree": "ml · Red Bull Sugarfree",
  "23 g": "23 g",
  "Present": "Til stades",
  "Present · amount not disclosed": "Til stades · mengda er ikkje oppgitt",
  "ml · Pepsi": "ml · Pepsi",
  "35 g": "35 g",
  "Combined sugars per 330 ml · see source note": "Samla sukker per 330 ml · sjå kjeldemerknaden",
  "330": "330",
  "ml · Coca-Cola Original": "ml · Coca-Cola Original",
  "Sodium": "Natrium",
  "50.5 g": "50,5 g",
  "Acidity": "Surleik",
  "ml · Sprite": "ml · Sprite",
  "Part of 20.5 g": "Del av 20,5 g",
  "Combined sugars per 500 ml · individual split undisclosed": "Samla sukker per 500 ml · fordelinga er ikkje oppgitt",
  "E332": "E332",
  "E414": "E414",
  "E445": "E445",
  "E133": "E133",
  "0.55 mg": "0,55 mg",
  "Per 500 ml · see nutrition source below": "Per 500 ml · sjå næringskjelda nedanfor",
  "ml · Powerade Mountain Blast": "ml · Powerade Mountain Blast",
  "56 g": "56 g",
  "Concentrate": "Konsentrat",
  "E160a": "E160a",
  "E410": "E410",
  "ml · Urge Original": "ml · Urge Original",
  "Concentrates": "Konsentrat",
  "ml · Fanta Orange": "ml · Fanta Orange",
  "15 g": "15 g",
  "Part of 15 g": "Del av 15 g",
  "Tea": "Te",
  "0.12% extract": "0,12 % ekstrakt",
  "Manufacturer recipe share · includes naturally present tea compounds": "Del av produsentoppskrifta · omfattar naturlege testoff",
  "Lemon": "Sitron",
  "Stevia": "Stevia",
  "ml · Lipton Ice Tea Lemon": "ml · Lipton Ice Tea Lemon",
  "29 g": "29 g",
  "Part of 29 g": "Del av 29 g",
  "E340(i)": "E340(i)",
  "E444": "E444",
  "Yellow 6": "Yellow 6",
  "ml · Gatorade Orange": "ml · Gatorade Orange",
  "Potassium": "Kalium",
  "Milk": "Mjølk",
  "5% added": "5 % tilsett",
  "By weight · separate from naturally present milk sugars": "Etter vekt · skilt frå naturleg mjølkesukker",
  "Cocoa": "Kakao",
  "ml · Litago Original": "ml · Litago Original",
  "Calcium": "Kalsium",
  "Phosphorus": "Fosfor",
  "Iodine": "Jod",
  "Biotin": "Biotin",
  "Brewed coffee": "Bryggja kaffi",
  "Coffee": "Kaffi",
  "30% coffee": "30 % kaffi",
  "Manufacturer recipe share · caffeine is already in the coffee": "Del av produsentoppskrifta · koffeinet er allereie i kaffien",
  "Whey": "Myse",
  "ml · TINE IsKaffe Original Cappuccino": "ml · TINE IsKaffe Original Cappuccino",
  "ml · Villa Original": "ml · Villa Original",
  "Apple & grape": "Eple og drue",
  "20% juice": "20 % juice",
  "12% grape + 8% apple · manufacturer recipe": "12 % drue + 8 % eple · produsentoppskrift",
  "36.5 g": "36,5 g",
  "E150b": "E150b",
  "ml · Mozell Original": "ml · Mozell Original",
  "ml · Ringnes Julebrus (Red)": "ml · Ringnes Julebrus (Raud)",
  "ml · Hamar & Lillehammer Julebrus (Brown)": "ml · Hamar & Lillehammer Julebrus (Brun)",
  "6.8% added sugar": "6,8 % tilsett sukker",
  "Recipe percentage · total sugars also include juice sugars": "Oppskriftsprosent · samla sukker omfattar òg juicesukker",
  "Peach juice": "Ferskenjuice",
  "ml · Sunniva isTe Fersken": "ml · Sunniva isTe Fersken",
  "225 ml added water": "225 ml tilsett vatn",
  "Plus 25 ml concentrate · 1 + 9 dilution": "Pluss 25 ml konsentrat · fortynna 1 + 9",
  "ml · FUN Light Bringebær": "ml · FUN Light Bringebær",
  "ml · Farris Bris Sitron & Sitrongress": "ml · Farris Bris Sitron & Sitrongress",
  "66 g": "66 g",
  "Fruit blend": "Fruktblanding",
  "3% fruit juice": "3 % fruktjuice",
  "2.6% orange + 0.2% passion fruit + 0.2% peach": "2,6 % appelsin + 0,2 % pasjonsfrukt + 0,2 % fersken",
  "ml · Fanta Exotic": "ml · Fanta Exotic",
  "109.5 g": "109,5 g",
  "Combined sugars per 1500 ml · see source note": "Samla sukker per 1500 ml · sjå kjeldemerknaden",
  "1500": "1500",
  "ml · 7UP Original": "ml · 7UP Original",
  "10% fruit juice": "10 % fruktjuice",
  "Selected 330 ml retailer recipe": "Vald butikkoppskrift for 330 ml",
  "30.36 g": "30,36 g",
  "39.6 mg": "39,6 mg",
  "Per 330 ml · see nutrition source below": "Per 330 ml · sjå næringskjelda nedanfor",
  "7.92 mg": "7,92 mg",
  "5.94 mg": "5,94 mg",
  "0.693 mg": "0,693 mg",
  "B7": "B7",
  "24.75 µg": "24,75 µg",
  "Sugar syrup": "Sukkersirup",
  "Individual amount and glucose-to-fructose ratio not published": "Eiga mengd og forholdet mellom glukose og fruktose er ikkje publiserte",
  "ml · Capri-Sun Multivitamin": "ml · Capri-Sun Multivitamin",
  "Part of the BCAA blend": "Del av BCAA-blandinga",
  "Individual amount and blend ratio not verified": "Eiga mengd og blandingsforhold er ikkje stadfesta",
  "Green tea": "Grøn te",
  "B9": "B9",
  "ml · NOCCO Caribbean": "ml · NOCCO Caribbean",
  "Folic acid · B9": "Folsyre · B9",
  "BCAA · combined total": "BCAA · samla mengd",
  "Skimmed milk": "Skumma mjølk",
  "Blueberry": "Blåbær",
  "8% of recipe": "8 % av oppskrifta",
  "TINE label · by weight": "TINE-etikett · etter vekt",
  "50 g added sugar": "50 g tilsett sukker",
  "Within 93 g total sugars per 1000 g carton": "Innanfor 93 g samla sukker per kartong på 1000 g",
  "Blackcurrant": "Solbær",
  "1% of recipe": "1 % av oppskrifta",
  "E440": "E440",
  "Starters": "Startkulturar",
  "Viable count undisclosed": "Talet på levande bakteriar er ikkje oppgitt",
  "Named culture · enlarged teaching illustration": "Namngitt kultur · forstørra undervisningsillustrasjon",
  "LA-5": "LA-5",
  "BB-12": "BB-12",
  "LGG": "LGG",
  "7.8 µg": "7,8 µg",
  "Per 1000 g · see nutrition source below": "Per 1000 g · sjå næringskjelda nedanfor",
  "1000": "1000",
  "g · Biola Blåbær": "g · Biola Blåbær",
  "≈ 90 mg": "≈ 90 mg",
  "Typical estimate per 200 ml": "Typisk overslag per 200 ml",
  "200": "200",
  "ml · Black filter coffee": "ml · Svart filterkaffi",
  "≈ 50 mg": "≈ 50 mg",
  "Typical estimate per 220 ml": "Typisk overslag per 220 ml",
  "220": "220",
  "ml · Black tea": "ml · Svart te",
  "Naturally occurring sugars": "Naturlege sukkerartar",
  "Naturally present": "Naturleg til stades",
  "Combined sugars per 150 ml · see source note": "Samla sukker per 150 ml · sjå kjeldemerknaden",
  "Fruit acids": "Fruktsyrer",
  "Fruit": "Frukt",
  // 3.3 – Tal og faste storleikar
  "150": "150",
  "ml · 100% orange juice": "ml · 100 % appelsinjuice",
  "ml · Plain sparkling water": "ml · Reint vatn med kolsyre",
  "Black filter coffee": "Svart filterkaffi",
  "Black tea": "Svart te",
  "100% orange juice": "100 % appelsinjuice",
  "Plain sparkling water": "Reint vatn med kolsyre",
  "Ringnes Julebrus (Red)": "Ringnes Julebrus (Raud)",
  "Hamar & Lillehammer Julebrus (Brown)": "Hamar & Lillehammer Julebrus (Brun)",
  // 3.4 – Kategoriar, datoar og manglande verdiar
  "All drinks": "Alle drikkar",
  "Soft drinks": "Brus",
  "Sports drinks": "Sportsdrikkar",
  "Iced tea": "Iste",
  "Flavoured milk": "Mjølk med smak",
  "Coffee & tea": "Kaffi og te",
  "Squash": "Saft",
  "Juice & water": "Juice og vatn",
  "Fruit drinks": "Fruktdrikkar",
  "Cultured dairy": "Syrna mjølkeprodukt",
  "Sugar-free": "Sukkerfri",
  "See label": "Sjå etiketten",
  "Varies": "Varierer",
  "0 g added": "0 g tilsett",
  "30 October 2026": "30. oktober 2026",
  "3 November 2026": "3. november 2026",
  "4 November 2026": "4. november 2026",
  "5 November 2026": "5. november 2026",
  "Not available": "Ikkje tilgjengeleg",
  // 3.5 – Navigasjon, framside, drikkesider og ingrediensbibliotek
  "Explore compounds typically found in {parent}. These are part of the ingredient’s chemistry, not separately added recipe ingredients. Their amounts and presence after processing have not been measured for this product here.": "Utforsk stoff som vanlegvis finst i {parent}. Dei er ein del av kjemien i ingrediensen, ikkje ingrediensar som er tilsette separat i oppskrifta. Mengdene og om stoffa er til stades etter bearbeiding, er ikkje målte for dette produktet her.",
  "{drink} pages": "Sider om {drink}",
  "Layer-by-layer experience": "Opplev lag for lag",
  "This drink’s ingredients": "Ingrediensane i denne drikka",
  "Choose your drink": "Vel drikka di",
  "Ingredient library": "Ingrediensbibliotek",
  "About the lab": "Om laben",
  "That page isn’t in the lab.": "Den sida finst ikkje i laben.",
  "Choose a drink": "Vel ei drikk",
  "AN EVERYDAY DRINK. A DIFFERENT PERSPECTIVE.": "EI KVARDAGSDRIKK. EIT ANNA PERSPEKTIV.",
  "What’s in": "Kva er i",
  "your glass?": "glaset ditt?",
  "From the first ingredient to the final mixture.": "Frå den første ingrediensen til den ferdige blandinga.",
  "Explore familiar drinks, layer by layer, then look deeper at the evidence.": "Utforsk kjende drikkar, lag for lag, og sjå deretter nærare på dokumentasjonen.",
  "CHOOSE YOUR EXPERIMENT": "VEL EKSPERIMENTET DITT",
  "DRINKS": "DRIKKAR",
  "CATEGORIES": "KATEGORIAR",
  "Drink categories": "Drikkekategoriar",
  "One drink’s ingredients. Or the whole library.": "Ingrediensane i éi drikk. Eller heile biblioteket.",
  "Choose a drink for its own ingredient collection. The separate library brings every guide together, with benefits, downsides and source notes.": "Vel ei drikk for å sjå hennar eiga ingredienssamling. Det separate biblioteket samlar alle rettleiingane, med fordelar, ulemper og kjeldemerknader.",
  "Explore the full library": "Utforsk heile biblioteket",
  "DILUTED {ratio}": "FORTYNNA {ratio}",
  "REPRESENTATIVE BREW": "REPRESENTATIVT BRYGG",
  "GENERIC COMPOSITION": "GENERELL SAMANSETJING",
  "LABEL EXPLORATION": "UTFORSK ETIKETTEN",
  "PREPARED": "FERDIG UTBLANDA",
  "{drink} product picture": "Produktbilete av {drink}",
  "Look closer:": "Sjå nærare:",
  "Sugars / serving": "Sukker / porsjon",
  "Explore this drink": "Utforsk denne drikka",
  "Choose another drink": "Vel ei anna drikk",
  "INSIDE A {size} {unit} SERVING": "I EIN PORSJON PÅ {size} {unit}",
  "Build the layers.": "Bygg opp laga.",
  "Then watch them become a drink.": "Sjå dei så bli til ei drikk.",
  "A prepared {size} ml glass · dilute {ratio}.": "Eit ferdig utblanda glas på {size} ml · bland ut {ratio}.",
  "{concentrate} ml concentrate + {water} ml water. The picture shows the concentrate bottle; the animation and nutrition describe one diluted glass.": "{concentrate} ml konsentrat + {water} ml vatn. Biletet viser konsentratflaska; animasjonen og næringsoversikta skildrar eitt utblanda glas.",
  "Want something less familiar?": "Vil du lære om noko mindre kjent?",
  "Jump straight to a named ingredient, then explore its explanation below.": "Hopp rett til ein namngitt ingrediens, og utforsk forklaringa nedanfor.",
  "Start with {ingredient}": "Start med {ingredient}",
  "CAFFEINE": "KOFFEIN",
  "LAYER STUDY / REAL-TIME 3D": "LAGSTUDIE / 3D I SANNTID",
  "Start building the layers": "Start oppbygginga av laga",
  "{count} ingredient chapters": "{count} ingredienskapittel",
  "choose any step": "vel eit steg",
  "Ingredient chapters": "Ingredienskapittel",
  "Chapter {number}: {name}": "Kapittel {number}: {name}",
  "Previous ingredient": "Førre ingrediens",
  "Next ingredient": "Neste ingrediens",
  "Animation progress": "Framdrift i animasjonen",
  "Replay animation": "Spel animasjonen om att",
  "Replay": "Spel om att",
  "Playback speed": "Avspelingsfart",
  "Animation speed": "Animasjonsfart",
  "{speed} times speed": "Avspelingsfart: {speed}×",
  "Watch the final mix": "Sjå den siste blandinga",
  "This is a visual explanation. Layers do not show real dose, concentration, separation, or manufacturing order.": "Dette er ei visuell forklaring. Laga viser ikkje verkeleg dose, konsentrasjon, lagdeling eller produksjonsrekkjefølgje.",
  "CONTINUE WITH THIS DRINK": "HALD FRAM MED DENNE DRIKKA",
  "What does each ingredient do?": "Kva gjer kvar ingrediens?",
  "Open the complete ingredient collection for {drink}. Every guide includes a fuller explanation of useful roles, potential downsides and the strength of the evidence.": "Opne heile ingredienssamlinga for {drink}. Kvar rettleiing gir ei grundigare forklaring av nyttige oppgåver, moglege ulemper og kor sterk dokumentasjonen er.",
  "Read this drink’s ingredients": "Les om ingrediensane i denne drikka",
  "HOW TO READ THESE NUMBERS": "SLIK LES DU DESSE TALA",
  "Source information": "Kjeldeinformasjon",
  "Additional label or context": "Ekstra etikett eller samanheng",
  "Reviewed": "Gjennomgått",
  "Current product labels take precedence.": "Den gjeldande produktetiketten går føre.",
  "SOMETHING NEW TO LEARN": "NOKO NYTT Å LÆRE",
  "Meet the less familiar": "Bli kjend med mindre kjende stoff",
  "All this drink’s guides": "Alle rettleiingane for denne drikka",
  "Inside {parent}": "Inne i {parent}",
  "Recipe ingredient": "Ingrediens i oppskrifta",
  "Ingredient chemistry · product-specific amount unverified": "Ingredienskjemi · produktspesifikk mengd ikkje stadfesta",
  "What it does": "Kva det gjer",
  "See in the glass": "Sjå i glaset",
  "THE NUMBERS IN YOUR DRINK": "TALA I DRIKKA DI",
  "Nutritional content": "Næringsinnhald",
  "Compare one {container} with 100 {unit}. See how much you drink.": "Samanlikn innhaldet per {container} med 100 {unit}. Sjå kor mykje du drikk.",
  "{drink} · per {container} and per 100 {unit}": "{drink} · per {container} og per 100 {unit}",
  "Nutrient / ingredient": "Næringsstoff / ingrediens",
  "Per {container}": "Per {container}",
  "Per 100 {unit}": "Per 100 {unit}",
  "For comparison": "Til samanlikning",
  "STIMULANT": "STIMULERANDE STOFF",
  "The manufacturer’s label: per 100 g": "Etiketten frå produsenten: per 100 g",
  "These are weight-based values. They cannot be put into the volume columns above without a verified conversion.": "Desse tala byggjer på vekt. Dei kan ikkje setjast inn i volumkolonnane ovanfor utan ei stadfesta omrekning.",
  "{drink} · manufacturer values per 100 grams": "{drink} · produsenttal per 100 gram",
  "Nutrient": "Næringsstoff",
  "Per 100 g": "Per 100 g",
  "As published by TINE": "Slik TINE har publisert dei",
  "Not available means we do not have a verified amount. It does not mean zero.": "Ikkje tilgjengeleg betyr at vi ikkje har ei stadfesta mengd. Det betyr ikkje null.",
  "“≈” marks an estimate. Package labels can round their numbers.": "«≈» markerer eit overslag. Tala på pakningsetikettar kan vere avrunda.",
  "Nutrition source": "Kjelde for næringsinnhald",
  "Additional label": "Ekstra etikett",
  "This 3D experience requires WebGL. You can still read every ingredient guide.": "Denne 3D-opplevinga krev WebGL. Du kan framleis lese alle ingrediensrettleiingane.",
  "Lighting the studio…": "Lysset studioet…",
  "THE FINAL MIXTURE": "DEN FERDIGE BLANDINGA",
  "LAYER {number}": "LAG {number}",
  "VISUAL REPRESENTATION": "VISUELL FRAMSTILLING",
  "Only {drink} ingredients": "Berre ingrediensane i {drink}",
  "Back to {drink}": "Tilbake til {drink}",
  "THIS DRINK’S INGREDIENT COLLECTION": "INGREDIENSSAMLINGA FOR DENNE DRIKKA",
  "THE COMPLETE INGREDIENT LIBRARY": "HEILE INGREDIENSBIBLIOTEKET",
  "Inside this drink.": "I denne drikka.",
  "Big names.": "Store namn.",
  "Clear explanations.": "Klare forklaringar.",
  "Explore {drink}’s recipe ingredients": "Utforsk ingrediensane i {drink}",
  " and clearly marked chemistry within them": " og tydeleg merkt kjemi i dei",
  "Learn their roles, possible downsides and what the evidence can tell us.": "Lær om oppgåvene deira, moglege ulemper og kva dokumentasjonen kan fortelje oss.",
  "The full collection, across all drinks in the lab.": "Heile samlinga, på tvers av alle drikkane i laben.",
  "Discover unfamiliar names, or switch to all guides for the complete picture.": "Oppdag mindre kjende namn, eller byt til alle rettleiingane for å få heile biletet.",
  "You’re exploring {drink}.": "Du utforskar {drink}.",
  "{count} recipe ingredient groups": "{count} ingrediensgrupper i oppskrifta",
  "{count} guides to chemistry inside them · not extra added ingredients": "{count} rettleiingar om kjemien i dei · ikkje ekstra tilsette ingrediensar",
  "Guide discovery": "Finn rettleiingar",
  "Clear search": "Tøm søket",
  "Ingredient types": "Ingredienstypar",
  "Clear filters": "Nullstill filter",
  "These guides explain general evidence. A dose in a supplement study is not necessarily the amount in a drink. The animation enlarges ingredient layers for visibility and does not measure them.": "Desse rettleiingane forklarer generell dokumentasjon. Ein dose i ein studie av kosttilskot er ikkje nødvendigvis mengda i ei drikk. Animasjonen forstørrar ingredienslaga for å gjere dei synlege, og måler dei ikkje.",
  "Looking for another ingredient?": "Leitar du etter ein annan ingrediens?",
  "The full library is separate from this drink’s collection.": "Heile biblioteket er skilt frå samlinga for denne drikka.",
  "Open the complete library": "Opne heile biblioteket",
  "{shown} OF {total} GUIDES": "{shown} AV {total} RETTLEIINGAR",
  "Inside {parent} · ingredient chemistry": "Inne i {parent} · ingredienskjemi",
  "Ingredient chemistry · not a separate recipe item": "Ingredienskjemi · ikkje ein separat ingrediens i oppskrifta",
  "Useful roles, downsides & evidence": "Nyttige oppgåver, ulemper og dokumentasjon",
  "{drink} ingredients": "Ingrediensane i {drink}",
  "Full ingredient library": "Heile ingrediensbiblioteket",
  "FIELD GUIDE": "INGREDIENSRETTLEIING",
  "In {drink}": "I {drink}",
  "Ingredient chemistry": "Ingredienskjemi",
  "A compound or family within a food ingredient. This guide does not confirm a measured amount in any branded drink or mean that it was added separately.": "Eit stoff eller ein stoffamilie i ein matingrediens. Denne rettleiinga stadfestar ikkje ei målt mengd i noka drikk frå eit bestemt merke og betyr ikkje at stoffet er tilsett separat.",
  "WHAT IT DOES": "KVA DET GJER",
  "Body areas or product roles": "Område i kroppen eller oppgåver i produktet",
  "UPSIDES": "FORDELAR",
  "How it can help.": "Korleis det kan hjelpe.",
  "DOWNSIDES": "ULEMPER",
  "What to watch for.": "Kva du bør vere merksam på.",
  "KEEP IN MIND": "HUGS DETTE",
  "What the evidence tells us.": "Kva dokumentasjonen fortel oss.",
  "Educational summaries. No endorsement by source organisations.": "Samandrag for læring. Kjeldeorganisasjonane går ikkje god for innhaldet.",
  "Browse all ingredients in the separate library": "Bla gjennom alle ingrediensane i det separate biblioteket",
  // 3.6 – Om DrinkLab og kjeldeprinsipp
  "ABOUT THE LAB": "OM LABEN",
  "Curiosity first.": "Nysgjerrigheit først.",
  "Context always.": "Alltid samanheng.",
  "DrinkLab is a visual guide to what we drink. It connects a drink’s ingredient list to an interactive glass, then explains what those ingredients do—and what we cannot confidently claim.": "DrinkLab er ei visuell rettleiing til det vi drikk. Sida knyter ingredienslista til ei drikk til eit interaktivt glas og forklarer så kva ingrediensane gjer, og kva vi ikkje kan slå fast med sikkerheit.",
  "See the composition.": "Sjå samansetjinga.",
  "A stream, a crystal, a separate band of colour. Each ingredient group gets a visible place in the glass before the layers swirl together. This turns a difficult label into something you can pause, revisit and understand at your own pace.": "Ein straum, ein krystall, eit eige fargeband. Kvar ingrediensgruppe får ein synleg plass i glaset før laga virvlar saman. Slik blir ein vanskeleg etikett til noko du kan setje på pause, gå tilbake til og forstå i ditt eige tempo.",
  "Read the evidence.": "Les dokumentasjonen.",
  "Benefits and downsides appear together. A vitamin’s normal role is different from a proven benefit of drinking more. A supplement study is different from an undisclosed amount in a can. Our guides make those differences explicit rather than giving ingredients a simple good-or-bad score.": "Fordelar og ulemper blir viste saman. Den vanlege oppgåva til eit vitamin er noko anna enn ein dokumentert fordel ved å drikke meir. Ein studie av kosttilskot er noko anna enn ei uoppgitt mengd i ein boks. Rettleiingane våre gjer desse skilnadene tydelege i staden for å gi ingrediensane ein enkel god-eller-dårleg-karakter.",
  "Keep it in context.": "Sjå samanhengen.",
  "The drink-specific pages show only that drink’s listed or explicitly qualified ingredient groups. The full library is separate. Manufacturer labels inform branded products; brewed and generic drinks use representative descriptions. Missing quantities remain missing.": "Sidene for kvar drikk viser berre ingrediensgruppene som er oppførte for drikka eller tydeleg merkte med atterhald. Heile biblioteket er separat. Produkt frå bestemte merke byggjer på produsentetikettar; bryggja og generelle drikkar bruker representative skildringar. Manglande mengder blir verande uoppgitte.",
  "HOW TO READ THE GLASS": "SLIK LES DU GLASET",
  "A visual explanation,": "Ei visuell forklaring,",
  "with honest boundaries.": "med ærlege grenser.",
  "The glass is an interactive real-time illustration. Layer colours distinguish ingredients; their thickness is enlarged for visibility. They do not represent measured volumes, actual solubility, separation in the finished drink, or manufacturing order. For example, caffeine and vitamins do not normally form coloured bands in a can.": "Glaset er ein interaktiv illustrasjon i sanntid. Fargane på laga skil ingrediensane frå kvarandre, og laga er gjorde tjukkare for å vere synlege. Dei viser ikkje målte volum, faktisk løyselegheit, lagdeling i den ferdige drikka eller produksjonsrekkjefølgje. Til dømes dannar ikkje koffein og vitamin vanlegvis farga band i ein boks.",
  "The final colour is representative. Coffee and tea vary with brewing; labels vary by market and date. A source note accompanies each drink so verified values, typical estimates and unknown quantities can be distinguished.": "Sluttfargen er representativ. Kaffi og te varierer med brygginga, og etikettar varierer med marknad og dato. Kvar drikk har ein kjeldemerknad, slik at du kan skilje stadfesta tal, typiske overslag og ukjende mengder frå kvarandre.",
  "SOURCES & EDITORIAL APPROACH": "KJELDER OG REDAKSJONELL TILNÆRMING",
  "Follow the sources.": "Følg kjeldene.",
  "Guides link to manufacturer information and organisations including EFSA, NIH, BfR and public health services. They are educational summaries, not endorsements, diagnoses or personalised advice. Relevant benefits, risks and uncertainties are discussed without treating a chemical name as a reason for fear.": "Rettleiingane lenkjer til produsentinformasjon og organisasjonar som EFSA, NIH, BfR og offentlege helsetenester. Dei er samandrag for læring, ikkje tilrådingar, diagnosar eller personlege råd. Relevante fordelar, risikoar og uvisse blir omtalte utan at eit kjemisk namn blir behandla som ein grunn til frykt.",
  "Contains public sector information licensed under the": "Inneheld informasjon frå offentleg sektor som er lisensiert under",
  "BfR-based passages are adapted summaries under": "Avsnitt baserte på BfR er tilpassa samandrag under",
  "Sources are credited on each guide. No source organisation endorses DrinkLab.": "Kjeldene er oppgitte i kvar rettleiing. Ingen av kjeldeorganisasjonane går god for DrinkLab.",
  "Main navigation": "Hovudnavigasjon",
  "LOCAL DEVELOPMENT": "LOKAL UTVIKLING",
  "Language": "Språk",
  "Close menu": "Lukk menyen",
  "Open menu": "Opne menyen",
  "More understanding in every glass.": "Meir forståing i kvart glas.",
  "Independent educational project · No brand affiliation.": "Uavhengig læringsprosjekt · Inga tilknyting til merka.",
  "About DrinkLab": "Om DrinkLab",
  // 3.7 – Behaldarar, tilsetjingstypar og fleire avspelingstekstar
  "All ingredients": "Alle ingrediensar",
  "bottle": "flaske",
  "carton": "kartong",
  "can": "boks",
  "glass": "glas",
  "pouch": "pose",
  "cup": "kopp",
  "serving": "porsjon",
  "CARBONATED": "MED KOLSYRE",
  "STILL": "UTAN KOLSYRE",
  "Typical caffeine / serving": "Typisk koffein / porsjon",
  "Caffeine / serving": "Koffein / porsjon",
  "Explore named recipe ingredients and clearly marked chemistry inside the ingredients. Chemistry guides do not add extra ingredients or doses to the drink.": "Utforsk namngitte ingrediensar i oppskrifta og tydeleg merkt kjemi i ingrediensane. Kjemirettleiingane legg ikkje til ekstra ingrediensar eller dosar i drikka.",
  "Explore the named additives in this drink’s source information. Undisclosed flavour mixtures are not assigned guessed chemical ingredients.": "Utforsk dei namngitte tilsetjingsstoffa i kjeldeinformasjonen for denne drikka. Aromablandingar der innhaldet ikkje er oppgitt, får ikkje tillagt kjemiske ingrediensar som berre er gjetta.",
  "Liquid pour": "Helling av væske",
  "Crystals": "Krystallar",
  "Fine powder": "Fint pulver",
  "Liquid drops": "Væskedropar",
  "Extract": "Ekstrakt",
  "Gas dispersion": "Fordeling av gass",
  "STIR & BLEND": "RØR OG BLAND",
  "Pause animation": "Set animasjonen på pause",
  "Play animation": "Spel animasjonen",
  "MIXING THE ILLUSTRATIVE LAYERS": "BLANDAR DEI ILLUSTRERTE LAGA",
  "INGREDIENT COLOURS & THICKNESS ARE ILLUSTRATIVE": "INGREDIENSFARGANE OG LAGTJUKNA ER ILLUSTRASJONAR",
  "Ingredients become one mixture.": "Ingrediensane blir til éi blanding.",
  "Explore a chapter to inspect its completed layer.": "Utforsk eit kapittel for å sjå det ferdige laget.",
  "Discover unfamiliar": "Oppdag det mindre kjende",
  "All guides": "Alle rettleiingar",
  "Search this drink’s ingredients": "Søk i ingrediensane til denne drikka",
  "Search all ingredients": "Søk i alle ingrediensane",
  "Search within this drink…": "Søk i denne drikka…",
  "Search the whole library…": "Søk i heile biblioteket…",
  "No matching ingredients in this drink.": "Ingen ingrediensar i denne drikka passar med søket.",
  "No matching ingredients.": "Ingen ingrediensar passar med søket.",
  "YOUR SELECTED DRINK": "DRIKKA DU HAR VALT",
  "EXPLORE IN CONTEXT": "UTFORSK I SAMANHENG",
  "Back to the glass.": "Tilbake til glaset.",
  "Explore its parent ingredient.": "Utforsk ingrediensen stoffet er ein del av.",
  "Found in the lab.": "Finst i laben.",
  "Background ingredient chemistry · amount unverified": "Bakgrunnskjemi i ingrediensen · mengda er ikkje stadfesta",
  "See the drink’s source note": "Sjå kjeldemerknaden for drikka"
};

;

/*
DEL 4: KJELDER TIL PRODUKTBILETA
PRODUKTBILETE – TIDLEGARE KJELDEOVERSIKT
Filnamna i den opphavlege oversikta viser assets/. Dei same bileta ligg no i bilete/.
Denne oppryddinga gir ingen nye publiseringsrettar til produktbileta.
{
  "reviewed": "2026-11-05",
  "usage": "Local development only; product pictures from manufacturer and retailer pages. No new publication rights asserted.",
  "assets": [
    {
      "file": "assets/battery-original.png",
      "url": "https://www.ringnes.no/media/3kdbn30j/battery_core_hd_r3.png?height=900&mode=max"
    },
    {
      "file": "assets/pepsi.png",
      "url": "https://www.ringnes.no/media/ohqpqtxm/0-50-pet.png?height=900&mode=max"
    },
    {
      "file": "assets/burn-original.png",
      "url": "https://web-assests.monsterenergy.com/mnst/bf6d79bd-cb62-4a6a-b239-536aedb54f14.png"
    },
    {
      "file": "assets/powerade-blue.png",
      "url": "https://www.coca-cola.com/content/dam/onexp/no/no/home-images/brands/powerade/2025_no_powerade_mb.png"
    },
    {
      "file": "assets/urge.jpg",
      "url": "https://www.coca-cola.com/content/dam/onexp/no/no/home-images/brands/urge/no_urge_1100x1100.jpg"
    },
    {
      "file": "assets/fanta-orange.jpg",
      "url": "https://www.coca-cola.com/content/dam/onexp/no/no/home-images/brands/fanta/fanta-appelsin-2024.jpg"
    },
    {
      "file": "assets/gatorade-orange.jpg",
      "url": "https://smartlabel.scanbuy.com/2FeCXaxgci4R1nVUXfSe5m/images/80a4c37c-0c05-4337-a095-e27ebb38365c.jpg"
    },
    {
      "file": "assets/litago-original.png",
      "url": "https://www.tine.no/_/packshot/800x800/262.png"
    },
    {
      "file": "assets/tine-iskaffe.png",
      "url": "https://www.tine.no/_/packshot/800x800/381.png"
    },
    {
      "file": "assets/lipton-lemon.jpg",
      "url": "https://assets.sainsburys-groceries.co.uk/gol/8021719/1/640x640.jpg",
      "sourcePage": "https://sainsburys.co.uk/groceries/product/lipton-ice-tea-lemon-500ml"
    },
    {
      "file": "assets/villa.png",
      "url": "https://www.ringnes.no/media/fc1lyhtu/no_villanew.png?height=900&mode=max"
    },
    {
      "file": "assets/mozell.png",
      "url": "https://www.ringnes.no/media/ohkhfmwl/no_mozell-50cl.png?height=900&mode=max"
    },
    {
      "file": "assets/ringnes-julebrus.png",
      "url": "https://www.ringnes.no/media/k4obnemt/no_ringnes-julebrus.png?height=900&mode=max"
    },
    {
      "file": "assets/hamar-julebrus.png",
      "url": "https://www.ringnes.no/media/bsajqa4z/hamar_05_pet.png?height=900&mode=max"
    },
    {
      "file": "assets/farris-bris.png",
      "url": "https://www.ringnes.no/media/ux5kycez/bris_sitron_sitrongress_pet_50ml_mockup.png?height=900&mode=max"
    },
    {
      "file": "assets/sunniva-iste.png",
      "url": "https://www.tine.no/_/packshot/800x800/6732.png"
    },
    {
      "file": "assets/fun-light-bringebaer.png",
      "url": "https://www.funlight.no/wp-content/uploads/sites/31/2025/06/9-1024x862.png"
    },
    {
      "file": "assets/fanta-exotic.jpg",
      "url": "https://www.coca-cola.com/content/dam/onexp/no/no/home-images/brands/fanta/fanta-exotic-2024.jpg",
      "sourcePage": "https://www.coca-cola.com/no/no/brands/fanta"
    },
    {
      "file": "assets/7up-original.png",
      "url": "https://carlsberg-group-2022.euwest01.umbraco.io/media/ybjeduaz/7up-150cl-pet.png",
      "sourcePage": "https://www.ringnes.no/produkter/7up/7up/"
    },
    {
      "file": "assets/capri-sun-multivitamin.png",
      "url": "https://gomarked.no/wp-content/uploads/CAPRI-SUN-Multi-Vitamin-Drikke-330ml-juice-Saus-olivenolje-kjeks-oliven-netthandel-halal-kjott-blomster-dagligvarer-dadler-frukt-gronnsaker-delikatesse-gomarked-1.png",
      "sourcePage": "https://gomarked.no/produkt/capri-sun-multi-vitamin-drikke-330ml/"
    },
    {
      "file": "assets/nocco-caribbean.png",
      "url": "https://nocco.com/wp-content/uploads/2025/07/EXP_NOCCO_Caribbean_6.0_web_tiny.png",
      "sourcePage": "https://nocco.com/product/bcaa-caribbean/"
    },
    {
      "file": "assets/biola-blueberry.png",
      "url": "https://www.tine.no/_/packshot/800x800/5473.png",
      "sourcePage": "https://www.tine.no/produkter/biola-syrnet-melk-med-blabaer"
    }
  ]
}

*/
