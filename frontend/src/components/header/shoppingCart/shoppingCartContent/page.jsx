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

function tableContent() {
  const [data, setData] = useState([]);

  useEffect(() => {
    getData().then((fetchedData) => {
      setData(fetchedData);
    });
  }, []);

  return (
    <div className="container mx-auto py-10">
      <DataTable columns={columns} data={data} />
    </div>
  );
}

export default tableContent;
