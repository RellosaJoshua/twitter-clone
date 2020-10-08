import React from "react";
import {
	HashRouter as Router,
	Redirect,
	Route,
	Switch,
} from "react-router-dom";
import Login from "../routes/Login";
import Home from "../routes/Home";
import Navigation from "./Navigation";
import Profile from "../routes/Profile";

export default ({ isLoggedIn }) => {
	return (
		<div className="container">
			<Router>
				{isLoggedIn && <Navigation />}
				<Switch>
					{isLoggedIn ? (
						<>
							<Route exact path="/" component={Home} />
							<Route exact path="/profile" component={Profile} />
						</>
					) : (
						<Route exact path="/" component={Login} />
					)}
					{!isLoggedIn ? <Redirect to="/" /> : null}
				</Switch>
			</Router>
		</div>
	);
};
