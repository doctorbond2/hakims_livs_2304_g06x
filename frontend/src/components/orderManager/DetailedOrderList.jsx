import React, {useState, useEffect} from 'react'
import axios from 'axios'

function DetailedOrderList({orderId, onClose}) {
    const [orderDetails, setOrderDetails] = useState(null);

    useEffect(() => {
        const fetchOrderDetails = async () => {
      if (orderId) {
        try {
          const response = await axios.get(`/api/order/${orderId}`);
          setOrderDetails(response.data);
        } catch (error) {
          console.error(`Error fetching order details for ID ${orderId}:`, error);
        }
      }
    };

    fetchOrderDetails();
    }, [orderId]);

  return (
     <>
    {orderDetails && (
      <div>
        <p><strong>{`Customer Name:`}</strong> {`${orderDetails.customer.firstName} ${orderDetails.customer.lastName}`}</p>
        <p><strong>{`Customer Email:`}</strong> {`${orderDetails.customer.email}`}</p>
        <p><strong>{`Total:`}</strong> {`${orderDetails.total}`}</p>
        <p><strong>{`Status:`}</strong> {`${orderDetails.status}`}</p>
        <p><strong>{`Shipping Address:`}</strong> {`${orderDetails.shippingAddress}`}</p>
        {orderDetails.items && orderDetails.items.length > 0 && (
          <div>
            <h4><strong>Items:</strong></h4>
            <ul>
              {orderDetails.items.map((item) => (
                <li key={item.product._id}>
                  {`${item.quantity} x ${item.product.name} - ${item.product.price}`}
                </li>
              ))}
            </ul>
          </div>
        )}
        {orderDetails.items && orderDetails.items.length === 0 && (
          <p><strong>No items found for this order.</strong></p>)}
      </div>
    )}
    <button onClick={onClose}>Close</button>
  </>
  )
}

export default DetailedOrderList