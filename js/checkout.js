// ============================================
// CHECKOUT.JS - Checkout Page Functionality
// ============================================

(function() {
    'use strict';

    // DOM Elements
    const checkoutForm = document.getElementById('checkoutForm');
    const orderItems = document.getElementById('orderItems');
    const checkoutSubtotal = document.getElementById('checkoutSubtotal');
    const checkoutTax = document.getElementById('checkoutTax');
    const checkoutTotal = document.getElementById('checkoutTotal');
    const placeOrderBtn = document.getElementById('placeOrderBtn');
    
    // Payment method radios
    const paymentRadios = document.querySelectorAll('input[name="payment"]');
    const cardDetails = document.getElementById('cardDetails');

    // ========== INITIALIZE ==========
    function init() {
        const currentUser = getCurrentUser();
        if (!currentUser) {
            showToast('Please login before checkout', 'error');
            setTimeout(() => {
                window.location.href = 'login.html';
            }, 500);
            return;
        }

        const cart = getCart();
        
        if (cart.length === 0) {
            showToast('Your cart is empty! Redirecting to products...', 'error');
            setTimeout(() => {
                window.location.href = 'product.html';
            }, 2000);
            return;
        }

        renderOrderSummary();
        setupEventListeners();
        updateCartBadge();
    }

    // ========== SETUP EVENT LISTENERS ==========
    function setupEventListeners() {
        // Payment method toggle
        paymentRadios.forEach(radio => {
            radio.addEventListener('change', () => {
                if (cardDetails) {
                    cardDetails.style.display = radio.value === 'card' ? 'block' : 'none';
                }
            });
        });

        // Form submission
        if (checkoutForm) {
            checkoutForm.addEventListener('submit', handleCheckout);
        }

        // Real-time validation
        document.querySelectorAll('#checkoutForm input').forEach(input => {
            input.addEventListener('blur', () => {
                validateField(input);
            });
            input.addEventListener('input', () => {
                if (input.classList.contains('error')) {
                    validateField(input);
                }
            });
        });
    }

    // ========== RENDER ORDER SUMMARY ==========
    function renderOrderSummary() {
        const cart = getCart();
        
        if (!orderItems) return;

        orderItems.innerHTML = cart.map(item => `
            <div class="order-item">
                <div class="order-item-image">
                    <img src="${item.image || 'assets/placeholder/product-placeholder.svg'}" 
                         alt="${item.name}"
                         onerror="this.src='assets/placeholder/product-placeholder.svg'" />
                </div>
                <div class="order-item-details">
                    <div class="order-item-name">${item.name}</div>
                    <div class="order-item-meta">Qty: ${item.quantity}</div>
                    <div class="order-item-price">$${(item.price * item.quantity).toFixed(2)}</div>
                </div>
            </div>
        `).join('');

        updateOrderSummary();
    }

    // ========== UPDATE ORDER SUMMARY ==========
    function updateOrderSummary() {
        const cart = getCart();
        const subtotalAmount = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
        const taxAmount = subtotalAmount * 0.1;
        const totalAmount = subtotalAmount + taxAmount;

        if (checkoutSubtotal) checkoutSubtotal.textContent = `$${subtotalAmount.toFixed(2)}`;
        if (checkoutTax) checkoutTax.textContent = `$${taxAmount.toFixed(2)}`;
        if (checkoutTotal) checkoutTotal.textContent = `$${totalAmount.toFixed(2)}`;
    }

    // ========== VALIDATE FIELD ==========
    function validateField(input) {
        const value = input.value.trim();
        let isValid = true;
        let errorMessage = '';

        switch (input.id) {
            case 'fullName':
                isValid = value.length >= 2;
                errorMessage = 'Please enter your full name';
                break;
            case 'email':
                isValid = validateEmail(value);
                errorMessage = 'Please enter a valid email address';
                break;
            case 'phone':
                isValid = validatePhone(value);
                errorMessage = 'Please enter a valid phone number';
                break;
            case 'address':
                isValid = value.length >= 5;
                errorMessage = 'Please enter your address';
                break;
            case 'city':
                isValid = value.length >= 2;
                errorMessage = 'Please enter your city';
                break;
            case 'zip':
                isValid = validateZip(value);
                errorMessage = 'Please enter a valid ZIP code';
                break;
            case 'cardNumber':
                isValid = validateCardNumber(value);
                errorMessage = 'Please enter a valid card number';
                break;
            case 'expiry':
                isValid = validateExpiry(value);
                errorMessage = 'Please enter a valid expiry date (MM/YY)';
                break;
            case 'cvv':
                isValid = /^\d{3,4}$/.test(value);
                errorMessage = 'Please enter a valid CVV';
                break;
        }

        const errorElement = input.parentElement.querySelector('.error-message');
        
        if (!isValid) {
            input.classList.add('error');
            if (errorElement) {
                errorElement.textContent = errorMessage;
            } else {
                const newError = document.createElement('span');
                newError.className = 'error-message';
                newError.textContent = errorMessage;
                input.parentElement.appendChild(newError);
            }
        } else {
            input.classList.remove('error');
            if (errorElement) {
                errorElement.remove();
            }
        }

        return isValid;
    }

    // ========== VALIDATE FORM ==========
    function validateForm() {
        const inputs = document.querySelectorAll('#checkoutForm input[required]');
        let isValid = true;

        inputs.forEach(input => {
            if (!validateField(input)) {
                isValid = false;
            }
        });

        // Check payment method
        const selectedPayment = document.querySelector('input[name="payment"]:checked');
        if (!selectedPayment) {
            showToast('Please select a payment method', 'error');
            isValid = false;
        }

        // Validate card details if card payment selected
        if (selectedPayment && selectedPayment.value === 'card') {
            const cardNumber = document.getElementById('cardNumber');
            const expiry = document.getElementById('expiry');
            const cvv = document.getElementById('cvv');
            
            if (!validateField(cardNumber) || !validateField(expiry) || !validateField(cvv)) {
                isValid = false;
            }
        }

        return isValid;
    }

    // ========== HANDLE CHECKOUT ==========
    function handleCheckout(e) {
        e.preventDefault();

        if (placeOrderBtn) {
            placeOrderBtn.disabled = true;
            placeOrderBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Processing...';
        }

        if (!validateForm()) {
            if (placeOrderBtn) {
                placeOrderBtn.disabled = false;
                placeOrderBtn.innerHTML = 'Place Order <i class="fas fa-check"></i>';
            }
            showToast('Please fill in all required fields correctly', 'error');
            return;
        }

        // Simulate order processing
        setTimeout(() => {
            const currentUser = getCurrentUser();
            const cart = getCart();
            const subtotalAmount = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
            const taxAmount = subtotalAmount * 0.1;
            const totalAmount = subtotalAmount + taxAmount;

            const enrichedItems = cart.map(item => {
                const productMeta = (typeof products !== 'undefined') ? products.find(p => p.id === item.id) : null;
                return {
                    id: item.id,
                    name: item.name,
                    price: Number(item.price),
                    image: item.image || (productMeta ? productMeta.image : 'assets/placeholder/product-placeholder.svg'),
                    quantity: Number(item.quantity),
                    rating: productMeta ? (productMeta.rating || 4.5) : 4.5,
                    brand: productMeta ? (productMeta.brand || 'Brand') : 'Brand'
                };
            });

            // Create order
            const order = {
                id: generateOrderId(),
                userEmail: currentUser ? currentUser.email : null,
                userName: currentUser ? currentUser.name : 'Guest User',
                items: enrichedItems,
                subtotal: subtotalAmount,
                tax: taxAmount,
                total: totalAmount,
                date: new Date().toISOString(),
                status: 'pending',
                shipping: {
                    fullName: document.getElementById('fullName').value,
                    email: document.getElementById('email').value,
                    phone: document.getElementById('phone').value,
                    address: document.getElementById('address').value,
                    city: document.getElementById('city').value,
                    zip: document.getElementById('zip').value
                },
                payment: document.querySelector('input[name="payment"]:checked').value
            };

            // Save order
            const orders = getOrders();
            orders.push(order);
            saveOrders(orders);

            // Clear cart
            saveCart([]);
            updateCartBadge();

            showToast('Order placed successfully! 🎉', 'success');

            // Redirect to account page after delay
            setTimeout(() => {
                window.location.href = 'account.html';
            }, 2000);

        }, 2000);
    }

    // ========== INIT ==========
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }

})();