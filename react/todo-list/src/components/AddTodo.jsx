import { useState } from "react";

const AddTodo = ({ addTodoItem }) => {
	const [todoItem, setTodoItem] = useState("");

	const handleSubmit = (e) => {
		e.preventDefault();
		addTodoItem(todoItem);
		setTodoItem("");
	};

	return (
		<form onSubmit={handleSubmit}>
			<input
				value={todoItem}
				onChange={(e) => setTodoItem(e.target.value)}
			/>
			<button>Add Todo</button>
		</form>
	);
};

export default AddTodo;
