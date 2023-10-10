import "./App.css";
import { Routes, Route } from "react-router-dom";
import ShowAllProducts from "./components/ShowAllProducts";
import ShowOneProduct from "./components/ShowOneProduct";
import EditOneProduct from "./components/EditOneProduct";

function App() {
	return (
		<div className="App">
			<Routes>
				<Route path="/" element={<ShowAllProducts />} />
				<Route path="/products" element={<ShowAllProducts />} />
				<Route path="/products/:id" element={<ShowOneProduct />} />
				<Route path="/:id/edit" element={<EditOneProduct />} />
			</Routes>
		</div>
	);
}

export default App;
