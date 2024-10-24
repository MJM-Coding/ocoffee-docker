// Chargement des variables d'environnement
require('dotenv').config();

const { Sequelize } = require("sequelize");

// Vérification de l'origine de la connexion
const usingNeon = !!process.env.DATABASE_URL;
const sequelize = usingNeon
  ? new Sequelize(process.env.DATABASE_URL, {
      dialect: "postgres",
      logging: false, // Désactive les logs SQL par défaut
    })
  : new Sequelize(
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
  .then(() => {
    console.log(`🚀 Database connected`);

    // Affichage de l'origine de la connexion
    if (usingNeon) {
      console.log(`✅ Connected to Neon database at ${process.env.DATABASE_URL}`);
    } else {
      console.log(`✅ Connected to local database: ${process.env.PGDATABASE} on host ${process.env.DB_HOST}`);
    }
  })
  .catch((error) =>
    console.error(`❌ Unable to connect to database: ${error.message}`)
  );

// Export de sequelize
module.exports = sequelize;
