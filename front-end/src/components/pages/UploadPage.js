import React, { Component } from "react";
import Header from "../organisms/Header";
import FeedWrap from "../templates/FeedWrap";
import Uploading from "../templates/Uploading";

export class UploadPage extends Component {
	render() {
		return (
			<FeedWrap>
				{/* <Header /> */}
				<main>
					<Uploading />
				</main>
			</FeedWrap>
		);
	}
}

export default UploadPage;
