const mongoose = require("mongoose");

const cartSchema = new mongoose.Schema(
  {
    user: {
      type: String,
      required: true,
      unique: true,
    },
    products: [
      {
        productId: {
          type: mongoose.Schema.Types.ObjectId,
          ref: "Product",
          required: true,
        },
        price: { type: Number, required: true },
        quantity: { type: Number, min: 1, required: true, default: 1 },
        dateAdded: { type: Date, default: Date.now },
      },
    ],
  },
  { timestamps: true },
);

const Cart = mongoose.model("Cart", cartSchema);

module.exports = Cart;
