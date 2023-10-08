import React from "react";
import SearchForm from "./SearchForm";

const DisplayPerson = () => {
	return (
		<>
			<SearchForm />
			<div>
				<h1>Name</h1>
				<p>
					<span>Height: </span>172 cm
				</p>
				<p>
					<span>Mass: </span>77 kg
				</p>
				<p>
					<span>Hair Color: </span>blond
				</p>
				<p>
					<span>Skin Color: </span>fair
				</p>
			</div>
		</>
	);
};

export default DisplayPerson;
