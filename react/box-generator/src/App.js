import { useState } from "react";
import "./App.css";
import BoxMaker from "./components/BoxMaker";
import BoxDisplay from "./components/BoxDisplay";

const App = () => {
	const [boxes, setBoxes] = useState([]);
	const boxers = (newBox) => {
		setBoxes([...boxes, newBox]);
	};
	return (
		<>
			<BoxMaker boxers={boxers} />
			<BoxDisplay boxes={boxes} />
		</>
	);
};

export default App;
