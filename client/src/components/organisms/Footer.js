import React from "react";
import styled from "styled-components";
import FooterCopy from "../molecules/FooterCopy";
import FooterNav from "../molecules/FooterNav";

function Footer() {
	return (
		<FooterStyled>
			<FooterNav />
			<FooterCopy />
		</FooterStyled>
	);
}

const FooterStyled = styled.footer`
	padding: 24px 16px 48px;
	font-size: 12px;
	color: #8e8e8e;
`;

export default Footer;
