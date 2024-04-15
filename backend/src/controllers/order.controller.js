import Order from "../controllers/order.controller.js";

export async function getOrderList(req, res) {
  try {
    let orders = await Order.find({}, {_id: 1, "customer.firstName": 1, "customer.lastName": 1, total: 1, status: 1, createdAt: 1});
    res.status(200).json(orders);
  } catch (err) {
    res.status(500).json(
        { error: err.message }
    );
  }
}


export async function getOrderById(req, res) {
  console.log("Order by ID test");
  const orderID = req.params.id;

  if (!orderID) {
    return res.status(400).json({ message: "Order ID not found" });
  }

  try {
    const order = await Order.aggregate([
      { $match: { _id: mongoose.types.ObjectId(orderID) } },
      {
        $lookup: {
          from: "products",
          localField: "items.product",
          foreignField: "_id",
          as: "product",
        },
      },
      {
        $project: {
          "customer.firstName": 1,
          "customer.lastName": 1,
          "customer.email": 1,
          total: 1,
          status: 1,
          shippingAddress: 1,
          paymentDetails: 1,
          "product.name": 1,
          "products.quantity": "$items.quantity",
        },
      },
    ]);

    if (!order || order.length === 0) {
      return res.status(404).json({ message: "Order not found" });
    };

    res.status(200).json(order[0]);

  } catch (err) {
    res.status(500).json(
        { error: err.message })
        ;
    console.log(err.message);
  }

  if (!req.body) {
    return res.status(400).json(
        {error: "No body submitted"}
    );
  }
}
