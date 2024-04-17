import React, {useEffect, useState} from "react";
import * as shad from "@/components/ui/shadBarrel";
import {
  admin_GET_REQUEST,
  admin_PUT_REQUEST
} from "@/utils/helpers/request.helper";

function OLManagerModal({ order, }) {
  const [productNames, setProductNames] = useState([]);
  const [paid, setPaid] = useState(order.status.paid);
  const [shipped, setShipped] = useState(order.status.shipped);

  useEffect(() => {
    const fetchData = async () => {
      console.log(order.items.product)
      try {
        const products = await admin_GET_REQUEST(`/api/products/${order.items.product}`);
        setProductNames(products);

      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [order.items]); 

  /* const handlePaidToggle = async () => {
    try {
      const updatedOrder = {
        ...order,
        status: { ...order.status, paid: !paid },
      };
      await PUT_REQUEST(`/api/orders/update/${order._id}`, updatedOrder);
      setPaid(!paid);
    } catch (error) {
      console.error("Error updating paid status:", error);
    }
  };

  const handleShippedToggle = async () => {
    try {
      const updatedOrder = {
        ...order,
        status: { ...order.status, shipped: !shipped },
      };
      await admin_PUT_REQUEST(`/api/orders/update/${order._id}`, updatedOrder);
      setShipped(!shipped);
    } catch (error) {
      console.error("Error updating shipped status:", error);
    }
  };
 */

  return (
    <>
      <shad.Table className="w-80 overflow-auto">
        {console.log(order)}
        <shad.Dialog>
          <shad.TableRow>
            <shad.TableHead>Order ID</shad.TableHead>
            <shad.TableCaption>{order._id}</shad.TableCaption>
          </shad.TableRow>
          <shad.TableRow>
            <shad.TableHead>Orderdatum</shad.TableHead>
            <shad.TableCaption>{order.createdAt}</shad.TableCaption>
          </shad.TableRow>
          <shad.TableRow>
            <shad.TableHead>Kundinformation</shad.TableHead>
          </shad.TableRow>
          <shad.TableRow>
            <shad.TableCell className="font-medium">
              {order.customer
                ? `${order.customer.firstName} ${order.customer.lastName}`
                : "Noname"}
            </shad.TableCell>
            <shad.TableCell>{order.customer.email}</shad.TableCell>
          </shad.TableRow>
          <shad.TableRow>
            <shad.TableHead>Leveransadress</shad.TableHead>
          </shad.TableRow>
          <shad.TableRow>
            <shad.TableCell>
              {order.shippingAddress.streetAddress}
            </shad.TableCell>
          </shad.TableRow>
          <shad.TableRow>
            <shad.TableCell>
              {order.shippingAddress.postalCode},{order.shippingAddress.county}
            </shad.TableCell>
          </shad.TableRow>
          <shad.TableBody>
            <shad.TableHead>Produkt</shad.TableHead>
            <shad.TableHead>Antal</shad.TableHead>
            <shad.TableHead>Kr/st</shad.TableHead>
            {order.items &&
              order.items.map((item, index) => {
                const product = productNames.find(
                  (product) => product._id === item.product._id
                );
                return (
                  <shad.TableRow key={index}>
                    <shad.TableCell>
                      {product ? product.title : "Ingen produkt hittad"}
                    </shad.TableCell>
                    <shad.TableCell>{item.quantity}</shad.TableCell>
                    <shad.TableCell>{item.price} kr</shad.TableCell>
                  </shad.TableRow>
                );
              })}
          </shad.TableBody>
          <shad.TableRow>
            <shad.TableHead>Totalt</shad.TableHead>
            <br />
            <shad.TableCell className="font-medium">
              {order.total} kr
            </shad.TableCell>
          </shad.TableRow>

          <shad.TableRow>
            <shad.TableHead>Betalningstatus</shad.TableHead>
            <shad.TableHead>Order status</shad.TableHead>
          </shad.TableRow>
          <shad.TableRow>
            <shad.TableCell className="font-medium">
              {order.status.paid ? "Betalad" : "Ej betalad"}
            </shad.TableCell>
            <shad.TableCell className="font-medium">
              {order.status.shipped ? "Skickad" : "Ej skickad"}
            </shad.TableCell>
          </shad.TableRow>
          <shad.TableRow>
            <shad.TableCell>
              <shad.Switch /* onClick={handlePaidToggle} */>
                
              </shad.Switch>
            </shad.TableCell>
            <shad.TableCell>
              <shad.Switch /* onClick={handleShippedToggle} */>
                
              </shad.Switch>
            </shad.TableCell>
          </shad.TableRow>
        </shad.Dialog>
      </shad.Table>
    </>
  );
}

export default OLManagerModal;
