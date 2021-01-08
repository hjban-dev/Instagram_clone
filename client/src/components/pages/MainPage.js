import React, { Component } from "react";
import styled from "styled-components";
import Footer from "../organisms/Footer";

import RegisterPage from "./RegisterPage";

export class MainPage extends Component {
	render() {
		return (
			<div>
				<MainStyled>
					<RegisterPage />
				</MainStyled>
				<Footer />
			</div>
		);
	}
}

const MainStyled = styled.main`
	display: flex;
	justify-content: center;
`;
export default MainPage;
