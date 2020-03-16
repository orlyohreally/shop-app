const Product = require("./products");
const Order = require("./orders");
const ProductOrder = require("./orders");

function init(db) {
  require("./order-products").init(db);
}

module.exports = { init, Product, Order, ProductOrder };
