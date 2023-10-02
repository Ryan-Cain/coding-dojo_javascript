import { useState } from "react";

const BoxMaker = ({ boxers }) => {
	const [color, setColor] = useState("");
	const [size, setSize] = useState("");

	// const formHandler = (e) => {
	// 	e.preventDefault();
	// 	boxers(e.target[0].value);
	// 	e.target[0].value = "";
	// };
	const formHandler = (e) => {
		e.preventDefault();
		boxers();
		e.target[0].value = "";
	};

	return (
		<div className="box-maker">
			<fieldset>
				<legend>Box Maker</legend>
				<form onSubmit={formHandler}>
					<label>Color</label>
					<input />
					<input />
					<button>Add</button>
				</form>
			</fieldset>
		</div>
	);
};

export default BoxMaker;
