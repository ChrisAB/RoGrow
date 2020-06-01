const mongoose = require("mongoose");

const productSchema = mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  name: { type: String, required: true },
  category: { type: String, required: true },
  subcategory: { type: String, required: true },
  description: { type: String, required: true },
  price: { type: Number, required: true },
  quantity: { type: Number, required: true },
  pickupLocation: { type: String, required: true },
  origin: { type: String, required: true },
  sellerID: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "/user",
    required: true,
  },
});

module.exports = mongoose.model("Product", productSchema);
