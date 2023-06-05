const express = require("express");
const AddressController = require("../Controllers/AddressController");

const AddressRoute = express.Router();

AddressRoute.get("/address/", AddressController.getAll);
AddressRoute.post("/address/", AddressController.create);
AddressRoute.put("/address/:id", AddressController.update);
AddressRoute.delete("/address/:id", AddressController.delete);

module.exports = AddressRoute;
