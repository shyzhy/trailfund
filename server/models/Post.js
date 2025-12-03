const mongoose = require('mongoose');

const PostSchema = new mongoose.Schema({
    user_id: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    content: { type: String, required: true },
    media: String,
    date_posted: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Post', PostSchema);
