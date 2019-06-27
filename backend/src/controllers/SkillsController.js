const mongoose = require("mongoose");
const Skills = require("../models/Skill");

class SkillsController {
  async index(req, res) {
    const skills = await Skills.find();
    return res.json(skills);
  }

  async show(req, res) {
    const skill = await Skills.findById(req.params.id);
    return res.json(skill);
  }

  async store(req, res) {
    const skill = await Skills.create(req.body);
    return res.json(skill);
  }

  async update(req, res) {
    const skill = await Skills.findByIdAndUpdate(req.params.id, req.body, {
      new: true
    });
    return res.json(skill);
  }

  async destroy(req, res) {
    await Skills.findByIdAndRemove(req.params.id);
    return res.send();
  }
}

module.exports = new SkillsController();
