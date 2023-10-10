import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const EditAuthorForm = ({ author }) => {
	const [title, setTitle] = useState("");
	const navigate = useNavigate();

	const handleSubmit = (e) => {
		e.preventDefault();
		console.log("submitted");
		const authorObject = {
			title,
		};
		axios
			.patch(
				"http://localhost:8000/api/" + author._id + "/edit",
				authorObject
			)
			.then((res) => {
				navigate("/");
			})
			.catch((err) => console.log(err));
		setTitle("");
	};

	return (
		<form onSubmit={handleSubmit}>
			{/* {JSON.stringify(author)} */}
			<h1>Author Manager</h1>
			<div>
				<label>Title</label>
				<input
					value={title}
					onChange={(e) => setTitle(e.target.value)}
				/>
			</div>
			<button>Save Edit</button>
		</form>
	);
};

export default EditAuthorForm;
