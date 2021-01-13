import React from "react";
import styled from "styled-components";
import { useDropzone } from "react-dropzone";

function HeaderGnb() {
	const { getRootProps, getInputProps } = useDropzone({
		noDrag: true,
		onDrop: (files) => {
			console.log(files);
		},
	});

	return (
		<GnbStyled>
			<li className="upload">
				<form>
					<div {...getRootProps({ className: "dropzone" })}>
						<input {...getInputProps()} />
						<svg aria-label="새 업로드" fill="#262626" height="22" viewBox="0 0 48 48" width="22">
							<path
								clipRule="evenodd"
								d="M38.5 46h-29c-5 0-9-4-9-9V17c0-5 4-9 9-9h1.1c1.1 0 2.2-.6 2.7-1.7l.5-1c1-2 3.1-3.3 5.4-3.3h9.6c2.3 0 4.4 1.3 5.4 3.3l.5 1c.5 1 1.5 1.7 2.7 1.7h1.1c5 0 9 4 9 9v20c0 5-4 9-9 9zm6-29c0-3.3-2.7-6-6-6h-1.1C35.1 11 33 9.7 32 7.7l-.5-1C31 5.6 29.9 5 28.8 5h-9.6c-1.1 0-2.2.6-2.7 1.7l-.5 1c-1 2-3.1 3.3-5.4 3.3H9.5c-3.3 0-6 2.7-6 6v20c0 3.3 2.7 6 6 6h29c3.3 0 6-2.7 6-6V17zM24 38c-6.4 0-11.5-5.1-11.5-11.5S17.6 15 24 15s11.5 5.1 11.5 11.5S30.4 38 24 38zm0-20c-4.7 0-8.5 3.8-8.5 8.5S19.3 35 24 35s8.5-3.8 8.5-8.5S28.7 18 24 18z"
								fillRule="evenodd"
							></path>
						</svg>
					</div>
				</form>
			</li>

			<li className="search">
				<a href="/" title="">
					<svg aria-label="검색 및 탐색하기" fill="#262626" height="22" viewBox="0 0 48 48" width="22">
						<path d="M20 40C9 40 0 31 0 20S9 0 20 0s20 9 20 20-9 20-20 20zm0-37C10.6 3 3 10.6 3 20s7.6 17 17 17 17-7.6 17-17S29.4 3 20 3z"></path>
						<path d="M46.6 48.1c-.4 0-.8-.1-1.1-.4L32 34.2c-.6-.6-.6-1.5 0-2.1s1.5-.6 2.1 0l13.5 13.5c.6.6.6 1.5 0 2.1-.2.3-.6.4-1 .4z"></path>
					</svg>
				</a>
			</li>
			<li className="heart">
				<a href="/" title="">
					<svg aria-label="활동 피드" fill="#262626" height="22" viewBox="0 0 48 48" width="22">
						<path d="M34.6 6.1c5.7 0 10.4 5.2 10.4 11.5 0 6.8-5.9 11-11.5 16S25 41.3 24 41.9c-1.1-.7-4.7-4-9.5-8.3-5.7-5-11.5-9.2-11.5-16C3 11.3 7.7 6.1 13.4 6.1c4.2 0 6.5 2 8.1 4.3 1.9 2.6 2.2 3.9 2.5 3.9.3 0 .6-1.3 2.5-3.9 1.6-2.3 3.9-4.3 8.1-4.3m0-3c-4.5 0-7.9 1.8-10.6 5.6-2.7-3.7-6.1-5.5-10.6-5.5C6 3.1 0 9.6 0 17.6c0 7.3 5.4 12 10.6 16.5.6.5 1.3 1.1 1.9 1.7l2.3 2c4.4 3.9 6.6 5.9 7.6 6.5.5.3 1.1.5 1.6.5.6 0 1.1-.2 1.6-.5 1-.6 2.8-2.2 7.8-6.8l2-1.8c.7-.6 1.3-1.2 2-1.7C42.7 29.6 48 25 48 17.6c0-8-6-14.5-13.4-14.5z"></path>
					</svg>
				</a>
			</li>
			<li className="profile">
				<a href="/" title="">
					<span role="link" tabIndex="0"></span>
				</a>
			</li>
			{/* <li className="message">
				<a href="/" title="">
					<svg aria-label="Direct" fill="#262626" height="22" viewBox="0 0 48 48" width="22">
						<path d="M47.8 3.8c-.3-.5-.8-.8-1.3-.8h-45C.9 3.1.3 3.5.1 4S0 5.2.4 5.7l15.9 15.6 5.5 22.6c.1.6.6 1 1.2 1.1h.2c.5 0 1-.3 1.3-.7l23.2-39c.4-.4.4-1 .1-1.5zM5.2 6.1h35.5L18 18.7 5.2 6.1zm18.7 33.6l-4.4-18.4L42.4 8.6 23.9 39.7z"></path>
					</svg>
				</a>
			</li> */}
		</GnbStyled>
	);
}

const GnbStyled = styled.ul`
	display: flex;
	li {
		&:not(:first-child) {
			margin-left: 22px;
		}
		> a {
			display: inline-block;
		}
		/* input[type="file"] {
			display: none;
		} */
		&.profile {
			span {
				display: inline-block;
				width: 22px;
				height: 22px;
				border: 1px solid;
				border-radius: 100%;
			}
		}
	}
`;

export default HeaderGnb;
