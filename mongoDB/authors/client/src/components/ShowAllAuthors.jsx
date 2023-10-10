import axios from "axios";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const ShowAllAuthors = () => {
	const [authors, setAuthors] = useState(null);

	useEffect(() => {
		axios
			.get("http://localhost:8000/api/authors")
			.then((res) => setAuthors(res.data))
			.catch((err) => console.log(err));
	}, []);

	const deleteAuthor = (id) => {
		axios
			.delete("http://localhost:8000/api/authors/" + id)
			.then((res) => {
				const newAuthors = authors.filter(
					(author) => author._id !== id
				);
				setAuthors(newAuthors);
			})
			.catch((err) => console.log(err));
	};

	return (
		<div className="authors">
			<Link to="/authors/new">Add an author</Link>
			<h3>We have quotes by:</h3>
			<table className="table">
				<thead>
					<tr>
						<th>Author</th>
						<th>Actions available</th>
					</tr>
				</thead>
				<tbody>
					<tr>
						<td>Bill</td>
						<td>Edit Delete</td>
					</tr>
				</tbody>
			</table>
			{authors &&
				authors.map((author, idx) => {
					return (
						<div className="author-item">
							<Link key={idx} to={"/authors/" + author._id}>
								{author.title}
							</Link>
							<button onClick={() => deleteAuthor(author._id)}>
								Delete
							</button>
						</div>
					);
				})}
		</div>
	);
};

export default ShowAllAuthors;
