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

export default app;
