import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const ShowOneProduct = () => {
	const { id } = useParams();
	const [product, setProduct] = useState(null);

	useEffect(() => {
		axios
			.get("http://localhost:8000/api/products/" + id)
			.then((res) => setProduct(res.data))
			.catch((err) => console.log(err));
	}, []);

	return product ? (
		<div>
			<p>{product.title}</p>
			<p>${product.price}</p>
			<p>{product.description}</p>
		</div>
	) : null;
};

export default ShowOneProduct;
