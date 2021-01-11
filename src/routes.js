const express = require("express");

const clienteController = require("./controllers/clientes");

const routes = express.Router();


// Configurações de rotas
routes.get("/clientes", clienteController.listarClientes);
routes.post("/clientes", clienteController.adicionarClientes);

module.exports = routes;