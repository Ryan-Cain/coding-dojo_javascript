// import mongoose to build schema
const mongoose = require("mongoose");

const JokeSchema = new mongoose.Schema(
	{
		setup: {
			type: String,
			required: [true, "Must enter a setup for your joke"],
			minLength: [10, "The setup must be at least 10 char long"],
		},
		punchline: {
			type: String,
			required: [true, "It's not a joke if doesnt have a punchline!"],
			minLength: [2, "The punchline must be at least 2 char long"],
		},
	},
	{ timestamps: true }
);

const Joke = mongoose.model("Joke", JokeSchema);

module.exports = Joke;
