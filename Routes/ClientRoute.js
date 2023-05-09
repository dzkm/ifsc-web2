const express = require('express');
const ClientController = require('../controllers/ClientController');

const ClientRoute = express.Router();

ClientRoute.get("/client/", ClientController.getAll);
ClientRoute.get("/client/:id", ClientController.getById);
ClientRoute.post("/client/", ClientController.create);
ClientRoute.put("/client/:id", ClientController.update);
ClientRoute.delete("/client/:id", ClientController.delete);

module.exports = ClientRoute;