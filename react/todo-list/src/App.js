import "./App.css";
import AddTodo from "./components/AddTodo";
import ListDisplay from "./components/ListDisplay";
import { useEffect, useState } from "react";

function App() {
	let storedItems = JSON.parse(localStorage.getItem("todoList"));
	if (!storedItems) {
		storedItems = [];
	}

	const [todoList, setTodoList] = useState(storedItems);

	const addTodoItem = (todo) => {
		let todoItem = {
			content: todo,
			checked: false,
		};
		setTodoList([...todoList, todoItem]);
	};

	const changeTodoStatus = (updateIdx) => {
		console.log("update", updateIdx);
		const todoListCopy = [...todoList];
		todoListCopy[updateIdx].checked = !todoListCopy[updateIdx].checked;
		setTodoList(todoListCopy);
	};
	const deleteTodo = (deleteIdx) => {
		console.log("delete", deleteIdx);
		const todoListCopy = [
			...todoList.slice(0, deleteIdx),
			...todoList.slice(deleteIdx + 1),
		];
		setTodoList(todoListCopy);
	};

	const clearCompleted = () => {
		// this isnt working properly
		const filteredList = [...todoList].filter((todo) => !todo.checked);
		setTodoList(filteredList);
	};

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
