import {
  carrinho,
  aumentarQuantidade,
  diminuirQuantidade,
  removerProduto,
} from "./carrinho.js";

//CAPTURANDO ELEMENTOS DO DOM 

const listaCarrinho = document.querySelector("#lista-carrinho");
const valorTotal = document.querySelector("#valor-total");

const listarCarrinho = () => {

  listaCarrinho.innerHTML = "";

  carrinho.forEach((produto) => {

    // ======================
    // Card do produto
    // ======================

    const divItem = document.createElement("div");
    divItem.classList.add("item-carrinho");

    // ======================
    // Imagem
    // ======================

    const imgProduto = document.createElement("img");
    imgProduto.src = produto.caminho_imagem;
    imgProduto.alt = produto.descricao_produto;

    // ======================
    // Informações
    // ======================

    const divInfo = document.createElement("div");
    divInfo.classList.add("info-produto");

    const h2Titulo = document.createElement("h2");
    h2Titulo.textContent = produto.descricao_produto;

    const h3Valor = document.createElement("h3");
    h3Valor.classList.add("valor_card");
    h3Valor.textContent =
      `R$ ${produto.valor_unitario.toFixed(2).replace(".", ",")}`;

    const pQuantidade = document.createElement("p");
    pQuantidade.classList.add("quantidade");
    pQuantidade.textContent = `Quantidade: ${produto.quantidade}`;

    // ======================
    // Controles
    // ======================

    const divControles = document.createElement("div");
    divControles.classList.add("controles");

    const btnMenos = document.createElement("button");
    btnMenos.classList.add("btn-menos");
    btnMenos.textContent = "-";

    const btnMais = document.createElement("button");
    btnMais.classList.add("btn-mais");
    btnMais.textContent = "+";

    const btnRemover = document.createElement("button");
    btnRemover.classList.add("btn-remover");
    btnRemover.textContent = "Remover";

    // ======================
    // Eventos
    // ======================

    btnMais.addEventListener("click", () => {
      aumentarQuantidade(produto.id_produto);
      listarCarrinho();
    });

    btnMenos.addEventListener("click", () => {
      diminuirQuantidade(produto.id_produto);
      listarCarrinho();
    });

    btnRemover.addEventListener("click", () => {
      removerProduto(produto.id_produto);
      listarCarrinho();
    });

    // ======================
    // Montagem dos controles
    // ======================

    divControles.appendChild(btnMenos);
    divControles.appendChild(btnMais);
    divControles.appendChild(btnRemover);

    // ======================
    // Montagem das informações
    // ======================

    divInfo.appendChild(h2Titulo);
    divInfo.appendChild(h3Valor);
    divInfo.appendChild(pQuantidade);
    divInfo.appendChild(divControles);

    // ======================
    // Montagem do card
    // ======================

    divItem.appendChild(imgProduto);
    divItem.appendChild(divInfo);

    listaCarrinho.appendChild(divItem);

  });

  // ======================
  // Total da compra
  // ======================

  const total = carrinho.reduce((acumulador, produto) => {
    return acumulador + (produto.valor_unitario * produto.quantidade);
  }, 0);

  valorTotal.textContent = `R$ ${total.toFixed(2).replace(".", ",")}`;

};

listarCarrinho();