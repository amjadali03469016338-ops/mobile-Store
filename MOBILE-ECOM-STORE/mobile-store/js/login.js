// ========== LOGIN AUTHENTICATION SYSTEM ==========

function getStoredUsers() {
    try {
        const users = localStorage.getItem('mobileUsers');
        return users ? JSON.parse(users) : [];
    } catch (error) {
        console.error('Error reading stored users:', error);
        return [];
    }
}

function saveStoredUsers(users) {
    try {
        localStorage.setItem('mobileUsers', JSON.stringify(users));
    } catch (error) {
        console.error('Error saving stored users:', error);
    }
}

function getDisplayNameFromEmail(email) {
    if (!email) return 'Customer';
    const namePart = email.split('@')[0].replace(/[._-]/g, ' ');
    return namePart ? namePart.charAt(0).toUpperCase() + namePart.slice(1) : 'Customer';
}

// ========== AUTH STORAGE FUNCTIONS ==========
function getAuthUser() {
    try {
        const user = localStorage.getItem('authUser');
        return user ? JSON.parse(user) : null;
    } catch (error) {
        console.error('Error getting auth user:', error);
        return null;
    }
}

function setAuthUser(user) {
    try {
        localStorage.setItem('authUser', JSON.stringify(user));
    } catch (error) {
        console.error('Error setting auth user:', error);
    }
}

function clearAuthUser() {
    try {
        localStorage.removeItem('authUser');
    } catch (error) {
        console.error('Error clearing auth user:', error);
    }
}

function isUserLoggedIn() {
    return getAuthUser() !== null;
}

// ========== TOAST NOTIFICATION SYSTEM ==========
function showToast(message, type = 'info', duration = 3000) {
    const container = document.getElementById('toastContainer') || document.getElementById('toast');
    if (!container) return;

    const toast = document.createElement('div');
    toast.className = `toast ${type}`;

    const icon = {
        success: 'fas fa-check-circle',
        error: 'fas fa-exclamation-circle',
        info: 'fas fa-info-circle'
    };

    toast.innerHTML = `
        <i class="${icon[type] || icon.info}"></i>
        <span class="toast-message">${message}</span>
        <button class="toast-close">
            <i class="fas fa-times"></i>
        </button>
    `;

    container.appendChild(toast);

    const closeBtn = toast.querySelector('.toast-close');
    closeBtn.addEventListener('click', () => {
        toast.style.animation = 'slideInRight 0.3s ease-out reverse';
        setTimeout(() => toast.remove(), 300);
    });

    if (duration > 0) {
        setTimeout(() => {
            if (toast.parentNode) {
                toast.style.animation = 'slideInRight 0.3s ease-out reverse';
                setTimeout(() => toast.remove(), 300);
            }
        }, duration);
    }
}

// ========== LOGIN LOGIC ==========
function login(email, password) {
    const normalizedEmail = email.trim().toLowerCase();
    const storedUsers = getStoredUsers();
    let user = storedUsers.find(u => u.email.toLowerCase() === normalizedEmail);

    if (!user) {
        user = {
            id: Date.now(),
            name: getDisplayNameFromEmail(normalizedEmail),
            email: normalizedEmail,
            password: password.trim(),
            createdAt: new Date().toISOString()
        };
        storedUsers.push(user);
        saveStoredUsers(storedUsers);
    } else if (user.password !== password.trim()) {
        showToast('Invalid email or password', 'error');
        return false;
    }

    const sessionUser = {
        id: user.id,
        name: user.name || getDisplayNameFromEmail(user.email),
        email: user.email,
        loginTime: new Date().toISOString()
    };

    setAuthUser(sessionUser);
    showToast(`Welcome, ${sessionUser.name}!`, 'success');

    return true;
}

function logout() {
    clearAuthUser();
    showToast('Logged out successfully', 'info');
    window.location.href = 'login.html';
}

// ========== PROTECTION CHECK ==========
function checkAuthentication() {
    // Don't check on login page itself
    if (window.location.pathname.includes('login.html')) {
        // If already logged in, redirect to home
        if (isUserLoggedIn()) {
            window.location.href = 'index.html';
        }
        return;
    }

    // For all other pages, check if user is logged in
    if (!isUserLoggedIn()) {
        // Redirect to login if not authenticated
        window.location.href = 'login.html';
    }
}

// ========== PAGE INITIALIZATION ==========
document.addEventListener('DOMContentLoaded', function() {
    // Check auth before doing anything else
    checkAuthentication();

    // Setup login form (only on login page)
    const loginForm = document.getElementById('loginForm');
    if (loginForm) {
        setupLoginForm();
    }
});

// ========== FORM SETUP ==========
function setupLoginForm() {
    const loginForm = document.getElementById('loginForm');
    const demoBtn = document.getElementById('demoBtnLogin');
    const signupLink = document.getElementById('signupLink');
    const emailInput = document.getElementById('email');
    const passwordInput = document.getElementById('password');

    if (demoBtn) {
        demoBtn.remove();
    }

    // Form submission
    loginForm.addEventListener('submit', function(e) {
        e.preventDefault();

        const email = emailInput.value.trim();
        const password = passwordInput.value.trim();

        if (!email || !password) {
            showToast('Please fill in all fields', 'error');
            return;
        }

        if (!validateEmail(email)) {
            showToast('Please enter a valid email', 'error');
            return;
        }

        if (password.length < 6) {
            showToast('Password must be at least 6 characters', 'error');
            return;
        }

        if (login(email, password)) {
            setTimeout(() => {
                window.location.href = 'index.html';
            }, 500);
        }
    });

    if (signupLink) {
        signupLink.addEventListener('click', function(e) {
            e.preventDefault();
            showToast('Use your own valid email and password. Your account will be saved locally.', 'info');
        });
    }

    if (emailInput) {
        emailInput.addEventListener('focus', function() {
            if (this.parentElement) {
                this.parentElement.classList.add('focused');
            }
        });

        emailInput.addEventListener('blur', function() {
            if (this.parentElement) {
                this.parentElement.classList.remove('focused');
            }
        });
    }

    passwordInput.addEventListener('focus', function() {
        this.parentElement.classList.add('focused');
    });

    passwordInput.addEventListener('blur', function() {
        this.parentElement.classList.remove('focused');
    });
}

// ========== VALIDATION HELPER ==========
function validateEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

// ========== EXPOSE LOGOUT TO GLOBAL SCOPE ==========
window.logout = logout;
