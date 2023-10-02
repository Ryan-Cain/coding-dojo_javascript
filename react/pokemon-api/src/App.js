import "./App.css";
import { useState } from "react";

function App() {
	const [pokemon, setPokemon] = useState([]);

	const fetchPokemon = () => {
		fetch("https://pokeapi.co/api/v2/pokemon?limit=807")
			.then((pokemonObj) => {
				return pokemonObj.json();
			})
			.then((pokemonObj) => {
				setPokemon(pokemonObj.results);
				console.log(pokemonObj);
			})
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
