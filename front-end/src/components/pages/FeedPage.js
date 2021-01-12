import React, { Component } from "react";
import Header from "../organisms/Header";
import Feeding from "../templates/Feeding";
import LandingWrap from "../templates/LandingWrap";

export class FeedPage extends Component {
	render() {
		return (
			<LandingWrap>
				<Header />
				<main>
					<Feeding />
				</main>
			</LandingWrap>
		);
	}
}

export default FeedPage;
