const mongoose = require("mongoose");
const InfosSchema = new mongoose.Schema({
  data: String
});

module.exports = mongoose.model("Infos", InfosSchema);
