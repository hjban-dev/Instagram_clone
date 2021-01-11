import React from "react";
import styled from "styled-components";
import Input from "../atoms/Input";

function InputBox(props) {
	return (
		<InputBoxStyled>
			<div className="input_box">
				<label htmlFor={`register-input${props.idx}`}>{props.label}</label>
				<Input type="text" id={`register-input${props.idx}`} />
			</div>
		</InputBoxStyled>
	);
}

const InputBoxStyled = styled.div`
	margin: 0 0 6px;
	.input_box {
		position: relative;
		height: 36px;
		background-color: #fafafa;
		border-radius: 3px;
		border: 1px solid #dbdbdb;
		label {
			position: absolute;
			left: 8px;
			font-size: 12px;
			line-height: 36px;
		}
		input {
			width: 100%;
			padding: 14px 0 2px 8px;
			background: transparent;
			border: 0;
			font-size: 12px;
		}
	}
`;

export default InputBox;
