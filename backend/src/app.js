import express from "express";

const app = express();

app.use(express.json());

app.use(express.urlencoded({ extended: true }));
app.get("/", (req, res) => {
  res.send(
    `hi there. server is working\n PORT: ${process.env.PORT}. \n MONGODB_URI: ${process.env.MONGODB_URI}`
  );
});
export default app;
