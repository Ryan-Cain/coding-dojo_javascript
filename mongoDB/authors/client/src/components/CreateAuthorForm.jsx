import { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

const CreateAuthorForm = () => {
	const [author, setAuthor] = useState("");
	const [errors, setErrors] = useState([]);
	const navigate = useNavigate();

	const handleSubmit = (e) => {
		e.preventDefault();
		const authorObj = {
			name: author,
		};
		axios
			.post("http://localhost:8000/api/authors", authorObj)
			.then((res) => {
				console.log(res);
				navigate("/");
			})
			.catch((err) => {
				const errorResponse = err.response.data.errors;
				const errorArr = [];
				for (const key of Object.keys(errorResponse)) {
					errorArr.push(errorResponse[key].message);
				}
				setErrors(errorArr);
			});
		setAuthor("");
	};

	return (
		<>
			<Link to="/authors">Home</Link>
			<h5>Add a new author:</h5>
			<form onSubmit={handleSubmit}>
				{errors && <p>{errors}</p>}
				<label>Name:</label>
				<input
					value={author}
					onChange={(e) => setAuthor(e.target.value)}
				/>
				<div className="buttons">
					<button onClick={() => navigate("/")}>Cancel</button>
					<button>Submit</button>
				</div>
			</form>
		</>
	);
};

export default CreateAuthorForm;
