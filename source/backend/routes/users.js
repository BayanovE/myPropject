var express = require('express');
var UsersController = require('../controllers/users');

var router = express.Router();

/* GET users listing. */    
router.get('/', UsersController.index);

module.exports = router;
