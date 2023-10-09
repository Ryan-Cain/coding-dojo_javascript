import "./App.css";
import SearchForm from "./components/SearchForm";
import DisplayPerson from "./components/DisplayPerson";
import DisplayPlace from "./components/DisplayPlace";
import { Route, Routes } from "react-router-dom";

function App() {
	return (
		<div className="App">
			<SearchForm />
			<Routes>
				<Route path="/" element={<SearchForm />} />
				<Route path="/people/:id" element={<DisplayPerson />} />
				<Route path="/planets/:id" element={<DisplayPlace />} />
			</Routes>
		</div>
	);
}

export default App;
