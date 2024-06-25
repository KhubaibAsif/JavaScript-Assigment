
const productsContainer = document.getElementById('products');
const cartContainer = document.getElementById('cart');
const searchInput = document.getElementById('searchInput');
const priceFilter = document.getElementById('priceFilter');
const priceValue = document.getElementById('priceValue');

let products = [
    { id: 1, name: "Mens Casual Slim Fit", price: 10.32, imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTEbGKFWZa7-39DK64pnXRnUCqwmlX9WFQrFA&s" },
    { id: 2, name: "John Hardy Women's Legends Naga Gold & Silver Dragon Station Chain Bracelet", price: 8.99, imageUrl: "https://files.jewelfeed.com/jewelfeed/catalog/items/5ac1d74c-df1e-4d27-a643-f960bdab64f8.jpg.800x800_q85_background.jpg" },
    { id: 3, name: "Solid Gold Petite Micropave", price: 12, imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTf8FIMMV0CrYOV2eAmu5xFu0MXShW_yU3UHg&s" },
    { id: 4, name: "Mens Printed T-Shirts", price: 43, imageUrl: "https://teetall.pk/cdn/shop/products/16654714438966a494a1a5e313f352a0f24abc7ea8_thumbnail_750x_1.webp?v=1680370380" },
    { id: 5, name: "WD 4TB Gaming Drive Works with Playstation 4 Portable External Hard Drive", price: 60, imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRcuOxjYd73-VPLF92BptrR3rQNy2VgGQ7emA&s" },
    { id: 6, name: "Samsung 49-Inch CHG90 144Hz Curved Gaming Monitor (LC49HG90DMNXZA) – Super Ultrawide Screen QLED", price: 90.99, imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSE6M9PRjD2jvp8Vm7-xofQS7_bIz3rnjZrKQ&s" },
    { id: 7, name: "BIYLACLESEN Women's 3-in-1 Snowboard Jacket Winter Coats", price: 56.99, imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3TfWm0D48XzYGQ6CjRA5caKgxDoj2l08ngw&s" },
    { id: 8, name: "Lock and Love Women's Removable Hooded Faux Leather Moto Biker Jacket", price: 29.95, imageUrl: "https://i.pinimg.com/736x/5a/0b/41/5a0b41ea75cee7897eb24d1c8db619b5.jpg" },
    // { id: 9, name: "Rain Jacket Women Windbreaker Striped Climbing Raincoats", price: 76.21, imageUrl: "https://m.media-amazon.com/images/I/61MQuCv4-eL._AC_SL1500_.jpg" },
    // { id: 10, name: "Opna Womens Short Sleeve Moisture", price: 7.95, imageUrl: "https://images.unsplash.com/photo-1512470876306-8debdcc5fc30" },
    // { id: 11, name: "DANVOUY Womens T Shirt Casual Cotton Short", price: 12.99, imageUrl: "https://images.unsplash.com/photo-1561808840-72c6dcecc196" },
    { id: 12, name: "SanDisk SSD PLUS 1TB Internal SSD - SATA III 6 Gb/s", price: 45.54, imageUrl: "https://c1.neweggimages.com/productimage/nb640/20-173-150-01.jpg" },
    // Add more products here as needed
];

let cart = [];

// Display products
function displayProducts(products) {
    productsContainer.innerHTML = '';
    products.forEach(product => {
        const productElement = document.createElement('div');
        productElement.classList.add('product');
        productElement.innerHTML = `
            <h3>${product.name}</h3>
            <img src="${product.imageUrl}" height="50px" alt="Product Image">
            <p>Price: $${product.price}</p>
            <button onclick="addToCart(${product.id})">Add to Cart</button>
        `;
        productsContainer.appendChild(productElement);
    });
}

displayProducts(products);

// Search functionality
function search() {
    const searchTerm = searchInput.value.toLowerCase();
    const filteredProducts = products.filter(product =>
        product.name.toLowerCase().includes(searchTerm)
    );
    displayProducts(filteredProducts);
}

// Add to cart functionality
function addToCart(productId) {
    const productToAdd = products.find(product => product.id === productId);
    if (productToAdd) {
        cart.push(productToAdd);
        displayCart();
    } else {
        console.error('Product not found');
    }
}

// Display cart
function displayCart() {
    cartContainer.innerHTML = '';
    cart.forEach(item => {
        const cartItem = document.createElement('div');
        cartItem.classList.add('cart-item');
        cartItem.innerHTML = `
            <span>${item.name} - $${item.price}</span>
            <button onclick="removeFromCart(${item.id})">Remove</button>
        `;
        cartContainer.appendChild(cartItem);
    });
}

// Remove from cart functionality
function removeFromCart(productId) {
    cart = cart.filter(item => item.id !== productId);
    displayCart();
}

// Price filtering functionality
function filterPrice() {
    const maxPrice = priceFilter.value;
    priceValue.textContent = `$${maxPrice}`;
    const filteredProducts = products.filter(product => product.price <= maxPrice);
    displayProducts(filteredProducts);
}

// Add event listeners
searchInput.addEventListener('input', search);
priceFilter.addEventListener('input', filterPrice);
