/**
 * ModernStore Main Application
 * Modern, modular architecture with state management and components
 */

import stateManager from './core/state-manager.js';
import { ComponentFactory, ProductCard, ShoppingCart } from './core/component-system.js';
import { LazyLoader, ImageOptimizer, ResourcePreloader, performanceMonitor } from './utils/performance.js';

class ModernStoreApp {
  constructor() {
    this.isInitialized = false;
    this.lazyLoader = new LazyLoader();
    this.preloader = new ResourcePreloader();
    
    // Bind methods
    this.init = this.init.bind(this);
    this.handleRouting = this.handleRouting.bind(this);
    this.setupGlobalEventListeners = this.setupGlobalEventListeners.bind(this);
  }
  
  async init() {
    if (this.isInitialized) return;
    
    try {
      // Show loading state
      this.showLoadingState();
      
      // Initialize core systems
      await this.initializeCore();
      
      // Load initial data
      await this.loadInitialData();
      
      // Setup UI components
      this.initializeComponents();
      
      // Setup performance optimizations
      this.initializePerformanceOptimizations();
      
      // Setup routing
      this.initializeRouting();
      
      // Setup global event listeners
      this.setupGlobalEventListeners();
      
      // Hide loading state
      this.hideLoadingState();
      
      this.isInitialized = true;
      
      // Dispatch app ready event
      window.dispatchEvent(new CustomEvent('app-ready'));
      
      console.log('ModernStore App initialized successfully');
      
    } catch (error) {
      console.error('Failed to initialize ModernStore App:', error);
      this.showErrorState(error);
    }
  }
  
  async initializeCore() {
    // Initialize state manager with middleware
    stateManager.use(this.createLoggingMiddleware());
    stateManager.use(this.createValidationMiddleware());
    
    // Load persisted state
    stateManager.loadPersistedState();
    
    // Setup state subscriptions for UI updates
    this.setupStateSubscriptions();
  }
  
  async loadInitialData() {
    // Load products data
    await stateManager.dispatch('LOAD_PRODUCTS');
    
    // Preload critical resources
    await this.preloadCriticalResources();
  }
  
  initializeComponents() {
    // Auto-initialize components with data attributes
    ComponentFactory.autoInit();
    
    // Initialize specific components
    this.initializeProductGrid();
    this.initializeShoppingCart();
    this.initializeSearch();
    this.initializeModals();
    this.initializeNotifications();
  }
  
  initializePerformanceOptimizations() {
    // Setup lazy loading for images
    this.lazyLoader.observe('img[data-src]');
    
    // Setup lazy loading for content sections
    this.lazyLoader.observe('[data-load-content]');
    
    // Preload critical images
    const criticalImages = this.getCriticalImages();
    if (criticalImages.length > 0) {
      ImageOptimizer.preloadCriticalImages(criticalImages);
    }
    
    // Setup intersection observer for animations
    this.setupScrollAnimations();
  }
  
  initializeRouting() {
    // Simple client-side routing for SPA behavior
    window.addEventListener('popstate', this.handleRouting);
    
    // Handle internal navigation links
    document.addEventListener('click', (e) => {
      const link = e.target.closest('a[href^="/"], a[href^="./"], a[href^="../"]');
      if (link && !link.hasAttribute('data-external')) {
        e.preventDefault();
        this.navigate(link.href);
      }
    });
  }
  
  setupGlobalEventListeners() {
    // Keyboard shortcuts
    document.addEventListener('keydown', (e) => {
      // Escape key closes modals
      if (e.key === 'Escape') {
        this.closeAllModals();
      }
      
      // Ctrl/Cmd + K opens search
      if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
        e.preventDefault();
        this.focusSearch();
      }
    });
    
    // Handle cart updates
    window.addEventListener('cart-updated', (e) => {
      this.updateCartUI(e.detail);
    });
    
    // Handle product quick view
    window.addEventListener('show-product-quick-view', (e) => {
      this.showProductQuickView(e.detail.product);
    });
    
    // Handle network status
    window.addEventListener('online', () => {
      stateManager.dispatch('ADD_NOTIFICATION', {
        type: 'success',
        title: 'Connection Restored',
        message: 'You are back online',
        duration: 3000
      });
    });
    
    window.addEventListener('offline', () => {
      stateManager.dispatch('ADD_NOTIFICATION', {
        type: 'warning',
        title: 'Connection Lost',
        message: 'You are currently offline',
        duration: 5000
      });
    });
  }
  
  setupStateSubscriptions() {
    // Subscribe to cart changes
    stateManager.subscribe('cart', (cart) => {
      this.updateCartDisplay(cart);
      this.updateCartCount(stateManager.getState('cartCount'));
    });
    
    // Subscribe to search changes
    stateManager.subscribe('searchQuery', (query) => {
      this.filterProducts();
    });
    
    // Subscribe to category changes
    stateManager.subscribe('selectedCategory', () => {
      this.filterProducts();
    });
    
    // Subscribe to loading state
    stateManager.subscribe('isLoading', (isLoading) => {
      if (isLoading) {
        this.showLoadingState();
      } else {
        this.hideLoadingState();
      }
    });
  }
  
  initializeProductGrid() {
    const productGrid = document.querySelector('.product-grid');
    if (!productGrid) return;
    
    // Subscribe to products and render
    stateManager.subscribe('products', (products) => {
      this.renderProductGrid(products, productGrid);
    });
    
    // Initial render if products are already loaded
    const products = stateManager.getState('products');
    if (products.length > 0) {
      this.renderProductGrid(products, productGrid);
    }
  }
  
  renderProductGrid(products, container) {
    // Clear existing content
    container.innerHTML = '';
    
    // Filter products based on current filters
    const filteredProducts = this.getFilteredProducts(products);
    
    if (filteredProducts.length === 0) {
      container.innerHTML = `
        <div class="no-products">
          <h3>No products found</h3>
          <p>Try adjusting your search or filters</p>
        </div>
      `;
      return;
    }
    
    // Create product cards
    filteredProducts.forEach(product => {
      const cardElement = document.createElement('div');
      cardElement.className = 'product-card-container';
      container.appendChild(cardElement);
      
      // Initialize product card component
      new ProductCard(cardElement, { product });
    });
    
    // Setup lazy loading for new images
    this.lazyLoader.observe(container.querySelectorAll('img[data-src]'));
  }
  
  getFilteredProducts(products) {
    const searchQuery = stateManager.getState('searchQuery').toLowerCase();
    const selectedCategory = stateManager.getState('selectedCategory');
    const sortBy = stateManager.getState('sortBy');
    
    let filtered = products;
    
    // Apply search filter
    if (searchQuery) {
      filtered = filtered.filter(product =>
        product.name.toLowerCase().includes(searchQuery) ||
        product.description.toLowerCase().includes(searchQuery) ||
        product.category.toLowerCase().includes(searchQuery)
      );
    }
    
    // Apply category filter
    if (selectedCategory && selectedCategory !== 'all') {
      filtered = filtered.filter(product =>
        product.category.toLowerCase() === selectedCategory.toLowerCase()
      );
    }
    
    // Apply sorting
    filtered.sort((a, b) => {
      switch (sortBy) {
        case 'name':
          return a.name.localeCompare(b.name);
        case 'price-low':
          return a.price - b.price;
        case 'price-high':
          return b.price - a.price;
        case 'rating':
          return (b.rating || 0) - (a.rating || 0);
        case 'newest':
          return new Date(b.createdAt || 0) - new Date(a.createdAt || 0);
        default:
          return 0;
      }
    });
    
    return filtered;
  }
  
  initializeShoppingCart() {
    const cartContainer = document.querySelector('.shopping-cart');
    if (cartContainer) {
      new ShoppingCart(cartContainer);
    }
  }
  
  initializeSearch() {
    const searchContainer = document.querySelector('.search-container');
    if (searchContainer) {
      ComponentFactory.create('search', searchContainer);
    }
  }
  
  initializeModals() {
    // Cart modal
    const cartModal = document.querySelector('.cart-modal');
    if (cartModal) {
      stateManager.subscribe('modals.cart', (isOpen) => {
        if (isOpen) {
          this.showModal(cartModal);
        } else {
          this.hideModal(cartModal);
        }
      });
    }
    
    // Product detail modal
    const productModal = document.querySelector('.product-modal');
    if (productModal) {
      stateManager.subscribe('modals.productDetail', (isOpen) => {
        if (isOpen) {
          this.showModal(productModal);
        } else {
          this.hideModal(productModal);
        }
      });
    }
  }
  
  initializeNotifications() {
    const notificationContainer = document.querySelector('.toast-container') || this.createNotificationContainer();
    ComponentFactory.create('notifications', notificationContainer);
  }
  
  createNotificationContainer() {
    const container = document.createElement('div');
    container.className = 'toast-container';
    document.body.appendChild(container);
    return container;
  }
  
  async preloadCriticalResources() {
    const resources = [
      { type: 'image', url: '/assets/hero-image.jpg' },
      { type: 'image', url: '/assets/logo.png' },
      { type: 'font', url: '/assets/fonts/inter.woff2', family: 'Inter' }
    ];
    
    await this.preloader.preload(resources);
  }
  
  getCriticalImages() {
    // Return URLs of images that should be preloaded
    const heroImage = document.querySelector('.hero-image');
    const logo = document.querySelector('.logo img');
    
    const images = [];
    if (heroImage?.src) images.push(heroImage.src);
    if (logo?.src) images.push(logo.src);
    
    return images;
  }
  
  setupScrollAnimations() {
    const animatedElements = document.querySelectorAll('[data-animate]');
    
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const animation = entry.target.dataset.animate;
          entry.target.classList.add(`animate-${animation}`);
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1 });
    
    animatedElements.forEach(el => observer.observe(el));
  }
  
  filterProducts() {
    const products = stateManager.getState('products');
    const productGrid = document.querySelector('.product-grid');
    
    if (products.length > 0 && productGrid) {
      this.renderProductGrid(products, productGrid);
    }
  }
  
  updateCartDisplay(cart) {
    // Update cart UI elements
    const cartItems = document.querySelectorAll('.cart-item-count');
    const cartTotal = document.querySelectorAll('.cart-total');
    
    cartItems.forEach(el => {
      el.textContent = cart.reduce((sum, item) => sum + item.quantity, 0);
    });
    
    cartTotal.forEach(el => {
      el.textContent = `$${cart.reduce((sum, item) => sum + (item.price * item.quantity), 0).toFixed(2)}`;
    });
  }
  
  updateCartCount(count) {
    const cartCounts = document.querySelectorAll('.cart-count');
    cartCounts.forEach(el => {
      el.textContent = count;
      el.style.display = count > 0 ? 'inline' : 'none';
    });
  }
  
  showModal(modal) {
    modal.classList.add('modal-overlay--open');
    document.body.style.overflow = 'hidden';
  }
  
  hideModal(modal) {
    modal.classList.remove('modal-overlay--open');
    document.body.style.overflow = '';
  }
  
  closeAllModals() {
    Object.keys(stateManager.getState('modals')).forEach(modalName => {
      stateManager.dispatch('HIDE_MODAL', modalName);
    });
  }
  
  focusSearch() {
    const searchInput = document.querySelector('.search-input');
    if (searchInput) {
      searchInput.focus();
    }
  }
  
  showProductQuickView(product) {
    // Implementation for product quick view modal
    stateManager.setState({ selectedProduct: product });
    stateManager.dispatch('SHOW_MODAL', 'productDetail');
  }
  
  navigate(url) {
    // Simple client-side navigation
    history.pushState(null, '', url);
    this.handleRouting();
  }
  
  handleRouting() {
    const path = window.location.pathname;
    const page = this.getPageFromPath(path);
    
    stateManager.setState({ currentPage: page });
    
    // Load page-specific content
    this.loadPageContent(page);
  }
  
  getPageFromPath(path) {
    if (path === '/' || path === '/index.html') return 'home';
    if (path.includes('products')) return 'products';
    if (path.includes('cart')) return 'cart';
    if (path.includes('checkout')) return 'checkout';
    return 'home';
  }
  
  loadPageContent(page) {
    // Load page-specific JavaScript and content
    switch (page) {
      case 'products':
        this.loadProductsPage();
        break;
      case 'cart':
        this.loadCartPage();
        break;
      case 'checkout':
        this.loadCheckoutPage();
        break;
    }
  }
  
  loadProductsPage() {
    // Products page specific initialization
    const categoryFilter = document.querySelector('.category-filter');
    if (categoryFilter) {
      this.initializeCategoryFilter(categoryFilter);
    }
  }
  
  loadCartPage() {
    // Cart page specific initialization
  }
  
  loadCheckoutPage() {
    // Checkout page specific initialization
  }
  
  showLoadingState() {
    const loader = document.querySelector('.app-loader') || this.createLoader();
    loader.style.display = 'flex';
  }
  
  hideLoadingState() {
    const loader = document.querySelector('.app-loader');
    if (loader) {
      loader.style.display = 'none';
    }
  }
  
  createLoader() {
    const loader = document.createElement('div');
    loader.className = 'app-loader';
    loader.innerHTML = `
      <div class="loader-content">
        <div class="spinner"></div>
        <p>Loading ModernStore...</p>
      </div>
    `;
    document.body.appendChild(loader);
    return loader;
  }
  
  showErrorState(error) {
    stateManager.dispatch('ADD_NOTIFICATION', {
      type: 'error',
      title: 'Application Error',
      message: error.message || 'An unexpected error occurred',
      duration: 0 // Persistent error
    });
  }
  
  createLoggingMiddleware() {
    return (updates, prevState, action) => {
      if (process.env.NODE_ENV === 'development') {
        console.group(`State Update: ${action}`);
        console.log('Updates:', updates);
        console.log('Previous State:', prevState);
        console.groupEnd();
      }
      return updates;
    };
  }
  
  createValidationMiddleware() {
    return (updates, prevState, action) => {
      // Add validation logic here
      if (updates.cart && !Array.isArray(updates.cart)) {
        console.warn('Cart must be an array');
        return { ...updates, cart: prevState.cart };
      }
      
      return updates;
    };
  }
  
  // Public API methods
  getState(path) {
    return stateManager.getState(path);
  }
  
  dispatch(action, payload) {
    return stateManager.dispatch(action, payload);
  }
  
  addToCart(product) {
    return stateManager.dispatch('ADD_TO_CART', product);
  }
  
  removeFromCart(productId) {
    return stateManager.dispatch('REMOVE_FROM_CART', productId);
  }
  
  showNotification(notification) {
    return stateManager.dispatch('ADD_NOTIFICATION', notification);
  }
}

// Create and initialize the app
const app = new ModernStoreApp();

// Initialize when DOM is ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', app.init);
} else {
  app.init();
}

// Make app available globally for debugging
if (typeof window !== 'undefined') {
  window.modernStore = app;
}

export default app;