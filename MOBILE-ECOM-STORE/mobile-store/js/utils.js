// ============================================
// UTILS.JS - Utility Functions
// ============================================

// ========== TOAST NOTIFICATION ==========
function showToast(message, type = 'info', duration = 3000) {
    const toast = document.getElementById('toast');
    if (!toast) return;
    
    toast.textContent = message;
    toast.className = `toast ${type}`;
    toast.classList.add('show');
    
    clearTimeout(toast._timeout);
    toast._timeout = setTimeout(() => {
        toast.classList.remove('show');
    }, duration);
}

// ========== LOCAL STORAGE HELPERS ==========
function getCart() {
    try {
        const data = localStorage.getItem('cart');
        return data ? JSON.parse(data) : [];
    } catch {
        return [];
    }
}

function saveCart(cart) {
    localStorage.setItem('cart', JSON.stringify(cart));
}

function getWishlist() {
    try {
        const data = localStorage.getItem('wishlist');
        return data ? JSON.parse(data) : [];
    } catch {
        return [];
    }
}

function saveWishlist(wishlist) {
    localStorage.setItem('wishlist', JSON.stringify(wishlist));
}

function getOrders() {
    try {
        const data = localStorage.getItem('orders');
        return data ? JSON.parse(data) : [];
    } catch {
        return [];
    }
}

function saveOrders(orders) {
    localStorage.setItem('orders', JSON.stringify(orders));
}

function getCurrentUser() {
    try {
        const data = localStorage.getItem('authUser');
        return data ? JSON.parse(data) : null;
    } catch {
        return null;
    }
}

function getOrdersForCurrentUser() {
    const currentUser = getCurrentUser();
    const orders = getOrders();

    if (!currentUser || !currentUser.email) {
        return [];
    }

    return orders.filter(order => order.userEmail === currentUser.email);
}

// ========== PRICE FORMATTING ==========
function formatPrice(price) {
    return `$${price.toFixed(2)}`;
}

function calculateTax(subtotal, rate = 0.1) {
    return subtotal * rate;
}

function calculateTotal(subtotal, tax) {
    return subtotal + tax;
}

// ========== VALIDATION ==========
function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}

function validatePhone(phone) {
    const re = /^[\+\d\s\-\(\)]{10,15}$/;
    return re.test(phone);
}

function validateZip(zip) {
    const re = /^\d{5}(-\d{4})?$/;
    return re.test(zip);
}

function validateCardNumber(number) {
    const re = /^\d{4}\s?\d{4}\s?\d{4}\s?\d{4}$/;
    return re.test(number.replace(/\s/g, ''));
}

function validateExpiry(expiry) {
    const re = /^(0[1-9]|1[0-2])\/([0-9]{2})$/;
    return re.test(expiry);
}

// ========== GENERATE ID ==========
function generateOrderId() {
    const timestamp = Date.now().toString().slice(-6);
    const random = Math.floor(Math.random() * 10000).toString().padStart(4, '0');
    return `ORD-${timestamp}-${random}`;
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

// ========== DEBOUNCE ==========
function debounce(func, delay = 300) {
    let timeout;
    return function(...args) {
        clearTimeout(timeout);
        timeout = setTimeout(() => func.apply(this, args), delay);
    };
}

// ========== THROTTLE ==========
function throttle(func, limit = 300) {
    let inThrottle;
    return function(...args) {
        if (!inThrottle) {
            func.apply(this, args);
            inThrottle = true;
            setTimeout(() => inThrottle = false, limit);
        }
    };
}