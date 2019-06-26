const mongoose = require("mongoose");
const Links = require("../models/Links");

class LinksController {
  async index(req, res) {
    const links = await Links.find();
    return res.json(links);
  }

  async show(req, res) {
    const links = await Links.findById(req.params.id);
    return res.json(links);
  }

  async store(req, res) {
    const links = await Links.create(req.body);
    return res.json(links);
  }

  async update(req, res) {
    const links = await Links.findByIdAndUpdate(req.params.id, req.body, {
      new: true
    });
    return res.json(links);
  }

  async destroy(req, res) {
    await Links.findByIdAndRemove(req.params.id);
    return res.send();
  }
}

module.exports = new LinksController();
