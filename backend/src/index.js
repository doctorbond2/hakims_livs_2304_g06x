import app from "./app.js";
import { RUN_SERVER } from "./config/dbconfig.js";
const PORT = process.env.PORT || 3000;
const MONGODB_URI =
  process.env.MONGODB_URI || "mongodb://localhost:27017/hakims_livs";
app.get("/", (req, res) => {
  res.json({ connection: `PORT: ${PORT} \nMONGODB_URI: ${MONGODB_URI}` });
});
console.log("PORT:", PORT);
console.log("MONGODB_URI:", MONGODB_URI);
RUN_SERVER(MONGODB_URI, PORT);
