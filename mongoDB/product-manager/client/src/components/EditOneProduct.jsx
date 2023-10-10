import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";
import EditProductForm from "./EditProductForm";

const EditOneProduct = () => {
	const { id } = useParams();
	const [product, setProduct] = useState(null);

	useEffect(() => {
		axios
			.get("http://localhost:8000/api/products/" + id)
			.then((res) => setProduct(res.data))
			.catch((err) => console.log(err));
	}, []);

	return product ? (
		<div className="product">
			<Link to="/" className="link">
				<p>All Products</p>
			</Link>
			<EditProductForm product={product} />
			<h1>{product.title}</h1>
			<p>${product.price}</p>
			<p>{product.description}</p>
		</div>
	) : null;
};

export default EditOneProduct;
