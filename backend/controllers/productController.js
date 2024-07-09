const Product = require('../models/Product');
const { v4 : uuidv4 } = require('uuid');

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
            },
            {
                tags: new RegExp(query, 'i')
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

// get products based on id
const getProductById = async (req, res) => {
    const { id } = req.params;

    try {
        const product = await Product.findOne({ productID: id });
        if (product) {
            res.status(200).json(product);
        } else {
            res.status(404).json({ message: 'Product not found' });
        }
    } catch (e) {
        console.error(e.message);
        res.status(500).json({ message: e.message });
    }
} 

// add new product
const addProduct = async(req, res) => {
    const { brandName, name, description, image, price, sizes, color, category, tags } = req.body;

    try {
        // create new product instance
        const newProduct = new Product({
            productID: uuidv4(),
            brandName,
            name,
            description,
            image,
            price,
            sizes,
            color,
            category,
            tags
        });

        const product = await newProduct.save();

        res.status(201).json(product);
    } catch (e) {
        console.error(e.message);
        res.status(500).json({message: e.message});
    }
}

module.exports = { getProducts, getProductById, addProduct };