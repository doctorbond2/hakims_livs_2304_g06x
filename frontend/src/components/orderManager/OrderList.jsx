import axios from 'axios';
import React, { useState, useEffect } from 'react';

function OrderList({ onSelectOrder }) {
  const [orders, setOrders] = useState([]); 

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const response = await axios.get('/api/order');
        setOrders(response.data);
      } catch (err) {
        console.error(err);
      }
    };

    fetchOrders();
  }, []);


  if (!Array.isArray(orders) || orders.length === 0) {
    return (
      <>
        <h3><strong>Order list</strong></h3>
        <p>Empty, like your soul</p>
      </>
    );
  }

  return (
    <>
      <h3>Order list</h3>
      {orders.map((order) => (
        <div key={order._id} className="order-item" onClick={() => onSelectOrder(order._id)}>
          <p><strong>Order ID:</strong> {order._id}</p>
          <p><strong>Customer Name:</strong> {`${order.customer.firstName} ${order.customer.lastName}`}</p>
          <p><strong>Total:</strong> {order.total}</p>
          <p><strong>Status:</strong> {order.status}</p>
        </div>
      ))}
    </>
  );
}

export default OrderList;
