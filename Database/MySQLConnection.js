const { Sequelize } = require("sequelize");
const { mysql } = require("../config.json");

const MySQLConnection = new Sequelize(
    mysql.database,
    mysql.user,
    mysql.pass,
    {
        host: mysql.host,
        dialect: "mysql",
        define: {
            timestamps: false,
            freezeTableName: true,
        },
    }
);

MySQLConnection.authenticate()
    .then(() => {
        console.log("Connection established successfuly.");
    })
    .catch((error) => {
        console.error(
            "There was an error when trying to establish a connection: ",
            error
        );
    });

module.exports = MySQLConnection;
