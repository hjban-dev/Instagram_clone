import React from "react";
import styled from "styled-components";

import data from "../../assets/data/FooterData";
import A from "../atoms/A";

function FooterNav() {
	const FootetList = data.footerList.map((list, idx) => (
		<li key={idx}>
			<A desc={list.desc} link={list.link} title={list.title} />
		</li>
	));

	return (
		<NavStyled>
			<ul>{FootetList}</ul>
		</NavStyled>
	);
}

const NavStyled = styled.nav`
	ul {
		display: flex;
		justify-content: center;
		flex-wrap: wrap;
		li {
			margin: 0 8px 8px;
		}
	}
`;

export default FooterNav;
