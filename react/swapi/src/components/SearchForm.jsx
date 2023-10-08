import { useState } from "react";

const SearchForm = () => {
	const [searchFor, setSearchFor] = useState("people");
	const [searchTerm, setSearchTerm] = useState("");

	const handleSubmit = (e) => {
		e.preventDefault();
		console.log("submitted!");
	};

	return (
		<form>
			<p>{JSON.stringify(searchFor)}</p>
			<p>{JSON.stringify(searchTerm)}</p>
			<label>Search for: </label>
			<select onChange={(e) => setSearchFor(e.target.value)}>
				<option value="people">people</option>
				<option value="places">places</option>
			</select>
			<label> ID: </label>
			<input
				type="number"
				value={searchTerm}
				onChange={(e) => setSearchTerm(e.target.value)}
			/>
			<button onSubmit={handleSubmit}>Search</button>
		</form>
	);
};

export default SearchForm;
