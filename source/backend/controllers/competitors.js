const db = require('../models')

const { Competitor } = db

const CompetitorsController = {
  index: async function(req, res, next) {
    const competitors = await Competitor.findAll()
    res.json(competitors.map(competitor => competitor.get({ plain: true })))
  }
};

module.exports = CompetitorsController;
