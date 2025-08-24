(function(){
  const PRODUCTS_KEY = 'modernstore_products';

  // Default sample products
  const DEFAULT_PRODUCTS = [
    {
      id: 'prod_001',
      name: 'Wireless Bluetooth Headphones',
      price: 89.99,
      category: 'electronics',
      image: '/placeholder.svg?height=300&width=300&text=Headphones',
      description: 'Premium wireless headphones with noise cancellation and 30-hour battery life.',
      inStock: true,
      featured: true,
      stockQuantity: 25,
      sku: 'WBH-001',
      createdAt: Date.now(),
      updatedAt: Date.now()
    },
    {
      id: 'prod_002',
      name: 'Smart Watch Pro',
      price: 299.99,
      category: 'electronics',
      image: '/placeholder.svg?height=300&width=300&text=Smart+Watch',
      description: 'Advanced smartwatch with health monitoring, GPS, and water resistance.',
      inStock: true,
      featured: true,
      stockQuantity: 15,
      sku: 'SWP-002',
      createdAt: Date.now(),
      updatedAt: Date.now()
    },
    {
      id: 'prod_003',
      name: 'Phone Case Premium',
      price: 19.99,
      category: 'accessories',
      image: '/placeholder.svg?height=300&width=300&text=Phone+Case',
      description: 'Durable phone case with drop protection and wireless charging compatibility.',
      inStock: true,
      featured: false,
      stockQuantity: 50,
      sku: 'PCP-003',
      createdAt: Date.now(),
      updatedAt: Date.now()
    },
    {
      id: 'prod_004',
      name: 'Laptop Stand Adjustable',
      price: 45.99,
      category: 'accessories',
      image: '/placeholder.svg?height=300&width=300&text=Laptop+Stand',
      description: 'Ergonomic laptop stand with adjustable height and angle settings.',
      inStock: true,
      featured: false,
      stockQuantity: 30,
      sku: 'LSA-004',
      createdAt: Date.now(),
      updatedAt: Date.now()
    },
    {
      id: 'prod_005',
      name: 'Wireless Mouse',
      price: 29.99,
      category: 'electronics',
      image: '/placeholder.svg?height=300&width=300&text=Wireless+Mouse',
      description: 'Precision wireless mouse with ergonomic design and long battery life.',
      inStock: true,
      featured: false,
      stockQuantity: 40,
      sku: 'WM-005',
      createdAt: Date.now(),
      updatedAt: Date.now()
    },
    {
      id: 'prod_006',
      name: 'Portable Charger',
      price: 34.99,
      category: 'electronics',
      image: '/placeholder.svg?height=300&width=300&text=Power+Bank',
      description: 'High-capacity portable charger with fast charging and multiple ports.',
      inStock: true,
      featured: false,
      stockQuantity: 35,
      sku: 'PC-006',
      createdAt: Date.now(),
      updatedAt: Date.now()
    }
  ];

  function loadProducts(){
    try { 
      const stored = JSON.parse(localStorage.getItem(PRODUCTS_KEY));
      return stored && stored.length > 0 ? stored : DEFAULT_PRODUCTS;
    } catch(e){ 
      return DEFAULT_PRODUCTS; 
    }
  }

  function saveProducts(products){ 
    localStorage.setItem(PRODUCTS_KEY, JSON.stringify(products)); 
  }

  // Initialize with default products if none exist
  function initializeProducts() {
    const existing = localStorage.getItem(PRODUCTS_KEY);
    if (!existing) {
      saveProducts(DEFAULT_PRODUCTS);
    }
  }

  function generateProductId(){
    return 'prod_' + Date.now() + '_' + Math.random().toString(36).substr(2, 9);
  }

  function createProduct(productData){
    const products = loadProducts();
    const product = {
      id: generateProductId(),
      name: productData.name || '',
      price: parseFloat(productData.price) || 0,
      category: productData.category || 'general',
      image: productData.image || '/placeholder.svg?height=300&width=300&text=Product',
      description: productData.description || '',
      inStock: productData.inStock !== false,
      featured: productData.featured || false,
      stockQuantity: parseInt(productData.stockQuantity) || 0,
      sku: productData.sku || 'SKU-' + Date.now(),
      createdAt: Date.now(),
      updatedAt: Date.now()
    };
    
    products.push(product);
    saveProducts(products);
    
    // Trigger UI update if admin panel is open
    if (window.updateProductsDisplay) {
      window.updateProductsDisplay();
    }
    
    return product;
  }

  function getProducts(){ 
    return loadProducts(); 
  }

  function getProductById(id){ 
    return loadProducts().find(p => p.id === id) || null; 
  }

  function updateProduct(id, updateData){
    const products = loadProducts();
    const productIndex = products.findIndex(p => p.id === id);
    
    if (productIndex === -1) return null;
    
    products[productIndex] = {
      ...products[productIndex],
      ...updateData,
      updatedAt: Date.now()
    };
    
    saveProducts(products);
    
    // Trigger UI update
    if (window.updateProductsDisplay) {
      window.updateProductsDisplay();
    }
    
    return products[productIndex];
  }

  function deleteProduct(id){
    const products = loadProducts();
    const filteredProducts = products.filter(p => p.id !== id);
    
    if (filteredProducts.length === products.length) {
      return false; // Product not found
    }
    
    saveProducts(filteredProducts);
    
    // Trigger UI update
    if (window.updateProductsDisplay) {
      window.updateProductsDisplay();
    }
    
    return true;
  }

  function getProductsByCategory(category){
    return loadProducts().filter(p => p.category === category);
  }

  function getFeaturedProducts(){
    return loadProducts().filter(p => p.featured);
  }

  function searchProducts(query){
    const products = loadProducts();
    const searchTerm = query.toLowerCase();
    
    return products.filter(product => 
      product.name.toLowerCase().includes(searchTerm) ||
      product.description.toLowerCase().includes(searchTerm) ||
      product.category.toLowerCase().includes(searchTerm) ||
      product.sku.toLowerCase().includes(searchTerm)
    );
  }

  function updateStock(productId, quantity){
    const product = getProductById(productId);
    if (!product) return null;
    
    return updateProduct(productId, {
      stockQuantity: Math.max(0, quantity),
      inStock: quantity > 0
    });
  }

  function reduceStock(productId, quantity){
    const product = getProductById(productId);
    if (!product) return null;
    
    const newQuantity = Math.max(0, product.stockQuantity - quantity);
    return updateStock(productId, newQuantity);
  }

  function getProductStats(){
    const products = loadProducts();
    
    return {
      total: products.length,
      inStock: products.filter(p => p.inStock).length,
      outOfStock: products.filter(p => !p.inStock).length,
      featured: products.filter(p => p.featured).length,
      totalValue: products.reduce((sum, p) => sum + (p.price * p.stockQuantity), 0),
      categories: [...new Set(products.map(p => p.category))],
      lowStock: products.filter(p => p.stockQuantity < 10).length
    };
  }

  // Export all functions
  window.Products = { 
    loadProducts, 
    saveProducts, 
    initializeProducts,
    createProduct, 
    getProducts, 
    getProductById, 
    updateProduct, 
    deleteProduct,
    getProductsByCategory,
    getFeaturedProducts,
    searchProducts,
    updateStock,
    reduceStock,
    getProductStats
  };

  // Initialize products when script loads
  initializeProducts();
})();