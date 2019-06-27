const mongoose = require("mongoose");
const NameSchema = new mongoose.Schema({
  data: String
});

module.exports = mongoose.model("Name", NameSchema);
