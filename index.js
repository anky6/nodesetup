var express = require('express')
var app = express()
var vimeolocation = require('./routes/vimeoAPI')
var dblocation = require('./routes/database')
var auth = require('./routes/auth0')

// auth0
/* const passport = require('passport');
const Auth0Strategy = require('passport-auth0');

// Configure Passport to use Auth0
const strategy = new Auth0Strategy(
  {
    domain: 'mindzcloudtest.auth0.com',
    clientID: 'p1uly3n8G1B62PO0vP9SwM3QTFKIOSuM',
    clientSecret: 'YYd2l1bAW-vs48i8LXmmaOev9K7bxyI7TIFXB1zpAwE1y8dGla5LtPz0dzwHjnpu',
    callbackURL: 'http://localhost:8000/callback'
  },
  (accessToken, refreshToken, extraParams, profile, done) => {
    return done(null, profile);
  }
);

passport.use(strategy);

// This can be used to keep a smaller payload
passport.serializeUser(function(user, done) {
  done(null, user);
});

passport.deserializeUser(function(user, done) {
  done(null, user);
});

// ...
app.use(passport.initialize());
app.use(passport.session());

// Perform the login

const env = {
  AUTH0_CLIENT_ID: 'p1uly3n8G1B62PO0vP9SwM3QTFKIOSuM',
  AUTH0_DOMAIN: 'mindzcloudtest.auth0.com',
  AUTH0_CALLBACK_URL: 'http://localhost:8000/callback'
};

app.get('/login', passport.authenticate('auth0', {
    clientID: env.AUTH0_CLIENT_ID,
    domain: env.AUTH0_DOMAIN,
    redirectUri: env.AUTH0_CALLBACK_URL,
    audience: 'https://' + env.AUTH0_DOMAIN + '/userinfo',
    responseType: 'code',
    scope: 'openid'
  }),
  function(req, res) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.redirect('/');
  }
);

/*
app.get(
  '/callback',
  passport.authenticate('auth0', {
    failureRedirect: '/'
  }),
  function(req, res) {
    res.redirect(req.session.returnTo || '/home');
  }
);
*/
/*app.get('/callback', function (req, res) {
console.log('logged in');
res.end('logged in');

})

// Perform session logout and redirect to homepage
app.get('/logout', (req, res) => {
  req.logout();
  res.end('logged out');
})*/

// end of auth0 module code

  // create upload request to vimeo
  app.get('/uploadvideo', vimeolocation.createuploadVideoRequest)

  // get all uploaded uploaded videos
  app.get('/getvideo', vimeolocation.uploadedvideos)

  // get db connection
  app.get('/connection', dblocation.dbconnection)

  // get login
  app.get('/login', auth.login)
  app.get('/callback', auth.callback)
  app.get('/logout', auth.logout)

  /*Start listening*/
  app.listen(8000, function(){
    console.log('server started at 8000')
  });
