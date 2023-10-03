import { useEffect, useState } from "react";

const AddTodo = ({ addTodoItem, todoList, clearCompleted }) => {
	let persistedListName = JSON.parse(
		//grab persisted name from local storage
		localStorage.getItem("persistedListName")
	);
	if (!persistedListName) {
		// if there is no persisted name then give it a default
		persistedListName = "Todo List";
	}

	const [todoItem, setTodoItem] = useState("");
	const [changeName, setChangeName] = useState(false);
	const [listName, setListName] = useState(persistedListName);
	const [editName, setEditName] = useState(listName);

	const handleSubmit = (e) => {
		e.preventDefault();
		if (todoItem.length > 0) {
			addTodoItem(todoItem);
			setTodoItem("");
		}
	};

	const clearBtnClick = (e) => {
		e.preventDefault();
		console.log("clear");
		clearCompleted();
	};

	const changeListName = (e) => {
		e.preventDefault();
		console.log("change name");
		if (editName.length > 0) {
			setListName(editName);
		}
		setChangeName(false);
	};

	useEffect(() => {
		localStorage.setItem("persistedListName", JSON.stringify(listName));
	}, [listName]);

	return (
		<form onSubmit={handleSubmit}>
			<div>
				<i
					onClick={(e) => {
						changeListName(e);
						setChangeName(!changeName);
					}}
					className="fa-solid fa-pen"
				></i>
				{changeName ? (
					<>
						<input
							className="list-name-input"
							autoFocus
							value={editName}
							onChange={(e) => setEditName(e.target.value)}
							// onBlur={() => {
							// 	setChangeName(false);
							// 	setEditName(listName);
							// }}
						/>
						<button onClick={changeListName}>
							Change List Name
						</button>
					</>
				) : (
					<p className="list-name">{listName}</p>
				)}
				{todoList.length > 0 && (
					<p>
						{todoList.length}{" "}
						{todoList.length > 1 ? "Items" : "Item"}
					</p>
				)}
			</div>
			<input
				value={todoItem}
				onChange={(e) => setTodoItem(e.target.value)}
			/>
			<button>Add Todo</button>
			<button onClick={clearBtnClick}>Clear Completed</button>
		</form>
	);
};

export default AddTodo;
