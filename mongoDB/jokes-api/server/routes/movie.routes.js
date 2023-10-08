const JokeController = require("../controllers/joke.controller");
const Joke = require("../models/Joke.model");

module.exports = (app) => {
	app.get("/api/jokes", JokeController.readAll);
	app.get("/api/jokes/:id", JokeController.readOne);
	app.post("/api/jokes", JokeController.create);
	app.patch("/api/jokes/:id", JokeController.update);
	app.delete("/api/jokes/:id", JokeController.delete);
};
