import React from "react";
import styled from "styled-components";

function LandingWrap(props) {
	const { children } = props;
	return <LandingStyled>{children}</LandingStyled>;
}

const LandingStyled = styled.div`
	min-height: 100%;
	background-color: #fafafa;
	display: flex;
	flex-direction: column;
	> main {
		display: flex;
		justify-content: center;
		align-items: center;
		flex-grow: 1;
		> section {
			> article {
				max-width: 350px;
				&.art_box {
					background-color: #fff;
					border: 1px solid #dbdbdb;
					border-radius: 1px;
					margin: 0 0 10px;
					padding: 10px 40px;
				}
			}
		}
	}
`;

export default LandingWrap;
