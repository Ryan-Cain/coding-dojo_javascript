import "./App.css";
import SearchForm from "./components/SearchForm";
import DisplayPerson from "./components/DisplayPerson";
import DisplayPlace from "./components/DisplayPlace";
import { Route, Routes } from "react-router-dom";
import { useState } from "react";

function App() {
	const [searchResults, setSearchResults] = useState([]);

	return (
		<div className="App">
			<Routes>
				<Route path="/people" element={<DisplayPerson />} />
				<Route path="/place" element={<DisplayPlace />} />
			</Routes>
		</div>
	);
}

export default App;
