import "./App.css";
import { useState } from "react";
import ProductForm from "./components/ProductForm";
import { Routes, Route } from "react-router-dom";
import ShowAllProducts from "./components/ShowAllProducts";
import ShowOneProduct from "./components/ShowOneProduct";

function App() {
	return (
		<div className="App">
			<ProductForm />
			<Routes>
				<Route path="/products" element={<ShowAllProducts />} />
				<Route path="/products/:id" element={<ShowOneProduct />} />
			</Routes>
		</div>
	);
}

export default App;
