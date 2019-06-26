const mongoose = require("mongoose");
const Works = require("../models/Work");

class WorksController {
  async index(req, res) {
    const works = await Works.find();
    return res.json(works);
  }

  async show(req, res) {
    const work = await Works.findById(req.params.id);
    return res.json(work);
  }

  async store(req, res) {
    const work = await Works.create(req.body);
    return res.json(work);
  }

  async update(req, res) {
    const work = await Works.findByIdAndUpdate(req.params.id, req.body, {
      new: true
    });
    return res.json(work);
  }

  async destroy(req, res) {
    await Works.findByIdAndRemove(req.params.id);
    return res.send();
  }
}

module.exports = new WorksController();
