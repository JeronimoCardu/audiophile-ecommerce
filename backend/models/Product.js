const mongoose = require("mongoose");

const imageSchema = new mongoose.Schema(
  {
    mobile: { type: String, required: true },
    tablet: { type: String, required: true },
    desktop: { type: String, required: true },
  },
  { _id: false },
);

const includeSchema = new mongoose.Schema(
  {
    quantity: { type: Number, required: true },
    item: { type: String, required: true },
  },
  { _id: false },
);

const otherSchema = new mongoose.Schema(
  {
    slug: { type: String, required: true },
    name: { type: String, required: true },
    image: { type: imageSchema, required: true },
  },
  { _id: false },
);

const gallerySchema = new mongoose.Schema(
  {
    first: { type: imageSchema, required: true },
    second: { type: imageSchema, required: true },
    third: { type: imageSchema, required: true },
  },
  { _id: false },
);

const productSchema = new mongoose.Schema(
  {
    slug: { type: String, required: true, unique: true },
    name: { type: String, required: true },

    image: { type: imageSchema, required: true },

    category: { type: String, required: true },
    categoryImage: { type: imageSchema, required: true },

    new: { type: Boolean, default: false },
    price: { type: Number, required: true },

    description: { type: String, required: true },
    features: { type: String, required: true },

    includes: { type: [includeSchema], required: true },

    gallery: { type: gallerySchema, required: true },

    others: { type: [otherSchema], default: [] },
  },
  { timestamps: true },
);

const Product = mongoose.model("Product", productSchema);

module.exports = Product;
