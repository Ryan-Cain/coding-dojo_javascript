import React from "react";

const BoxDisplay = ({ boxes }) => {
	return (
		<div
			style={{
				display: "flex",
				flexWrap: "wrap",
				justifyContent: "center",
			}}
		>
			{boxes.map((box, i) => {
				console.log(box);
				return (
					<div
						style={{
							backgroundColor: box.color,
							height: box.size + "px",
							width: box.size + "px",
							margin: "10px",
						}}
					></div>
				);
			})}
		</div>
	);
};

export default BoxDisplay;
