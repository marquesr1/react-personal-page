const mongoose = require("mongoose");
const MiniBioSchema = new mongoose.Schema({
  data: String
});

module.exports = mongoose.model("MiniBio", MiniBioSchema);
