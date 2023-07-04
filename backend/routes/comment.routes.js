module.exports = (app) => {

  const comments = require('../controllers/comment.controller');

  let router = require('express').Router();

  // create new comment
  router.post('/', comments.create);

  // retrieve all comments
  router.get('/', comments.findAll);

  // retrive one comment via id
  router.get('/:id', comments.findOne);

  // update one comment
  router.put('/:id', comments.update);

  // delete all comments
  router.delete('/', comments.deleteAll);

  // delete one comment via id
  router.delete('/:id', comments.deleteOne);

  // use the router
  app.use('/api/comments', router);

  // curl -l <address> --> GET
  // curl -X POST|PUT|DELETE <address>
};



// :discussion
// entity ---> model
// MVC-R
// Model    - View        - Controller     - Routes
// DB Table - Pages (SPA) - Business Logic - Address/Endpoint