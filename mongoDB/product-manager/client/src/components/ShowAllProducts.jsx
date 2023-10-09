import axios from "axios";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const ShowAllProducts = () => {
	const [products, setProducts] = useState(null);

	useEffect(() => {
		axios
			.get("http://localhost:8000/api/products")
			.then((res) => setProducts(res.data))
			.catch((err) => console.log(err));
	}, []);

	return (
		<div className="products">
			<h2>All Products</h2>
			{JSON.stringify(products)};{console.log(products)};
			{products &&
				products.map((product) => {
					return (
						<Link to={"/products/" + product._id}>
							{product.title}
						</Link>
					);
				})}
		</div>
	);
};

export default ShowAllProducts;
