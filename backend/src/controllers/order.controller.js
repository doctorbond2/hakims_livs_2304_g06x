import Order from "../models/order.model.js";
import mongoose from "mongoose";
export async function getOrderList(req, res) {
  try {
    let orders = await Order.find(
      {},
      {
        _id: 1,
        customer: 1,
        shippingAddress: 1,
        total: 1,
        items: 1,
        status: 1,
        createdAt: 1,
        paymentDetails: 1,
      }
    ).populate("items.product");
    res.status(200).json(orders);
  } catch (err) {
    console.log(err.message);
    res.status(500).json({ error: err.message });
  }
}
export async function getOrderDetails() {}

export async function getOrderById(req, res) {
  console.log("Order by ID test");
  const orderID = req.params.id;
  if (!orderID) {
    return res.status(400).json({ message: "Order ID not found" });
  }

  console.log(orderID);
  try {
    const order = await Order.findOne(
      { _id: orderID },
      { total: 1, status: 1, paymentDetails: 1, items: 1, shippingAddress: 1 }
    ).populate("items.products");

    if (!order || order.length === 0) {
      return res.status(404).json({ message: "Order not found" });
    }

    res.status(200).json(order);
  } catch (err) {
    res.status(500).json({ error: err.message });
    console.log(err.message);
  }

  if (!req.body) {
    return res.status(400).json({ error: "No body submitted" });
  }
}

export async function createOrder(req, res) {
  console.log("test create order");
  if (!req.body) {
    return res.status(400).json({ error: "No body submitted" });
  }
  console.log(req.body);
  try {
    let order = new Order(req.body);
    await order.save();
    res.status(201).json(order);
  } catch (err) {
    res.status(500).json({ error: err.message });
    console.log(err.message);
  }
}

export async function updateOrderById(req, res) {
  console.log("test update order by id");
  if (!req.params.id) {
    return res.status(400).json({ error: "No id submitted" });
  }

  if (!req.body) {
    return res.status(400).json({ error: "No body submitted" });
  }

  const { id } = req.params;
  try {
    let order = await Order.findByIdAndUpdate({ _id: id }, req.body);
    if (order) {
      res.status(200).json({
        message: "Order updated successfully",
        updated_order: order,
      });
    }
  } catch (err) {
    res.status(500).json({ error: err.message });
    console.log(err.message);
  }
}

export async function deleteOrderById(req, res) {
  console.log("test delete order by id");
  if (!req.params.id) {
    return res.status(400).json({ error: "No id submitted" });
  }

  const { id } = req.params;
  try {
    let order = await Order.findByIdAndDelete({ _id: id });
    if (order) {
      res.status(200).json({
        message: "Order deleted successfully",
        deleted_order: order,
      });
    }
  } catch (err) {
    res.status(500).json({ error: err.message });
    console.log(err.message);
  }
}
