const { DataTypes } = require("sequelize");
const MySQLConnection = require("../Database/MySQLConnection");
const Client = require("./Client");
const City = require("./City");

const Address = MySQLConnection.define("Address", {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    street: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    neighborhood: {
        type: DataTypes.STRING,
        allowNull: true,
    }
});

const ClientAddress = MySQLConnection.define("ClientAddress", {
    number:{
        type: DataTypes.STRING,
        defaultValue: "SN",
        allowNull: false,
    }
})

Client.belongsToMany(Address, { through: ClientAddress});
Address.belongsToMany(Client, { through: ClientAddress});
Address.belongsTo(City);
City.hasMany(Address);

(async () => {
    try {
        await Address.sync();
        console.log("Address table created.");
        await ClientAddress.sync();
        console.log("Client Address table created.");
    } catch (error) {
        console.error("Failed to create address table: ", error);
    }
})();

module.exports = {Address, ClientAddress};
