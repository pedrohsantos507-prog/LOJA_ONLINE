
//VERIFICANDO SE JA EXISTE UM CARRINHO SALVO
let carrinho = JSON.parse(localStorage.getItem("carrinho")) || [];
console.log(carrinho);
//CRIANDO A PRIMEIRA FUNÇÃO
const adicionarAoCarrinho = (produto) =>
{
    console.log("produto recebido:", produto)
    const indice = carrinho.findIndex((item) => {
        return item.id_produto === produto.id_produto;
    });

    if (indice === -1) {
        carrinho.push({
            ...produto, quantidade: 1
        });
  }else{
    carrinho[indice].quantidade++;
  }
  localStorage.setItem("carrinho", JSON.stringify(carrinho));

  console.log("carrinho", carrinho)
  
};

export { adicionarAoCarrinho, carrinho }