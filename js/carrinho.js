const lista = document.getElementById("itens-carrinho");
const totalEl = document.getElementById("total");

function carregarCarrinho() {
    const carrinho = JSON.parse(localStorage.getItem("carrinho")) || [];

    let total = 0;
    lista.innerHTML = "";

    carrinho.forEach((produto, index) => {
        total += produto.preco;

        const item = document.createElement("li");
        item.className = "list-group-item d-flex justify-content-between align-items-center";

        item.innerHTML = `
            ${produto.nome} - R$ ${produto.preco}
            <button class="btn btn-sm btn-danger" onclick="remover(${index})">
                Remover
            </button>
        `;

        lista.appendChild(item);
    });

    totalEl.textContent = `Total: R$ ${total}`;
}

function remover(index) {
    const carrinho = JSON.parse(localStorage.getItem("carrinho")) || [];

    carrinho.splice(index, 1);

    localStorage.setItem("carrinho", JSON.stringify(carrinho));

    carregarCarrinho();
}

carregarCarrinho();