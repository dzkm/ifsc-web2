const { DataTypes } = require("sequelize");
const MySQLConnection = require("../Database/MySQLConnection");

const City = MySQLConnection.define("City", {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    city: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    state: {
        type: DataTypes.ENUM([
            "AC",
            "AL",
            "AP",
            "AM",
            "BA",
            "CE",
            "DF",
            "ES",
            "GO",
            "MA",
            "MT",
            "MS",
            "MG",
            "PA",
            "PB",
            "PR",
            "PE",
            "PI",
            "RJ",
            "RN",
            "RS",
            "RO",
            "RR",
            "SC",
            "SP",
            "SE",
            "TO",
        ]),
        allowNull: false,
    },
    ibge_code: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
});

(async () => {
    try {
        await City.sync();
        console.log("City table created.");
    } catch (error) {
        console.error("Failed to create City table: ", error);
    }
})();

module.exports = City;