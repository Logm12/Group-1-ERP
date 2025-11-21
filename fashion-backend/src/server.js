import express from 'express';
import cors from 'cors';
import productsRouter from './routes/products.js';
import cartRouter from './routes/cart.js';
import ordersRouter from './routes/orders.js';
import authRouter from './routes/auth.js';

const app = express();
const PORT = 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use('/api/products', productsRouter);
app.use('/api/cart', cartRouter);
app.use('/api/orders', ordersRouter);
app.use('/api/auth', authRouter);

// Health check
app.get('/api/health', (req, res) => {
    res.json({ status: 'ok', message: 'Fashion API is running' });
});

// Error handling
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({ error: 'Something went wrong!' });
});

// Start server
app.listen(PORT, () => {
    console.log(`🚀 Fashion API server running on http://localhost:${PORT}`);
    console.log(`📦 Products endpoint: http://localhost:${PORT}/api/products`);
    console.log(`🛒 Cart endpoint: http://localhost:${PORT}/api/cart`);
    console.log(`📋 Orders endpoint: http://localhost:${PORT}/api/orders`);
    console.log(`🔐 Auth endpoint: http://localhost:${PORT}/api/auth`);
});

export default app;
