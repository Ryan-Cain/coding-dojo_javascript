import axios from "axios";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import CreateProductForm from "./CreateProductForm";

const ShowAllProducts = () => {
	const [products, setProducts] = useState(null);

	useEffect(() => {
		axios
			.get("http://localhost:8000/api/products")
			.then((res) => setProducts(res.data))
			.catch((err) => console.log(err));
	}, []);

	const deleteProduct = (id) => {
		axios
			.delete("http://localhost:8000/api/products/" + id)
			.then((res) => {
				const newProducts = products.filter(
					(product) => product._id !== id
				);
				setProducts(newProducts);
			})
			.catch((err) => console.log(err));
	};

	return (
		<div className="products">
			<CreateProductForm />
			<h2>All Products</h2>
			{products &&
				products.map((product, idx) => {
					return (
						<div className="product-item">
							<Link key={idx} to={"/products/" + product._id}>
								{product.title}
							</Link>
							<button onClick={() => deleteProduct(product._id)}>
								Delete
							</button>
						</div>
					);
				})}
		</div>
	);
};

export default ShowAllProducts;
