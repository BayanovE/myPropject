var express = require('express');
var CompetitorsController = require('../../controllers/competitors');

var router = express.Router();

/* GET ompetitors listing. */
router.get('/', CompetitorsController.index);

module.exports = router;
