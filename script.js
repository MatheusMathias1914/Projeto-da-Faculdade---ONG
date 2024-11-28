
document.querySelector("form").addEventListener("submit", function (event) {
    event.preventDefault(); //
  
    const nome = event.target.nome.value.trim();
    const email = event.target.email.value.trim();
    const mensagem = event.target.mensagem.value.trim();
  
   
    if (!nome || !email || !mensagem) {
      alert("Por favor, preencha todos os campos.");
      return;
    }
  
    /
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    if (!emailRegex.test(email)) {
      alert("Por favor, insira um email válido.");
      return;
    }
  
    
    alert("Mensagem enviada com sucesso!");
    
    
    event.target.reset();
  });
  
 
  const valorInput = document.getElementById("valor");
  
  valorInput.addEventListener("input", function () {
    let value = valorInput.value.replace(/\D/g, ""); 
    
    if (value.length > 2) {
      value = value.replace(/(\d)(\d{2})$/, "$1,$2");
    }
  
    
    valorInput.value = value ? "R$ " + value.replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1.") : "";
  });
  
