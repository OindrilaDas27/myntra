const mongoose = require('mongoose');
const { v4: uuidv4 } = require('uuid');

// for inspo Images
const InspoSchema = new mongoose.Schema({
    id: {
        type: String, 
        required: true, 
        unique: true 
    },
    image: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    tags: {
        type: [String],
        required: true,
    },
})

module.exports = mongoose.model('Inspo', InspoSchema);
