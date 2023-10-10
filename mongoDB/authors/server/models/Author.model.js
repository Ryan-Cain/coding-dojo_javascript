// import mongoose to build schema
const mongoose = require("mongoose");

const AuthorSchema = new mongoose.Schema(
	{
		name: {
			type: String,
			required: [true, "Must enter a name for your author"],
			minLength: [3, "The name must be at least 3 char long"],
		},
	},
	{ timestamps: true }
);

const Author = mongoose.model("Author", AuthorSchema);

module.exports = Author;
