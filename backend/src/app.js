import express from "express";
import userRouter from "./routes/user.route.js";
import productRouter from "./routes/product.route.js";
import cors from "cors";
const app = express();

app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.get("/", (req, res) => {
  res.send(`hi there. server is working fine! `);
});
app.use("/api/user", userRouter);
app.use("/api/products", productRouter);
export default app;
