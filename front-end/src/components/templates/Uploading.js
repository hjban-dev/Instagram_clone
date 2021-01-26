import axios from "axios";
import React, { useState, useRef } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { useDropzone } from "react-dropzone";
import styled from "styled-components";

function Uploading(props) {
	const user = useSelector((state) => state.user);
	const [FilePath, setFilePath] = useState("");

	const { getRootProps, getInputProps } = useDropzone({
		noDrag: true,
		onDrop: (files) => {
			let formData = new FormData();
			const config = {
				header: { "content-type": "mutipart/form-data" },
			};
			formData.append("file", files[0]);

			axios.post("/api/upload/files", formData, config).then((response) => {
				if (response.data.success) {
					setFilePath(response.data.url);
				} else {
					alert("Only image files are allowed!");
				}
			});
		},
	});

	const descTextarea = useRef();

	const onSubmit = (e) => {
		e.preventDefault();

		const variable = {
			writer: user.loginData._id,
			description: descTextarea.current.value,
			filePath: FilePath,
		};

		console.log(variable);

		axios.post("api/upload/save", variable).then((response) => {
			if (response.data.success) {
				// props.history.push("/upload");
			} else {
				alert("Video info was not saved!");
			}
		});
	};

	return (
		<StyledUploading>
			<form onSubmit={onSubmit}>
				<div className="upload-nav">
					<div>
						<Link to="/feed">
							<svg aria-label="뒤로" className="_8-yf5 " fill="#262626" height="24" viewBox="0 0 48 48" width="24">
								<path d="M40 33.5c-.4 0-.8-.1-1.1-.4L24 18.1l-14.9 15c-.6.6-1.5.6-2.1 0s-.6-1.5 0-2.1l16-16c.6-.6 1.5-.6 2.1 0l16 16c.6.6.6 1.5 0 2.1-.3.3-.7.4-1.1.4z"></path>
							</svg>
						</Link>
					</div>
					<div>새 게시물</div>
					<div>
						<button onClick={onSubmit}>공유하기</button>
					</div>
				</div>
				<div className="upload-conts">
					{FilePath ? (
						<div className="file-info">
							<div className="img-container">
								<img src="" alt="" />
							</div>
							<div>
								<textarea placeholder="문구 입력..." ref={descTextarea} />
							</div>
							<div>위치 추가</div>
						</div>
					) : (
						<div {...getRootProps({ className: "dropzone" })}>
							<input {...getInputProps()} />
							<p>게시물 추가</p>
						</div>
					)}
				</div>
			</form>
		</StyledUploading>
	);
}

const StyledUploading = styled.section`
	width: 100%;
	form {
		.upload-nav {
			display: flex;
			justify-content: space-between;
			align-items: center;
			height: 44px;
			padding: 0 16px;
			background-color: #fff;
			border-bottom: 1px solid #dbdbdb;
			font-weight: 600;
			color: #000;
			> div:nth-child(1) {
				transform: rotate(270deg);
			}
			> div:nth-child(3) {
				flex-basis: 32px;
			}
		}
		.upload-conts {
			.dropzone {
				display: flex;
				justify-content: center;
				align-items: center;
				height: 50vh;
				background-color: #fff;
				cursor: pointer;
				border-bottom: 1px solid #dbdbdb;
			}
			textarea {
				width: 100%;
				padding: 16px;
				border: none;
				border-bottom: 1px solid #dbdbdb;
				resize: none;
			}
		}
	}
`;

export default Uploading;
