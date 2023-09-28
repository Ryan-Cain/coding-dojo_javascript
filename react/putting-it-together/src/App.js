import "./App.css";
import PersonCard from "./PersonCard";

function App() {
	return (
		<div className="App">
			<PersonCard
				firstName={"Trew"}
				lastName={"Oliver"}
				age={23}
				hair={"brown"}
			/>
			<PersonCard
				firstName={"Ryan"}
				lastName={"Cain"}
				age={30}
				hair={"brown"}
			/>
			<PersonCard
				firstName={"Gary"}
				lastName={"Buckner JR"}
				age={30}
				hair={"brown"}
			/>
			<PersonCard
				firstName={"Ryan"}
				lastName={"Hooper"}
				age={30}
				hair={"brown"}
			/>
		</div>
	);
}

export default App;
