const mongoose = require("mongoose");

const TransSchema = mongoose.Schema({
  id: mongoose.Schema.Types.ObjectId,
  zone: String,
  latitude: Number,
  longitude: Number,
  n_packages: Number,
  is_success: String,
  client_id: String,
});

module.exports = mongoose.model("TransDetails", TransSchema);
