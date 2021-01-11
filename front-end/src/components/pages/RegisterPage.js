import React, { Component } from "react";
import Footer from "../organisms/Footer";
import Register from "../templates/Register";
import LandingWrap from "../templates/LandingWrap";

export class RegisterPage extends Component {
	render() {
		return (
			<LandingWrap>
				<main>
					<Register />
				</main>
				<Footer />
			</LandingWrap>
		);
	}
}

export default RegisterPage;
