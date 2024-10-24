// Importation du module Express pour créer le serveur web
const express = require('express');

// Importation du module 'path' pour gérer les chemins de fichiers
const path = require('path');

// Chargement des variables d'environnement à partir du fichier .env
require('dotenv').config();

// Création d'une instance de l'application Express
const app = express();

// Importation du module de routage
const router = require("./app/routes/router");

// Lier EJS à Express
app.set('view engine', 'ejs');

// Définir le répertoire des views
app.set('views', path.join(__dirname, 'app', 'views'));

// Middleware pour servir les fichiers statiques depuis le dossier public
app.use(express.static(path.join(__dirname, 'app', 'public')));

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
