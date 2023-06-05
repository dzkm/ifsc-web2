const express = require("express");
const CityController = require("../Controllers/CityController");

const CityRoute = express.Router();

CityRoute.get("/city/", CityController.getAll);
CityRoute.get("/city/:id", CityController.getById);
CityRoute.post("/city/", CityController.create);
CityRoute.put("/city/:id", CityController.update);
CityRoute.delete("/city/:id", CityController.delete);

module.exports = CityRoute;
