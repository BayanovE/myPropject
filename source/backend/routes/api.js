var express = require('express');
var router = express.Router();

var competitorsRouter = require('./api/competitors')



router.use('/competitors', competitorsRouter);

router.get('/', (req, res) => {
    res.send('api');
});

module.exports = router;