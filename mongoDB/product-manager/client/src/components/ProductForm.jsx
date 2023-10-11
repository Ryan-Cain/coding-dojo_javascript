import { useState } from "react";
import { useNavigate } from "react-router-dom";

const ProductForm = ({ product, apiReq, buttonTxt }) => {
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
		apiReq(productObject, navigate, product._id);
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
			<button>{buttonTxt}</button>
		</form>
	);
};

export default ProductForm;
