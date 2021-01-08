import React from "react";
import styled from "styled-components";
import IconImg from "../../assets/images/common/core_icon.png";

function CoreIon(props) {
	console.log(props);
	return <CoreIconStyled {...props}></CoreIconStyled>;
}

const CoreIconStyled = styled.span`
	display: inline-block;
	width: ${(props) => props.width};
	height: ${(props) => props.height};
	margin: ${(props) => props.margin};
	background-image: url(${IconImg});
	background-repeat: no-repeat;
	background-position: ${(props) => props.backgroundPosition || "0 0"};
	vertical-align: ${(props) => props.verticalAlign};
`;

export default CoreIon;
