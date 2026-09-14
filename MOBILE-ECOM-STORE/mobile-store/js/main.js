// ============================================
// MAIN.JS - Homepage Functionality
// ============================================

(function() {
    'use strict';

    // ========== DOM ELEMENTS ==========
    const hamburger = document.getElementById('hamburger');
    const mobileNav = document.getElementById('mobileNav');
    const searchInput = document.getElementById('searchInput');
    const searchBtn = document.getElementById('searchBtn');
    const categoriesGrid = document.getElementById('categoriesGrid');
    const featuredProducts = document.getElementById('featuredProducts');

    // ========== INITIALIZE ==========
    function init() {
        renderCategories();
        renderFeaturedProducts();
        updateCartBadge();
        setupEventListeners();
        setupSearch();
        animateHero();
    }

    // ========== SETUP EVENT LISTENERS ==========
    function setupEventListeners() {
        // Hamburger menu
        if (hamburger && mobileNav) {
            hamburger.addEventListener('click', () => {
                hamburger.classList.toggle('active');
                mobileNav.classList.toggle('active');
                document.body.style.overflow = mobileNav.classList.contains('active') ? 'hidden' : '';
            });
        }

        // Close mobile nav on link click
        if (mobileNav) {
            mobileNav.querySelectorAll('a').forEach(link => {
                link.addEventListener('click', () => {
                    hamburger.classList.remove('active');
                    mobileNav.classList.remove('active');
                    document.body.style.overflow = '';
                });
            });
        }

        // Cart badge update on storage change
        window.addEventListener('storage', (e) => {
            if (e.key === 'cart') {
                updateCartBadge();
            }
        });

        // Update cart badge when returning to page
        document.addEventListener('visibilitychange', () => {
            if (!document.hidden) {
                updateCartBadge();
            }
        });
    }

    // ========== SETUP SEARCH ==========
    function setupSearch() {
        if (!searchInput || !searchBtn) return;

        const performSearch = () => {
            const query = searchInput.value.trim();
            if (query) {
                window.location.href = `product.html?search=${encodeURIComponent(query)}`;
            }
        };

        searchBtn.addEventListener('click', performSearch);
        searchInput.addEventListener('keyup', (e) => {
            if (e.key === 'Enter') {
                performSearch();
            }
        });
    }

    // ========== ANIMATE HERO ==========
    function animateHero() {
        const heroContent = document.querySelector('.hero-content');
        const heroImage = document.querySelector('.hero-image');
        
        if (heroContent) {
            heroContent.style.opacity = '0';
            heroContent.style.transform = 'translateY(30px)';
            setTimeout(() => {
                heroContent.style.transition = 'all 0.8s ease';
                heroContent.style.opacity = '1';
                heroContent.style.transform = 'translateY(0)';
            }, 100);
        }

        if (heroImage) {
            heroImage.style.opacity = '0';
            heroImage.style.transform = 'scale(0.95)';
            setTimeout(() => {
                heroImage.style.transition = 'all 0.8s ease 0.3s';
                heroImage.style.opacity = '1';
                heroImage.style.transform = 'scale(1)';
            }, 200);
        }
    }

    // ========== RENDER CATEGORIES ==========
    function renderCategories() {
        if (!categoriesGrid) return;

        const categories = [
            { id: 'android', name: 'Android', icon: 'fab fa-android', count: '8 models' },
            { id: 'iphone', name: 'iPhone', icon: 'fab fa-apple', count: '8 models' },
            { id: 'infinix', name: 'Infinix', icon: 'fas fa-mobile-alt', count: '5 models' },
            { id: 'nokia', name: 'Nokia', icon: 'fas fa-phone', count: '5 models' },
            { id: 'readme', name: 'Readme', icon: 'fas fa-book-open', count: '6 models' },
            { id: 'realme', name: 'Realme', icon: 'fas fa-mobile-screen-button', count: '3 models' },
            { id: 'oppo', name: 'OPPO', icon: 'fas fa-camera-retro', count: '3 models' },
            { id: 'vivo', name: 'Vivo', icon: 'fas fa-mobile-alt', count: '3 models' },
            { id: 'tecno', name: 'Tecno', icon: 'fas fa-sim-card', count: '3 models' },
            { id: 'asus', name: 'Asus', icon: 'fas fa-laptop', count: '3 models' }
        ];

        categoriesGrid.innerHTML = categories.map(cat => `
            <a href="product.html?category=${cat.id}" class="category-card">
                <i class="${cat.icon}"></i>
                <span>${cat.name}</span>
                <small>${cat.count}</small>
            </a>
        `).join('');
    }

    // ========== RENDER FEATURED PRODUCTS ==========
    function renderFeaturedProducts() {
        if (!featuredProducts || typeof products === 'undefined') {
            return;
        }

        // Get 8 featured products (you can customize which ones)
        const featured = products.slice(0, 8);

        featuredProducts.innerHTML = featured.map(product => `
            <div class="product-card" data-id="${product.id}">
                <div class="product-image">
                    <img src="${product.image || 'assets/placeholder/product-placeholder.svg'}" 
                         alt="${product.name}" 
                         loading="lazy"
                         onerror="this.src='assets/placeholder/product-placeholder.svg'" />
                    ${product.discount ? `<span class="product-badge">-${product.discount}%</span>` : ''}
                </div>
                <div class="product-info">
                    <div class="product-category">${product.category}</div>
                    <h3 class="product-name">${product.name}</h3>
                    <div class="product-rating">
                        ${'★'.repeat(Math.floor(product.rating))}${'☆'.repeat(5 - Math.floor(product.rating))}
                        <span style="color: var(--text-muted); font-size: 0.8rem;">(${product.reviews})</span>
                    </div>
                    <div class="product-specs">
                        <span>${product.specs?.ram || '8GB'} RAM</span>
                        <span>${product.specs?.storage || '256GB'}</span>
                    </div>
                    <div class="product-detail-row">
                        <span><i class="fas fa-mobile-alt"></i> ${product.specs?.display || '6.7" AMOLED'}</span>
                        <span><i class="fas fa-camera"></i> ${product.specs?.camera || '48MP'}</span>
                    </div>
                    <div class="product-price">
                        <span class="current">$${product.price.toFixed(2)}</span>
                        ${product.originalPrice ? `<span class="original">$${product.originalPrice.toFixed(2)}</span>` : ''}
                    </div>
                    <div class="product-actions">
                        <button class="add-to-cart-btn" data-id="${product.id}" onclick="addToCartFromHome(${product.id})">
                            <i class="fas fa-shopping-cart"></i> Add to Cart
                        </button>
                        <a class="view-details-btn" href="product.html?productId=${product.id}">
                            <i class="fas fa-eye"></i> View
                        </a>
                    </div>
                </div>
            </div>
        `).join('');

        // Check which products are in cart
        updateFeaturedCartButtons();
    }

    // ========== UPDATE FEATURED CART BUTTONS ==========
    function updateFeaturedCartButtons() {
        const cart = getCart();
        document.querySelectorAll('#featuredProducts .add-to-cart-btn').forEach(btn => {
            const id = parseInt(btn.dataset.id);
            const inCart = cart.some(item => item.id === id);
            if (inCart) {
                btn.classList.add('in-cart');
                btn.innerHTML = '<i class="fas fa-check"></i> In Cart';
            }
        });
    }

    // ========== ADD TO CART FROM HOME ==========
    window.addToCartFromHome = function(productId) {
        if (typeof products === 'undefined') {
            showToast('Products data not loaded', 'error');
            return;
        }

        const product = products.find(p => p.id === productId);
        if (!product) return;

        let cart = getCart();
        const existing = cart.find(item => item.id === productId);

        if (existing) {
            existing.quantity += 1;
        } else {
            cart.push({
                id: product.id,
                name: product.name,
                price: product.price,
                image: product.image || 'assets/placeholder/product-placeholder.svg',
                quantity: 1
            });
        }

        saveCart(cart);
        updateCartBadge();
        updateFeaturedCartButtons();
        
        // Show success toast with animation
        showToast(`${product.name} added to cart! 🎉`, 'success');
        
        // Animate the button
        const buttons = document.querySelectorAll(`#featuredProducts .add-to-cart-btn[data-id="${productId}"]`);
        buttons.forEach(btn => {
            btn.style.transform = 'scale(1.1)';
            setTimeout(() => {
                btn.style.transform = 'scale(1)';
            }, 300);
        });
    };

    // ========== SMOOTH SCROLL FOR ANCHOR LINKS ==========
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            if (href === '#') return;
            
            e.preventDefault();
            const target = document.querySelector(href);
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // ========== INIT ==========
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }

})();