import React, { Component } from "react";
import styled from "styled-components";
import A from "../atoms/A";
import P from "../atoms/P";
import AppDown from "../molecules/AppDown";
import FormBox from "../organisms/FormBox";

export class Register extends Component {
	render() {
		const PStyled = {
			color: "#262626",
			fontSize: "14px",
			margin: "15px",
			textAlign: "center",
		};
		return (
			<RegisteStyled>
				<article className="art_box">
					<FormBox />
				</article>
				<article className="art_box">
					<P {...PStyled}>
						계정이 있으신가요?{" "}
						<A link="/" title="로그인 페이지로 이동" color="#0095f6" fontWeight="bold">
							로그인
						</A>
					</P>
				</article>
				<article>
					<AppDown />
				</article>
			</RegisteStyled>
		);
	}
}

const RegisteStyled = styled.section`
	> article {
		flex-grow: 1;
	}
`;

export default Register;
