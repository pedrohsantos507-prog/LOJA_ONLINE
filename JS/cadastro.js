// ==========================================
// SELEÇÃO DOS ELEMENTOS DA PÁGINA
// ==========================================

// Seleciona o formulário de cadastro pelo id
const formulario = document.querySelector("#form-pessoa");

// ==========================================
// EVENTO DE ENVIO DO FORMULÁRIO
// ==========================================

// Executa esta função quando o usuário clicar em "Cadastrar"
formulario.addEventListener("submit", (evt) => {

  // Impede que a página seja recarregada ao enviar o formulário
  evt.preventDefault();

  // Captura todos os dados preenchidos no formulário
  const dadosFormulario = new FormData(formulario);

  // ==========================================
  // CRIAÇÃO DO OBJETO USUÁRIO
  // ==========================================

  // Cria um objeto contendo todas as informações do usuário
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

    senha: dadosFormulario.get("senha"),
  };

  // ==========================================
  // RECUPERAÇÃO DOS USUÁRIOS CADASTRADOS
  // ==========================================

  // Recupera o vetor de usuários salvo no localStorage.
  // Caso ainda não exista nenhum cadastro, cria um vetor vazio.
  let usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];

  // ==========================================
  // VERIFICA SE O USUÁRIO JÁ ESTÁ CADASTRADO
  // ==========================================

  // Procura um usuário que possua o mesmo e-mail ou CPF.
  let usuarioExistente = usuarios.find((u) => {
    return u.email === usuario.email || u.cpf === usuario.cpf;
  });

  // Se encontrar um usuário com o mesmo e-mail ou CPF,
  // interrompe o cadastro.
  if (usuarioExistente) {
    alert("Usuário já cadastrado!");
    return;
  }

  // ==========================================
  // CADASTRO DO NOVO USUÁRIO
  // ==========================================

  // Adiciona o novo usuário ao vetor.
  usuarios.push(usuario);

  // Salva o vetor atualizado no localStorage.
  localStorage.setItem("usuarios", JSON.stringify(usuarios));

  // Informa que o cadastro foi realizado com sucesso.
  alert("Cadastro realizado com sucesso!");

  // Limpa todos os campos do formulário.
  formulario.reset();

  window.location.href = "index.html";
});