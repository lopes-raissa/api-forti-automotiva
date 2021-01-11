'use strict';

const { query } = require("express");

module.exports = {
  up: async (queryInterface, Sequelize) => {
    
    queryInterface.createTable("clientes", {
      id:{
        type: Sequelize.INTEGER,
        primaryKey: true, 
        autoIncrement: true
      },

      cliente:{
        type: Sequelize.STRING,
        allowNull: false,
        unique: true
      },

      produto:{
        type: Sequelize.STRING,
        allowNull: false
      },

      quantidade:{
        type: Sequelize.STRING,
        allowNull: false
      },

      created_at: {
        type: Sequelize.DATE,
        allowNull: false
      },

      updated_at: {
        type: Sequelize.DATE,
        allowNull: false
      }
    });
  },

  down: async (queryInterface, Sequelize) => {
    
    queryInterface.dropTable("clientes");
  }
};