// entry point
const express = require(`express`);

const app = express();

// configure server
app.use(express.json());
app.use(express.urlencoded());

// routes


const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
    console.log(`Server is currrently running on port ${PORT}`);
})
