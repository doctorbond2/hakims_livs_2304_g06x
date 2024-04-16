import axios from "axios";
import React, { useState, useEffect } from "react";
import { GET_REQUEST } from "@/utils/helpers/request.helper";

function OrderList({ onSelectOrder }) {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const fetchedOrders = await GET_REQUEST("/api/order");
        setOrders(fetchedOrders);
      } catch (error) {
        console.error("Error fetching orders:", error);
      }
    };

    fetchOrders();
  }, []);

  if (!Array.isArray(orders) || orders.length === 0) {
    return (
      <>
        <h3>
          <strong>Order list</strong>
        </h3>
        <p>Empty, like your soul</p>
      </>
    );
  }

  return (
    <>
      <h3>Order list</h3>
      {orders.map((order) => (
        <div
          key={order._id}
          className="order-item"
          onClick={() => {
            onSelectOrder(order._id);
            console.log(order._id);
          }}
        >
          <p>
            <strong>Order ID:</strong> {order._id}
          </p>
          <p>
            <strong>Customer Name:</strong>{" "}
            {`${order.customer?.firstName} ${order.customer?.lastName}`}
          </p>
          <p>
            <strong>Total:</strong> {order.total}
          </p>
          <p>
            <strong>Status:</strong> {order.status.paid ? "Paid" : "Not Paid"},{" "}
            {order.status.shipped ? "Shipped" : "Not Shipped"}
          </p>
        </div>
      ))}
    </>
  );
}

export default OrderList;
