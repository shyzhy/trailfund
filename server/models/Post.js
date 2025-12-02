const mongoose = require('mongoose');

const PostSchema = new mongoose.Schema({
    author: { type: String, required: true },
    avatar: String,
    content: { type: String, required: true },
    likes: { type: Number, default: 0 },
    comments: { type: Number, default: 0 },
    createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Post', PostSchema);
