//PEGANDO O INPUT CEP DO DOM
const inputCep = document.querySelector("#cep")

//CAPTURANDO O EVENTO AO PERDER O FOCO
inputCep.addEventListener('change', (evt) => {
    //PEGANDO OS NÚMEROS DO INPUT NÃO PERMITIDO OUTRO TIPO DE DADOS QUE NÃO SEJA DÍGITO
    const numCep = evt.target.value.replace(/\D/g, '')

    //VERIFICA SE SÃO 8(OITO) DÍGITOS
    if(numCep.length !== 8) {
        alert('CEP INVÁLIDO')
        return
    }

    //CHAMA A FUNÇÃO buscaDadosCep
    buscaDadosCep(numCep)
}) 

//BUSCAR OS DADOS DOS CEP NO VIACEP
const buscaDadosCep = async (cep) => {
    //TENTA BUSCAR OS DADOS NO VIACEP
try {
    //BUSCA OS DADOS NO VIA CEP
    const response = await fetch(`https://viacep.com.br/ws/${cep}/json/`)
    //CONVERTE OS DADOS NO FORMATO JSON
    const dadosEndereco = await response.json()

    //CHAMA A DUNÇÂO exibeDados
    exibeDados (dadosEndereco)


}

}
