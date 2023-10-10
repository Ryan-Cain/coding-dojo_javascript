// import the author model
const Author = require("../models/Author.model");

// READ ALL
module.exports.readAll = (req, res) => {
	Author.find()
		.then((allAuthors) => res.json(allAuthors))
		.catch((err) => res.status(400).json(err));
};

// READ ONE
module.exports.readOne = (req, res) => {
	Author.findOne({ _id: req.params.id })
		.then((oneAuthor) => {
			res.json(oneAuthor);
		})
		.catch((err) => {
			res.status(400).json(err);
		});
};

// CREATE
module.exports.create = (req, res) => {
	Author.create(req.body)
		.then((newAuthor) => {
			res.json(newAuthor);
		})
		.catch((err) => {
			res.status(400).json(err);
		});
};

// UPDATE
module.exports.update = (req, res) => {
	Author.findOneAndUpdate({ _id: req.params.id }, req.body, {
		new: true,
		runValidators: true,
	})
		.then((updatedAuthor) => {
			res.json(updatedAuthor);
		})
		.catch((err) => {
			res.status(400).json(err);
		});
};

// DELETE
module.exports.delete = (req, res) => {
	Author.deleteOne({ _id: req.params.id })
		.then((result) => {
			res.json({ result: result });
		})
		.catch((err) => {
			res.status(400).json(err);
		});
};
