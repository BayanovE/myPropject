var express = require('express');
var CitiesController = require('../../controllers/cities');

var router = express.Router();

/* GET ompetitors listing. */
router.get('/', CitiesController.index);

module.exports = router;
