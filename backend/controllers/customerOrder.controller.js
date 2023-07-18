const db = require('../models');
const CustomerOrder = db.CustomerOrder;

// create and save a customerOrder
exports.create = (req, res) => {
  // validate
  if(!req.body.customerId || !req.body.productName || !req.body.productPrice || !req.body.orderQuantity) {
    res.status(400).send({
      message: `Some customerOrder information cannot be empty.`,
      success: false,
      errorCode: `ERR9001`
    });
    return;
  }

  // create object in memory
  const {customerId, productName, productPrice, orderQuantity} = req.body;
  const customerOrder = {
    customerId, productName, productPrice, orderQuantity
  };
  

  // save to db
  CustomerOrder.create(customerOrder)
    .then(data => {
      res.status(200).send({
        success: true,
        message: 'CustomerOrder saved successfully.',
        data: data
      });
    })
    .catch(error => {
      res.status(500).send({
        success: false,
        message: `Saving of CustomerOrder data failed. Error: ${error}`,
        errorCode: `ERR8001`,
      })
    });

};

// retrieve all customerOrders
exports.findAll = (req, res) => { 
  // find and respond
  CustomerOrder.findAll()
    .then(data => {
      res.status(200).send({
        success: true,
        data: data
      });
    })
    .catch(error => {
      res.status(500).send({
        success: false,
        message: `Cannot retrieve customerOrder records. Error: ${error}`,
        errorCode: `ERR8002`,
      })
    });
};

// retrieve a single customerOrder 
exports.findOne = (req, res) => {
  // find and respond
  const id = req.params.id;

  CustomerOrder.findByPk(id)
    .then(data => {
      if (data) {
        res.status(200).send({
          success: true,
          data: data
        });
      } else {
        res.status(400).send({
          success: false,
          message: `Cannot find customerOrder data with id = ${id}`,
          errorCode: `ERR7001`
        });
      }
    })
    .catch(error => {
      res.status(500).send({
        success: false,
        message: `Cannot retrieve customerOrder record. Error: ${error}`,
        errorCode: `ERR8003`,
      })
    });

};

// update a customerOrder
exports.update = (req, res) => { 
  // validate
  if(!req.body.customerId || !req.body.productName || !req.body.productPrice || !req.body.orderQuantity) {
    res.status(400).send({
      message: `Some customerOrder information cannot be empty.`,
      success: false,
      errorCode: `ERR9001`
    });
    return;
  }

  // get id
  const id = req.params.id;

  // create object in memory
  const {customerId, productName, productPrice, orderQuantity} = req.body;
  const customerOrder = {
    customerId, productName, productPrice, orderQuantity
  };

  // save to db
  CustomerOrder.update(customerOrder, {where: {orderNumber : id}})
    .then(num => {
      if (num && num[0] && num >= 1) {
        res.status(200).send({
          success: true,
          message: 'CustomerOrder updated successfully.',
          data: {
            id: id,
            recordsAffected: num && num[0] ? num[0] : 1
          }
        });
      } else {
        res.status(400).send({
          success: false,
          message: `Cannot find customerOrder data with id = ${id}, update data ignored.`,
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

// delete all customerOrders
exports.deleteAll = (req, res) => {
  CustomerOrder.destroy({where: {}, trucate: true})
    .then(nums => {
      res.status(200).send({
        success: true,
        message: `${nums} customerOrder${nums > 1 ? 's' : ''} deleted successfully.`,
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

// delete a single customerOrder
exports.deleteOne = (req, res) => {
  // get id
  const id = req.params.id;

  // save to db and respond
  CustomerOrder.destroy({ where: {orderNumber : id}})
    .then(num => {
      if (num >= 1) {
        res.status(200).send({
          success: true,
          message: 'CustomerOrder deleted successfully.',
          data: {
            orderNumber: id,
            recordsAffected: num
          }
        });
      } else {
        res.status(400).send({
          success: false,
          message: `Cannot delete customerOrder data with id = ${id}, delete request ignored.`,
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