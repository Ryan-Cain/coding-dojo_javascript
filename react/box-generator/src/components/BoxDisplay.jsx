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
				return (
					<div
						style={{
							backgroundColor: box,
							height: "75px",
							width: "75px",
							margin: "10px",
						}}
					></div>
				);
			})}
		</div>
	);
};

export default BoxDisplay;
