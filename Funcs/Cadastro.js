// Captura o formulário pelo ID
const form = document.getElementById('cadastroForm');

// Captura o elemento da div que exibirá a mensagem
const mensagemDiv = document.getElementById('mensagem');

// Função para realizar o cadastro
function cadastrarUsuario(event) {
    event.preventDefault(); // Impede que o formulário seja submetido

    // Captura os valores dos campos do formulário
    const nome = document.getElementById('nome').value;
    const email = document.getElementById('email').value;
    const senha = document.getElementById('senha').value;

    // Aqui você pode realizar a ação de cadastro, como enviar os dados para um servidor ou armazená-los localmente

    // Exibe uma mensagem de sucesso
    mensagemDiv.innerHTML = `<p>Cadastro realizado com sucesso!</p>`;

    // Limpa os campos do formulário
    form.reset();
}

// Adiciona um evento de submissão ao formulário
form.addEventListener('submit', cadastrarUsuario);