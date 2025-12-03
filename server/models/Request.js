const mongoose = require('mongoose');

const RequestSchema = new mongoose.Schema({
    user_id: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    title: { type: String, required: true },
    description: { type: String, required: true },
    request_type: { type: String, enum: ['Cash', 'Item', 'Digital', 'Gift', 'Service', 'Resource'], required: true }, // Mapped from category
    location: String,
    max_donation: Number,
    service_type: String,
    resource_type: String,
    hashtags: String,
    status: { type: String, enum: ['active', 'completed', 'flagged'], default: 'active' },
    date_created: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Request', RequestSchema);
