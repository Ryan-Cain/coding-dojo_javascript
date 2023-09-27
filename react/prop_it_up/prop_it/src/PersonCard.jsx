import React from "react";

const PersonCard = ({ firstName, lastName, age, hair }) => {
	return (
		<fieldset>
			<legend>Person Card</legend>
			<h1>
				{firstName}, {lastName}
			</h1>
			<p>Age: {age}</p>
			<p>Hair Color: {hair}</p>
		</fieldset>
	);
};

export default PersonCard;
