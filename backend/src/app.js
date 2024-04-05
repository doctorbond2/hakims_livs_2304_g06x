import express from "express";
import userRouter from "./routes/user.route.js";
import productRouter from "./routes/product.route.js";
import categoryRouter from "./routes/category.route.js";
import cors from "cors";
const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.get("/", (req, res) => {
  res.send(`hi there. server is working fine! `);
});
app.use("/api/user", userRouter);
app.use("/api/products", productRouter);
app.use("/api/category", categoryRouter);
export default app;
