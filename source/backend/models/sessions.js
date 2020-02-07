'use strict';

const fs = require('fs');
const path = require('path');
const Sequelize = require('sequelize');
const basename = path.basename(__filename);
const env = process.env.NODE_ENV || 'development';
const config = require(__dirname + '/../config/config.js')[env];
const db = {};

///////////////////////////////////////
// Session Model
// http://docs.sequelizejs.com
sid = { type: Sequelize.STRING, allowNull: false, primaryKey: true };
sess = { type: Sequelize.JSON, allowNull: false };
expire = { type: Sequelize.DATE, allowNull: false };

///////////////////////////////////////
// Optional in API router
router.use(function(req,res,next){

    var haveToken = false;
    var isAllowedForUnauth = false;
    var tokens = [
        'q38ru8Jsd09_we0)weW', 
        //...
    ];

    var allowedPaths = [
        '/letters/feedback',
    ];

    var givedToken = req.headers.token || req.query.token;

    if(tokens.indexOf(givedToken)!==-1)
    haveToken = true;

    if(allowedPaths.indexOf(req.path)!==-1)
    isAllowedForUnauth = true;

    if(req.user || haveToken || isAllowedForUnauth)
        next();
    else {
        res.status(401).send('Access denied');
    }
    
});