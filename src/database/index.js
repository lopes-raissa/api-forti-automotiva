const Sequelize = require("sequelize");
const dbConfig = require("../config/database");

const Cliente = require("../models/Cliente");

const conex = new Sequelize(dbConfig);

Cliente.init(conex);

Cliente.associate(conex.models);