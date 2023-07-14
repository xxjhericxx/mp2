const db = require('../models');
const Customer = db.Customer;

// create and save a customer
exports.create = (req, res) => {
  // validate
  if(!req.body.customerFirstName || !req.body.customerLastName || !req.body.customerAddress || !req.body.customerZipCode || !req.body.customerCountry || !req.body.customerPhoneNumber || !req.body.customerEmailAddress ) {
    res.status(400).send({
      message: `Some customer information cannot be empty.`,
      success: false,
      errorCode: `ERR9001`
    });
    return;
  }

  // create object in memory
  const {customerFirstName, customerLastName, customerImage, customerAddress, customerZipCode, customerCountry, customerPhoneNumber, customerEmailAddress} = req.body;
  const customer = {
    customerFirstName, customerLastName, customerImage, customerAddress, customerZipCode, customerCountry, customerPhoneNumber, customerEmailAddress
  };
  customer.customerImage = customerImage || customer.customerImage;

  // save to db
  Customer.create(customer)
    .then(data => {
      res.status(200).send({
        success: true,
        message: 'Customer saved successfully.',
        data: data
      });
    })
    .catch(error => {
      res.status(500).send({
        success: false,
        message: `Saving of Customer data failed. Error: ${error}`,
        errorCode: `ERR8001`,
      })
    });

};

// retrieve all customers
exports.findAll = (req, res) => { 
  // find and respond
  Customer.findAll()
    .then(data => {
      res.status(200).send({
        success: true,
        data: data
      });
    })
    .catch(error => {
      res.status(500).send({
        success: false,
        message: `Cannot retrieve customer records. Error: ${error}`,
        errorCode: `ERR8002`,
      })
    });
};

// retrieve a single customer 
exports.findOne = (req, res) => {
  // find and respond
  const id = req.params.id;

  Customer.findByPk(id)
    .then(data => {
      if (data) {
        res.status(200).send({
          success: true,
          data: data
        });
      } else {
        res.status(400).send({
          success: false,
          message: `Cannot find customer data with id = ${id}`,
          errorCode: `ERR7001`
        });
      }
    })
    .catch(error => {
      res.status(500).send({
        success: false,
        message: `Cannot retrieve customer record. Error: ${error}`,
        errorCode: `ERR8003`,
      })
    });

};

// update a customer
exports.update = (req, res) => { 
  // validate
  if(!req.body.customerFirstName || !req.body.customerLastName || !req.body.customerAddress || !req.body.customerZipCode || !req.body.customerCountry || !req.body.customerPhoneNumber || !req.body.customerEmailAddress ) {
    res.status(400).send({
      message: `Some customer information cannot be empty.`,
      success: false,
      errorCode: `ERR9001`
    });
    return;
  }

  // get id
  const id = req.params.id;

  // create object in memory
  const {customerFirstName, customerLastName, customerAddress, customerZipCode, customerCountry, customerPhoneNumber, customerEmailAddress} = req.body;
  const customer = {
    customerFirstName, customerLastName, customerAddress, customerZipCode, customerCountry, customerPhoneNumber, customerEmailAddress
  };

  // save to db
  Customer.update(customer, {where: {customerId : id}})
    .then(num => {
      if (num && num[0] && num >= 1) {
        res.status(200).send({
          success: true,
          message: 'Customer updated successfully.',
          data: {
            id: id,
            recordsAffected: num && num[0] ? num[0] : 1
          }
        });
      } else {
        res.status(400).send({
          success: false,
          message: `Cannot find customer data with id = ${id}, update data ignored.`,
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

// delete all customers
exports.deleteAll = (req, res) => {
  Customer.destroy({where: {}, trucate: true})
    .then(nums => {
      res.status(200).send({
        success: true,
        message: `${nums} customer${nums > 1 ? 's' : ''} deleted successfully.`,
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

// delete a single customer
exports.deleteOne = (req, res) => {
  // get id
  const id = req.params.id;

  // save to db and respond
  Customer.destroy({ where: {customerId : id}})
    .then(num => {
      if (num >= 1) {
        res.status(200).send({
          success: true,
          message: 'Customer deleted successfully.',
          data: {
            customerId: id,
            recordsAffected: num
          }
        });
      } else {
        res.status(400).send({
          success: false,
          message: `Cannot delete customer data with id = ${id}, delete request ignored.`,
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
  const customer = {
    customerImage: avatarUrl
  }

  // save to db
  Customer.update(customer, {where: {customerId: id}})
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
          message: `Cannot find customer data with id = ${id}, update data ignored.`,
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