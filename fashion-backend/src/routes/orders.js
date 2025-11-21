import express from 'express';
import { orders, carts } from '../data/mockData.js';

const router = express.Router();

// Manage order ID counter locally
let orderIdCounter = 1;

// Create new order
router.post('/', (req, res) => {
    const { userId, items, shippingAddress, paymentMethod, total } = req.body;

    if (!userId || !items || !shippingAddress || !total) {
        return res.status(400).json({ error: 'Missing required fields' });
    }

    const order = {
        id: orderIdCounter++,
        userId,
        items,
        shippingAddress,
        paymentMethod,
        total,
        status: 'pending',
        createdAt: new Date().toISOString()
    };

    orders.push(order);

    // Clear user's cart after order
    if (carts[userId]) {
        carts[userId] = [];
    }

    res.status(201).json({ message: 'Order created successfully', order });
});

// Get all orders for a user
router.get('/user/:userId', (req, res) => {
    const { userId } = req.params;
    const userOrders = orders.filter(o => o.userId === userId);
    res.json(userOrders);
});

// Get order by ID
router.get('/:orderId', (req, res) => {
    const order = orders.find(o => o.id === parseInt(req.params.orderId));

    if (!order) {
        return res.status(404).json({ error: 'Order not found' });
    }

    res.json(order);
});

// Update order status
router.put('/:orderId/status', (req, res) => {
    const { orderId } = req.params;
    const { status } = req.body;

    const order = orders.find(o => o.id === parseInt(orderId));

    if (!order) {
        return res.status(404).json({ error: 'Order not found' });
    }

    order.status = status;
    res.json({ message: 'Order status updated', order });
});

export default router;
