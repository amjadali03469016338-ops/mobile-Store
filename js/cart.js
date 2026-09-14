// ============================================
// CART.JS - Cart Page Functionality
// ============================================

(function() {
    'use strict';

    // DOM Elements
    const cartItems = document.getElementById('cartItems');
    const emptyCart = document.getElementById('emptyCart');
    const subtotal = document.getElementById('subtotal');
    const tax = document.getElementById('tax');
    const total = document.getElementById('total');
    const checkoutBtn = document.getElementById('checkoutBtn');
    const promoInput = document.getElementById('promoInput');
    const applyPromo = document.getElementById('applyPromo');

    let promoApplied = false;
    let discount = 0;

    // ========== INITIALIZE ==========
    function init() {
        const currentUser = getCurrentUser();
        if (!currentUser) {
            showToast('Please login to continue shopping', 'error');
            setTimeout(() => {
                window.location.href = 'login.html';
            }, 500);
            return;
        }

        renderCart();
        setupEventListeners();
        updateCartBadge();
    }

    // ========== SETUP EVENT LISTENERS ==========
    function setupEventListeners() {
        // Quantity controls (event delegation)
        if (cartItems) {
            cartItems.addEventListener('click', (e) => {
                const btn = e.target.closest('.quantity-btn');
                if (!btn) return;

                const itemId = parseInt(btn.dataset.id);
                const action = btn.dataset.action;

                if (action === 'increase') {
                    updateQuantity(itemId, 1);
                } else if (action === 'decrease') {
                    updateQuantity(itemId, -1);
                }
            });

            // Remove item
            cartItems.addEventListener('click', (e) => {
                const btn = e.target.closest('.remove-item');
                if (!btn) return;

                const itemId = parseInt(btn.dataset.id);
                removeFromCart(itemId);
            });
        }

        // Promo code
        if (applyPromo) {
            applyPromo.addEventListener('click', applyPromoCode);
        }
        if (promoInput) {
            promoInput.addEventListener('keyup', (e) => {
                if (e.key === 'Enter') {
                    applyPromoCode();
                }
            });
        }

        // Checkout button
        if (checkoutBtn) {
            checkoutBtn.addEventListener('click', (e) => {
                const cart = getCart();
                if (cart.length === 0) {
                    e.preventDefault();
                    showToast('Your cart is empty!', 'error');
                }
            });
        }
    }

    // ========== RENDER CART ==========
    function renderCart() {
        const cart = getCart();

        if (cart.length === 0) {
            if (cartItems) cartItems.style.display = 'none';
            if (emptyCart) emptyCart.style.display = 'block';
            if (checkoutBtn) checkoutBtn.style.display = 'none';
            updateSummary(0, 0);
            return;
        }

        if (cartItems) cartItems.style.display = 'block';
        if (emptyCart) emptyCart.style.display = 'none';
        if (checkoutBtn) checkoutBtn.style.display = 'flex';

        cartItems.innerHTML = cart.map(item => `
            <div class="cart-item" data-id="${item.id}">
                <div class="cart-item-image">
                    <img src="${item.image || 'assets/placeholder/product-placeholder.svg'}" 
                         alt="${item.name}"
                         onerror="this.src='assets/placeholder/product-placeholder.svg'" />
                </div>
                <div class="cart-item-details">
                    <div class="cart-item-name">${item.name}</div>
                    <div class="cart-item-price">$${(item.price * item.quantity).toFixed(2)}</div>
                    <div class="cart-item-controls">
                        <div class="quantity-control">
                            <button class="quantity-btn" data-id="${item.id}" data-action="decrease">-</button>
                            <span>${item.quantity}</span>
                            <button class="quantity-btn" data-id="${item.id}" data-action="increase">+</button>
                        </div>
                        <button class="remove-item" data-id="${item.id}">
                            <i class="fas fa-trash"></i> Remove
                        </button>
                    </div>
                </div>
            </div>
        `).join('');

        updateSummary();
    }

    // ========== UPDATE QUANTITY ==========
    function updateQuantity(productId, change) {
        let cart = getCart();
        const item = cart.find(item => item.id === productId);
        
        if (!item) return;

        item.quantity += change;

        if (item.quantity <= 0) {
            cart = cart.filter(item => item.id !== productId);
        }

        saveCart(cart);
        renderCart();
        updateCartBadge();
        showToast('Cart updated', 'success');
    }

    // ========== REMOVE FROM CART ==========
    function removeFromCart(productId) {
        let cart = getCart();
        cart = cart.filter(item => item.id !== productId);
        saveCart(cart);
        renderCart();
        updateCartBadge();
        showToast('Item removed from cart', 'info');
    }

    // ========== UPDATE SUMMARY ==========
    function updateSummary() {
        const cart = getCart();
        const subtotalAmount = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
        const taxAmount = subtotalAmount * 0.1;
        const discountAmount = promoApplied ? subtotalAmount * 0.1 : 0;
        const totalAmount = subtotalAmount + taxAmount - discountAmount;

        if (subtotal) subtotal.textContent = `$${subtotalAmount.toFixed(2)}`;
        if (tax) tax.textContent = `$${taxAmount.toFixed(2)}`;
        if (total) total.textContent = `$${totalAmount.toFixed(2)}`;
    }

    // ========== APPLY PROMO CODE ==========
    function applyPromoCode() {
        if (!promoInput) return;
        
        const code = promoInput.value.trim().toUpperCase();

        if (!code) {
            showToast('Please enter a promo code', 'error');
            return;
        }

        if (promoApplied) {
            showToast('Promo code already applied', 'info');
            return;
        }

        // Mock promo codes
        const validPromos = {
            'SAVE10': 0.1,
            'DISCOUNT20': 0.2,
            'FREESHIP': 0.05
        };

        if (validPromos[code]) {
            promoApplied = true;
            discount = validPromos[code];
            promoInput.disabled = true;
            applyPromo.disabled = true;
            showToast(`Promo code ${code} applied!`, 'success');
            updateSummary();
        } else {
            showToast('Invalid promo code', 'error');
        }
    }

    // ========== INIT ==========
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }

})();