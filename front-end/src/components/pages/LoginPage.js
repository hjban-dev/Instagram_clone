import React, { Component } from "react";
import Login from "../templates/Login";
import Footer from "../organisms/Footer";
import LandingWrap from "../templates/LandingWrap";

export class LoginPage extends Component {
	render() {
		return (
			<LandingWrap>
				<main>
					<Login />
				</main>
				<Footer />
			</LandingWrap>
		);
	}
}

export default LoginPage;
