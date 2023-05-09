const Address = require("../Models/Address");
const { Op } = require("sequelize");
const AddressController = {};

AddressController.getAll = async (req, res) => {
    try {
        res.status(200).json(await Address.findAll());
    } catch (e) {
        res.status(200).json(e);
    }
};

AddressController.search = async (req, res) => {
    try {
        const { street, neighborhood, city, number } = req.search;
        const SingleAddress = await Address.findAll({
            where: {
                street: { [Op.iLike]: street },
                neighborhood: { [Op.iLike]: neighborhood },
                city: { [Op.iLike]: city },
                number: { [Op.iLike]: number },
            },
            include: { model: ClientAddress, attributes: "number" },
        });
        res.status(200).json(SingleAddress);
    } catch (e) {
        res.status(422).json(e);
    }
};

AddressController.update = async(req, res) => {
    try{
        const {street, neighborhood, city, number} = req.body;
        const newAddress = await Address.findByPk(req.params.id);
        const oldAddress = newAddress;
        newAddress.street = street;
        newAddress.neighborhood = neighborhood;
        newAddress.city = city;
        newAddress.save();
        res.status(200).json(`"Old": ${oldAddress}, "New": ${newAddress}`);
    }catch(e){
        res.status(422).json(e);
    }
}
