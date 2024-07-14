const Inspo = require('../models/InspoImage');
const {v4: uuidv4} = require('uuid');

//get inspos based on search query
const getInspo = async(req, res) => {
    const {query, ...tags} = req.query;

    // BUild the search query
    let searchQuery = {};

    if(query) {
        searchQuery.$or = [
            {tags: new RegExp(query, 'i')}
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

    try {
        const inspo = await Inspo.find(searchQuery);
        res.status(200).json(inspo);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: error.message});
    }
}

const addInspo = async(req, res) => {
    const { image, description, tags } = req.body;

    try {
        const newInspo = new Inspo({
            id: uuidv4(),
            image,
            description,
            tags
        })
        const inspo = await newInspo.save();

        res.status(200).json(inspo);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: error.message});
    }
}

module.exports = { getInspo, addInspo };