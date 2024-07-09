const mongoose = require("mongoose");

// schema for product
const ProductSchema = new mongoose.Schema({
    brandName: {
        type: String,
        required: true,
    },
    name: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    image: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        required: true,
    },
    sizes:[
        {
            size: {
                type: String,
                required: true,
            },
            quantity: {
                type: Number,
                required: true,
            }
        },
    ],
    color: {
        type: String,
        required: true,
    },
    category: {
        type: String,
        required: true,
    },
    date: {
        type: Date,
        default: Date.now,
    },
});

module.exports = mongoose.model('Product', ProductSchema);