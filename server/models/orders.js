var mongoose = require("mongoose");

var OrderSchema = new mongoose.Schema(
  {
    time: { type: Date, required: true }
  },
  { versionKey: false, autoIndex: true }
);

var ProductOrderSchema = new mongoose.Schema(
  {
    orderId: { type: mongoose.Schema.Types.ObjectId, ref: "Order" },
    productId: { type: mongoose.Schema.Types.ObjectId, ref: "Product" }
  },
  { versionKey: false, autoIndex: true }
);

const OrderModel = mongoose.model("Order", OrderSchema);
const ProductOrderModel = mongoose.model("ProductOrder", ProductOrderSchema);

module.exports = { OrderModel, ProductOrderModel };
