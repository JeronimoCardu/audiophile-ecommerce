const Cart = require("../models/Cart.js");

exports.getCart = async (req, res) => {
  try {
    const cart = await Cart.findOne({ user: req.cookies.user }).populate(
      "products",
    );
    if (!cart) {
      return res.status(404).json({ message: "Cart not found" });
    }
    res
      .status(200)
      .json({ message: "Cart items retrieved successfully", data: cart });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.addToCart = async (req, res) => {
  try {
    const { product, quantity = 1, price } = req.body;
    let cart = await Cart.findOne({ user: req.cookies.user });
    if (!cart) {
      cart = new Cart({ user: req.cookies.user, products: [] });
    }
    const existingProductIndex = cart.products.findIndex(
      (item) => item.product.id === product.id,
    );
    if (existingProductIndex !== -1) {
      cart.products[existingProductIndex].quantity += quantity;
    } else {
      cart.products.push({ product, price, quantity });
    }
    await cart.save();
    res
      .status(200)
      .json({ message: "Item added to cart successfully", data: cart });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.updateCartItem = async (req, res) => {
  try {
    const { product, quantity = 1 } = req.body;
    const cart = await Cart.findOne({ user: req.cookies.user });
    if (!cart) {
      return res.status(404).json({ message: "Cart not found" });
    }
    const productIndex = cart.products.findIndex(
      (item) => item.product.id === product.id,
    );
    if (productIndex === -1) {
      return res.status(404).json({ message: "Product not found in cart" });
    }
    cart.products[productIndex].quantity = quantity;
    await cart.save();
    res.json({ message: "Cart item updated successfully", data: cart });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.removeFromCart = async (req, res) => {
  try {
    const { product } = req.body;
    const cart = await Cart.findOne({ user: req.cookies.user });
    if (!cart) {
      return res.status(404).json({ message: "Cart not found" });
    }
    const productIndex = cart.products.findIndex(
      (item) => item.product._id.toString() === product._id.toString(),
    );
    if (productIndex === -1) {
      return res.status(404).json({ message: "Product not found in cart" });
    }
    cart.products.splice(productIndex, 1);
    await cart.save();
    res.json({ message: "Item removed from cart successfully", data: cart });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.clearCart = async (req, res) => {
  try {
    const cart = await Cart.findOne({ user: req.cookies.user });
    if (!cart) {
      return res.status(404).json({ message: "Cart not found" });
    }
    cart.products = [];
    await cart.save();
    res.json({ message: "All items removed from cart successfully", data: cart });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};