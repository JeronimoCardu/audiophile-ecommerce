const express = require("express");
const router = express.Router();
const orderController = require("../controllers/order.controller");

// Get user orders
router.get("/", orderController.getOrders);

// Create new order
router.post("/", orderController.createOrder);

module.exports = router;
