import "./App.css";
import TodoList from "./components/TodoList";
import Header from "./components/Header";

function App() {
	return (
		<div className="App">
			<Header />
			<h2>Things I need to do:</h2>
			<TodoList />
		</div>
	);
}

export default App;
