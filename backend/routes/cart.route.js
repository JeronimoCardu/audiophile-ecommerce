const express = require("express");
const router = express.Router();
const cartController = require("../controllers/cart.controller");

// Get cart items
router.get("/", cartController.getCart);
// Add item to cart
router.post("/add", cartController.addToCart);
// Update cart item quantity
router.put("/update", cartController.updateCartItem);
// Remove item from cart
router.delete("/remove", cartController.removeFromCart);
// Remove all items from cart
router.delete("/clear", cartController.clearCart);

module.exports = router;