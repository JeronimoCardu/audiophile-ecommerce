const mongoose = require("mongoose");
    
const cartSchema = new mongoose.Schema(
  {
    cart: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Cart",
      required: true,
    },
    personalInfo: {
      name: {
        type: String,
        required: true,
      },
      email: {
        type: String,
        required: true,
      },
      number: {
        type: String,
        required: true,
      },
    },
    shippingInfo: {
      address: {
        type: String,
        required: true,
      },
      zipCode: {
        type: String,
        required: true,
      },
      city: {
        type: String,
        required: true,
      },
      country: {
        type: String,
        required: true,
      },
    },
    paymentInfo: {
      method: {
        type: String,
        enum: ["e-money", "cash-on-delivery"],
        required: true,
      },
      eMoneyNumber: {
        type: String,
        required: function () {
          return this.paymentInfo.method === "e-money";
        },
      },
      eMoneyPin: {
        type: String,
        required: function () {
          return this.paymentInfo.method === "e-money";
        },
      },
    },
    totalPrice: {
      type: Number,
      required: true,
    },
  },
  { timestamps: true },
);

const Order = mongoose.model("Order", cartSchema);

module.exports = Order;
