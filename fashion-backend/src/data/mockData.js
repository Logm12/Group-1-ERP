// Mock data for the fashion store
export const products = [
    {
        id: 1,
        name: "Classic White T-Shirt",
        category: "tops",
        price: 29.99,
        description: "Premium cotton t-shirt with a relaxed fit. Perfect for everyday wear.",
        image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=500",
        sizes: ["XS", "S", "M", "L", "XL"],
        colors: ["White", "Black", "Gray"],
        inStock: true,
        featured: true
    },
    {
        id: 2,
        name: "Slim Fit Jeans",
        category: "bottoms",
        price: 79.99,
        description: "Modern slim fit jeans with stretch denim for comfort and style.",
        image: "https://images.unsplash.com/photo-1542272604-787c3835535d?w=500",
        sizes: ["28", "30", "32", "34", "36"],
        colors: ["Dark Blue", "Light Blue", "Black"],
        inStock: true,
        featured: true
    },
    {
        id: 3,
        name: "Leather Jacket",
        category: "outerwear",
        price: 249.99,
        description: "Genuine leather jacket with a timeless design. A wardrobe essential.",
        image: "https://images.unsplash.com/photo-1551028719-00167b16eac5?w=500",
        sizes: ["S", "M", "L", "XL"],
        colors: ["Black", "Brown"],
        inStock: true,
        featured: true
    },
    {
        id: 4,
        name: "Summer Dress",
        category: "dresses",
        price: 89.99,
        description: "Flowy summer dress with floral print. Light and comfortable.",
        image: "https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=500",
        sizes: ["XS", "S", "M", "L"],
        colors: ["Floral Blue", "Floral Pink", "Solid White"],
        inStock: true,
        featured: false
    },
    {
        id: 5,
        name: "Wool Sweater",
        category: "tops",
        price: 69.99,
        description: "Cozy wool blend sweater perfect for cold weather.",
        image: "https://images.unsplash.com/photo-1576566588028-4147f3842f27?w=500",
        sizes: ["S", "M", "L", "XL"],
        colors: ["Navy", "Burgundy", "Cream"],
        inStock: true,
        featured: false
    },
    {
        id: 6,
        name: "Athletic Shorts",
        category: "bottoms",
        price: 39.99,
        description: "Lightweight athletic shorts with moisture-wicking fabric.",
        image: "https://images.unsplash.com/photo-1591195853828-11db59a44f6b?w=500",
        sizes: ["S", "M", "L", "XL"],
        colors: ["Black", "Navy", "Gray"],
        inStock: true,
        featured: false
    },
    {
        id: 7,
        name: "Blazer",
        category: "outerwear",
        price: 159.99,
        description: "Tailored blazer for a professional look. Versatile and elegant.",
        image: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=500",
        sizes: ["S", "M", "L", "XL"],
        colors: ["Black", "Navy", "Charcoal"],
        inStock: true,
        featured: true
    },
    {
        id: 8,
        name: "Maxi Skirt",
        category: "bottoms",
        price: 54.99,
        description: "Elegant maxi skirt with a flowing silhouette.",
        image: "https://images.unsplash.com/photo-1583496661160-fb5886a0aaaa?w=500",
        sizes: ["XS", "S", "M", "L"],
        colors: ["Black", "Burgundy", "Olive"],
        inStock: true,
        featured: false
    }
];

export const users = [
    {
        id: 1,
        email: "demo@fashion.com",
        password: "demo123",
        name: "Demo User",
        address: {
            street: "123 Fashion Ave",
            city: "New York",
            state: "NY",
            zip: "10001"
        }
    }
];

export let carts = {};
export let orders = [];
export let orderIdCounter = 1;
