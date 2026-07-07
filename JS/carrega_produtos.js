import { produtos } from "./produtos.js";

//PEGANDO ELEMENTOS DO DOM 
const section_card = document.querySelector('#cards')

//FUNÇÃO PARA CARREGAR OS PRODUTOS 

const listarProdutos = () =>{
    section_card.innerHTML = ''
    
    produtos.forEach((elem, i)=>{
        const divCard = document.createElement ('div')
        divCard.setAttribute('class', 'card')

        const imgProduto = document.createElement('img')
        imgProduto.setAttribute('src', elem.caminho_imagem)
        imgProduto.setAttribute('src',elem.descricao_produto)
        imgProduto.setAttribute('class','img_card')

        const h2Titulo = document.createElement('h3')
        h3Valor.setAttribute('class', 'valor_card')
        h3Valor.innerHTML`R$ ${parseFloat(elem.valor_unitario).toFixed(2).replace('.',',')}`
        const btncard = document.createElement('button')
        btncard.setAttribute('class' , 'btn_card')
        btncard.innerHTML = "Adicionar"

        divCard.appendChild(imgProduto)
        divCard.appendChild(h2Titulo)
        divCard.appendChild(h3Valor)
        divCard.appendChild(btncard)

        section_card.appendChild(divCard)
    })
}

listarProdutos()