const mongoose = require("mongoose");
const Name = require("../models/Name");

class NameController {
  async index(req, res) {
    const names = await Name.find();
    return res.json(names);
  }

  async show(req, res) {
    const name = await Name.findById(req.params.id);
    return res.json(name);
  }

  async store(req, res) {
    const name = await Name.create(req.body);
    return res.json(name);
  }

  async update(req, res) {
    const name = await Name.findByIdAndUpdate(req.params.id, req.body, {
      new: true
    });
    return res.json(name);
  }

  async destroy(req, res) {
    await Name.findByIdAndRemove(req.params.id);
    return res.send();
  }
}

module.exports = new NameController();
