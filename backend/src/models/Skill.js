const mongoose = require("mongoose");
const SkillSchema = new mongoose.Schema({
  data: String
});

module.exports = mongoose.model("Skill", SkillSchema);
