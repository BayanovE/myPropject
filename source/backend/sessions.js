
var session = require('express-session');
const pgSession = require('connect-pg-simple')(session);
const pg = require('pg');
var passport = require('passport');

const env = process.env.NODE_ENV || 'development';
const config_db = require(__dirname + '/config/config.js')[env];
const config_pool = Object.assign(config_db, {user: config_db.username}, config_db.pool);

var pgPool = new pg.Pool( config_pool );
// https://github.com/voxpelli/node-connect-pg-simple
const app_session = session({
  store: new pgSession({
    pool : pgPool,                // Connection pool
    tableName : 'sessions'   // Use another table-name than the default "session" one
  }),
  secret: process.env.FOO_COOKIE_SECRET || 'oU80saf_Dwd48w9',
  resave: true,
  saveUninitialized: true,
  cookie: { maxAge: 7 * 24 * 60 * 60 * 1000 } // 7 days
})

module.exports = app_session;