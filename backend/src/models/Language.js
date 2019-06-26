const mongoose = require("mongoose");
const LanguageSchema = new mongoose.Schema({
  data: String
});

module.exports = mongoose.model("Language", LanguageSchema);
