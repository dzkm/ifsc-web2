const DataType = require("sequelize");
const MySQLConnection = require("../Database/MySQLConnection");

const Product = db.define("product", {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  description: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  price: {
    type: DataTypes.DECIMAL(10, 2),
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