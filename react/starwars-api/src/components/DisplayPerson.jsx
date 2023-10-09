import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const DisplayPerson = () => {
	const [results, setResults] = useState(null);
	const { id } = useParams();

	useEffect(() => {
		axios
			.get("https://swapi.dev/api/people/" + id)
			.then((res) => setResults(res.data))
			.catch((err) => console.log(err));
	}, [id]);

	return (
		<>
			{results ? (
				<div>
					<h1>{results.name}</h1>
					<p>
						<span>Height: </span>
						{results.height} cm
					</p>
					<p>
						<span>Mass: </span>
						{results.mass} kg
					</p>
					<p>
						<span>Hair Color: </span>
						{results.hair_color}
					</p>
					<p>
						<span>Skin Color: </span>
						{results.skin_color}
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

export default DisplayPerson;
