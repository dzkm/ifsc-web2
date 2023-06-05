const Product = require("../Models/Product");
const ProductController = {};

ProductController.getAll = async (req, res) => {
    try {
        res.status(200).json(await Product.findAll());
    } catch (e) {
        res.status(500).json(e);
    }
};

ProductController.getById = async (req, res) => {
    try {
        res.status(200).json(await Product.findByPk(req.params.id));
    } catch (e) {
        res.status(422).json(e);
    }
};

ProductController.create = async (req, res) => {
    try {
        let { description, price } = req.body;
        const newProduct = await Product.create({ description, price });
        res.status(200).json(newProduct);
    } catch (e) {
        res.status(422).send("Failed to create product: " + error);
    }
};

ProductController.update = async (req, res) => {
    try {
        const newProduct = await Product.findByPk(req.params.id);
        const oldProduct = newProduct;
        newProduct.description = req.body.description;
        newProduct.price = req.body.price;
        await newProduct.save();
        res.status(200).json(`"Old": ${oldProduct}, "New":${newProduct}`);
    } catch (e) {
        res.status(422).json("Error updating product: " + e);
    }
};

ProductController.delete = async (req, res) => {
    try {
        const SingleProduct = Product.findByPk(req.params.id);
        SingleProduct.destroy();
        res.status(200).json(`"Deleted": ${SingleProduct}`);
    } catch (e) {
        res.status(422).json("Error deleting product: " + e);
    }
};

module.exports = ProductController;
