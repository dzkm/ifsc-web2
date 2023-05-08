const controller = {}

let listaProdutos = [
    {
        "id": 1,
        "descricao": "Camiseta",
        "preco": 29.99,
        "cores": ["preto", "branco", "cinza"]
    },
    {
        "id": 2,
        "descricao": "Calça Jeans",
        "preco": 79.99,
        "cores": ["azul claro", "azul escuro"]
    },
    {
        "id": 3,
        "descricao": "Tênis Esportivo",
        "preco": 149.99,
        "cores": ["preto", "branco", "cinza", "azul"]
    },
    {
        "id": 4,
        "descricao": "Jaqueta de Couro",
        "preco": 99.99,
        "cores": ["preto", "marrom"]
    }
]


controller.getAll = (req, res) => {
    res.status(200).json(listaProdutos)
}

controller.getById = (req, res) => {
    item = listaProdutos.find(i => i.id == req.params.id)

    if (item) {
        res.status(200).send(item)
    } else {
        res.status(404).send("Id não existe!")
    }
}

controller.create = (req, res) => {
    try {
        listaProdutos.push(req.body)
        res.status(200).redirect("/")
    } catch (error) {
        res.status(500).send("Ocorreu um erro ao cadastrar o item. " + error)
    }
}

controller.update = (req, res) => {
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

controller.delete = (req, res) => {
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

module.exports = controller