/**
 * ModernStore Component System
 * A lightweight component-based architecture for building UI
 */

import stateManager from './state-manager.js';

class Component {
  constructor(element, options = {}) {
    this.element = typeof element === 'string' ? document.querySelector(element) : element;
    this.options = { ...this.defaultOptions, ...options };
    this.state = {};
    this.subscriptions = [];
    this.isDestroyed = false;
    
    if (!this.element) {
      console.warn(`Component element not found: ${element}`);
      return;
    }
    
    this.init();
  }
  
  get defaultOptions() {
    return {};
  }
  
  init() {
    this.bindEvents();
    this.render();
  }
  
  bindEvents() {
    // Override in subclasses
  }
  
  render() {
    // Override in subclasses
  }
  
  setState(updates) {
    this.state = { ...this.state, ...updates };
    this.render();
  }
  
  subscribe(path, callback) {
    const unsubscribe = stateManager.subscribe(path, callback);
    this.subscriptions.push(unsubscribe);
    return unsubscribe;
  }
  
  destroy() {
    this.subscriptions.forEach(unsubscribe => unsubscribe());
    this.subscriptions = [];
    this.isDestroyed = true;
  }
}

/**
 * Product Card Component
 */
class ProductCard extends Component {
  get defaultOptions() {
    return {
      showQuickAdd: true,
      showBadges: true,
      imageAspectRatio: '1:1'
    };
  }
  
  init() {
    this.product = this.options.product;
    if (!this.product) {
      console.warn('ProductCard requires product data');
      return;
    }
    
    super.init();
  }
  
  bindEvents() {
    // Add to cart button
    const addToCartBtn = this.element.querySelector('.product-card__add-to-cart');
    if (addToCartBtn) {
      addToCartBtn.addEventListener('click', (e) => {
        e.preventDefault();
        e.stopPropagation();
        this.addToCart();
      });
    }
    
    // Quick view button
    const quickViewBtn = this.element.querySelector('.product-card__quick-view');
    if (quickViewBtn) {
      quickViewBtn.addEventListener('click', (e) => {
        e.preventDefault();
        e.stopPropagation();
        this.showQuickView();
      });
    }
    
    // Card click for navigation
    this.element.addEventListener('click', () => {
      this.navigateToProduct();
    });
    
    // Image lazy loading
    const img = this.element.querySelector('.product-card__image');
    if (img && 'IntersectionObserver' in window) {
      this.setupLazyLoading(img);
    }
  }
  
  render() {
    if (!this.product) return;
    
    this.element.innerHTML = `
      <div class="card card--interactive product-card" data-product-id="${this.product.id}">
        <div class="card__media">
          ${this.renderImage()}
          ${this.options.showBadges ? this.renderBadges() : ''}
          ${this.renderQuickActions()}
        </div>
        <div class="card__content">
          ${this.renderContent()}
        </div>
        <div class="card__actions">
          ${this.renderActions()}
        </div>
      </div>
    `;
    
    // Re-bind events after render
    this.bindEvents();
  }
  
  renderImage() {
    return `
      <img 
        class="card__image product-card__image" 
        data-src="${this.product.image}" 
        alt="${this.product.name}"
        loading="lazy"
      >
    `;
  }
  
  renderBadges() {
    const badges = [];
    
    if (this.product.isNew) {
      badges.push('<span class="badge badge--primary product-card__badge">New</span>');
    }
    
    if (this.product.onSale) {
      badges.push('<span class="badge badge--error product-card__badge">Sale</span>');
    }
    
    if (this.product.featured) {
      badges.push('<span class="badge badge--warning product-card__badge">Featured</span>');
    }
    
    return badges.length ? `<div class="product-card__badges">${badges.join('')}</div>` : '';
  }
  
  renderQuickActions() {
    if (!this.options.showQuickAdd) return '';
    
    return `
      <div class="product-card__quick-actions">
        <button class="btn btn--sm btn--primary product-card__quick-view" aria-label="Quick view ${this.product.name}">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor">
            <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
            <circle cx="12" cy="12" r="3"></circle>
          </svg>
        </button>
        <button class="btn btn--sm btn--secondary product-card__add-to-cart" aria-label="Add ${this.product.name} to cart">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor">
            <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"></path>
            <line x1="3" y1="6" x2="21" y2="6"></line>
            <path d="M16 10a4 4 0 0 1-8 0"></path>
          </svg>
        </button>
      </div>
    `;
  }
  
  renderContent() {
    const originalPrice = this.product.originalPrice && this.product.originalPrice !== this.product.price 
      ? `<span class="product-card__original-price">$${this.product.originalPrice}</span>` 
      : '';
    
    return `
      <div class="product-card__category">${this.product.category}</div>
      <h3 class="card__title product-card__title">${this.product.name}</h3>
      <p class="card__description product-card__description">${this.product.description}</p>
      <div class="product-card__rating">
        ${this.renderRating(this.product.rating)}
        <span class="product-card__rating-count">(${this.product.reviews || 0})</span>
      </div>
      <div class="product-card__price">
        <span class="product-card__current-price">$${this.product.price}</span>
        ${originalPrice}
      </div>
    `;
  }
  
  renderRating(rating = 0) {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;
    
    for (let i = 0; i < 5; i++) {
      if (i < fullStars) {
        stars.push('<span class="star star--filled">★</span>');
      } else if (i === fullStars && hasHalfStar) {
        stars.push('<span class="star star--half">★</span>');
      } else {
        stars.push('<span class="star star--empty">☆</span>');
      }
    }
    
    return `<div class="product-card__stars">${stars.join('')}</div>`;
  }
  
  renderActions() {
    return `
      <button class="btn btn--primary btn--sm product-card__add-to-cart">
        Add to Cart
      </button>
      <button class="btn btn--ghost btn--sm product-card__wishlist" aria-label="Add to wishlist">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor">
          <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
        </svg>
      </button>
    `;
  }
  
  setupLazyLoading(img) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const image = entry.target;
          image.src = image.dataset.src;
          image.classList.add('loaded');
          observer.unobserve(image);
        }
      });
    });
    
    observer.observe(img);
  }
  
  addToCart() {
    stateManager.dispatch('ADD_TO_CART', this.product);
    
    // Add visual feedback
    const button = this.element.querySelector('.product-card__add-to-cart');
    if (button) {
      button.classList.add('btn--loading');
      setTimeout(() => {
        button.classList.remove('btn--loading');
      }, 1000);
    }
  }
  
  showQuickView() {
    // Dispatch event for quick view modal
    window.dispatchEvent(new CustomEvent('show-product-quick-view', {
      detail: { product: this.product }
    }));
  }
  
  navigateToProduct() {
    window.location.href = `src/pages/product-detail.html?id=${this.product.id}`;
  }
}

/**
 * Shopping Cart Component
 */
class ShoppingCart extends Component {
  init() {
    super.init();
    
    // Subscribe to cart changes
    this.subscribe('cart', (cart) => {
      this.updateCartDisplay(cart);
    });
    
    this.subscribe('cartCount', (count) => {
      this.updateCartCount(count);
    });
  }
  
  bindEvents() {
    // Cart toggle
    const cartToggle = document.querySelector('.cart-toggle');
    if (cartToggle) {
      cartToggle.addEventListener('click', () => {
        stateManager.dispatch('SHOW_MODAL', 'cart');
      });
    }
    
    // Quantity controls
    this.element.addEventListener('click', (e) => {
      if (e.target.matches('.cart-item__increase')) {
        const productId = e.target.closest('.cart-item').dataset.productId;
        const currentQuantity = parseInt(e.target.closest('.cart-item').querySelector('.cart-item__quantity').textContent);
        stateManager.dispatch('UPDATE_CART_QUANTITY', { id: productId, quantity: currentQuantity + 1 });
      }
      
      if (e.target.matches('.cart-item__decrease')) {
        const productId = e.target.closest('.cart-item').dataset.productId;
        const currentQuantity = parseInt(e.target.closest('.cart-item').querySelector('.cart-item__quantity').textContent);
        stateManager.dispatch('UPDATE_CART_QUANTITY', { id: productId, quantity: Math.max(0, currentQuantity - 1) });
      }
      
      if (e.target.matches('.cart-item__remove')) {
        const productId = e.target.closest('.cart-item').dataset.productId;
        stateManager.dispatch('REMOVE_FROM_CART', productId);
      }
    });
  }
  
  updateCartDisplay(cart) {
    const cartItems = this.element.querySelector('.cart-items');
    if (!cartItems) return;
    
    if (cart.length === 0) {
      cartItems.innerHTML = `
        <div class="cart-empty">
          <p>Your cart is empty</p>
          <button class="btn btn--primary" onclick="stateManager.dispatch('HIDE_MODAL', 'cart')">
            Continue Shopping
          </button>
        </div>
      `;
      return;
    }
    
    cartItems.innerHTML = cart.map(item => this.renderCartItem(item)).join('');
  }
  
  renderCartItem(item) {
    return `
      <div class="cart-item" data-product-id="${item.id}">
        <img class="cart-item__image" src="${item.image}" alt="${item.name}">
        <div class="cart-item__details">
          <h4 class="cart-item__name">${item.name}</h4>
          <p class="cart-item__price">$${item.price}</p>
        </div>
        <div class="cart-item__controls">
          <button class="btn btn--sm btn--ghost cart-item__decrease">-</button>
          <span class="cart-item__quantity">${item.quantity}</span>
          <button class="btn btn--sm btn--ghost cart-item__increase">+</button>
        </div>
        <div class="cart-item__total">$${(item.price * item.quantity).toFixed(2)}</div>
        <button class="btn btn--sm btn--ghost cart-item__remove" aria-label="Remove item">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor">
            <polyline points="3,6 5,6 21,6"></polyline>
            <path d="M19,6v14a2,2,0,0,1-2,2H7a2,2,0,0,1-2-2V6m3,0V4a2,2,0,0,1,2-2h4a2,2,0,0,1,2,2V6"></path>
          </svg>
        </button>
      </div>
    `;
  }
  
  updateCartCount(count) {
    const cartCounts = document.querySelectorAll('.cart-count');
    cartCounts.forEach(element => {
      element.textContent = count;
      element.style.display = count > 0 ? 'inline' : 'none';
    });
  }
}

/**
 * Search Component
 */
class SearchComponent extends Component {
  get defaultOptions() {
    return {
      debounceDelay: 300,
      minLength: 2
    };
  }
  
  bindEvents() {
    const searchInput = this.element.querySelector('.search-input');
    if (!searchInput) return;
    
    let debounceTimer;
    
    searchInput.addEventListener('input', (e) => {
      clearTimeout(debounceTimer);
      debounceTimer = setTimeout(() => {
        const query = e.target.value.trim();
        if (query.length >= this.options.minLength || query.length === 0) {
          stateManager.dispatch('SET_SEARCH_QUERY', query);
        }
      }, this.options.debounceDelay);
    });
    
    // Clear search
    const clearBtn = this.element.querySelector('.search-clear');
    if (clearBtn) {
      clearBtn.addEventListener('click', () => {
        searchInput.value = '';
        stateManager.dispatch('SET_SEARCH_QUERY', '');
      });
    }
  }
}

/**
 * Notification System
 */
class NotificationSystem extends Component {
  init() {
    super.init();
    
    this.subscribe('notifications', (notifications) => {
      this.renderNotifications(notifications);
    });
  }
  
  renderNotifications(notifications) {
    this.element.innerHTML = notifications.map(notification => 
      this.renderNotification(notification)
    ).join('');
  }
  
  renderNotification(notification) {
    return `
      <div class="toast toast--${notification.type} toast--show" data-notification-id="${notification.id}">
        <div class="toast__content">
          ${notification.title ? `<div class="toast__title">${notification.title}</div>` : ''}
          <div class="toast__message">${notification.message}</div>
        </div>
        <button class="toast__close" onclick="stateManager.dispatch('REMOVE_NOTIFICATION', '${notification.id}')">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor">
            <line x1="18" y1="6" x2="6" y2="18"></line>
            <line x1="6" y1="6" x2="18" y2="18"></line>
          </svg>
        </button>
      </div>
    `;
  }
}

/**
 * Component Factory
 */
class ComponentFactory {
  static components = new Map();
  
  static register(name, ComponentClass) {
    this.components.set(name, ComponentClass);
  }
  
  static create(name, element, options) {
    const ComponentClass = this.components.get(name);
    if (!ComponentClass) {
      console.warn(`Component '${name}' not found`);
      return null;
    }
    
    return new ComponentClass(element, options);
  }
  
  static autoInit() {
    document.querySelectorAll('[data-component]').forEach(element => {
      const componentName = element.dataset.component;
      const options = element.dataset.componentOptions 
        ? JSON.parse(element.dataset.componentOptions) 
        : {};
      
      this.create(componentName, element, options);
    });
  }
}

// Register built-in components
ComponentFactory.register('product-card', ProductCard);
ComponentFactory.register('shopping-cart', ShoppingCart);
ComponentFactory.register('search', SearchComponent);
ComponentFactory.register('notifications', NotificationSystem);

// Auto-initialize components when DOM is ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', () => ComponentFactory.autoInit());
} else {
  ComponentFactory.autoInit();
}

export { Component, ProductCard, ShoppingCart, SearchComponent, NotificationSystem, ComponentFactory };