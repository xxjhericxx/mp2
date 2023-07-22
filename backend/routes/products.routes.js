// product.routes.js
module.exports = (app) => {

  const products = require('../controllers/product.controller');

  let router = require('express').Router();

  // create new product
  router.post('/', products.create);

  // retrieve all products
  router.get('/', products.findAll);

  // retrive one product via id
  router.get('/:id', products.findOne);

  // update one product
  router.put('/:id', products.update);

  // upload a product image
  router.post('/:id/image', upload.single('image'), products.updateProductImage);

  // delete all products
  router.delete('/', products.deleteAll);

  // delete one product via id
  router.delete('/:id', products.deleteOne);

  // use the router
  app.use('/api/products', router);

};



// :discussion
// entity ---> model
// MVC-R
// Model    - View        - Controller     - Routes
// DB Table - Pages (SPA) - Business Logic - Address/Endpoint