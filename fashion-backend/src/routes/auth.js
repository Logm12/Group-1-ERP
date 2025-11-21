import express from 'express';
import { users } from '../data/mockData.js';

const router = express.Router();

// Login
router.post('/login', (req, res) => {
    const { email, password } = req.body;

    const user = users.find(u => u.email === email && u.password === password);

    if (!user) {
        return res.status(401).json({ error: 'Invalid credentials' });
    }

    // Return user without password
    const { password: _, ...userWithoutPassword } = user;
    res.json({ message: 'Login successful', user: userWithoutPassword });
});

// Register (simplified for demo)
router.post('/register', (req, res) => {
    const { email, password, name } = req.body;

    if (!email || !password || !name) {
        return res.status(400).json({ error: 'Missing required fields' });
    }

    // Check if user already exists
    if (users.find(u => u.email === email)) {
        return res.status(409).json({ error: 'User already exists' });
    }

    const newUser = {
        id: users.length + 1,
        email,
        password,
        name,
        address: {}
    };

    users.push(newUser);

    const { password: _, ...userWithoutPassword } = newUser;
    res.status(201).json({ message: 'Registration successful', user: userWithoutPassword });
});

// Get user profile
router.get('/profile/:userId', (req, res) => {
    const user = users.find(u => u.id === parseInt(req.params.userId));

    if (!user) {
        return res.status(404).json({ error: 'User not found' });
    }

    const { password: _, ...userWithoutPassword } = user;
    res.json(userWithoutPassword);
});

export default router;
