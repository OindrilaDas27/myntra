require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const connectDB = require('./config/db');
const products = require('./routes/products');
const wishlist = require('./routes/wishlist');
const inspo = require('./routes/inspos');
const cors = require('cors');
const data = require('./data.json');
const Inspo = require('./models/InspoImage');
const { v4: uuidv4 } = require('uuid');

const app = express();

//Enable CORS
app.use(cors());

// connect to database
connectDB();

// parse json requests
app.use(bodyParser.json());

//seed data into mongo
const seedData = async () => {
  try {
    await Inspo.insertMany(data.map(item => ({
      id: uuidv4(),
      description: item.description,
      image: item.image,
      tags: item.tags
    })));
    console.log('Data seeded successfully');

  } catch (e) {

    console.error('error->', e.message);
    console.error(e);
  }
}

seedData();


// routes
app.use('/api/products', products);
app.use('/api/wishlist', wishlist);
app.use('/api/inspos', inspo);

// set the port and start the server
const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Server started on port ${port}`)
});