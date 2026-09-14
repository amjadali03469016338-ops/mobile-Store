// ============================================
// HEADER-LOADER.JS - Load Global Components
// ============================================

(function() {
    'use strict';

    const HEADER_TEMPLATE = `
        <header class="header" id="header">
            <div class="container">
                <div class="header-wrapper">
                    <a href="index.html" class="logo">
                        <i class="fas fa-mobile-alt"></i>
                        <span>Mobile<span>Store</span></span>
                    </a>

                    <div class="search-bar">
                        <input type="text" id="searchInput" placeholder="Search 500+ phones..." />
                        <button id="searchBtn"><i class="fas fa-search"></i></button>
                    </div>

                    <div class="header-actions">
                        <div class="user-profile-dropdown">
                            <button class="header-icon profile-btn" id="profileBtn" aria-label="Profile">
                                <i class="fas fa-user"></i>
                            </button>
                            <div class="profile-menu" id="profileMenu">
                                <div class="profile-header">
                                    <p id="userName">User</p>
                                    <p id="userEmail" class="user-email"></p>
                                </div>
                                <a href="account.html" class="profile-menu-item">
                                    <i class="fas fa-user-circle"></i> My Account
                                </a>
                                <a href="cart.html" class="profile-menu-item">
                                    <i class="fas fa-shopping-bag"></i> My Cart
                                </a>
                                <hr class="profile-divider">
                                <button class="profile-menu-item logout-btn" id="logoutBtn">
                                    <i class="fas fa-sign-out-alt"></i> Logout
                                </button>
                            </div>
                        </div>

                        <a href="cart.html" class="header-icon cart-icon" aria-label="Cart">
                            <i class="fas fa-shopping-bag"></i>
                            <span class="cart-badge" id="cartBadge">0</span>
                        </a>
                        <button class="hamburger" id="hamburger" aria-label="Menu">
                            <span></span>
                            <span></span>
                            <span></span>
                        </button>
                    </div>
                </div>
            </div>

            <nav class="desktop-nav">
                <div class="container">
                    <ul>
                        <li><a href="index.html" class="nav-link" data-page="home"><i class="fas fa-home"></i> Home</a></li>
                        <li><a href="product.html" class="nav-link" data-page="products"><i class="fas fa-list"></i> Products</a></li>
                        <li><a href="product.html?category=android" class="nav-link">Android</a></li>
                        <li><a href="product.html?category=iphone" class="nav-link">iPhone</a></li>
                        <li><a href="product.html?category=infinix" class="nav-link">Infinix</a></li>
                        <li><a href="product.html?category=nokia" class="nav-link">Nokia</a></li>
                        <li><a href="product.html?category=readme" class="nav-link">Readme</a></li>
                        <li><a href="cart.html" class="nav-link" data-page="cart"><i class="fas fa-shopping-bag"></i> Cart</a></li>
                        <li><a href="account.html" class="nav-link" data-page="account"><i class="fas fa-user"></i> Account</a></li>
                    </ul>
                </div>
            </nav>

            <nav class="mobile-nav" id="mobileNav">
                <ul>
                    <li><a href="index.html" class="nav-link" data-page="home"><i class="fas fa-home"></i> Home</a></li>
                    <li><a href="product.html" class="nav-link" data-page="products"><i class="fas fa-list"></i> Products</a></li>
                    <li><a href="product.html?category=android" class="nav-link"><i class="fab fa-android"></i> Android</a></li>
                    <li><a href="product.html?category=iphone" class="nav-link"><i class="fab fa-apple"></i> iPhone</a></li>
                    <li><a href="product.html?category=infinix" class="nav-link"><i class="fas fa-mobile-alt"></i> Infinix</a></li>
                    <li><a href="product.html?category=nokia" class="nav-link"><i class="fas fa-phone"></i> Nokia</a></li>
                    <li><a href="product.html?category=readme" class="nav-link"><i class="fas fa-book-open"></i> Readme</a></li>
                    <li><a href="cart.html" class="nav-link" data-page="cart"><i class="fas fa-shopping-bag"></i> Cart</a></li>
                    <li><a href="account.html" class="nav-link" data-page="account"><i class="fas fa-user"></i> Account</a></li>
                </ul>
            </nav>
        </header>
    `;

    const FOOTER_TEMPLATE = `
        <footer class="footer-container" id="footer-container">
            <div class="container">
                <div class="footer-grid">
                    <div class="footer-col">
                        <a href="index.html" class="logo">
                            <i class="fas fa-mobile-alt"></i>
                            <span>Mobile<span>Store</span></span>
                        </a>
                        <p>Your trusted destination for premium mobile devices since 2020.</p>
                        <div class="social-links">
                            <a href="#" aria-label="Facebook"><i class="fab fa-facebook-f"></i></a>
                            <a href="#" aria-label="Twitter"><i class="fab fa-twitter"></i></a>
                            <a href="#" aria-label="Instagram"><i class="fab fa-instagram"></i></a>
                            <a href="#" aria-label="YouTube"><i class="fab fa-youtube"></i></a>
                        </div>
                    </div>

                    <div class="footer-col">
                        <h4>Categories</h4>
                        <ul>
                            <li><a href="product.html?category=android">Android</a></li>
                            <li><a href="product.html?category=iphone">iPhone</a></li>
                            <li><a href="product.html?category=infinix">Infinix</a></li>
                            <li><a href="product.html?category=nokia">Nokia</a></li>
                            <li><a href="product.html?category=readme">Readme</a></li>
                        </ul>
                    </div>

                    <div class="footer-col">
                        <h4>Quick Links</h4>
                        <ul>
                            <li><a href="product.html">All Products</a></li>
                            <li><a href="cart.html">Shopping Cart</a></li>
                            <li><a href="account.html">My Account</a></li>
                            <li><a href="#">Track Order</a></li>
                            <li><a href="#">Wishlist</a></li>
                        </ul>
                    </div>

                    <div class="footer-col">
                        <h4>Support</h4>
                        <ul>
                            <li><a href="#">Help Center</a></li>
                            <li><a href="#">Returns Policy</a></li>
                            <li><a href="#">Shipping Info</a></li>
                            <li><a href="#">Contact Us</a></li>
                            <li><a href="#">FAQs</a></li>
                        </ul>
                    </div>

                    <div class="footer-col">
                        <h4>Contact</h4>
                        <ul>
                            <li><i class="fas fa-envelope"></i> support@mobilestore.com</li>
                            <li><i class="fas fa-phone"></i> +1 234 567 890</li>
                            <li><i class="fas fa-map-marker-alt"></i> 123 Mobile St, NYC</li>
                            <li><i class="fas fa-clock"></i> Mon-Sat: 9AM - 9PM</li>
                        </ul>
                    </div>
                </div>

                <div class="footer-bottom">
                    <p>&copy; 2026 MobileStore. All rights reserved. Made with <i class="fas fa-heart" style="color: #ef4444;"></i></p>
                    <div class="footer-payment">
                        <i class="fab fa-cc-visa"></i>
                        <i class="fab fa-cc-mastercard"></i>
                        <i class="fab fa-cc-amex"></i>
                        <i class="fab fa-cc-paypal"></i>
                        <i class="fab fa-cc-apple-pay"></i>
                    </div>
                </div>
            </div>
        </footer>
    `;

    function loadComponent(containerId, htmlString, callback) {
        const container = document.getElementById(containerId);
        if (!container) {
            console.error(`Container with ID "${containerId}" not found`);
            return;
        }

        container.innerHTML = htmlString;
        if (callback) callback();
        initHeaderFunctions();
    }

    function initHeaderFunctions() {
        setupProfileDropdown();

        const searchInput = document.getElementById('searchInput');
        const searchBtn = document.getElementById('searchBtn');

        if (searchInput && searchBtn) {
            const performSearch = () => {
                const query = searchInput.value.trim();
                if (query) {
                    window.location.href = `product.html?search=${encodeURIComponent(query)}`;
                }
            };

            const newSearchBtn = searchBtn.cloneNode(true);
            searchBtn.parentNode.replaceChild(newSearchBtn, searchBtn);

            newSearchBtn.addEventListener('click', performSearch);
            searchInput.addEventListener('keyup', (e) => {
                if (e.key === 'Enter') {
                    performSearch();
                }
            });
        }

        const hamburger = document.getElementById('hamburger');
        const mobileNav = document.getElementById('mobileNav');

        if (hamburger && mobileNav) {
            const newHamburger = hamburger.cloneNode(true);
            hamburger.parentNode.replaceChild(newHamburger, hamburger);

            newHamburger.addEventListener('click', () => {
                newHamburger.classList.toggle('active');
                mobileNav.classList.toggle('active');
                document.body.style.overflow = mobileNav.classList.contains('active') ? 'hidden' : '';
            });

            mobileNav.querySelectorAll('a').forEach(link => {
                link.addEventListener('click', () => {
                    newHamburger.classList.remove('active');
                    mobileNav.classList.remove('active');
                    document.body.style.overflow = '';
                });
            });
        }

        updateCartBadge();
        setActiveNavLink();

        window.removeEventListener('storage', handleStorageCartUpdate);
        window.addEventListener('storage', handleStorageCartUpdate);

        document.removeEventListener('visibilitychange', handleVisibilityChange);
        document.addEventListener('visibilitychange', handleVisibilityChange);
    }

    function handleStorageCartUpdate(e) {
        if (e.key === 'cart') {
            updateCartBadge();
        }
    }

    function handleVisibilityChange() {
        if (!document.hidden) {
            updateCartBadge();
        }
    }

    function setupProfileDropdown() {
        const profileBtn = document.getElementById('profileBtn');
        const profileMenu = document.getElementById('profileMenu');
        const logoutBtn = document.getElementById('logoutBtn');
        const userName = document.getElementById('userName');
        const userEmail = document.getElementById('userEmail');

        if (!profileBtn || !profileMenu) return;

        const authUser = getAuthUser();
        if (authUser && userName && userEmail) {
            userName.textContent = authUser.name || 'User';
            userEmail.textContent = authUser.email || '';
        }

        profileBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            profileMenu.classList.toggle('active');
        });

        document.addEventListener('click', (e) => {
            if (!profileBtn.contains(e.target) && !profileMenu.contains(e.target)) {
                profileMenu.classList.remove('active');
            }
        });

        profileMenu.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                profileMenu.classList.remove('active');
            });
        });

        if (logoutBtn) {
            logoutBtn.addEventListener('click', (e) => {
                e.preventDefault();
                profileMenu.classList.remove('active');
                if (typeof logout === 'function') {
                    logout();
                }
            });
        }
    }

    function setActiveNavLink() {
        const currentPage = window.location.pathname.split('/').pop() || 'index.html';
        const pageName = currentPage.split('.')[0];

        document.querySelectorAll('.nav-link').forEach(link => {
            const linkPage = link.getAttribute('data-page');
            if (linkPage === pageName) {
                link.classList.add('active');
            } else {
                link.classList.remove('active');
            }
        });
    }

    function initFooter() {
        console.log('Footer loaded successfully');
    }

    function loadGlobalComponents() {
        loadComponent('header-container', HEADER_TEMPLATE, initHeaderFunctions);
        loadComponent('footer-container', FOOTER_TEMPLATE, initFooter);
    }

    window.updateCartBadge = function() {
        const badge = document.getElementById('cartBadge');
        if (!badge) return;

        try {
            const cart = getCart();
            const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
            badge.textContent = totalItems;
            badge.style.display = totalItems > 0 ? 'flex' : 'none';
        } catch (e) {
            console.error('Error updating cart badge:', e);
        }
    };

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', loadGlobalComponents);
    } else {
        loadGlobalComponents();
    }
})();