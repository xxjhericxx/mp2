// customerOrder.routes.js
module.exports = (app) => {

  const customerOrders = require('../controllers/customerOrder.controller');

  let router = require('express').Router();

  // create new customerOrder
  router.post('/', customerOrders.create);

  // retrieve all customerOrders
  router.get('/', customerOrders.findAll);

  // retrive one customerOrder via id
  router.get('/:id', customerOrders.findOne);

  // update one customerOrder
  router.put('/:id', customerOrders.update);

  // delete all customerOrders
  router.delete('/', customerOrders.deleteAll);

  // delete one customerOrder via id
  router.delete('/:id', customerOrders.deleteOne);

  // use the router
  app.use('/api/customerOrders', router);

};