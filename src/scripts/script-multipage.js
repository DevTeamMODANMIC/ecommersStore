/**
 * ModernStore - Multi-Page JavaScript
 * Optimized for separate HTML pages instead of SPA routing
 */

// =============================================================================
// PRODUCT DATA MODEL AND CATALOG SYSTEM
// =============================================================================

const ProductCatalog = {
    // Product data structure with 10 dummy products
    products: [
        {
            id: 1,
            name: "Premium Wireless Headphones",
            price: 299.99,
            image: "https://via.placeholder.com/400x300/2563eb/ffffff?text=Headphones",
            gallery: [
                "https://via.placeholder.com/400x300/2563eb/ffffff?text=Headphones",
                "https://via.placeholder.com/400x300/1d4ed8/ffffff?text=Headphones+Alt",
                "https://via.placeholder.com/400x300/3b82f6/ffffff?text=Headphones+Side"
            ],
            description: "High-quality wireless headphones with active noise cancellation, premium sound quality, and 30-hour battery life. Perfect for music lovers and professionals.",
            category: "electronics",
            featured: true,
            inStock: true
        },
        {
            id: 2,
            name: "Organic Cotton T-Shirt",
            price: 29.99,
            image: "https://via.placeholder.com/400x300/10b981/ffffff?text=T-Shirt",
            gallery: [
                "https://via.placeholder.com/400x300/10b981/ffffff?text=T-Shirt",
                "https://via.placeholder.com/400x300/059669/ffffff?text=T-Shirt+Back",
                "https://via.placeholder.com/400x300/047857/ffffff?text=T-Shirt+Detail"
            ],
            description: "Comfortable and sustainable organic cotton t-shirt. Available in multiple colors and sizes. Ethically sourced and environmentally friendly.",
            category: "clothing",
            featured: true,
            inStock: true
        },
        {
            id: 3,
            name: "Smart Home Security Camera",
            price: 149.99,
            image: "https://via.placeholder.com/400x300/64748b/ffffff?text=Camera",
            gallery: [
                "https://via.placeholder.com/400x300/64748b/ffffff?text=Camera",
                "https://via.placeholder.com/400x300/475569/ffffff?text=Camera+Setup",
                "https://via.placeholder.com/400x300/334155/ffffff?text=Camera+App"
            ],
            description: "Advanced security camera with 4K recording, night vision, motion detection, and smartphone app integration. Keep your home safe and secure.",
            category: "electronics",
            featured: false,
            inStock: true
        },
        {
            id: 4,
            name: "Ceramic Plant Pot Set",
            price: 45.99,
            image: "https://via.placeholder.com/400x300/f59e0b/ffffff?text=Plant+Pots",
            gallery: [
                "https://via.placeholder.com/400x300/f59e0b/ffffff?text=Plant+Pots",
                "https://via.placeholder.com/400x300/d97706/ffffff?text=Pots+Detail",
                "https://via.placeholder.com/400x300/b45309/ffffff?text=Pots+Set"
            ],
            description: "Beautiful set of 3 ceramic plant pots with drainage holes and matching saucers. Perfect for indoor plants and home decoration.",
            category: "home",
            featured: true,
            inStock: true
        },
        {
            id: 5,
            name: "Bluetooth Portable Speaker",
            price: 79.99,
            image: "https://via.placeholder.com/400x300/8b5cf6/ffffff?text=Speaker",
            gallery: [
                "https://via.placeholder.com/400x300/8b5cf6/ffffff?text=Speaker",
                "https://via.placeholder.com/400x300/7c3aed/ffffff?text=Speaker+Side",
                "https://via.placeholder.com/400x300/6d28d9/ffffff?text=Speaker+Controls"
            ],
            description: "Compact Bluetooth speaker with powerful sound, waterproof design, and 12-hour battery life. Perfect for outdoor adventures and parties.",
            category: "electronics",
            featured: false,
            inStock: true
        },
        {
            id: 6,
            name: "Denim Jacket",
            price: 89.99,
            image: "https://via.placeholder.com/400x300/1e40af/ffffff?text=Denim+Jacket",
            gallery: [
                "https://via.placeholder.com/400x300/1e40af/ffffff?text=Denim+Jacket",
                "https://via.placeholder.com/400x300/1e3a8a/ffffff?text=Jacket+Back",
                "https://via.placeholder.com/400x300/1d4ed8/ffffff?text=Jacket+Detail"
            ],
            description: "Classic denim jacket made from premium cotton denim. Timeless style that goes with everything. Available in multiple washes and sizes.",
            category: "clothing",
            featured: false,
            inStock: true
        },
        {
            id: 7,
            name: "Smart Watch Pro",
            price: 199.99,
            image: "https://via.placeholder.com/400x300/ef4444/ffffff?text=Smart+Watch",
            gallery: [
                "https://via.placeholder.com/400x300/ef4444/ffffff?text=Smart+Watch",
                "https://via.placeholder.com/400x300/dc2626/ffffff?text=Watch+Apps",
                "https://via.placeholder.com/400x300/b91c1c/ffffff?text=Watch+Bands"
            ],
            description: "Advanced smartwatch with health monitoring, GPS tracking, and week-long battery life. Track your fitness and stay connected.",
            category: "electronics",
            featured: true,
            inStock: true
        },
        {
            id: 8,
            name: "Cozy Throw Blanket",
            price: 39.99,
            image: "https://via.placeholder.com/400x300/f97316/ffffff?text=Throw+Blanket",
            gallery: [
                "https://via.placeholder.com/400x300/f97316/ffffff?text=Throw+Blanket",
                "https://via.placeholder.com/400x300/ea580c/ffffff?text=Blanket+Texture",
                "https://via.placeholder.com/400x300/c2410c/ffffff?text=Blanket+Colors"
            ],
            description: "Soft and warm throw blanket made from premium materials. Perfect for cozy evenings and adds comfort to any living space.",
            category: "home",
            featured: false,
            inStock: true
        },
        {
            id: 9,
            name: "Running Shoes",
            price: 119.99,
            image: "https://via.placeholder.com/400x300/06b6d4/ffffff?text=Running+Shoes",
            gallery: [
                "https://via.placeholder.com/400x300/06b6d4/ffffff?text=Running+Shoes",
                "https://via.placeholder.com/400x300/0891b2/ffffff?text=Shoes+Side",
                "https://via.placeholder.com/400x300/0e7490/ffffff?text=Shoes+Sole"
            ],
            description: "Lightweight running shoes with advanced cushioning and breathable materials. Designed for comfort and performance during your workouts.",
            category: "clothing",
            featured: false,
            inStock: true
        },
        {
            id: 10,
            name: "LED Desk Lamp",
            price: 69.99,
            image: "https://via.placeholder.com/400x300/84cc16/ffffff?text=Desk+Lamp",
            gallery: [
                "https://via.placeholder.com/400x300/84cc16/ffffff?text=Desk+Lamp",
                "https://via.placeholder.com/400x300/65a30d/ffffff?text=Lamp+Adjustable",
                "https://via.placeholder.com/400x300/4d7c0f/ffffff?text=Lamp+Controls"
            ],
            description: "Adjustable LED desk lamp with multiple brightness levels and color temperatures. Perfect for work, study, and reading.",
            category: "home",
            featured: false,
            inStock: true
        }
    ],

    // Get all products
    getAllProducts() {
        return this.products;
    },

    // Get product by ID
    getProductById(id) {
        return this.products.find(product => product.id === parseInt(id));
    },

    // Get featured products
    getFeaturedProducts() {
        return this.products.filter(product => product.featured);
    },

    // Get products by category
    getProductsByCategory(category) {
        if (!category) return this.products;
        return this.products.filter(product => product.category === category);
    },

    // Search products
    searchProducts(query) {
        if (!query) return this.products;
        const searchTerm = query.toLowerCase();
        return this.products.filter(product => 
            product.name.toLowerCase().includes(searchTerm) ||
            product.description.toLowerCase().includes(searchTerm) ||
            product.category.toLowerCase().includes(searchTerm)
        );
    }
};

// =============================================================================
// UTILITY FUNCTIONS
// =============================================================================

const Utils = {
    // Format price with currency
    formatPrice(price) {
        return `$${price.toFixed(2)}`;
    },

    // Capitalize first letter
    capitalizeFirst(str) {
        return str.charAt(0).toUpperCase() + str.slice(1);
    },

    // Debounce function for search
    debounce(func, wait) {
        let timeout;
        return function executedFunction(...args) {
            const later = () => {
                clearTimeout(timeout);
                func(...args);
            };
            clearTimeout(timeout);
            timeout = setTimeout(later, wait);
        };
    },

    // Get URL parameters
    getUrlParameter(name) {
        const urlParams = new URLSearchParams(window.location.search);
        return urlParams.get(name);
    },

    // Navigate to page with optional parameters
    navigateToPage(page, params = {}) {
        let url = page;
        const paramString = new URLSearchParams(params).toString();
        if (paramString) {
            url += `?${paramString}`;
        }
        window.location.href = url;
    }
};

// =============================================================================
// CART MANAGEMENT
// =============================================================================

const Cart = {
    // Initialize cart
    init() {
        this.loadFromStorage();
        this.updateCartCount();
        this.bindCartEvents();
    },

    // Get cart items from localStorage
    getCartItems() {
        try {
            const cartData = localStorage.getItem('modernstore_cart');
            return cartData ? JSON.parse(cartData) : [];
        } catch (error) {
            console.error('Error loading cart from storage:', error);
            return [];
        }
    },

    // Save cart to localStorage
    saveToStorage() {
        try {
            localStorage.setItem('modernstore_cart', JSON.stringify(this.getCartItems()));
        } catch (error) {
            console.error('Error saving cart to storage:', error);
        }
    },

    // Load cart from localStorage
    loadFromStorage() {
        const cartItems = this.getCartItems();
        this.updateCartCount();
        return cartItems;
    },

    // Add item to cart
    addItem(productId, quantity = 1) {
        const product = ProductCatalog.getProductById(productId);
        if (!product) {
            console.error('Product not found:', productId);
            return false;
        }

        if (!product.inStock) {
            console.warn('Product is out of stock:', product.name);
            return false;
        }

        const cartItems = this.getCartItems();
        const existingItemIndex = cartItems.findIndex(item => item.productId === productId);
        
        if (existingItemIndex > -1) {
            cartItems[existingItemIndex].quantity += quantity;
        } else {
            cartItems.push({
                productId: productId,
                quantity: quantity,
                addedAt: new Date().toISOString()
            });
        }

        localStorage.setItem('modernstore_cart', JSON.stringify(cartItems));
        this.updateCartCount();
        
        console.log(`Added ${quantity} x ${product.name} to cart`);
        return true;
    },

    // Remove item from cart
    removeItem(productId) {
        const cartItems = this.getCartItems();
        const filteredItems = cartItems.filter(item => item.productId !== productId);
        
        localStorage.setItem('modernstore_cart', JSON.stringify(filteredItems));
        this.updateCartCount();
        
        // Refresh cart display if on cart page
        if (document.getElementById('cart-content')) {
            this.displayCartItems();
        }
    },

    // Update item quantity
    updateQuantity(productId, newQuantity) {
        if (newQuantity <= 0) {
            this.removeItem(productId);
            return;
        }

        const cartItems = this.getCartItems();
        const itemIndex = cartItems.findIndex(item => item.productId === productId);
        
        if (itemIndex > -1) {
            cartItems[itemIndex].quantity = newQuantity;
            localStorage.setItem('modernstore_cart', JSON.stringify(cartItems));
            this.updateCartCount();
            
            // Refresh cart display if on cart page
            if (document.getElementById('cart-content')) {
                this.displayCartItems();
            }
        }
    },

    // Get cart total
    getCartTotal() {
        const cartItems = this.getCartItems();
        let total = 0;
        
        cartItems.forEach(item => {
            const product = ProductCatalog.getProductById(item.productId);
            if (product) {
                total += product.price * item.quantity;
            }
        });
        
        return total;
    },

    // Get cart item count
    getCartItemCount() {
        const cartItems = this.getCartItems();
        return cartItems.reduce((total, item) => total + item.quantity, 0);
    },

    // Update cart count in navigation
    updateCartCount() {
        const cartCountElements = document.querySelectorAll('.cart-count');
        const count = this.getCartItemCount();
        
        cartCountElements.forEach(element => {
            element.textContent = count;
        });
    },

    // Bind cart events
    bindCartEvents() {
        // Handle quantity changes
        document.addEventListener('click', (event) => {
            if (event.target.matches('.cart-quantity-increase')) {
                const productId = parseInt(event.target.dataset.productId);
                const cartItems = this.getCartItems();
                const item = cartItems.find(item => item.productId === productId);
                if (item) {
                    this.updateQuantity(productId, item.quantity + 1);
                }
            }
            
            if (event.target.matches('.cart-quantity-decrease')) {
                const productId = parseInt(event.target.dataset.productId);
                const cartItems = this.getCartItems();
                const item = cartItems.find(item => item.productId === productId);
                if (item && item.quantity > 1) {
                    this.updateQuantity(productId, item.quantity - 1);
                }
            }
            
            if (event.target.matches('.cart-remove-item')) {
                const productId = parseInt(event.target.dataset.productId);
                this.removeItem(productId);
            }
        });
    },

    // Display cart items (for cart page)
    displayCartItems() {
        const cartContainer = document.getElementById('cart-content');
        const cartSummary = document.getElementById('cart-summary');
        
        if (!cartContainer) return;
        
        const cartItems = this.getCartItems();
        
        if (cartItems.length === 0) {
            cartContainer.innerHTML = `
                <div class="empty-cart">
                    <p>Your cart is empty</p>
                    <a href="products.html" class="cta-button">Continue Shopping</a>
                </div>
            `;
            if (cartSummary) cartSummary.style.display = 'none';
            return;
        }
        
        let cartHTML = '<div class="cart-items">';
        let subtotal = 0;
        
        cartItems.forEach(item => {
            const product = ProductCatalog.getProductById(item.productId);
            if (product) {
                const itemTotal = product.price * item.quantity;
                subtotal += itemTotal;
                
                cartHTML += `
                    <article class="cart-item" data-product-id="${product.id}">
                        <div class="cart-item-image">
                            <img src="${product.image}" alt="${product.name}" loading="lazy">
                        </div>
                        <div class="cart-item-details">
                            <h4 class="cart-item-name">${product.name}</h4>
                            <p class="cart-item-price">${Utils.formatPrice(product.price)} each</p>
                            <p class="cart-item-category">${Utils.capitalizeFirst(product.category)}</p>
                        </div>
                        <div class="cart-item-quantity">
                            <label class="quantity-label">Quantity:</label>
                            <div class="quantity-controls">
                                <button class="quantity-btn cart-quantity-decrease" data-product-id="${product.id}" ${item.quantity <= 1 ? 'disabled' : ''}>-</button>
                                <span class="quantity-display">${item.quantity}</span>
                                <button class="quantity-btn cart-quantity-increase" data-product-id="${product.id}">+</button>
                            </div>
                        </div>
                        <div class="cart-item-total">
                            <p class="item-total">${Utils.formatPrice(itemTotal)}</p>
                            <button class="cart-remove-item" data-product-id="${product.id}">Remove</button>
                        </div>
                    </article>
                `;
            }
        });
        
        cartHTML += '</div>';
        cartContainer.innerHTML = cartHTML;
        
        // Update cart summary
        if (cartSummary) {
            const tax = subtotal * 0.08; // 8% tax
            const total = subtotal + tax;
            
            document.getElementById('cart-subtotal').textContent = Utils.formatPrice(subtotal);
            document.getElementById('cart-tax').textContent = Utils.formatPrice(tax);
            document.getElementById('cart-total').textContent = Utils.formatPrice(total);
            
            cartSummary.style.display = 'block';
        }
    }
};

// =============================================================================
// PRODUCT DISPLAY AND INTERACTION
// =============================================================================

const ProductDisplay = {
    // Initialize product display
    init() {
        this.bindProductEvents();
        this.initLazyLoading();
    },

    // Bind product interaction events
    bindProductEvents() {
        // Handle Add to Cart button clicks
        document.addEventListener('click', (event) => {
            if (event.target.matches('.add-to-cart-btn') || event.target.closest('.add-to-cart-btn')) {
                event.stopPropagation();
                const button = event.target.closest('.add-to-cart-btn');
                const productId = parseInt(button.dataset.productId);
                
                if (productId && !button.disabled) {
                    this.showButtonLoading(button);
                    
                    setTimeout(() => {
                        Cart.addItem(productId, 1);
                        this.hideButtonLoading(button);
                        this.showAddToCartFeedback(button);
                    }, 300);
                }
            }
        });

        // Handle product card clicks for navigation
        document.addEventListener('click', (event) => {
            const productCard = event.target.closest('.product-card');
            if (productCard && !event.target.closest('.add-to-cart-btn')) {
                const productId = productCard.dataset.productId;
                if (productId) {
                    Utils.navigateToPage('product-detail.html', { id: productId });
                }
            }
        });
    },

    // Show loading state on button
    showButtonLoading(button) {
        button.disabled = true;
        button.innerHTML = '<span class="loading-spinner"></span>Adding...';
    },

    // Hide loading state on button
    hideButtonLoading(button) {
        button.disabled = false;
        button.innerHTML = 'Add to Cart';
    },

    // Show add to cart feedback
    showAddToCartFeedback(button) {
        const originalText = button.innerHTML;
        button.innerHTML = '✓ Added!';
        button.style.backgroundColor = '#10b981';
        
        setTimeout(() => {
            button.innerHTML = originalText;
            button.style.backgroundColor = '';
        }, 2000);
    },

    // Initialize lazy loading for images
    initLazyLoading() {
        if ('IntersectionObserver' in window) {
            const imageObserver = new IntersectionObserver((entries, observer) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        const img = entry.target;
                        img.src = img.dataset.src;
                        img.classList.remove('lazy-image');
                        imageObserver.unobserve(img);
                    }
                });
            });

            document.querySelectorAll('img[data-src]').forEach(img => {
                imageObserver.observe(img);
            });
        }
    },

    // Render product card
    renderProductCard(product) {
        return `
            <article class="product-card" data-product-id="${product.id}" role="group" aria-labelledby="product-name-${product.id}">
                <div class="product-image">
                    <img data-src="${product.image}" 
                         src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='300' height='200'%3E%3Crect width='100%25' height='100%25' fill='%23f1f5f9'/%3E%3C/svg%3E"
                         alt="${product.name}"
                         class="lazy-image"
                         loading="lazy">
                    ${product.featured ? '<span class="featured-badge">Featured</span>' : ''}
                </div>
                <div class="product-info">
                    <h3 id="product-name-${product.id}" class="product-name">${product.name}</h3>
                    <p class="product-price" aria-label="Price: ${Utils.formatPrice(product.price)}">${Utils.formatPrice(product.price)}</p>
                    <p class="product-category">${Utils.capitalizeFirst(product.category)}</p>
                    <button class="add-to-cart-btn" data-product-id="${product.id}" ${!product.inStock ? 'disabled' : ''}>
                        ${product.inStock ? 'Add to Cart' : 'Out of Stock'}
                    </button>
                </div>
            </article>
        `;
    },

    // Display featured products (for home page)
    displayFeaturedProducts() {
        const container = document.getElementById('featured-products');
        if (!container) return;
        
        const featuredProducts = ProductCatalog.getFeaturedProducts();
        const productsHTML = featuredProducts.map(product => this.renderProductCard(product)).join('');
        
        container.innerHTML = productsHTML;
        this.initLazyLoading();
    },

    // Display all products (for products page)
    displayAllProducts() {
        const container = document.getElementById('products-grid');
        if (!container) return;
        
        const products = ProductCatalog.getAllProducts();
        const productsHTML = products.map(product => this.renderProductCard(product)).join('');
        
        container.innerHTML = productsHTML;
        this.updateResultsCount(products.length);
        this.initLazyLoading();
    },

    // Update results count bar (if present)
    updateResultsCount(count) {
        const resultsEl = document.getElementById('results-count');
        if (!resultsEl) return;
        const label = count === 0 ? 'No products found' : `Showing ${count} product${count === 1 ? '' : 's'}`;
        resultsEl.textContent = label;
    },

    // Filter and display products
    filterAndDisplayProducts() {
        const container = document.getElementById('products-grid');
        if (!container) return;
        
        const searchTerm = document.getElementById('product-search')?.value || '';
        const category = document.getElementById('category-filter')?.value || '';
        const sortValue = document.getElementById('sort-select')?.value || '';
        const minStr = document.getElementById('price-min')?.value?.trim();
        const maxStr = document.getElementById('price-max')?.value?.trim();
        const minPrice = minStr ? parseFloat(minStr) : NaN;
        const maxPrice = maxStr ? parseFloat(maxStr) : NaN;
        const inStockOnly = !!document.getElementById('in-stock-only')?.checked;
        
        let products = ProductCatalog.getAllProducts();
        
        // Apply search filter
        if (searchTerm) {
            products = products.filter(product => 
                product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                product.description.toLowerCase().includes(searchTerm.toLowerCase())
            );
        }
        
        // Apply category filter
        if (category) {
            products = products.filter(product => product.category === category);
        }
        
        // Apply stock filter
        if (inStockOnly) {
            products = products.filter(product => product.inStock);
        }

        // Apply price range filters
        if (!Number.isNaN(minPrice)) {
            products = products.filter(product => product.price >= minPrice);
        }
        if (!Number.isNaN(maxPrice)) {
            products = products.filter(product => product.price <= maxPrice);
        }

        // Apply sorting
        if (sortValue) {
            const byNameAsc = (a, b) => a.name.localeCompare(b.name);
            const byNameDesc = (a, b) => b.name.localeCompare(a.name);
            const byPriceAsc = (a, b) => a.price - b.price;
            const byPriceDesc = (a, b) => b.price - a.price;
            switch (sortValue) {
                case 'price-asc':
                    products = products.slice().sort(byPriceAsc);
                    break;
                case 'price-desc':
                    products = products.slice().sort(byPriceDesc);
                    break;
                case 'name-asc':
                    products = products.slice().sort(byNameAsc);
                    break;
                case 'name-desc':
                    products = products.slice().sort(byNameDesc);
                    break;
                default:
                    break;
            }
        }
        
        const productsHTML = products.map(product => this.renderProductCard(product)).join('');
        container.innerHTML = productsHTML || '<p class="no-products">No products found.</p>';
        this.updateResultsCount(products.length);
        this.initLazyLoading();
    }
};
const ProductDetail = {
    // Initialize product detail page
    init() {
        this.loadProductDetail();
        this.bindProductDetailEvents();
    },

    // Load product detail from URL parameter
    loadProductDetail() {
        const productId = Utils.getUrlParameter('id');
        if (!productId) {
            this.showProductNotFound();
            return;
        }
        
        const product = ProductCatalog.getProductById(parseInt(productId));
        if (!product) {
            this.showProductNotFound();
            return;
        }
        
        this.displayProductDetail(product);
    },

    // Display product detail
    displayProductDetail(product) {
        const container = document.getElementById('product-detail-content');
        const breadcrumbName = document.getElementById('breadcrumb-product-name');
        
        if (breadcrumbName) {
            breadcrumbName.textContent = product.name;
        }
        
        if (!container) return;
        
        const productHTML = `
            <div class="product-detail-container">
                <div class="product-images">
                    <div class="main-image">
                        <img src="${product.image}" alt="${product.name}" id="main-product-image">
                    </div>
                    <div class="image-gallery">
                        ${product.gallery.map((img, index) => `
                            <img src="${img}" alt="${product.name} view ${index + 1}" 
                                 class="gallery-thumb ${index === 0 ? 'active' : ''}"
                                 onclick="ProductDetail.changeMainImage('${img}', this)">
                        `).join('')}
                    </div>
                </div>
                <div class="product-details">
                    <h1 class="product-title">${product.name}</h1>
                    <p class="product-price">${Utils.formatPrice(product.price)}</p>
                    <p class="product-category">Category: ${Utils.capitalizeFirst(product.category)}</p>
                    <div class="product-description">
                        <h3>Description</h3>
                        <p>${product.description}</p>
                    </div>
                    <div class="product-actions">
                        <div class="quantity-selector">
                            <label for="quantity">Quantity:</label>
                            <select id="quantity">
                                ${Array.from({length: 10}, (_, i) => `<option value="${i + 1}">${i + 1}</option>`).join('')}
                            </select>
                        </div>
                        <button class="add-to-cart-btn-large" data-product-id="${product.id}" ${!product.inStock ? 'disabled' : ''}>
                            ${product.inStock ? 'Add to Cart' : 'Out of Stock'}
                        </button>
                    </div>
                    <div class="product-meta">
                        <p><strong>Availability:</strong> ${product.inStock ? 'In Stock' : 'Out of Stock'}</p>
                        ${product.featured ? '<p><strong>Featured Product</strong></p>' : ''}
                    </div>
                </div>
            </div>
        `;
        
        container.innerHTML = productHTML;
    },

    // Change main product image
    changeMainImage(imageSrc, thumbElement) {
        const mainImage = document.getElementById('main-product-image');
        if (mainImage) {
            mainImage.src = imageSrc;
        }
        
        // Update active thumbnail
        document.querySelectorAll('.gallery-thumb').forEach(thumb => thumb.classList.remove('active'));
        thumbElement.classList.add('active');
    },

    // Show product not found message
    showProductNotFound() {
        const container = document.getElementById('product-detail-content');
        if (container) {
            container.innerHTML = `
                <div class="product-not-found">
                    <h2>Product Not Found</h2>
                    <p>Sorry, the product you're looking for doesn't exist.</p>
                    <a href="products.html" class="btn btn-primary">Browse Products</a>
                </div>
            `;
        }
    },

    // Bind product detail events
    bindProductDetailEvents() {
        document.addEventListener('click', (event) => {
            if (event.target.matches('.add-to-cart-btn-large')) {
                const productId = parseInt(event.target.dataset.productId);
                const quantity = parseInt(document.getElementById('quantity')?.value || 1);
                
                if (productId) {
                    ProductDisplay.showButtonLoading(event.target);
                    
                    setTimeout(() => {
                        Cart.addItem(productId, quantity);
                        ProductDisplay.hideButtonLoading(event.target);
                        ProductDisplay.showAddToCartFeedback(event.target);
                    }, 300);
                }
            }
        });
    }
};

// =============================================================================
// MOBILE MENU
// =============================================================================

const MobileMenu = {
    // Initialize mobile menu
    init() {
        this.bindMobileMenuEvents();
    },

    // Bind mobile menu events
    bindMobileMenuEvents() {
        const toggleButton = document.querySelector('.mobile-menu-toggle');
        const navMenu = document.getElementById('nav-menu');
        
        if (toggleButton && navMenu) {
            toggleButton.addEventListener('click', () => {
                const isOpen = navMenu.classList.contains('active');
                
                if (isOpen) {
                    this.close();
                } else {
                    this.open();
                }
            });
            
            // Close menu when clicking on a link
            navMenu.addEventListener('click', (event) => {
                if (event.target.matches('.nav-link')) {
                    this.close();
                }
            });
            
            // Close menu when clicking outside
            document.addEventListener('click', (event) => {
                if (!event.target.closest('.navbar') && navMenu.classList.contains('active')) {
                    this.close();
                }
            });
        }
    },

    // Open mobile menu
    open() {
        const navMenu = document.getElementById('nav-menu');
        const toggleButton = document.querySelector('.mobile-menu-toggle');
        
        if (navMenu && toggleButton) {
            navMenu.classList.add('active');
            toggleButton.setAttribute('aria-expanded', 'true');
            document.body.style.overflow = 'hidden';
        }
    },

    // Close mobile menu
    close() {
        const navMenu = document.getElementById('nav-menu');
        const toggleButton = document.querySelector('.mobile-menu-toggle');
        
        if (navMenu && toggleButton) {
            navMenu.classList.remove('active');
            toggleButton.setAttribute('aria-expanded', 'false');
            document.body.style.overflow = '';
        }
    }
};
// SEARCH AND FILTER FUNCTIONALITY
// =============================================================================

const SearchAndFilter = {
    // Initialize search and filter
    init() {
        this.bindSearchEvents();
        this.bindFilterEvents();
        this.bindSortEvents();
        this.bindPriceEvents();
        this.bindStockEvents();
        this.bindViewToggle();
    },

    // Bind search events
    bindSearchEvents() {
        const searchInput = document.getElementById('product-search');
        if (searchInput) {
            const debouncedSearch = Utils.debounce(() => {
                ProductDisplay.filterAndDisplayProducts();
            }, 300);
            
            searchInput.addEventListener('input', debouncedSearch);
        }
    },

    // Bind filter events
    bindFilterEvents() {
        const categoryFilter = document.getElementById('category-filter');
        if (categoryFilter) {
            categoryFilter.addEventListener('change', () => {
                ProductDisplay.filterAndDisplayProducts();
            });
        }
    },

    // Bind sorting select
    bindSortEvents() {
        const sortSelect = document.getElementById('sort-select');
        if (sortSelect) {
            sortSelect.addEventListener('change', () => {
                ProductDisplay.filterAndDisplayProducts();
            });
        }
    },

    // Bind price range inputs with debounce
    bindPriceEvents() {
        const minInput = document.getElementById('price-min');
        const maxInput = document.getElementById('price-max');
        const debounced = Utils.debounce(() => {
            ProductDisplay.filterAndDisplayProducts();
        }, 300);
        if (minInput) minInput.addEventListener('input', debounced);
        if (maxInput) maxInput.addEventListener('input', debounced);
    },

    // Bind in-stock-only checkbox
    bindStockEvents() {
        const stockCheckbox = document.getElementById('in-stock-only');
        if (stockCheckbox) {
            stockCheckbox.addEventListener('change', () => {
                ProductDisplay.filterAndDisplayProducts();
            });
        }
    },

    // Bind view toggle buttons (grid/list)
    bindViewToggle() {
        const container = document.getElementById('products-grid');
        const gridBtn = document.getElementById('view-grid');
        const listBtn = document.getElementById('view-list');
        if (!container || !gridBtn || !listBtn) return;

        const apply = (view) => {
            const isList = view === 'list';
            container.classList.toggle('list-view', isList);
            gridBtn.setAttribute('aria-pressed', String(!isList));
            listBtn.setAttribute('aria-pressed', String(isList));
            try { localStorage.setItem('products-view', view); } catch (e) {}
        };

        // apply saved preference or default to grid
        try {
            const saved = localStorage.getItem('products-view');
            if (saved === 'list' || saved === 'grid') apply(saved);
        } catch (e) {}

        gridBtn.addEventListener('click', () => apply('grid'));
        listBtn.addEventListener('click', () => apply('list'));
    }
};

// =============================================================================
// MAIN SLIDER FUNCTIONALITY
// =============================================================================

const MainSlider = {
    current: 0,
    slides: [],
    dots: [],
    timer: null,
    interval: 5000,

    init() {
        this.slides = Array.from(document.querySelectorAll('.slider-slide'));
        this.dotsContainer = document.getElementById('slider-dots');
        this.prevBtn = document.getElementById('slider-prev');
        this.nextBtn = document.getElementById('slider-next');
        if (!this.slides.length) return;

        // Create dots
        this.dotsContainer.innerHTML = '';
        this.dots = this.slides.map((_, i) => {
            const dot = document.createElement('button');
            dot.className = 'slider-dot' + (i === 0 ? ' active' : '');
            dot.setAttribute('aria-label', `Go to slide ${i + 1}`);
            dot.addEventListener('click', () => this.goTo(i));
            this.dotsContainer.appendChild(dot);
            return dot;
        });

        // Button events
        this.prevBtn.addEventListener('click', () => this.prev());
        this.nextBtn.addEventListener('click', () => this.next());

        // Auto-play
        this.startAutoPlay();
        // Pause on hover
        document.querySelector('.main-slider').addEventListener('mouseenter', () => this.stopAutoPlay());
        document.querySelector('.main-slider').addEventListener('mouseleave', () => this.startAutoPlay());
    },
    show(index) {
        this.slides.forEach((slide, i) => {
            slide.classList.toggle('active', i === index);
        });
        this.dots.forEach((dot, i) => {
            dot.classList.toggle('active', i === index);
        });
        this.current = index;
    },
    next() {
        this.show((this.current + 1) % this.slides.length);
    },
    prev() {
        this.show((this.current - 1 + this.slides.length) % this.slides.length);
    },
    goTo(index) {
        this.show(index);
    },
    startAutoPlay() {
        this.stopAutoPlay();
        this.timer = setInterval(() => this.next(), this.interval);
    },
    stopAutoPlay() {
        if (this.timer) clearInterval(this.timer);
        this.timer = null;
    }
};

// =============================================================================
// SECRET ADMIN ACCESS (Ctrl+Shift+A)
// =============================================================================
(function() {
    const SECRET_CODE = 'admin123';
    const ADMIN_FLAG = 'modernstore_admin_access';

    // Listen for Ctrl+Shift+A
    document.addEventListener('keydown', function(e) {
        if (e.ctrlKey && e.shiftKey && (e.key === 'A' || e.key === 'a')) {
            e.preventDefault();
            const code = prompt('Enter admin access code:');
            if (code === SECRET_CODE) {
                sessionStorage.setItem(ADMIN_FLAG, '1');
                window.location.href = 'admin.html';
            } else if (code !== null) {
                alert('Incorrect code.');
            }
        }
    });

    // On admin.html, check for flag
    if (window.location.pathname.endsWith('admin.html')) {
        if (sessionStorage.getItem(ADMIN_FLAG) !== '1') {
            window.location.href = 'home.html';
        }
    }
})();

// =============================================================================
// ADMIN PAGE: Add Product Modal Logic
// =============================================================================
(function() {
    function isAdminPage() {
        return window.location.pathname.endsWith('admin.html');
    }
    if (!isAdminPage()) return;

    const addBtn = document.getElementById('add-product-btn');
    const modal = document.getElementById('add-product-modal');
    const closeBtn = document.getElementById('close-add-product-modal');
    const form = document.getElementById('add-product-form');
    const tbody = document.getElementById('admin-products-tbody');

    function openModal() {
        modal.style.display = 'flex';
        setTimeout(() => {
            document.getElementById('product-name').focus();
        }, 100);
    }
    function closeModal() {
        modal.style.display = 'none';
        form.reset();
    }
    addBtn.addEventListener('click', openModal);
    closeBtn.addEventListener('click', closeModal);
    modal.addEventListener('click', e => {
        if (e.target === modal) closeModal();
    });
    document.addEventListener('keydown', e => {
        if (modal.style.display === 'flex' && e.key === 'Escape') closeModal();
    });

    form.addEventListener('submit', function(e) {
        e.preventDefault();
        // Validate
        const name = form.name.value.trim();
        const price = parseFloat(form.price.value);
        const category = form.category.value;
        const image = form.image.value.trim();
        const description = form.description.value.trim();
        const featured = form.featured.checked;
        const inStock = form.inStock.checked;
        if (!name || isNaN(price) || !category || !image || !description) {
            alert('Please fill in all fields.');
            return;
        }
        // Add to ProductCatalog (in-memory only)
        const newId = Math.max(...ProductCatalog.products.map(p => p.id)) + 1;
        const newProduct = {
            id: newId,
            name,
            price,
            category,
            image,
            description,
            featured,
            inStock,
            gallery: [image]
        };
        ProductCatalog.products.push(newProduct);
        // Update table
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${newProduct.id}</td>
            <td>${newProduct.name}</td>
            <td>$${newProduct.price.toFixed(2)}</td>
            <td>${newProduct.category}</td>
            <td>${newProduct.featured ? 'Yes' : 'No'}</td>
            <td>—</td>
        `;
        tbody.appendChild(row);
        closeModal();
        alert('Product added (in-memory only, will reset on reload).');
    });
})();

// =============================================================================
// APPLICATION INITIALIZATION
// =============================================================================

const ModernStoreApp = {
    // Initialize the application
    init() {
        console.log('ModernStore Multi-Page App initializing...');
        
        // Initialize core modules
        Cart.init();
        ProductDisplay.init();
        MobileMenu.init();
        this.markActiveNav();
        SearchAndFilter.init();
        
        // Initialize page-specific functionality
        this.initPageSpecific();
        
        console.log('ModernStore initialized successfully');
    },

    // Initialize page-specific functionality
    initPageSpecific() {
        const currentPage = this.getCurrentPage();
        
        switch (currentPage) {
            case 'home':
            case 'index':
                ProductDisplay.displayFeaturedProducts();
                MainSlider.init();
                break;
                
            case 'products':
                ProductDisplay.displayAllProducts();
                break;
                
            case 'product-detail':
                ProductDetail.init();
                break;
                
            case 'cart':
                Cart.displayCartItems();
                break;
                
            case 'checkout':
                // Checkout functionality would be initialized here
                break;
                
            case 'admin':
                // Admin functionality would be initialized here
                break;
        }
    },

    // Get current page name from URL
    getCurrentPage() {
        const path = window.location.pathname;
        const filename = path.split('/').pop();
        
        if (filename === '' || filename === 'index.html') {
            return 'index';
        }
        
        return filename.replace('.html', '');
    },

    // Mark active navigation link and set aria-current
    markActiveNav() {
        const currentPage = this.getCurrentPage();
        const navLinks = document.querySelectorAll('.nav-link');

        if (!navLinks.length) return;

        navLinks.forEach(link => {
            link.classList.remove('active');
            link.removeAttribute('aria-current');
        });

        let matchers = [];
        if (currentPage === 'product-detail') {
            matchers = ['products.html'];
        } else if (currentPage === 'index' || currentPage === 'home') {
            matchers = ['home.html', 'index.html'];
        } else {
            matchers = [`${currentPage}.html`];
        }

        navLinks.forEach(link => {
            const href = link.getAttribute('href') || '';
            if (matchers.some(m => href.endsWith(m))) {
                link.classList.add('active');
                link.setAttribute('aria-current', 'page');
            }
        });
    }
};

// =============================================================================
// INITIALIZE APPLICATION WHEN DOM IS READY
// =============================================================================

document.addEventListener('DOMContentLoaded', () => {
    ModernStoreApp.init();
});

// Export for testing or external use
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        ProductCatalog,
        Cart,
        ProductDisplay,
        ProductDetail,
        Utils,
        ModernStoreApp
    };
} 