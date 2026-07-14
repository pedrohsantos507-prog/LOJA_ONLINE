import { carrinho } from "./carrinho.js";


console.log("pagina do carrinho carregou");
console.log(carrinho);
const listaCarrinho = document.querySelector("#lista-carrinho");
const listarCarrinho = () => {
  listaCarrinho.innerHTML = "";

  carrinho.forEach((produto) => {
    const divItem = document.createElement("div");
    divItem.classList.add("item-carrinho");

    const imgProduto = document.createElement("img");

    imgProduto.src = produto.caminho_imagem;
    imgProduto.alt = produto.descricao_produto;
    divItem.appendChild(imgProduto);

    const h2Titulo = document.createElement("h2");
    h2Titulo.innerHTML = produto.descricao_produto;
    divItem.appendChild(h2Titulo);

    const h3Valor = document.createElement("h3");
    h3Valor.classList.add("valor_card");
    h3Valor.innerHTML = `R$ ${produto.valor_unitario.toFixed(2).replace(".", ",")}`;
    divItem.appendChild(h3Valor);

    const pQuantidade = document.createElement("p");
    pQuantidade.innerHTML = `Quantidade: ${produto.quantidade}`;

    divItem.appendChild(pQuantidade)

    listaCarrinho.appendChild(divItem);
  });
};

listarCarrinho();
