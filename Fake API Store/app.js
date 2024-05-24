document.addEventListener('DOMContentLoaded', () => {
    const productContainer = document.getElementById('product-container');
    const cartContainer = document.getElementById('cart').querySelector('ul');
    const cartSection = document.getElementById('cart');
    let cart = [];
    let favorites = [];

    const fetchProducts = async () => {
        try {
            const response = await fetch('https://fakestoreapi.com/products');
            const products = await response.json();
            displayProducts(products);
        } catch (error) {
            console.error('Error fetching products:', error);
        }
    };

    const displayProducts = (products) => {
        products.forEach(product => {
            const productElement = document.createElement('div');
            productElement.classList.add('product');
            productElement.innerHTML = `
                <img src="${product.image}" alt="${product.title}">
                <h2>${product.title}</h2>
                <div class="details">
                    <p>$${product.price}</p>
                    <button data-id="${product.id}">Add to Cart</button>
                </div>
                <span class="heart" data-id="${product.id}">&#10084;</span>
            `;
            productContainer.appendChild(productElement);
        })

        productContainer.querySelectorAll('button').forEach(button => {
            button.addEventListener('click', () => {
                const productId = button.getAttribute('data-id');
                addToCart(productId);
            });
        });

        productContainer.querySelectorAll('.heart').forEach(heart => {
            heart.addEventListener('click', () => {
                const productId = heart.getAttribute('data-id');
                toggleFavorite(productId, heart);
            });
        });
    };

    const addToCart = async (productId) => {
        try {
            const response = await fetch(`https://fakestoreapi.com/products/${productId}`);
            const product = await response.json();
            cart.push(product);
            displayCart();
            cartSection.scrollIntoView({ behavior: 'smooth' }); // Scroll to cart section
        } catch (error) {
            console.error('Error adding to cart:', error);
        }
    };

    const displayCart = () => {
        cartContainer.innerHTML = '';
        cart.forEach((item, index) => {
            const cartItem = document.createElement('li');
            cartItem.innerHTML = `
                ${item.title} - $${item.price}
                <button data-index="${index}">Remove</button>
            `;
            cartContainer.appendChild(cartItem);
        });

        cartContainer.querySelectorAll('button').forEach(button => {
            button.addEventListener('click', () => {
                const itemIndex = button.getAttribute('data-index');
                removeFromCart(itemIndex);
            });
        });
    };

    const removeFromCart = (index) => {
        cart.splice(index, 1);
        displayCart();
    };

    const toggleFavorite = async (productId, heartElement) => {
        try {
            const response = await fetch(`https://fakestoreapi.com/products/${productId}`);
            const product = await response.json();
            const favoriteIndex = favorites.findIndex(item => item.id === product.id);

            if (favoriteIndex > -1) {
                // Remove from favorites
                favorites.splice(favoriteIndex, 1);
                heartElement.classList.remove('favorite');
            } else {
                // Add to favorites
                favorites.push(product);
                // heartElement.classList.add('favorite');
            }
            heartElement.classList.toggle('favorite');
            console.log('Favorites:', favorites);
        } catch (error) {
            console.error('Error toggling favorite:', error);
        }
    }

    fetchProducts();
});