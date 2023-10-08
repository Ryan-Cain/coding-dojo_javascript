const express = require("express");
const app = express();

// middleware
app.use(express.json(), express.urlencoded({ extended: true }));

// load env variables
require("dotenv").config();
const port = process.env.PORT;

// import the db connection file
require("./config/mongoose.config.js");

// require the routes to run
const jokeRoutes = require("./routes/movie.routes.js");
jokeRoutes(app);

app.listen(port, () => console.log(`Listening on port: ${port}`));
