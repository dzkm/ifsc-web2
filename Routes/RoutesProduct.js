const express = require("express")
const ControllerProduto = require("../Controllers/ControllerProduto")

const RoutesProduto = express.Router()

RoutesProduto.get("/", controller.getAll)
RoutesProduto.get("/:id", controller.getById)
RoutesProduto.post("/", controller.create)
RoutesProduto.put("/:id", controller.update)
RoutesProduto.delete("/:id", controller.delete)

module.exports = RoutesProduto