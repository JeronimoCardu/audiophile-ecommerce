require("dotenv").config();
const express = require("express");
const app = express();
const PORT = process.env.PORT || 5000;

// CORS middleware
const cors = require("cors");
app.use(cors());

// Body parser middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));

// DB connection
const connectDB = require("./config/db");
connectDB();

// Routes
const router = require("./routes/product.routes.js");
app.use("/api/products", router);

// Listen on port
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
