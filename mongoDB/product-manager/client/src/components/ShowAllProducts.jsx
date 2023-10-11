import axios from "axios";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import ProductForm from "./ProductForm";
import DeleteBtn from "./DeleteBtn";

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

	const product = {
		title: "",
		price: "",
		description: "",
	};

	const apiCreateReq = (productObject) => {
		axios
			.post("http://localhost:8000/api/products", productObject)
			.then((res) => {
				console.log(res);
			})
			.catch((err) => console.log(err));
	};

	return (
		<div className="products">
			<ProductForm
				product={product}
				apiReq={apiCreateReq}
				buttonTxt={"Create"}
			/>
			<h2>All Products</h2>
			{products &&
				products.map((product, idx) => {
					return (
						<div key={idx} className="product-item">
							<Link to={"/products/" + product._id}>
								{product.title}
							</Link>
							<DeleteBtn
								callbackFn={deleteProduct}
								id={product._id}
							/>
						</div>
					);
				})}
		</div>
	);
};

export default ShowAllProducts;
