//http://www.passportjs.org/docs/username-password/
const flash = require("connect-flash"); //https://www.npmjs.com/package/connect-flash cross redirect messages
var LocalStrategy = require('passport-local').Strategy;

function AUTH(app, passport){

  app.use(flash());
  
  passport.use(new LocalStrategy({
      usernameField: 'email',
      passwordField: 'password',
      passReqToCallback: true
    },
    async(req, username, password, done) =>{
  
      try{
        let user = await Users.Login(username, password); //Model Method
  
        if(!user){
          return done(null, false, { message1: 'Incorrect username or password.' });
        } else {
          //if auth
          return done(null, user);
        }
      } catch(ex){
        // return done(err); 
        return done(null, false, { message1: 'Incorrect data.' + ex.message });
      }
    }
  ));
  
  
  //new update
  app.post('/auth/login', function(req, res, next) {
    passport.authenticate('local', function(err, user, info) {
      if (err) { return next(err) }
      if (!user) {
        // *** Display message using Express 3 locals
        req.session.message = (info && info.message) || '';
        return res.redirect('/auth/?returnurl='+req.path);
      }
      //TODO: return url after relogin
      req.logIn(user, function(err) {
        if (err) { return next(err); }
        return res.redirect('/' + (req.query.returnurl || '') );
      });
    })(req, res, next);
  });
  
  //если просто зашли, перенаправить
  app.get('/auth/login', function(req,res,next){
    res.redirect('/auth/');
  });

  app.all('/auth/logout', function(req, res){
    req.logout();
    res.redirect('/auth/');
  });
  
  passport.serializeUser(function(user, done) {
    // done(null, user.id); //VARIANT 1
    done(null, user); //VARIANT 2
  });
  
  // passport.deserializeUser(function(id, done) { //VARIANT 1
  passport.deserializeUser(function(user, done) { //VARIANT 2
    // console.log('Deserialize user called.');
    let incapsuledUserData = {
      id: user.id,
      email: user.email,
      username: user.username,
      fullname: user.fullname,
    };

    global.user = { user: incapsuledUserData };
    return done(null, { user: incapsuledUserData });
  });
  ///
  
  //my
  app.use(function(req, res, next) {
    var isAuthPage = req.path.startsWith('/auth');
    var isApi = req.path.startsWith('/api/');
    
    if (isAuthPage || req.user || isApi) {
      // logged in
      return next(); 
    } else {
      // not logged in
      res.redirect('/auth/?returnurl='+req.path);
    }
  });

  ////////////////AUTH END

}

module.exports = AUTH;