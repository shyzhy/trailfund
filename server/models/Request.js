const mongoose = require('mongoose');

const RequestSchema = new mongoose.Schema({
    title: { type: String, required: true },
    description: { type: String, required: true },
    urgency: { type: String, enum: ['Green', 'Yellow', 'Red'], default: 'Green' },
    category: { type: String, enum: ['Cash', 'Item', 'Digital', 'Gift', 'Service', 'Resource'], required: true },
    minAmount: Number,
    maxAmount: Number,
    location: String,
    digitalType: String, // GCash, Load
    accountNumber: String,
    serviceType: String,
    resourceType: String,
    hashtags: String,
    status: { type: String, enum: ['active', 'fulfilled', 'removed'], default: 'active' },
    createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Request', RequestSchema);
