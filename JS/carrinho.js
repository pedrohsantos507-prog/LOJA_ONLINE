// ==========================================
// CARRINHO DE COMPRAS
// ==========================================

// Recupera o carrinho salvo no localStorage.
// Caso não exista, cria um vetor vazio.
let carrinho = JSON.parse(localStorage.getItem("carrinho")) || [];

// ==========================================
// ADICIONAR PRODUTO AO CARRINHO
// ==========================================

// Adiciona um produto ao carrinho.
// Se o produto já existir, apenas aumenta sua quantidade.
const adicionarAoCarrinho = (produto) => {

  // Procura o índice do produto no carrinho.
  const indice = carrinho.findIndex(
    (item) => item.id_produto === produto.id_produto,
  );

  // Se o produto não existir, adiciona ao carrinho.
  if (indice === -1) {

    carrinho.push({
      ...produto,
      quantidade: 1,
    });

  } else {

    // Caso o produto já exista, aumenta sua quantidade.
    carrinho[indice].quantidade++;

  }

  // Salva as alterações no localStorage.
  salvarCarrinho();
};

// ==========================================
// SALVAR CARRINHO
// ==========================================

// Salva o carrinho atualizado no localStorage.
const salvarCarrinho = () => {
  localStorage.setItem("carrinho", JSON.stringify(carrinho));
};

// ==========================================
// AUMENTAR QUANTIDADE
// ==========================================

// Aumenta em uma unidade a quantidade de um produto.
const aumentarQuantidade = (idProduto) => {

  // Procura o produto pelo id.
  const produto = carrinho.find((item) => item.id_produto === idProduto);

  if (produto) {

    produto.quantidade++;

    salvarCarrinho();
  }
};

// ==========================================
// DIMINUIR QUANTIDADE
// ==========================================

// Diminui em uma unidade a quantidade de um produto.
// Se a quantidade chegar a zero, remove o produto do carrinho.
const diminuirQuantidade = (idProduto) => {

  // Procura o produto pelo id.
  const produto = carrinho.find((item) => item.id_produto === idProduto);

  // Caso o produto não exista, encerra a função.
  if (!produto) return;

  produto.quantidade--;

  // Remove o produto quando a quantidade for igual ou menor que zero.
  if (produto.quantidade <= 0) {

    const indice = carrinho.findIndex(
      (item) => item.id_produto === idProduto
    );

    carrinho.splice(indice, 1);
  }

  salvarCarrinho();
};

// ==========================================
// REMOVER PRODUTO
// ==========================================

// Remove um produto do carrinho independentemente da quantidade.
const removerProduto = (idProduto) => {

  // Procura o índice do produto.
  const indice = carrinho.findIndex(
    (item) => item.id_produto === idProduto
  );

  if (indice !== -1) {

    carrinho.splice(indice, 1);

    salvarCarrinho();
  }
};

// ==========================================
// QUANTIDADE TOTAL DE ITENS
// ==========================================

// Soma a quantidade de todos os produtos do carrinho.
const quantidadeCarrinho = () => {

  return carrinho.reduce((total, produto) => {

    return total + produto.quantidade;

  }, 0);
};

// ==========================================
// EXPORTAÇÃO DAS FUNÇÕES
// ==========================================

// Disponibiliza as funções para serem utilizadas
// em outros arquivos JavaScript.
export {
  adicionarAoCarrinho,
  carrinho,
  aumentarQuantidade,
  diminuirQuantidade,
  removerProduto,
  quantidadeCarrinho
};