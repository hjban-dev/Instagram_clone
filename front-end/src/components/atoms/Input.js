import React from "react";

const Input = React.forwardRef((props, ref) => {
	return <input id={props.id} type={props.type} ref={ref} required />;
});

export default Input;
