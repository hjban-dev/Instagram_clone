import React, { Component } from "react";
import Header from "../organisms/Header";
import Feeding from "../templates/Feeding";
import FeedWrap from "../templates/FeedWrap";

export class FeedPage extends Component {
	render() {
		return (
			<FeedWrap>
				<Header />
				<main>
					<Feeding />
				</main>
			</FeedWrap>
		);
	}
}

export default FeedPage;
