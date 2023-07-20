// load environment variables
if (process.env.NODE_ENV !== 'production') require('dotenv').config();

// entry point
const express = require(`express`);
const cors = require('cors');

const app = express();
const corsOptions = {
  origin: ['http://localhost:3000', '*']
};

// configure server
app.use(cors(corsOptions));
app.use(express.json());
app.use(express.urlencoded());

// connect db
const db = require('./models');
db.sequelize.sync().then(() => {
  console.log(`Synced db.`);
}).catch(error => {
  console.error(`Encounered an error during db sync, error: ${error}`);
});

// routes
require(`./routes/products.routes`)(app);
require(`./routes/productCategories.routes`)(app);
require(`./routes/customers.routes`)(app);
require(`./routes/customerOrders.routes`)(app);

const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
    console.log(`Server is currently running on port ${PORT}`);
})
