import React from "react";
import { Link } from "react-router-dom";
import { authService } from "../firebase";
import { useHistory } from "react-router-dom";
import { ReactComponent as HomeIcon } from "../assets/home.svg";
import { ReactComponent as ProfileIcon } from "../assets/profile.svg";

export default () => {
	const history = useHistory();

	const logoutClick = () => {
		authService.signOut();
		history.push("/");
	};

	return (
		<nav>
			<ul>
				<li>
					<HomeIcon />
					<Link style={{ textDecoration: "none" }} to="/">
						Home
					</Link>
				</li>
				<li>
					<ProfileIcon />
					<Link style={{ textDecoration: "none" }} to="/profile">
						Profile
					</Link>
				</li>
				<li className="logout-container">
					<button onClick={logoutClick} className="logout-button">
						Log out
					</button>
				</li>
			</ul>
		</nav>
	);
};
