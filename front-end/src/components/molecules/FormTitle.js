import React from "react";
import Button from "../atoms/Button";
import CoreIon from "../atoms/CoreIon";
import Heading from "../atoms/Heading";

function FormTitle(props) {
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

	if (props.page === "login") {
		return (
			<div>
				<Heading number="1" padding="10px 0 16px">
					instagram <CoreIon {...CoreLogoStyle} />
				</Heading>
			</div>
		);
	} else if (props.page === "register") {
		return (
			<div>
				<Heading number="1" padding="10px 0 0">
					instagram <CoreIon {...CoreLogoStyle} />
				</Heading>
				<Heading number="2">친구들의 사진과 동영상을 보려면 가입하세요.</Heading>
				<Button margin="16px 0">
					<CoreIon {...CoreFacebookStyle} />
					Facebook으로 로그인
				</Button>
			</div>
		);
	}
}

export default FormTitle;
