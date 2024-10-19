const { Sequelize } = require("sequelize");

const sequelize = new Sequelize(
  process.env.PGDATABASE,
  process.env.PGUSER,
  process.env.PGPASSWORD,
  {
    host: process.env.DB_HOST,
    port: 5432,
    dialect: "postgres",
    logging: false, // Désactive les logs SQL par défaut
  }
);

sequelize
  .authenticate()
  .then(() => console.log("Connecté à la base de données PostgreSQL"))
  .catch((err) =>
    console.error("Erreur de connexion à la base de données", err)
  );

module.exports = sequelize;
