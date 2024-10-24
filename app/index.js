const app = require('../index');

// Exporter l'application pour Vercel
module.exports = (req, res) => {
    return app(req, res);
};
