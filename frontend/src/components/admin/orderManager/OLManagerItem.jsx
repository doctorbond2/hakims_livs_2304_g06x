import React from "react";
import * as shad from "@/components/ui/shadBarrel";
import OLManangerModal from "./OLManagerModal";

function OLManagerItem({
  order,
  orderList,
  updateOrder,
  handleDeleteOrder,
  index,
}) {
  const order_id = order._id;
  const handleDelete = async () => {
    if (order_id) {
      await handleDeleteOrder(order_id, index);
    }
  };
  return (
    <>
      {order && (
        <shad.Dialog>
          <shad.TableRow>
            <shad.TableCell className="font-medium">{order._id}</shad.TableCell>
            <shad.TableCell className="font-medium">
              <span className="font-bold"></span>{" "}
              {order.customer
                ? `${order.customer?.firstName} ${order.customer.lastName}`
                : "Noname"}
            </shad.TableCell>
            <shad.TableCell className="font-medium">
              <span className="font-bold"></span> {order.total} kr
            </shad.TableCell>
            <shad.TableCell className="font-medium">
              <span className="font-bold"></span>{" "}
              {order.status?.paid ? "Betalad" : "Ej betalad"}
            </shad.TableCell>
            <shad.TableCell className="font-medium">
              <span className="font-bold"></span>
              {order.status?.shipped ? "Skickad" : "Behandlas"}
            </shad.TableCell>
            <shad.TableCell></shad.TableCell>
            <shad.TableCell className="text-right">
              <shad.DialogTrigger asChild>
                <shad.Button
                  variant="outline"
                  className="shadow-md shadow-gray-500/50 mr-2"
                >
                  Detaljer
                </shad.Button>
              </shad.DialogTrigger>
              <shad.Button
                variant="destructive"
                className="shadow-md shadow-gray-500/50"
                onClick={handleDelete}
              >
                Radera
              </shad.Button>
            </shad.TableCell>
          </shad.TableRow>
          <shad.DialogContent>
            {order ? (
              <OLManangerModal {...{ order, orderList, updateOrder }} />
            ) : (
              "Loading"
            )}
          </shad.DialogContent>
        </shad.Dialog>
      )}
    </>
  );
}

export default OLManagerItem;
