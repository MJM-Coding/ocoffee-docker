// models/index.js
const Coffee = require("./coffee");
const CoffeeDate = require("./coffeeDate");

Coffee.hasOne(CoffeeDate, { foreignKey: "coffee_id" });
CoffeeDate.belongsTo(Coffee, { foreignKey: "coffee_id" });

module.exports = { Coffee, CoffeeDate };
