// Importation du module Express pour créer le serveur web
const express = require ('express');

// Création d'une instance de l'application Express
const app = express();

// Importation du module 'path' pour gérer les chemins de fichiers
const path = require('path')

// Chargement des variables d'environnement à partir du fichier .env
require('dotenv').config();

//importe le module de routage et l'assigne à la constante router pour être utilisé dans la gestion des routes
const router = require("./app/routes/router")

//lier EJS à Express
app.set('view engine', 'ejs');

//définir le repertoires des views 
app.set('views', path.join(__dirname, 'app', 'views'))

// Middleware pour servir les fichiers statiques depuis le dossier public
app.use(express.static(path.join(__dirname, 'app','public')));


// Permet d'accéder aux données du formulaire via 'req.body'
app.use(express.urlencoded({ extended: true }));



app.use(router);


// Démarrage du serveur Express sur le port spécifié par la variable PORT dans le .env
app.listen(process.env.PORT, () => {
    console.log(`O'Coffee écoute sur le port: ${process.env.PORT}`);
  });

  