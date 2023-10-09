const express = require("express");
const cors = require("cors");
const app = express();

// middleware
app.use(express.json(), express.urlencoded({ extended: true }), cors());

// load env variables
require("dotenv").config();
const port = process.env.PORT;

// import the db connection file
require("./config/mongoose.config.js");

// require the routes to run
const productRoutes = require("./routes/product.route.js");
productRoutes(app);

app.listen(port, () => console.log(`Listening on port: ${port}`));
