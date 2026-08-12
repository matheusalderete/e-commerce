const produtos = [
    { id: 1, nome: "Meccha Chameleon", preco: 137.89, imagem: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8SEPlpOJMIdkw3w351WpBAqWWL-nhIBhsvg&s" },
    { id: 2, nome: "Resident Evil 9", preco: 89.90, imagem: "https://evilhazard.com.br/wp-content/uploads/2025/09/leonREquiemG1aPApuXcAAVCyv-e1758544292907.jpg" },
    { id: 3, nome: "Red Dead Redemption 2", preco: 155.32, imagem: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQoOcFIbUM0KqI90B1E_o5TilLyOkArr4YDsw&s" },
    { id: 4, nome: "R.E.P.O", preco: 35.90, imagem: "https://upload.wikimedia.org/wikipedia/pt/e/ef/R.E.P.O..jpg" },
    { id: 5, nome: "Far Cry 6", preco: 79.90, imagem: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSPwbVkaUYKhUK6ndrmPD4rTxL_v4epVFkDwQ&s" },
    { id: 6, nome: "Minecraft", preco: 253.70, imagem: "https://cms-assets.xboxservices.com/assets/65/15/6515e0be-8482-48bb-97f9-737010626408.jpg?n=Minecraft_Sneaky-Slider-1084_Tiny-Takeover_1600x675.jpg" }
];

function renderizarProdutos() {
    const container = document.getElementById("lista-produtos");

    produtos.forEach(produto => {
        const col = document.createElement("div");
        col.className="col-lg-3 col-md-4 col-sm-6 mb-4";

        col.innerHTML = `
            <div class="card mb-4 shadow-lg border-0">
                <img src="${produto.imagem}" class="card-img-top" alt="${produto.nome}">
                <div class="card-body text-center">
                    <h5 class="card-title">${produto.nome}</h5>
                    <p class="card-text fw-bold">R$ ${produto.preco.toFixed(2)}</p>
                    <button class="btn btn-dark" onclick="adicionarCarrinho(${produto.id})">
                        Comprar
                    </button>
                </div>
            </div>
        `;

        container.appendChild(col);
    });
}

function adicionarCarrinho(id) {
    let carrinho = JSON.parse(localStorage.getItem("carrinho")) || [];
    const produto = produtos.find(p => p.id === id);

    if (produto) {
        carrinho.push(produto);
        localStorage.setItem("carrinho", JSON.stringify(carrinho));
        alert("Produto adicionado!");
    }
}

renderizarProdutos();