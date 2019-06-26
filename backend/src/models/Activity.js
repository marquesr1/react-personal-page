const mongoose = require("mongoose");
const ActivitySchema = new mongoose.Schema({
  data: String
});

module.exports = mongoose.model("Activity", ActivitySchema);
