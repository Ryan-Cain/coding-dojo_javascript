import "./App.css";
import AddTodo from "./components/AddTodo";
import ListDisplay from "./components/ListDisplay";
import { useState } from "react";

function App() {
	const [todoList, setTodoList] = useState([
		{ content: "create todo list", checked: false },
		{ content: "hang out with fam", checked: true },
	]);

	const addTodoItem = (todo) => {
		let todoItem = {
			content: todo,
			checked: false,
		};
		setTodoList([...todoList, todoItem]);
	};
	const changeTodoStatus = (updateIdx) => {
		console.log("update", updateIdx);
		//copy state
		const todoListCopy = [...todoList];
		todoListCopy[updateIdx].checked = !todoListCopy[updateIdx].checked;
		setTodoList(todoListCopy);
	};
	const deleteTodo = (deleteIdx) => {
		console.log("delete", deleteIdx);
		//copy state
		const todoListCopy = [...todoList];
		todoListCopy[deleteIdx].checked = !todoListCopy[deleteIdx].checked;
		setTodoList(todoListCopy);
	};

	return (
		<div className="App">
			<AddTodo addTodoItem={addTodoItem} />
			<ListDisplay changeStatus={changeTodoStatus} todoList={todoList} />
		</div>
	);
}

export default App;
