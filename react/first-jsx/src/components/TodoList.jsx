import React from "react";

const TodoList = () => {
	const todoList = [
		"Learn React",
		"Climb Mt.Everest",
		"Run a marathon",
		"Feed the dogs",
	];
	return (
		<ul>
			{todoList.map((todo, index) => (
				<li key={index}>{todo}</li>
			))}
		</ul>
	);
};

export default TodoList;
