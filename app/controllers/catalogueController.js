const { Coffee } = require("../models");

const catalogueController = {
  cataloguePage: async (req, res) => {
    const category = req.query.category || "";

    try {
      let products;
      if (category && category !== "Tout") {
        products = await Coffee.findAll({
          where: { category },
        });
      } else {
        products = await Coffee.findAll();
      }

      const categories = await Coffee.findAll({
        attributes: ["category"],
        group: ["category"],
      });

      const categoryList = categories.map((c) => c.category);
      categoryList.unshift("Tout");

      res
        .status(200)
        .render("catalogue", {
          products,
          categories: categoryList,
          selectedCategory: category,
        });
    } catch (error) {
      res.status(500).send(`Erreur côté serveur: ${error}`);
    }
  },
};

module.exports = catalogueController;
