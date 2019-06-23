const mongoose = require("mongoose");
const UserSchema = new mongoose.Schema({
  about: {
    name: String,
    occupation: String,
    birthPlace: String,
    city: String,
    github: String,
    linkedin: String
  },
  details: {
    name: String,
    bio: String,
    profession: String,
    backgroud: Array,
    languages: Array,
    interests: Array,
    works: Array
  },
  skills: Array,
  works: Array,
  blog: Array,
  contact: {
    facebook: String,
    linkedin: String
  },
  footer: {
    name: String,
    email: String
  }
});

mongoose.model("user", UserSchema);
