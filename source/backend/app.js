var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var cors = require('cors');
var helmet = require('helmet');
var bodyParser = require('body-parser');
//for sessions
var session = require('express-session');
const pgSession = require('connect-pg-simple')(session);
const pg = require('pg');
var passport = require('passport');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var apiRouter = require('./routes/api');

var app = express();

if (process.env.NODE_ENV === 'development') {
  app.use(cors());
} else {
  // no need before deploying
}

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(bodyParser.json());
app.use(cookieParser());

app.use(express.static(path.join(__dirname, 'public')));
//app.use(helmet());

//app.use(session({
//  store: new (require('connect-pg-simple')(express.session))(),
// secret: process.env.FOO_COOKIE_SECRET,
//  cookie: { maxAge:  7 * 24 * 60 * 60 * 1000} // 7 days
//}));

const env = process.env.NODE_ENV || 'development';
const config_db = require(__dirname + '/config/config.js')[env];
const config_pool = Object.assign(config_db, {user: config_db.username}, config_db.pool);
console.log(config_db);
var pgPool = new pg.Pool( config_pool );
// https://github.com/voxpelli/node-connect-pg-simple
app.use(session({
  store: new pgSession({
    pool : pgPool,                // Connection pool
    tableName : 'sessions'   // Use another table-name than the default "session" one
  }),
  secret: process.env.FOO_COOKIE_SECRET || 'oU80saf_Dwd48w9',
  resave: true,
  saveUninitialized: true,
  cookie: { maxAge: 7 * 24 * 60 * 60 * 1000 } // 7 days
}));

//var app_session = require('./sessions') ;
//app.use(app_session);  TODO: пока так, потом надо сделать этот основным а верхний - удалить

app.use(passport.initialize());
app.use(passport.session());

require('./controllers/auth')(app,passport);

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/api', apiRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
