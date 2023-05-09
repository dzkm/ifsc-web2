const Client = require("../Models/Client");
const ClientController = {};


ClientController.getAll = async (req, res) => {
    try{
        res.status(200).json(await Client.findAll());
    }catch(error){
        res.status(500).json(error)
    }
}

ClientController.getById = async (req, res) => {
    try{
        res.status(200).json(await Client.findByPk(req.params.id)); 
    }catch(error){
        res.status(422).json("Failed to find client. " + error);
    }
}

ClientController.create = async (req, res) => {
    try{
        const newClient = await Client.create({
            nome: req.body.nome,
            email: req.body.email,
            cidade: req.body.cidade,
            estado: req.body.estado,
            cep: req.body.cep 
        })
        res.status(200).json(newClient);
    }catch(error){
        res.status(422).json("Erro ao cadastrar cliente. " + error);
    }
}

ClientController.update = async (req, res) => {
    try{
        let ClientToUpdate = await Client.findByPk(req.params.id);
        ClientToUpdate.nome = req.body.nome;
        ClientToUpdate.email = req.body.email;
        ClientToUpdate.cidade = req.body.cidade;
        ClientToUpdate.estado = req.body.estado;
        ClientToUpdate.cep = req.body.cep;
        await ClientToUpdate.save();
        res.status(200).json(ClientToUpdate);
    }catch(error){
        res.status(422).json("Erro ao atualizar cliente. " + error);
    }
}

ClientController.delete = async (req, res) => {
    try{
        await Client.destroy({where: {id: req.params.id}})
        res.status(200).json("Cliente deletado com sucesso");
    }catch(error){
        res.status(422).json("Erro ao deletar cliente. " + error);
    }
}

module.exports = ClientController;