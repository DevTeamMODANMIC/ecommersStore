// Advanced Homepage JavaScript
document.addEventListener('DOMContentLoaded', function () {
    console.log('DOM loaded, initializing Advanced ModernStore...');
    
    // Initialize advanced features
    initializeAdvancedFeatures();
    
    // Force load featured products if they don't load automatically
    setTimeout(function () {
        const placeholder = document.querySelector('.product-placeholder');
        const featuredContainer = document.getElementById('featured-products-grid');

        if (placeholder && placeholder.textContent.includes('Loading')) {
            console.log('Loading featured products manually...');

            // Create sample products if ProductCatalog is not available
            if (typeof ProductCatalog === 'undefined') {
                window.ProductCatalog = {
                    getFeaturedProducts: function () {
                        return [
                            {
                                id: 1,
                                name: "Premium Wireless Headphones",
                                price: 299.99,
                                image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400&h=300&fit=crop",
                                category: "electronics",
                                featured: true,
                                inStock: true
                            },
                            {
                                id: 2,
                                name: "Organic Cotton T-Shirt",
                                price: 29.99,
                                image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400&h=300&fit=crop",
                                category: "clothing",
                                featured: true,
                                inStock: true
                            },
                            {
                                id: 3,
                                name: "Smart Home Security Camera",
                                price: 149.99,
                                image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=300&fit=crop",
                                category: "electronics",
                                featured: true,
                                inStock: true
                            },
                            {
                                id: 4,
                                name: "Ceramic Plant Pot Set",
                                price: 45.99,
                                image: "https://images.unsplash.com/photo-1485955900006-10f4d324d411?w=400&h=300&fit=crop",
                                category: "home",
                                featured: true,
                                inStock: true
                            }
                        ];
                    }
                };
            }

            // Manually render featured products in compact home page format
            const featuredProducts = ProductCatalog.getFeaturedProducts();
            let productsHTML = '';

            featuredProducts.forEach((product, index) => {
                productsHTML += `
                    <article class="product-card premium-card home-card" data-product-id="${product.id}" style="animation-delay: ${index * 0.1}s">
                        <div class="product-image-container">
                            <div class="product-image">
                                <img src="${product.image}" alt="${product.name}" loading="lazy">
                                <div class="image-overlay">
                                    <div class="overlay-content">
                                        <button class="quick-view-btn" data-product-id="${product.id}">
                                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                                <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                                                <circle cx="12" cy="12" r="3"></circle>
                                            </svg>
                                            Quick View
                                        </button>
                                        <button class="wishlist-btn" data-product-id="${product.id}">
                                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                                <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
                                            </svg>
                                        </button>
                                    </div>
                                </div>
                            </div>
                            <div class="product-badges">
                                <span class="featured-badge">Featured</span>
                            </div>
                        </div>
                        <div class="product-info">
                            <div class="product-meta">
                                <span class="product-category">${product.category.toUpperCase()}</span>
                                <div class="product-rating">
                                    <div class="stars">
                                        <span class="star filled">★</span>
                                        <span class="star filled">★</span>
                                        <span class="star filled">★</span>
                                        <span class="star filled">★</span>
                                        <span class="star">★</span>
                                    </div>
                                    <span class="rating-count">(${Math.floor(Math.random() * 100) + 25})</span>
                                </div>
                            </div>
                            <h3 class="product-name">${product.name}</h3>
                            <div class="product-pricing">
                                <span class="current-price">$${product.price.toFixed(2)}</span>
                                <span class="original-price">$${(product.price * 1.2).toFixed(2)}</span>
                                <span class="discount-badge">-17%</span>
                            </div>
                            <div class="product-actions">
                                <button class="add-to-cart-btn premium-btn compact-btn" data-product-id="${product.id}">
                                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                        <circle cx="9" cy="21" r="1"></circle>
                                        <circle cx="20" cy="21" r="1"></circle>
                                        <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
                                    </svg>
                                    Add to Cart
                                </button>
                            </div>
                            <div class="product-features">
                                <span class="feature">✓ Free Shipping</span>
                                <span class="feature">✓ 30-Day Return</span>
                            </div>
                        </div>
                    </article>
                `;
            });

            if (featuredContainer) {
                featuredContainer.innerHTML = productsHTML;
            }
        }

        // Initialize slider
        if (typeof MainSlider !== 'undefined' && MainSlider.init) {
            MainSlider.init();
        } else {
            // Manual slider initialization
            initializeSlider();
        }
    }, 500);
});

// Advanced Features Initialization
function initializeAdvancedFeatures() {
    // Animated counters
    initializeCounters();
    
    // Advanced promotions slider
    initializePromotionsSlider();
    
    // Countdown timers
    initializeCountdownTimers();
    
    // Particle effects
    initializeParticleEffects();
    
    // Scroll animations
    initializeScrollAnimations();
}

// Animated Counters
function initializeCounters() {
    const counters = document.querySelectorAll('.stat-number-advanced');
    const observerOptions = {
        threshold: 0.5,
        rootMargin: '0px 0px -100px 0px'
    };

    const counterObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const counter = entry.target;
                const target = parseInt(counter.dataset.target);
                animateCounter(counter, target);
                counterObserver.unobserve(counter);
            }
        });
    }, observerOptions);

    counters.forEach(counter => {
        counterObserver.observe(counter);
    });
}

function animateCounter(element, target) {
    let current = 0;
    const increment = target / 50;
    const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
            element.textContent = target;
            clearInterval(timer);
        } else {
            element.textContent = Math.floor(current);
        }
    }, 30);
}

// Advanced Promotions Slider
function initializePromotionsSlider() {
    const track = document.getElementById('promotions-track');
    const slides = document.querySelectorAll('.promotion-slide');
    const indicators = document.querySelectorAll('.indicator');
    const prevBtn = document.getElementById('promo-prev');
    const nextBtn = document.getElementById('promo-next');
    
    let currentSlide = 0;
    const totalSlides = slides.length;

    function goToSlide(index) {
        // Remove active class from current slide and indicator
        slides[currentSlide].classList.remove('active');
        indicators[currentSlide].classList.remove('active');
        
        // Update current slide
        currentSlide = index;
        
        // Add active class to new slide and indicator
        slides[currentSlide].classList.add('active');
        indicators[currentSlide].classList.add('active');
    }

    function nextSlide() {
        const next = (currentSlide + 1) % totalSlides;
        goToSlide(next);
    }

    function prevSlide() {
        const prev = (currentSlide - 1 + totalSlides) % totalSlides;
        goToSlide(prev);
    }

    // Event listeners
    if (nextBtn) nextBtn.addEventListener('click', nextSlide);
    if (prevBtn) prevBtn.addEventListener('click', prevSlide);
    
    indicators.forEach((indicator, index) => {
        indicator.addEventListener('click', () => goToSlide(index));
    });

    // Auto-advance
    setInterval(nextSlide, 8000);
}

// Countdown Timers
function initializeCountdownTimers() {
    const timers = document.querySelectorAll('[id^="timer-"]');
    
    timers.forEach(timer => {
        if (timer.id === 'timer-1') {
            startCountdown(timer, 24 * 60 * 60); // 24 hours
        }
    });
}

function startCountdown(element, seconds) {
    const timer = setInterval(() => {
        const hours = Math.floor(seconds / 3600);
        const minutes = Math.floor((seconds % 3600) / 60);
        const secs = seconds % 60;
        
        element.textContent = `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
        
        if (seconds <= 0) {
            clearInterval(timer);
            element.textContent = 'EXPIRED';
        }
        
        seconds--;
    }, 1000);
}

// Particle Effects
function initializeParticleEffects() {
    const particlesContainer = document.getElementById('hero-particles');
    if (!particlesContainer) return;

    // Create floating particles
    for (let i = 0; i < 20; i++) {
        createParticle(particlesContainer);
    }
}

function createParticle(container) {
    const particle = document.createElement('div');
    particle.style.cssText = `
        position: absolute;
        width: ${Math.random() * 4 + 2}px;
        height: ${Math.random() * 4 + 2}px;
        background: rgba(255, 255, 255, ${Math.random() * 0.5 + 0.2});
        border-radius: 50%;
        left: ${Math.random() * 100}%;
        top: ${Math.random() * 100}%;
        animation: particleFloat ${Math.random() * 10 + 10}s linear infinite;
        animation-delay: ${Math.random() * 5}s;
    `;
    container.appendChild(particle);
}

// Scroll Animations
function initializeScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const scrollObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    // Observe elements with scroll animations
    const animatedElements = document.querySelectorAll('.feature-card, .trust-section, .promotion-slide');
    animatedElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(50px)';
        el.style.transition = 'all 0.6s cubic-bezier(0.4, 0, 0.2, 1)';
        scrollObserver.observe(el);
    });
}

// Manual slider initialization
function initializeSlider() {
    const slides = document.querySelectorAll('.slider-slide');
    const prevBtn = document.getElementById('slider-prev');
    const nextBtn = document.getElementById('slider-next');
    const dotsContainer = document.getElementById('slider-dots');
    let currentSlide = 0;

    // Create dots
    slides.forEach((_, index) => {
        const dot = document.createElement('button');
        dot.className = `slider-dot ${index === 0 ? 'active' : ''}`;
        dot.addEventListener('click', () => goToSlide(index));
        dotsContainer.appendChild(dot);
    });

    function goToSlide(index) {
        slides[currentSlide].classList.remove('active');
        document.querySelectorAll('.slider-dot')[currentSlide].classList.remove('active');

        currentSlide = index;
        slides[currentSlide].classList.add('active');
        document.querySelectorAll('.slider-dot')[currentSlide].classList.add('active');
    }

    function nextSlide() {
        goToSlide((currentSlide + 1) % slides.length);
    }

    function prevSlide() {
        goToSlide((currentSlide - 1 + slides.length) % slides.length);
    }

    if (prevBtn) prevBtn.addEventListener('click', prevSlide);
    if (nextBtn) nextBtn.addEventListener('click', nextSlide);

    // Auto-advance slides
    setInterval(nextSlide, 5000);
}

// Enhanced Interactions
document.addEventListener('mousemove', function(e) {
    // Parallax effect for hero background
    const hero = document.querySelector('.hero-section-advanced');
    if (hero) {
        const x = (e.clientX / window.innerWidth) * 100;
        const y = (e.clientY / window.innerHeight) * 100;
        
        const particles = document.querySelector('.hero-particles');
        if (particles) {
            particles.style.transform = `translate(${x * 0.02}px, ${y * 0.02}px)`;
        }
    }
});

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Newsletter Form
const newsletterForm = document.getElementById('newsletter-form');
if (newsletterForm) {
    newsletterForm.addEventListener('submit', function(e) {
        e.preventDefault();
        const email = this.querySelector('input[type="email"]').value;
        const submitBtn = this.querySelector('.submit-btn');
        const originalText = submitBtn.innerHTML;
        
        // Loading state
        submitBtn.innerHTML = `
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="animation: spin 1s linear infinite;">
                <circle cx="12" cy="12" r="10"></circle>
                <path d="M12 6v6l4 2"></path>
            </svg>
            <span class="btn-text">Subscribing...</span>
        `;
        submitBtn.disabled = true;
        
        // Simulate API call
        setTimeout(() => {
            submitBtn.innerHTML = `
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <path d="M20 6L9 17l-5-5"></path>
                </svg>
                <span class="btn-text">Subscribed!</span>
            `;
            
            showNotification('Successfully subscribed to newsletter!', 'success');
            
            setTimeout(() => {
                submitBtn.innerHTML = originalText;
                submitBtn.disabled = false;
                this.querySelector('input[type="email"]').value = '';
            }, 3000);
        }, 2000);
    });
}

// Loading screen
window.addEventListener('load', function() {
    document.body.classList.add('loaded');
    
    // Trigger entrance animations
    setTimeout(() => {
        const heroContent = document.querySelector('.hero-content-advanced');
        if (heroContent) {
            heroContent.style.opacity = '1';
            heroContent.style.transform = 'translateY(0)';
        }
    }, 500);
});

// Premium product interactions
document.addEventListener('click', function (e) {
    // Quantity selector functionality
    if (e.target.classList.contains('qty-btn')) {
        const qtyDisplay = e.target.parentNode.querySelector('.qty-display');
        let currentQty = parseInt(qtyDisplay.textContent);

        if (e.target.classList.contains('plus')) {
            currentQty = Math.min(currentQty + 1, 10);
        } else if (e.target.classList.contains('minus')) {
            currentQty = Math.max(currentQty - 1, 1);
        }

        qtyDisplay.textContent = currentQty;

        // Add animation
        qtyDisplay.style.transform = 'scale(1.2)';
        setTimeout(() => {
            qtyDisplay.style.transform = 'scale(1)';
        }, 150);
    }

    // Wishlist functionality
    if (e.target.closest('.wishlist-btn')) {
        const btn = e.target.closest('.wishlist-btn');
        btn.style.transform = 'scale(1.2)';
        btn.style.color = '#ef4444';

        setTimeout(() => {
            btn.style.transform = 'scale(1)';
        }, 200);

        // Show notification
        showNotification('Added to wishlist!', 'success');
    }

    // Quick view functionality
    if (e.target.closest('.quick-view-btn')) {
        const productId = e.target.closest('.quick-view-btn').dataset.productId;
        showNotification('Quick view coming soon!', 'info');
    }

    // Enhanced add to cart
    if (e.target.closest('.premium-btn')) {
        const btn = e.target.closest('.premium-btn');
        const originalText = btn.innerHTML;

        // Loading state
        btn.innerHTML = `
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="animation: spin 1s linear infinite;">
                <circle cx="12" cy="12" r="10"></circle>
                <path d="M12 6v6l4 2"></path>
            </svg>
            Adding...
        `;
        btn.disabled = true;

        setTimeout(() => {
            btn.innerHTML = `
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <path d="M20 6L9 17l-5-5"></path>
                </svg>
                Added!
            `;
            btn.style.background = 'linear-gradient(135deg, #10b981 0%, #059669 100%)';

            setTimeout(() => {
                btn.innerHTML = originalText;
                btn.style.background = '';
                btn.disabled = false;
            }, 2000);
        }, 1000);

        showNotification('Product added to cart!', 'success');
    }
});

// Notification system
function showNotification(message, type = 'info') {
    const notification = document.createElement('div');
    notification.className = `notification ${type}`;
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: ${type === 'success' ? '#10b981' : type === 'error' ? '#ef4444' : '#3b82f6'};
        color: white;
        padding: 12px 20px;
        border-radius: 8px;
        font-weight: 500;
        z-index: 10000;
        transform: translateX(100%);
        transition: transform 0.3s ease;
        box-shadow: 0 4px 12px rgba(0,0,0,0.15);
    `;
    notification.textContent = message;

    document.body.appendChild(notification);

    setTimeout(() => {
        notification.style.transform = 'translateX(0)';
    }, 100);

    setTimeout(() => {
        notification.style.transform = 'translateX(100%)';
        setTimeout(() => {
            document.body.removeChild(notification);
        }, 300);
    }, 3000);
}

// Add CSS animation for spin
const style = document.createElement('style');
style.textContent = `
    @keyframes spin {
        from { transform: rotate(0deg); }
        to { transform: rotate(360deg); }
    }
`;
document.head.appendChild(style);