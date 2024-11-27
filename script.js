document.querySelector('form').addEventListener('submit', function(event) {
    event.preventDefault(); // Evita o envio do formulário para testes

    const nome = event.target.nome.value.trim();
    const email = event.target.email.value.trim();
    const mensagem = event.target.mensagem.value.trim();

    if (!nome || !email || !mensagem) {
        alert('Por favor, preencha todos os campos.');
        return;
    }

    alert('Mensagem enviada com sucesso!');
    event.target.reset();
});
