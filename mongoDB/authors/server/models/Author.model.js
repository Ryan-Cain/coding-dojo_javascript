// import mongoose to build schema
const mongoose = require("mongoose");

const AuthorSchema = new mongoose.Schema(
	{
		title: {
			type: String,
			required: [true, "Must enter a title for your author"],
			minLength: [3, "The setup must be at least 3 char long"],
		},
		price: {
			type: Number,
			required: [true, "Must enter a price for your author"],
			min: [1, "The price must be greater than 1 dollar"],
		},
		description: {
			type: String,
			required: [true, "Must enter a description for author"],
			minLength: [5, "The description must be at least 5 char long"],
		},
	},
	{ timestamps: true }
);

const Author = mongoose.model("Author", AuthorSchema);

module.exports = Author;
