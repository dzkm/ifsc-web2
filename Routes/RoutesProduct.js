const express = require("express");
const ControllerProduto = require("../Controllers/ControllerProduct");

const RoutesProduto = express.Router();

RoutesProduto.get("/products", ControllerProduto.getAll);
RoutesProduto.get("/products/:id", ControllerProduto.getById);
RoutesProduto.post("/products", ControllerProduto.create);
RoutesProduto.put("/products/:id", ControllerProduto.update);
RoutesProduto.delete("/products/:id", ControllerProduto.delete);

module.exports = RoutesProduto;