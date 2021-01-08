import React from "react";
import styled from "styled-components";

function Button(props) {
	const { children } = props;
	return <ButtonStyled {...props}> {children}</ButtonStyled>;
}

const ButtonStyled = styled.button`
	display: block;
	width: 100%;
	margin: ${(props) => props.margin || "8px 0"};
	padding: 5px 9px;
	border-radius: 4px;
	background-color: ${(props) => props.backgroundColor || "#0095f6"};
	font-size: 14px;
	font-weight: 600;
	line-height: 22px;
	color: ${(props) => props.color || "#fff"};
`;

export default Button;
