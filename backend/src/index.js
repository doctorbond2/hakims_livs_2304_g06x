import app from "./app.js";
import { connectToMongoDB } from "./config/dbconfig.js";

app.get("/", (req, res) => {
  res.send("Hello World!");
});


const run = async () => {
  await connectToMongoDB();
  app.listen(3000, () => {
    console.log("Server is running on port 3000");
  });
};

run();