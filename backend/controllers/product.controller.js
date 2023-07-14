const db = require('../models');
const Product = db.Product;

// create and save a product
exports.create = (req, res) => {
  // validate
  if(!req.body.productCode || !req.body.productDescription || !req.body.productName || !req.body.productCategory || !req.body.productPrice) {
    res.status(400).send({
      message: `Some product information cannot be empty.`,
      success: false,
      errorCode: `ERR9001`
    });
    return;
  }

  // create object in memory
  const {productCode, productDescription, productName, productCategory, productImage, productPrice, productQuantity} = req.body;
  const product = {
    productCode, productDescription, productName, productCategory, productImage, productPrice, productQuantity
  };
  product.productImage = productImage || product.productImage;
  product.productQuantity = productQuantity || product.productQuantity;
  

  // save to db
  Product.create(product)
    .then(data => {
      res.status(200).send({
        success: true,
        message: 'Product saved successfully.',
        data: data
      });
    })
    .catch(error => {
      res.status(500).send({
        success: false,
        message: `Saving of Product data failed. Error: ${error}`,
        errorCode: `ERR8001`,
      })
    });

};

// retrieve all products
exports.findAll = (req, res) => { 
  // find and respond
  Product.findAll()
    .then(data => {
      res.status(200).send({
        success: true,
        data: data
      });
    })
    .catch(error => {
      res.status(500).send({
        success: false,
        message: `Cannot retrieve product records. Error: ${error}`,
        errorCode: `ERR8002`,
      })
    });
};

// retrieve a single product 
exports.findOne = (req, res) => {
  // find and respond
  const id = req.params.id;

  Product.findByPk(id)
    .then(data => {
      if (data) {
        res.status(200).send({
          success: true,
          data: data
        });
      } else {
        res.status(400).send({
          success: false,
          message: `Cannot find product data with id = ${id}`,
          errorCode: `ERR7001`
        });
      }
    })
    .catch(error => {
      res.status(500).send({
        success: false,
        message: `Cannot retrieve product record. Error: ${error}`,
        errorCode: `ERR8003`,
      })
    });

};

// update a product
exports.update = (req, res) => { 
  // validate
  if(!req.body.productCode || !req.body.productDescription || !req.body.productName || !req.body.productCategory || !req.body.productPrice) {
    res.status(400).send({
      message: `Some product information cannot be empty.`,
      success: false,
      errorCode: `ERR9001`
    });
    return;
  }

  // get id
  const id = req.params.id;

  // create object in memory
  const {productCode, productDescription, productName, productCategory, productImage, productPrice, productQuantity} = req.body;
  const product = {
    productCode, productDescription, productName, productCategory, productImage, productPrice, productQuantity
  };
  product.productImage = productImage || product.productImage;
  product.productQuantity = productQuantity || product.productQuantity;

  // save to db
  Product.update(product, {where: {productId : id}})
    .then(num => {
      if (num && num[0] && num >= 1) {
        res.status(200).send({
          success: true,
          message: 'Product updated successfully.',
          data: {
            id: id,
            recordsAffected: num && num[0] ? num[0] : 1
          }
        });
      } else {
        res.status(400).send({
          success: false,
          message: `Cannot find product data with id = ${id}, update data ignored.`,
          errorCode: `ERR7002`
        });
      }
    })
    .catch(error => {
      res.status(500).send({
        success: false,
        message: `Cannot perform update at the moment. Error: ${error}`,
        errorCode: `ERR8004`,
      })
    });
};

// delete all products
exports.deleteAll = (req, res) => {
  Product.destroy({where: {}, trucate: true})
    .then(nums => {
      res.status(200).send({
        success: true,
        message: `${nums} product${nums > 1 ? 's' : ''} deleted successfully.`,
        data: {
          recordsAffected: nums
        }
      });
    })
    .catch(error => {
      res.status(500).send({
        success: false,
        message: `Cannot perform date all at the moment. Error: ${error}`,
        errorCode: `ERR8005`,
      })
    });
};

// delete a single product
exports.deleteOne = (req, res) => {
  // get id
  const id = req.params.id;

  // save to db and respond
  Product.destroy({ where: {productId : id}})
    .then(num => {
      if (num >= 1) {
        res.status(200).send({
          success: true,
          message: 'Product deleted successfully.',
          data: {
            productId: id,
            recordsAffected: num
          }
        });
      } else {
        res.status(400).send({
          success: false,
          message: `Cannot delete product data with id = ${id}, delete request ignored.`,
          errorCode: `ERR7003`
        });
      }
    })
    .catch(error => {
      res.status(500).send({
        success: false,
        message: `Cannot perform deletion at the moment. Error: ${error}`,
        errorCode: `ERR8006`,
      })
    });
};

// upload avatar image
exports.updateAvatar = (req, res) => {
  // construct url
  const avatarUrl = `uploads/${req.file.filename}`;

  // get id
  const id = req.params.id;

  // construct data
  const product = {
    avatar: avatarUrl
  }

  // save to db
  Product.update(product, {where: {id: id}})
    .then(num => {
      if (num && num[0] && num >= 1) {
        res.status(200).send({
          success: true,
          message: 'Avatar updated successfully.',
          data: {
            id: id,
            recordsAffected: num && num[0] ? num[0] : 1
          }
        });
      } else {
        res.status(400).send({
          success: false,
          message: `Cannot find product data with id = ${id}, update data ignored.`,
          errorCode: `ERR7002`
        });
      }
    })
    .catch(error => {
      res.status(500).send({
        success: false,
        message: `Cannot perform update at the moment. Error: ${error}`,
        errorCode: `ERR8004`,
      })
    });
}