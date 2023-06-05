const { DataTypes } = require("sequelize");
const MySQLConnection = require("../Database/MySQLConnection");

const Client = MySQLConnection.define("Client", {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    nome: {
        type: DataTypes.STRING,
        allowNull: false
    },
    email: {
        type: DataTypes.STRING,
        allowNull: true
    },
    cpf: {
        type: DataTypes.STRING,
        allowNull: false
    },
    tipo_pessoa: {
        type: DataTypes.CHAR(2),
        allowNull: false
    }
});

(async () => {
    try {
        await Client.sync();
        console.log("Client table created.");
    } catch (error) {
        console.error("Failed to create Client table: ", error);
    }
})();

module.exports = Client;