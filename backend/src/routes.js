const express = require("express");
const routes = express.Router();

const UsersController = require("./controllers/UsersController");

routes.get("/users", UsersController.index);
routes.get("/users/:id", UsersController.show);
routes.post("/users", UsersController.store);
routes.put("/users/:id", UsersController.update);
routes.delete("/users/:id", UsersController.destroy);

module.exports = routes;
