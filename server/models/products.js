var mongoose = require('mongoose');

var ProductSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    description: { type: String, required: true },
    image: { type: String, required: true },
    price: { type: Number, required: true }
  },
  { versionKey: false }
);

const ProductModel = mongoose.model('Product', ProductSchema);

module.exports = { ProductModel };
