import "./App.css";
import { Routes, Route, Navigate } from "react-router-dom";
import ShowAllAuthors from "./components/ShowAllAuthors";
import CreateAuthorForm from "./components/CreateAuthorForm";
import EditAuthorForm from "./components/EditAuthorForm";

function App() {
	return (
		<div className="App">
			<h1>Favorite Authors</h1>
			<Routes>
				<Route path="/" element={<Navigate to="/authors" />} />
				<Route path="*" element={<Navigate to="/authors" />} />
				<Route path="/authors" element={<ShowAllAuthors />} />
				<Route path="/authors/new" element={<CreateAuthorForm />} />
				<Route path="/authors/:id" element={<EditAuthorForm />} />
			</Routes>
		</div>
	);
}

export default App;
