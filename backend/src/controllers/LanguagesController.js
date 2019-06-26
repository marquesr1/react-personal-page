const mongoose = require("mongoose");
const Languages = require("../models/Languages");

class LanguagesController {
  async index(req, res) {
    const languages = await Languages.find();
    return res.json(languages);
  }

  async show(req, res) {
    const languages = await Languages.findById(req.params.id);
    return res.json(languages);
  }

  async store(req, res) {
    const languages = await Languages.create(req.body);
    return res.json(languages);
  }

  async update(req, res) {
    const languages = await Languages.findByIdAndUpdate(
      req.params.id,
      req.body,
      {
        new: true
      }
    );
    return res.json(languages);
  }

  async destroy(req, res) {
    await Languages.findByIdAndRemove(req.params.id);
    return res.send();
  }
}

module.exports = new LanguagesController();
