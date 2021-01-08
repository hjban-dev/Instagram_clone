import React from "react";
import styled from "styled-components";

function Heading(props) {
	const { children } = props;
	const Number = props.number;

	return <>{Number === "1" ? <H1Styled {...props}> {children}</H1Styled> : Number === "2" ? <H2Styled {...props}> {children}</H2Styled> : <h3 {...props}> {children}</h3>}</>;
}

const H1Styled = styled.h1`
	text-indent: 110%;
	text-align: center;
	overflow: hidden;
`;

const H2Styled = styled.h2`
	margin: 16px 0 10px;
	font-size: 17px;
	font-weight: 600;
	text-align: center;
	line-height: 20px;
`;

export default Heading;
