const mongoose = require('mongoose');

const WishlistSchema = new mongoose.Schema({
    products: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Product'
    }],
    date: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('Wishlist', WishlistSchema);