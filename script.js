document.querySelector('form').addEventListener('submit', function(event) {
    event.preventDefault(); // Evita o envio do formulário para testes

    const nome = event.target.nome.value.trim();
    const email = event.target.email.value.trim();
    const mensagem = event.target.mensagem.value.trim();

    // Verificar se o nome, email e mensagem não estão vazios
    if (!nome || !email || !mensagem) {
        alert('Por favor, preencha todos os campos.');
        return;
    }

    // Validação de email (verificação simples)
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    if (!emailRegex.test(email)) {
        alert('Por favor, insira um email válido.');
        return;
    }

    // Exibir mensagem de sucesso
    alert('Mensagem enviada com sucesso!');

    // Resetar o formulário
    event.target.reset();
});
