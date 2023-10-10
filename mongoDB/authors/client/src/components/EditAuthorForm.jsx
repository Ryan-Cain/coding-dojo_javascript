import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, Link, useParams } from "react-router-dom";

const EditAuthorForm = () => {
	const [author, setAuthor] = useState("");
	const [errors, setErrors] = useState([]);
	const navigate = useNavigate();
	const { id } = useParams();

	useEffect(() => {
		axios
			.get("http://localhost:8000/api/authors/" + id)
			.then((res) => {
				setAuthor(res.data.name);
				// navigate("/client");
			})
			.catch((err) => {
				console.log(err);
			});
	}, []);

	const handleSubmit = (e) => {
		e.preventDefault();
		const authorObject = {
			name: author,
		};

		axios
			.patch("http://localhost:8000/api/" + id + "/edit", authorObject)
			.then((res) => {
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
			<Link to="/">Home</Link>
			<h5>Edit this author</h5>
			<form onSubmit={handleSubmit}>
				{errors && <p>{errors}</p>}
				<label>Name</label>
				<input
					value={author}
					onChange={(e) => setAuthor(e.target.value)}
				/>
				<div>
					<button onClick={() => navigate("/")}>Cancel</button>
					<button>Submit</button>
				</div>
			</form>
		</>
	);
};

export default EditAuthorForm;
