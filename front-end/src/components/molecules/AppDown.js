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
				<A link="https://itunes.apple.com/app/instagram/id389801252?pt=428156&ct=igweb.loginPage.badge&mt=8&vt=lo" title="애플 앱 다운로드">
					<img src={ImgApple} alt="" />
				</A>
				<A
					link="https://play.google.com/store/apps/details?id=com.instagram.android&referrer=utm_source%3Dinstagramweb%26utm_campaign%3DloginPage%26ig_mid%3DB7EE808D-0B95-49DC-BC2C-EC4A89C662D6%26utm_content%3Dlo%26utm_medium%3Dbadge"
					title="구글 앱 다운로드"
				>
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
