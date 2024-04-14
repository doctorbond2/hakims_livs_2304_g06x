import React, { useState, useEffect } from "react";
import { columns } from "./columns";
import { CheckoutTable } from "./checkoutTable";

function getData() {
  const cartData = JSON.parse(localStorage.getItem("shoppingCart")) || [];

  const transformedData = cartData.map((item) => ({
    id: item._id,
    image: item.image.url,
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
    <div className="container mx-auto py-10 grid grid-cols-2">
      <CheckoutTable columns={columns} data={data} />

      <h1>hello</h1>
    </div>
  );
}

export default tableContent;
