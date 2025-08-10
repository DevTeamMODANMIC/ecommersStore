/**
 * Navigation System for ModernStore
 * Handles mobile menu toggle, cart functionality, and navigation state
 */

// Global navigation functions
function toggleMobileMenu() {
    const mobileNav = document.getElementById('mobileNav');
    const menuToggle = document.querySelector('.mobile-menu-toggle');
    
    if (mobileNav) {
        const isOpen = mobileNav.classList.contains('active');
        
        if (isOpen) {
            mobileNav.classList.remove('active');
            menuToggle?.setAttribute('aria-expanded', 'false');
        } else {
            mobileNav.classList.add('active');
            menuToggle?.setAttribute('aria-expanded', 'true');
        }
    }
}

function toggleCart() {
    const cartSidebar = document.getElementById('cartSidebar');
    const cartOverlay = document.getElementById('cartOverlay');
    
    if (cartSidebar) {
        const isOpen = cartSidebar.classList.contains('active');
        
        if (isOpen) {
            cartSidebar.classList.remove('active');
            cartOverlay?.classList.remove('active');
            document.body.style.overflow = '';
        } else {
            cartSidebar.classList.add('active');
            cartOverlay?.classList.add('active');
            document.body.style.overflow = 'hidden';
            
            // Load cart content if function exists
            if (typeof loadCartContent === 'function') {
                loadCartContent();
            }
        }
    } else {
        // Fallback: redirect to cart page if sidebar doesn't exist
        window.location.href = getCurrentPath() + 'src/pages/cart.html';
    }
}

function closeCart() {
    const cartSidebar = document.getElementById('cartSidebar');
    const cartOverlay = document.getElementById('cartOverlay');
    
    cartSidebar?.classList.remove('active');
    cartOverlay?.classList.remove('active');
    document.body.style.overflow = '';
}

// Helper function to get current path for relative navigation
function getCurrentPath() {
    const path = window.location.pathname;
    if (path.includes('/src/pages/')) {
        return '../../';
    }
    return './';
}

// Update cart count in navigation
function updateCartCount(count = 0) {
    const cartCountElements = document.querySelectorAll('.cart-count, #cartCount');
    cartCountElements.forEach(element => {
        element.textContent = count;
        element.style.display = count > 0 ? 'flex' : 'none';
    });
}

// Set active navigation link
function setActiveNavLink() {
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    const navLinks = document.querySelectorAll('.nav-links a, .mobile-nav a, .nav-menu a');
    
    navLinks.forEach(link => {
        link.classList.remove('active');
        const href = link.getAttribute('href');
        
        if (href) {
            const linkPage = href.split('/').pop();
            if (linkPage === currentPage || 
                (currentPage === '' && linkPage === 'index.html') ||
                (currentPage === 'index.html' && linkPage === 'index.html')) {
                link.classList.add('active');
            }
        }
    });
}

// Initialize navigation when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    // Set active navigation link
    setActiveNavLink();
    
    // Add click handlers for mobile menu
    const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
    if (mobileMenuToggle) {
        mobileMenuToggle.addEventListener('click', toggleMobileMenu);
    }
    
    // Add click handlers for cart buttons
    const cartButtons = document.querySelectorAll('.cart-btn');
    cartButtons.forEach(button => {
        button.addEventListener('click', toggleCart);
    });
    
    // Add click handler for cart overlay
    const cartOverlay = document.getElementById('cartOverlay');
    if (cartOverlay) {
        cartOverlay.addEventListener('click', closeCart);
    }
    
    // Close mobile menu when clicking on nav links
    const mobileNavLinks = document.querySelectorAll('.mobile-nav a');
    mobileNavLinks.forEach(link => {
        link.addEventListener('click', () => {
            const mobileNav = document.getElementById('mobileNav');
            const menuToggle = document.querySelector('.mobile-menu-toggle');
            mobileNav?.classList.remove('active');
            menuToggle?.setAttribute('aria-expanded', 'false');
        });
    });
    
    // Initialize cart count from localStorage
    if (typeof getCartItemCount === 'function') {
        updateCartCount(getCartItemCount());
    }
});

// Handle window resize to close mobile menu on desktop
window.addEventListener('resize', function() {
    if (window.innerWidth > 768) {
        const mobileNav = document.getElementById('mobileNav');
        const menuToggle = document.querySelector('.mobile-menu-toggle');
        mobileNav?.classList.remove('active');
        menuToggle?.setAttribute('aria-expanded', 'false');
    }
});

// Export functions for use in other scripts
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        toggleMobileMenu,
        toggleCart,
        closeCart,
        updateCartCount,
        setActiveNavLink
    };
}