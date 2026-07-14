import { produtos } from "./produtos.js";
import { secoes } from "./secoes.js";
import { adicionarAoCarrinho, quantidadeCarrinho } from "./carrinho.js";

console.log("carrega_produtos carregado");
// PEGANDO ELEMENTOS DO DOM
const section_card = document.querySelector("#cards");
const ulCategorias = document.querySelector("#categorias");

const atualizarContador = () => {
  const contador = document.querySelector("#contador-carrinho");

  if (!contador) return;

  contador.textContent = quantidadeCarrinho();
};

// ==========================
// LISTAR PRODUTOS
// ==========================

const listarProdutos = (listaProdutos) => {
  section_card.innerHTML = "";

  listaProdutos.forEach((elem) => {
    const divCard = document.createElement("div");
    divCard.classList.add("card");

    // Imagem
    const imgProduto = document.createElement("img");
    imgProduto.src = elem.caminho_imagem;
    imgProduto.alt = elem.descricao_produto;
    imgProduto.classList.add("img_card");

    // Título
    const h2Titulo = document.createElement("h2");
    h2Titulo.innerHTML = elem.descricao_produto;

    // Valor
    const h3Valor = document.createElement("h3");
    h3Valor.classList.add("valor_card");
    h3Valor.innerHTML = `R$ ${elem.valor_unitario.toFixed(2).replace(".", ",")}`;

    // Botão
    const btnCard = document.createElement("button");
    btnCard.classList.add("btn_card");
    btnCard.innerHTML = "Adicionar";

    btnCard.addEventListener("click", () => {
      adicionarAoCarrinho(elem);

      atualizarContador();
    });

    divCard.appendChild(imgProduto);
    divCard.appendChild(h2Titulo);
    divCard.appendChild(h3Valor);
    divCard.appendChild(btnCard);

    section_card.appendChild(divCard);
  });
};

// ==========================
// FILTRAR PRODUTOS
// ==========================

const produtosFiltrados = (idSecao) => {
  return produtos.filter((produto) => produto.id_secao === idSecao);
};

// ==========================
// MONTAR MENU DE CATEGORIAS
// ==========================

const montarSecoes = () => {
  ulCategorias.innerHTML = "";

  // Botão Todos

  const liTodos = document.createElement("li");

  const aTodos = document.createElement("a");

  aTodos.href = "#";
  aTodos.innerHTML = "Todos";
  aTodos.classList.add("link_menu");

  aTodos.addEventListener("click", (evento) => {
    evento.preventDefault();

    listarProdutos(produtos);
  });

  liTodos.appendChild(aTodos);

  ulCategorias.appendChild(liTodos);

  // Demais categorias

  secoes.forEach((secao) => {
    const li = document.createElement("li");

    const a = document.createElement("a");

    a.href = "#";
    a.innerHTML = secao.nome_secao;
    a.classList.add("link_menu");

    a.addEventListener("click", (evento) => {
      evento.preventDefault();

      const lista = produtosFiltrados(secao.id_secao);

      listarProdutos(lista);
    });

    li.appendChild(a);

    ulCategorias.appendChild(li);
  });
};

// ==========================
// INICIALIZAÇÃO
// ==========================

listarProdutos(produtos);

montarSecoes();

atualizarContador();
