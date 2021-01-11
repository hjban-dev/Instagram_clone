import React, { Component } from "react";
import styled from "styled-components";
import A from "../atoms/A";
import P from "../atoms/P";
import AppDown from "../molecules/AppDown";
import Form from "../organisms/Form";
import GuardLine from "../molecules/GuardLine";
import FormTitle from "../molecules/FormTitle";
import Button from "../atoms/Button";
import CoreIon from "../atoms/CoreIon";

import data from "../../assets/data/LoginData";
export class Login extends Component {
	render() {
		const PStyled = {
			color: "#262626",
			fontSize: "14px",
			margin: "15px",
			textAlign: "center",
		};
		const CoreFacebookStyle = {
			width: "16px",
			height: "16px",
			backgroundPosition: "-414px -259px",
			margin: "0 8px 0 0",
			verticalAlign: "text-bottom",
		};
		const AStyled = {
			display: "block",
			margin: "0 0 10px",
			color: "#00376b",
			fontSize: "12px",
			textalign: "center",
		};

		return (
			<section>
				<article className="art_box">
					<FormTitle page="login" />
					<Form inputList={data.inputList} page="login"></Form>
					<GuardLine />
					<Button margin="16px 0" color="#385185" backgroundColor="#fff">
						<CoreIon {...CoreFacebookStyle} />
						Facebook으로 로그인
					</Button>
					<A link="/" {...AStyled}>
						비밀번호를 잊으셨나요?
					</A>
				</article>
				<article className="art_box">
					<P {...PStyled}>
						계정이 없으신가요?{" "}
						<A link="/register" title="가입 페이지로 이동" color="#0095f6" fontWeight="bold">
							가입하기
						</A>
					</P>
				</article>
				<article>
					<AppDown />
				</article>
			</section>
		);
	}
}

export default Login;
