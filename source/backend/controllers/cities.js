const db = require('../models')

const { Cities } = db

const CitiesController = {
  index: async function(req, res, next) {
    const cities = await Cities.findAll()
    res.json(cities.map(city => city.get({ plain: true })))
  }
};

module.exports = CitiesController;
