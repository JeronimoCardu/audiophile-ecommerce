require("dotenv").config();
const express = require("express");
const app = express();
const PORT = process.env.PORT || 5000;

// CORS middleware
const cors = require("cors");
app.use(
  cors({
    origin: "http://localhost:5173",
    methods: ["GET", "POST", "PUT", "DELETE"],
    allowedHeaders: ["Content-Type", "Authorization"],
  }),
);

// Cookies
const cookieParser = require("cookie-parser");
app.use(cookieParser());

// Body parser middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));

// DB connection
const connectDB = require("./config/db");
connectDB();

// Routes
const productsRoutes = require("./routes/product.routes.js");
const cookiesRoutes = require("./routes/cookie.routes.js");

app.use("/api/products", productsRoutes);
app.use("/cookies", cookiesRoutes);

// Listen on port
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
