import React, {useState, useEffect} from 'react'
import axios from 'axios'

function DetailedOrderList({orderId, onClose}) {
    const [orderDetails, setOrderDetails] = useState(null);

    useEffect(() => {
        const fetchOrderDetails = async () => {
      if (orderId) {
        try {
          const response = await axios.get(`/api/orders/${orderId}`);
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
          <p>{`Customer Name: ${orderDetails.customer.firstName} ${orderDetails.customer.lastName}`}</p>
          <p>{`Customer Email: ${orderDetails.customer.email}`}</p>
          <p>{`Total: ${orderDetails.total}`}</p>
          <p>{`Status: ${orderDetails.status}`}</p>
          <p>{`Shipping Address: ${orderDetails.shippingAddress}`}</p>
          {orderDetails.items && orderDetails.items.length > 0 && (
            <div>
              <h4>Items:</h4>
              <ul>
                {orderDetails.items.map((item) => (
                  <li key={item.product._id}>
                    {`${item.quantity} x ${item.product.name} - ${item.product.price}`}
                  </li>
                ))}
              </ul>
            </div>
          )}
          
        </div>
      )}
      <button onClick={onClose}>Close</button>
    </>
  )
}

export default DetailedOrderList