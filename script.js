document.getElementById('newsletter-form').addEventListener('submit', function(e) {
  e.preventDefault();
  const nome = document.getElementById('nome').value;
  const email = document.getElementById('email').value;
  document.getElementById('mensagem').textContent = `Obrigado, ${nome}! Seu e-mail (${email}) foi cadastrado com sucesso!`;
  this.reset();
});
