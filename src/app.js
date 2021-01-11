// Import do express
const express = require("express");

// Import das rotas
const routes = require("./routes");

// Import do database
require("./database");


// Cria a aplicação express
const app = express();

app.use(express.json());

app.use(routes);


module.exports = app;