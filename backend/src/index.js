import app from "./app.js";
import { connectToMongoDB } from "./config/dbconfig.js";
const PORT = process.env.PORT || 3000;
app.get("/", (req, res) => {
  res.send("Hello World!");
});

const run = async () => {
  await connectToMongoDB();
  app.listen(PORT, () => {
    console.log("Server is running on port 3000");
  });
};

run();
