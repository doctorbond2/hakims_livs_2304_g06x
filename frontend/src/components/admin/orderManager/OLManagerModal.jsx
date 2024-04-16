import React from "react";
import * as shad from "@/components/ui/shadBarrel";

function OLManagerModal({ order, updateOrder }) {
  return (
    <>
      <shad.Card className="w-100 shadCardPadding ">
        <shad.Dialog>
          <div className="flex justify-center pt-10">
            <shad.Table className="w-[45vw] shadow">
              <shad.TableRow>
                <shad.TableHead>Order ID</shad.TableHead>
                <shad.TableCaption>{order._id}</shad.TableCaption>
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
                <shad.TableCell className="font-medium">
                  {order.customer ? order.customer.email : "No email"}
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
                    : "No address"}
                </shad.TableCell>
              </shad.TableRow>
              <shad.TableBody>
                {order.items &&
                  order.items.map((item, index) => (
                    <shad.TableRow key={index}>
                      <shad.TableData>
                        {item.product ? item.product.name : "Unknown"}
                      </shad.TableData>
                      <shad.TableData>{item.quantity}</shad.TableData>
                      <shad.TableData>{item.price}</shad.TableData>
                    </shad.TableRow>
                  ))}
              </shad.TableBody>
              <shad.TableRow>
                <shad.TableHead>Totalt</shad.TableHead>
              </shad.TableRow>
              <shad.TableRow>
                <shad.TableHead>Betalningstatus</shad.TableHead>
                <shad.TableHead>Order status</shad.TableHead>
              </shad.TableRow>
            </shad.Table>
          </div>
        </shad.Dialog>
      </shad.Card>
    </>
  );
}

export default OLManagerModal;
