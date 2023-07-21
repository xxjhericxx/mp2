// admin access
const DEFAULT_USER = [
  {
    id: 1,
    username: 'admin',
    password: 'adminpass'
  }
];

// login a user
exports.login = (req, res) => {
  // validate
  if(!req.body.username || !req.body.password) {
    res.status(400).send({
      message: `Username or Password cannot be empty.`,
      success: false,
      errorCode: `ERR9001`
    });
    return;
  }

  const user = DEFAULT_USER.filter(user => user.username === req.body.username && user.password === req.body.password);

  if(user.length <= 0) {
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
        timestamp: Date.now()
      }
    });
  }
  res.status(200).send({"status": 'success'})
}

// logout
exports.logout = (req, res) => {
  res.status(200).send({"status": 'success'})
}
