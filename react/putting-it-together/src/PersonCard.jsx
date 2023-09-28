import React, { useState } from "react";

const PersonCard = ({ firstName, lastName, age, hair }) => {
	const [personAge, setPersonAge] = useState(age);
	return (
		<fieldset>
			<legend>Person Card</legend>
			<h1>
				{firstName}, {lastName}
			</h1>
			<p>Age: {personAge}</p>
			<p>Hair Color: {hair}</p>
			<button onClick={() => setPersonAge(personAge + 1)}>
				Birthday Button for {firstName} {lastName}
			</button>
		</fieldset>
	);
};

export default PersonCard;
