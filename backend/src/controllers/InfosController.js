const mongoose = require("mongoose");
const Infos = require("../models/Infos");

class InfosController {
  async index(req, res) {
    const infos = await Infos.find();
    return res.json(infos);
  }

  async show(req, res) {
    const infos = await Infos.findById(req.params.id);
    return res.json(infos);
  }

  async store(req, res) {
    const infos = await Infos.create(req.body);
    return res.json(infos);
  }

  async update(req, res) {
    const infos = await Infos.findByIdAndUpdate(req.params.id, req.body, {
      new: true
    });
    return res.json(infos);
  }

  async destroy(req, res) {
    await Infos.findByIdAndRemove(req.params.id);
    return res.send();
  }
}

module.exports = new InfosController();
