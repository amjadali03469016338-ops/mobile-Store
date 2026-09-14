// ============================================
// DATA.JS - Complete Dummy Products Data
// ============================================

const phoneImageLibrary = {
    Samsung: [
        'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=400&h=400&fit=crop',
        'https://images.unsplash.com/photo-1610945264803-c22b62d2a7b3?w=400&h=400&fit=crop',
        'https://images.unsplash.com/photo-1533228100845-08145b01de14?w=400&h=400&fit=crop',
        'https://images.unsplash.com/photo-1589492477829-5e65395b66cc?w=400&h=400&fit=crop'
    ],
    Google: [
        'https://images.unsplash.com/photo-1598327105666-5b89351aff97?w=400&h=400&fit=crop',
        'https://images.unsplash.com/photo-1601961896607-0e655db6d37f?w=400&h=400&fit=crop',
        'https://images.unsplash.com/photo-1616348436168-de43ad0db179?w=400&h=400&fit=crop'
    ],
    OnePlus: [
        'https://images.unsplash.com/photo-1585060544812-6b45742d762f?w=400&h=400&fit=crop',
        'https://images.unsplash.com/photo-1616348436168-de43ad0db179?w=400&h=400&fit=crop',
        'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=400&h=400&fit=crop'
    ],
    Xiaomi: [
        'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=400&h=400&fit=crop',
        'https://images.unsplash.com/photo-1598327105666-5b89351aff97?w=400&h=400&fit=crop',
        'https://images.unsplash.com/photo-1585060544812-6b45742d762f?w=400&h=400&fit=crop'
    ],
    Sony: [
        'https://images.unsplash.com/photo-1589492477829-5e65395b66cc?w=400&h=400&fit=crop',
        'https://images.unsplash.com/photo-1533228100845-08145b01de14?w=400&h=400&fit=crop',
        'https://images.unsplash.com/photo-1610945264803-c22b62d2a7b3?w=400&h=400&fit=crop'
    ],
    Nothing: [
        'https://images.unsplash.com/photo-1616348436168-de43ad0db179?w=400&h=400&fit=crop',
        'https://images.unsplash.com/photo-1585060544812-6b45742d762f?w=400&h=400&fit=crop',
        'https://images.unsplash.com/photo-1601961896607-0e655db6d37f?w=400&h=400&fit=crop'
    ],
    Motorola: [
        'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=400&h=400&fit=crop',
        'https://images.unsplash.com/photo-1601961896607-0e655db6d37f?w=400&h=400&fit=crop',
        'https://images.unsplash.com/photo-1589492477829-5e65395b66cc?w=400&h=400&fit=crop'
    ],
    Apple: [
        'https://images.unsplash.com/photo-1695048133142-1a20484d2569?w=400&h=400&fit=crop',
        'https://images.unsplash.com/photo-1592750475338-74b7b21085ab?w=400&h=400&fit=crop',
        'https://images.unsplash.com/photo-1678685888221-cda773a3dcdb?w=400&h=400&fit=crop',
        'https://images.unsplash.com/photo-1601961896607-0e655db6d37f?w=400&h=400&fit=crop'
    ],
    Infinix: [
        'https://images.unsplash.com/photo-1616348436168-de43ad0db179?w=400&h=400&fit=crop',
        'https://images.unsplash.com/photo-1585060544812-6b45742d762f?w=400&h=400&fit=crop',
        'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=400&h=400&fit=crop',
        'https://images.unsplash.com/photo-1598327105666-5b89351aff97?w=400&h=400&fit=crop'
    ],
    Nokia: [
        'https://images.unsplash.com/photo-1598327105666-5b89351aff97?w=400&h=400&fit=crop',
        'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=400&h=400&fit=crop',
        'https://images.unsplash.com/photo-1589492477829-5e65395b66cc?w=400&h=400&fit=crop',
        'https://images.unsplash.com/photo-1610945264803-c22b62d2a7b3?w=400&h=400&fit=crop'
    ],
    Readme: [
        'https://images.unsplash.com/photo-1585060544812-6b45742d762f?w=400&h=400&fit=crop',
        'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=400&h=400&fit=crop',
        'https://images.unsplash.com/photo-1598327105666-5b89351aff97?w=400&h=400&fit=crop',
        'https://images.unsplash.com/photo-1616348436168-de43ad0db179?w=400&h=400&fit=crop'
    ],
    Realme: [
        'https://images.unsplash.com/photo-1589492477829-5e65395b66cc?w=400&h=400&fit=crop',
        'https://images.unsplash.com/photo-1601961896607-0e655db6d37f?w=400&h=400&fit=crop',
        'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=400&h=400&fit=crop'
    ],
    Oppo: [
        'https://images.unsplash.com/photo-1610945264803-c22b62d2a7b3?w=400&h=400&fit=crop',
        'https://images.unsplash.com/photo-1533228100845-08145b01de14?w=400&h=400&fit=crop',
        'https://images.unsplash.com/photo-1598327105666-5b89351aff97?w=400&h=400&fit=crop'
    ],
    Vivo: [
        'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=400&h=400&fit=crop',
        'https://images.unsplash.com/photo-1616348436168-de43ad0db179?w=400&h=400&fit=crop',
        'https://images.unsplash.com/photo-1585060544812-6b45742d762f?w=400&h=400&fit=crop'
    ],
    Tecno: [
        'https://images.unsplash.com/photo-1598327105666-5b89351aff97?w=400&h=400&fit=crop',
        'https://images.unsplash.com/photo-1589492477829-5e65395b66cc?w=400&h=400&fit=crop',
        'https://images.unsplash.com/photo-1711457070548-1a9f2a8f3d6a?w=400&h=400&fit=crop'
    ],
    Asus: [
        'https://images.unsplash.com/photo-1605547442054-19543341c7fe?w=400&h=400&fit=crop',
        'https://images.unsplash.com/photo-1601784551446-20c9e07cdb71?w=400&h=400&fit=crop',
        'https://images.unsplash.com/photo-1546868871-7041f2a55e12?w=400&h=400&fit=crop'
    ],
    Default: [
        'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=400&h=400&fit=crop'
    ]
};

const getProductImage = (brand, index = 0) => {
    const brandImages = phoneImageLibrary[brand] || phoneImageLibrary.Default;
    return brandImages[index % brandImages.length];
};

const products = [
    // ========== ANDROID PHONES ==========
    {
        id: 1,
        name: 'Samsung Galaxy S24 Ultra',
        brand: 'Samsung',
        category: 'android',
        price: 1199.99,
        originalPrice: 1399.99,
        discount: 14,
        rating: 4.8,
        reviews: 1250,
        popularity: 95,
        image: getProductImage('Samsung', 0),
        description: 'Latest flagship with AI features, 200MP camera, and S Pen'
    },
    {
        id: 2,
        name: 'Google Pixel 8 Pro',
        brand: 'Google',
        category: 'android',
        price: 999.99,
        originalPrice: 1099.99,
        discount: 9,
        rating: 4.7,
        reviews: 890,
        popularity: 88,
        image: getProductImage('Google', 0),
        description: 'Pure Android experience with best-in-class camera'
    },
    {
        id: 3,
        name: 'OnePlus 12',
        brand: 'OnePlus',
        category: 'android',
        price: 799.99,
        originalPrice: 899.99,
        discount: 11,
        rating: 4.6,
        reviews: 720,
        popularity: 82,
        image: getProductImage('OnePlus', 0),
        description: 'Flagship killer with Snapdragon 8 Gen 3'
    },
    {
        id: 4,
        name: 'Xiaomi 14 Pro',
        brand: 'Xiaomi',
        category: 'android',
        price: 699.99,
        originalPrice: 799.99,
        discount: 12,
        rating: 4.5,
        reviews: 650,
        popularity: 78,
        image: getProductImage('Xiaomi', 0),
        description: 'Leica optics and powerful performance'
    },
    {
        id: 5,
        name: 'Samsung Galaxy Z Fold 5',
        brand: 'Samsung',
        category: 'android',
        price: 1799.99,
        originalPrice: 1899.99,
        discount: 5,
        rating: 4.7,
        reviews: 560,
        popularity: 85,
        image: getProductImage('Samsung', 1),
        description: 'Foldable display with premium multitasking'
    },
    {
        id: 6,
        name: 'Sony Xperia 1 V',
        brand: 'Sony',
        category: 'android',
        price: 1299.99,
        originalPrice: 1399.99,
        discount: 7,
        rating: 4.4,
        reviews: 340,
        popularity: 65,
        image: getProductImage('Sony', 0),
        description: 'Professional camera with 4K OLED display'
    },
    {
        id: 7,
        name: 'Nothing Phone (2)',
        brand: 'Nothing',
        category: 'android',
        price: 599.99,
        originalPrice: 699.99,
        discount: 14,
        rating: 4.3,
        reviews: 480,
        popularity: 72,
        image: getProductImage('Nothing', 0),
        description: 'Unique transparent design with Glyph interface'
    },
    {
        id: 8,
        name: 'Motorola Edge 40 Pro',
        brand: 'Motorola',
        category: 'android',
        price: 749.99,
        originalPrice: 849.99,
        discount: 12,
        rating: 4.2,
        reviews: 290,
        popularity: 60,
        image: getProductImage('Motorola', 1),
        description: 'Edge display with 165Hz refresh rate'
    },

    // ========== IPHONE PHONES ==========
    {
        id: 9,
        name: 'iPhone 15 Pro Max',
        brand: 'Apple',
        category: 'iphone',
        price: 1199.99,
        originalPrice: 1299.99,
        discount: 8,
        rating: 4.9,
        reviews: 2100,
        popularity: 98,
        image: getProductImage('Apple', 0),
        description: "Apple's most powerful iPhone with titanium design"
    },
    {
        id: 10,
        name: 'iPhone 15 Pro',
        brand: 'Apple',
        category: 'iphone',
        price: 999.99,
        originalPrice: 1099.99,
        discount: 9,
        rating: 4.8,
        reviews: 1800,
        popularity: 92,
        image: getProductImage('Apple', 1),
        description: 'Premium iPhone with Pro camera system'
    },
    {
        id: 11,
        name: 'iPhone 15',
        brand: 'Apple',
        category: 'iphone',
        price: 799.99,
        originalPrice: 899.99,
        discount: 11,
        rating: 4.7,
        reviews: 1500,
        popularity: 85,
        image: getProductImage('Apple', 2),
        description: 'Next-generation iPhone with Dynamic Island'
    },
    {
        id: 12,
        name: 'iPhone 14 Pro',
        brand: 'Apple',
        category: 'iphone',
        price: 699.99,
        originalPrice: 799.99,
        discount: 12,
        rating: 4.6,
        reviews: 1200,
        popularity: 80,
        image: getProductImage('Apple', 3),
        description: 'Powerful iPhone with always-on display'
    },
    {
        id: 13,
        name: 'iPhone 14',
        brand: 'Apple',
        category: 'iphone',
        price: 599.99,
        originalPrice: 699.99,
        discount: 14,
        rating: 4.5,
        reviews: 980,
        popularity: 75,
        image: getProductImage('Apple', 3),
        description: 'Reliable iPhone with great battery life'
    },
    {
        id: 14,
        name: 'iPhone SE (2024)',
        brand: 'Apple',
        category: 'iphone',
        price: 429.99,
        originalPrice: 499.99,
        discount: 14,
        rating: 4.3,
        reviews: 650,
        popularity: 70,
        image: getProductImage('Apple', 2),
        description: 'Compact iPhone with powerful A15 chip'
    },
    {
        id: 15,
        name: 'iPhone 13 Pro',
        brand: 'Apple',
        category: 'iphone',
        price: 549.99,
        originalPrice: 649.99,
        discount: 15,
        rating: 4.4,
        reviews: 850,
        popularity: 72,
        image: getProductImage('Apple', 3),
        description: 'ProMotion display with telephoto lens'
    },
    {
        id: 16,
        name: 'iPhone 12',
        brand: 'Apple',
        category: 'iphone',
        price: 449.99,
        originalPrice: 529.99,
        discount: 15,
        rating: 4.2,
        reviews: 720,
        popularity: 65,
        image: getProductImage('Apple', 1),
        description: 'Affordable 5G iPhone with OLED display'
    },

    // ========== INFINIX PHONES ==========
    {
        id: 17,
        name: 'Infinix Zero 30 5G',
        brand: 'Infinix',
        category: 'infinix',
        price: 399.99,
        originalPrice: 499.99,
        discount: 20,
        rating: 4.4,
        reviews: 450,
        popularity: 75,
        image: getProductImage('Infinix', 0),
        description: 'Premium mid-range with 144Hz display'
    },
    {
        id: 18,
        name: 'Infinix GT 10 Pro',
        brand: 'Infinix',
        category: 'infinix',
        price: 349.99,
        originalPrice: 429.99,
        discount: 19,
        rating: 4.3,
        reviews: 380,
        popularity: 72,
        image: getProductImage('Infinix', 1),
        description: 'Gaming-focused smartphone with RGB lighting'
    },
    {
        id: 19,
        name: 'Infinix Note 30 VIP',
        brand: 'Infinix',
        category: 'infinix',
        price: 299.99,
        originalPrice: 369.99,
        discount: 19,
        rating: 4.2,
        reviews: 320,
        popularity: 68,
        image: getProductImage('Infinix', 2),
        description: 'Large display with 68W fast charging'
    },
    {
        id: 20,
        name: 'Infinix Smart 8',
        brand: 'Infinix',
        category: 'infinix',
        price: 199.99,
        originalPrice: 249.99,
        discount: 20,
        rating: 4.0,
        reviews: 280,
        popularity: 60,
        image: getProductImage('Infinix', 3),
        description: 'Affordable smartphone with big battery'
    },
    {
        id: 21,
        name: 'Infinix Hot 30i',
        brand: 'Infinix',
        category: 'infinix',
        price: 169.99,
        originalPrice: 219.99,
        discount: 23,
        rating: 3.9,
        reviews: 220,
        popularity: 55,
        image: getProductImage('Infinix', 2),
        description: 'Budget smartphone with 5000mAh battery'
    },

    // ========== NOKIA PHONES ==========
    {
        id: 22,
        name: 'Nokia G60 5G',
        brand: 'Nokia',
        category: 'nokia',
        price: 299.99,
        originalPrice: 349.99,
        discount: 14,
        rating: 4.2,
        reviews: 280,
        popularity: 65,
        image: getProductImage('Nokia', 0),
        description: 'Durable 5G smartphone with 3 years of updates'
    },
    {
        id: 23,
        name: 'Nokia X30 5G',
        brand: 'Nokia',
        category: 'nokia',
        price: 349.99,
        originalPrice: 399.99,
        discount: 12,
        rating: 4.3,
        reviews: 310,
        popularity: 70,
        image: getProductImage('Nokia', 1),
        description: 'Premium design with eco-friendly materials'
    },
    {
        id: 24,
        name: 'Nokia C32',
        brand: 'Nokia',
        category: 'nokia',
        price: 199.99,
        originalPrice: 249.99,
        discount: 20,
        rating: 4.0,
        reviews: 200,
        popularity: 55,
        image: getProductImage('Nokia', 2),
        description: 'Affordable 4G smartphone with AI camera'
    },
    {
        id: 25,
        name: 'Nokia 8.3 5G',
        brand: 'Nokia',
        category: 'nokia',
        price: 449.99,
        originalPrice: 499.99,
        discount: 10,
        rating: 4.1,
        reviews: 250,
        popularity: 60,
        image: getProductImage('Nokia', 3),
        description: 'Pure Android with ZEISS optics'
    },
    {
        id: 26,
        name: 'Nokia 5.4',
        brand: 'Nokia',
        category: 'nokia',
        price: 249.99,
        originalPrice: 299.99,
        discount: 17,
        rating: 3.9,
        reviews: 180,
        popularity: 50,
        image: getProductImage('Nokia', 1),
        description: 'Reliable mid-range with quad camera'
    },

    // ========== README PHONES ==========
    {
        id: 27,
        name: 'Readme 11 Pro+',
        brand: 'Readme',
        category: 'readme',
        price: 279.99,
        originalPrice: 329.99,
        discount: 15,
        rating: 4.5,
        reviews: 400,
        popularity: 73,
        image: getProductImage('Readme', 0),
        description: 'Best value smartphone with 108MP camera'
    },
    {
        id: 28,
        name: 'Readme 10 Pro',
        brand: 'Readme',
        category: 'readme',
        price: 229.99,
        originalPrice: 279.99,
        discount: 18,
        rating: 4.4,
        reviews: 350,
        popularity: 70,
        image: getProductImage('Readme', 1),
        description: 'Powerful performance with 5000mAh battery'
    },
    {
        id: 29,
        name: 'Readme 9i',
        brand: 'Readme',
        category: 'readme',
        price: 179.99,
        originalPrice: 219.99,
        discount: 18,
        rating: 4.1,
        reviews: 250,
        popularity: 60,
        image: getProductImage('Readme', 2),
        description: 'Entry-level smartphone with great battery life'
    },
    {
        id: 30,
        name: 'Readme 12 5G',
        brand: 'Readme',
        category: 'readme',
        price: 329.99,
        originalPrice: 379.99,
        discount: 13,
        rating: 4.6,
        reviews: 420,
        popularity: 76,
        image: getProductImage('Readme', 3),
        description: 'Affordable 5G smartphone with AMOLED display'
    },
    {
        id: 31,
        name: 'Readme 8 Pro',
        brand: 'Readme',
        category: 'readme',
        price: 149.99,
        originalPrice: 189.99,
        discount: 21,
        rating: 4.0,
        reviews: 210,
        popularity: 58,
        image: getProductImage('Readme', 1),
        description: 'Budget-friendly with great camera'
    },
    {
        id: 32,
        name: 'Readme 13 5G',
        brand: 'Readme',
        category: 'readme',
        price: 399.99,
        originalPrice: 449.99,
        discount: 11,
        rating: 4.7,
        reviews: 480,
        popularity: 79,
        image: getProductImage('Readme', 3),
        description: 'Flagship-tier performance at mid-range price'
    },
    {
        id: 33,
        name: 'Realme GT 6T',
        brand: 'Realme',
        category: 'realme',
        price: 389.99,
        originalPrice: 459.99,
        discount: 15,
        rating: 4.5,
        reviews: 410,
        popularity: 74,
        image: getProductImage('Realme', 0),
        description: 'Fast charging and premium gaming performance'
    },
    {
        id: 34,
        name: 'Realme Narzo 70 Pro',
        brand: 'Realme',
        category: 'realme',
        price: 279.99,
        originalPrice: 329.99,
        discount: 15,
        rating: 4.4,
        reviews: 330,
        popularity: 69,
        image: getProductImage('Realme', 1),
        description: 'Great camera and battery life for everyday use'
    },
    {
        id: 35,
        name: 'Realme 12 Pro+',
        brand: 'Realme',
        category: 'realme',
        price: 459.99,
        originalPrice: 539.99,
        discount: 15,
        rating: 4.6,
        reviews: 470,
        popularity: 78,
        image: getProductImage('Realme', 2),
        description: 'Elegant camera-focused premium mid-range phone'
    },
    {
        id: 36,
        name: 'OPPO Find X7',
        brand: 'OPPO',
        category: 'oppo',
        price: 799.99,
        originalPrice: 899.99,
        discount: 11,
        rating: 4.7,
        reviews: 560,
        popularity: 84,
        image: getProductImage('Oppo', 0),
        description: 'Curved display with next-level imaging features'
    },
    {
        id: 37,
        name: 'OPPO Reno 11 Pro',
        brand: 'OPPO',
        category: 'oppo',
        price: 599.99,
        originalPrice: 699.99,
        discount: 14,
        rating: 4.5,
        reviews: 490,
        popularity: 80,
        image: getProductImage('Oppo', 1),
        description: 'Strong selfie camera and rich AMOLED display'
    },
    {
        id: 38,
        name: 'OPPO A60',
        brand: 'OPPO',
        category: 'oppo',
        price: 249.99,
        originalPrice: 299.99,
        discount: 17,
        rating: 4.1,
        reviews: 260,
        popularity: 61,
        image: getProductImage('Oppo', 2),
        description: 'Reliable all-rounder with smooth everyday performance'
    },
    {
        id: 39,
        name: 'Vivo V30 Pro',
        brand: 'Vivo',
        category: 'vivo',
        price: 699.99,
        originalPrice: 799.99,
        discount: 12,
        rating: 4.6,
        reviews: 520,
        popularity: 82,
        image: getProductImage('Vivo', 0),
        description: 'Premium portrait camera and ultra-slim design'
    },
    {
        id: 40,
        name: 'Vivo T2 Pro',
        brand: 'Vivo',
        category: 'vivo',
        price: 329.99,
        originalPrice: 389.99,
        discount: 15,
        rating: 4.3,
        reviews: 350,
        popularity: 68,
        image: getProductImage('Vivo', 1),
        description: 'Good performance and efficient battery backup'
    },
    {
        id: 41,
        name: 'Vivo Y36',
        brand: 'Vivo',
        category: 'vivo',
        price: 219.99,
        originalPrice: 259.99,
        discount: 15,
        rating: 4.1,
        reviews: 230,
        popularity: 57,
        image: getProductImage('Vivo', 2),
        description: 'Affordable smartphone with clean design and battery'
    },
    {
        id: 42,
        name: 'Tecno Phantom V Flip',
        brand: 'Tecno',
        category: 'tecno',
        price: 549.99,
        originalPrice: 629.99,
        discount: 13,
        rating: 4.4,
        reviews: 300,
        popularity: 66,
        image: getProductImage('Tecno', 0),
        description: 'Compact foldable with stylish hinge and camera setup'
    },
    {
        id: 43,
        name: 'Tecno Camon 20 Premier',
        brand: 'Tecno',
        category: 'tecno',
        price: 399.99,
        originalPrice: 469.99,
        discount: 15,
        rating: 4.5,
        reviews: 360,
        popularity: 72,
        image: getProductImage('Tecno', 1),
        description: 'Photography-focused smartphone with strong battery'
    },
    {
        id: 44,
        name: 'Tecno Spark 10',
        brand: 'Tecno',
        category: 'tecno',
        price: 179.99,
        originalPrice: 219.99,
        discount: 18,
        rating: 4.0,
        reviews: 210,
        popularity: 54,
        image: getProductImage('Tecno', 2),
        description: 'Entry-level value phone with large screen and battery'
    },
    {
        id: 45,
        name: 'ASUS ROG Phone 8',
        brand: 'Asus',
        category: 'asus',
        price: 899.99,
        originalPrice: 999.99,
        discount: 10,
        rating: 4.8,
        reviews: 590,
        popularity: 88,
        image: getProductImage('Asus', 0),
        description: 'Gaming beast with advanced cooling and display'
    },
    {
        id: 46,
        name: 'ASUS Zenfone 10',
        brand: 'Asus',
        category: 'asus',
        price: 649.99,
        originalPrice: 749.99,
        discount: 13,
        rating: 4.6,
        reviews: 470,
        popularity: 76,
        image: getProductImage('Asus', 1),
        description: 'Compact flagship with solid performance and camera'
    },
    {
        id: 47,
        name: 'ASUS Zenfone 9',
        brand: 'Asus',
        category: 'asus',
        price: 569.99,
        originalPrice: 649.99,
        discount: 12,
        rating: 4.5,
        reviews: 430,
        popularity: 73,
        image: getProductImage('Asus', 2),
        description: 'Premium compact phone built for power users'
    }
];

function getPhoneSpecs(product) {
    const brand = product.brand || '';
    const name = product.name || '';
    const lower = name.toLowerCase();

    const profileMap = {
        Samsung: { display: '6.8" QHD+ AMOLED', camera: '200MP + 50MP', battery: '5000mAh', storage: '256GB', ram: '12GB', chip: 'Snapdragon 8 Gen 3' },
        Google: { display: '6.7" LTPO OLED', camera: '50MP + 48MP', battery: '5050mAh', storage: '256GB', ram: '12GB', chip: 'Tensor G3' },
        OnePlus: { display: '6.8" AMOLED', camera: '50MP + 48MP', battery: '5400mAh', storage: '256GB', ram: '12GB', chip: 'Snapdragon 8 Gen 3' },
        Xiaomi: { display: '6.7" 144Hz AMOLED', camera: '50MP + 50MP', battery: '5000mAh', storage: '256GB', ram: '12GB', chip: 'Snapdragon 8 Gen 2' },
        Sony: { display: '6.5" 4K OLED', camera: '48MP + 12MP', battery: '5000mAh', storage: '256GB', ram: '12GB', chip: 'Snapdragon 8 Gen 2' },
        Nothing: { display: '6.7" OLED', camera: '50MP + 50MP', battery: '4700mAh', storage: '256GB', ram: '12GB', chip: 'Snapdragon 8+ Gen 1' },
        Motorola: { display: '6.7" pOLED', camera: '50MP + 13MP', battery: '4600mAh', storage: '256GB', ram: '12GB', chip: 'Snapdragon 8 Gen 2' },
        Apple: { display: '6.7" Super Retina XDR', camera: '48MP Pro Camera', battery: '4441mAh', storage: '256GB', ram: '8GB', chip: 'A17 Pro' },
        Infinix: { display: '6.78" AMOLED', camera: '108MP + 2MP', battery: '5000mAh', storage: '256GB', ram: '12GB', chip: 'MediaTek Dimensity 8020' },
        Nokia: { display: '6.6" FHD+ IPS', camera: '50MP + 8MP', battery: '4500mAh', storage: '128GB', ram: '8GB', chip: 'Snapdragon 695' },
        Readme: { display: '6.7" AMOLED', camera: '108MP + 8MP', battery: '5000mAh', storage: '256GB', ram: '12GB', chip: 'Dimensity 8300' },
        Realme: { display: '6.7" AMOLED', camera: '50MP + 8MP', battery: '5000mAh', storage: '256GB', ram: '12GB', chip: 'Snapdragon 7+ Gen 3' },
        OPPO: { display: '6.7" AMOLED', camera: '50MP + 32MP', battery: '5000mAh', storage: '256GB', ram: '12GB', chip: 'Dimensity 8300' },
        Vivo: { display: '6.7" AMOLED', camera: '50MP + 50MP', battery: '5000mAh', storage: '256GB', ram: '12GB', chip: 'Snapdragon 7 Gen 3' },
        Tecno: { display: '6.67" AMOLED', camera: '50MP + 2MP', battery: '5000mAh', storage: '256GB', ram: '8GB', chip: 'Helio G99' },
        Asus: { display: '6.78" AMOLED', camera: '50MP + 13MP', battery: '5000mAh', storage: '256GB', ram: '12GB', chip: 'Snapdragon 8 Gen 3' }
    };

    const base = profileMap[brand] || {
        display: '6.5" FHD+ display',
        camera: '48MP AI camera',
        battery: '5000mAh',
        storage: '128GB',
        ram: '8GB',
        chip: 'Smartphone chipset'
    };

    const isFold = lower.includes('fold');
    const isGaming = lower.includes('rog') || lower.includes('gt');
    const isFlip = lower.includes('flip');

    return {
        display: isFold ? '7.6" Flex AMOLED' : isGaming ? '6.78" AMOLED' : isFlip ? '6.9" foldable display' : base.display,
        camera: isFold ? '50MP + 12MP' : base.camera,
        battery: isFlip ? '4300mAh' : base.battery,
        storage: lower.includes('se') ? '128GB' : base.storage,
        ram: lower.includes('mini') || lower.includes('se') ? '6GB' : base.ram,
        chip: isGaming ? 'Snapdragon 8 Gen 3' : base.chip,
        os: product.category === 'iphone' ? 'iOS 17' : 'Android 14'
    };
}

products.forEach((product) => {
    product.specs = getPhoneSpecs(product);
    product.frontCamera = product.frontCamera || (product.brand === 'Apple' ? '12MP TrueDepth' : '32MP Front Camera');
    product.connectivity = product.connectivity || '5G / Wi‑Fi 6 / Bluetooth 5.3';
    product.build = product.build || (product.brand === 'Apple' ? 'Glass + Titanium Frame' : 'Glass Front + Aluminum Frame');
    product.weight = product.weight || (product.brand === 'Apple' ? '221g' : product.brand === 'Samsung' ? '233g' : '190g');
    product.highlights = [
        `${product.specs.ram} RAM`,
        `${product.specs.storage} Storage`,
        `${product.specs.camera}`,
        `${product.specs.battery}`
    ];
    product.detailSummary = `${product.specs.display} • ${product.specs.os} • ${product.specs.chip}`;
});

// Categories data
const categories = [
    { 
        id: 'android', 
        name: 'Android', 
        icon: 'fab fa-android', 
        count: 8,
        description: 'Powerful and customizable smartphones'
    },
    { 
        id: 'iphone', 
        name: 'iPhone', 
        icon: 'fab fa-apple', 
        count: 8,
        description: 'Premium iOS experience with seamless ecosystem'
    },
    { 
        id: 'infinix', 
        name: 'Infinix', 
        icon: 'fas fa-mobile-alt', 
        count: 5,
        description: 'Feature-rich smartphones with great value'
    },
    { 
        id: 'nokia', 
        name: 'Nokia', 
        icon: 'fas fa-phone', 
        count: 5,
        description: 'Durable and reliable smartphones'
    },
    { 
        id: 'readme', 
        name: 'Readme', 
        icon: 'fas fa-book-open', 
        count: 6,
        description: 'Innovative and affordable smartphones'
    },
    { 
        id: 'realme', 
        name: 'Realme', 
        icon: 'fas fa-mobile-screen-button', 
        count: 3,
        description: 'Speed-focused devices with premium value'
    },
    { 
        id: 'oppo', 
        name: 'OPPO', 
        icon: 'fas fa-camera-retro', 
        count: 3,
        description: 'Camera-first smartphones with stylish design'
    },
    { 
        id: 'vivo', 
        name: 'Vivo', 
        icon: 'fas fa-mobile-alt', 
        count: 3,
        description: 'Elegant phones with immersive displays'
    },
    { 
        id: 'tecno', 
        name: 'Tecno', 
        icon: 'fas fa-sim-card', 
        count: 3,
        description: 'Affordable innovation and strong battery life'
    },
    { 
        id: 'asus', 
        name: 'Asus', 
        icon: 'fas fa-laptop', 
        count: 3,
        description: 'Performance-driven phones for power users'
    }
];

// Featured products (8 products for homepage)
const featuredProducts = [
    products[0],  // Samsung Galaxy S24 Ultra
    products[8],  // iPhone 15 Pro Max
    products[16], // Infinix Zero 30 5G
    products[21], // Nokia G60 5G
    products[26], // Readme 11 Pro+
    products[4],  // Samsung Galaxy Z Fold 5
    products[9],  // iPhone 15 Pro
    products[27]  // Readme 10 Pro
];

// Popular products (top 6 by popularity)
const popularProducts = products
    .sort((a, b) => b.popularity - a.popularity)
    .slice(0, 6);

// New arrivals (latest 8 products)
const newArrivals = products.slice(-8);

// Make data available globally
if (typeof window !== 'undefined') {
    window.products = products;
    window.categories = categories;
    window.featuredProducts = featuredProducts;
    window.popularProducts = popularProducts;
    window.newArrivals = newArrivals;
}

// Export for ES modules if needed
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        products,
        categories,
        featuredProducts,
        popularProducts,
        newArrivals
    };
}