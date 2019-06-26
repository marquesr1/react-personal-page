const mongoose = require("mongoose");
const Interests = require("../models/Interests");

class InterestsController {
  async index(req, res) {
    const interests = await Interests.find();
    return res.json(interests);
  }

  async show(req, res) {
    const interests = await Interests.findById(req.params.id);
    return res.json(interests);
  }

  async store(req, res) {
    const interests = await Interests.create(req.body);
    return res.json(interests);
  }

  async update(req, res) {
    const interests = await Interests.findByIdAndUpdate(
      req.params.id,
      req.body,
      {
        new: true
      }
    );
    return res.json(interests);
  }

  async destroy(req, res) {
    await Interests.findByIdAndRemove(req.params.id);
    return res.send();
  }
}

module.exports = new InterestsController();
