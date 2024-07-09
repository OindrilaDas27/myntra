const express = require('express');
const router = express.Router();
const wishlistController = require('../controllers/wishlistController');

// route to get the wishlist
router.get('/', wishlistController.getWishlist);

// route to add prod to wishlist
router.post('/', wishlistController.addToWishlist);

// route to delete a prod from wishlist
router.delete('/', wishlistController.removeFromWishlist)

module.exports = router;