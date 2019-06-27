const express = require("express");
const routes = express.Router();

//Name
const NameController = require("./controllers/NameController");

routes.get("/names", NameController.index);
routes.get("/names/:id", NameController.show);
routes.post("/names", NameController.store);
routes.put("/names/:id", NameController.update);
routes.delete("/names/:id", NameController.destroy);

//Mini biography
const MiniBioController = require("./controllers/MiniBioController");

routes.get("/minibio", MiniBioController.index);
routes.get("/minibio/:id", MiniBioController.show);
routes.post("/minibio", MiniBioController.store);
routes.put("/minibio/:id", MiniBioController.update);
routes.delete("/minibio/:id", MiniBioController.destroy);

//Interests
const InterestsController = require("./controllers/InterestsController");

routes.get("/interests", InterestsController.index);
routes.get("/interests/:id", InterestsController.show);
routes.post("/interests", InterestsController.store);
routes.put("/interests/:id", InterestsController.update);
routes.delete("/interests/:id", InterestsController.destroy);

//Languages
const LanguagesController = require("./controllers/LanguagesController");

routes.get("/languages", LanguagesController.index);
routes.get("/languages/:id", LanguagesController.show);
routes.post("/languages", LanguagesController.store);
routes.put("/languages/:id", LanguagesController.update);
routes.delete("/languages/:id", LanguagesController.destroy);

//Background
const BackgroundController = require("./controllers/BackgroundController");

routes.get("/background", BackgroundController.index);
routes.get("/background/:id", BackgroundController.show);
routes.post("/background", BackgroundController.store);
routes.put("/background/:id", BackgroundController.update);
routes.delete("/background/:id", BackgroundController.destroy);

//Activities
const ActivitiesController = require("./controllers/ActivitiesController");

routes.get("/activities", ActivitiesController.index);
routes.get("/activities/:id", ActivitiesController.show);
routes.post("/activities", ActivitiesController.store);
routes.put("/activities/:id", ActivitiesController.update);
routes.delete("/activities/:id", ActivitiesController.destroy);

//Skills
const SkillsController = require("./controllers/SkillsController");

routes.get("/skills", SkillsController.index);
routes.get("/skills/:id", SkillsController.show);
routes.post("/skills", SkillsController.store);
routes.put("/skills/:id", SkillsController.update);
routes.delete("/skills/:id", SkillsController.destroy);

//Portfolio
const WorksController = require("./controllers/WorksController");

routes.get("/portfolio", WorksController.index);
routes.get("/portfolio/:id", WorksController.show);
routes.post("/portfolio", WorksController.store);
routes.put("/portfolio/:id", WorksController.update);
routes.delete("/portfolio/:id", WorksController.destroy);

//Infos
const InfosController = require("./controllers/InfosController");

routes.get("/infos", InfosController.index);
routes.get("/infos/:id", InfosController.show);
routes.post("/infos", InfosController.store);
routes.put("/infos/:id", InfosController.update);
routes.delete("/infos/:id", InfosController.destroy);

//Biography
const BioController = require("./controllers/BioController");

routes.get("/bio", BioController.index);
routes.get("/bio/:id", BioController.show);
routes.post("/bio", BioController.store);
routes.put("/bio/:id", BioController.update);
routes.delete("/bio/:id", BioController.destroy);

//Links
const LinksController = require("./controllers/LinksController");

routes.get("/links", LinksController.index);
routes.get("/links/:id", LinksController.show);
routes.post("/links", LinksController.store);
routes.put("/links/:id", LinksController.update);
routes.delete("/links/:id", LinksController.destroy);

module.exports = routes;
