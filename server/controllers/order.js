var { Order, ProductOrder } = require("../models");

async function createOrder(req, res) {
  try {
    console.log("create", req.body);
    const products = req.body.products;
    if (!products || !products.length) {
      return res.status(403).json("No products");
    }

    const newOrder = new Order.OrderModel({ time: new Date() });
    await newOrder.save();
    products.forEach(async product => {
      const newProductOrder = new ProductOrder.ProductOrderModel({
        productId: product._id,
        orderId: newOrder.toJSON()._id
      });
      await newProductOrder.save();
    });
    res.status(200).json("Successfully added");
  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
}

async function getProductsStats(req, res) {
  try {
    const aggregation = await Order.OrderModel.aggregate([
      {
        $lookup: {
          let: {
            orderId: "$_id"
          },
          from: "productorders",
          as: "products",
          pipeline: [
            {
              $match: {
                $expr: {
                  $and: [{ $eq: ["$orderId", "$$orderId"] }]
                }
              }
            },
            {
              $lookup: {
                let: {
                  productId: "$productId"
                },
                from: "products",
                as: "product",
                pipeline: [
                  {
                    $match: {
                      $expr: {
                        $and: [{ $eq: ["$_id", "$$productId"] }]
                      }
                    }
                  }
                ]
              }
            },
            {
              $project: {
                _id: false,
                product: {
                  $arrayElemAt: ["$product", 0]
                }
              }
            },
            { $replaceRoot: { newRoot: "$product" } }
          ]
        }
      }
    ]);

    res.status(200).json(aggregation);
  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
}

module.exports = { createOrder, getProductsStats };
