import express from 'express';
import { carts } from '../data/mockData.js';
import { products } from '../data/mockData.js';

const router = express.Router();

// Get cart for a user
router.get('/:userId', (req, res) => {
    const { userId } = req.params;
    const cart = carts[userId] || [];
    res.json(cart);
});

// Add item to cart
router.post('/add', (req, res) => {
    const { userId, productId, quantity, size, color } = req.body;

    if (!userId || !productId || !quantity) {
        return res.status(400).json({ error: 'Missing required fields' });
    }

    const product = products.find(p => p.id === productId);
    if (!product) {
        return res.status(404).json({ error: 'Product not found' });
    }

    if (!carts[userId]) {
        carts[userId] = [];
    }

    // Check if item already exists in cart
    const existingItemIndex = carts[userId].findIndex(
        item => item.productId === productId && item.size === size && item.color === color
    );

    if (existingItemIndex >= 0) {
        carts[userId][existingItemIndex].quantity += quantity;
    } else {
        carts[userId].push({
            productId,
            name: product.name,
            price: product.price,
            image: product.image,
            quantity,
            size,
            color
        });
    }

    res.json({ message: 'Item added to cart', cart: carts[userId] });
});

// Update cart item quantity
router.put('/update', (req, res) => {
    const { userId, productId, quantity, size, color } = req.body;

    if (!carts[userId]) {
        return res.status(404).json({ error: 'Cart not found' });
    }

    const itemIndex = carts[userId].findIndex(
        item => item.productId === productId && item.size === size && item.color === color
    );

    if (itemIndex === -1) {
        return res.status(404).json({ error: 'Item not found in cart' });
    }

    if (quantity <= 0) {
        carts[userId].splice(itemIndex, 1);
    } else {
        carts[userId][itemIndex].quantity = quantity;
    }

    res.json({ message: 'Cart updated', cart: carts[userId] });
});

// Remove item from cart
router.delete('/remove', (req, res) => {
    const { userId, productId, size, color } = req.body;

    if (!carts[userId]) {
        return res.status(404).json({ error: 'Cart not found' });
    }

    carts[userId] = carts[userId].filter(
        item => !(item.productId === productId && item.size === size && item.color === color)
    );

    res.json({ message: 'Item removed from cart', cart: carts[userId] });
});

// Clear cart
router.delete('/clear/:userId', (req, res) => {
    const { userId } = req.params;
    carts[userId] = [];
    res.json({ message: 'Cart cleared' });
});

export default router;
