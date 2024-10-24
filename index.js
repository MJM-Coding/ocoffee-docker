// Importation des modules nécessaires
const express = require('express'); // Importation du module Express pour créer le serveur web
const path = require('path'); // Importation du module 'path' pour gérer les chemins de fichiers
require('dotenv').config(); // Chargement des variables d'environnement à partir du fichier .env
const router = require('./app/routes/router'); // Importation du module de routage

// Création d'une instance de l'application Express
const app = express();

// Lier EJS à Express
app.set('view engine', 'ejs');

// Définir le répertoire des views
app.set('views', path.join(__dirname, 'app', 'views')); // __dirname pour obtenir le chemin absolu

// Middleware pour servir les fichiers statiques depuis le dossier public
app.use(express.static(path.join(__dirname, 'app', 'public'))); // __dirname pour obtenir le chemin absolu

// Permet d'accéder aux données du formulaire via 'req.body'
app.use(express.urlencoded({ extended: true }));

// Utiliser le routeur
app.use(router);

// Exporter l'application pour Vercel
module.exports = app;

// Démarrage du serveur si ce fichier est exécuté directement
if (require.main === module) {
    app.listen(process.env.PORT || 3001, () => {
        console.log(`🚀 O'Coffee écoute sur le port: http://localhost:${process.env.PORT || 3001}`);
    });
}
