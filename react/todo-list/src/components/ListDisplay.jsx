import React from "react";

const ListDisplay = ({ todoList, changeStatus }) => {
	return (
		<ul>
			{todoList.map((todo, idx) => {
				return (
					<li
						style={
							todo.checked
								? { textDecoration: "line-through" }
								: null
						}
						key={idx}
					>
						<p onClick={() => changeStatus(idx)}>{todo.content}</p>
						<button>Delete</button>
					</li>
				);
			})}
		</ul>
	);
};

export default ListDisplay;
