// models/CoffeeDate.js
const { DataTypes } = require("sequelize");
const sequelize = require("../database");

const coffeeDate = sequelize.define(
  "coffeeDate",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    coffee_id: DataTypes.INTEGER,
    updated_at: DataTypes.DATE,
  },
  {
    tableName: "coffee_dates",
    timestamps: false,
  }
);

module.exports = coffeeDate;
