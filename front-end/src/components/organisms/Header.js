import React from "react";
import styled from "styled-components";
import CoreIon from "../atoms/CoreIon";
import HeaderGnb from "../molecules/HeaderGnb";

function Header() {
	const CoreLogoStyle = {
		width: "103px",
		height: "29px",
		backgroundPosition: "-122px -226px",
	};

	return (
		<HeaderStyled>
			<div className="header_home">
				<a href="/" tabIndex="0">
					<svg aria-label="홈" fill="#262626" height="22" viewBox="0 0 48 48" width="22">
						<path d="M45.5 48H30.1c-.8 0-1.5-.7-1.5-1.5V34.2c0-2.6-2.1-4.6-4.6-4.6s-4.6 2.1-4.6 4.6v12.3c0 .8-.7 1.5-1.5 1.5H2.5c-.8 0-1.5-.7-1.5-1.5V23c0-.4.2-.8.4-1.1L22.9.4c.6-.6 1.6-.6 2.1 0l21.5 21.5c.3.3.4.7.4 1.1v23.5c.1.8-.6 1.5-1.4 1.5z"></path>
					</svg>
				</a>
			</div>
			<div className="header_logo">
				<CoreIon {...CoreLogoStyle} />
			</div>
			<div className="header_gnb">
				<HeaderGnb />
			</div>
		</HeaderStyled>
	);
}

const HeaderStyled = styled.header`
	display: flex;
	justify-content: space-between;
	align-items: center;
	height: 54px;
	padding: 0 20px;
	background-color: #fff;
	.header_home {
		flex: 1 1 0;
	}
	.header_logo {
		flex: 1 1 auto;
		min-width: 103px;
		width: 103px;
		text-align: center;
	}
	.header_gnb {
		flex: 1 0 0;
	}
`;

export default Header;
