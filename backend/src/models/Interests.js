const mongoose = require("mongoose");
const InterestsSchema = new mongoose.Schema({
  data: Array
});

module.exports = mongoose.model("Interests", InterestsSchema);
