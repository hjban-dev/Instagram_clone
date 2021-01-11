import React from "react";
import styled from "styled-components";
import Input from "../atoms/Input";

const InputBox = React.forwardRef((props, ref) => {
	return (
		<InputBoxStyled>
			<div className="input_box">
				<Input type="text" id={`register-input${props.idx}`} ref={ref} type={props.type} />
				<label htmlFor={`register-input${props.idx}`}>{props.label}</label>
			</div>
		</InputBoxStyled>
	);
});

const InputBoxStyled = styled.div`
	margin: 0 0 6px;
	.input_box {
		position: relative;
		height: 36px;
		background-color: #fafafa;
		border-radius: 3px;
		border: 1px solid #dbdbdb;
		input {
			width: 100%;
			padding: 16px 0 2px 8px;
			background: transparent;
			border: 0;
			font-size: 12px;
		}
		label {
			position: absolute;
			left: 8px;
			font-size: 12px;
			line-height: 36px;
		}

		label {
			top: -10px;
			font-size: 10px;
			color: #b1b1b1;
		}
	}
`;

export default InputBox;
