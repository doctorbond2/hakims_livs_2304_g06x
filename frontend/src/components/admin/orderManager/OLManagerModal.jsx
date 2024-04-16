import React from "react";
import * as shad from "@/components/ui/shadBarrel";

function OLManagerModal({ order, updateOrder }) {

    const handlePaidToggle = () => {
      const updatedPaid = !order.status.paid;
      updateOrder({ ...order, status: { ...order.status, paid: updatedPaid } });
    };

    // Function to handle toggle for shipped status
    const handleShippedToggle = () => {
      const updatedShipped = !order.status.shipped;
      updateOrder({
        ...order,
        status: { ...order.status, shipped: updatedShipped },
      });
    };


  return (
    <>
      <shad.Card className="w-100 shadCardPadding ">
        <shad.Dialog>
          <shad.Table className="w-[28vw] shadow">
            <shad.TableRow>
              <shad.TableHead>Order ID</shad.TableHead>
              <shad.TableCaption>{order._id}</shad.TableCaption>
            </shad.TableRow>
            <shad.TableRow>
              <shad.TableHead>Orderdatum</shad.TableHead>
              <shad.TableCaption>{order.createdAt}</shad.TableCaption>
            </shad.TableRow>
            .
            <shad.TableRow>
              <shad.TableHead>Kundinformation</shad.TableHead>
            </shad.TableRow>
            <shad.TableRow>
              <shad.TableCell className="font-medium">
                {order.customer
                  ? `${order.customer.firstName} ${order.customer.lastName}`
                  : "Noname"}
                {console.log(order.customer.firstName)}
              </shad.TableCell>
              <shad.TableCell>
                {order.customer.email}
                {console.log(order)}
              </shad.TableCell>
            </shad.TableRow>
            <shad.TableRow>
              <shad.TableHead>Leveransadress</shad.TableHead>
            </shad.TableRow>
            <shad.TableRow>
              <shad.TableCell>
                {" "}
                {order.shippingAddress
                  ? `${order.shippingAddress.streetAddress}, ${order.shippingAddress.city}`
                  : "Adress saknas"}
                  {console.log(order.streetAddress)}
              </shad.TableCell>
            </shad.TableRow>
            <shad.TableBody>
              {order.items &&
                order.items.map((item, index) => (
                  <shad.TableRow key={index}>
                    <shad.TableData>
                      {item.product ? item.product.name : "Produkter saknas"}
                    </shad.TableData>
                    <shad.TableData>{item.quantity}</shad.TableData>
                    <shad.TableData>{item.price}</shad.TableData>
                  </shad.TableRow>
                ))}
              {console.log(order.items)}
            </shad.TableBody>
            <shad.TableRow>
              <shad.TableHead>Totalt</shad.TableHead>
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
                <shad.Switch >
                    För betalning
                </shad.Switch>
              </shad.TableCell>
              <shad.TableCell>
                <shad.Switch>För skickad</shad.Switch>
              </shad.TableCell>
            </shad.TableRow>
          </shad.Table>
        </shad.Dialog>
      </shad.Card>
    </>
  );
}

export default OLManagerModal;
