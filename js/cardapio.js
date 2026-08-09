let carrinho = [];

let categoriaAtual = null;

const lista = document.getElementById("lista-produtos");
const total = document.getElementById("total");
const totalResumo = document.getElementById("total-resumo");
const quantidadeItens = document.getElementById("quantidade-itens");
const pedido = document.getElementById("pedido");
const busca = document.getElementById("buscar");


// ===========================
// ÍCONES DAS CATEGORIAS
// ===========================

const icones = {

    "Cafeteria": "☕",
    "Bebidas": "🥤",
    "Cervejas e Vinhos": "🍺",
    "Salgados": "🥟",
    "Lanches": "🍔",
    "Pratos Feitos": "🍛",
    "Pratos feitos": "🍛",
    "Doces": "🍰",
    "Petiscos": "🍟"

};


// ===========================
// ESCOLHE IMAGEM DO PRODUTO
// ===========================

function obterImagem(produto){

    if(produto.imagem){
        return produto.imagem;
    }

    return "";

}


// ===========================
// TELA INICIAL - CATEGORIAS
// ===========================

function carregarCategorias(){

    categoriaAtual = null;

    lista.innerHTML = "";


    const categorias = [

        ...new Set(

            produtos
                .filter(produto => produto.ativo !== false)
                .map(produto => produto.categoria)

        )

    ];


    const titulo = document.createElement("div");

    titulo.className = "titulo-categorias";

    titulo.innerHTML = `

        <h2>Escolha uma categoria</h2>

        <p>
            Toque em uma opção para ver os produtos.
        </p>

    `;

    lista.appendChild(titulo);


    const grade = document.createElement("div");

    grade.className = "grade-categorias";


    categorias.forEach(categoria => {

        const card = document.createElement("button");

        card.className = "card-categoria";

        card.innerHTML = `

            <span class="icone-categoria">
                ${icones[categoria] || "🍽️"}
            </span>

            <strong>
                ${categoria}
            </strong>

            <small>
                Ver produtos
            </small>

        `;


        card.onclick = () => {

            abrirCategoria(categoria);

        };


        grade.appendChild(card);

    });


    lista.appendChild(grade);

}


// ===========================
// ABRIR UMA CATEGORIA
// ===========================

function abrirCategoria(categoria){

    categoriaAtual = categoria;

    busca.value = "";

    carregarProdutosCategoria(categoria);

}


// ===========================
// PRODUTOS DA CATEGORIA
// ===========================

function carregarProdutosCategoria(categoria){

    lista.innerHTML = "";


    // BOTÃO VOLTAR

    const topoCategoria =
        document.createElement("div");


    topoCategoria.className =
        "cabecalho-categoria";


    topoCategoria.innerHTML = `

        <button
            class="voltar-categorias"
            onclick="carregarCategorias()">

            ← Categorias

        </button>


        <h2>

            ${icones[categoria] || "🍽️"}
            ${categoria}

        </h2>

    `;


    lista.appendChild(topoCategoria);


    // PRODUTOS

    const container =
        document.createElement("div");


    container.className =
        "grupo-categoria";


    const itens = produtos.filter(produto =>

        produto.categoria === categoria &&

        produto.ativo !== false

    );


    itens.forEach(produto => {

        criarCardProduto(produto, container);

    });


    lista.appendChild(container);

}


// ===========================
// CRIA CARD DO PRODUTO
// ===========================

function criarCardProduto(produto, container){

    const itemCarrinho =
        carrinho.find(
            item => item.id === produto.id
        );


    const quantidade =
        itemCarrinho
        ? itemCarrinho.quantidade
        : 0;


    const imagem =
        obterImagem(produto);


    const card =
        document.createElement("div");


    card.className =
        "produto";


    card.innerHTML = `

        ${
            imagem
            ?
            `<img
                src="${imagem}"
                class="foto-produto"
                alt="${produto.nome}"
            >`
            :
            ""
        }


        <h3>
            ${produto.nome}
        </h3>


        <p class="preco-produto">

            R$ ${Number(produto.preco).toFixed(2)}

        </p>


        ${
            produto.observacao
            ?
            `
            <p class="observacao-produto">

                ⚠️ ${produto.observacao}

            </p>
            `
            :
            ""
        }


        <div class="controle">

            <button
                onclick="alterarQuantidade(${produto.id}, -1)">

                −

            </button>


            <span>
                ${quantidade}
            </span>


            <button
                onclick="alterarQuantidade(${produto.id}, 1)">

                +

            </button>

        </div>

    `;


    container.appendChild(card);

}


// ===========================
// PESQUISAR PRODUTOS
// ===========================

function pesquisarProdutos(filtro){

    lista.innerHTML = "";


    const termo =
        filtro.trim().toLowerCase();


    if(termo === ""){

        if(categoriaAtual){

            carregarProdutosCategoria(
                categoriaAtual
            );

        }else{

            carregarCategorias();

        }

        return;

    }


    const titulo =
        document.createElement("div");


    titulo.className =
        "cabecalho-categoria";


    titulo.innerHTML = `

        <button
            class="voltar-categorias"
            onclick="limparBusca()">

            ← Categorias

        </button>

        <h2>
            🔎 Resultados
        </h2>

    `;


    lista.appendChild(titulo);


    const container =
        document.createElement("div");


    container.className =
        "grupo-categoria";


    const encontrados =
        produtos.filter(produto =>

            produto.ativo !== false &&

            produto.nome
                .toLowerCase()
                .includes(termo)

        );


    if(encontrados.length === 0){

        container.innerHTML = `

            <p class="nenhum-produto">

                Nenhum produto encontrado.

            </p>

        `;

    }else{

        encontrados.forEach(produto => {

            criarCardProduto(
                produto,
                container
            );

        });

    }


    lista.appendChild(container);

}


// ===========================
// LIMPAR BUSCA
// ===========================

function limparBusca(){

    busca.value = "";

    categoriaAtual = null;

    carregarCategorias();

}


// ===========================
// ALTERAR QUANTIDADE
// ===========================

function alterarQuantidade(id, valor){

    const produto =
        produtos.find(
            produto => produto.id === id
        );


    let item =
        carrinho.find(
            item => item.id === id
        );


    if(!item){

        if(valor < 0){
            return;
        }


        item = {

            ...produto,

            quantidade: 0

        };


        carrinho.push(item);

    }


    item.quantidade += valor;


    if(item.quantidade <= 0){

        carrinho =
            carrinho.filter(
                item => item.id !== id
            );

    }


    atualizarCarrinho();


    // ATUALIZA A TELA ATUAL

    if(busca.value.trim() !== ""){

        pesquisarProdutos(
            busca.value
        );

    }else if(categoriaAtual){

        carregarProdutosCategoria(
            categoriaAtual
        );

    }else{

        carregarCategorias();

    }

}


// ===========================
// ATUALIZAR CARRINHO
// ===========================

function atualizarCarrinho(){

    let valorTotal = 0;

    let qtdTotal = 0;


    pedido.innerHTML = "";


    if(carrinho.length === 0){

        pedido.innerHTML =
            "Nenhum item selecionado.";

    }else{


        carrinho.forEach(item => {


            valorTotal +=
                item.preco *
                item.quantidade;


            qtdTotal +=
                item.quantidade;


            pedido.innerHTML += `

                <p>

                    <strong>
                        ${item.quantidade}x
                    </strong>

                    ${item.nome}

                </p>

            `;

        });

    }


    total.innerHTML =
        valorTotal.toFixed(2);


    totalResumo.innerHTML =
        valorTotal.toFixed(2);


    quantidadeItens.innerHTML =
        qtdTotal;

}


// ===========================
// BUSCA
// ===========================

busca.addEventListener(
    "input",
    () => {

        pesquisarProdutos(
            busca.value
        );

    }
);


// ===========================
// ABRIR / FECHAR CARRINHO
// ===========================

function abrirCarrinho(){

    const painel =
        document.getElementById(
            "painel-carrinho"
        );


    painel.classList.toggle(
        "painel-fechado"
    );

}


// ===========================
// INICIAR
// ===========================

carregarCategorias();

atualizarCarrinho();


// ===========================
// ESCONDER CARRINHO AO ROLAR
// ===========================

let ultimaRolagem =
    window.scrollY;


window.addEventListener(
    "scroll",
    () => {

        const barra =
            document.querySelector(
                ".carrinho"
            );


        if(!barra){
            return;
        }


        const atual =
            window.scrollY;


        // Sempre mostra no topo

        if(atual < 50){

            barra.classList.remove(
                "carrinho-escondido"
            );

            ultimaRolagem = atual;

            return;

        }


        // Descendo

        if(
            atual >
            ultimaRolagem + 10
        ){

            barra.classList.add(
                "carrinho-escondido"
            );

        }


        // Subindo

        if(
            atual <
            ultimaRolagem - 10
        ){

            barra.classList.remove(
                "carrinho-escondido"
            );

        }


        ultimaRolagem = atual;

    }
);


// ===========================
// DEIXA FUNÇÕES DISPONÍVEIS
// ===========================

window.alterarQuantidade =
    alterarQuantidade;

window.carregarCategorias =
    carregarCategorias;

window.abrirCategoria =
    abrirCategoria;

window.limparBusca =
    limparBusca;
