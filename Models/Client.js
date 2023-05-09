const DataType = require("sequelize");
const MySQLConnection = require("../database/MySQLConnection");

const Client = MySQLConnection.define("Client", {
    id: {
        type: DataType.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    nome: {
        type: DataType.STRING,
        allowNull: false
    },
    email: {
        type: DataType.STRING,
        allowNull: true
    },
    cpf: {
        type: DataType.STRING,
        allowNull: false
    },
    tipo_pessoa: {
        type: DataType.CHAR(2),
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