import React from "react";
import styled from "styled-components";

function P(props) {
	const { children } = props;
	return (
		<PStyled className={props.className} {...props}>
			{children}
		</PStyled>
	);
}

const PStyled = styled.p`
	margin: ${(props) => props.margin};
	padding: ${(props) => props.padding};
	color: ${(props) => props.color || "#8e8e8e"};
	text-align: ${(props) => props.textAlign};
	font-size: ${(props) => props.fontSize};
	line-height: ${(props) => props.lineHeight || "15px"};
	vertical-align: ${(props) => props.verticalAlign};
`;

export default P;
