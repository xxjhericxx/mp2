// login routes
module.exports = (app) => {

  const Auth = require('./auth.controller');

  let router = require('express').Router();

  router.post('/login', Auth.login);

  router.post('/logout', Auth.logout)

  // use the router
  app.use('/api/auth', router);

};