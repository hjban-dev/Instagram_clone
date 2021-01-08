import React from "react";
import styled from "styled-components";
import P from "../atoms/P";

function GuardLine() {
	return (
		<LindStyled>
			<P>또는</P>
		</LindStyled>
	);
}

const LindStyled = styled.div`
	position: relative;
	width: 100%;
	::before,
	::after {
		content: "";
		display: block;
		position: absolute;
		top: 6px;
		left: 0;
		background-color: #dbdbdb;
		width: 42%;
		height: 1px;
	}
	::after {
		left: 100px;
	}
	p {
		font-size: 13px;
		font-weight: 600;
		text-align: center;
	}
`;

export default GuardLine;
