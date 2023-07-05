// task.routes.js
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

  const tasks = require('../controllers/task.controller');

  let router = require('express').Router();

  // create new task
  router.post('/', tasks.create);

  // retrieve all tasks
  router.get('/', tasks.findAll);

  // retrive one task via id
  router.get('/:id', tasks.findOne);

  // update one task
  router.put('/:id', tasks.update);

  // delete all tasks
  router.delete('/', tasks.deleteAll);

  // delete one task via id
  router.delete('/:id', tasks.deleteOne);

  // use the router
  app.use('/api/tasks', router);

  // curl -l <address> --> GET
  // curl -X POST|PUT|DELETE <address>
};



// :discussion
// entity ---> model
// MVC-R
// Model    - View        - Controller     - Routes
// DB Table - Pages (SPA) - Business Logic - Address/Endpoint