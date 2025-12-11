import express from 'express';
import Newsletter from '../models/Newsletter.js';

const router = express.Router();

// POST /api/newsletter
router.post('/', async (req, res) => {
    try {
        const { email } = req.body;

        if (!email) {
            return res.status(400).json({
                success: false,
                message: 'Email is required'
            });
        }

        // Check if email already exists
        const existingSubscriber = await Newsletter.findOne({ email });
        if (existingSubscriber) {
            return res.status(400).json({
                success: false,
                message: 'This email is already subscribed'
            });
        }

        // Create new subscriber
        const subscriber = new Newsletter({ email });
        await subscriber.save();

        res.status(201).json({
            success: true,
            message: 'Successfully subscribed to newsletter!',
            data: { email: subscriber.email }
        });

    } catch (error) {
        console.error('Newsletter subscription error:', error);

        // Handle duplicate key error (if race condition occurs)
        if (error.code === 11000) {
            return res.status(400).json({
                success: false,
                message: 'This email is already subscribed'
            });
        }

        res.status(500).json({
            success: false,
            message: 'Internal server error',
            error: error.message
        });
    }
});

export default router;
