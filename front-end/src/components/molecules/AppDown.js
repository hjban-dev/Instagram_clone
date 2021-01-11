import React from "react";
import A from "../atoms/A";
import P from "../atoms/P";
import ImgApple from "../../assets/images/main/app_apple.png";
import ImgGoogle from "../../assets/images/main/app_google.png";
import styled from "styled-components";

function AppDown() {
	const PStyled = {
		color: "#262626",
		fontSize: "14px",
		padding: "10px",
		textAlign: "center",
	};

	return (
		<AppDownStyled>
			<P {...PStyled}>앱을 다운로드하세요. </P>
			<div>
				<A link="/" title="애플 앱 다운로드">
					<img src={ImgApple} alt="" />
				</A>
				<A link="/" title="구글 앱 다운로드">
					<img src={ImgGoogle} alt="" />
				</A>
			</div>
		</AppDownStyled>
	);
}

const AppDownStyled = styled.div`
	> div {
		display: flex;
		justify-content: center;
		padding: 10px 0;
		a {
			margin: 0 4px;
			img {
				height: 40px;
			}
		}
	}
`;

export default AppDown;
