import React from "react";

const ListDisplay = ({ todoList, changeStatus, deleteTodo }) => {
	return (
		<ul>
			{/* map over todo list and create a li for each */}
			{todoList.map((todo, idx) => {
				return (
					<li key={idx}>
						<input
							onChange={() => changeStatus(idx)}
							type="checkbox"
							checked={todo.checked}
						/>
						<p
							// if todo is checked then add line-through styling
							style={
								todo.checked
									? {
											textDecoration: "line-through",
											textDecorationThickness: "2px",
									  }
									: null
							}
						>
							{todo.content}
						</p>
						<button onClick={() => deleteTodo(idx)}>Delete</button>
					</li>
				);
			})}
		</ul>
	);
};

export default ListDisplay;
