import React, { createRef } from "react";
import Axios from "axios";
import InputBox from "../molecules/InputBox";
import Button from "../atoms/Button";
import { withRouter } from "react-router-dom";
import { useDispatch } from "react-redux";
import { loginUser } from "../../helper/_actions/user_action";

function Form(props) {
	const dispatch = useDispatch();
	const { children } = props;
	const inputElem = [];

	const inputList = props.inputList.map((input, idx) => {
		inputElem[idx] = createRef();

		return <InputBox key={idx} label={input.label} type={input.type} idx={idx} ref={inputElem[idx]} />;
	});

	const onSubmitHanlder = (e) => {
		e.preventDefault();

		let body = {};

		if (props.page === "login") {
			body = { email: inputElem[0].current.value, password: inputElem[1].current.value };

			dispatch(loginUser(body)).then((response) => {
				console.log(response);
				if (response.payload.loginSuccess) {
					props.history.push("/feed");
				} else {
					alert("잘못된 비밀번호입니다. 다시 확인하세요.");
				}
			});

			Axios.post("/api/users/login", body).then((res) => {});
		} else {
			body = { email: inputElem[0].current.value, name: inputElem[1].current.value, nickname: inputElem[2].current.value, password: inputElem[3].current.value };

			Axios.post("http://localhost:5001/api/users/register", body)
				.then(props.history.push("/"))
				.catch((error) => {
					console.log("error : ", error.response);
				});
		}
	};

	return (
		<form onSubmit={onSubmitHanlder}>
			{inputList}
			{children}

			{props.page === "login" ? (
				<Button margin="16px 0" backgroundColor="#b2dffc">
					로그인
				</Button>
			) : props.page === "register" ? (
				<Button margin="16px 0" backgroundColor="#b2dffc">
					가입
				</Button>
			) : (
				{ children }
			)}
		</form>
	);
}

export default withRouter(Form);
