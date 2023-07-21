// customer.routes.js
module.exports = (app) => {

  const customers = require('../controllers/customer.controller');

  let router = require('express').Router();

  // create new customer
  router.post('/', customers.create);

  // retrieve all customers
  router.get('/', customers.findAll);

  // retrive one customer via id
  router.get('/:id', customers.findOne);

  // update one customer
  router.put('/:id', customers.update);

  // upload a customer image
  router.post('/:id/image', upload.single('image'), customers.updateCustomerImage);

  // delete all customers
  router.delete('/', customers.deleteAll);

  // delete one customer via id
  router.delete('/:id', customers.deleteOne);

  // use the router
  app.use('/api/customers', router);

};



// :discussion
// entity ---> model
// MVC-R
// Model    - View        - Controller     - Routes
// DB Table - Pages (SPA) - Business Logic - Address/Endpoint