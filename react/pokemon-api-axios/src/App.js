import "./App.css";
import { useState } from "react";
import axios from "axios";

function App() {
	const [pokemon, setPokemon] = useState([]);

	const fetchPokemon = () => {
		axios
			.get("https://pokeapi.co/api/v2/pokemon?limit=807")
			.then((response) => setPokemon(response.data.results))
			.catch((err) => console.log(err));
	};

	return (
		<div className="App">
			<h1>Pokemon API</h1>
			<button onClick={fetchPokemon}>Catch Pokemon</button>
			<br />
			{pokemon.map((poke, idx) => (
				<p key={idx}>{poke.name}</p>
			))}
		</div>
	);
}

export default App;
