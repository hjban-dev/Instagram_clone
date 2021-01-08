import React from "react";
import styled from "styled-components";
import InputBox from "../molecules/InputBox";
function Form(props) {
	const { children } = props;

	const inputList = props.inputList.map((input, idx) => <InputBox key={idx} label={input.label} idx={idx} />);

	return (
		<FormStyled>
			{inputList}
			{children}
		</FormStyled>
	);
}

const FormStyled = styled.form`
	color: #8e8e8e;
`;

export default Form;
