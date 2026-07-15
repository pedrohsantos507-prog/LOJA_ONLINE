const formulario = document.querySelector("#form-pessoa");
console.log("cadastro.js carregado");
formulario.addEventListener("submit", (evt) => {
    evt.preventDefault();

    const dadosFormulario = new FormData(formulario);

    const usuario = {

        nome: dadosFormulario.get("nome"),

        cpf: dadosFormulario.get("cpf"),

        dataNascimento: dadosFormulario.get("data-nascimento"),

        sexo: dadosFormulario.get("sexo"),

        cep: dadosFormulario.get("cep"),

        logradouro: dadosFormulario.get("logradouro"),

        numero: dadosFormulario.get("numero"),

        complemento: dadosFormulario.get("complemento"),

        bairro: dadosFormulario.get("bairro"),

        localidade: dadosFormulario.get("localidade"),

        uf: dadosFormulario.get("uf"),

        email: dadosFormulario.get("email"),

        senha: dadosFormulario.get("senha")

    };
});
