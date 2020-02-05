var express = require('express');
var router = express.Router();

var competitorsRouter = require('./api/competitors');
var citiesRouter = require('./api/cities');

router.use('/competitors', competitorsRouter);
router.use('/cities', citiesRouter);

router.get('/', (req, res) => {
    res.send('api');
});

module.exports = router;