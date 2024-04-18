import React, { useEffect, useState } from "react";
import * as shad from "@/components/ui/shadBarrel";
import {
  admin_GET_REQUEST,
  admin_PUT_REQUEST,
} from "@/utils/helpers/request.helper";

function maskCardNumber(cardNumber) {
  if (!cardNumber || typeof cardNumber !== "string") {
    return ""; 
  }

  const visibleDigits = 4; 
  const maskedPart =
    "*".repeat(cardNumber.length - visibleDigits) +
    cardNumber.slice(-visibleDigits);
  return maskedPart;
}

function OLManagerModal({ order, updateOrder }) {
  console.log(order);

  const handleStatus = async (statusType) => {
    try {
      let updatedStatus = { ...order.status };

      if (statusType === "paid") {
        updatedStatus.paid = !order.status.paid;
      } else if (statusType === "shipped") {
        updatedStatus.shipped = !order.status.shipped;
      }

      const updatedOrder = { ...order, status: updatedStatus };
      const response = await admin_PUT_REQUEST(
        `/api/order/update/${order._id}`,
        updatedOrder
      );
      if (response) {
        await updateOrder();
      }
      if (response && response.data) {
        console.log("Order updated:", response.data);
      }
    } catch (err) {
      console.log("Error updating order:", err);
    }
  };
  return (
    <>
      <shad.ScrollArea className="max-h-[600px] p-6">
        <shad.Table className="w-100">
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
              <shad.TableCell>
                Kort nr.{maskCardNumber(order.paymentDetails.cardNumber)}
              </shad.TableCell>
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
                {order.shippingAddress.postalCode},
                {order.shippingAddress.county}
              </shad.TableCell>
            </shad.TableRow>
            <shad.TableBody>
              <shad.TableHead>Produkt</shad.TableHead>
              <shad.TableHead>Antal</shad.TableHead>
              <shad.TableHead>Kr/st</shad.TableHead>
              {order.items &&
                order.items.map((item, index) => {
                  return (
                    <shad.TableRow key={index}>
                      <shad.TableCell>
                        {item.product.title
                          ? item.product.title
                          : "Produktnamn saknas"}
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
                <shad.Switch
                  defaultChecked={order.status.paid ? true : false}
                  onClick={() => handleStatus("paid")}
                ></shad.Switch>
              </shad.TableCell>
              <shad.TableCell>
                <shad.Switch
                  defaultChecked={order.status.shipped ? true : false}
                  onClick={() => handleStatus("shipped")}
                ></shad.Switch>
              </shad.TableCell>
            </shad.TableRow>
          </shad.Dialog>
        </shad.Table>
      </shad.ScrollArea>
    </>
  );
}

export default OLManagerModal;
