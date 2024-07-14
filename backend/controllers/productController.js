const Product = require('../models/Product');
const { v4 : uuidv4 } = require('uuid');

// get products based on search query
const getProducts = async (req, res) => {
    // Get search query and tags from request parameters
    const { query, ...tags } = req.query;

    // Build the search query for MongoDB
    let searchQuery = {};

    // If a general search query is provided, add it to the search criteria
    if (query) {
        searchQuery.$or = [
            { brandName: new RegExp(query, 'i') },
            { name: new RegExp(query, 'i') },
            { category: new RegExp(query, 'i') },
            { color: new RegExp(query, 'i') }
        ];
    }

    // If specific tags are provided, add them to the search criteria
    if (Object.keys(tags).length > 0) {
        searchQuery.$and = [];
        
        for (const [key, value] of Object.entries(tags)) {
            const tagQuery = {};
            tagQuery[`tags.${key}`] = new RegExp(value, 'i');
            searchQuery.$and.push(tagQuery);
        }
    }

    // Execute the search query
    try {
        const products = await Product.find(searchQuery);
        res.status(200).json(products);
    } catch (e) {
        console.error(e.message);
        res.status(500).json({ message: e.message });
    }
};


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