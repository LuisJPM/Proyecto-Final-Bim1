const Product = require("../models/Product");

const createProduct = async (req, res) => {
  const { name, price, stock, category } = req.body;
  try {
    const product = new Product({ name, price, stock, category });
    await product.save();
    res.status(201).json(product);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const getProducts = async (req, res) => {
  try {
    const products = await Product.find().populate("category");
    res.json(products);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = { createProduct, getProducts };