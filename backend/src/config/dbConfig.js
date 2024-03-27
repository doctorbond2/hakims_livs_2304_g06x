import mongoose from "mongoose";
import app from "../app.js";
export const RUN_SERVER = async (db_path, port) => {
  // if (!db_path || !port) {
  //   throw new Error(
  //     "PROVIDE ADDITIONAL INPUT TO ESTABLISH CONNECTION WITH DATABASE AND SERVER."
  //   );
  // }
  // try {
  //   await mongoose.connect(db_path);
  //   app.listen(port, () => {
  //     console.log("Connected to host:", port);
  //   });
  //   console.log("Connected with mongoose!");
  // } catch (err) {
  //   console.log("ERROR CONNECTING WITH MONGOOSE", err.message);
  // }
  try {
    app.listen(port, () => {
      console.log("Connected to host:", port);
    });
  } catch (err) {
    console.log("ERROR CONNECTING WITH asd", err.message);
  }
};
