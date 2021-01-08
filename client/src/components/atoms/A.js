import React from "react";
import { Link } from "react-router-dom";

function A(props) {
	return (
		<Link to={props.link} title={props.title}>
			{props.desc}
		</Link>
	);
}

export default A;
