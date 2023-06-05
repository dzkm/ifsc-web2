const express = require("express");
const ProductController = require("../Controllers/ControllerProduct");

const ProductRoute = express.Router();

ProductRoute.get("/products", ProductController.getAll);
ProductRoute.get("/products/:id", ProductController.getById);
ProductRoute.post("/products", ProductController.create);
ProductRoute.put("/products/:id", ProductController.update);
ProductRoute.delete("/products/:id", ProductController.delete);

module.exports = ProductRoute;