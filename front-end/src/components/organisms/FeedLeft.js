import React from "react";
import styled from "styled-components";
import Posting from "./Posting";

function FeedLeft() {
	return (
		<LeftStyled>
			<Posting />
		</LeftStyled>
	);
}

const LeftStyled = styled.div`
	float: left;
	width: 85%;
`;

export default FeedLeft;
