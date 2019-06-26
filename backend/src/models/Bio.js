const mongoose = require("mongoose");
const BioSchema = new mongoose.Schema({
  data: String
});

module.exports = mongoose.model("Bio", BioSchema);
