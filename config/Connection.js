const sequelize = require("sequelize");

const conn = new sequelize("nodeproducts", "nodeproducts_manager", "node123$%",{
    host: "localhost",
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