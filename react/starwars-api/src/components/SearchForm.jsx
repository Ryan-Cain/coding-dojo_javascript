import { useState } from "react";
import { useNavigate } from "react-router-dom";

const SearchForm = () => {
	const [searchFor, setSearchFor] = useState("people");
	const [searchID, setSearchID] = useState("");

	const navigate = useNavigate();

	const handleSubmit = (e) => {
		e.preventDefault();
		console.log("submitted!");
		// navigate("/" + searchFor);
		navigate(`/${searchFor}/${searchID}`);
	};

	return (
		<form onSubmit={handleSubmit}>
			<h1>STAR WARS API</h1>
			<label>Search for: </label>
			<select onChange={(e) => setSearchFor(e.target.value)}>
				<option value="people">people</option>
				<option value="planets">planets</option>
			</select>
			<label> ID: </label>
			<input
				type="number"
				value={searchID}
				onChange={(e) => setSearchID(e.target.value)}
			/>
			<button>Search</button>
		</form>
	);
};

export default SearchForm;
