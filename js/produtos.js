const produtos = [

    // ==========================
    // CAFETERIA
    // ==========================

    {
        id: 1,
        nome: "Café Expresso Dolce Gusto 50ml",
        categoria: "Cafeteria",
        preco: 9.00,
        imagem: "img/cafe-expresso-50ml.webp"
    },

    {
        id: 2,
        nome: "Café Coado",
        categoria: "Cafeteria",
        preco: 8.00,
        imagem: "img/cafe-coado.webp"
    },

    {
        id: 3,
        nome: "Café Expresso Dolce Gusto Lungo",
        categoria: "Cafeteria",
        preco: 9.00,
        imagem: "img/cafe-lungo.webp"
    },

    {
        id: 4,
        nome: "Café Expresso Dolce Gusto Matinal",
        categoria: "Cafeteria",
        preco: 9.00,
        imagem: "img/cafe-matinal.webp"
    },

    {
        id: 5,
        nome: "Café Expresso Dolce Gusto Doppio",
        categoria: "Cafeteria",
        preco: 9.00,
        imagem: "img/cafe-doppio.webp"
    },

    {
        id: 6,
        nome: "Espresso Latte Nesquik",
        categoria: "Cafeteria",
        preco: 11.00,
        imagem: "img/latte-nesquik.webp"
    },

    {
        id: 7,
        nome: "Espresso Latte KitKat",
        categoria: "Cafeteria",
        preco: 11.00,
        imagem: "img/latte-kitkat.webp"
    },

    {
        id: 8,
        nome: "Espresso Au Lait",
        categoria: "Cafeteria",
        preco: 11.00,
        imagem: "img/espresso-au-lait.webp"
    },

    {
        id: 9,
        nome: "Espresso Latte Tea Chai",
        categoria: "Cafeteria",
        preco: 11.00,
        imagem: "img/latte-tea-chai.webp"
    },

    {
        id: 10,
        nome: "Espresso Latte Língua de Gato",
        categoria: "Cafeteria",
        preco: 11.00,
        imagem: "img/latte-lingua-de-gato.webp"
    },

    {
        id: 11,
        nome: "Cappuccino Tradicional",
        categoria: "Cafeteria",
        preco: 11.00,
        imagem: "img/cappuccino-tradicional.webp"
    },

    {
        id: 12,
        nome: "Cappuccino Caramelo Salgado",
        categoria: "Cafeteria",
        preco: 11.00,
        imagem: "img/cappuccino-caramelo.webp"
    },

    {
        id: 15,
        nome: "Cappuccino Canela",
        categoria: "Cafeteria",
        preco: 11.00,
        imagem: "img/cappuccino-canela.webp"
    },

    {
        id: 16,
        nome: "Cappuccino Borda de Creme de Avelã",
        categoria: "Cafeteria",
        preco: 14.00,
        imagem: "img/cappuccino-avela.webp"
    },

    {
        id: 17,
        nome: "Frappé",
        categoria: "Cafeteria",
        preco: 14.00,
        imagem: "img/frappe.webp"
    },

    {
        id: 18,
        nome: "Affogato",
        categoria: "Cafeteria",
        preco: 12.00,
        imagem: "img/affogato.webp"
    },


    // ==========================
    // SALGADOS
    // ==========================

    {
        id: 19,
        nome: "Salgados Tradicionais",
        categoria: "Salgados",
        preco: 7.50,
        imagem: "img/salgados-tradicionais.webp",
        observacao: "Verificar disponibilidade"
    },

    {
        id: 20,
        nome: "Tortinha de Costela",
        categoria: "Salgados",
        preco: 8.00,
        imagem: "img/tortinha-costela.webp",
        observacao: "Verificar disponibilidade"
    },

    {
        id: 21,
        nome: "Hamburgão Duplo",
        categoria: "Salgados",
        preco: 10.00,
        imagem: "img/hamburgao-duplo.webp",
        observacao: "Verificar disponibilidade"
    },


    // ==========================
    // LANCHES
    // ==========================

    {
        id: 29,
        nome: "Lanche de Carne Louca",
        categoria: "Lanches",
        preco: 23.00,
        imagem: "img/lanche-carne-louca.webp"
    },

    {
        id: 30,
        nome: "Lanche de Ragú",
        categoria: "Lanches",
        preco: 25.00,
        imagem: "img/lanche-ragu.webp"
    },

    {
        id: 31,
        nome: "Lanche de Frango Empanado",
        categoria: "Lanches",
        preco: 22.00,
        imagem: "img/lanche-frango-empanado.webp"
    },

    {
        id: 32,
        nome: "Lanche Natural",
        categoria: "Lanches",
        preco: 14.00,
        imagem: "img/lanche-natural.webp"
    },

    {
        id: 33,
        nome: "Misto Quente",
        categoria: "Lanches",
        preco: 15.00,
        imagem: "img/misto-quente.webp"
    },


    // ==========================
    // PRATOS FEITOS
    // ==========================

    {
        id: 34,
        nome: "Nhoque com Molho Vermelho",
        categoria: "Pratos Feitos",
        preco: 19.90,
        imagem: "img/nhoque-molho-vermelho.webp"
    },

    {
        id: 35,
        nome: "Nhoque com Molho Bechamel",
        categoria: "Pratos Feitos",
        preco: 19.90,
        imagem: "img/nhoque-bechamel.webp"
    },

    {
        id: 36,
        nome: "Salada Grande",
        categoria: "Pratos Feitos",
        preco: 10.00,
        imagem: "img/salada-grande.webp"
    },

    {
        id: 37,
        nome: "Arroz Brio-Biro",
        categoria: "Pratos Feitos",
        preco: 21.90,
        imagem: "img/arroz-biro-biro.webp"
    },

    {
        id: 38,
        nome: "Arroz Carreteiro Light",
        categoria: "Pratos Feitos",
        preco: 29.90,
        imagem: "img/arroz-carreteiro.webp"
    },

    {
        id: 39,
        nome: "Estrogonofe de Frango",
        categoria: "Pratos Feitos",
        preco: 27.90,
        imagem: "img/estrogonofe-frango.webp"
    },

    {
        id: 40,
        nome: "Estrogonofe de Carne",
        categoria: "Pratos Feitos",
        preco: 29.90,
        imagem: "img/estrogonofe-carne.webp"
    },

    {
        id: 41,
        nome: "Arroz com Feijão e Frango Empanado",
        categoria: "Pratos Feitos",
        preco: 21.90,
        imagem: "img/arroz-feijao-frango.webp"
    },

    {
        id: 42,
        nome: "Arroz com Feijão e Ragú/Lagarto",
        categoria: "Pratos Feitos",
        preco: 22.90,
        imagem: "img/arroz-feijao-ragu.webp"
    },

    {
        id: 43,
        nome: "Arroz com Feijão e Ovo",
        categoria: "Pratos Feitos",
        preco: 19.90,
        imagem: "img/arroz-feijao-ovo.webp"
    },

    {
        id: 44,
        nome: "Porção Extra de Arroz",
        categoria: "Porções e Adicionais",
        preco: 8.00,
        imagem: "img/porcao-arroz.webp"
    },

    {
        id: 45,
        nome: "Porção Extra de Feijão",
        categoria: "Porções e Adicionais",
        preco: 8.00,
        imagem: "img/porcao-feijao.webp"
    },

    {
        id: 46,
        nome: "Porção de Ragú/Lagarto",
        categoria: "Porções e Adicionais",
        preco: 10.00,
        imagem: "img/porcao-ragu.webp"
    },

    {
        id: 47,
        nome: "Omelete Simples",
        categoria: "Omeletes",
        preco: 10.00,
        imagem: "img/omelete-simples.webp"
    },

    {
        id: 48,
        nome: "Omelete Super",
        categoria: "Omeletes",
        preco: 22.00,
        imagem: "img/omelete-super.webp"
    },

    {
        id: 49,
        nome: "Adicional de Ovo",
        categoria: "Porções e Adicionais",
        preco: 1.70,
        imagem: "img/adicional-ovo.webp"
    },

    {
        id: 50,
        nome: "Adicional de Tomate",
        categoria: "Porções e Adicionais",
        preco: 0.80,
        imagem: "img/adicional-tomate.webp"
    },

    {
        id: 51,
        nome: "Adicional de Cebola",
        categoria: "Porções e Adicionais",
        preco: 0.90,
        imagem: "img/adicional-cebola.webp"
    },

    {
        id: 52,
        nome: "Adicional de Queijo Mussarela",
        categoria: "Porções e Adicionais",
        preco: 1.50,
        imagem: "img/adicional-mussarela.webp"
    },

    {
        id: 53,
        nome: "Caldo de Carne",
        categoria: "Sopas e Caldos",
        preco: 21.90,
        imagem: "img/caldo-carne.webp"
    },

    {
        id: 54,
        nome: "Canja",
        categoria: "Sopas e Caldos",
        preco: 19.90,
        imagem: "img/canja.webp"
    },

// ==========================
// BEBIDAS
// ==========================

{
    id: 55,
    nome: "Água Minaura sem gás",
    categoria: "Bebidas",
    preco: 3.00,
    imagem: "img/agua-minaura-sem-gas.webp"
},

{
    id: 56,
    nome: "Água Minaura com gás",
    categoria: "Bebidas",
    preco: 4.50,
    imagem: "img/agua-minaura-com-gas.webp"
},

{
    id: 57,
    nome: "Água Crystal sem gás",
    categoria: "Bebidas",
    preco: 4.00,
    imagem: "img/agua-crystal-sem-gas.webp"
},

{
    id: 58,
    nome: "Água Minalice sem gás",
    categoria: "Bebidas",
    preco: 3.00,
    imagem: "img/agua-minalice-sem-gas.webp"
},

{
    id: 59,
    nome: "Água Minalice com gás",
    categoria: "Bebidas",
    preco: 4.50,
    imagem: "img/agua-minalice-com-gas.webp"
},

{
    id: 60,
    nome: "Suco Nativo Frutas Cítricas",
    categoria: "Sucos",
    preco: 4.00,
    imagem: "img/suco-nativo-frutas-citricas.webp"
},

{
    id: 61,
    nome: "Suco Nativo Uva",
    categoria: "Sucos",
    preco: 4.00,
    imagem: "img/suco-nativo-uva.webp"
},

{
    id: 62,
    nome: "Suco Nativo Laranja com Acerola",
    categoria: "Sucos",
    preco: 4.00,
    imagem: "img/suco-nativo-laranja-acerola.webp"
},

{
    id: 63,
    nome: "Guaraná Antarctica lata 350ml",
    categoria: "Bebidas",
    preco: 7.00,
    imagem: "img/guarana-antartica-lata.webp"
},

{
    id: 64,
    nome: "Guaraná Antarctica Zero lata 350ml",
    categoria: "Bebidas",
    preco: 7.00,
    imagem: "img/guarana-antartica-zero-lata.webp"
},

{
    id: 65,
    nome: "Guaraná Antarctica caçulinha 220ml",
    categoria: "Bebidas",
    preco: 5.00,
    imagem: "img/guarana-antartica-caculinha.webp"
},

{
    id: 66,
    nome: "Guaraná Antarctica Zero caçulinha 220ml",
    categoria: "Bebidas",
    preco: 5.00,
    imagem: "img/guarana-antartica-zero-caculinha.webp"
},

{
    id: 67,
    nome: "Coca-Cola lata 350ml",
    categoria: "Bebidas",
    preco: 7.00,
    imagem: "img/coca-cola-lata.webp"
},

{
    id: 68,
    nome: "Coca-Cola Zero lata 350ml",
    categoria: "Bebidas",
    preco: 7.00,
    imagem: "img/coca-cola-zero-lata.webp"
},

{
    id: 69,
    nome: "Coca-Cola caçulinha 220ml",
    categoria: "Bebidas",
    preco: 5.00,
    imagem: "img/coca-cola-caculinha.webp"
},

{
    id: 70,
    nome: "Coca-Cola Zero caçulinha 220ml",
    categoria: "Bebidas",
    preco: 5.00,
    imagem: "img/coca-cola-zero-caculinha.webp"
},

{
    id: 71,
    nome: "Energético Monster Mango Loco 473ml",
    categoria: "Energéticos",
    preco: 13.00,
    imagem: "img/monster-mango-loco.webp"
},

{
    id: 72,
    nome: "Energético Monster Tradicional 473ml",
    categoria: "Energéticos",
    preco: 13.00,
    imagem: "img/monster-tradicional.webp"
},

{
    id: 73,
    nome: "Fanta Laranja lata 350ml",
    categoria: "Bebidas",
    preco: 7.00,
    imagem: "img/fanta-laranja.webp"
},

{
    id: 74,
    nome: "Fanta Uva lata 350ml",
    categoria: "Bebidas",
    preco: 7.00,
    imagem: "img/fanta-uva.webp"
},

{
    id: 75,
    nome: "Schweppes Citrus lata 350ml",
    categoria: "Bebidas",
    preco: 7.00,
    imagem: "img/schweppes-citrus.webp"
},

{
    id: 76,
    nome: "Schweppes Tônica lata 350ml",
    categoria: "Bebidas",
    preco: 7.00,
    imagem: "img/schweppes-tonica.webp"
},

{
    id: 77,
    nome: "Schweppes Tônica Zero lata 350ml",
    categoria: "Bebidas",
    preco: 7.00,
    imagem: "img/schweppes-tonica-zero.webp"
},

{
    id: 78,
    nome: "Soda Limonada lata 350ml",
    categoria: "Bebidas",
    preco: 7.00,
    imagem: "img/soda-limonada.webp"
},

{
    id: 79,
    nome: "Sprite lata 350ml",
    categoria: "Bebidas",
    preco: 7.00,
    imagem: "img/sprite-lata.webp"
},


// ==========================
// CERVEJAS E VINHOS
// ==========================

{
    id: 80,
    nome: "Heineken 600ml",
    categoria: "Cervejas",
    preco: 18.00,
    imagem: "img/heineken-600ml.webp"
},

{
    id: 81,
    nome: "Amstel 600ml",
    categoria: "Cervejas",
    preco: 16.00,
    imagem: "img/amstel-600ml.webp"
},

{
    id: 82,
    nome: "Original 600ml",
    categoria: "Cervejas",
    preco: 16.00,
    imagem: "img/original-600ml.webp"
},

{
    id: 83,
    nome: "Vinho Lunae garrafa",
    categoria: "Vinhos e Destilados",
    preco: 55.00,
    imagem: "img/vinho-lunae.webp"
},

{
    id: 84,
    nome: "Heineken lata",
    categoria: "Cervejas",
    preco: 10.00,
    imagem: "img/heineken-lata.webp"
},

{
    id: 85,
    nome: "Amstel lata",
   categoria: "Cervejas",
    preco: 10.00,
    imagem: "img/amstel-lata.webp"
},

{
    id: 86,
    nome: "Cachaça - dose 50ml",
    categoria: "Vinhos e Destilados",
    preco: 17.00
},
    
{
    id: 87,
    nome: "Cachaça Premium - dose 50ml",
    categoria: "Vinhos e Destilados",
    preco: 22.00
},
    
{
    id: 88,
    nome: "Licores - dose 50ml",
    categoria: "Vinhos e Destilados",
    preco: 32.00
},
    
{
    id: 89,
    nome: "Whisky - dose 50ml",
    categoria: "Vinhos e Destilados",
    preco: 35.00
},
    
{
    id: 90,
    nome: "Gin - dose 50ml",
    categoria: "Vinhos e Destilados",
    preco: 23.00
},
    
{
    id: 91,
    nome: "Tequila - dose 50ml",
    categoria: "Vinhos e Destilados",
    preco: 18.00
},
    
{
    id: 92,
    nome: "Vermute - dose 50ml",
    categoria: "Vinhos e Destilados",
    preco: 19.00
},
    
{
    id: 93,
    nome: "Vodca - dose 50ml",
    categoria: "Vinhos e Destilados",
    preco: 23.00
},
    
{
    id: 94,
    nome: "Vinho - dose 50ml",
    categoria: "Vinhos e Destilados",
    preco: 19.00
},
    
{
    id: 95,
    nome: "Laranjinha - Aperol Spritz",
    categoria: "Drinks",
    preco: 33.00,
    observacao: "Vinho branco (1 taça) + Aperol (dose)"
},
    
{
    id: 96,
    nome: "Mayra Amou - Lemmon Spritz",
    categoria: "Drinks",
    preco: 35.00,
    observacao: "Vinho branco (1 taça) + Limoncello (dose)"
},
    
{
    id: 97,
    nome: "Gente Fina - Pennicilim",
    categoria: "Drinks",
    preco: 31.00,
    observacao: "Whisky + Mel + Gengibre"
},
    
{
    id: 98,
    nome: "Coice de Mula - Moscow Mule",
    categoria: "Drinks",
    preco: 34.00,
    observacao: "Vodca + Limão + Ginger Beer + Espuma"
},
    
{
    id: 99,
    nome: "Seu Geraldo - Fitzgerald",
    categoria: "Drinks",
    preco: 32.00,
    observacao: "Gin + Limão + Xarope + Angostura"
},

 {
    id: 100,
    nome: "Salada de Fruta",
    categoria: "Doces",
    preco: 10.00,
    observacao: "Mamão, manga, melão e uva"
},
{
    id: 101,
    nome: "Granola",
    categoria: "Doces",
    preco: 3.45,
    observacao: "Adicionar porção de granola"
},
{
    id: 102,
    nome: "Iogurte",
    categoria: "Doces",
    preco: 1.70,
    observacao: "Adicionar 50ml de iogurte de morango"
},
{
    id: 103,
    nome: "Leite Condensado",
    categoria: "Doces",
    preco: 2.00,
    observacao: "Adicionar 50ml de leite condensado"
},
{
    id: 104,
    nome: "Mel",
    categoria: "Doces",
    preco: 2.20,
    observacao: "Adicionar blister de mel"
},
{
    id: 105,
    nome: "Geléia",
    categoria: "Doces",
    preco: 1.50,
    observacao: "Adicionar um blister de geléia"
},
{
    id: 106,
    nome: "Bolo do Dia",
    categoria: "Doces",
    preco: 5.00,
    observacao: "Fatia pequena de bolo do dia"
},
{
    id: 107,
    nome: "Pudim de Leite",
    categoria: "Doces",
    preco: 7.00,
    observacao: "Pudim de leite com calda de caramelo"
},
{
    id: 108,
    nome: "Banoffee",
    categoria: "Doces",
    preco: 9.00,
    observacao: "Biscoito, doce de leite, banana, chantilly e canela"
},
{
    id: 109,
    nome: "Bolo Gelado de Coco",
    categoria: "Doces",
    preco: 10.00
},
{
    id: 110,
    nome: "Bolo Gelado de Coco com Sorvete",
    categoria: "Doces",
    preco: 14.00,
    observacao: "Bolo gelado de coco com uma bola de sorvete de creme"
},
{
    id: 111,
    nome: "Bolo Gelado de Coco com Sorvete e Leite Condensado",
    categoria: "Doces",
    preco: 17.00,
    observacao: "Bolo gelado de coco com uma bola de sorvete de creme e 50ml de leite condensado"
}   
    
];
