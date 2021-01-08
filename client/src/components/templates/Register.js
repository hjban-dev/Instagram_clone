import React, { Component } from "react";
import styled from "styled-components";

import FormBox from "../organisms/FormBox";

export class Register extends Component {
	render() {
		return (
			<RegisteStyled>
				<FormBox />
				{/* <FormBox /> */}
				<div></div>
			</RegisteStyled>
		);
	}
}

const RegisteStyled = styled.div`
	flex-grow: 1;
	max-width: 350px;
	padding: 0 40px 0;
`;

export default Register;
