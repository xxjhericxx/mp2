// create and save a comment
exports.create = (req, res) => {
  res.send('POST > create response from controller.');
};

// retrieve all comments
exports.findAll = (req, res) => { // http://localhost:8000/api/comments/
  res.send('GET ALL Request Received.');
};

// retrieve a single comment 
exports.findOne = (req, res) => { // http://localhost:8000/api/comments/{id}
  res.send('GET ONE Request Received.');
};

// update a comment
exports.update = (req, res) => { // http://localhost:8000/api/comments/{id}
  res.send('UPDATE ONE Request Received.');
};

// delete all comments
exports.deleteAll = (req, res) => { // http://localhost:8000/api/comments/
  res.send('DELETE ALL Request Received.');
};

// delete a single comment
exports.deleteOne = (req, res) => { // http://localhost:8000/api/comments/{id}
  res.send('DELETE ONE Request Received.');
};