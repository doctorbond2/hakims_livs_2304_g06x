import React, { useState } from "react";
import OrderList from "./OrderList";
import DetailedOrderList from "./DetailedOrderList";

function OrderManager() {
  const [selectedOrder, setSelectedOrder] = useState(null);
  const [orderList, setOrderList] = useState([]);

  const handleSelectOrder = async (orderId) => {
    setSelectedOrder(orderId);
    console.log(`Selected order with ID ${orderId}`);
    console.log(selectedOrder);
  };

  return (
    <>
      <div>
        <h2>
          <strong>Order Manager</strong>
        </h2>
        <OrderList onSelectOrder={handleSelectOrder} />
        {selectedOrder && <DetailedOrderList {...{ orderList }} />}
      </div>
    </>
  );
}

export default OrderManager;
