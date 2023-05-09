const DataType = require("sequelize");
const MySQLConnection = require("../Database/MySQLConnection");
const Client = require("Client");

const Address = MySQLConnection.define("address", {
    id: {
        type: DataType.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    street: {
        type: DataType.STRING,
        allowNull: false,
    },
    neighborhood: {
        type: DataType.STRING,
        allowNull: true,
    },
    city: {
        type: DataType.INTEGER,
        allowNull: false,
        references: { model: "city", key: "id" },
        onDelete: "RESTRICT",
    },
});

const ClientAddress = MySQLConnection.define("clientaddress", {
    number:{
        type: DataType.STRING,
        defaultValue: "SN",
        allowNull: false,
    }
})

Client.belongsToMany(Address, { through: ClientAddress});
Address.belongsToMany(Client, { through: ClientAddress});

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

module.exports = Address;
