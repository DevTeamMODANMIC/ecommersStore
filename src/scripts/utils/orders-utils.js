(function(){
  const ORDERS_KEY = 'modernstore_orders';
  const NOTIFICATIONS_KEY = 'modernstore_notifications';

  function loadOrders(){
    try { return JSON.parse(localStorage.getItem(ORDERS_KEY)) || []; } catch(e){ return []; }
  }
  function saveOrders(orders){ localStorage.setItem(ORDERS_KEY, JSON.stringify(orders)); }
  
  function loadNotifications(){
    try { return JSON.parse(localStorage.getItem(NOTIFICATIONS_KEY)) || []; } catch(e){ return []; }
  }
  function saveNotifications(notifications){ localStorage.setItem(NOTIFICATIONS_KEY, JSON.stringify(notifications)); }

  // Generate order ID with better format
  function generateOrderId(){
    const date = new Date();
    const year = date.getFullYear().toString().slice(-2);
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    const random = Math.floor(Math.random() * 1000).toString().padStart(3, '0');
    return `ORD-${year}${month}${day}-${random}`;
  }

  function createOrder({ userId = null, items = [], subtotal = 0, shipping = 0, tax = 0, total = 0, customerInfo = {} }){
    const orders = loadOrders();
    
    // Reduce stock for ordered items
    items.forEach(item => {
      if (window.Products && Products.reduceStock) {
        // Try to find product by name if no ID provided
        const products = Products.getProducts();
        const product = products.find(p => p.name === item.name || p.id === item.id);
        if (product) {
          Products.reduceStock(product.id, item.quantity);
        }
      }
    });

    const order = {
      id: generateOrderId(),
      userId,
      items: items.map(item => ({
        ...item,
        itemTotal: item.price * item.quantity
      })),
      customerInfo: {
        name: customerInfo.name || 'Guest Customer',
        email: customerInfo.email || '',
        phone: customerInfo.phone || '',
        address: customerInfo.address || {}
      },
      pricing: { subtotal, shipping, tax, total },
      status: 'pending',
      paymentStatus: 'pending',
      tracking: {
        number: null,
        carrier: null,
        estimatedDelivery: null,
        currentLocation: null
      },
      refund: {
        status: 'none', // none, requested, approved, processed
        amount: 0,
        reason: '',
        requestedAt: null,
        processedAt: null
      },
      history: [{ 
        status: 'pending', 
        at: Date.now(), 
        note: 'Order placed successfully',
        by: 'system'
      }],
      createdAt: Date.now(),
      updatedAt: Date.now()
    };
    orders.push(order);
    saveOrders(orders);
    
    // Create notification
    createNotification({
      type: 'order_created',
      title: 'New Order Received',
      message: `Order ${order.id} has been placed by ${order.customerInfo.name}`,
      orderId: order.id,
      priority: 'medium'
    });
    
    return order;
  }

  function getOrders(){ return loadOrders(); }
  function getOrdersByUser(userId){ return loadOrders().filter(o => o.userId === userId); }
  function getOrderById(id){ return loadOrders().find(o => o.id === id) || null; }
  
  function updateOrderStatus(id, newStatus, note = '', updatedBy = 'admin'){
    const orders = loadOrders();
    const order = orders.find(x => x.id === id);
    if (!order) return null;
    
    const oldStatus = order.status;
    order.status = newStatus;
    order.updatedAt = Date.now();
    order.history.push({ 
      status: newStatus, 
      at: Date.now(), 
      note: note || `Status changed from ${oldStatus} to ${newStatus}`,
      by: updatedBy
    });
    
    // Auto-generate tracking for shipped orders
    if (newStatus === 'shipped' && !order.tracking.number) {
      order.tracking = {
        number: 'TRK' + Date.now().toString().slice(-8),
        carrier: 'ModernStore Express',
        estimatedDelivery: new Date(Date.now() + 3 * 24 * 60 * 60 * 1000).toISOString(),
        currentLocation: 'Processing Facility'
      };
    }
    
    saveOrders(orders);
    
    // Create status update notification
    createNotification({
      type: 'order_status_changed',
      title: 'Order Status Updated',
      message: `Order ${id} status changed to ${newStatus}`,
      orderId: id,
      priority: newStatus === 'cancelled' ? 'high' : 'medium'
    });
    
    return order;
  }

  function updateTrackingInfo(orderId, trackingData){
    const orders = loadOrders();
    const order = orders.find(x => x.id === orderId);
    if (!order) return null;
    
    order.tracking = { ...order.tracking, ...trackingData };
    order.updatedAt = Date.now();
    order.history.push({
      status: order.status,
      at: Date.now(),
      note: `Tracking updated: ${trackingData.currentLocation || 'Location updated'}`,
      by: 'system'
    });
    
    saveOrders(orders);
    return order;
  }

  function processRefund(orderId, refundData){
    const orders = loadOrders();
    const order = orders.find(x => x.id === orderId);
    if (!order) return null;
    
    order.refund = {
      ...order.refund,
      ...refundData,
      processedAt: Date.now()
    };
    order.updatedAt = Date.now();
    order.history.push({
      status: order.status,
      at: Date.now(),
      note: `Refund ${refundData.status}: $${refundData.amount} - ${refundData.reason}`,
      by: 'admin'
    });
    
    saveOrders(orders);
    
    // Create refund notification
    createNotification({
      type: 'refund_processed',
      title: 'Refund Processed',
      message: `Refund of $${refundData.amount} processed for order ${orderId}`,
      orderId: orderId,
      priority: 'high'
    });
    
    return order;
  }

  function createNotification(notificationData){
    const notifications = loadNotifications();
    const notification = {
      id: 'notif_' + Date.now(),
      ...notificationData,
      read: false,
      createdAt: Date.now()
    };
    notifications.unshift(notification); // Add to beginning
    
    // Keep only last 100 notifications
    if (notifications.length > 100) {
      notifications.splice(100);
    }
    
    saveNotifications(notifications);
    
    // Trigger UI update if admin panel is open
    if (window.updateNotifications) {
      window.updateNotifications();
    }
    
    return notification;
  }

  function getNotifications(unreadOnly = false){
    const notifications = loadNotifications();
    return unreadOnly ? notifications.filter(n => !n.read) : notifications;
  }

  function markNotificationRead(notificationId){
    const notifications = loadNotifications();
    const notification = notifications.find(n => n.id === notificationId);
    if (notification) {
      notification.read = true;
      saveNotifications(notifications);
    }
  }

  function getOrderStats(){
    const orders = loadOrders();
    const now = Date.now();
    const oneDay = 24 * 60 * 60 * 1000;
    const oneWeek = 7 * oneDay;
    const oneMonth = 30 * oneDay;
    
    return {
      total: orders.length,
      pending: orders.filter(o => o.status === 'pending').length,
      processing: orders.filter(o => o.status === 'processing').length,
      shipped: orders.filter(o => o.status === 'shipped').length,
      delivered: orders.filter(o => o.status === 'delivered').length,
      cancelled: orders.filter(o => o.status === 'cancelled').length,
      refundRequested: orders.filter(o => o.refund.status === 'requested').length,
      totalRevenue: orders.reduce((sum, o) => sum + o.pricing.total, 0),
      todayOrders: orders.filter(o => now - o.createdAt < oneDay).length,
      weekOrders: orders.filter(o => now - o.createdAt < oneWeek).length,
      monthOrders: orders.filter(o => now - o.createdAt < oneMonth).length
    };
  }

  function getCustomerOrders(customerEmail) {
    const orders = loadOrders();
    return orders.filter(order => 
      order.customerInfo && order.customerInfo.email === customerEmail
    );
  }

  function getOrderHistory(customerId) {
    const orders = loadOrders();
    return orders.filter(order => 
      order.userId === customerId || 
      (order.customerInfo && order.customerInfo.email === customerId)
    );
  }

  // Export all functions
  window.Orders = { 
    loadOrders, saveOrders, createOrder, getOrders, getOrdersByUser, getOrderById, 
    updateOrderStatus, updateTrackingInfo, processRefund, 
    createNotification, getNotifications, markNotificationRead, getOrderStats,
    getCustomerOrders, getOrderHistory
  };
})();