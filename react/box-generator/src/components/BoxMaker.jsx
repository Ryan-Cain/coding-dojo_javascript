import { useState } from "react";

const BoxMaker = ({ boxers }) => {
	const [color, setColor] = useState("");
	const [size, setSize] = useState("");

	const formHandler = (e) => {
		e.preventDefault();
		let box = {
			color: color,
			size: size,
		};
		boxers(box);
		setColor("");
		setSize("");
	};

	return (
		<div className="box-maker">
			<fieldset>
				<legend>Box Maker</legend>
				<form onSubmit={formHandler}>
					<label>Color</label>
					<input
						value={color}
						onChange={(e) => setColor(e.target.value)}
					/>
					<label>Size</label>
					<input
						value={size}
						onChange={(e) => setSize(e.target.value)}
					/>
					<button>Add</button>
				</form>
			</fieldset>
		</div>
	);
};

export default BoxMaker;
