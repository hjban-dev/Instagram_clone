import React from "react";
import Form from "./Form";
import P from "../atoms/P";
import GuardLine from "../molecules/GuardLine";
import FormTitle from "../molecules/FormTitle";
import data from "../../assets/data/RegisterData";
function FormBox() {
	const PStyled = {
		margin: "10px 0 30px",
		fontSize: "12px",
		textAlign: "center",
		color: "#8e8e8e",
		lineHeight: "16px",
	};
	return (
		<>
			<FormTitle page="register" />
			<GuardLine />
			<Form inputList={data.inputList} />
			<P {...PStyled}>
				가입하면 Instagram의 <strong>약관, 데이터 정책</strong> 및 <strong>쿠키 정책</strong>에 동의하게 됩니다.
			</P>
		</>
	);
}

export default FormBox;
