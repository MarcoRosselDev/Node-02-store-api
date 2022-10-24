require("dotenv").config();

const connectDB = require("./db/connect");
const connetDB = require("./db/connect");
const Product = require("./models/product");

const jsonProducts = require("./products.json");

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI);
    console.log("success conected to the database");
  } catch (error) {
    console.log(error);
  }
};

start();
