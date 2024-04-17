import React from "react";
import { useEffect, useState } from "react";
import OLManagerList from "./OLManagerList";
import {
  admin_GET_REQUEST,
  admin_DELETE_REQUEST,
} from "@/utils/helpers/request.helper";

function OrderManager({}) {
  const [orderList, setOrderList] = useState(null);
  
  useEffect(() => {
    const fetchData = async () => {
      try {
        const orders = await admin_GET_REQUEST("/api/order/");
        if (orders) {
          setOrderList(orders);
        }
       
      } catch (err) {
        console.error(err);
      }
    };
    fetchData();

  }, []);

  const updateOrder = async () => {
    try {
      const updatedOrder = await admin_GET_REQUEST("/api/order/");
      if (updatedOrder) {
        setOrderList([...updatedOrder]);
      }
    } catch (err) {
      console.error(err.message);
    }
  };

  const handleDeleteOrder = async (id, index) => {
    const yes = confirm("Are you sure you want to delete? JA, Knappen funkar!");
    if (!yes) {
      return;
    }
    try {
      if (await admin_DELETE_REQUEST("/api/order/delete/" + id)) {
        const newOrderList = [...orderList];
        newOrderList.splice(index, 1);
        setOrderList(newOrderList);
      }
    } catch (err) {
      console.error(err.message);
    }
  };
  return (
    <>
      {orderList && (
        <div className="flex w-full justify-center">
          <OLManagerList
            {...{
              orderList,
              handleDeleteOrder,
              updateOrder,
            }}
          />
        </div>
      )}
    </>
  );
}

export default OrderManager;
