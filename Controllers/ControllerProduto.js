const MySQLConnection = require("../Database/MySQLConnection");
const ControllerProduto = {}


ControllerProduto.getAll = (req, res) => {
    res.status(200).json(listaProdutos)
}

ControllerProduto.getById = (req, res) => {
    item = listaProdutos.find(i => i.id == req.params.id)

    if (item) {
        res.status(200).send(item)
    } else {
        res.status(404).send("Id não existe!")
    }
}

ControllerProduto.create = (req, res) => {
    try {
        listaProdutos.push(req.body)
        res.status(200).redirect("/")
    } catch (error) {
        res.status(500).send("Ocorreu um erro ao cadastrar o item. " + error)
    }
}

ControllerProduto.update = (req, res) => {
    try {agit
        item = listaProdutos.find(i => i.id == req.params.id)
        if (item) {
            item = req.body
            res.status(200).redirect("/")
        } else {
            res.status(404).send("Id não existe!")
        }
    } catch (error) {
        res.status(500).send("Ocorreu um erro ao atualizar o item. " + error)
    }
}

ControllerProduto.delete = (req, res) => {
    try {
        item = listaProdutos.find(i => i.id == req.params.id)
        if (item) {
            listaProdutos.splice(listaProdutos.indexOf(item), 1)
            res.status(200).redirect("/")
        } else {
            res.status(404).send("Id não existe!")
        }
    } catch (error) {
        res.status(500).send("Ocorreu um erro ao remover o item. " + error)
    }
}

module.exports = ControllerProduto