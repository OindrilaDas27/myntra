require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const connectDB = require('./config/db');
const products = require('./routes/products');
const wishlist = require('./routes/wishlist');

const { faker } = require('@faker-js/faker');
const Product = require('./models/Product');

const app = express();

// connect to database
connectDB();

// parse json requests
app.use(bodyParser.json());

// routes
app.use('/api/products', products);
app.use('/api/wishlist', wishlist);

const generateData = (num) => {
    const productData = [];

    for (let i = 0; i < num; i++) {
        const productID = faker.string.uuid();
        const brandName = faker.commerce.product();
        const name = faker.commerce.productName();
        const description = faker.commerce.productDescription();
        const image = faker.image.urlLoremFlickr({ category: 'fashion' });
        const price = faker.commerce.price({ min: 300, max: 10000 });
        const sizes = [
            { "size": "S", "quantity": 10 },
            { "size": "M", "quantity": 5 },
            { "size": "L", "quantity": 22 },
            { "size": "XL", "quantity": 12 }
        ];
        const color = faker.color.human();
        const category = faker.commerce.department();
        const tags = faker.word.adjective();

        productData.push({
            productID,
            brandName,
            name,
            description,
            image,
            price,
            sizes,
            color,
            category,
            tags,
        });
    }

    return productData;
}

// Generate and insert sample data
const insertSampleData = async () => {
    try {
      const products = generateData(5);
  
      await Product.insertMany(products);
  
      console.log(`${products.length} products have been inserted into the database.`);
    } catch (err) {
      console.error(err);
    }
  };
  
  // Insert sample data when the server starts
  insertSampleData();

// set the port and start the server
const port = process.env.PORT || 5000;
app.listen(port, () => {
    console.log(`Server started on port ${port}`)
});