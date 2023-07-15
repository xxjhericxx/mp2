// productCategorie.routes.js
module.exports = (app) => {

  const productCategories = require('../controllers/productCategory.controller');

  let router = require('express').Router();

  // create new productCategory
  router.post('/', productCategories.create);

  // retrieve all productCategories
  router.get('/', productCategories.findAll);

  // retrive one productCategory via id
  router.get('/:id', productCategories.findOne);

  // update one productCategory
  router.put('/:id', productCategories.update);

  // delete all productCategories
  router.delete('/', productCategories.deleteAll);

  // delete one productCategory via id
  router.delete('/:id', productCategories.deleteOne);

  // use the router
  app.use('/api/productCategories', router);

};