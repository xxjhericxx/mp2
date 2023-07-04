// load environment variables
if (process.env.NODE_ENV !== 'production') require('dotenv').config();

// entry point
const express = require('express');
const app = express();

// configure server
app.use(express.json());
app.use(express.urlencoded());

// direct routes
app.get('/hello', (req, res) => {
  res.send('Hello World!');
});

app.get('/hello-hello', (req, res) => {
  res.send('<h1>Hello Lean</h1>');
});

// db conn
const db = require('./models');  // ./models/index // ./models/index.js
db.sequelize.sync().then(() => {
  console.log(`Synced db.`);
}).catch(error => {
  console.error(`Encounered an error during db sync, error: ${error}`);
});

// routes
require('./routes/tutorial.routes')(app);
require('./routes/comment.routes')(app);

const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
  console.log(`Server is currently running on port ${PORT}`);
});