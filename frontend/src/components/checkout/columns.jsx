export const columns = [
  {
    accessorKey: "image",
    header: "",
    cell: (info) => <img src={info.getValue()} alt="Product" className="w-24 h-24 object-contain" />,
  },
  {
    accessorKey: "productName",
    header: "Product Name",
  },
  {
    accessorKey: "amount",
    header: "Quantity",
  },
  {
    accessorKey: "totalPrice",
    header: "Total Price",
  },
];
