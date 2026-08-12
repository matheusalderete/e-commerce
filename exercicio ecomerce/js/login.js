function login(event) {
    event.preventDefault();
    const email = document.getElementById('email').value;
    const senha = document.getElementById('senha').value;
    if (email === 'admin@teste.com' && senha === '1234') {
        window.location.href = 'produtos.html';
    } else {
        alert('Usuário ou senha inválidos');
    }
}