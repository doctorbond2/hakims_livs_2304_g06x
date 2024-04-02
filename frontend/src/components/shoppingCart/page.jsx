import React, { useState, useEffect } from "react";
import { columns } from "./columns";
import { DataTable } from "./data-table";

function getData() {
  // Simulate fetching data asynchronously
  return Promise.resolve([
    {
      id: "728ed52f",
      amount: 100,
      productName: "Potatoes",
      totalPrice: "19.99",
    },
    // Add more data as needed
  ]);
}

function DemoPage() {
  const [data, setData] = useState([]);

  useEffect(() => {
    getData().then((fetchedData) => {
      setData(fetchedData);
    });
  }, []); // Empty dependency array means this effect runs once on mount

  return (
    <div className="container mx-auto py-10">
      <DataTable columns={columns} data={data} />
    </div>
  );
}

export default DemoPage;
