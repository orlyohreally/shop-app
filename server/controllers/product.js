var { Product } = require("../models");
const mongoose = require("mongoose");

async function listProducts(req, res) {
  try {
    Product.ProductModel.find().exec((err, products) => {
      res.status(200).json(products);
    });
  } catch (error) {
    console.log("error", error);
    return res.status(500).json(error);
  }
}

async function createProduct(req, res) {
  try {
    console.log("create", req.body);
    const product = req.body.product;
    try {
      validateProduct(product);
    } catch (error) {
      res.status(403).json(error.message);
    }
    const newProduct = new Product.ProductModel(product);
    await newProduct.save();
    res.status(200).json(newProduct.toJSON({ versionKey: false }));
  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
}

async function updateProduct(req, res) {
  try {
    console.log("update", req.body, req.params.id);
    const product = req.body.product;
    try {
      validateProduct(product);
    } catch (error) {
      res.status(403).json(error.message);
    }
    const updatedProduct = await Product.ProductModel.findByIdAndUpdate(
      req.params.id,
      product,
      { new: true }
    );
    return res.status(200).json(updatedProduct);
  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
}

async function deleteProduct(req, res) {
  try {
    console.log(
      "delete",
      req.body,
      req.params.id,
      new mongoose.ObjectId(req.params.id)
    );
    await Product.ProductModel.findByIdAndDelete(req.params.id);
    res.status(200).json({ message: "successfully deleted" });
  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
}

function validateProduct(product) {
  if (
    !product ||
    !product.image ||
    !product.description ||
    !product.title ||
    !product.price
  ) {
    throw new Error("Product title, description, price and image are required");
  }
}

module.exports = { listProducts, createProduct, updateProduct, deleteProduct };
