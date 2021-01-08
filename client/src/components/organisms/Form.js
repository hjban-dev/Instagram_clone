import React from "react";
import styled from "styled-components";
import InputBox from "../molecules/InputBox";
import Button from "../atoms/Button";

import data from "../../assets/data/RegisterData";

function Form() {
	const inputList = data.inputList.map((input, idx) => <InputBox key={idx} label={input.label} idx={idx} />);

	return (
		<FormStyled>
			{inputList}
			<Button>가입</Button>
		</FormStyled>
	);
}

const FormStyled = styled.form`
	color: #8e8e8e;
`;

export default Form;
