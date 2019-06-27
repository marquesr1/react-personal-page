const mongoose = require("mongoose");
const WorkSchema = new mongoose.Schema({
  title: String,
  description: String,
  link: String,
  date: Date
});

module.exports = mongoose.model("Work", WorkSchema);
