// VERIFICANDO SE JA EXISTE UM CARRINHO SALVO
let carrinho = JSON.parse(localStorage.getItem("carrinho")) || [];

const adicionarAoCarrinho = (produto) => {
  const indice = carrinho.findIndex(
    (item) => item.id_produto === produto.id_produto,
  );

  if (indice === -1) {
    carrinho.push({
      ...produto,
      quantidade: 1,
    });
  } else {
    carrinho[indice].quantidade++;
  }

  salvarCarrinho();
};

const salvarCarrinho = () => {
  localStorage.setItem("carrinho", JSON.stringify(carrinho));
};

const aumentarQuantidade = (idProduto) => {
  const produto = carrinho.find((item) => item.id_produto === idProduto);

  if (produto) {
    produto.quantidade++;

    salvarCarrinho();
  }
};

const diminuirQuantidade = (idProduto) => {
  const produto = carrinho.find((item) => item.id_produto === idProduto);

  if (!produto) return;

  produto.quantidade--;

  if (produto.quantidade <= 0) {
    const indice = carrinho.findIndex((item) => item.id_produto === idProduto);

    carrinho.splice(indice, 1);
  }

  salvarCarrinho();
};

const removerProduto = (idProduto) => {
  const indice = carrinho.findIndex((item) => item.id_produto === idProduto);

  if (indice !== -1) {
    carrinho.splice(indice, 1);

    salvarCarrinho();
  }
};

const quantidadeCarrinho = () => {
  return carrinho.reduce((total, produto) => {
    return total + produto.quantidade;
  }, 0);
};

export {
  adicionarAoCarrinho,
  carrinho,
  aumentarQuantidade,
  diminuirQuantidade,
  removerProduto,
  quantidadeCarrinho
};
