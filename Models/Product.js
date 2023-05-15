const DataType = require("sequelize");
const MySQLConnection = require("../Database/MySQLConnection");

const Product = MySQLConnection.define("product", {
    id: {
        type: DataType.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    description: {
        type: DataType.STRING,
        allowNull: false,
    },
    price: {
        type: DataType.DECIMAL(10, 2),
        allowNull: false,
    },
});

(async () => {
    try {
        await Product.sync(); //{ force: true }
        console.log("Product table created..");
    } catch (error) {
        console.error("Error creating Product table: ", error);
    }
})();

module.exports = Product;
