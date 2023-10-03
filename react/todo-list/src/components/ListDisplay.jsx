import React from "react";

const ListDisplay = ({ todoList, changeStatus, deleteTodo }) => {
	return (
		<ul>
			{todoList.map((todo, idx) => {
				return (
					<li key={idx}>
						<input
							onChange={() => changeStatus(idx)}
							type="checkbox"
						/>
						<p
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
