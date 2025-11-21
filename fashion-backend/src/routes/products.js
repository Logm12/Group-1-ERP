import express from 'express';
import { products } from '../data/mockData.js';

const router = express.Router();

// Get all products
router.get('/', (req, res) => {
    const { category, search, minPrice, maxPrice } = req.query;

    let filteredProducts = [...products];

    // Filter by category
    if (category) {
        filteredProducts = filteredProducts.filter(p => p.category === category);
    }

    // Search by name or description
    if (search) {
        const searchLower = search.toLowerCase();
        filteredProducts = filteredProducts.filter(p =>
            p.name.toLowerCase().includes(searchLower) ||
            p.description.toLowerCase().includes(searchLower)
        );
    }

    // Filter by price range
    if (minPrice) {
        filteredProducts = filteredProducts.filter(p => p.price >= parseFloat(minPrice));
    }
    if (maxPrice) {
        filteredProducts = filteredProducts.filter(p => p.price <= parseFloat(maxPrice));
    }

    res.json(filteredProducts);
});

// Get featured products
router.get('/featured', (req, res) => {
    const featured = products.filter(p => p.featured);
    res.json(featured);
});

// Get product by ID
router.get('/:id', (req, res) => {
    const product = products.find(p => p.id === parseInt(req.params.id));

    if (!product) {
        return res.status(404).json({ error: 'Product not found' });
    }

    res.json(product);
});

// Get categories
router.get('/meta/categories', (req, res) => {
    const categories = [...new Set(products.map(p => p.category))];
    res.json(categories);
});

export default router;
