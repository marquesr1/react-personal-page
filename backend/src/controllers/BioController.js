const mongoose = require("mongoose");
const Bio = require("../models/Bio");

class BioController {
  async index(req, res) {
    const bios = await Bio.find();
    return res.json(bios);
  }

  async show(req, res) {
    const bio = await Bio.findById(req.params.id);
    return res.json(bio);
  }

  async store(req, res) {
    const bio = await Bio.create(req.body);
    return res.json(bio);
  }

  async update(req, res) {
    const bio = await Bio.findByIdAndUpdate(req.params.id, req.body, {
      new: true
    });
    return res.json(bio);
  }

  async destroy(req, res) {
    await Bio.findByIdAndRemove(req.params.id);
    return res.send();
  }
}

module.exports = new BioController();
