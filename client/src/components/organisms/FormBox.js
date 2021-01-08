import React from "react";
import Form from "./Form";
import Button from "../atoms/Button";
import P from "../atoms/P";
import GuardLine from "../molecules/GuardLine";
import CoreIon from "../atoms/CoreIon";
import Heading from "../atoms/Heading";

function FormBox() {
	const CoreLogoStyle = {
		width: "175px",
		height: "51px",
		backgroundPosition: "0 -130px",
	};
	const CoreFacebookStyle = {
		width: "16px",
		height: "16px",
		backgroundPosition: "-414px -300px",
		margin: "0 8px 0 0",
		verticalAlign: "text-bottom",
	};

	return (
		<div>
			<Heading number="1">
				instagram <CoreIon {...CoreLogoStyle} />
			</Heading>
			<Heading number="2">친구들의 사진과 동영상을 보려면 가입하세요.</Heading>
			<Button>
				<CoreIon {...CoreFacebookStyle} />
				Facebook으로 로그인
			</Button>
			<GuardLine />
			<Form />
			<P>가입하면 Instagram의 약관, 데이터 정책 및 쿠키 정책에 동의하게 됩니다.</P>
		</div>
	);
}

export default FormBox;
