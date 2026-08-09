const produtos = [

    // ==========================
    // CAFETERIA
    // ==========================

    { id: 1, nome: "Café Expresso Dolce Gusto 50ml", categoria: "Cafeteria", preco: 9.00, imagem: "img/cafe-expresso-50ml.webp" },
    { id: 2, nome: "Café Coado", categoria: "Cafeteria", preco: 8.00, imagem: "img/cafe-coado.webp" },
    { id: 3, nome: "Café Expresso Dolce Gusto Lungo", categoria: "Cafeteria", preco: 9.00, imagem: "img/cafe-lungo.webp" },
    { id: 4, nome: "Café Expresso Dolce Gusto Matinal", categoria: "Cafeteria", preco: 9.00, imagem: "img/cafe-matinal.webp" },
    { id: 5, nome: "Café Expresso Dolce Gusto Doppio", categoria: "Cafeteria", preco: 9.00, imagem: "img/cafe-doppio.webp" },

    { id: 6, nome: "Espresso Latte Nesquik", categoria: "Cafeteria", preco: 11.00, imagem: "img/latte-nesquik.webp" },
    { id: 7, nome: "Espresso Latte KitKat", categoria: "Cafeteria", preco: 11.00, imagem: "img/latte-kitkat.webp" },
    { id: 8, nome: "Espresso Au Lait", categoria: "Cafeteria", preco: 11.00, imagem: "img/espresso-au-lait.webp" },
    { id: 9, nome: "Espresso Latte Tea Chai", categoria: "Cafeteria", preco: 11.00, imagem: "img/latte-tea-chai.webp" },
    { id: 10, nome: "Espresso Latte Língua de Gato", categoria: "Cafeteria", preco: 11.00, imagem: "img/latte-lingua-de-gato.webp" },

    { id: 11, nome: "Cappuccino Tradicional", categoria: "Cafeteria", preco: 11.00, imagem: "img/cappuccino-tradicional.webp" },
    { id: 12, nome: "Cappuccino Caramelo Salgado", categoria: "Cafeteria", preco: 11.00, imagem: "img/cappuccino-caramelo.webp" },
    { id: 13, nome: "Cappuccino Doce de Leite", categoria: "Cafeteria", preco: 11.00, imagem: "img/cappuccino-doce-leite.webp" },
    { id: 14, nome: "Cappuccino Brigadeiro", categoria: "Cafeteria", preco: 11.00, imagem: "img/cappuccino-brigadeiro.webp" },
    { id: 15, nome: "Cappuccino Canela", categoria: "Cafeteria", preco: 11.00, imagem: "img/cappuccino-canela.webp" },
    { id: 16, nome: "Cappuccino Borda de Creme de Avelã", categoria: "Cafeteria", preco: 14.00, imagem: "img/cappuccino-avela.webp" },

    { id: 17, nome: "Frappé", categoria: "Cafeteria", preco: 14.00, imagem: "img/frappe.webp" },
    { id: 18, nome: "Affogato", categoria: "Cafeteria", preco: 12.00, imagem: "img/affogato.webp" },


    // ==========================
    // SALGADOS
    // ==========================

    { id: 19, nome: "Tortinha de Costela", categoria: "Salgados", preco: 7.50, imagem: "img/tortinha-costela.webp" },
    { id: 20, nome: "Esfiha de Carne", categoria: "Salgados", preco: 7.50, imagem: "img/esfiha-carne.webp" },
    { id: 21, nome: "Esfiha de Frango", categoria: "Salgados", preco: 7.50, imagem: "img/esfiha-frango.webp" },
    { id: 22, nome: "Ghirella de Pizza", categoria: "Salgados", preco: 7.50, imagem: "img/ghirella-pizza.webp" },
    { id: 23, nome: "Presunto e Queijo", categoria: "Salgados", preco: 7.50, imagem: "img/presunto-queijo.webp" },
    { id: 24, nome: "X-Burguer com Bacon", categoria: "Salgados", preco: 10.00, imagem: "img/x-burguer-bacon.webp" },
    { id: 25, nome: "Croissant Pizza", categoria: "Salgados", preco: 7.50, imagem: "img/croissant-pizza.webp" },
    { id: 26, nome: "Croissant Frango com Requeijão", categoria: "Salgados", preco: 7.50, imagem: "img/croissant-frango.webp" },
    { id: 27, nome: "Croissant Chocolate", categoria: "Salgados", preco: 7.50, imagem: "img/croissant-chocolate.webp" },
    { id: 28, nome: "Croissant Doce de Leite", categoria: "Salgados", preco: 7.50, imagem: "img/croissant-doce-leite.webp" },


    // ==========================
    // LANCHES
    // ==========================

    { id: 29, nome: "Lanche de Carne Louca", categoria: "Lanches", preco: 23.00, imagem: "img/lanche-carne-louca.webp" },
    { id: 30, nome: "Lanche de Ragú", categoria: "Lanches", preco: 25.00, imagem: "img/lanche-ragu.webp" },
    { id: 31, nome: "Lanche de Frango Empanado", categoria: "Lanches", preco: 22.00, imagem: "img/lanche-frango-empanado.webp" },
    { id: 32, nome: "Lanche Natural", categoria: "Lanches", preco: 14.00, imagem: "img/lanche-natural.webp" },
    { id: 33, nome: "Misto Quente", categoria: "Lanches", preco: 15.00, imagem: "img/misto-quente.webp" },


    // ==========================
    // PRATOS FEITOS
    // ==========================

    { id: 34, nome: "Nhoque com Molho Vermelho", categoria: "Pratos Feitos", preco: 19.90, imagem: "img/nhoque-molho-vermelho.webp" },
    { id: 35, nome: "Nhoque com Molho Bechamel", categoria: "Pratos Feitos", preco: 19.90, imagem: "img/nhoque-bechamel.webp" },
    { id: 36, nome: "Salada Grande", categoria: "Pratos Feitos", preco: 10.00, imagem: "img/salada-grande.webp" },
    { id: 37, nome: "Arroz Brio-Biro", categoria: "Pratos Feitos", preco: 21.90, imagem: "img/arroz-biro-biro.webp" },
    { id: 38, nome: "Arroz Carreteiro Light", categoria: "Pratos Feitos", preco: 29.90, imagem: "img/arroz-carreteiro.webp" },
    { id: 39, nome: "Estrogonofe de Frango", categoria: "Pratos Feitos", preco: 27.90, imagem: "img/estrogonofe-frango.webp" },
    { id: 40, nome: "Estrogonofe de Carne", categoria: "Pratos Feitos", preco: 29.90, imagem: "img/estrogonofe-carne.webp" },
    { id: 41, nome: "Arroz com Feijão e Frango Empanado", categoria: "Pratos Feitos", preco: 21.90, imagem: "img/arroz-feijao-frango.webp" },
    { id: 42, nome: "Arroz com Feijão e Ragú/Lagarto", categoria: "Pratos Feitos", preco: 22.90, imagem: "img/arroz-feijao-ragu.webp" },
    { id: 43, nome: "Arroz com Feijão e Ovo", categoria: "Pratos Feitos", preco: 19.90, imagem: "img/arroz-feijao-ovo.webp" },

    { id: 44, nome: "Porção Extra de Arroz", categoria: "Pratos Feitos", preco: 8.00, imagem: "img/porcao-arroz.webp" },
    { id: 45, nome: "Porção Extra de Feijão", categoria: "Pratos Feitos", preco: 8.00, imagem: "img/porcao-feijao.webp" },
    { id: 46, nome: "Porção de Ragú/Lagarto", categoria: "Pratos Feitos", preco: 10.00, imagem: "img/porcao-ragu.webp" },

    { id: 47, nome: "Omelete Simples", categoria: "Pratos Feitos", preco: 10.00, imagem: "img/omelete-simples.webp" },
    { id: 48, nome: "Omelete Super", categoria: "Pratos Feitos", preco: 22.00, imagem: "img/omelete-super.webp" },

    { id: 49, nome: "Adicional de Ovo", categoria: "Pratos Feitos", preco: 1.70, imagem: "img/adicional-ovo.webp" },
    { id: 50, nome: "Adicional de Tomate", categoria: "Pratos Feitos", preco: 0.80, imagem: "img/adicional-tomate.webp" },
    { id: 51, nome: "Adicional de Cebola", categoria: "Pratos Feitos", preco: 0.90, imagem: "img/adicional-cebola.webp" },
    { id: 52, nome: "Adicional de Queijo Mussarela", categoria: "Pratos Feitos", preco: 1.50, imagem: "img/adicional-mussarela.webp" },

    { id: 53, nome: "Caldo de Carne", categoria: "Pratos Feitos", preco: 21.90, imagem: "img/caldo-carne.webp" },
    { id: 54, nome: "Canja", categoria: "Pratos Feitos", preco: 19.90, imagem: "img/canja.webp" }

];
