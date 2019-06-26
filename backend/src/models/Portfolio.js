const mongoose = require("mongoose");
const PortfolioSchema = new mongoose.Schema({
  data: [{ title: String, description: String, date: Date }]
});

module.exports = mongoose.model("Portfolio", PortfolioSchema);
