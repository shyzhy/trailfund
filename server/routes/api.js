const express = require('express');
const router = express.Router();
const Campaign = require('../models/Campaign');
const Request = require('../models/Request');
const Post = require('../models/Post');
const User = require('../models/User');

// --- USERS ---

// Get all users
router.get('/users', async (req, res) => {
    try {
        const users = await User.find();
        res.json(users);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// Login
router.post('/login', async (req, res) => {
    const { identifier, password } = req.body;

    try {
        // Find user by username OR email
        const user = await User.findOne({
            $or: [{ username: identifier }, { email: identifier }]
        });

        if (!user) {
            return res.status(400).json({ message: 'Invalid credentials' });
        }

        // In a real app, compare hashed password. Here we compare plain text as per seed.
        if (user.password !== password) {
            return res.status(400).json({ message: 'Invalid credentials' });
        }

        // Return user info (excluding password)
        const userResponse = user.toObject();
        delete userResponse.password;

        res.json({ message: 'Login successful', user: userResponse });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// --- CAMPAIGNS ---

// Get all campaigns
router.get('/campaigns', async (req, res) => {
    try {
        const campaigns = await Campaign.find().sort({ createdAt: -1 });
        res.json(campaigns);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// Create a campaign
router.post('/campaigns', async (req, res) => {
    const campaign = new Campaign(req.body);
    try {
        const newCampaign = await campaign.save();
        res.status(201).json(newCampaign);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

// --- REQUESTS ---

// Get all requests
router.get('/requests', async (req, res) => {
    try {
        const requests = await Request.find().sort({ createdAt: -1 });
        res.json(requests);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// Create a request
router.post('/requests', async (req, res) => {
    const request = new Request(req.body);
    try {
        const newRequest = await request.save();
        res.status(201).json(newRequest);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

// --- POSTS ---

// Get all posts
router.get('/posts', async (req, res) => {
    try {
        const posts = await Post.find().sort({ createdAt: -1 });
        res.json(posts);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// Create a post
router.post('/posts', async (req, res) => {
    const post = new Post(req.body);
    try {
        const newPost = await post.save();
        res.status(201).json(newPost);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

module.exports = router;
