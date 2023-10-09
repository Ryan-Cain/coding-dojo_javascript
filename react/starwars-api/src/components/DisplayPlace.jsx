import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const DisplayPlace = () => {
	const [results, setResults] = useState(null);
	const { id } = useParams();

	useEffect(() => {
		axios
			.get("https://swapi.dev/api/planets/" + id)
			.then((res) => setResults(res.data))
			.catch((err) => console.log(err));
	}, [id]);
	return (
		<>
			{results ? (
				<div>
					<h1>{results.name}</h1>
					<p>
						<span>Climate: </span>
						{results.climate}
					</p>
					<p>
						<span>Terrain: </span>
						{results.terrain}
					</p>
					<p>
						<span>Surface Water: </span>
						{results.surface_water}
					</p>
					<p>
						<span>Population: </span>
						{results.population}
					</p>
				</div>
			) : (
				<img
					src="https://i.imgflip.com/5893et.jpg"
					alt="these are not the droids you are looking for"
				/>
			)}
		</>
	);
};

export default DisplayPlace;
