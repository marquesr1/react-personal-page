const mongoose = require("mongoose");
const Activities = require("../models/Activity");

class ActivitiesController {
  async index(req, res) {
    const activities = await Activities.find();
    return res.json(activities);
  }

  async show(req, res) {
    const activity = await Activities.findById(req.params.id);
    return res.json(activity);
  }

  async store(req, res) {
    const activity = await Activities.create(req.body);
    return res.json(activity);
  }

  async update(req, res) {
    const activity = await Activities.findByIdAndUpdate(
      req.params.id,
      req.body,
      {
        new: true
      }
    );
    return res.json(activity);
  }

  async destroy(req, res) {
    await Activities.findByIdAndRemove(req.params.id);
    return res.send();
  }
}

module.exports = new ActivitiesController();
