//PEGANDO O INPUT CEP DO DOM
const inputCep = document.querySelector("#cep")

//CAPTURANDO O EVENTO AO PERDER O FOCO
inputCep.addEventListener('change', (evt) => {
    //PEGANDO OS NÚMEROS DO INPUT NÃO PERMITIDO OUTRO TIPO DE DADOS QUE NÃO SEJA DÍGITO
    const numCep = evt.target.value.replace(/\D/g, '')

    //VERIFICA SE SÃO 8(OITO) DÍGITOS
    if (numCep.length !== 8) {
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
        exibeDados(dadosEndereco)
        //CASO HAJA ALGUM ERRO É CAPTURADO PELO catch
    } catch (erro) {
        console.log(`erro apresentado`, erromessage)
    }

}

//OBEJTO LITERAL CAMPOS QUE CADA CHAVE REPRESENTA OS INPUTS DO DOM
const campos = {
    logradouro:document.querySelector(`#logradouro`),
    bairro:document.querySelector(`#bairro`),
    localidade:document.querySelector(`#localidade`),
    uf:document.querySelector(`#uf`),
}

//FUNÇÃO EXIBE DADOS
const exibeDados = (objDados) => {
    //PEGA A DIV O CLASS OCULTO
    divEndereco.classList.remove(`oculto`)

    //PERCORRE O OBJETO, NO FORMATO JSON, DO VIDA CEP
    for (let chave in campos) {
        //ATRIBUI O VALOR AO INPUT
        campos[chave].value = objDados[chave]
    }
    document.querySelector(`#num-residencia`).focus()
}

formPessoa.addEventListener(`reset`, () => {
    //PEGA A DIV DOS ELEMENTOS DO ENDEREÇO
    const divEndereco = document.querySelector(`#div-dados-endereco`)
    //REMOVE DA DIV O CLASS OCULTO
    divEndereco.classList.add(`oculto`)
})
