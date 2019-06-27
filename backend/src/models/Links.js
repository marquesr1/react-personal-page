const mongoose = require("mongoose");
const LinksSchema = new mongoose.Schema({
  github: String,
  linkedin: String,
  facebook: String,
  email: String
});

module.exports = mongoose.model("Links", LinksSchema);
