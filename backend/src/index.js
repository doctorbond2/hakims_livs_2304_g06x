import app from "./app.js";
import { RUN_SERVER } from "./config/dbConfig.js";
const PORT = process.env.PORT || 3000;
const MONGODB_URI =
  process.env.MONGODB_URI || "mongodb://localhost:27017/hakims_livs";
RUN_SERVER(MONGODB_URI, PORT);
