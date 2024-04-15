import React, { useState, useEffect } from "react";
import { GET_REQUEST } from "@/utils/helpers/request.helper";

function DetailedOrderList({ orderId }) {
  const [orderDetails, setOrderDetails] = useState(null);

  useEffect(() => {
    const fetchOrderDetails = async () => {
      if (orderId) {
        try {
          const fetchedOrderDetails = await GET_REQUEST(
            `/api/order/${orderId}`
          );
          setOrderDetails(fetchedOrderDetails);
          console.log(fetchedOrderDetails);
          console.log(orderId);
          console.log("Fetched Order Details:", fetchedOrderDetails);
        } catch (error) {
          console.error(
            `Error fetching order details for ID ${orderId}:`,
            error
          );
        }
      }
    };

    fetchOrderDetails();
  }, [orderId]);

  return (
    <>
      {orderDetails && (
        <div>
          <p>
            <strong>{`Customer Name:`}</strong>{" "}
            {`${orderDetails.customer?.firstName} ${orderDetails.customer.lastName}`}
          </p>
          <p>
            <strong>{`Customer Email:`}</strong>{" "}
            {`${orderDetails.customer?.email}`}
          </p>
          <p>
            <strong>{`Total:`}</strong> {`${orderDetails.total}`}
          </p>
          <p>
            <strong>Status:</strong>{" "}
            {orderDetails.status.paid ? "Paid" : "Not Paid"},{" "}
            {orderDetails.status.shipped ? "Shipped" : "Not Shipped"}
          </p>
          <p>
            <strong>{`Shipping Address:`}</strong>{" "}
            {`${orderDetails.shippingAddress}`}
          </p>
          {orderDetails.items && orderDetails.items.length > 0 ? (
            <div>
              <h4>
                <strong>Items:</strong>
              </h4>
              <ul>
                {orderDetails.items.map((item) => (
                  <li key={item.product?._id}>
                    {`${item.quantity} x ${item.product?.name} - ${item.product?.price}`}
                  </li>
                ))}
              </ul>
            </div>
          ) : (
            <p>
              <strong>No items found for this order.</strong>
            </p>
          )}
        </div>
      )}
      <button>Close</button>
    </>
  );
}

export default DetailedOrderList;
