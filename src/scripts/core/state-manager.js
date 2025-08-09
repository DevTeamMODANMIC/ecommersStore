/**
 * ModernStore State Management System
 * A lightweight, reactive state management solution
 */

class StateManager {
  constructor() {
    this.state = {
      // App state
      isLoading: false,
      currentPage: 'home',
      
      // User state
      user: null,
      
      // Product state
      products: [],
      categories: [],
      featuredProducts: [],
      
      // Cart state
      cart: [],
      cartTotal: 0,
      cartCount: 0,
      
      // UI state
      modals: {
        cart: false,
        productDetail: false,
        checkout: false
      },
      notifications: [],
      
      // Search & Filter state
      searchQuery: '',
      selectedCategory: 'all',
      sortBy: 'name',
      priceRange: { min: 0, max: 1000 }
    };
    
    this.subscribers = new Map();
    this.middleware = [];
    
    // Initialize from localStorage
    this.loadPersistedState();
    
    // Auto-save to localStorage
    this.subscribe('cart', () => this.persistState());
    this.subscribe('user', () => this.persistState());
  }
  
  /**
   * Get current state or specific state slice
   */
  getState(path = null) {
    if (!path) return { ...this.state };
    
    return path.split('.').reduce((obj, key) => obj?.[key], this.state);
  }
  
  /**
   * Update state with automatic notification
   */
  setState(updates, action = 'UPDATE') {
    const prevState = { ...this.state };
    
    // Apply middleware
    for (const middleware of this.middleware) {
      updates = middleware(updates, prevState, action) || updates;
    }
    
    // Merge updates
    this.state = this.deepMerge(this.state, updates);
    
    // Notify subscribers
    this.notifySubscribers(updates, prevState);
    
    // Log state changes in development
    if (process.env.NODE_ENV === 'development') {
      console.log('State Update:', { action, updates, newState: this.state });
    }
  }
  
  /**
   * Subscribe to state changes
   */
  subscribe(path, callback) {
    if (!this.subscribers.has(path)) {
      this.subscribers.set(path, new Set());
    }
    
    this.subscribers.get(path).add(callback);
    
    // Return unsubscribe function
    return () => {
      const pathSubscribers = this.subscribers.get(path);
      if (pathSubscribers) {
        pathSubscribers.delete(callback);
        if (pathSubscribers.size === 0) {
          this.subscribers.delete(path);
        }
      }
    };
  }
  
  /**
   * Add middleware for state updates
   */
  use(middleware) {
    this.middleware.push(middleware);
  }
  
  /**
   * Dispatch actions with automatic state updates
   */
  dispatch(action, payload) {
    switch (action) {
      case 'LOAD_PRODUCTS':
        this.setState({ isLoading: true }, action);
        return this.loadProducts(payload);
        
      case 'ADD_TO_CART':
        return this.addToCart(payload);
        
      case 'REMOVE_FROM_CART':
        return this.removeFromCart(payload);
        
      case 'UPDATE_CART_QUANTITY':
        return this.updateCartQuantity(payload);
        
      case 'CLEAR_CART':
        return this.clearCart();
        
      case 'SET_SEARCH_QUERY':
        this.setState({ searchQuery: payload }, action);
        break;
        
      case 'SET_CATEGORY_FILTER':
        this.setState({ selectedCategory: payload }, action);
        break;
        
      case 'SET_SORT_BY':
        this.setState({ sortBy: payload }, action);
        break;
        
      case 'SHOW_MODAL':
        this.setState({
          modals: { ...this.state.modals, [payload]: true }
        }, action);
        break;
        
      case 'HIDE_MODAL':
        this.setState({
          modals: { ...this.state.modals, [payload]: false }
        }, action);
        break;
        
      case 'ADD_NOTIFICATION':
        this.addNotification(payload);
        break;
        
      case 'REMOVE_NOTIFICATION':
        this.removeNotification(payload);
        break;
        
      default:
        console.warn(`Unknown action: ${action}`);
    }
  }
  
  /**
   * Cart management methods
   */
  addToCart(product) {
    const existingItem = this.state.cart.find(item => item.id === product.id);
    
    if (existingItem) {
      this.updateCartQuantity({ id: product.id, quantity: existingItem.quantity + 1 });
    } else {
      const cartItem = { ...product, quantity: 1, addedAt: Date.now() };
      const newCart = [...this.state.cart, cartItem];
      
      this.setState({
        cart: newCart,
        cartCount: this.calculateCartCount(newCart),
        cartTotal: this.calculateCartTotal(newCart)
      }, 'ADD_TO_CART');
      
      this.dispatch('ADD_NOTIFICATION', {
        type: 'success',
        title: 'Added to Cart',
        message: `${product.name} has been added to your cart`,
        duration: 3000
      });
    }
  }
  
  removeFromCart(productId) {
    const newCart = this.state.cart.filter(item => item.id !== productId);
    
    this.setState({
      cart: newCart,
      cartCount: this.calculateCartCount(newCart),
      cartTotal: this.calculateCartTotal(newCart)
    }, 'REMOVE_FROM_CART');
  }
  
  updateCartQuantity({ id, quantity }) {
    if (quantity <= 0) {
      this.removeFromCart(id);
      return;
    }
    
    const newCart = this.state.cart.map(item =>
      item.id === id ? { ...item, quantity } : item
    );
    
    this.setState({
      cart: newCart,
      cartCount: this.calculateCartCount(newCart),
      cartTotal: this.calculateCartTotal(newCart)
    }, 'UPDATE_CART_QUANTITY');
  }
  
  clearCart() {
    this.setState({
      cart: [],
      cartCount: 0,
      cartTotal: 0
    }, 'CLEAR_CART');
  }
  
  /**
   * Product management methods
   */
  async loadProducts(options = {}) {
    try {
      this.setState({ isLoading: true });
      
      // Simulate API call or load from data
      const products = await this.fetchProducts(options);
      const categories = this.extractCategories(products);
      const featuredProducts = products.filter(p => p.featured);
      
      this.setState({
        products,
        categories,
        featuredProducts,
        isLoading: false
      }, 'LOAD_PRODUCTS');
      
    } catch (error) {
      this.setState({ isLoading: false });
      this.dispatch('ADD_NOTIFICATION', {
        type: 'error',
        title: 'Error Loading Products',
        message: error.message,
        duration: 5000
      });
    }
  }
  
  /**
   * Notification management
   */
  addNotification(notification) {
    const id = Date.now().toString();
    const newNotification = {
      id,
      type: 'info',
      duration: 4000,
      ...notification,
      timestamp: Date.now()
    };
    
    this.setState({
      notifications: [...this.state.notifications, newNotification]
    }, 'ADD_NOTIFICATION');
    
    // Auto-remove notification
    if (newNotification.duration > 0) {
      setTimeout(() => {
        this.removeNotification(id);
      }, newNotification.duration);
    }
  }
  
  removeNotification(id) {
    this.setState({
      notifications: this.state.notifications.filter(n => n.id !== id)
    }, 'REMOVE_NOTIFICATION');
  }
  
  /**
   * Utility methods
   */
  calculateCartCount(cart) {
    return cart.reduce((total, item) => total + item.quantity, 0);
  }
  
  calculateCartTotal(cart) {
    return cart.reduce((total, item) => total + (item.price * item.quantity), 0);
  }
  
  extractCategories(products) {
    const categories = [...new Set(products.map(p => p.category))];
    return categories.map(category => ({
      id: category.toLowerCase().replace(/\s+/g, '-'),
      name: category,
      count: products.filter(p => p.category === category).length
    }));
  }
  
  async fetchProducts(options) {
    // This would typically fetch from an API
    // For now, return mock data or load from existing data
    return window.mockProducts || [];
  }
  
  /**
   * Persistence methods
   */
  loadPersistedState() {
    try {
      const saved = localStorage.getItem('modernstore_state');
      if (saved) {
        const parsed = JSON.parse(saved);
        this.state = this.deepMerge(this.state, {
          cart: parsed.cart || [],
          user: parsed.user || null
        });
        
        // Recalculate cart totals
        this.state.cartCount = this.calculateCartCount(this.state.cart);
        this.state.cartTotal = this.calculateCartTotal(this.state.cart);
      }
    } catch (error) {
      console.warn('Failed to load persisted state:', error);
    }
  }
  
  persistState() {
    try {
      const stateToPersist = {
        cart: this.state.cart,
        user: this.state.user,
        timestamp: Date.now()
      };
      
      localStorage.setItem('modernstore_state', JSON.stringify(stateToPersist));
    } catch (error) {
      console.warn('Failed to persist state:', error);
    }
  }
  
  /**
   * Helper methods
   */
  deepMerge(target, source) {
    const result = { ...target };
    
    for (const key in source) {
      if (source[key] && typeof source[key] === 'object' && !Array.isArray(source[key])) {
        result[key] = this.deepMerge(result[key] || {}, source[key]);
      } else {
        result[key] = source[key];
      }
    }
    
    return result;
  }
  
  notifySubscribers(updates, prevState) {
    // Notify specific path subscribers
    for (const [path, callbacks] of this.subscribers) {
      const currentValue = this.getState(path);
      const prevValue = path.split('.').reduce((obj, key) => obj?.[key], prevState);
      
      if (currentValue !== prevValue) {
        callbacks.forEach(callback => {
          try {
            callback(currentValue, prevValue, this.state);
          } catch (error) {
            console.error('Error in state subscriber:', error);
          }
        });
      }
    }
  }
}

// Create singleton instance
const stateManager = new StateManager();

// Add development helpers
if (typeof window !== 'undefined') {
  window.stateManager = stateManager;
  window.getState = () => stateManager.getState();
}

export default stateManager;