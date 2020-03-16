var mongoose = require("mongoose");

function init(db) {
  db.createCollection("OrderProductsList", {
    viewOn: "orders",
    pipeline: [
      {
        $lookup: {
          let: { orderId: "$_id" },
          from: "productorders",
          as: "products",
          pipeline: [
            {
              $match: { $expr: { $and: [{ $eq: ["$orderId", "$$orderId"] }] } }
            },
            {
              $lookup: {
                let: { productId: "$productId" },
                from: "products",
                as: "product",
                pipeline: [
                  {
                    $match: {
                      $expr: { $and: [{ $eq: ["$_id", "$$productId"] }] }
                    }
                  }
                ]
              }
            },
            {
              $project: {
                _id: false,
                product: { $arrayElemAt: ["$product", 0] }
              }
            },
            { $replaceRoot: { newRoot: "$product" } }
          ]
        }
      }
    ]
  });
}

function getOrderProductsList() {
  return mongoose.model("OrderProductsList");
}

module.exports = { init, getOrderProductsList };
