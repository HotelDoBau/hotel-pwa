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

    "Cafeteria": `
        <svg viewBox="0 0 24 24">
            <path d="M4 8h12v6a5 5 0 0 1-5 5H9a5 5 0 0 1-5-5z"></path>
            <path d="M16 10h2a3 3 0 0 1 0 6h-2"></path>
            <path d="M7 3c0 2 2 2 2 4"></path>
            <path d="M11 3c0 2 2 2 2 4"></path>
        </svg>
    `,

    "Bebidas": `
        <svg viewBox="0 0 24 24">
            <path d="M6 4h12l-1.5 16h-9z"></path>
            <path d="M8 9h8"></path>
            <path d="M14 4l2-2"></path>
        </svg>
    `,

  "Cervejas": `
    <svg viewBox="0 0 24 24">
        <path d="M5 5h10v14H5z"></path>
        <path d="M15 8h2a3 3 0 0 1 0 6h-2"></path>
        <path d="M7 8h6"></path>
        <path d="M8 3h4"></path>
    </svg>
`,

"Vinhos e Destilados": `
    <svg viewBox="0 0 24 24">
        <path d="M7 3h10v5a5 5 0 0 1-10 0z"></path>
        <path d="M12 13v6"></path>
        <path d="M8 21h8"></path>
    </svg>
`,

    "Salgados": `
        <svg viewBox="0 0 24 24">
            <path d="M4 15c2-6 6-9 8-9s6 3 8 9"></path>
            <path d="M4 15c3 4 13 4 16 0"></path>
            <path d="M8 12h.01"></path>
            <path d="M12 10h.01"></path>
            <path d="M16 12h.01"></path>
        </svg>
    `,

    "Lanches": `
        <svg viewBox="0 0 24 24">
            <path d="M4 10c1-4 4-6 8-6s7 2 8 6z"></path>
            <path d="M3 13h18"></path>
            <path d="M5 17h14"></path>
            <path d="M4 20h16"></path>
        </svg>
    `,

    "Pratos Feitos": `
        <svg viewBox="0 0 24 24">
            <circle cx="12" cy="12" r="8"></circle>
            <circle cx="12" cy="12" r="4"></circle>
            <path d="M3 4v7"></path>
            <path d="M1.5 4v4"></path>
            <path d="M4.5 4v4"></path>
            <path d="M21 4v16"></path>
        </svg>
    `,

    "Pratos feitos": `
        <svg viewBox="0 0 24 24">
            <circle cx="12" cy="12" r="8"></circle>
            <circle cx="12" cy="12" r="4"></circle>
            <path d="M3 4v7"></path>
            <path d="M1.5 4v4"></path>
            <path d="M4.5 4v4"></path>
            <path d="M21 4v16"></path>
        </svg>
    `,

    "Doces": `
        <svg viewBox="0 0 24 24">
            <path d="M5 11h14l-2 9H7z"></path>
            <path d="M6 11c1-4 3-6 6-6s5 2 6 6"></path>
            <path d="M12 5V2"></path>
        </svg>
    `,

    "Petiscos": `
        <svg viewBox="0 0 24 24">
            <path d="M6 7h12l-1 14H7z"></path>
            <path d="M8 7l1-4"></path>
            <path d="M12 7V3"></path>
            <path d="M16 7l-1-4"></path>
        </svg>
    `

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
                ${icones[categoria] || ""}
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

          <span class="icone-titulo-categoria">
    ${icones[categoria] || ""}
</span>

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
