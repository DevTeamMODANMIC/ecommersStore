(function(){
  const ORDERS_KEY = 'modernstore_orders';

  function loadOrders(){
    try { return JSON.parse(localStorage.getItem(ORDERS_KEY)) || []; } catch(e){ return []; }
  }
  function saveOrders(orders){ localStorage.setItem(ORDERS_KEY, JSON.stringify(orders)); }

  function createOrder({ userId = null, items = [], subtotal = 0, shipping = 0, tax = 0, total = 0 }){
    const orders = loadOrders();
    const order = {
      id: 'o_'+Date.now(),
      userId,
      items,
      subtotal, shipping, tax, total,
      status: 'Placed',
      history: [{ status: 'Placed', at: Date.now() }],
      createdAt: Date.now()
    };
    orders.push(order); saveOrders(orders); return order;
  }

  function getOrders(){ return loadOrders(); }
  function getOrdersByUser(userId){ return loadOrders().filter(o => o.userId === userId); }
  function getOrderById(id){ return loadOrders().find(o => o.id === id) || null; }
  function updateOrderStatus(id, status){
    const orders = loadOrders();
    const o = orders.find(x => x.id === id); if (!o) return null;
    o.status = status; o.history.push({ status, at: Date.now() });
    saveOrders(orders); return o;
  }

  window.Orders = { loadOrders, saveOrders, createOrder, getOrders, getOrdersByUser, getOrderById, updateOrderStatus };
})();