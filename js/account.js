// ========== ACCOUNT PAGE LOGIC ==========

function getAuthUser() {
    try {
        const user = localStorage.getItem('authUser');
        return user ? JSON.parse(user) : null;
    } catch (error) {
        console.error('Error reading auth user:', error);
        return null;
    }
}

function getOrders() {
    try {
        return JSON.parse(localStorage.getItem('orders')) || [];
    } catch (error) {
        return [];
    }
}

function getOrdersForLoggedUser() {
    const user = getAuthUser();
    const orders = getOrders();

    if (!user || !user.email) {
        return [];
    }

    return orders.filter(order => (order.userEmail || '').toLowerCase() === user.email.toLowerCase());
}

function getWishlist() {
    try {
        return JSON.parse(localStorage.getItem('wishlist')) || [];
    } catch (error) {
        return [];
    }
}

function formatDate(dateString) {
    if (!dateString) return 'N/A';
    const date = new Date(dateString);
    if (Number.isNaN(date.getTime())) return 'N/A';
    return date.toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'short',
        day: 'numeric'
    });
}

function setAccountSection(sectionId) {
    const menuItems = document.querySelectorAll('.menu-item');
    const sections = document.querySelectorAll('.content-section');

    menuItems.forEach(item => {
        item.classList.toggle('active', item.dataset.section === sectionId);
    });

    sections.forEach(section => {
        section.classList.toggle('active', section.id === sectionId);
    });
}

function populateAccountProfile() {
    const user = getAuthUser();
    const displayName = document.getElementById('displayName');
    const displayEmail = document.getElementById('displayEmail');
    const infoName = document.getElementById('infoName');
    const infoEmail = document.getElementById('infoEmail');
    const infoMemberSince = document.getElementById('infoMemberSince');

    if (!user) {
        window.location.href = 'login.html';
        return;
    }

    const safeName = user.name || 'Demo User';
    const safeEmail = user.email || 'demo@mobile.com';

    if (displayName) displayName.textContent = safeName;
    if (displayEmail) displayEmail.textContent = safeEmail;
    if (infoName) infoName.textContent = safeName;
    if (infoEmail) infoEmail.textContent = safeEmail;
    if (infoMemberSince) infoMemberSince.textContent = formatDate(user.loginTime || new Date().toISOString());
}

function loadOrders() {
    const ordersList = document.getElementById('ordersList');
    if (!ordersList) return;

    const orders = getOrdersForLoggedUser();

    if (!orders.length) {
        ordersList.innerHTML = `
            <div class="empty-order-state">
                <i class="fas fa-shopping-bag"></i>
                <h3>No orders yet</h3>
                <a href="product.html" class="btn-primary">Start Shopping</a>
            </div>
        `;
        return;
    }

    ordersList.innerHTML = orders.map(order => `
        <div class="order-card">
            <div class="order-header">
                <span>Order #${order.id || 'N/A'}</span>
                <span>${formatDate(order.date)}</span>
                <span class="order-status">${(order.status || 'pending').toUpperCase()}</span>
            </div>
            <div class="order-items">
                ${(order.items || []).map(item => `
                    <div class="order-item-row">
                        <img src="${item.image || 'assets/placeholder/product-placeholder.svg'}" alt="${item.name}" onerror="this.src='assets/placeholder/product-placeholder.svg'" />
                        <div class="order-item-info">
                            <strong>${item.name}</strong>
                            <span>Qty: ${item.quantity}</span>
                            <span>Rating: ${Number(item.rating || 4.5).toFixed(1)} ★</span>
                            <span>Price: $${Number(item.price || 0).toFixed(2)}</span>
                        </div>
                    </div>
                `).join('') || '<span>No items listed</span>'}
            </div>
            <div class="order-total">Total: $${Number(order.total || 0).toFixed(2)}</div>
        </div>
    `).join('');
}

function loadWishlist() {
    const wishlistGrid = document.getElementById('wishlistGrid');
    if (!wishlistGrid) return;

    const wishlistIds = getWishlist();
    if (!wishlistIds.length || typeof products === 'undefined') {
        wishlistGrid.innerHTML = `
            <div class="empty-state">
                <i class="fas fa-heart"></i>
                <h3>No wishlist items</h3>
                <p>Save your favorite products here</p>
                <a href="product.html" class="btn-primary">Browse Products</a>
            </div>
        `;
        return;
    }

    const wishlistProducts = products.filter(product => wishlistIds.includes(product.id));

    if (!wishlistProducts.length) {
        wishlistGrid.innerHTML = `
            <div class="empty-state">
                <i class="fas fa-heart"></i>
                <h3>No wishlist items</h3>
                <p>Save your favorite products here</p>
                <a href="product.html" class="btn-primary">Browse Products</a>
            </div>
        `;
        return;
    }

    wishlistGrid.innerHTML = wishlistProducts.map(product => `
        <div class="wishlist-item">
            <img src="${product.image || 'assets/placeholder/product-placeholder.svg'}" alt="${product.name}" onerror="this.src='assets/placeholder/product-placeholder.svg'" />
            <div class="wishlist-item-info">
                <h4>${product.name}</h4>
                <p>$${Number(product.price || 0).toFixed(2)}</p>
                <button class="btn-primary add-cart" data-id="${product.id}">Add to Cart</button>
            </div>
        </div>
    `).join('');

    wishlistGrid.querySelectorAll('.add-cart').forEach(button => {
        button.addEventListener('click', () => {
            const productId = Number(button.dataset.id);
            const product = products.find(item => item.id === productId);
            if (!product) return;

            let cart = [];
            try {
                cart = JSON.parse(localStorage.getItem('cart')) || [];
            } catch (error) {
                cart = [];
            }

            const existingItem = cart.find(item => item.id === productId);
            if (existingItem) {
                existingItem.quantity += 1;
            } else {
                cart.push({
                    id: product.id,
                    name: product.name,
                    price: product.price,
                    image: product.image || 'assets/placeholder/product-placeholder.svg',
                    quantity: 1
                });
            }

            localStorage.setItem('cart', JSON.stringify(cart));
            if (typeof updateCartBadge === 'function') updateCartBadge();
            showToast(`${product.name} added to cart`, 'success');
        });
    });
}

function setupAccountNavigation() {
    const menuItems = document.querySelectorAll('.menu-item');
    menuItems.forEach(item => {
        item.addEventListener('click', (event) => {
            event.preventDefault();
            setAccountSection(item.dataset.section);
        });
    });
}

function initAccountPage() {
    const authUser = getAuthUser();
    if (!authUser) {
        window.location.href = 'login.html';
        return;
    }

    populateAccountProfile();
    loadOrders();
    loadWishlist();
    setupAccountNavigation();
    updateCartBadge();
}

document.addEventListener('DOMContentLoaded', initAccountPage);