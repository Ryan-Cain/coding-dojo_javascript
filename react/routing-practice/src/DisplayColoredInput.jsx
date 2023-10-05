import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

const DisplayColoredInput = () => {
	const { input, textColor, bgColor } = useParams();
	const [inputNaN, setInputNaN] = useState(input);

	const navigate = useNavigate();
	useEffect(() => {
		if (isNaN(input)) {
			return (
				<div style={{ backgroundColor: bgColor, color: textColor }}>
					The word is: {input}
				</div>
			);
		} else {
			navigate("/home");
			console.log("go home");
		}
	}, [inputNaN, input, textColor, bgColor]);
};

export default DisplayColoredInput;
