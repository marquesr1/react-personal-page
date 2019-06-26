const mongoose = require("mongoose");
const MiniBio = require("../models/MiniBio");

class MiniBioController {
  async index(req, res) {
    const minibios = await MiniBio.find();
    return res.json(minibios);
  }

  async show(req, res) {
    const minibio = await MiniBio.findById(req.params.id);
    return res.json(minibio);
  }

  async store(req, res) {
    const minibio = await MiniBio.create(req.body);
    return res.json(minibio);
  }

  async update(req, res) {
    const minibio = await MiniBio.findByIdAndUpdate(req.params.id, req.body, {
      new: true
    });
    return res.json(minibio);
  }

  async destroy(req, res) {
    await MiniBio.findByIdAndRemove(req.params.id);
    return res.send();
  }
}

module.exports = new MiniBioController();
