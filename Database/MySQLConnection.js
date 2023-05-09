const sequelize = require("sequelize");
const config = require("../config.json");

const conn = new sequelize(config.mysql.database, config.mysql.user, config.mysql.pass,{
    host: config.mysql.host,
    dialect: "mysql",
    define: {
        timestamps: false,
        freezeTableName: true
    }
});

conn.authenticate().then(() => {
    console.log("Connection established successfuly.");
}).catch((error) => {
    console.error("There was an error when trying to establish a connection: ", error);
});

module.exports = conn