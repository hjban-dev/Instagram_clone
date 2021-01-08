import React from "react";
import styled from "styled-components";
import data from "../../assets/data/FooterData";
import P from "../atoms/P";

function FooterCopy() {
	return (
		<CopyStyled>
			<P class="language" txt={data.languageInfo.title} />
			<P class="copy" txt={data.copyInfo.desc} />
		</CopyStyled>
	);
}

const CopyStyled = styled.div`
	display: flex;
	justify-content: center;
	margin: 8px 0;
	p {
		&.language {
		}
		&.copy {
			margin-left: 16px;
		}
	}
`;

export default FooterCopy;
