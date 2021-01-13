import React from "react";
import styled from "styled-components";

function FeedWrap(props) {
	const { children } = props;
	return <FeedStyled>{children}</FeedStyled>;
}

const FeedStyled = styled.div`
	min-height: 100%;
	background-color: #fafafa;
	display: flex;
	flex-direction: column;
	> main {
		display: flex;
		justify-content: center;

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

export default FeedWrap;
