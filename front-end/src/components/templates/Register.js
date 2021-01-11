import React, { Component } from "react";
import styled from "styled-components";
import A from "../atoms/A";
import P from "../atoms/P";
import AppDown from "../molecules/AppDown";
import GuardLine from "../molecules/GuardLine";
import FormTitle from "../molecules/FormTitle";
import Form from "../organisms/Form";
import data from "../../assets/data/RegisterData";

export class Register extends Component {
	render() {
		const PStyled = {
			color: "#262626",
			fontSize: "14px",
			margin: "15px",
			textAlign: "center",
		};

		const FormPStyled = {
			margin: "10px 0 30px",
			fontSize: "12px",
			textAlign: "center",
			color: "#8e8e8e",
			lineHeight: "16px",
		};

		return (
			<RegisteStyled>
				<article className="art_box">
					<FormTitle page="register" />
					<GuardLine />
					<Form inputList={data.inputList} page="register" />
					<P {...FormPStyled}>
						가입하면 Instagram의 <strong>약관, 데이터 정책</strong> 및 <strong>쿠키 정책</strong>에 동의하게 됩니다.
					</P>
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
		form {
			color: #8e8e8e;
		}
	}
`;

export default Register;
