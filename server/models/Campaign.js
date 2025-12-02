const mongoose = require('mongoose');

const CampaignSchema = new mongoose.Schema({
    title: { type: String, required: true },
    description: { type: String, required: true },
    ownerName: { type: String, required: true },
    organization: String,
    targetAmount: { type: Number, required: true },
    minAmount: Number,
    maxAmount: Number,
    raisedAmount: { type: Number, default: 0 },
    donationType: { type: String, enum: ['Cash', 'Digital', 'Items'], default: 'Cash' },
    designatedSite: String,
    image: String,
    status: { type: String, enum: ['pending', 'approved', 'rejected'], default: 'pending' },
    createdAt: { type: Date, default: Date.now },
    deadline: Date
});

module.exports = mongoose.model('Campaign', CampaignSchema);
