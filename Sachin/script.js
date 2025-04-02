document.addEventListener("DOMContentLoaded", function () {
    const products = [
        { id: 1, name: "Product 1", price: "$20", img: "https://via.placeholder.com/150", description: "This is product 1 description." },
        { id: 2, name: "Product 2", price: "$30", img: "https://via.placeholder.com/150", description: "This is product 2 description." },
        { id: 3, name: "Product 3", price: "$25", img: "https://via.placeholder.com/150", description: "This is product 3 description." },
        { id: 4, name: "Product 4", price: "$35", img: "https://via.placeholder.com/150", description: "This is product 4 description." },
        { id: 5, name: "Product 5", price: "$20", img: "https://via.placeholder.com/150", description: "This is product 1 description." },
        { id: 6, name: "Product 6", price: "$30", img: "https://via.placeholder.com/150", description: "This is product 2 description." },
        { id: 7, name: "Product 7", price: "$25", img: "https://via.placeholder.com/150", description: "This is product 3 description." },
        { id: 8, name: "Product 8", price: "$35", img: "https://via.placeholder.com/150", description: "This is product 4 description." },
        { id: 9, name: "Product 9", price: "$20", img: "https://via.placeholder.com/150", description: "This is product 1 description." },
        { id: 10, name: "Product 10", price: "$30", img: "https://via.placeholder.com/150", description: "This is product 2 description." },
        { id: 11, name: "Product 11", price: "$25", img: "https://via.placeholder.com/150", description: "This is product 3 description." },
        { id: 12, name: "Product 12", price: "$35", img: "https://via.placeholder.com/150", description: "This is product 4 description." },
        { id: 13, name: "Product 13", price: "$20", img: "https://via.placeholder.com/150", description: "This is product 1 description." },
        { id: 14, name: "Product 14", price: "$30", img: "https://via.placeholder.com/150", description: "This is product 2 description." },
        { id: 15, name: "Product 15", price: "$25", img: "https://via.placeholder.com/150", description: "This is product 3 description." },
        { id: 16, name: "Product 16", price: "$35", img: "https://via.placeholder.com/150", description: "This is product 4 description." }
    ];

    const container = document.getElementById("product-container");

    products.forEach(product => {
        const card = document.createElement("div");
        card.classList.add("product-card");

        card.innerHTML = `
            <img src="${product.img}" alt="${product.name}">
            <h2 class="product-title">${product.name}</h2>
            <p class="product-price">${product.price}</p>
            <div class="product-buttons">
                <div class="button-row">
                    <button id="buy-btn">Buy Now</button>
                    <button id="add-cart-btn">Add to Cart</button>
                </div>
                <button id="details-btn" onclick="openProductPage(${product.id})">More Details</button>
            </div>
        `;

        container.appendChild(card);
    });
});

function openProductPage(productId) {
    window.location.href = `product.html?id=${productId}`;
}
