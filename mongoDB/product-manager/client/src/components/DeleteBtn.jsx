import React from "react";

const DeleteBtn = ({ callbackFn, id }) => {
	return <button onClick={() => callbackFn(id)}>Delete</button>;
};

export default DeleteBtn;
