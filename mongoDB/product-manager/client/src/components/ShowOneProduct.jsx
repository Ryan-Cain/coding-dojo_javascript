import { useState, useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import axios from "axios";

const ShowOneProduct = () => {
	const { id } = useParams();
	const [product, setProduct] = useState(null);
	const navigate = useNavigate();

	useEffect(() => {
		axios
			.get("http://localhost:8000/api/products/" + id)
			.then((res) => setProduct(res.data))
			.catch((err) => console.log(err));
	}, []);

	const deleteProduct = () => {
		axios
			.delete("http://localhost:8000/api/products/" + id)
			.then((res) => {
				navigate("/");
			})
			.catch((err) => console.log(err));
	};

	return product ? (
		<div className="product">
			<Link className="link" to="/">
				<p>All Products</p>
			</Link>
			<h1>{product.title}</h1>
			<p>${product.price}</p>
			<p>{product.description}</p>
			<div className="links">
				<Link to={"/" + id + "/edit"}>
					<button>Edit</button>
				</Link>
				<button onClick={deleteProduct}>Delete</button>
			</div>
		</div>
	) : null;
};

export default ShowOneProduct;
