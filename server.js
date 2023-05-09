const express = require("express");
const RoutesProduct = require("./Routes/RoutesProduct");

const server = express();
const PORT = 3000;

server.use(express.json());
server.use(express.urlencoded({ extended: true }));
server.use(RoutesProduct);

server.listen(PORT, () => {
    console.log("Servidor executando na porta " + PORT);
});
