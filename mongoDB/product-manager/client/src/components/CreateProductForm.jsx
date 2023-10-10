import { useState } from "react";
import axios from "axios";

const CreateProductForm = () => {
	const [title, setTitle] = useState("");
	const [price, setPrice] = useState("");
	const [description, setDescription] = useState("");

	const handleSubmit = (e) => {
		e.preventDefault();
		console.log("submitted");
		const productObject = {
			title,
			price,
			description,
		};
		axios
			.post("http://localhost:8000/api/products", productObject)
			.then((res) => {
				console.log(res);
			})
			.catch((err) => console.log(err));
		setTitle("");
		setPrice("");
		setDescription("");
	};

	return (
		<form onSubmit={handleSubmit}>
			<h1>Product Manager</h1>
			<div>
				<label>Title</label>
				<input
					value={title}
					onChange={(e) => setTitle(e.target.value)}
				/>
			</div>
			<div>
				<label>Price</label>
				<input
					value={price}
					onChange={(e) => setPrice(e.target.value)}
					type="number"
				/>
			</div>
			<div>
				<label>Description</label>
				<input
					value={description}
					onChange={(e) => setDescription(e.target.value)}
				/>
			</div>
			<button>Create</button>
		</form>
	);
};

export default CreateProductForm;
