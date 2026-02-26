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
    const { cartId, personalInfo, shippingInfo, paymentInfo, total } = req.body;

    const cart = await Cart.findById(cartId);

    if (!cart) {
      return res.status(404).json({ message: "Cart not found" });
    }

    let hashedNumber = "";
    let hashedPIN = "";

    if (paymentInfo.method === "e-money") {
      hashedNumber = await bcrypt.hash(paymentInfo.eMoneyNumber, 10);
      hashedPIN = await bcrypt.hash(paymentInfo.eMoneyPIN, 10);
    }

    const newOrder = new Order({
      cart: cartId,

      personalInfo,

      shippingInfo,

      paymentInfo: {
        method: paymentInfo.method,
        eMoneyNumber: hashedNumber,
        eMoneyPIN: hashedPIN,
      },

      totalPrice: total,
    });

    const order = await newOrder.save();

    res.status(201).json(order);
  } catch (error) {
    console.error("CREATE ORDER ERROR:");
    console.error(error);

    res.status(500).json({
      message: error.message,
      stack: error.stack,
    });
  }
};
