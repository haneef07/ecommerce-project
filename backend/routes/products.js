const express = require('express');
const Product = require('../models/Product');
const router = express.Router();

// Get all products
router.get('/', async (req, res) => {
  try {
    const products = await Product.find();  // Fetch all products
    res.json(products);  // Send products as JSON
  } catch (err) {
    res.status(500).json({ message: 'Server error', error: err });
  }
});

// Add a new product
router.post('/', async (req, res) => {
  try {
    const { name, description, price, imageUrl, category } = req.body;
    const newProduct = new Product({
      name,
      description,
      price,
      imageUrl,
      category
    });
    const savedProduct = await newProduct.save();
    res.status(201).json(savedProduct);
  } catch (err) {
    res.status(500).json({ message: 'Server error', error: err });
  }
});


module.exports = router;
