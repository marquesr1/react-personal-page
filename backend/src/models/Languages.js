const mongoose = require("mongoose");
const LanguagesSchema = new mongoose.Schema({
  data: Array
});

module.exports = mongoose.model("Languages", LanguagesSchema);
