var express = require('express')
var app1 = express()
// auth0
const passport = require('passport');
const Auth0Strategy = require('passport-auth0');

// Configure Passport to use Auth0

exports.login = function(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
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
  app1.use(passport.initialize());
  app1.use(passport.session());

  // Perform the login

  const env = {
    AUTH0_CLIENT_ID: 'p1uly3n8G1B62PO0vP9SwM3QTFKIOSuM',
    AUTH0_DOMAIN: 'mindzcloudtest.auth0.com',
    AUTH0_CALLBACK_URL: 'http://localhost:8000/callback'
  };

  return passport.authenticate('auth0', {
      clientID: env.AUTH0_CLIENT_ID,
      domain: env.AUTH0_DOMAIN,
      redirectUri: env.AUTH0_CALLBACK_URL,
      audience: 'https://' + env.AUTH0_DOMAIN + '/userinfo',
      responseType: 'code',
      scope: 'openid'
    }), function(request, response) {
      console.log('err')
      response.redirect('/');
  });


  passport.authenticate('auth0', {
    clientID: env.AUTH0_CLIENT_ID,
    domain: env.AUTH0_DOMAIN,
    redirectUri: env.AUTH0_CALLBACK_URL,
    audience: 'https://' + env.AUTH0_DOMAIN + '/userinfo',
    responseType: 'code',
    scope: 'openid'
  }),
  function(req, res) {
    console.log('err')
    res.redirect('/');
  }
};
exports.callback = function(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  console.log('logged in');
  res.end('logged in');
}
exports.logout = function(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  req.logout();
  res.end('logged out');
}
