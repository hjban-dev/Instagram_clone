import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import FeedPage from "./pages/FeedPage";

function App() {
	return (
		<Router>
			<Switch>
				<Route exact path="/" component={LoginPage} />
				<Route exact path="/register" component={RegisterPage} />
				<Route exact path="/feed" component={FeedPage} />
			</Switch>
		</Router>
	);
}

export default App;
