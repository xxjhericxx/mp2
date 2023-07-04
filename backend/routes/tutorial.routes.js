// tutorial.routes.js
module.exports = (app) => {
  // resource group --> RESTful --> CRUD
  // 1. create
  // 2. read
  // 3. update
  // 4. delete

  // HTTP VERBS
  // post *Create (create)
  // get *Read (getOne, getAll)
  // put *Update (put|patch) (update)
  // delete *Delete (deleteOne, deleteAll)

  const tutorials = require('../controllers/tutorial.controller');

  let router = require('express').Router();

  // create new tutorial
  router.post('/', tutorials.create);

  // retrieve all tutorials
  router.get('/', tutorials.findAll);

  // retrive one tutorial via id
  router.get('/:id', tutorials.findOne);

  // update one tutorial
  router.put('/:id', tutorials.update);

  // delete all tutorials
  router.delete('/', tutorials.deleteAll);

  // delete one tutorial via id
  router.delete('/:id', tutorials.deleteOne);

  // use the router
  app.use('/api/tutorials', router);

  // curl -l <address> --> GET
  // curl -X POST|PUT|DELETE <address>
};



// :discussion
// entity ---> model
// MVC-R
// Model    - View        - Controller     - Routes
// DB Table - Pages (SPA) - Business Logic - Address/Endpoint