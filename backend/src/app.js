import express from "express";
import userRouter from "./routes/user.route.js";
import productRouter from "./routes/product.route.js";
import categoryRouter from "./routes/category.route.js";
import orderRouter from "./routes/order.route.js";
import searchRoutes from "./routes/search.route.js";

import authRouter from "./routes/auth.route.js";
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
app.use("/api/auth", authRouter);
app.use("/api/order", orderRouter);
app.use('/api/search', searchRoutes);
export default app;
