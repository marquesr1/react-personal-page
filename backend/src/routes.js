const express = require("express");
const routes = express.Router();

const UsersController = require("./controllers/UsersController");

routes.get("/users", UsersController.index);

module.exports = routes;
