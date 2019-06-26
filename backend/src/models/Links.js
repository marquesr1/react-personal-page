const mongoose = require("mongoose");
const LinksSchema = new mongoose.Schema({
  data: { github: String, linkedin: String, email: String }
});

module.exports = mongoose.model("Links", LinksSchema);
