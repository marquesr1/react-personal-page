const mongoose = require("mongoose");
const BackgroundSchema = new mongoose.Schema({
  data: String
});

module.exports = mongoose.model("Background", BackgroundSchema);
