const express = require('express');
const mainController = require('../controllers/mainController')
const catalogueController = require('../controllers/catalogueController')
const productController = require('../controllers/productController')
const router = express.Router();


// route pour la pagé d'accueil
router.get('/', mainController.homePage)

//route pour la page catalogue
router.get('/catalogue', catalogueController.cataloguePage)

//route pour la page produit
router.get('/produit/:id', productController.productPage)

// route pour la page a propos
router.get('/contact', (req, res) => {
  res.render('contact');
});

// Middleware pour gérer les erreurs 404
router.use((req, res, next) => {
  res.status(404).render('error404');
});

module.exports = router;
