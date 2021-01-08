import React from "react";

function P(props) {
	const { children } = props;
	return <p className={props.class}>{children}</p>;
}

export default P;
