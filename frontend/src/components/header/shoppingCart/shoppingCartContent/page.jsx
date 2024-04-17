import React, { useState, useEffect } from "react";
import { columns } from "./columns";
import { DataTable } from "./data-table";

function getData() {
  const cartData = JSON.parse(localStorage.getItem("shoppingCart")) || [];

  const transformedData = cartData.map((item) => ({
    id: item._id,
    productName: item.title,
    amount: item.cartQuantity,
    totalPrice: (item.discountedPrice * item.cartQuantity).toFixed(2),
  }));

  return Promise.resolve(transformedData);
}

function TableContent() {
  const [data, setData] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    getData().then((fetchedData) => {
      setData(fetchedData);
      const total = fetchedData.reduce((acc, item) => acc + parseFloat(item.totalPrice), 0);
      setTotalPrice(total.toFixed(2));
    });
  }, []);

  return (
    <DataTable columns={columns} data={data} totalPrice={totalPrice} />
  );
}

export default TableContent;
