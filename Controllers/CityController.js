const City = require("../Models/City");
const { Op } = require("sequelize");
const CityController = {};

CityController.getAll = async (req, res) => {
    try {
        res.status(200).json(await City.findAll());
    } catch (e) {
        res.status(422).json(e);
    }
};
CityController.getById = async (req, res) => {
    try {
        res.status(200).json(await City.findByPk(req.params.id));
    } catch (e) {
        res.status(422).json(e);
    }
};
CityController.getByName = async (req, res) => {
    try {
        res.status(200).json(
            await City.findAll({
                where: { name: { [Op.iLike]: req.params.cidade } },
            })
        );
    } catch (e) {
        res.status(422).json(e);
    }
};
CityController.update = async (req, res) => {
    try {
        const newCity = await City.findByPk(req.params.id);
        const oldCity = newCity;
        newCity.city = req.body.params;
        newCity.state = req.body.state;
        newCity.ibge_code = req.body.ibge_code;
        await newCity.save();
        res.status(200).json(`"Old": ${oldCity}, "New": ${newCity}`);
    } catch (e) {
        res.status(422).json(e);
    }
};
CityController.create = async (req, res) => {
    try {
        const newCity = req.body;
        await City.create(newCity);
        res.status(200).json(newCity);
    } catch (e) {
        res.status(422).json(e);
    }
};
CityController.delete = async (req, res) => {
    try {
        const destroyedCity = await City.findByPk(req.params.id);
        await destroyedCity.destroy();
        res.status(200).json(`Deleted: ${destroyedCity}`);
    } catch (e) {
        res.status(422).json(e);
    }
};

module.exports = City;