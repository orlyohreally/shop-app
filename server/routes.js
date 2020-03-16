var express = require("express");
var router = express.Router();

var ctrlProducts = require("./controllers/product");
router.get("/products", ctrlProducts.listProducts);
router.post("/products", ctrlProducts.createProduct);
router.put("/products/:id", ctrlProducts.updateProduct);
router.delete("/products/:id", ctrlProducts.deleteProduct);

var ctrlOrders = require("./controllers/order");
router.post("/orders", ctrlOrders.createOrder);
router.get("/orders/all", ctrlOrders.getProductsStats);

module.exports = router;
