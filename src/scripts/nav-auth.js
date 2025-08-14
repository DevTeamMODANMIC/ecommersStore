(function(){
  function getBase() {
    const path = window.location.pathname.replace(/\\/g, '/');
    // Heuristic: if we're inside /src/pages/, base is '../', else ''
    if (/\/src\/pages\//.test(path)) return '../';
    return '';
  }

  function paths(base){
    // Pin links to the current origin so Home always resolves to your root index.html
    // Example base: http://127.0.0.1:5502/
    const origin = window.location.origin;
    const root = origin + '/';
    const pages = root + 'src/pages/';
    return {
      home: root + 'index.html',
      products: pages + 'products.html',
      about: pages + 'about.html',
      contact: pages + 'contact.html',
      orders: pages + 'orders.html',
      login: pages + 'login.html',
      register: pages + 'register.html',
      cart: pages + 'cart.html'
    };
  }

  function buildHeader(base, user){
    const p = paths(base);
    const authLinks = user ? `
      <li><a href="${p.orders}">My Orders</a></li>
      <li><a href="#" id="logoutLink">Logout</a></li>
    ` : `
      <li><a href="${p.login}">Login</a></li>
      <li><a href="${p.register}">Register</a></li>
    `;

    return `
      <div class="container">
        <nav class="nav" role="navigation" aria-label="Main">
          <a href="${p.home}" class="logo">ModernStore</a>
          <div class="search">
            <input type="search" placeholder="Search products..." aria-label="Search">
          </div>
          <ul class="nav-links">
            <li><a href="${p.home}">Home</a></li>
            <li><a href="${p.products}">Products</a></li>
            <li><a href="${p.about}">About</a></li>
            <li><a href="${p.contact}">Contact</a></li>
            ${authLinks}
          </ul>
          <button class="orders-btn" id="headerOrdersBtn" aria-label="My Orders" title="My Orders">
            <!-- Package/Box icon (commonly used for orders/shipments) -->
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true" focusable="false">
              <path d="M21 16V8a2 2 0 0 0-1-1.73L12 2 4 6.27A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73L12 22l8-4.27A2 2 0 0 0 21 16z"></path>
              <path d="M3.3 7L12 12l8.7-5"></path>
              <path d="M12 22V12"></path>
            </svg>
          </button>
          <button class="cart-btn" id="headerCartBtn" aria-label="Open shopping cart">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"></path>
              <line x1="3" y1="6" x2="21" y2="6"></line>
              <path d="M16 10a4 4 0 0 1-8 0"></path>
            </svg>
            <span class="cart-count" id="cartCount">0</span>
          </button>
          <button class="mobile-menu-toggle" id="mobileToggle" aria-label="Toggle mobile menu" aria-expanded="false" aria-controls="mobileNav">
            <span></span><span></span><span></span>
          </button>
        </nav>
        <div class="mobile-nav" id="mobileNav" role="dialog" aria-label="Mobile navigation">
          <ul>
            <li><a href="${p.home}">Home</a></li>
            <li><a href="${p.products}">Products</a></li>
            <li><a href="${p.about}">About</a></li>
            <li><a href="${p.contact}">Contact</a></li>
            ${user ? `<li><a href="${p.orders}">My Orders</a></li><li><a href="#" id="logoutLinkMobile">Logout</a></li>` : `<li><a href="${p.login}">Login</a></li><li><a href="${p.register}">Register</a></li>`}
          </ul>
        </div>
      </div>
    `;
  }

  function sumCart(){
    try{
      const cart = JSON.parse(localStorage.getItem('cart')) || [];
      return cart.reduce((s,i)=> s + (i.quantity||0), 0);
    }catch(e){ return 0; }
  }

  function highlightActiveLinks(header){
    const links = header.querySelectorAll('a');
    const path = window.location.pathname.replace(/\\/g,'/');
    links.forEach(a => {
      try{
        const url = new URL(a.href, window.location.origin).pathname;
        if (url === path || (path.endsWith('/index.html') && a.href.endsWith('index.html'))) {
          a.classList.add('active');
        }
      }catch(e){}
    });
  }

  function ensureHeaderStyles(){
    if (document.getElementById('nav-auth-styles')) return;
    const s = document.createElement('style');
    s.id = 'nav-auth-styles';
    s.textContent = `
      .header{background:rgba(255,255,255,0.95);backdrop-filter:blur(10px);border-bottom:1px solid rgba(0,0,0,0.1);position:sticky;top:0;z-index:1000;box-shadow:0 2px 10px rgba(0,0,0,0.06)}
      .header .container{max-width:1200px;margin:0 auto;padding:0 1rem}
      .header .nav{display:flex;align-items:center;justify-content:space-between;gap:2rem;padding:1rem 0}
      .header .logo{font-size:1.25rem;font-weight:700;color:#3b82f6;text-decoration:none}
      .header .search{flex:1;max-width:400px}
      .header .search input{width:100%;padding:.6rem 1rem;border:1px solid #e5e7eb;border-radius:.75rem;font-size:.9rem}
      .header .search input:focus{outline:none;border-color:#3b82f6;box-shadow:0 0 0 3px rgba(59,130,246,.1)}
      .header .nav-links{display:flex;list-style:none;gap:1.25rem}
      .header .nav-links a{text-decoration:none;color:#4b5563;font-weight:500}
      .header .nav-links a:hover,.header .nav-links a.active{color:#3b82f6}
      .header .cart-btn,.header .orders-btn{position:relative;background:none;border:none;color:#4b5563;cursor:pointer;padding:.5rem;border-radius:.5rem;display:inline-flex;align-items:center;justify-content:center;transition:color .2s ease, background-color .2s ease}
      .header .cart-btn:hover,.header .orders-btn:hover{background:#f3f4f6;color:#3b82f6}
      .header .orders-btn svg,.header .cart-btn svg{width:22px;height:22px}
      .header .cart-count{position:absolute;top:0;right:0;background:#ef4444;color:#fff;font-size:.75rem;font-weight:600;padding:.1rem .4rem;border-radius:9999px;display:none}
      .header .mobile-menu-toggle{display:none;flex-direction:column;background:none;border:none;cursor:pointer;padding:.5rem;gap:.25rem}
      .header .mobile-menu-toggle span{width:1.5rem;height:2px;background:#4b5563;border-radius:1px}
      .header .mobile-nav{display:none;position:absolute;left:0;right:0;top:100%;background:#fff;border-top:1px solid #e5e7eb;box-shadow:0 8px 18px rgba(0,0,0,.08)}
      .header .mobile-nav.show{display:block}
      .header .mobile-nav ul{list-style:none;padding:.5rem 0;margin:0}
      .header .mobile-nav li{border-bottom:1px solid #f3f4f6}
      .header .mobile-nav a{display:block;padding:1rem 1.25rem;color:#4b5563;text-decoration:none;font-weight:500}
      .header .mobile-nav a:hover{background:#f9fafb;color:#3b82f6}
      @media(max-width:768px){.header .nav-links{display:none}.header .mobile-menu-toggle{display:flex}.header .nav{position:relative}}
      /* Global loader */
      .app-loader{position:fixed;inset:0;background:#ffffff;display:flex;align-items:center;justify-content:center;z-index:2000;opacity:1;transition:opacity .35s ease}
      .app-loader.hidden{opacity:0;pointer-events:none}
      .app-spinner{width:44px;height:44px;border:3px solid #e5e7eb;border-top-color:#3b82f6;border-radius:50%;animation:navSpin 1s linear infinite}
      @keyframes navSpin{to{transform:rotate(360deg)}}
    `;
    document.head.appendChild(s);
  }

  function ensureLoader(){
    if (document.getElementById('appLoader')) return;
    const d = document.createElement('div');
    d.id = 'appLoader';
    d.className = 'app-loader';
    d.setAttribute('aria-label','Loading');
    d.setAttribute('role','status');
    d.innerHTML = '<div class="app-spinner" aria-hidden="true"></div>';
    document.body.appendChild(d);
  }

  function init(){
    const base = getBase();
    const user = window.Auth ? Auth.getCurrentUser() : null;
    ensureHeaderStyles();
    ensureLoader();
    let header = document.querySelector('header.header');
    if (!header){ header = document.createElement('header'); header.className='header'; document.body.prepend(header); }
    header.setAttribute('role','banner');
    header.innerHTML = buildHeader(base, user);

    // Ensure only one auth action is shown consistently
    (function(){
      const p = paths(base);
      const path = window.location.pathname.replace(/\\/g,'/').toLowerCase();
      const isLogin = /\/login\.html$/.test(path);
      const isRegister = /\/register\.html$/.test(path);
      function pruneAuthLinks(ul, desired){
        if (!ul) return;
        const loginLink = ul.querySelector(`a[href='${p.login}']`);
        const registerLink = ul.querySelector(`a[href='${p.register}']`);
        if (user){
          // remove both login/register if logged in
          if (loginLink) loginLink.parentElement.remove();
          if (registerLink) registerLink.parentElement.remove();
          return;
        }
        // logged out
        const show = desired; // 'login' or 'register'
        if (show === 'login'){
          if (registerLink) registerLink.parentElement.remove();
        } else {
          if (loginLink) loginLink.parentElement.remove();
        }
      }
      const desired = user ? null : (isLogin ? 'register' : (isRegister ? 'login' : 'login'));
      pruneAuthLinks(header.querySelector('.nav-links'), desired);
      pruneAuthLinks(header.querySelector('#mobileNav ul'), desired);
    })();

    // Cart count
    const cartCountEl = header.querySelector('#cartCount');
    if (cartCountEl){ const count = sumCart(); cartCountEl.textContent = count; cartCountEl.style.display = count>0?'block':'none'; }

    // Cart button action
    const cartBtn = header.querySelector('#headerCartBtn');
    if (cartBtn){
      cartBtn.addEventListener('click', ()=>{
        const p = paths(base);
        window.location.href = p.cart;
      });
    }
    const ordersBtn = header.querySelector('#headerOrdersBtn');
    if (ordersBtn){
      ordersBtn.addEventListener('click', ()=>{
        const p = paths(base);
        window.location.href = p.orders;
      });
    }

    // Mobile menu
    const toggle = header.querySelector('#mobileToggle');
    const mobileNav = header.querySelector('#mobileNav');
    if (toggle && mobileNav){
      toggle.addEventListener('click', ()=>{
        const expanded = toggle.getAttribute('aria-expanded') === 'true';
        toggle.setAttribute('aria-expanded', String(!expanded));
        mobileNav.classList.toggle('show');
      });
      document.addEventListener('click', (e)=>{
        if (!mobileNav.contains(e.target) && !toggle.contains(e.target)){
          mobileNav.classList.remove('show');
          toggle.setAttribute('aria-expanded','false');
        }
      });
    }

    // Logout
    const logoutLink = header.querySelector('#logoutLink');
    const logoutLinkMobile = header.querySelector('#logoutLinkMobile');
    const handleLogout = (e)=>{ e.preventDefault(); if (window.Auth){ Auth.logout(); } window.location.href = paths(base).home; };
    if (logoutLink) logoutLink.addEventListener('click', handleLogout);
    if (logoutLinkMobile) logoutLinkMobile.addEventListener('click', handleLogout);

    // Highlight
    highlightActiveLinks(header);

    // Hide loader after 2-3 seconds (randomized within range for natural feel)
    const loader = document.getElementById('appLoader');
    if (loader){
      const delay = 2000 + Math.floor(Math.random()*1000); // 2000-2999ms
      setTimeout(()=> loader.classList.add('hidden'), delay);
    }
  }

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init); else init();
})();