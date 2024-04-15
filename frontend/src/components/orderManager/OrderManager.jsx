import React, { useState } from 'react';
import OrderList from './OrderList';
import DetailedOrderList from './DetailedOrderList';

function OrderManager() {
  const [selectedOrder, setSelectedOrder] = useState(null);
  const [orders, setOrders] = useState([]);
  

  const handleSelectOrder = (order) => {
    setSelectedOrder(order);
  };

  const handleRemoveOrder = async (orderId) => {
    try {
      await axios.delete(`/api/order/${orderId}`);
      
      setOrders(orders.filter((order) => order._id !== orderId));
      
      if (selectedOrder && selectedOrder._id === orderId) {
        setSelectedOrder(null);
      }
      console.log(`Order with ID ${orderId} has been successfully removed.`);
    } catch (error) {
      console.error(`Error removing order with ID ${orderId}:`, error);
    }
  };

  return (
    <div>
      <h2><strong>Order Manager</strong></h2>
      <OrderList onSelectOrder={handleSelectOrder} />
      {selectedOrder && (
        <DetailedOrderList
          orderId={selectedOrder._id}
          onClose={() => setSelectedOrder(null)}
          onRemoveOrder={() => handleRemoveOrder(selectedOrder._id)}
        />
      )}
    </div>
  );
}

export default OrderManager;
