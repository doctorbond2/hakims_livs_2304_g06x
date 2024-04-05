import { RUN_SERVER } from "./config/dbConfig.js";
console.log(12);
const PORT = process.env.PORT || 3000;
console.log(PORT);
const MONGODB_URI =
  process.env.MONGODB_URI || "mongodb://localhost:27017/hakims_livs";
console.log(MONGODB_URI);
RUN_SERVER(MONGODB_URI, PORT);

// const insertProductList = async () => {
//   const productData = [
//     {
//       name: "Product 1",
//       price: 100,
//       stock: 100,
//     },
//     {
//       name: "Product 2",
//       price: 200,
//       stock: 200,
//     },
//     {
//       name: "Product 3",
//       price: 300,
//       stock: 300,
//     },
//     {
//       name: "Product 4",
//       price: 400,
//       stock: 400,
//     },
//     {
//       name: "Product 5",
//       price: 500,
//       stock: 500,
//     },
//     {
//       name: "Product 6",
//       price: 600,
//       stock: 600,
//     },
//     {
//       name: "Product 7",
//       price: 700,
//       stock: 700,
//     },
//     {
//       name: "Product 8",
//       price: 800,
//       stock: 800,
//     },
//   ];

//   try {
//     await Product.insertMany(productData);
//     console.log("Products added successfully");
//   } catch (err) {
//     console.log(err.message);
//   }
// };
// insertProductList();
