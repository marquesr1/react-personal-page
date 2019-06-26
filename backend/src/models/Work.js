const mongoose = require("mongoose");
const WorkSchema = new mongoose.Schema({
  title: String,
  description: String,
  date: Date
});

module.exports = mongoose.model("Work", WorkSchema);
