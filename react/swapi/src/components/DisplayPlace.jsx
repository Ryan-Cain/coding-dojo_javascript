import React from "react";
import SearchForm from "./SearchForm";

const DisplayPlace = () => {
	return (
		<>
			<SearchForm />
			<div>
				<h1>Place</h1>
				<p>
					<span>Climate: </span>arid
				</p>
				<p>
					<span>Terrain: </span>77 kg
				</p>
				<p>
					<span>Surface Water: </span>blond
				</p>
				<p>
					<span>Population: </span>fair
				</p>
			</div>
		</>
	);
};

export default DisplayPlace;
