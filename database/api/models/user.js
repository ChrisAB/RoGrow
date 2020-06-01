const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  password: { type: String, required: true },
  email: { type: String, required: true },
  county: { type: String, required: true },
  region: { type: String, required: true },
  address: { type: String, required: true },
  role: { type: String, required: true },
  CUI: { type: String, required: false },
});

module.exports = mongoose.model("User", userSchema);
