const mongoose = require("mongoose");
const InterestSchema = new mongoose.Schema({
  data: String
});

module.exports = mongoose.model("Interest", InterestSchema);
