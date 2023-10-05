import { useEffect, useState } from "react";

const AddTodo = ({ addTodoItem, todoList, clearCompleted }) => {
	//grab persisted name from local storage
	let persistedListName = JSON.parse(
		localStorage.getItem("persistedListName")
	);
	// if there is no persisted name then give it a default
	if (!persistedListName) {
		persistedListName = "Todo List";
	}

	const [todoItem, setTodoItem] = useState("");
	const [changeName, setChangeName] = useState(false);
	const [listName, setListName] = useState(persistedListName);
	const [editName, setEditName] = useState(listName);

	// on submit check todo length and lift state to App if the input is not empty
	const handleSubmit = (e) => {
		e.preventDefault();
		if (todoItem.length > 0) {
			addTodoItem(todoItem);
			setTodoItem("");
		}
	};

	// calls the function to clear completed todos
	const clearBtnClick = (e) => {
		e.preventDefault();
		console.log("clear");
		clearCompleted();
	};

	// if new list name input is not empty change listName in state, then set changeName to false to remove input
	const changeListName = (e) => {
		e.preventDefault();
		console.log("change name");
		if (editName.length > 0) {
			setListName(editName);
		}
		setChangeName(false);
	};

	// if listName state changes then update state in local storage
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
