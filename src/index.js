import dotenv from "dotenv";
// require("dotenv").config({ path: ".env" });
// import mongoose from "mongoose";
// import { DB_NAME } from "./constants.js";
import express from "express";
const app = express();

dotenv.config({
  path: "./env",
});

import connectDB from "./db/index.js";

connectDB()
  .then(() => {
    app.listen(process.env.PORT || 8000, () => {
      console.log(`Server is running on port : ${process.env.PORT}`);
    });
  })
  .catch((err) => {
    console.log("Connection Failed !!!!", err);
  });

/*

(async () => {
  try {
    await mongoose.connect(`${process.env.MONGODB_URL}/${DB_NAME}`);
    app.on("error", (error) => {
      console.log("ERR : ", error);
      throw error;
    });

    app.listen(process.env.PORT, () => {
      console.log(`App is running on port : ${process.env.PORT}`);
    });
  } catch (error) {
    console.log("Error : ", error);
  }
})();


*/
