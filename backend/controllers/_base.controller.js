// server --> app  --> API
// routes
// ----------------------------------
// controller
// model 
// db-> table
// module.exports = (app) => {}; ==> bulk exporting
// exports.<func> = () => {}; ==> selective exporting

// create and save a tutorial
exports.create = (req, res) => {
  res.send('POST > create response from controller.');
};

// retrieve all tutorials
exports.findAll = (req, res) => { // http://localhost:8000/api/tutorials/
  res.send('GET ALL Request Received.');
};

// retrieve a single tutorial 
exports.findOne = (req, res) => { // http://localhost:8000/api/tutorials/{id}
  res.send('GET ONE Request Received.');
};

// update a tutorial
exports.update = (req, res) => { // http://localhost:8000/api/tutorials/{id}
  res.send('UPDATE ONE Request Received.');
};

// delete all tutorials
exports.deleteAll = (req, res) => { // http://localhost:8000/api/tutorials/
  res.send('DELETE ALL Request Received.');
};

// delete a single tutorial
exports.deleteOne = (req, res) => { // http://localhost:8000/api/tutorials/{id}
  res.send('DELETE ONE Request Received.');
};