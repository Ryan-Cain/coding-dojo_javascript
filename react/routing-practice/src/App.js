import "./App.css";
import { Routes, Route } from "react-router-dom";
import DisplayInput from "./DisplayInput";
import DisplayColoredInput from "./DisplayColoredInput";

function App() {
	return (
		<div className="App">
			<Routes>
				<Route path="/home" element={<h2>Welcome</h2>} />
				<Route path="/:input" element={<DisplayInput />} />
				<Route
					path="/:input/:textColor/:bgColor"
					element={<DisplayColoredInput />}
				/>
			</Routes>
		</div>
	);
}

export default App;
