import axios from "axios";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";

function Uploading(props) {
	const user = useSelector((state) => state.user);
	const variable = { uploadId: "" };
	const [FileDetail, setFileDetail] = useState("");

	useEffect(() => {
		axios.post("/api/video/getUpload", variable).then((response) => {
			if (response.data.success) {
				console.log(response.data);
			} else {
				alert("비디오 정보 가져오기 실패");
			}
		});
	});

	return (
		<section>
			<div className="upload-nav">
				<header>
					<div>뒤로</div>
					<div>새 게시물</div>
					<div>공유하기</div>
				</header>
			</div>
			<div className="upload-conts">
				<div className="img-container">
					<img src="" alt="" />
				</div>
				<div>
					<textarea />
				</div>
				<div>위치 추가</div>
			</div>
		</section>
	);
}

export default Uploading;
