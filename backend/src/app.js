import express from "express";
import userRouter from "./routes/user.route.js";
const app = express();

app.use(express.json());

app.use(express.urlencoded({ extended: true }));
app.get("/", (req, res) => {
  res.send(`hi there. server is working fine! `);
});
app.use("/api/user", userRouter);
export default app;
