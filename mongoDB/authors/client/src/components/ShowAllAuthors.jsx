import axios from "axios";
import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

const ShowAllAuthors = () => {
	const [authors, setAuthors] = useState(null);
	const navigate = useNavigate();

	useEffect(() => {
		axios
			.get("http://localhost:8000/api/authors")
			.then((res) => {
				res.data.sort((a, b) => {
					let aName = a.name.toLowerCase();
					let bName = b.name.toLowerCase();
					return aName < bName ? -1 : aName > bName ? 1 : 0;
				});
				setAuthors(res.data);
			})
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
			<h5>We have quotes by:</h5>
			<table className="table">
				<thead>
					<tr>
						<th>Author</th>
						<th>Actions available</th>
					</tr>
				</thead>
				<tbody>
					{authors &&
						authors.map((author, idx) => {
							return (
								<tr key={idx} className="author-item">
									<td>
										<h5 to={"/authors/" + author._id}>
											{author.name}
										</h5>
									</td>
									<td>
										<button
											onClick={() =>
												navigate(
													"/authors/" + author._id
												)
											}
										>
											Edit
										</button>
										<button
											onClick={() =>
												deleteAuthor(author._id)
											}
										>
											Delete
										</button>
									</td>
								</tr>
							);
						})}
				</tbody>
			</table>
		</div>
	);
};

export default ShowAllAuthors;
