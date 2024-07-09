const express = require('express');
const router = express.Router();
const productController = require('../controllers/productController');

// route to get prodc base on search query
router.get('/', productController.getProducts);

// route to get product by ID
router.get('/:id', productController.getProductById);

// route to add new prod
router.post('/', productController.addProduct);

module.exports = router;