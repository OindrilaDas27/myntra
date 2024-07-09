const Wishlist = require('../models/Wishlist');

// get the wishlist
const getWishlist = async(req, res) => {
    try {
        // find the wishlist and populate
        const wishlist = await Wishlist.findOne().populate('products');
        res.status(200).json(wishlist);
    } catch (e) {
        console.error(e.message);
        res.status(500).json({message: e.message});
    }
}

// add a product to the wishlist
const addToWishlist = async(req, res) => {
    // get the product id from the req body
    const { productId } = req.body;

    try {
        let wishlist = await Wishlist.findOne();
        if(!wishlist) {
            // create a new wishlist if it doesn't exist
            wishlist = new Wishlist({
                products: [productId]
            });
        } else {
            // add prods to existing wishlist
            wishlist.products.push(productId);
        }

        await wishlist.save();
        res.status(200).json(wishlist);
    } catch (e) {
        console.error(e.message);
        res.status(500).json({message: e.message});
    }
}

// remove a product from the wishlist
const removeFromWishlist = async(req, res) => {
    // get productId from req body
    const { productId } = req.body;
    try {
        // find the wishlist
        let wishlist = await Wishlist.findOne();
        if(wishlist) {
            // remove from wishlist
            wishlist.products = wishlist.products.filter(id => id.toString() !== productId);
            await wishlist.save();
        }
        res.status(200).json(wishlist);
    } catch (e) {
        console.error(e.message);
        res.status(500).json({message: e.message});
    }
}

module.exports = { getWishlist, addToWishlist, removeFromWishlist }