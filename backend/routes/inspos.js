const express = require('express');
const router = express.Router();
const inspoController = require('../controllers/InspoController');

//route to get inspos by seaarch query
router.get('/', inspoController.getInspo);

// route to add inspo
router.post('/', inspoController.addInspo);

module.exports = router;