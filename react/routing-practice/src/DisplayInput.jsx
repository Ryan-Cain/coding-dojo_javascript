import React from "react";
import { useParams } from "react-router-dom";

const DisplayInput = () => {
	const { input } = useParams();
	if (isNaN(input)) {
		return <div>The word is: {input}</div>;
	} else {
		return <div>The Number is: {input}</div>;
	}
};

export default DisplayInput;
