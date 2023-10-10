import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const EditProductForm = ({ product }) => {
	const [title, setTitle] = useState(product.title);
	const [price, setPrice] = useState(product.price);
	const [description, setDescription] = useState(product.description);
	const navigate = useNavigate();

	const handleSubmit = (e) => {
		e.preventDefault();
		console.log("submitted");
		const productObject = {
			title,
			price,
			description,
		};
		axios
			.patch(
				"http://localhost:8000/api/" + product._id + "/edit",
				productObject
			)
			.then((res) => {
				navigate("/");
			})
			.catch((err) => console.log(err));
		setTitle("");
		setPrice("");
		setDescription("");
	};

	return (
		<form onSubmit={handleSubmit}>
			{/* {JSON.stringify(product)} */}
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
			<button>Save Edit</button>
		</form>
	);
};

export default EditProductForm;
