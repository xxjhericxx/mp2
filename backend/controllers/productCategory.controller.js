const db = require('../models');
const ProductCategory = db.ProductCategory;

// create and save a productCategory
exports.create = (req, res) => {
  // validate
  if(!req.body.productCategoryTitle) {
      res.status(400).send({
      message: `Some productCategory information cannot be empty.`,
      success: false,
      errorCode: `ERR9001`
    });
    return;
  }

  // create object in memory
  const {productCategoryTitle} = req.body;
  const productCategory = {
    productCategoryTitle
  };

  // save to db
  ProductCategory.create(productCategory)
    .then(data => {
      res.status(200).send({
        success: true,
        message: 'ProductCategory saved successfully.',
        data: data
      });
    })
    .catch(error => {
      res.status(500).send({
        success: false,
        message: `Saving of ProductCategory data failed. Error: ${error}`,
        errorCode: `ERR8001`,
      })
    });

};

// retrieve all productCategorys
exports.findAll = (req, res) => { 
  // find and respond
  ProductCategory.findAll()
    .then(data => {
      res.status(200).send({
        success: true,
        data: data
      });
    })
    .catch(error => {
      res.status(500).send({
        success: false,
        message: `Cannot retrieve productCategory records. Error: ${error}`,
        errorCode: `ERR8002`,
      })
    });
};

// retrieve a single productCategory 
exports.findOne = (req, res) => {
  // find and respond
  const id = req.params.id;

  ProductCategory.findByPk(id)
    .then(data => {
      if (data) {
        res.status(200).send({
          success: true,
          data: data
        });
      } else {
        res.status(400).send({
          success: false,
          message: `Cannot find product category data with id = ${id}`,
          errorCode: `ERR7001`
        });
      }
    })
    .catch(error => {
      res.status(500).send({
        success: false,
        message: `Cannot retrieve product category record. Error: ${error}`,
        errorCode: `ERR8003`,
      })
    });

};

// update a productCategory
exports.update = (req, res) => { 
  // validate
  if(!req.body.productCategoryTitle) {
    res.status(400).send({
      message: `Some productCategory information cannot be empty.`,
      success: false,
      errorCode: `ERR9001`
    });
    return;
  }

  // get id
  const id = req.params.id;

  // create object in memory
  const {productCategoryTitle} = req.body;
  const productCategory = {
    productCategoryTitle
  };

  // save to db
  ProductCategory.update(productCategory, {where: {productCategoryId : id}})
    .then(num => {
      if (num && num[0] && num >= 1) {
        res.status(200).send({
          success: true,
          message: 'ProductCategory updated successfully.',
          data: {
            id: id,
            recordsAffected: num && num[0] ? num[0] : 1
          }
        });
      } else {
        res.status(400).send({
          success: false,
          message: `Cannot find productCategory data with id = ${id}, update data ignored.`,
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

// delete all productCategorys
exports.deleteAll = (req, res) => {
  ProductCategory.destroy({where: {}, trucate: true})
    .then(nums => {
      res.status(200).send({
        success: true,
        message: `${nums} productCategory${nums > 1 ? 's' : ''} deleted successfully.`,
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

// delete a single productCategory
exports.deleteOne = (req, res) => {
  // get id
  const id = req.params.id;

  // save to db and respond
  ProductCategory.destroy({ where: {productCategoryId : id}})
    .then(num => {
      if (num >= 1) {
        res.status(200).send({
          success: true,
          message: 'ProductCategory deleted successfully.',
          data: {
            productCategoryId: id,
            recordsAffected: num
          }
        });
      } else {
        res.status(400).send({
          success: false,
          message: `Cannot delete productCategory data with id = ${id}, delete request ignored.`,
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