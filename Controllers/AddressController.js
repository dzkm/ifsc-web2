const {Address, ClientAddress} = require("../Models/Address");
const { Op } = require("sequelize");
const Client = require("../Models/Client");
const City = require("../Models/City");
const AddressController = {};

AddressController.getAll = async (req, res) => {
    try {
        res.status(200).json(
            await Address.findAll({
                include: {
                    model: Client,
                    through: {
                        attributes: ["number"],
                    },
                },
            })
        );
    } catch (error) {
        res.status(422).json(error);
        console.error(error);
    }
};
AddressController.create = async (req, res) => {
    try {
        const newAddress = req.body;
        await Address.create(newAddress);
        res.status(200).json(newAddress);
    } catch (e) {
        res.status(422).json(e);
    }
};

AddressController.update = async (req, res) => {
    try {
        const { street, neighborhood, city, number } = req.body;
        const newAddress = await Address.findByPk(req.params.id);
        const oldAddress = newAddress;
        newAddress.street = street;
        newAddress.neighborhood = neighborhood;
        newAddress.city = city;
        newAddress.setClients(
            await Client.findOne({
                include: {
                    model: Address,
                    through: {
                        attributes: ["number"],
                    },
                },
            }),
            { through: { number } }
        );
        newAddress.save();
        res.status(200).json(`"Old": ${oldAddress}, "New": ${newAddress}`);
    } catch (e) {
        res.status(422).json(e);
        console.error(e);
    }
};

AddressController.delete = async (req, res) => {
    try {
        const removedAddress = await Address.findByPk(req.params.id);
        removedAddress.destroy();
        res.status(200).json(removedAddress);
    } catch (e) {
        res.status(422).json(e);
    }
};

module.exports = AddressController;
