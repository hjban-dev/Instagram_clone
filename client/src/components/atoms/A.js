import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

function A(props) {
	const { children } = props;
	return (
		<LinkStyled to={props.link} title={props.title} {...props}>
			{children}
		</LinkStyled>
	);
}

const LinkStyled = styled(Link)`
	display: ${(props) => props.display};
	margin: ${(props) => props.margin};
	padding: ${(props) => props.padding};
	font-size: ${(props) => props.fontSize};
	font-weight: ${(props) => props.fontWeight};
	text-align: ${(props) => props.textalign || "left"};
	color: ${(props) => props.color || "#8e8e8e"};
`;

export default A;
