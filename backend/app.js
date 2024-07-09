require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const connectDB = require('./config/db');
const products = require('./routes/products');
const wishlist = require('./routes/wishlist');

const app = express();

// connect to database
connectDB();

// parse json requests
app.use(bodyParser.json());

// routes
app.use('/api/products', products);
app.use('/api/wishlist', wishlist);

// set the port and start the server
const port = process.env.PORT || 5000;
app.listen(port, () => {
    console.log(`Server started on port ${port}`)
});