// import mongoose to build schema
const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema(
	{
		title: {
			type: String,
			required: [true, "Must enter a title for your product"],
			minLength: [3, "The setup must be at least 3 char long"],
		},
		price: {
			type: Number,
			required: [true, "Must enter a price for your product"],
			min: [1, "The price must be greater than 1 dollar"],
		},
		description: {
			type: String,
			required: [true, "Must enter a description for product"],
			minLength: [10, "The description must be at least 10 char long"],
		},
	},
	{ timestamps: true }
);

const Product = mongoose.model("Product", ProductSchema);

module.exports = Product;
