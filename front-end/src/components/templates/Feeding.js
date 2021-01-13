import React, { Component } from "react";
import styled from "styled-components";
import FeedLeft from "../organisms/FeedLeft";
import FeedRight from "../organisms/FeedRight";

export class Feeding extends Component {
	render() {
		return (
			<FeedingStyled>
				<FeedLeft />
				<FeedRight />
			</FeedingStyled>
		);
	}
}

const FeedingStyled = styled.section`
	max-width: 935px;
	width: 100%;
`;

export default Feeding;
