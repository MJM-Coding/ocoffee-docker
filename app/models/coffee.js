// models/Ocoffee.js
const { DataTypes } = require("sequelize");
const sequelize = require("../database");

const coffee = sequelize.define(
  "coffee",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false, // Vous pouvez définir des contraintes supplémentaires
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    reference: {
      type: DataTypes.BIGINT, // Correspond à votre définition de la base de données
      allowNull: false, 
    },
    origine: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    price: {
      type: DataTypes.DECIMAL(5, 2), // Correspond à votre définition de la BDD
      allowNull: false,
    },
    category: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    available: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
    },
  },
  {
    tableName: "ocoffee",
    timestamps: false,
  }
);

module.exports = coffee;
