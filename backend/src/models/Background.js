const mongoose = require("mongoose");
const BackgroundSchema = new mongoose.Schema({
  data: Array
});

module.exports = mongoose.model("Background", BackgroundSchema);
