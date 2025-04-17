import { fetchProducts } from './data.js';

export async function renderProductCards(containerId, start = 0, limit = 4) {
  const container = document.getElementById(containerId);
  const products = await fetchProducts(start, limit);

  container.innerHTML = '';

  products.forEach(product => {
    const card = document.createElement('div');
    card.className = 'product-card';
    card.innerHTML = `
      <h3>${product.title}</h3>
      <p>$${product.price}</p>
      <div class="buttons">
        <button onclick="alert('Booked ${product.title}')">Book Now</button>
        <button onclick="alert('Added ${product.title} to cart')">Add to Cart</button>
        <button onclick="window.location.href='product.html?id=${product.id}'">More Detail</button>
      </div>
    `;
    container.appendChild(card);
  });
}
