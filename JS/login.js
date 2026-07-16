// Seleciona o formulário de login
const formulario = document.querySelector("#form-login");

// Executa esta função quando o formulário é enviado
formulario.addEventListener("submit", (evt) => {

  // Impede que a página seja recarregada
  evt.preventDefault();

  // Captura os dados preenchidos no formulário
  const dadosFormulario = new FormData(formulario);

  // Cria um objeto com o e-mail e a senha informados
  const login = {
    email: dadosFormulario.get("email"),
    senha: dadosFormulario.get("senha"),
  };

  // Recupera os usuários cadastrados no localStorage
  let usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];

  // Procura um usuário com o e-mail informado
  let usuarioEncontrado = usuarios.find((u) => {
    return u.email === login.email;
  });

  // Verifica se o e-mail foi encontrado
  if (!usuarioEncontrado) {
    alert("Email não cadastrado!");
    return;
  }

  // Verifica se a senha informada está correta
  if (usuarioEncontrado.senha !== login.senha) {
    alert("Senha incorreta!");
    return;
  }

  // Login realizado com sucesso
  alert("Login realizado com sucesso!");

  // Redireciona o usuário para a página inicial
  window.location.href = "index.html";
});