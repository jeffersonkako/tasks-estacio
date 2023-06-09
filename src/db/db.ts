import mongoose from "mongoose";

import { URL_SELECIONADA } from "../../setDB";

var URL = URL_SELECIONADA;

const connectDB = async () => {
  try {
    await mongoose.connect(URL, {});
    console.log("MongoDB connected " + new Date().toLocaleString());
  } catch (error) {
    console.error(
      "MongoDB connection error: " + new Date().toLocaleString(),
      error
    );
    process.exit(1);
  }
};

export default connectDB;
