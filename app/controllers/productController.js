const { Coffee } = require("../models");

const productController = {
  productPage: async (req, res) => {
    const productId = req.params.id;
    try {
      const product = await Coffee.findByPk(productId);
      if (product) {
        res.status(200).render("produit", { product });
      } else {
        res.status(404).render("404");
      }
    } catch (error) {
      res.status(500).send(`Erreur côté serveur: ${error}`);
    }
  },
};

module.exports = productController;
