import "./App.css";
import AddTodo from "./components/AddTodo";
import ListDisplay from "./components/ListDisplay";
import { useEffect, useState } from "react";

function App() {
	// checks for state in local storage, if no state there then make state default to an empty array
	let storedItems = JSON.parse(localStorage.getItem("todoList"));
	if (!storedItems) {
		storedItems = [];
	}
	const [todoList, setTodoList] = useState(storedItems);

	// constructs a new todo item, then adds it to state
	const addTodoItem = (todo) => {
		let todoItem = {
			content: todo,
			checked: false,
		};
		setTodoList([...todoList, todoItem]);
	};

	// find todo by item by its index and change its checked status
	const changeTodoStatus = (updateIdx) => {
		const todoListCopy = [...todoList];
		todoListCopy[updateIdx].checked = !todoListCopy[updateIdx].checked;
		setTodoList(todoListCopy);
	};

	// finds a todo item by its index and deletes it
	const deleteTodo = (deleteIdx) => {
		const todoListCopy = [
			...todoList.slice(0, deleteIdx),
			...todoList.slice(deleteIdx + 1),
		];
		setTodoList(todoListCopy);
	};

	// filters through todo list to only keep todos that are unchecked
	const clearCompleted = () => {
		// this isnt working properly (the checked items are removed, but some items left have there checkboxes as checked)
		const filteredList = [...todoList].filter((todo) => !todo.checked);
		setTodoList(filteredList);
	};

	// on todoList state change, update local storage with the new state
	useEffect(() => {
		localStorage.setItem("todoList", JSON.stringify(todoList));
	}, [todoList]);

	return (
		<div className="App">
			<AddTodo
				addTodoItem={addTodoItem}
				todoList={todoList}
				clearCompleted={clearCompleted}
			/>
			<ListDisplay
				deleteTodo={deleteTodo}
				changeStatus={changeTodoStatus}
				todoList={todoList}
			/>
		</div>
	);
}

export default App;
