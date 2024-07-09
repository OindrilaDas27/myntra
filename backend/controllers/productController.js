const Product = require('../models/Product');

// get products based on search query
const getProducts = async(req, res) => {
    // get search query from request parameters
    const { query } = req.query;

    // search query for mongoDB
    const searchQuery = query ? {
        $or: [
            {
                brandName: new RegExp(query, 'i')
            },
            {
                name: new RegExp(query, 'i')
            },
            {
                category: new RegExp(query, 'i')
            },
            {
                color: new RegExp(query, 'i')
            }
        ]
    } : {};

    try {
        // find product based on search query
        const products = await Product.find(searchQuery);
        // send the product as JSON response
        res.status(200).json(products);
    } catch (e) {
        console.error(e.message);
        res.status(500).json({message: e.message});
    }
}

// add new product
const addProduct = async(req, res) => {
    const { brandName, name, description, image, price, sizes, color, category } = req.body;

    try {
        // create new product instance
        const newProduct = new Product({
            brandName,
            name,
            description,
            image,
            price,
            sizes,
            color,
            category
        });

        const product = await newProduct.save();

    } catch (e) {
        console.error(e.message);
        res.status(500).json({message: e.message});
    }
}

module.exports = { getProducts, addProduct };