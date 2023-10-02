import "./App.css";
import Tabs from "./components/Tabs";

function App() {
	const tabs = [
		"This is tab 1 content",
		"This is tab 2 content",
		"This is tab 3 content",
		"This is tab 4 content",
	];
	return (
		<div className="App">
			<Tabs tabs={tabs} />
		</div>
	);
}

export default App;
