// ============================================
// PRODUCT.JS - Products Page Functionality
// ============================================

(function() {
    'use strict';

    // State
    let allProducts = [];
    let filteredProducts = [];
    let currentPage = 1;
    const ITEMS_PER_PAGE = 12;
    let currentCategory = 'all';
    let currentRating = 0;
    let currentMaxPrice = 2000;
    let currentSort = 'default';

    // DOM Elements
    const productsGrid = document.getElementById('productsGrid');
    const productsCount = document.getElementById('productsCount');
    const productsTitle = document.getElementById('productsTitle');
    const sortSelect = document.getElementById('sortSelect');
    const priceRange = document.getElementById('priceRange');
    const priceDisplay = document.getElementById('priceDisplay');
    const applyFiltersBtn = document.getElementById('applyFilters');
    const clearFiltersBtn = document.getElementById('clearFilters');
    const filterToggle = document.getElementById('filterToggle');
    const filtersSidebar = document.getElementById('filtersSidebar');
    const closeFiltersBtn = document.getElementById('closeFilters');
    const prevPageBtn = document.getElementById('prevPage');
    const nextPageBtn = document.getElementById('nextPage');
    const pageInfo = document.getElementById('pageInfo');
    const searchInput = document.getElementById('searchInput');
    const searchBtn = document.getElementById('searchBtn');

    // ========== INITIALIZE ==========
    function init() {
        // Ensure modal is properly hidden on page load
        const backdrop = document.getElementById('productModalBackdrop');
        if (backdrop) {
            backdrop.setAttribute('hidden', '');
            document.body.style.overflow = '';
        }

        // Check if products data is available
        if (typeof products !== 'undefined' && products.length > 0) {
            allProducts = [...products];
            filteredProducts = [...allProducts];
            setupEventListeners();
            handleURLParams();
            applyFiltersAndRender();
        } else {
            console.error('Products data not found!');
            if (productsGrid) {
                productsGrid.innerHTML = `
                    <div class="empty-products">
                        <i class="fas fa-exclamation-triangle"></i>
                        <h3>No products available</h3>
                        <p>Please make sure data.js is loaded correctly</p>
                    </div>
                `;
            }
        }
    }

    // ========== HANDLE URL PARAMS ==========
    function handleURLParams() {
        const params = new URLSearchParams(window.location.search);
        const category = params.get('category');
        if (category) {
            const radio = document.querySelector(`input[name="category"][value="${category}"]`);
            if (radio) {
                radio.checked = true;
                currentCategory = category;
            }
        }
        const search = params.get('search');
        if (search && searchInput) {
            searchInput.value = search;
        }
        const productId = params.get('productId');
        if (productId) {
            const id = parseInt(productId, 10);
            if (!Number.isNaN(id)) {
                setTimeout(() => {
                    openProductDetail(id);
                }, 150);
            }
        }
    }

    // ========== SETUP EVENT LISTENERS ==========
    function setupEventListeners() {
        // Category filters
        document.querySelectorAll('input[name="category"]').forEach(radio => {
            radio.addEventListener('change', function() {
                currentCategory = this.value;
                closeProductDetailModal();
                const url = new URL(window.location.href);
                if (this.value === 'all') {
                    url.searchParams.delete('category');
                } else {
                    url.searchParams.set('category', this.value);
                }
                url.searchParams.delete('productId');
                window.history.replaceState({}, '', url);
            });
        });

        // Rating filters
        document.querySelectorAll('input[name="rating"]').forEach(radio => {
            radio.addEventListener('change', function() {
                currentRating = parseInt(this.value);
            });
        });

        // Price range
        if (priceRange) {
            priceRange.addEventListener('input', function() {
                currentMaxPrice = parseInt(this.value);
                if (priceDisplay) {
                    priceDisplay.textContent = `$${currentMaxPrice}`;
                }
            });
        }

        // Apply filters
        if (applyFiltersBtn) {
            applyFiltersBtn.addEventListener('click', applyFiltersAndRender);
        }

        // Clear filters
        if (clearFiltersBtn) {
            clearFiltersBtn.addEventListener('click', clearAllFilters);
        }

        // Sort
        if (sortSelect) {
            sortSelect.addEventListener('change', function() {
                currentSort = this.value;
                applySorting();
                renderProducts();
            });
        }

        // Search
        if (searchBtn && searchInput) {
            searchBtn.addEventListener('click', performSearch);
            searchInput.addEventListener('keyup', function(e) {
                if (e.key === 'Enter') {
                    performSearch();
                }
            });
        }

        // Filter toggle (mobile)
        if (filterToggle && filtersSidebar) {
            filterToggle.addEventListener('click', function() {
                filtersSidebar.classList.toggle('active');
                document.body.style.overflow = filtersSidebar.classList.contains('active') ? 'hidden' : '';
            });
        }

        if (closeFiltersBtn && filtersSidebar) {
            closeFiltersBtn.addEventListener('click', function() {
                filtersSidebar.classList.remove('active');
                document.body.style.overflow = '';
            });
        }

        // Click outside to close filters (mobile)
        if (filtersSidebar) {
            filtersSidebar.addEventListener('click', function(e) {
                if (e.target === this) {
                    this.classList.remove('active');
                    document.body.style.overflow = '';
                }
            });
        }

        // Pagination
        if (prevPageBtn) {
            prevPageBtn.addEventListener('click', function() {
                if (currentPage > 1) {
                    currentPage--;
                    renderProducts();
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                }
            });
        }

        if (nextPageBtn) {
            nextPageBtn.addEventListener('click', function() {
                const totalPages = Math.ceil(filteredProducts.length / ITEMS_PER_PAGE);
                if (currentPage < totalPages) {
                    currentPage++;
                    renderProducts();
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                }
            });
        }

        // Add to cart buttons (event delegation)
        if (productsGrid) {
            productsGrid.addEventListener('click', function(e) {
                const detailBtn = e.target.closest('.view-details-btn');
                if (detailBtn) {
                    const productId = parseInt(detailBtn.dataset.id);
                    openProductDetail(productId);
                    return;
                }

                const btn = e.target.closest('.add-to-cart-btn');
                if (btn) {
                    const productId = parseInt(btn.dataset.id);
                    addToCart(productId);
                }
            });
        }

        const productModalBackdrop = document.getElementById('productModalBackdrop');
        const closeProductModalBtn = document.getElementById('closeProductModal');

        if (closeProductModalBtn && productModalBackdrop) {
            closeProductModalBtn.addEventListener('click', closeProductDetailModal);
            productModalBackdrop.addEventListener('click', function(e) {
                if (e.target === productModalBackdrop) {
                    closeProductDetailModal();
                }
            });
        }

        document.addEventListener('keydown', function(e) {
            if (e.key === 'Escape') {
                closeProductDetailModal();
            }
        });

        // Hamburger menu
        const hamburger = document.getElementById('hamburger');
        const mobileNav = document.getElementById('mobileNav');
        if (hamburger && mobileNav) {
            hamburger.addEventListener('click', function() {
                this.classList.toggle('active');
                mobileNav.classList.toggle('active');
                document.body.style.overflow = mobileNav.classList.contains('active') ? 'hidden' : '';
            });

            mobileNav.querySelectorAll('a').forEach(link => {
                link.addEventListener('click', function() {
                    hamburger.classList.remove('active');
                    mobileNav.classList.remove('active');
                    document.body.style.overflow = '';
                });
            });
        }

        // Update cart badge on storage change
        window.addEventListener('storage', function(e) {
            if (e.key === 'cart') {
                updateCartBadge();
            }
        });

        // Update cart badge when returning to page
        document.addEventListener('visibilitychange', function() {
            if (!document.hidden) {
                updateCartBadge();
            }
        });
    }

    // ========== APPLY FILTERS AND RENDER ==========
    function applyFiltersAndRender() {
        closeProductDetailModal();

        // Get selected category
        const categoryRadio = document.querySelector('input[name="category"]:checked');
        if (categoryRadio) {
            currentCategory = categoryRadio.value;
        }

        // Get selected rating
        const ratingRadio = document.querySelector('input[name="rating"]:checked');
        if (ratingRadio) {
            currentRating = parseInt(ratingRadio.value);
        }

        // Get price
        if (priceRange) {
            currentMaxPrice = parseInt(priceRange.value);
        }

        // Apply filters
        filteredProducts = allProducts.filter(product => {
            // Category filter
            if (currentCategory !== 'all' && product.category.toLowerCase() !== currentCategory) {
                return false;
            }
            // Price filter
            if (product.price > currentMaxPrice) {
                return false;
            }
            // Rating filter
            if (currentRating > 0 && product.rating < currentRating) {
                return false;
            }
            return true;
        });

        // Apply sorting
        applySorting();

        // Reset to first page
        currentPage = 1;

        // Render
        renderProducts();

        // Update count
        if (productsCount) {
            productsCount.textContent = `${filteredProducts.length} products`;
        }

        // Update title
        const categoryName = currentCategory === 'all' ? 'All' : 
            currentCategory.charAt(0).toUpperCase() + currentCategory.slice(1);
        if (productsTitle) {
            productsTitle.textContent = `${categoryName} Products`;
        }

        // Close mobile filters
        if (filtersSidebar) {
            filtersSidebar.classList.remove('active');
            document.body.style.overflow = '';
        }

        // Show toast
        showToast(`Showing ${filteredProducts.length} products`, 'success');
    }

    // ========== CLEAR ALL FILTERS ==========
    function clearAllFilters() {
        closeProductDetailModal();

        // Reset category radios
        document.querySelectorAll('input[name="category"]').forEach(radio => {
            radio.checked = radio.value === 'all';
        });

        // Reset rating radios
        document.querySelectorAll('input[name="rating"]').forEach(radio => {
            radio.checked = radio.value === '0';
        });

        // Reset price
        if (priceRange) {
            priceRange.value = 2000;
            if (priceDisplay) {
                priceDisplay.textContent = '$2000';
            }
            currentMaxPrice = 2000;
        }

        // Reset sort
        if (sortSelect) {
            sortSelect.value = 'default';
            currentSort = 'default';
        }

        // Reset search
        if (searchInput) {
            searchInput.value = '';
        }

        // Reset state
        currentCategory = 'all';
        currentRating = 0;
        filteredProducts = [...allProducts];

        // Render
        currentPage = 1;
        renderProducts();

        if (productsCount) {
            productsCount.textContent = `${filteredProducts.length} products`;
        }
        if (productsTitle) {
            productsTitle.textContent = 'All Products';
        }

        showToast('Filters cleared', 'info');
    }

    // ========== PERFORM SEARCH ==========
    function performSearch() {
        closeProductDetailModal();

        if (!searchInput) return;

        const term = searchInput.value.trim();
        
        if (!term) {
            applyFiltersAndRender();
            return;
        }

        const searchQuery = term.toLowerCase().trim();
        filteredProducts = allProducts.filter(product => {
            return product.name.toLowerCase().includes(searchQuery) ||
                   product.brand.toLowerCase().includes(searchQuery) ||
                   product.category.toLowerCase().includes(searchQuery) ||
                   (product.description && product.description.toLowerCase().includes(searchQuery));
        });

        // Apply sorting
        applySorting();
        currentPage = 1;
        renderProducts();

        if (productsCount) {
            productsCount.textContent = `${filteredProducts.length} products found`;
        }
        if (productsTitle) {
            productsTitle.textContent = `Search: "${searchQuery}"`;
        }

        showToast(`Found ${filteredProducts.length} products`, 'info');
    }

    // ========== APPLY SORTING ==========
    function applySorting() {
        switch (currentSort) {
            case 'price-low':
                filteredProducts.sort((a, b) => a.price - b.price);
                break;
            case 'price-high':
                filteredProducts.sort((a, b) => b.price - a.price);
                break;
            case 'rating':
                filteredProducts.sort((a, b) => b.rating - a.rating);
                break;
            case 'popular':
                filteredProducts.sort((a, b) => (b.popularity || 0) - (a.popularity || 0));
                break;
            default:
                filteredProducts.sort((a, b) => a.id - b.id);
                break;
        }
    }

    // ========== RENDER PRODUCTS ==========
    function renderProducts() {
        if (!productsGrid) return;

        const start = (currentPage - 1) * ITEMS_PER_PAGE;
        const end = start + ITEMS_PER_PAGE;
        const paginatedProducts = filteredProducts.slice(start, end);

        if (paginatedProducts.length === 0) {
            productsGrid.innerHTML = `
                <div class="empty-products">
                    <i class="fas fa-search"></i>
                    <h3>No products found</h3>
                    <p>Try adjusting your filters or search terms</p>
                    <button class="btn-primary" onclick="window.clearAllFilters && clearAllFilters()">Clear Filters</button>
                </div>
            `;
        } else {
            productsGrid.innerHTML = paginatedProducts.map(product => `
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
                            <span>(${product.reviews || 0})</span>
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
                            ${product.discount ? `<span class="discount">-${product.discount}%</span>` : ''}
                        </div>
                        <div class="product-actions">
                            <button class="add-to-cart-btn" data-id="${product.id}">
                                <i class="fas fa-shopping-cart"></i> Add to Cart
                            </button>
                            <button class="view-details-btn" data-id="${product.id}">
                                <i class="fas fa-eye"></i> Details
                            </button>
                        </div>
                    </div>
                </div>
            `).join('');
        }

        updatePagination();
        updateCartBadge();
        updateCartButtons();
    }

    // ========== OPEN PRODUCT DETAIL MODAL ==========
    function openProductDetail(productId) {
        const product = allProducts.find(item => item.id === productId) || filteredProducts.find(item => item.id === productId);
        if (!product) return;

        const backdrop = document.getElementById('productModalBackdrop');
        const content = document.getElementById('productModalContent');
        if (!backdrop || !content) return;

        const specRows = [
            ['Display', product.specs?.display || 'N/A'],
            ['Processor', product.specs?.chip || 'N/A'],
            ['RAM', product.specs?.ram || 'N/A'],
            ['Storage', product.specs?.storage || 'N/A'],
            ['Rear Camera', product.specs?.camera || 'N/A'],
            ['Front Camera', product.frontCamera || '16MP'],
            ['Battery', product.specs?.battery || 'N/A'],
            ['Operating System', product.specs?.os || 'Android 14'],
            ['Connectivity', product.connectivity || '5G / Wi‑Fi 6 / Bluetooth 5.3'],
            ['Build', product.build || 'Glass + Aluminum'],
            ['Weight', product.weight || '190g']
        ];

        const highlights = product.highlights && product.highlights.length
            ? product.highlights
            : ['Fast charging', 'Premium camera', 'Long battery life'];

        content.innerHTML = `
            <div class="product-modal-layout">
                <div class="product-modal-media">
                    <img src="${product.image || 'assets/placeholder/product-placeholder.svg'}" alt="${product.name}" onerror="this.src='assets/placeholder/product-placeholder.svg'" />
                </div>
                <div class="product-modal-body">
                    <span class="product-modal-badge">${product.brand || 'Mobile'}</span>
                    <h2 id="productModalTitle">${product.name}</h2>
                    <p class="product-modal-summary">${product.description || 'Premium mobile phone with high-end performance and quality features.'}</p>
                    <div class="product-modal-rating">
                        ${'★'.repeat(Math.floor(product.rating || 4))}${'☆'.repeat(5 - Math.floor(product.rating || 4))}
                        <span>(${product.reviews || 0} reviews)</span>
                    </div>
                    <div class="product-modal-price">
                        <span class="current">$${(product.price || 0).toFixed(2)}</span>
                        ${product.originalPrice ? `<span class="original">$${product.originalPrice.toFixed(2)}</span>` : ''}
                    </div>
                    <div class="product-modal-highlights">
                        ${highlights.slice(0, 4).map(item => `<span>${item}</span>`).join('')}
                    </div>
                    <div class="modal-actions">
                        <button class="btn-primary modal-add-to-cart-btn" data-id="${product.id}">
                            <i class="fas fa-shopping-cart"></i> Add to Cart
                        </button>
                        <button class="btn-secondary" type="button" onclick="closeProductDetailModal()">
                            Close
                        </button>
                    </div>
                </div>
            </div>
            <div class="spec-section">
                <h3>Full Specifications</h3>
                <table class="spec-table">
                    <tbody>
                        ${specRows.map(([label, value]) => `
                            <tr>
                                <th>${label}</th>
                                <td>${value}</td>
                            </tr>
                        `).join('')}
                    </tbody>
                </table>
            </div>
        `;

        backdrop.hidden = false;
        document.body.style.overflow = 'hidden';

        const modalAddBtn = content.querySelector('.modal-add-to-cart-btn');
        if (modalAddBtn) {
            modalAddBtn.addEventListener('click', function() {
                addToCart(parseInt(this.dataset.id));
            });
        }
    }

    function closeProductDetailModal() {
        const backdrop = document.getElementById('productModalBackdrop');
        if (!backdrop) return;

        backdrop.hidden = true;
        document.body.style.overflow = '';
    }

    // ========== UPDATE PAGINATION ==========
    function updatePagination() {
        const totalPages = Math.ceil(filteredProducts.length / ITEMS_PER_PAGE);
        if (pageInfo) {
            pageInfo.textContent = `Page ${currentPage} of ${totalPages || 1}`;
        }
        if (prevPageBtn) {
            prevPageBtn.disabled = currentPage <= 1;
        }
        if (nextPageBtn) {
            nextPageBtn.disabled = currentPage >= totalPages;
        }
    }

    // ========== UPDATE CART BUTTONS ==========
    function updateCartButtons() {
        const cart = getCart();
        document.querySelectorAll('.add-to-cart-btn').forEach(btn => {
            const id = parseInt(btn.dataset.id);
            const inCart = cart.some(item => item.id === id);
            if (inCart) {
                btn.classList.add('in-cart');
                btn.innerHTML = '<i class="fas fa-check"></i> In Cart';
            } else {
                btn.classList.remove('in-cart');
                btn.innerHTML = '<i class="fas fa-shopping-cart"></i> Add to Cart';
            }
        });
    }

    // ========== ADD TO CART ==========
    function addToCart(productId) {
        const product = allProducts.find(p => p.id === productId);
        if (!product) {
            showToast('Product not found', 'error');
            return;
        }

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
                rating: product.rating || 4.5,
                brand: product.brand || 'Brand',
                quantity: 1
            });
        }

        saveCart(cart);
        updateCartButtons();
        updateCartBadge();
        
        // Animate the button
        const buttons = document.querySelectorAll(`.add-to-cart-btn[data-id="${productId}"]`);
        buttons.forEach(btn => {
            btn.style.transform = 'scale(1.1)';
            setTimeout(() => {
                btn.style.transform = 'scale(1)';
            }, 300);
        });

        showToast(`${product.name} added to cart! 🎉`, 'success');
    }

    // ========== UPDATE CART BADGE ==========
    function updateCartBadge() {
        const badge = document.getElementById('cartBadge');
        if (!badge) return;

        const cart = getCart();
        const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
        badge.textContent = totalItems;
        badge.style.display = totalItems > 0 ? 'flex' : 'none';
    }

    // ========== GET CART FROM LOCAL STORAGE ==========
    function getCart() {
        try {
            const data = localStorage.getItem('cart');
            return data ? JSON.parse(data) : [];
        } catch {
            return [];
        }
    }

    // ========== SAVE CART TO LOCAL STORAGE ==========
    function saveCart(cart) {
        localStorage.setItem('cart', JSON.stringify(cart));
    }

    // ========== SHOW TOAST ==========
    function showToast(message, type = 'info') {
        const toast = document.getElementById('toast');
        if (!toast) return;

        toast.textContent = message;
        toast.className = `toast ${type}`;
        toast.classList.add('show');

        clearTimeout(toast._timeout);
        toast._timeout = setTimeout(() => {
            toast.classList.remove('show');
        }, 3000);
    }

    // ========== EXPOSE FUNCTIONS GLOBALLY ==========
    window.clearAllFilters = clearAllFilters;
    window.openProductDetail = openProductDetail;
    window.closeProductDetailModal = closeProductDetailModal;

    // ========== INIT ==========
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }

})();