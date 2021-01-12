import React, { Component } from "react";
import Header from "../organisms/Header";
import Feeding from "../templates/Feeding";
import LandingWrap from "../templates/LandingWrap";
import FeedMenu from "../organisms/FeedMenu";

export class FeedPage extends Component {
	render() {
		return (
			<LandingWrap>
				<Header />
				<main>
					<Feeding />
				</main>
				{/* <FeedMenu /> */}
			</LandingWrap>
		);
	}
}

export default FeedPage;
