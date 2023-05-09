const express = require("express")
const ControllerProduto = require("../Controllers/ControllerProduct")

const RoutesProduto = express.Router()

RoutesProduto.get("/products", controller.getAll)
RoutesProduto.get("/products/:id", controller.getById)
RoutesProduto.post("/products", controller.create)
RoutesProduto.put("/products/:id", controller.update)
RoutesProduto.delete("/products/:id", controller.delete)

module.exports = RoutesProduto