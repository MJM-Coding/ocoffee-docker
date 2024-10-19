const { Coffee, CoffeeDate } = require("../models");

const mainController = {
  homePage: async (req, res) => {
    try {
      const news = await Coffee.findAll({
        include: [
          {
            model: CoffeeDate,
            attributes: ["updated_at"],
          },
        ],
        order: [[CoffeeDate, "updated_at", "DESC"]],
        limit: 3,
      });
      res.status(200).render("index", { news });
    } catch (error) {
      res.status(500).send(`Erreur côté serveur: ${error}`);
    }
  },
};

module.exports = mainController;
