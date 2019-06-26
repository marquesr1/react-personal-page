const mongoose = require("mongoose");
const Interests = require("../models/Interest");

class InterestsController {
  async index(req, res) {
    const interests = await Interests.find();
    return res.json(interests);
  }

  async show(req, res) {
    const interest = await Interests.findById(req.params.id);
    return res.json(interest);
  }

  async store(req, res) {
    const interest = await Interests.create(req.body);
    return res.json(interest);
  }

  async update(req, res) {
    const interest = await Interests.findByIdAndUpdate(
      req.params.id,
      req.body,
      {
        new: true
      }
    );
    return res.json(interest);
  }

  async destroy(req, res) {
    await Interests.findByIdAndRemove(req.params.id);
    return res.send();
  }
}

module.exports = new InterestsController();
