import React from "react";
import styled from "styled-components";

function FeedRight() {
	return (
		<RightStyled>
			<div>header</div>
			<div>추천 리스트</div>
			<div>footer</div>
		</RightStyled>
	);
}

const RightStyled = styled.div`
	float: right;
`;

export default FeedRight;
