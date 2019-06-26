const mongoose = require("mongoose");
const Background = require("../models/Background");

class BackgroundController {
  async index(req, res) {
    const background = await Background.find();
    return res.json(background);
  }

  async show(req, res) {
    const background = await Background.findById(req.params.id);
    return res.json(background);
  }

  async store(req, res) {
    const background = await Background.create(req.body);
    return res.json(background);
  }

  async update(req, res) {
    const background = await Background.findByIdAndUpdate(
      req.params.id,
      req.body,
      {
        new: true
      }
    );
    return res.json(background);
  }

  async destroy(req, res) {
    await Background.findByIdAndRemove(req.params.id);
    return res.send();
  }
}

module.exports = new BackgroundController();
