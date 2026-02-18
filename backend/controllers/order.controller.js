const Cart = require("../models/Cart.js");
const Order = require("../models/Order.js");
const bcrypt = require("bcrypt");

exports.getOrders = async (req, res) => {
  try {
    const user = req.cookies.user;
    if (!user) {
      return res.status(401).json({ message: "Unauthorized" });
    }
    const orders = await Order.find().populate("cart");
    res
      .status(200)
      .json({ message: "Orders retrieved successfully", data: orders });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.createOrder = async (req, res) => {
  try {
    const { cartId, personalInfo, shippingInfo, paymentInfo } = req.body;
    const user = req.cookies.user;
    const cart = await Cart.findById(cartId);
    if (!cart) {
      return res.status(404).json({ message: "Cart not found" });
    }
    if (!user) {
      return res.status(401).json({ message: "Unauthorized" });
    }
    const newOrder = new Order({
      cart: cartId,
      personalInfo: personalInfo,
      shippingInfo: shippingInfo,
      paymentInfo: {
        method: paymentInfo.method,
        eMoneyNumber: await bcrypt.hash(
          paymentInfo.eMoneyNumber,
          10,
        ),
        eMoneyPin: await bcrypt.hash(paymentInfo.eMoneyPin, 10),
      },
      totalPrice: cart.products.reduce(
        (total, item) => total + item.price * item.quantity,
        0,
      ),
    });
    const order = await newOrder.save();
    res
      .status(201)
      .json({ message: "Order created successfully", data: order });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
