import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Landing from "./pages/Landing";
import RegisterPage from "./pages/RegisterPage";

function App() {
	return (
		<Router>
			<Switch>
				<Route exact path="/" component={Landing} />
				<Route exact path="/register" component={RegisterPage} />
			</Switch>
		</Router>
	);
}

export default App;
