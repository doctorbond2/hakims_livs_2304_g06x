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
        
      }
    );
    res.status(200).json(orders);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}

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
    ).populate(
      {path:"items.product", select:"title price quantity"});


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

  try {
    let order = await Order.create(req.body);
    res.status(201).json(order);
  } catch (err) {
    res.status(500).json({ error: err.message });
    console.log(err.message);
  }
}
