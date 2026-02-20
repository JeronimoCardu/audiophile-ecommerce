const Cart = require("../models/Cart.js");
const Product = require("../models/Product.js");

exports.getCart = async (req, res) => {
  try {
    const cart = await Cart.findOne({ user: req.cookies.user });
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
    const { productId, quantity = 1, image, name, price } = req.body;

    const product = await Product.findById(productId);

    if (!product) return res.status(404).json({ message: "Product not found" });

    let cart = await Cart.findOne({ user: req.cookies.user });

    if (!cart) cart = new Cart({ user: req.cookies.user, products: [] });

    const index = cart.products.findIndex(
      (item) => item.productId.toString() === productId,
    );

    if (index !== -1) {
      cart.products[index].quantity += quantity;
    } else {
      cart.products.push({
        productId: product._id,
        quantity,
        image,
        name,
        price,
      });
    }

    await cart.save();

    res.json({ message: "Product added to cart successfully", data: cart });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.updateCartItem = async (req, res) => {
  try {
    const { productId, quantity = 1 } = req.body;

    const cart = await Cart.findOne({ user: req.cookies.user });
    if (!cart) {
      return res.status(404).json({ message: "Cart not found" });
    }
    const productIndex = cart.products.findIndex(
      (item) => item.productId.toString() === productId,
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
    const { productId } = req.body;
    const cart = await Cart.findOne({ user: req.cookies.user });
    if (!cart) {
      return res.status(404).json({ message: "Cart not found" });
    }
    const productIndex = cart.products.findIndex(
      (item) => item.productId.toString() === productId,
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
    res.json({
      message: "All items removed from cart successfully",
      data: cart,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
