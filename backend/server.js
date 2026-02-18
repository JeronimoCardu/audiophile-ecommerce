require("dotenv").config();
const express = require("express");
const app = express();
const PORT = process.env.PORT || 5000;

// CORS middleware
const cors = require("cors");
app.use(
  cors(
  //   {
  //   origin: "http://localhost:5173",
  //   methods: ["GET", "POST", "PUT", "DELETE"],
  //   credentials: true,
  //   allowedHeaders: ["Content-Type", "Authorization"],
  // }
),
);

// Cookies
const cookieParser = require("cookie-parser");
const cookieMiddleware = require('./middlewares/cookies.js');
app.use(cookieParser(process.env.COOKIE_SECRET));
app.use(cookieMiddleware);


// Body parser middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));

// DB connection
const connectDB = require("./config/db");
connectDB();

// Routes
const productsRoutes = require("./routes/product.routes.js");
const cartRoutes = require("./routes/cart.route.js");
const orderRoutes = require("./routes/order.routes.js");

app.use("/api/products", productsRoutes);
app.use("/api/cart", cartRoutes);
app.use("/api/orders", orderRoutes);



// Listen on port
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
