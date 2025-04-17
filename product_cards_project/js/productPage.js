import { getProductById } from './data.js';

export async function renderProductDetail() {
  const params = new URLSearchParams(window.location.search);
  const id = params.get('id');
  const product = await getProductById(id);

  if (!product) return;

  const container = document.getElementById('product-detail');
  container.innerHTML = `
    <h2>${product.title}</h2>
    <p>${product.description}</p>
    <div class="gallery">
      ${product.images.map(src => `<img src="\${src}" alt="\${product.title}">`).join('')}
    </div>
    <p>Price: $${product.price}</p>
    <div class ="buttons">
    <button onclick="alert('Booked ${product.title}')">Book Now</button>
    <button onclick="alert('Added ${product.title} to cart')">Add to Cart</button>
    <button class="back-btn" onclick="window.location.href='index.html'">Go-Back</button>
   </div>
  `;
}
