// import the product model
const Product = require("../models/Product.model");

// READ ALL
module.exports.readAll = (req, res) => {
	Product.find()
		.then((allProducts) => res.json(allProducts))
		.catch((err) => res.status(404).json(err));
};

// READ ONE
module.exports.readOne = (req, res) => {
	Product.findOne({ _id: req.params.id })
		.then((oneProduct) => {
			res.json(oneProduct);
		})
		.catch((err) => {
			res.status(404).json(err);
		});
};

// CREATE
module.exports.create = (req, res) => {
	Product.create(req.body)
		.then((newProduct) => {
			res.json(newProduct);
		})
		.catch((err) => {
			res.status(404).json(err);
		});
};

// UPDATE
module.exports.update = (req, res) => {
	Product.findOneAndUpdate({ _id: req.params.id }, req.body, {
		new: true,
		runValidators: true,
	})
		.then((updatedProduct) => {
			res.json(updatedProduct);
		})
		.catch((err) => {
			res.status(404).json(err);
		});
};

// DELETE
module.exports.delete = (req, res) => {
	Product.deleteOne({ _id: req.params.id })
		.then((result) => {
			res.json({ result: result });
		})
		.catch((err) => {
			res.status(404).json(err);
		});
};
