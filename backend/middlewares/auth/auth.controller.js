const db = require('../../models');
const Customer = db.Customer;

// login a user
exports.login =  async (req, res) => {
  // validate
  if(!req.body.customerEmailAddress || !req.body.customerPassword ) {
    res.status(400).send({
      message: ` Email or Password cannot be empty.`,
      success: false,
      errorCode: `ERR9001`
    });
    return;
  }

  // encrypt password
  const encodedPassword = btoa(req.body.customerPassword);

  // search if user exist in db
  const user = await Customer.findOne({where:{
    customerEmailAddress : req.body.customerEmailAddress,
    customerPassword : encodedPassword
  }})

  // validation if user match
  if(!user) {
    res.status(400).send({
      message: `Username or Password does not match.`,
      success: false,
      errorCode: `ERR9001`
    });
  } else {
    res.status(200).send({
      success: true,
      message: 'Successfully logged in',
      data: {
        success: true,
        timestamp: Date.now(),
        data: user
      }
    });
  }
}

// logout
exports.logout = (req, res) => {
  res.status(200).send({"status": 'success'})
}
