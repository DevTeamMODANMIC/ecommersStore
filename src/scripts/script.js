/**
 * ModernStore - Static eCommerce Website
 * JavaScript Foundation and Navigation System
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
            name: "LED Desk Lamp",
            price: 59.99,
            image: "https://via.placeholder.com/400x300/ef4444/ffffff?text=Desk+Lamp",
            gallery: [
                "https://via.placeholder.com/400x300/ef4444/ffffff?text=Desk+Lamp",
                "https://via.placeholder.com/400x300/dc2626/ffffff?text=Lamp+Adjustable",
                "https://via.placeholder.com/400x300/b91c1c/ffffff?text=Lamp+Controls"
            ],
            description: "Modern LED desk lamp with adjustable brightness, color temperature control, and USB charging port. Perfect for work and study.",
            category: "home",
            featured: true,
            inStock: true
        },
        {
            id: 8,
            name: "Wireless Charging Pad",
            price: 39.99,
            image: "https://via.placeholder.com/400x300/06b6d4/ffffff?text=Charging+Pad",
            gallery: [
                "https://via.placeholder.com/400x300/06b6d4/ffffff?text=Charging+Pad",
                "https://via.placeholder.com/400x300/0891b2/ffffff?text=Pad+In+Use",
                "https://via.placeholder.com/400x300/0e7490/ffffff?text=Pad+Detail"
            ],
            description: "Fast wireless charging pad compatible with all Qi-enabled devices. Sleek design with LED indicator and non-slip surface.",
            category: "electronics",
            featured: false,
            inStock: true
        },
        {
            id: 9,
            name: "Yoga Mat",
            price: 34.99,
            image: "https://via.placeholder.com/400x300/84cc16/ffffff?text=Yoga+Mat",
            gallery: [
                "https://via.placeholder.com/400x300/84cc16/ffffff?text=Yoga+Mat",
                "https://via.placeholder.com/400x300/65a30d/ffffff?text=Mat+Texture",
                "https://via.placeholder.com/400x300/4d7c0f/ffffff?text=Mat+Rolled"
            ],
            description: "Premium yoga mat with superior grip and cushioning. Made from eco-friendly materials. Includes carrying strap for easy transport.",
            category: "home",
            featured: false,
            inStock: true
        },
        {
            id: 10,
            name: "Stainless Steel Water Bottle",
            price: 24.99,
            image: "https://via.placeholder.com/400x300/f97316/ffffff?text=Water+Bottle",
            gallery: [
                "https://via.placeholder.com/400x300/f97316/ffffff?text=Water+Bottle",
                "https://via.placeholder.com/400x300/ea580c/ffffff?text=Bottle+Cap",
                "https://via.placeholder.com/400x300/c2410c/ffffff?text=Bottle+Size"
            ],
            description: "Insulated stainless steel water bottle that keeps drinks cold for 24 hours or hot for 12 hours. BPA-free and dishwasher safe.",
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
        if (!category || category === '') {
            return this.products;
        }
        return this.products.filter(product => product.category === category);
    },

    // Search products by name or description
    searchProducts(query) {
        if (!query || query.trim() === '') {
            return this.products;
        }
        
        const searchTerm = query.toLowerCase().trim();
        return this.products.filter(product => 
            product.name.toLowerCase().includes(searchTerm) ||
            product.description.toLowerCase().includes(searchTerm) ||
            product.category.toLowerCase().includes(searchTerm)
        );
    },

    // Filter products by multiple criteria
    filterProducts(filters = {}) {
        let filteredProducts = this.products;

        // Filter by category
        if (filters.category && filters.category !== '') {
            filteredProducts = filteredProducts.filter(product => 
                product.category === filters.category
            );
        }

        // Filter by search query
        if (filters.search && filters.search.trim() !== '') {
            const searchTerm = filters.search.toLowerCase().trim();
            filteredProducts = filteredProducts.filter(product => 
                product.name.toLowerCase().includes(searchTerm) ||
                product.description.toLowerCase().includes(searchTerm)
            );
        }

        // Filter by price range
        if (filters.minPrice !== undefined) {
            filteredProducts = filteredProducts.filter(product => 
                product.price >= filters.minPrice
            );
        }

        if (filters.maxPrice !== undefined) {
            filteredProducts = filteredProducts.filter(product => 
                product.price <= filters.maxPrice
            );
        }

        // Filter by availability
        if (filters.inStock !== undefined) {
            filteredProducts = filteredProducts.filter(product => 
                product.inStock === filters.inStock
            );
        }

        return filteredProducts;
    },

    // Get unique categories
    getCategories() {
        const categories = [...new Set(this.products.map(product => product.category))];
        return categories.sort();
    }
};

// =============================================================================
// PERFORMANCE OPTIMIZATION UTILITIES
// =============================================================================

const PerformanceOptimizer = {
    // Image lazy loading with intersection observer
    imageObserver: null,
    
    // Initialize performance optimizations
    init() {
        this.initLazyLoading();
        this.optimizeLocalStorage();
        this.preloadCriticalImages();
    },

    // Initialize lazy loading for images
    initLazyLoading() {
        if ('IntersectionObserver' in window) {
            this.imageObserver = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        const img = entry.target;
                        this.loadImage(img);
                        this.imageObserver.unobserve(img);
                    }
                });
            }, {
                rootMargin: '50px 0px',
                threshold: 0.01
            });
        }
    },

    // Load image with error handling and loading states
    loadImage(img) {
        const placeholder = img.closest('.image-container')?.querySelector('.image-placeholder');
        const loadingSpinner = img.closest('.image-container')?.querySelector('.image-loading');
        
        // Show loading state
        if (loadingSpinner) {
            loadingSpinner.style.display = 'flex';
        }

        // Create new image to preload
        const imageLoader = new Image();
        
        imageLoader.onload = () => {
            img.src = img.dataset.src || img.src;
            img.classList.add('loaded');
            
            // Hide loading state
            if (loadingSpinner) {
                loadingSpinner.style.display = 'none';
            }
            if (placeholder) {
                placeholder.style.display = 'none';
            }
        };

        imageLoader.onerror = () => {
            // Use fallback image
            img.src = 'https://via.placeholder.com/400x300/e2e8f0/64748b?text=Image+Not+Found';
            img.classList.add('error');
            
            // Hide loading state
            if (loadingSpinner) {
                loadingSpinner.style.display = 'none';
            }
        };

        imageLoader.src = img.dataset.src || img.src;
    },

    // Observe image for lazy loading
    observeImage(img) {
        if (this.imageObserver && img) {
            this.imageObserver.observe(img);
        } else {
            // Fallback for browsers without IntersectionObserver
            this.loadImage(img);
        }
    },

    // Preload critical images (hero, featured products)
    preloadCriticalImages() {
        const criticalImages = [
            'https://via.placeholder.com/1200x600/2563eb/ffffff?text=Hero+Background'
        ];

        criticalImages.forEach(src => {
            const link = document.createElement('link');
            link.rel = 'preload';
            link.as = 'image';
            link.href = src;
            document.head.appendChild(link);
        });
    },

    // Optimize localStorage operations
    optimizeLocalStorage() {
        // Debounce localStorage writes
        this.debouncedSave = this.debounce((key, data) => {
            try {
                localStorage.setItem(key, JSON.stringify(data));
            } catch (error) {
                console.warn('localStorage save failed:', error);
                this.handleStorageError(error);
            }
        }, 300);
    },

    // Handle localStorage errors gracefully
    handleStorageError(error) {
        if (error.name === 'QuotaExceededError') {
            // Clear old data or show user notification
            this.clearOldStorageData();
            NotificationManager.warning('Storage limit reached. Some data has been cleared.');
        } else if (error.name === 'SecurityError') {
            NotificationManager.error('Storage access denied. Cart data may not persist.');
        } else {
            NotificationManager.warning('Storage error occurred. Some features may be limited.');
        }
    },

    // Clear old localStorage data
    clearOldStorageData() {
        const keys = Object.keys(localStorage);
        keys.forEach(key => {
            if (key.startsWith('modernstore_old_') || key.includes('_backup_')) {
                localStorage.removeItem(key);
            }
        });
    },

    // Debounce utility function
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

    // Throttle utility function
    throttle(func, limit) {
        let inThrottle;
        return function() {
            const args = arguments;
            const context = this;
            if (!inThrottle) {
                func.apply(context, args);
                inThrottle = true;
                setTimeout(() => inThrottle = false, limit);
            }
        };
    }
};

// =============================================================================
// NOTIFICATION SYSTEM
// =============================================================================

const NotificationManager = {
    // Show notification with different types
    show(message, type = 'info', duration = 3000) {
        const notification = document.createElement('div');
        notification.className = `notification notification-${type}`;
        
        const icon = this.getIcon(type);
        notification.innerHTML = `
            <div class="notification-content">
                <span class="notification-icon">${icon}</span>
                <span class="notification-message">${message}</span>
                <button class="notification-close" aria-label="Close notification">&times;</button>
            </div>
        `;

        // Add to container or create one
        let container = document.querySelector('.notification-container');
        if (!container) {
            container = document.createElement('div');
            container.className = 'notification-container';
            document.body.appendChild(container);
        }

        container.appendChild(notification);

        // Show notification
        setTimeout(() => notification.classList.add('show'), 10);

        // Auto-hide after duration (but not for error messages)
        let hideTimeout;
        if (type !== 'error') {
            hideTimeout = setTimeout(() => {
                this.hide(notification);
            }, duration);
        }

        // Manual close
        const closeBtn = notification.querySelector('.notification-close');
        closeBtn.addEventListener('click', () => {
            if (hideTimeout) clearTimeout(hideTimeout);
            this.hide(notification);
        });

        return notification;
    },

    // Hide notification
    hide(notification) {
        notification.classList.remove('show');
        setTimeout(() => {
            if (notification.parentNode) {
                notification.parentNode.removeChild(notification);
            }
        }, 300);
    },

    // Get icon for notification type
    getIcon(type) {
        const icons = {
            success: '✓',
            error: '✕',
            warning: '⚠',
            info: 'ℹ'
        };
        return icons[type] || icons.info;
    },

    // Convenience methods
    success(message, duration) {
        return this.show(message, 'success', duration);
    },

    error(message, duration) {
        return this.show(message, 'error', duration);
    },

    warning(message, duration) {
        return this.show(message, 'warning', duration);
    },

    info(message, duration) {
        return this.show(message, 'info', duration);
    }
};

// =============================================================================
// LOADING STATE MANAGER
// =============================================================================

const LoadingManager = {
    // Show loading state for a container
    showLoading(container, message = 'Loading...') {
        if (!container) return;

        const loadingHTML = `
            <div class="loading-state" role="status" aria-live="polite">
                <div class="loading-spinner" aria-hidden="true"></div>
                <p class="loading-message">${message}</p>
            </div>
        `;

        container.innerHTML = loadingHTML;
    },

    // Show loading overlay for specific operations
    showLoadingOverlay(container, message = 'Processing...') {
        if (!container) return;

        const overlay = document.createElement('div');
        overlay.className = 'loading-overlay';
        overlay.innerHTML = `
            <div class="loading-content">
                <div class="loading-spinner" aria-hidden="true"></div>
                <p class="loading-message">${message}</p>
            </div>
        `;

        container.style.position = 'relative';
        container.appendChild(overlay);

        return overlay;
    },

    // Hide loading overlay
    hideLoadingOverlay(container) {
        if (!container) return;
        
        const overlay = container.querySelector('.loading-overlay');
        if (overlay) {
            overlay.remove();
        }
    },

    // Show skeleton loading for product cards
    showProductSkeleton(container, count = 6) {
        if (!container) return;

        const skeletons = Array.from({ length: count }, () => `
            <div class="product-skeleton" aria-hidden="true">
                <div class="skeleton-image"></div>
                <div class="skeleton-content">
                    <div class="skeleton-title"></div>
                    <div class="skeleton-price"></div>
                    <div class="skeleton-description"></div>
                    <div class="skeleton-button"></div>
                </div>
            </div>
        `).join('');

        container.innerHTML = skeletons;
    },

    // Show cart loading state
    showCartLoading(container) {
        this.showLoading(container, 'Updating cart...');
    },

    // Show checkout loading state
    showCheckoutLoading(button) {
        if (!button) return;

        const originalText = button.textContent;
        button.disabled = true;
        button.innerHTML = `
            <span class="loading-spinner-small" aria-hidden="true"></span>
            Processing...
        `;

        return () => {
            button.disabled = false;
            button.textContent = originalText;
        };
    }
};

// =============================================================================
// PRODUCT RENDERING SYSTEM
// =============================================================================

const ProductRenderer = {
    // Render product card for grid view with lazy loading
    renderProductCard(product) {
        return `
            <article class="product-card" data-product-id="${product.id}" role="button" tabindex="0" 
                     aria-label="View details for ${product.name}, priced at ${Utils.formatPrice(product.price)}">
                <div class="image-container">
                    <div class="image-loading" style="display: none;">
                        <div class="loading-spinner-small"></div>
                    </div>
                    <img data-src="${product.image}" 
                         src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='300'%3E%3Crect width='100%25' height='100%25' fill='%23f1f5f9'/%3E%3C/svg%3E"
                         alt="${product.name}" 
                         class="product-image lazy-image"
                         loading="lazy">
                    <div class="image-placeholder">
                        <div class="placeholder-icon">📦</div>
                    </div>
                </div>
                <div class="product-info">
                    <h3 class="product-name">${product.name}</h3>
                    <p class="product-price" aria-label="Price: ${Utils.formatPrice(product.price)}">${Utils.formatPrice(product.price)}</p>
                    <p class="product-description">${this.truncateText(product.description, 100)}</p>
                    <button class="btn btn-primary add-to-cart-btn" 
                            data-product-id="${product.id}"
                            aria-label="Add ${product.name} to cart for ${Utils.formatPrice(product.price)}">
                        <span class="btn-text">Add to Cart</span>
                        <span class="btn-loading" style="display: none;">
                            <span class="loading-spinner-small"></span>
                            Adding...
                        </span>
                    </button>
                </div>
            </article>
        `;
    },

    // Render featured product card with lazy loading
    renderFeaturedProductCard(product) {
        return `
            <article class="product-card featured-product" data-product-id="${product.id}" 
                     role="button" tabindex="0" aria-label="Featured product: ${product.name}, priced at ${Utils.formatPrice(product.price)}">
                <div class="image-container">
                    <div class="image-loading" style="display: none;">
                        <div class="loading-spinner-small"></div>
                    </div>
                    <img data-src="${product.image}" 
                         src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='300'%3E%3Crect width='100%25' height='100%25' fill='%23f1f5f9'/%3E%3C/svg%3E"
                         alt="${product.name}" 
                         class="product-image lazy-image"
                         loading="lazy">
                    <div class="image-placeholder">
                        <div class="placeholder-icon">⭐</div>
                    </div>
                </div>
                <div class="product-info">
                    <h3 class="product-name">${product.name}</h3>
                    <p class="product-price" aria-label="Price: ${Utils.formatPrice(product.price)}">${Utils.formatPrice(product.price)}</p>
                    <button class="btn btn-primary add-to-cart-btn" 
                            data-product-id="${product.id}"
                            aria-label="Add featured product ${product.name} to cart for ${Utils.formatPrice(product.price)}">
                        <span class="btn-text">Add to Cart</span>
                        <span class="btn-loading" style="display: none;">
                            <span class="loading-spinner-small"></span>
                            Adding...
                        </span>
                    </button>
                </div>
            </article>
        `;
    },

    // Render product detail view with optimized image loading
    renderProductDetail(product) {
        const galleryImages = product.gallery.map((image, index) => `
            <div class="gallery-image-container ${index === 0 ? 'active' : ''}" data-index="${index}">
                <div class="image-loading" style="display: ${index === 0 ? 'flex' : 'none'};">
                    <div class="loading-spinner"></div>
                </div>
                <img ${index === 0 ? 'src' : 'data-src'}="${image}" 
                     alt="${product.name} - Image ${index + 1}" 
                     class="gallery-image ${index === 0 ? 'active' : 'lazy-image'}"
                     data-index="${index}"
                     loading="${index === 0 ? 'eager' : 'lazy'}">
            </div>
        `).join('');

        const thumbnails = product.gallery.map((image, index) => `
            <button class="gallery-thumbnail ${index === 0 ? 'active' : ''}" 
                    data-index="${index}"
                    aria-label="View image ${index + 1}">
                <div class="thumbnail-loading" style="display: none;">
                    <div class="loading-spinner-small"></div>
                </div>
                <img ${index < 3 ? 'src' : 'data-src'}="${image}" 
                     alt="${product.name} - Thumbnail ${index + 1}"
                     class="${index >= 3 ? 'lazy-image' : ''}"
                     loading="lazy">
            </button>
        `).join('');

        return `
            <div class="product-detail-layout">
                <div class="product-gallery">
                    <div class="main-image-container">
                        ${galleryImages}
                    </div>
                    <div class="thumbnail-container">
                        ${thumbnails}
                    </div>
                </div>
                <div class="product-details">
                    <h2 id="product-detail-title" class="product-title">${product.name}</h2>
                    <p class="product-price-large">${Utils.formatPrice(product.price)}</p>
                    <div class="product-description-full">
                        <p>${product.description}</p>
                    </div>
                    <div class="product-meta">
                        <p><strong>Category:</strong> ${this.capitalizeFirst(product.category)}</p>
                        <p><strong>Availability:</strong> 
                           <span class="${product.inStock ? 'text-success' : 'text-error'}">
                               ${product.inStock ? 'In Stock' : 'Out of Stock'}
                           </span>
                        </p>
                    </div>
                    <div class="product-actions">
                        <div class="quantity-selector">
                            <label for="quantity-input">Quantity:</label>
                            <div class="quantity-controls">
                                <button class="quantity-btn" id="quantity-decrease" aria-label="Decrease quantity">-</button>
                                <input type="number" id="quantity-input" value="1" min="1" max="10" aria-label="Quantity">
                                <button class="quantity-btn" id="quantity-increase" aria-label="Increase quantity">+</button>
                            </div>
                        </div>
                        <button class="btn btn-primary btn-lg add-to-cart-detail" 
                                data-product-id="${product.id}"
                                ${!product.inStock ? 'disabled' : ''}
                                aria-label="Add ${product.name} to cart">
                            ${product.inStock ? 'Add to Cart' : 'Out of Stock'}
                        </button>
                    </div>
                </div>
            </div>
        `;
    },

    // Render cart item with optimized image loading
    renderCartItem(product, quantity) {
        const subtotal = product.price * quantity;
        return `
            <article class="cart-item" data-product-id="${product.id}" role="group" 
                     aria-labelledby="cart-item-name-${product.id}" 
                     aria-describedby="cart-item-details-${product.id}">
                <div class="cart-item-image">
                    <div class="image-loading" style="display: none;">
                        <div class="loading-spinner-small"></div>
                    </div>
                    <img data-src="${product.image}" 
                         src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='100'%3E%3Crect width='100%25' height='100%25' fill='%23f1f5f9'/%3E%3C/svg%3E"
                         alt="${product.name}"
                         class="lazy-image"
                         loading="lazy">
                </div>
                <div class="cart-item-details">
                    <h4 id="cart-item-name-${product.id}" class="cart-item-name">${product.name}</h4>
                    <p class="cart-item-price" aria-label="Unit price: ${Utils.formatPrice(product.price)}">${Utils.formatPrice(product.price)} each</p>
                    <p class="cart-item-category">${this.capitalizeFirst(product.category)}</p>
                </div>
                <div class="cart-item-quantity" role="group" aria-labelledby="quantity-label-${product.id}">
                    <label id="quantity-label-${product.id}" class="quantity-label">Quantity:</label>
                    <div class="quantity-controls">
                        <button class="quantity-btn cart-quantity-decrease" 
                                data-product-id="${product.id}"
                                aria-label="Decrease quantity of ${product.name}"
                                ${quantity <= 1 ? 'disabled aria-disabled="true"' : ''}>-</button>
                        <span class="quantity-display" aria-label="Current quantity: ${quantity}" role="status">${quantity}</span>
                        <button class="quantity-btn cart-quantity-increase" 
                                data-product-id="${product.id}"
                                aria-label="Increase quantity of ${product.name}"
                                ${quantity >= 10 ? 'disabled aria-disabled="true"' : ''}>+</button>
                    </div>
                </div>
                <div class="cart-item-subtotal">
                    <label class="subtotal-label">Subtotal:</label>
                    <p class="subtotal-amount" aria-label="Subtotal: ${Utils.formatPrice(subtotal)}">${Utils.formatPrice(subtotal)}</p>
                </div>
                <div class="cart-item-actions">
                    <button class="btn btn-sm btn-danger remove-item-btn" 
                            data-product-id="${product.id}"
                            data-product-name="${product.name}"
                            aria-label="Remove ${product.name} from cart"
                            aria-describedby="cart-item-details-${product.id}">
                        Remove
                    </button>
                </div>
                <div id="cart-item-details-${product.id}" class="sr-only">
                    ${product.name}, ${quantity} items at ${Utils.formatPrice(product.price)} each, subtotal ${Utils.formatPrice(subtotal)}
                </div>
            </article>
        `;
    },

    // Render admin table row
    renderAdminProductRow(product) {
        return `
            <tr data-product-id="${product.id}">
                <td>${product.id}</td>
                <td>${product.name}</td>
                <td>${Utils.formatPrice(product.price)}</td>
                <td>${this.capitalizeFirst(product.category)}</td>
                <td>
                    <span class="${product.featured ? 'text-success' : 'text-secondary'}">
                        ${product.featured ? 'Yes' : 'No'}
                    </span>
                </td>
                <td>
                    <div class="admin-actions">
                        <button class="admin-button btn-sm edit-product-btn" 
                                data-product-id="${product.id}"
                                aria-label="Edit ${product.name}">
                            Edit
                        </button>
                        <button class="admin-button btn-sm btn-danger delete-product-btn" 
                                data-product-id="${product.id}"
                                aria-label="Delete ${product.name}">
                            Delete
                        </button>
                    </div>
                </td>
            </tr>
        `;
    },

    // Utility function to truncate text
    truncateText(text, maxLength) {
        if (text.length <= maxLength) {
            return text;
        }
        return text.substring(0, maxLength).trim() + '...';
    },

    // Utility function to capitalize first letter
    capitalizeFirst(str) {
        return str.charAt(0).toUpperCase() + str.slice(1);
    }
};

// =============================================================================
// PRODUCT DISPLAY MODULE - Handles product rendering and display
// =============================================================================

const ProductDisplay = {
    // Initialize product display functionality
    init() {
        this.bindProductEvents();
    },

    // Bind events for product interactions
    bindProductEvents() {
        // Handle product card clicks for navigation to detail page
        document.addEventListener('click', (event) => {
            const productCard = event.target.closest('.product-card');
            if (productCard && !event.target.closest('.add-to-cart-btn')) {
                const productId = productCard.dataset.productId;
                if (productId) {
                    Router.navigateTo('product-detail', productId);
                }
            }
        });

        // Handle keyboard navigation for product cards
        document.addEventListener('keydown', (event) => {
            if (event.key === 'Enter' || event.key === ' ') {
                const productCard = event.target.closest('.product-card');
                if (productCard && !event.target.closest('.add-to-cart-btn')) {
                    event.preventDefault();
                    const productId = productCard.dataset.productId;
                    if (productId) {
                        Router.navigateTo('product-detail', productId);
                    }
                }
            }
        });

        // Handle Add to Cart button clicks with loading states
        document.addEventListener('click', (event) => {
            if (event.target.matches('.add-to-cart-btn') || event.target.closest('.add-to-cart-btn')) {
                event.stopPropagation(); // Prevent navigation to product detail
                const button = event.target.closest('.add-to-cart-btn');
                const productId = button.dataset.productId;
                
                if (productId && !button.disabled) {
                    this.showButtonLoading(button);
                    
                    // Simulate processing time
                    setTimeout(() => {
                        Cart.addItem(parseInt(productId), 1);
                        this.hideButtonLoading(button);
                        this.showAddToCartFeedback(button);
                    }, 300);
                }
            }
        });
    },

    // Display featured products on homepage with loading states
    displayFeaturedProducts() {
        const featuredContainer = document.getElementById('featured-products');
        if (!featuredContainer) return;

        // Show skeleton loading
        LoadingManager.showProductSkeleton(featuredContainer, 4);

        // Simulate loading delay for better UX
        setTimeout(() => {
            const featuredProducts = ProductCatalog.getFeaturedProducts();
            
            if (featuredProducts.length === 0) {
                featuredContainer.innerHTML = '<p class="no-products">No featured products available.</p>';
                return;
            }

            const productsHTML = featuredProducts.map(product => 
                ProductRenderer.renderFeaturedProductCard(product)
            ).join('');

            featuredContainer.innerHTML = productsHTML;

            // Initialize lazy loading for images
            this.initLazyImagesInContainer(featuredContainer);

            // Add staggered animation delay for featured products
            const productCards = featuredContainer.querySelectorAll('.featured-product');
            productCards.forEach((card, index) => {
                card.style.animationDelay = `${index * 0.1}s`;
            });
        }, 500);
    },

    // Display all products on products page with loading states
    displayAllProducts() {
        const productsContainer = document.getElementById('products-grid');
        if (!productsContainer) return;

        // Show skeleton loading
        LoadingManager.showProductSkeleton(productsContainer, 6);

        // Simulate loading delay for better UX
        setTimeout(() => {
            const products = ProductCatalog.getAllProducts();
            
            if (products.length === 0) {
                productsContainer.innerHTML = '<p class="no-products">No products available.</p>';
                return;
            }

            const productsHTML = products.map(product => 
                ProductRenderer.renderProductCard(product)
            ).join('');

            productsContainer.innerHTML = productsHTML;

            // Initialize lazy loading for images
            this.initLazyImagesInContainer(productsContainer);
        }, 300);
    },

    // Display product detail page with optimized loading
    displayProductDetail(productId) {
        const detailContainer = document.getElementById('product-detail-content');
        if (!detailContainer) return;

        // Show loading state
        LoadingManager.showLoading(detailContainer, 'Loading product details...');

        // Simulate loading delay for better UX
        setTimeout(() => {
            const product = ProductCatalog.getProductById(productId);
            
            if (!product) {
                detailContainer.innerHTML = `
                    <div class="product-not-found">
                        <h2>Product Not Found</h2>
                        <p>The product you're looking for doesn't exist.</p>
                        <a href="#products" class="btn btn-primary">Browse All Products</a>
                    </div>
                `;
                this.updateBreadcrumb('Product Not Found');
                return;
            }

            // Update breadcrumb with product name
            this.updateBreadcrumb(product.name);

            // Render product detail
            detailContainer.innerHTML = ProductRenderer.renderProductDetail(product);
            
            // Initialize lazy loading for gallery images
            this.initLazyImagesInContainer(detailContainer);
            
            // Initialize product detail functionality
            this.initProductDetailInteractions();

            // Focus on the main heading for accessibility
            const productTitle = document.getElementById('product-detail-title');
            if (productTitle) {
                productTitle.focus();
            }
        }, 300);
    },

    // Update breadcrumb navigation
    updateBreadcrumb(productName) {
        const breadcrumbCurrent = document.getElementById('breadcrumb-product-name');
        if (breadcrumbCurrent) {
            breadcrumbCurrent.textContent = productName;
        }
    },

    // Initialize product detail page interactions
    initProductDetailInteractions() {
        // Gallery thumbnail navigation
        const thumbnails = document.querySelectorAll('.gallery-thumbnail');
        const galleryImages = document.querySelectorAll('.gallery-image');

        thumbnails.forEach((thumbnail, index) => {
            // Click handler
            thumbnail.addEventListener('click', () => {
                this.switchGalleryImage(index, thumbnails, galleryImages);
            });

            // Keyboard navigation
            thumbnail.addEventListener('keydown', (event) => {
                if (event.key === 'Enter' || event.key === ' ') {
                    event.preventDefault();
                    this.switchGalleryImage(index, thumbnails, galleryImages);
                } else if (event.key === 'ArrowRight') {
                    event.preventDefault();
                    const nextIndex = (index + 1) % thumbnails.length;
                    thumbnails[nextIndex].focus();
                } else if (event.key === 'ArrowLeft') {
                    event.preventDefault();
                    const prevIndex = (index - 1 + thumbnails.length) % thumbnails.length;
                    thumbnails[prevIndex].focus();
                }
            });
        });

        // Initialize quantity controls
        this.initQuantityControls();
    },

    // Switch gallery image with smooth transition
    switchGalleryImage(index, thumbnails, galleryImages) {
        // Update active thumbnail
        thumbnails.forEach(t => t.classList.remove('active'));
        thumbnails[index].classList.add('active');
        
        // Update active gallery image with fade effect
        galleryImages.forEach(img => img.classList.remove('active'));
        if (galleryImages[index]) {
            galleryImages[index].classList.add('active');
        }

        // Update aria-label for screen readers
        const mainImageContainer = document.querySelector('.main-image-container');
        if (mainImageContainer && galleryImages[index]) {
            const altText = galleryImages[index].alt;
            mainImageContainer.setAttribute('aria-label', `Currently viewing: ${altText}`);
        }
    },

    // Initialize quantity controls with enhanced functionality
    initQuantityControls() {
        const quantityInput = document.getElementById('quantity-input');
        const decreaseBtn = document.getElementById('quantity-decrease');
        const increaseBtn = document.getElementById('quantity-increase');

        if (!decreaseBtn || !increaseBtn || !quantityInput) return;

        // Decrease quantity
        decreaseBtn.addEventListener('click', () => {
            const currentValue = parseInt(quantityInput.value);
            const minValue = parseInt(quantityInput.min) || 1;
            if (currentValue > minValue) {
                quantityInput.value = currentValue - 1;
                this.updateQuantityDisplay(quantityInput.value);
            }
        });

        // Increase quantity
        increaseBtn.addEventListener('click', () => {
            const currentValue = parseInt(quantityInput.value);
            const maxValue = parseInt(quantityInput.max) || 10;
            if (currentValue < maxValue) {
                quantityInput.value = currentValue + 1;
                this.updateQuantityDisplay(quantityInput.value);
            }
        });

        // Handle direct input changes
        quantityInput.addEventListener('change', () => {
            const value = parseInt(quantityInput.value) || 1;
            const min = parseInt(quantityInput.min) || 1;
            const max = parseInt(quantityInput.max) || 10;
            
            const clampedValue = Math.max(min, Math.min(max, value));
            quantityInput.value = clampedValue;
            this.updateQuantityDisplay(clampedValue);
        });

        // Keyboard navigation for quantity input
        quantityInput.addEventListener('keydown', (event) => {
            if (event.key === 'ArrowUp') {
                event.preventDefault();
                increaseBtn.click();
            } else if (event.key === 'ArrowDown') {
                event.preventDefault();
                decreaseBtn.click();
            }
        });

        // Initialize Add to Cart functionality
        this.initAddToCartButton();
    },

    // Update quantity display and button states
    updateQuantityDisplay(quantity) {
        const decreaseBtn = document.getElementById('quantity-decrease');
        const increaseBtn = document.getElementById('quantity-increase');
        const quantityInput = document.getElementById('quantity-input');

        if (!decreaseBtn || !increaseBtn || !quantityInput) return;

        const min = parseInt(quantityInput.min) || 1;
        const max = parseInt(quantityInput.max) || 10;

        // Update button states
        decreaseBtn.disabled = quantity <= min;
        increaseBtn.disabled = quantity >= max;

        // Update aria-labels
        decreaseBtn.setAttribute('aria-label', `Decrease quantity to ${Math.max(min, quantity - 1)}`);
        increaseBtn.setAttribute('aria-label', `Increase quantity to ${Math.min(max, quantity + 1)}`);
    },

    // Initialize Add to Cart button functionality
    initAddToCartButton() {
        const addToCartBtn = document.querySelector('.add-to-cart-detail');
        if (!addToCartBtn) return;

        addToCartBtn.addEventListener('click', () => {
            const productId = parseInt(addToCartBtn.dataset.productId);
            const quantityInput = document.getElementById('quantity-input');
            const quantity = parseInt(quantityInput?.value || 1);
            
            // Add item to cart
            Cart.addItem(productId, quantity);
            
            // Show visual feedback
            this.showAddToCartFeedback(addToCartBtn);
            
            // Animate cart count
            this.animateCartCount();
            
            // Announce to screen readers
            this.announceCartAddition(productId, quantity);
        });
    },

    // Announce cart addition for accessibility
    announceCartAddition(productId, quantity) {
        const product = ProductCatalog.getProductById(productId);
        if (!product) return;

        const announcement = `Added ${quantity} ${product.name} to cart`;
        
        // Create temporary announcement element
        const announcer = document.createElement('div');
        announcer.setAttribute('aria-live', 'polite');
        announcer.setAttribute('aria-atomic', 'true');
        announcer.className = 'sr-only';
        announcer.textContent = announcement;
        
        document.body.appendChild(announcer);
        
        // Remove after announcement
        setTimeout(() => {
            document.body.removeChild(announcer);
        }, 1000);
    },

    // Animate cart count when item is added
    animateCartCount() {
        const cartCount = document.querySelector('.cart-count');
        if (cartCount) {
            cartCount.classList.add('cart-count-pulse');
            setTimeout(() => {
                cartCount.classList.remove('cart-count-pulse');
            }, 600);
        }

        // Add to cart from detail page
        const addToCartBtn = document.querySelector('.add-to-cart-detail');
        if (addToCartBtn) {
            addToCartBtn.addEventListener('click', () => {
                const productId = parseInt(addToCartBtn.dataset.productId);
                const quantity = parseInt(quantityInput?.value || 1);
                
                Cart.addItem(productId, quantity);
                this.showAddToCartFeedback(addToCartBtn);
            });
        }
    },

    // Initialize lazy loading for images in a container
    initLazyImagesInContainer(container) {
        const lazyImages = container.querySelectorAll('.lazy-image');
        lazyImages.forEach(img => {
            PerformanceOptimizer.observeImage(img);
        });
    },

    // Show button loading state
    showButtonLoading(button) {
        if (!button) return;
        
        button.disabled = true;
        const btnText = button.querySelector('.btn-text');
        const btnLoading = button.querySelector('.btn-loading');
        
        if (btnText && btnLoading) {
            btnText.style.display = 'none';
            btnLoading.style.display = 'inline-flex';
        } else {
            button.classList.add('loading');
        }
    },

    // Hide button loading state
    hideButtonLoading(button) {
        if (!button) return;
        
        button.disabled = false;
        const btnText = button.querySelector('.btn-text');
        const btnLoading = button.querySelector('.btn-loading');
        
        if (btnText && btnLoading) {
            btnText.style.display = 'inline';
            btnLoading.style.display = 'none';
        } else {
            button.classList.remove('loading');
        }
    },

    // Show visual feedback when item is added to cart
    showAddToCartFeedback(button) {
        // Create and show notification
        const notification = document.createElement('div');
        notification.className = 'cart-notification';
        notification.innerHTML = `
            <div class="notification-content">
                <span class="notification-icon">✓</span>
                <span class="notification-text">Added to cart!</span>
            </div>
        `;
        
        document.body.appendChild(notification);
        
        // Animate notification
        setTimeout(() => notification.classList.add('show'), 10);
        setTimeout(() => {
            notification.classList.remove('show');
            setTimeout(() => notification.remove(), 300);
        }, 2000);

        // Update cart count with animation
        const cartCount = document.querySelector('.cart-count');
        if (cartCount) {
            cartCount.classList.add('cart-count-pulse');
            setTimeout(() => cartCount.classList.remove('cart-count-pulse'), 600);
        }
    },

    // Filter and display products based on current filters
    filterAndDisplayProducts() {
        const productsContainer = document.getElementById('products-grid');
        if (!productsContainer) return;

        const filteredProducts = ProductCatalog.filterProducts(ModernStore.state.currentFilters);
        
        if (filteredProducts.length === 0) {
            productsContainer.innerHTML = `
                <div class="no-products">
                    <p>No products found matching your criteria.</p>
                    <button class="btn btn-secondary" onclick="ProductDisplay.clearFilters()">Clear Filters</button>
                </div>
            `;
            return;
        }

        const productsHTML = filteredProducts.map(product => 
            ProductRenderer.renderProductCard(product)
        ).join('');

        productsContainer.innerHTML = productsHTML;
    },

    // Populate category filter dropdown
    populateCategoryFilter() {
        const categoryFilter = document.getElementById('category-filter');
        if (!categoryFilter) return;

        const categories = ProductCatalog.getCategories();
        
        // Clear existing options except "All Categories"
        const allOption = categoryFilter.querySelector('option[value=""]');
        categoryFilter.innerHTML = '';
        if (allOption) {
            categoryFilter.appendChild(allOption);
        } else {
            categoryFilter.innerHTML = '<option value="">All Categories</option>';
        }

        // Add category options
        categories.forEach(category => {
            const option = document.createElement('option');
            option.value = category;
            option.textContent = category.charAt(0).toUpperCase() + category.slice(1);
            categoryFilter.appendChild(option);
        });
    },

    // Clear all filters
    clearFilters() {
        ModernStore.state.currentFilters = {
            search: '',
            category: '',
            minPrice: null,
            maxPrice: null
        };

        // Reset form controls
        const searchInput = document.getElementById('product-search');
        const categoryFilter = document.getElementById('category-filter');
        
        if (searchInput) searchInput.value = '';
        if (categoryFilter) categoryFilter.value = '';

        // Refresh display
        this.filterAndDisplayProducts();
    }
};

// =============================================================================
// SHOPPING CART MODULE
// =============================================================================

const Cart = {
    // Initialize cart functionality
    init() {
        this.bindCartEvents();
        this.loadFromStorage();
    },

    // Bind cart-related events
    bindCartEvents() {
        // Handle quantity changes in cart
        document.addEventListener('click', (event) => {
            if (event.target.matches('.cart-quantity-increase')) {
                const productId = parseInt(event.target.dataset.productId);
                const currentItem = ModernStore.state.cart.find(item => item.productId === productId);
                if (currentItem && currentItem.quantity < 10) {
                    this.updateQuantity(productId, currentItem.quantity + 1);
                    this.displayCart();
                    this.showQuantityUpdateFeedback(event.target, 'increased');
                }
            }
            
            if (event.target.matches('.cart-quantity-decrease')) {
                const productId = parseInt(event.target.dataset.productId);
                const currentItem = ModernStore.state.cart.find(item => item.productId === productId);
                if (currentItem && currentItem.quantity > 1) {
                    this.updateQuantity(productId, currentItem.quantity - 1);
                    this.displayCart();
                    this.showQuantityUpdateFeedback(event.target, 'decreased');
                }
            }
            
            if (event.target.matches('.remove-item-btn')) {
                const productId = parseInt(event.target.dataset.productId);
                const productName = event.target.dataset.productName;
                this.confirmRemoveItem(productId, productName);
            }
        });

        // Handle Add to Cart from product detail page
        document.addEventListener('click', (event) => {
            if (event.target.matches('.add-to-cart-detail')) {
                const productId = parseInt(event.target.dataset.productId);
                const quantityInput = document.getElementById('quantity-input');
                const quantity = quantityInput ? parseInt(quantityInput.value) || 1 : 1;
                
                this.addItem(productId, quantity);
                ProductDisplay.showAddToCartFeedback(event.target);
            }
        });
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

        // Check if item already exists in cart
        const existingItemIndex = ModernStore.state.cart.findIndex(item => item.productId === productId);
        
        if (existingItemIndex > -1) {
            // Update quantity of existing item
            ModernStore.state.cart[existingItemIndex].quantity += quantity;
        } else {
            // Add new item to cart
            ModernStore.state.cart.push({
                productId: productId,
                quantity: quantity,
                addedAt: new Date().toISOString()
            });
        }

        // Update cart count in navigation
        Navigation.updateCartCount();
        
        // Save cart to localStorage
        this.saveToStorage();
        
        console.log(`Added ${quantity} x ${product.name} to cart`);
        
        // Announce to screen readers
        if (typeof AccessibilityManager !== 'undefined') {
            AccessibilityManager.announceToScreenReader(
                `Added ${quantity} ${product.name} to cart`, 
                'assertive'
            );
        }
        
        return true;
    },

    // Remove item from cart
    removeItem(productId) {
        const itemIndex = ModernStore.state.cart.findIndex(item => item.productId === productId);
        if (itemIndex > -1) {
            const product = ProductCatalog.getProductById(productId);
            ModernStore.state.cart.splice(itemIndex, 1);
            Navigation.updateCartCount();
            this.saveToStorage();
            console.log(`Removed ${product ? product.name : 'item'} from cart`);
            
            // Announce to screen readers
            if (typeof AccessibilityManager !== 'undefined' && product) {
                AccessibilityManager.announceToScreenReader(
                    `Removed ${product.name} from cart`, 
                    'assertive'
                );
            }
            return true;
        }
        return false;
    },

    // Update item quantity
    updateQuantity(productId, quantity) {
        const itemIndex = ModernStore.state.cart.findIndex(item => item.productId === productId);
        if (itemIndex > -1) {
            if (quantity <= 0) {
                this.removeItem(productId);
            } else {
                ModernStore.state.cart[itemIndex].quantity = quantity;
                Navigation.updateCartCount();
                this.saveToStorage();
                console.log(`Updated quantity for product ${productId} to ${quantity}`);
            }
            return true;
        }
        return false;
    },

    // Get cart items with product details
    getCartItems() {
        return ModernStore.state.cart.map(item => {
            const product = ProductCatalog.getProductById(item.productId);
            return {
                ...item,
                product: product
            };
        }).filter(item => item.product); // Filter out items with missing products
    },

    // Get cart totals
    getTotals() {
        const subtotal = this.getSubtotal();
        const tax = this.getTax(subtotal);
        const total = subtotal + tax;
        
        return {
            subtotal: subtotal,
            tax: tax,
            total: total,
            itemCount: this.getItemCount()
        };
    },

    // Get cart subtotal
    getSubtotal() {
        return ModernStore.state.cart.reduce((total, item) => {
            const product = ProductCatalog.getProductById(item.productId);
            return total + (product ? product.price * item.quantity : 0);
        }, 0);
    },

    // Calculate tax (8.5% for demo purposes)
    getTax(subtotal) {
        return subtotal * 0.085;
    },

    // Get total item count
    getItemCount() {
        return ModernStore.state.cart.reduce((count, item) => count + item.quantity, 0);
    },

    // Check if cart is empty
    isEmpty() {
        return ModernStore.state.cart.length === 0;
    },

    // Display cart contents
    displayCart() {
        const cartContent = document.getElementById('cart-content');
        const cartSummary = document.getElementById('cart-summary');
        
        if (!cartContent) return;

        if (this.isEmpty()) {
            this.displayEmptyCart(cartContent, cartSummary);
        } else {
            this.displayCartItems(cartContent, cartSummary);
        }
    },

    // Display empty cart state
    displayEmptyCart(cartContent, cartSummary) {
        cartContent.innerHTML = `
            <div class="empty-cart">
                <div class="empty-cart-icon">🛒</div>
                <h3>Your cart is empty</h3>
                <p>Looks like you haven't added any items to your cart yet.</p>
                <a href="#products" class="btn btn-primary">Continue Shopping</a>
            </div>
        `;
        
        if (cartSummary) {
            cartSummary.style.display = 'none';
        }
    },

    // Display cart items
    displayCartItems(cartContent, cartSummary) {
        const cartItems = this.getCartItems();
        const totals = this.getTotals();

        // Render cart items
        const cartItemsHTML = cartItems.map(item => 
            ProductRenderer.renderCartItem(item.product, item.quantity)
        ).join('');

        cartContent.innerHTML = `
            <div class="cart-items">
                <div class="cart-header">
                    <h3>Items in your cart (${totals.itemCount})</h3>
                    <p class="cart-header-subtitle">Review your items and proceed to checkout when ready</p>
                </div>
                <div class="cart-items-list">
                    ${cartItemsHTML}
                </div>
            </div>
        `;

        // Update cart summary
        if (cartSummary) {
            cartSummary.style.display = 'block';
            this.updateCartSummary(totals);
        }
    },

    // Update cart summary with totals
    updateCartSummary(totals) {
        const subtotalElement = document.getElementById('cart-subtotal');
        const taxElement = document.getElementById('cart-tax');
        const totalElement = document.getElementById('cart-total');

        if (subtotalElement) subtotalElement.textContent = Utils.formatPrice(totals.subtotal);
        if (taxElement) taxElement.textContent = Utils.formatPrice(totals.tax);
        if (totalElement) totalElement.textContent = Utils.formatPrice(totals.total);
    },

    // Save cart to localStorage with optimized performance
    saveToStorage() {
        const cartData = {
            items: ModernStore.state.cart,
            lastUpdated: new Date().toISOString()
        };
        
        // Use debounced save for better performance
        if (PerformanceOptimizer.debouncedSave) {
            PerformanceOptimizer.debouncedSave('modernstore_cart', cartData);
        } else {
            // Fallback to immediate save
            try {
                localStorage.setItem('modernstore_cart', JSON.stringify(cartData));
            } catch (error) {
                console.warn('Could not save cart to localStorage:', error);
                PerformanceOptimizer.handleStorageError(error);
            }
        }
    },

    // Load cart from localStorage with error handling
    loadFromStorage() {
        try {
            const savedData = localStorage.getItem('modernstore_cart');
            if (savedData) {
                const cartData = JSON.parse(savedData);
                
                // Handle both old and new format
                if (Array.isArray(cartData)) {
                    // Old format - just array of items
                    ModernStore.state.cart = cartData;
                } else if (cartData.items) {
                    // New format - object with items and metadata
                    ModernStore.state.cart = cartData.items || [];
                }
                
                // Validate cart items and remove invalid ones
                ModernStore.state.cart = ModernStore.state.cart.filter(item => {
                    const product = ProductCatalog.getProductById(item.productId);
                    return product && item.quantity > 0;
                });
                
                Navigation.updateCartCount();
                console.log(`Loaded ${ModernStore.state.cart.length} items from localStorage`);
            }
        } catch (error) {
            console.warn('Could not load cart from localStorage:', error);
            // Try backup
            try {
                const backupData = localStorage.getItem('modernstore_cart_backup');
                if (backupData) {
                    ModernStore.state.cart = JSON.parse(backupData);
                    console.log('Loaded cart from backup');
                }
            } catch (backupError) {
                console.error('Failed to load cart backup:', backupError);
                ModernStore.state.cart = [];
            }
        }
    },

    // Clear cart completely
    clear() {
        ModernStore.state.cart = [];
        Navigation.updateCartCount();
        this.saveToStorage();
        console.log('Cart cleared');
    },

    // Confirm item removal with dialog
    confirmRemoveItem(productId, productName) {
        const confirmed = confirm(`Are you sure you want to remove "${productName}" from your cart?`);
        if (confirmed) {
            this.removeItem(productId);
            this.displayCart();
            this.showRemoveItemFeedback(productName);
        }
    },

    // Show feedback when quantity is updated
    showQuantityUpdateFeedback(button, action) {
        // Add visual feedback to the button
        button.classList.add('quantity-updated');
        setTimeout(() => {
            button.classList.remove('quantity-updated');
        }, 300);
    },

    // Show feedback when item is removed
    showRemoveItemFeedback(productName = 'Item') {
        // Create and show a temporary notification
        const notification = document.createElement('div');
        notification.className = 'cart-notification success';
        notification.innerHTML = `
            <div class="notification-content">
                <span class="notification-icon">✓</span>
                <span class="notification-text">${productName} removed from cart</span>
            </div>
        `;
        notification.setAttribute('role', 'status');
        notification.setAttribute('aria-live', 'polite');
        
        document.body.appendChild(notification);
        
        // Remove after delay
        setTimeout(() => {
            if (document.body.contains(notification)) {
                document.body.removeChild(notification);
            }
        }, 3000);
    },

    // Export cart data (for potential future use)
    exportCart() {
        const cartItems = this.getCartItems();
        const totals = this.getTotals();
        
        return {
            items: cartItems,
            totals: totals,
            exportedAt: new Date().toISOString()
        };
    },

    // Import cart data (for potential future use)
    importCart(cartData) {
        if (cartData && cartData.items) {
            ModernStore.state.cart = cartData.items.map(item => ({
                productId: item.productId,
                quantity: item.quantity,
                addedAt: item.addedAt || new Date().toISOString()
            }));
            
            Navigation.updateCartCount();
            this.saveToStorage();
            return true;
        }
        return false;
    }
};

// =============================================================================
// UTILITY FUNCTIONS
// =============================================================================

const Utils = {
    // Format price for display
    formatPrice(price) {
        return new Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: 'USD'
        }).format(price);
    },

    // Show notification using the global notification system
    showNotification(message, type = 'info', duration = 3000) {
        return NotificationManager.show(message, type, duration);
    },

    // Debounce function for search input
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

    // Generate unique ID
    generateId() {
        return Date.now().toString(36) + Math.random().toString(36).substr(2);
    }
};

// =============================================================================
// MOBILE MENU MODULE
// =============================================================================

const MobileMenu = {
    // Initialize mobile menu functionality
    init() {
        this.bindEvents();
    },

    // Bind mobile menu events
    bindEvents() {
        const menuToggle = document.querySelector('.mobile-menu-toggle');
        if (menuToggle) {
            menuToggle.addEventListener('click', this.toggle.bind(this));
        }

        // Close menu when clicking outside
        document.addEventListener('click', (event) => {
            if (ModernStore.state.isMobileMenuOpen && 
                !event.target.closest('.navbar')) {
                this.close();
            }
        });

        // Close menu on escape key
        document.addEventListener('keydown', (event) => {
            if (event.key === 'Escape' && ModernStore.state.isMobileMenuOpen) {
                this.close();
            }
        });
    },

    // Toggle mobile menu
    toggle() {
        if (ModernStore.state.isMobileMenuOpen) {
            this.close();
        } else {
            this.open();
        }
    },

    // Open mobile menu
    open() {
        const menuToggle = document.querySelector('.mobile-menu-toggle');
        const navMenu = document.querySelector('.nav-menu');
        
        if (menuToggle && navMenu) {
            ModernStore.state.isMobileMenuOpen = true;
            menuToggle.setAttribute('aria-expanded', 'true');
            navMenu.classList.add('mobile-open');
            document.body.classList.add('mobile-menu-open');
        }
    },

    // Close mobile menu
    close() {
        const menuToggle = document.querySelector('.mobile-menu-toggle');
        const navMenu = document.querySelector('.nav-menu');
        
        if (menuToggle && navMenu) {
            ModernStore.state.isMobileMenuOpen = false;
            menuToggle.setAttribute('aria-expanded', 'false');
            navMenu.classList.remove('mobile-open');
            document.body.classList.remove('mobile-menu-open');
        }
    }
};

// =============================================================================
// ADMIN DASHBOARD MODULE - Hidden admin interface for product management
// =============================================================================

const AdminDashboard = {
    // Admin state
    state: {
        isInitialized: false,
        editingProduct: null,
        showingModal: false
    },

    // Initialize admin dashboard
    init() {
        if (this.state.isInitialized) {
            this.refreshProductTable();
            return;
        }

        console.log('Initializing Admin Dashboard...');
        
        // Verify admin page elements exist
        const adminTable = document.getElementById('admin-products-table');
        const adminTbody = document.getElementById('admin-products-tbody');
        
        if (!adminTable || !adminTbody) {
            console.error('Admin dashboard elements not found');
            return;
        }

        this.bindEvents();
        this.loadProductTable();
        this.state.isInitialized = true;
        
        // Show welcome message
        this.showNotification('Admin Dashboard loaded successfully', 'success');
    },

    // Bind admin dashboard events
    bindEvents() {
        // Add product button
        const addProductBtn = document.getElementById('add-product-btn');
        if (addProductBtn) {
            addProductBtn.addEventListener('click', () => this.showAddProductModal());
        }

        // Refresh products button
        const refreshBtn = document.getElementById('refresh-products-btn');
        if (refreshBtn) {
            refreshBtn.addEventListener('click', () => this.refreshProductTable());
        }

        // Event delegation for edit and delete buttons
        document.addEventListener('click', (event) => {
            if (event.target.matches('.edit-product-btn')) {
                const productId = parseInt(event.target.dataset.productId);
                this.editProduct(productId);
            } else if (event.target.matches('.delete-product-btn')) {
                const productId = parseInt(event.target.dataset.productId);
                this.deleteProduct(productId);
            }
        });

        // Handle modal close events
        document.addEventListener('click', (event) => {
            if (event.target.matches('.modal-overlay') || event.target.matches('.modal-close')) {
                this.closeModal();
            }
        });

        // Handle escape key to close modal
        document.addEventListener('keydown', (event) => {
            if (event.key === 'Escape' && this.state.showingModal) {
                this.closeModal();
            }
        });
    },

    // Load and display product table
    loadProductTable() {
        const tbody = document.getElementById('admin-products-tbody');
        if (!tbody) return;

        // Show loading state
        tbody.innerHTML = '<tr><td colspan="6" class="loading-row">Loading products...</td></tr>';

        // Simulate loading delay for better UX
        setTimeout(() => {
            const products = ProductCatalog.getAllProducts();
            this.renderProductTable(products);
        }, 500);
    },

    // Render product table with all products
    renderProductTable(products) {
        const tbody = document.getElementById('admin-products-tbody');
        if (!tbody) return;

        if (products.length === 0) {
            tbody.innerHTML = '<tr><td colspan="6" class="no-data">No products found</td></tr>';
            return;
        }

        const tableHTML = products.map(product => 
            ProductRenderer.renderAdminProductRow(product)
        ).join('');

        tbody.innerHTML = tableHTML;

        // Add row animations
        const rows = tbody.querySelectorAll('tr');
        rows.forEach((row, index) => {
            row.style.animationDelay = `${index * 0.05}s`;
            row.classList.add('admin-row-animate');
        });
    },

    // Refresh product table
    refreshProductTable() {
        this.showRefreshFeedback();
        this.loadProductTable();
    },

    // Show add product modal
    showAddProductModal() {
        const modalHTML = this.createProductModal();
        document.body.insertAdjacentHTML('beforeend', modalHTML);
        this.state.showingModal = true;
        this.state.editingProduct = null;

        // Focus on first input
        setTimeout(() => {
            const firstInput = document.querySelector('.admin-modal input');
            if (firstInput) firstInput.focus();
        }, 100);

        this.bindModalEvents();
    },

    // Edit existing product
    editProduct(productId) {
        const product = ProductCatalog.getProductById(productId);
        if (!product) {
            this.showNotification('Product not found', 'error');
            return;
        }

        const modalHTML = this.createProductModal(product);
        document.body.insertAdjacentHTML('beforeend', modalHTML);
        this.state.showingModal = true;
        this.state.editingProduct = product;

        // Populate form with product data
        this.populateProductForm(product);
        this.bindModalEvents();
    },

    // Delete product with confirmation
    deleteProduct(productId) {
        const product = ProductCatalog.getProductById(productId);
        if (!product) {
            this.showNotification('Product not found', 'error');
            return;
        }

        const confirmed = confirm(`Are you sure you want to delete "${product.name}"?\n\nThis action cannot be undone.`);
        if (confirmed) {
            // Simulate deletion (in a real app, this would call an API)
            this.simulateProductDeletion(productId);
            this.showNotification(`"${product.name}" has been deleted`, 'success');
            this.refreshProductTable();
        }
    },

    // Create product modal HTML
    createProductModal(product = null) {
        const isEditing = product !== null;
        const title = isEditing ? 'Edit Product' : 'Add New Product';
        const submitText = isEditing ? 'Update Product' : 'Add Product';

        return `
            <div class="modal-overlay admin-modal-overlay">
                <div class="admin-modal" role="dialog" aria-labelledby="modal-title" aria-modal="true">
                    <div class="modal-header">
                        <h3 id="modal-title">${title}</h3>
                        <button class="modal-close" aria-label="Close modal">&times;</button>
                    </div>
                    <form class="admin-form" id="admin-product-form">
                        <div class="form-group">
                            <label for="product-name">Product Name *</label>
                            <input type="text" id="product-name" name="name" required 
                                   placeholder="Enter product name">
                        </div>
                        
                        <div class="form-group">
                            <label for="product-price">Price *</label>
                            <input type="number" id="product-price" name="price" required 
                                   min="0" step="0.01" placeholder="0.00">
                        </div>
                        
                        <div class="form-group">
                            <label for="product-category">Category *</label>
                            <select id="product-category" name="category" required>
                                <option value="">Select category</option>
                                <option value="electronics">Electronics</option>
                                <option value="clothing">Clothing</option>
                                <option value="home">Home & Garden</option>
                            </select>
                        </div>
                        
                        <div class="form-group">
                            <label for="product-description">Description</label>
                            <textarea id="product-description" name="description" 
                                      rows="3" placeholder="Enter product description"></textarea>
                        </div>
                        
                        <div class="form-group">
                            <label for="product-image">Image URL</label>
                            <input type="url" id="product-image" name="image" 
                                   placeholder="https://via.placeholder.com/400x300">
                        </div>
                        
                        <div class="form-group checkbox-group">
                            <label class="checkbox-label">
                                <input type="checkbox" id="product-featured" name="featured">
                                <span class="checkbox-text">Featured Product</span>
                            </label>
                        </div>
                        
                        <div class="form-group checkbox-group">
                            <label class="checkbox-label">
                                <input type="checkbox" id="product-instock" name="inStock" checked>
                                <span class="checkbox-text">In Stock</span>
                            </label>
                        </div>
                        
                        <div class="modal-actions">
                            <button type="button" class="admin-button secondary modal-cancel">Cancel</button>
                            <button type="submit" class="admin-button primary">${submitText}</button>
                        </div>
                    </form>
                </div>
            </div>
        `;
    },

    // Populate form with product data for editing
    populateProductForm(product) {
        document.getElementById('product-name').value = product.name || '';
        document.getElementById('product-price').value = product.price || '';
        document.getElementById('product-category').value = product.category || '';
        document.getElementById('product-description').value = product.description || '';
        document.getElementById('product-image').value = product.image || '';
        document.getElementById('product-featured').checked = product.featured || false;
        document.getElementById('product-instock').checked = product.inStock !== false;
    },

    // Bind modal form events
    bindModalEvents() {
        const form = document.getElementById('admin-product-form');
        const cancelBtn = document.querySelector('.modal-cancel');

        if (form) {
            form.addEventListener('submit', (event) => {
                event.preventDefault();
                this.handleProductSubmit(event);
            });
        }

        if (cancelBtn) {
            cancelBtn.addEventListener('click', () => this.closeModal());
        }
    },

    // Handle product form submission
    handleProductSubmit(event) {
        const formData = new FormData(event.target);
        const productData = {
            name: formData.get('name').trim(),
            price: parseFloat(formData.get('price')),
            category: formData.get('category'),
            description: formData.get('description').trim(),
            image: formData.get('image').trim() || this.generatePlaceholderImage(),
            featured: formData.has('featured'),
            inStock: formData.has('inStock')
        };

        // Validate required fields
        if (!productData.name || !productData.price || !productData.category) {
            this.showNotification('Please fill in all required fields', 'error');
            return;
        }

        if (productData.price <= 0) {
            this.showNotification('Price must be greater than 0', 'error');
            return;
        }

        // Simulate save operation
        if (this.state.editingProduct) {
            this.simulateProductUpdate(this.state.editingProduct.id, productData);
            this.showNotification(`"${productData.name}" has been updated`, 'success');
        } else {
            this.simulateProductCreation(productData);
            this.showNotification(`"${productData.name}" has been added`, 'success');
        }

        this.closeModal();
        this.refreshProductTable();
    },

    // Generate placeholder image URL
    generatePlaceholderImage() {
        const colors = ['2563eb', '10b981', '64748b', 'f59e0b', '8b5cf6', 'ef4444'];
        const randomColor = colors[Math.floor(Math.random() * colors.length)];
        return `https://via.placeholder.com/400x300/${randomColor}/ffffff?text=Product`;
    },

    // Simulate product creation (in real app, would call API)
    simulateProductCreation(productData) {
        const newId = Math.max(...ProductCatalog.products.map(p => p.id)) + 1;
        const newProduct = {
            id: newId,
            ...productData,
            gallery: [productData.image] // Simple gallery with one image
        };

        // Add to catalog (simulation)
        ProductCatalog.products.push(newProduct);
        console.log('Simulated product creation:', newProduct);
    },

    // Simulate product update (in real app, would call API)
    simulateProductUpdate(productId, productData) {
        const productIndex = ProductCatalog.products.findIndex(p => p.id === productId);
        if (productIndex > -1) {
            ProductCatalog.products[productIndex] = {
                ...ProductCatalog.products[productIndex],
                ...productData,
                gallery: [productData.image] // Update gallery
            };
            console.log('Simulated product update:', ProductCatalog.products[productIndex]);
        }
    },

    // Simulate product deletion (in real app, would call API)
    simulateProductDeletion(productId) {
        const productIndex = ProductCatalog.products.findIndex(p => p.id === productId);
        if (productIndex > -1) {
            const deletedProduct = ProductCatalog.products.splice(productIndex, 1)[0];
            console.log('Simulated product deletion:', deletedProduct);
        }
    },

    // Close modal
    closeModal() {
        const modal = document.querySelector('.admin-modal-overlay');
        if (modal) {
            modal.remove();
        }
        this.state.showingModal = false;
        this.state.editingProduct = null;
    },

    // Show notification message
    showNotification(message, type = 'info') {
        // Remove existing notifications
        const existingNotifications = document.querySelectorAll('.admin-notification');
        existingNotifications.forEach(notification => notification.remove());

        // Create new notification
        const notification = document.createElement('div');
        notification.className = `admin-notification ${type}`;
        notification.innerHTML = `
            <div class="notification-content">
                <span class="notification-icon">${this.getNotificationIcon(type)}</span>
                <span class="notification-text">${message}</span>
                <button class="notification-close" aria-label="Close notification">&times;</button>
            </div>
        `;

        // Add to page
        document.body.appendChild(notification);

        // Bind close event
        const closeBtn = notification.querySelector('.notification-close');
        if (closeBtn) {
            closeBtn.addEventListener('click', () => notification.remove());
        }

        // Auto-remove after delay
        setTimeout(() => {
            if (document.body.contains(notification)) {
                notification.classList.add('fade-out');
                setTimeout(() => notification.remove(), 300);
            }
        }, 4000);
    },

    // Get notification icon based on type
    getNotificationIcon(type) {
        const icons = {
            success: '✓',
            error: '✕',
            warning: '⚠',
            info: 'ℹ'
        };
        return icons[type] || icons.info;
    },

    // Show refresh feedback
    showRefreshFeedback() {
        const refreshBtn = document.getElementById('refresh-products-btn');
        if (refreshBtn) {
            const originalText = refreshBtn.textContent;
            refreshBtn.textContent = 'Refreshing...';
            refreshBtn.disabled = true;

            setTimeout(() => {
                refreshBtn.textContent = originalText;
                refreshBtn.disabled = false;
            }, 1000);
        }
    },

    // Get admin statistics for display
    getAdminStats() {
        const products = ProductCatalog.getAllProducts();
        const featuredCount = products.filter(p => p.featured).length;
        const inStockCount = products.filter(p => p.inStock).length;
        const categories = [...new Set(products.map(p => p.category))];

        return {
            totalProducts: products.length,
            featuredProducts: featuredCount,
            inStockProducts: inStockCount,
            totalCategories: categories.length,
            categories: categories
        };
    },

    // Export products data (for demo purposes)
    exportProductsData() {
        const products = ProductCatalog.getAllProducts();
        const dataStr = JSON.stringify(products, null, 2);
        const dataBlob = new Blob([dataStr], { type: 'application/json' });
        
        const link = document.createElement('a');
        link.href = URL.createObjectURL(dataBlob);
        link.download = 'products-export.json';
        link.click();
        
        this.showNotification('Products data exported successfully', 'success');
    }
};

// =============================================================================
// CORE APPLICATION MODULE
// =============================================================================
// ACCESSIBILITY MANAGER - Handles focus management and keyboard navigation
// =============================================================================

const AccessibilityManager = {
    // Initialize accessibility features
    init() {
        this.setupFocusManagement();
        this.setupKeyboardNavigation();
        this.setupAriaLiveRegions();
        this.setupSkipLinks();
    },

    // Setup focus management for page transitions
    setupFocusManagement() {
        // Store the last focused element before page transitions
        this.lastFocusedElement = null;
        
        // Listen for page changes to manage focus
        document.addEventListener('pageChanged', (event) => {
            this.handlePageFocus(event.detail.pageId);
        });
    },

    // Handle focus when pages change
    handlePageFocus(pageId) {
        // Small delay to ensure DOM is updated
        setTimeout(() => {
            const page = document.getElementById(pageId);
            if (!page) return;

            // Find the main heading or first focusable element
            let focusTarget = page.querySelector('h1, h2, [tabindex="0"], button, input, select, textarea, a[href]');
            
            // If no focusable element found, make the page section focusable
            if (!focusTarget) {
                page.setAttribute('tabindex', '-1');
                focusTarget = page;
            }

            // Focus the target element
            if (focusTarget) {
                focusTarget.focus();
                
                // Announce page change to screen readers
                this.announcePageChange(pageId);
            }
        }, 100);
    },

    // Announce page changes to screen readers
    announcePageChange(pageId) {
        const announcements = {
            'home': 'Home page loaded',
            'products': 'Products page loaded',
            'product-detail': 'Product details page loaded',
            'cart': 'Shopping cart page loaded',
            'checkout': 'Checkout page loaded',
            'admin-hidden': 'Admin dashboard loaded'
        };

        const message = announcements[pageId] || `${pageId} page loaded`;
        this.announceToScreenReader(message);
    },

    // Setup keyboard navigation enhancements
    setupKeyboardNavigation() {
        // Enhanced keyboard navigation for product cards
        document.addEventListener('keydown', (event) => {
            this.handleProductGridNavigation(event);
            this.handleModalKeyboard(event);
            this.handleFormNavigation(event);
        });

        // Setup roving tabindex for product grids
        this.setupRovingTabindex();
    },

    // Handle keyboard navigation in product grids
    handleProductGridNavigation(event) {
        const activeElement = document.activeElement;
        const productCard = activeElement.closest('.product-card');
        
        if (!productCard) return;

        const grid = productCard.closest('.products-grid, .featured-products');
        if (!grid) return;

        const cards = Array.from(grid.querySelectorAll('.product-card'));
        const currentIndex = cards.indexOf(productCard);
        
        let targetIndex = -1;

        switch (event.key) {
            case 'ArrowRight':
                event.preventDefault();
                targetIndex = (currentIndex + 1) % cards.length;
                break;
            case 'ArrowLeft':
                event.preventDefault();
                targetIndex = (currentIndex - 1 + cards.length) % cards.length;
                break;
            case 'ArrowDown':
                event.preventDefault();
                // Calculate grid columns based on screen size
                const columns = this.getGridColumns(grid);
                targetIndex = Math.min(currentIndex + columns, cards.length - 1);
                break;
            case 'ArrowUp':
                event.preventDefault();
                const cols = this.getGridColumns(grid);
                targetIndex = Math.max(currentIndex - cols, 0);
                break;
            case 'Home':
                event.preventDefault();
                targetIndex = 0;
                break;
            case 'End':
                event.preventDefault();
                targetIndex = cards.length - 1;
                break;
        }

        if (targetIndex >= 0 && targetIndex < cards.length) {
            cards[targetIndex].focus();
        }
    },

    // Get number of columns in grid for keyboard navigation
    getGridColumns(grid) {
        const gridStyle = window.getComputedStyle(grid);
        const columns = gridStyle.gridTemplateColumns.split(' ').length;
        return Math.max(1, columns);
    },

    // Setup roving tabindex for better keyboard navigation
    setupRovingTabindex() {
        // Delay to ensure DOM is ready
        setTimeout(() => {
            const grids = document.querySelectorAll('.products-grid, .featured-products');
            
            grids.forEach(grid => {
                const cards = grid.querySelectorAll('.product-card');
                
                // Set first card as tabbable, others as not tabbable
                cards.forEach((card, index) => {
                    card.setAttribute('tabindex', index === 0 ? '0' : '-1');
                    
                    card.addEventListener('focus', () => {
                        // Remove tabindex from all cards in this grid
                        cards.forEach(c => c.setAttribute('tabindex', '-1'));
                        // Set current card as tabbable
                        card.setAttribute('tabindex', '0');
                    });
                });
            });
        }, 500);
    },

    // Handle modal and dialog keyboard interactions
    handleModalKeyboard(event) {
        // Handle Escape key for closing modals/notifications
        if (event.key === 'Escape') {
            const notification = document.querySelector('.cart-notification.show');
            if (notification) {
                notification.classList.remove('show');
                // Return focus to the element that triggered the notification
                if (this.lastFocusedElement) {
                    this.lastFocusedElement.focus();
                }
            }
        }
    },

    // Handle form navigation improvements
    handleFormNavigation(event) {
        // Enhanced form navigation with Enter key
        if (event.key === 'Enter' && event.target.matches('input:not([type="submit"])')) {
            const form = event.target.closest('form');
            if (form) {
                const inputs = Array.from(form.querySelectorAll('input, select, textarea'));
                const currentIndex = inputs.indexOf(event.target);
                const nextInput = inputs[currentIndex + 1];
                
                if (nextInput) {
                    event.preventDefault();
                    nextInput.focus();
                }
            }
        }
    },

    // Setup ARIA live regions for dynamic content
    setupAriaLiveRegions() {
        // Create a global announcement region if it doesn't exist
        if (!document.getElementById('aria-live-region')) {
            const liveRegion = document.createElement('div');
            liveRegion.id = 'aria-live-region';
            liveRegion.setAttribute('aria-live', 'polite');
            liveRegion.setAttribute('aria-atomic', 'true');
            liveRegion.className = 'sr-only';
            document.body.appendChild(liveRegion);
        }
    },

    // Setup skip links
    setupSkipLinks() {
        const skipLink = document.querySelector('.skip-link');
        if (skipLink) {
            skipLink.addEventListener('click', (event) => {
                event.preventDefault();
                const target = document.querySelector(skipLink.getAttribute('href'));
                if (target) {
                    target.focus();
                    target.scrollIntoView({ behavior: 'smooth' });
                }
            });
        }
    },

    // Announce messages to screen readers
    announceToScreenReader(message, priority = 'polite') {
        const liveRegion = document.getElementById('aria-live-region');
        if (liveRegion) {
            liveRegion.setAttribute('aria-live', priority);
            liveRegion.textContent = message;
            
            // Clear the message after a short delay
            setTimeout(() => {
                liveRegion.textContent = '';
            }, 1000);
        }
    },

    // Store focus for later restoration
    storeFocus() {
        this.lastFocusedElement = document.activeElement;
    },

    // Restore previously stored focus
    restoreFocus() {
        if (this.lastFocusedElement && typeof this.lastFocusedElement.focus === 'function') {
            this.lastFocusedElement.focus();
            this.lastFocusedElement = null;
        }
    }
};

// =============================================================================

const ModernStore = {
    // Application state
    state: {
        currentPage: 'home',
        isMobileMenuOpen: false,
        cart: [],
        products: ProductCatalog.getAllProducts(),
        currentFilters: {
            search: '',
            category: '',
            minPrice: null,
            maxPrice: null
        }
    },

    // Initialize the application
    init() {
        console.log('ModernStore initializing...');
        
        // Initialize core modules
        AccessibilityManager.init();
        Navigation.init();
        Router.init();
        MobileMenu.init();
        ProductDisplay.init();
        Cart.init(); // Initialize cart functionality
        
        // Load initial product data
        this.loadProducts();
        
        // Initialize search and filter functionality
        this.initSearchAndFilters();
        
        // Set initial page based on URL hash
        const initialPage = Router.getCurrentPage();
        Navigation.showPage(initialPage);
        
        console.log('ModernStore initialized successfully');
    },

    // Load products into application state
    loadProducts() {
        this.state.products = ProductCatalog.getAllProducts();
        console.log(`Loaded ${this.state.products.length} products`);
        
        // Display featured products on homepage
        ProductDisplay.displayFeaturedProducts();
        
        // Display all products on products page
        ProductDisplay.displayAllProducts();
        
        // Populate category filter
        ProductDisplay.populateCategoryFilter();
        
        // Initialize product listing page functionality
        ProductListing.init();
    },

    // Initialize search and filter functionality
    initSearchAndFilters() {
        const searchInput = document.getElementById('product-search');
        const categoryFilter = document.getElementById('category-filter');

        if (searchInput) {
            // Debounced search functionality
            const debouncedSearch = Utils.debounce((query) => {
                this.state.currentFilters.search = query;
                ProductDisplay.filterAndDisplayProducts();
            }, 300);

            searchInput.addEventListener('input', (event) => {
                debouncedSearch(event.target.value);
            });
        }

        if (categoryFilter) {
            categoryFilter.addEventListener('change', (event) => {
                this.state.currentFilters.category = event.target.value;
                ProductDisplay.filterAndDisplayProducts();
            });
        }
    }
};

// =============================================================================
// ROUTER MODULE - Hash-based routing system
// =============================================================================

const Router = {
    // Valid routes in the application
    validRoutes: ['home', 'products', 'product-detail', 'cart', 'checkout', 'admin-hidden'],
    
    // Initialize router
    init() {
        // Listen for hash changes
        window.addEventListener('hashchange', this.handleHashChange.bind(this));
        
        // Handle browser back/forward buttons
        window.addEventListener('popstate', this.handlePopState.bind(this));
        
        // Set initial state
        this.updateBrowserHistory();
    },

    // Get current page from URL hash
    getCurrentPage() {
        const hash = window.location.hash.slice(1); // Remove the '#'
        
        // Handle product detail routes (e.g., #product-detail/123)
        if (hash.startsWith('product-detail/')) {
            return 'product-detail';
        }
        
        // Return hash if it's a valid route, otherwise default to home
        return this.validRoutes.includes(hash) ? hash : 'home';
    },

    // Get product ID from product detail hash
    getProductId() {
        const hash = window.location.hash.slice(1);
        if (hash.startsWith('product-detail/')) {
            return hash.split('/')[1];
        }
        return null;
    },

    // Navigate to a specific page
    navigateTo(page, productId = null) {
        let newHash = page;
        
        // Handle product detail navigation
        if (page === 'product-detail' && productId) {
            newHash = `product-detail/${productId}`;
        }
        
        // Update URL hash
        window.location.hash = newHash;
    },

    // Handle hash change events
    handleHashChange(event) {
        const newPage = this.getCurrentPage();
        const productId = this.getProductId();
        
        // Update application state
        ModernStore.state.currentPage = newPage;
        
        // Show the new page
        Navigation.showPage(newPage, productId);
        
        // Update browser history
        this.updateBrowserHistory();
        
        // Close mobile menu if open
        if (ModernStore.state.isMobileMenuOpen) {
            MobileMenu.close();
        }
    },

    // Handle browser back/forward navigation
    handlePopState(event) {
        // The hashchange event will handle the actual navigation
        // This is here for potential future enhancements
    },

    // Update browser history for better navigation experience
    updateBrowserHistory() {
        const currentPage = this.getCurrentPage();
        const title = this.getPageTitle(currentPage);
        
        // Update document title
        document.title = `${title} - ModernStore`;
        
        // Update history state (for potential future use)
        if (history.replaceState) {
            history.replaceState({ page: currentPage }, title, window.location.href);
        }
    },

    // Get page title for browser title bar
    getPageTitle(page) {
        const titles = {
            'home': 'Home',
            'products': 'Products',
            'product-detail': 'Product Details',
            'cart': 'Shopping Cart',
            'checkout': 'Checkout',
            'admin-hidden': 'Admin Dashboard'
        };
        
        return titles[page] || 'Home';
    }
};

// =============================================================================
// NAVIGATION MODULE - Page navigation and visibility control
// =============================================================================

const Navigation = {
    // Initialize navigation system
    init() {
        this.bindNavigationEvents();
        this.updateActiveNavLink();
    },

    // Bind click events to navigation links
    bindNavigationEvents() {
        // Handle all navigation links
        document.addEventListener('click', (event) => {
            const link = event.target.closest('a[href^="#"]');
            if (link) {
                event.preventDefault();
                const targetPage = link.getAttribute('href').slice(1);
                Router.navigateTo(targetPage);
            }
        });

        // Handle CTA buttons and other navigation elements
        document.addEventListener('click', (event) => {
            if (event.target.matches('.cta-button[href^="#"]')) {
                event.preventDefault();
                const targetPage = event.target.getAttribute('href').slice(1);
                Router.navigateTo(targetPage);
            }
        });
    },

    // Show specific page and hide others
    showPage(pageId, productId = null) {
        // Hide all page sections
        const allSections = document.querySelectorAll('.page-section');
        allSections.forEach(section => {
            section.classList.remove('active');
            section.setAttribute('aria-hidden', 'true');
        });

        // Show target page section
        const targetSection = document.getElementById(pageId);
        if (targetSection) {
            targetSection.classList.add('active');
            targetSection.setAttribute('aria-hidden', 'false');
            
            // Scroll to top of page
            window.scrollTo(0, 0);
            
            // Handle special page logic
            this.handlePageSpecificLogic(pageId, productId);
        } else {
            console.warn(`Page section not found: ${pageId}`);
            // Fallback to home page
            this.showPage('home');
            return;
        }

        // Update navigation state
        ModernStore.state.currentPage = pageId;
        this.updateActiveNavLink();
        
        // Dispatch page change event for accessibility
        const pageChangeEvent = new CustomEvent('pageChanged', {
            detail: { pageId, productId }
        });
        document.dispatchEvent(pageChangeEvent);
        
        // Update cart count in navigation
        this.updateCartCount();
    },

    // Handle page-specific initialization logic
    handlePageSpecificLogic(pageId, productId) {
        switch (pageId) {
            case 'product-detail':
                if (productId) {
                    ProductDisplay.displayProductDetail(productId);
                } else {
                    // Redirect to products page if no product ID
                    Router.navigateTo('products');
                }
                break;
            case 'products':
                // Refresh products display when navigating to products page
                ProductDisplay.filterAndDisplayProducts();
                break;
            case 'cart':
                // Update cart display
                Cart.displayCart();
                break;
            case 'checkout':
                // Future: Initialize checkout form
                console.log('Initializing checkout');
                break;
            case 'admin-hidden':
                // Initialize admin dashboard
                AdminDashboard.init();
                break;
        }
    },

    // Update active navigation link styling
    updateActiveNavLink() {
        // Remove active class from all nav links
        const navLinks = document.querySelectorAll('.nav-link');
        navLinks.forEach(link => {
            link.classList.remove('active');
            link.setAttribute('aria-current', 'false');
        });

        // Add active class to current page link
        const currentPage = ModernStore.state.currentPage;
        const activeLink = document.querySelector(`.nav-link[href="#${currentPage}"]`);
        if (activeLink) {
            activeLink.classList.add('active');
            activeLink.setAttribute('aria-current', 'page');
        }
    },

    // Update cart count in navigation
    updateCartCount() {
        const cartCount = document.querySelector('.cart-count');
        if (cartCount) {
            const totalItems = ModernStore.state.cart.reduce((sum, item) => sum + item.quantity, 0);
            cartCount.textContent = totalItems;
            cartCount.setAttribute('aria-label', `${totalItems} items in cart`);
            
            // Show/hide cart count badge
            if (totalItems > 0) {
                cartCount.style.display = 'inline-flex';
            } else {
                cartCount.style.display = 'none';
            }
        }
    }
};

// =============================================================================
// PRODUCT LISTING MODULE - Handles product listing page functionality
// =============================================================================

const ProductListing = {
    // Initialize product listing functionality
    init() {
        this.bindSearchAndFilter();
        this.bindAddToCartButtons();
        this.bindProductCardInteractions();
        this.setupResponsiveGrid();
    },

    // Bind search and filter functionality with real-time updates
    bindSearchAndFilter() {
        const searchInput = document.getElementById('product-search');
        const categoryFilter = document.getElementById('category-filter');

        if (searchInput) {
            // Real-time search with debouncing
            const debouncedSearch = Utils.debounce((query) => {
                ModernStore.state.currentFilters.search = query;
                this.updateProductDisplay();
                this.showSearchFeedback(query);
            }, 300);

            searchInput.addEventListener('input', (event) => {
                debouncedSearch(event.target.value);
            });

            // Clear search on escape key
            searchInput.addEventListener('keydown', (event) => {
                if (event.key === 'Escape') {
                    searchInput.value = '';
                    ModernStore.state.currentFilters.search = '';
                    this.updateProductDisplay();
                }
            });
        }

        if (categoryFilter) {
            categoryFilter.addEventListener('change', (event) => {
                ModernStore.state.currentFilters.category = event.target.value;
                this.updateProductDisplay();
                this.showFilterFeedback(event.target.value);
            });
        }
    },

    // Bind Add to Cart button functionality
    bindAddToCartButtons() {
        document.addEventListener('click', (event) => {
            if (event.target.matches('.add-to-cart-btn')) {
                event.stopPropagation(); // Prevent navigation to product detail
                const productId = parseInt(event.target.dataset.productId);
                
                if (productId) {
                    Cart.addItem(productId, 1);
                    this.showAddToCartFeedback(event.target);
                    this.animateCartCount();
                }
            }
        });
    },

    // Bind product card interactions
    bindProductCardInteractions() {
        document.addEventListener('click', (event) => {
            const productCard = event.target.closest('.product-card');
            if (productCard && !event.target.closest('.add-to-cart-btn')) {
                const productId = productCard.dataset.productId;
                if (productId) {
                    Router.navigateTo('product-detail', productId);
                }
            }
        });

        // Keyboard navigation support
        document.addEventListener('keydown', (event) => {
            if (event.key === 'Enter' || event.key === ' ') {
                const productCard = event.target.closest('.product-card');
                if (productCard && !event.target.closest('.add-to-cart-btn')) {
                    event.preventDefault();
                    const productId = productCard.dataset.productId;
                    if (productId) {
                        Router.navigateTo('product-detail', productId);
                    }
                }
            }
        });
    },

    // Setup responsive grid behavior
    setupResponsiveGrid() {
        const productsGrid = document.getElementById('products-grid');
        if (!productsGrid) return;

        // Add CSS class for enhanced grid behavior
        productsGrid.classList.add('products-grid-enhanced');
        
        // Handle window resize for optimal grid layout
        const handleResize = Utils.debounce(() => {
            this.optimizeGridLayout();
        }, 250);

        window.addEventListener('resize', handleResize);
    },

    // Update product display with current filters
    updateProductDisplay() {
        const productsContainer = document.getElementById('products-grid');
        if (!productsContainer) return;

        const filteredProducts = ProductCatalog.filterProducts(ModernStore.state.currentFilters);
        
        // Show loading state briefly for better UX
        productsContainer.classList.add('loading');
        
        setTimeout(() => {
            if (filteredProducts.length === 0) {
                this.showNoProductsMessage();
            } else {
                this.renderProducts(filteredProducts);
            }
            productsContainer.classList.remove('loading');
        }, 150);
    },

    // Render products with enhanced animations
    renderProducts(products) {
        const productsContainer = document.getElementById('products-grid');
        if (!productsContainer) return;

        const productsHTML = products.map((product, index) => {
            const cardHTML = ProductRenderer.renderProductCard(product);
            // Add animation delay for staggered effect
            return cardHTML.replace(
                'class="product-card"',
                `class="product-card" style="animation-delay: ${index * 0.1}s"`
            );
        }).join('');

        productsContainer.innerHTML = productsHTML;
        
        // Trigger fade-in animation
        productsContainer.classList.add('products-loaded');
    },

    // Show no products message with clear filters option
    showNoProductsMessage() {
        const productsContainer = document.getElementById('products-grid');
        if (!productsContainer) return;

        const hasActiveFilters = ModernStore.state.currentFilters.search || 
                                ModernStore.state.currentFilters.category;

        productsContainer.innerHTML = `
            <div class="no-products">
                <div class="no-products-icon">🔍</div>
                <h3>No products found</h3>
                <p>${hasActiveFilters ? 
                    'Try adjusting your search or filter criteria.' : 
                    'No products are currently available.'}</p>
                ${hasActiveFilters ? 
                    '<button class="btn btn-secondary clear-filters-btn">Clear All Filters</button>' : 
                    '<a href="#home" class="btn btn-primary">Back to Home</a>'}
            </div>
        `;

        // Bind clear filters button
        const clearBtn = productsContainer.querySelector('.clear-filters-btn');
        if (clearBtn) {
            clearBtn.addEventListener('click', () => {
                this.clearAllFilters();
            });
        }
    },

    // Clear all filters and reset display
    clearAllFilters() {
        ModernStore.state.currentFilters = {
            search: '',
            category: '',
            minPrice: null,
            maxPrice: null
        };

        // Reset form controls
        const searchInput = document.getElementById('product-search');
        const categoryFilter = document.getElementById('category-filter');
        
        if (searchInput) searchInput.value = '';
        if (categoryFilter) categoryFilter.value = '';

        // Update display
        this.updateProductDisplay();
    },

    // Show visual feedback for Add to Cart action
    showAddToCartFeedback(button) {
        const originalText = button.textContent;
        const originalClasses = button.className;
        
        button.textContent = '✓ Added!';
        button.classList.remove('btn-primary');
        button.classList.add('btn-success');
        button.disabled = true;

        setTimeout(() => {
            button.textContent = originalText;
            button.className = originalClasses;
            button.disabled = false;
        }, 1500);
    },

    // Animate cart count when item is added
    animateCartCount() {
        const cartCount = document.querySelector('.cart-count');
        if (cartCount) {
            cartCount.classList.add('cart-count-pulse');
            setTimeout(() => {
                cartCount.classList.remove('cart-count-pulse');
            }, 600);
        }
    },

    // Show search feedback
    showSearchFeedback(query) {
        if (query.trim()) {
            console.log(`Searching for: "${query}"`);
        }
    },

    // Show filter feedback
    showFilterFeedback(category) {
        if (category) {
            console.log(`Filtering by category: "${category}"`);
        } else {
            console.log('Showing all categories');
        }
    },

    // Optimize grid layout based on screen size
    optimizeGridLayout() {
        const productsGrid = document.getElementById('products-grid');
        if (!productsGrid) return;

        const containerWidth = productsGrid.offsetWidth;
        const cardMinWidth = 280;
        const gap = 24; // 1.5rem in pixels
        
        const columnsCount = Math.floor((containerWidth + gap) / (cardMinWidth + gap));
        const optimalColumns = Math.max(1, Math.min(4, columnsCount));
        
        productsGrid.style.gridTemplateColumns = `repeat(${optimalColumns}, 1fr)`;
    }
};

// =============================================================================
// APPLICATION INITIALIZATION
// =============================================================================

// Initialize the application when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    console.log('ModernStore application starting...');
    
    // Initialize performance optimizations
    PerformanceOptimizer.init();
    
    // Initialize checkout optimization
    CheckoutOptimizer.init();
    
    // Initialize main application
    ModernStore.init();
});

// Handle page visibility changes for better performance
document.addEventListener('visibilitychange', () => {
    if (document.visibilityState === 'visible') {
        // Refresh cart count when page becomes visible
        Navigation.updateCartCount();
    }
});

// =============================================================================
// CHECKOUT OPTIMIZATION MODULE
// =============================================================================

const CheckoutOptimizer = {
    // Initialize checkout form with optimized handling
    init() {
        const checkoutForm = document.getElementById('checkout-form');
        if (checkoutForm) {
            this.bindFormSubmission(checkoutForm);
            this.initFormValidation(checkoutForm);
        }
    },

    // Bind form submission with loading states
    bindFormSubmission(form) {
        form.addEventListener('submit', (event) => {
            event.preventDefault();
            this.handleCheckoutSubmission(form);
        });
    },

    // Handle checkout form submission with loading states
    handleCheckoutSubmission(form) {
        const submitButton = form.querySelector('button[type="submit"]');
        const resetLoading = LoadingManager.showCheckoutLoading(submitButton);

        // Validate form
        if (!this.validateForm(form)) {
            resetLoading();
            return;
        }

        // Simulate processing time
        setTimeout(() => {
            // Show success message
            this.showCheckoutSuccess();
            
            // Clear cart
            Cart.clearCart();
            
            // Reset form
            form.reset();
            
            // Reset loading state
            resetLoading();
            
            // Navigate to home after delay
            setTimeout(() => {
                Router.navigateTo('home');
            }, 3000);
        }, 2000);
    },

    // Validate form with real-time feedback
    validateForm(form) {
        const requiredFields = form.querySelectorAll('[required]');
        let isValid = true;

        requiredFields.forEach(field => {
            const errorElement = document.getElementById(field.id + '-error');
            
            if (!field.value.trim()) {
                this.showFieldError(field, errorElement, 'This field is required');
                isValid = false;
            } else if (field.type === 'email' && !this.isValidEmail(field.value)) {
                this.showFieldError(field, errorElement, 'Please enter a valid email address');
                isValid = false;
            } else {
                this.hideFieldError(field, errorElement);
            }
        });

        return isValid;
    },

    // Initialize real-time form validation
    initFormValidation(form) {
        const fields = form.querySelectorAll('input[required]');
        
        fields.forEach(field => {
            // Debounced validation on input
            const debouncedValidation = PerformanceOptimizer.debounce(() => {
                this.validateField(field);
            }, 300);

            field.addEventListener('input', debouncedValidation);
            field.addEventListener('blur', () => this.validateField(field));
        });
    },

    // Validate individual field
    validateField(field) {
        const errorElement = document.getElementById(field.id + '-error');
        
        if (!field.value.trim()) {
            this.showFieldError(field, errorElement, 'This field is required');
        } else if (field.type === 'email' && !this.isValidEmail(field.value)) {
            this.showFieldError(field, errorElement, 'Please enter a valid email address');
        } else {
            this.hideFieldError(field, errorElement);
        }
    },

    // Show field error
    showFieldError(field, errorElement, message) {
        field.classList.add('error');
        if (errorElement) {
            errorElement.textContent = message;
            errorElement.classList.add('show');
        }
    },

    // Hide field error
    hideFieldError(field, errorElement) {
        field.classList.remove('error');
        if (errorElement) {
            errorElement.textContent = '';
            errorElement.classList.remove('show');
        }
    },

    // Validate email format
    isValidEmail(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    },

    // Show checkout success message
    showCheckoutSuccess() {
        const successMessage = document.createElement('div');
        successMessage.className = 'checkout-success';
        successMessage.innerHTML = `
            <div class="success-content">
                <div class="success-icon">✓</div>
                <h3>Order Placed Successfully!</h3>
                <p>Thank you for your purchase. You will be redirected to the homepage shortly.</p>
            </div>
        `;

        document.body.appendChild(successMessage);

        setTimeout(() => successMessage.classList.add('show'), 10);
        setTimeout(() => {
            successMessage.classList.remove('show');
            setTimeout(() => successMessage.remove(), 300);
        }, 2500);
    }
};