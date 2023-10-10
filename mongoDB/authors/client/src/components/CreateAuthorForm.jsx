import { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const CreateAuthorForm = ({ changeRender }) => {
	const [title, setTitle] = useState("");
	const [price, setPrice] = useState("");
	const [description, setDescription] = useState("");

	const handleSubmit = (e) => {
		e.preventDefault();
		console.log("submitted");
		const authorObject = {
			title,
			price,
			description,
		};
		axios
			.post("http://localhost:8000/api/authors", authorObject)
			.then((res) => {
				console.log(res);
				changeRender();
			})
			.catch((err) => console.log(err));
		setTitle("");
		setPrice("");
		setDescription("");
	};

	return (
		<>
			<Link to="/authors">Home</Link>
			<h5>Add a new author:</h5>
			<form onSubmit={handleSubmit}>
				<label>Title:</label>
				<br />
				<input
					value={title}
					onChange={(e) => setTitle(e.target.value)}
				/>
				<div className="buttons">
					<button>Cancel</button>
					<button>Submit</button>
				</div>
			</form>
		</>
	);
};

export default CreateAuthorForm;
