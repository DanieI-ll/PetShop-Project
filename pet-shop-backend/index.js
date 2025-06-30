const express = require('express');
const cors = require('cors');
const sequelize = require('./database/database');

const categories = require('./routes/categories');
const sale = require('./routes/sale');
const order = require('./routes/order');
const products = require('./routes/products');

const Category = require('./database/models/category');
const Product = require('./database/models/product');

const PORT = process.env.PORT || 3333;

Category.hasMany(Product);

const app = express();

// Middleware
app.use(
  cors({
    origin: 'https://pet-shop-project-91l3a44t8-daniels-projects-889c52e0.vercel.app',
  }),
);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

// Routes
app.use('/categories', categories);
app.use('/products', products);
app.use('/sale', sale);
app.use('/order', order);

app.get('/', (req, res) => {
  res.send('API is running');
});

const start = async () => {
  try {
    await sequelize.sync();
    app.listen(PORT, () => {
      console.log(`Server started on port ${PORT}`);
    });
  } catch (err) {
    console.error(err);
  }
};

start();
