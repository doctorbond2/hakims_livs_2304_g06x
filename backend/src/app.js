import express from "express";
import cors from "cors";

const app = express();

app.use(express.json());

app.use(express.urlencoded({ extended: true }));
app.use(cors());
/* app.use(
    cors({
        origin: ["http://localhost:3000", "http://localhost:3001"],
    })
);
 */
app.get("/", (req, res) => {
  res.json({
    connection: `PORT: ${process.env.PORT} \nMONGODB_URI: ${process.env.MONGODB_URI}`,
  });
});

export default app;
