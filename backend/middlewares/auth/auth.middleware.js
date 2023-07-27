exports.isAuth = (req, res, next) => {
  if (!req.headers.authorization) {
    res.status(401).send({
      success: false,
      message: `You need to supply valid credentials to access this resource.`,
      errorCode: `ERR5000`
    });
  }
  
  const auth = req.headers.authorization.split(' ')[1];
  const decodedAuth = new Buffer(auth, 'base64').toString();
  // const uname = decodedAuth.split(':')[0];
  const upass = decodedAuth.split(':')[1];

  // uname = admin@admin.com
  // upass = YWRtaW5wYXNz
  if (uname === 'admin@admin.com' && upass === 'YWRtaW5wYXNz') {
    next();
  } else {
    res.status(401).send({
      success: false,
      message: `Access denied for the username and password combination.`,
      errorCode: `ERR5001`
    });
  }
}