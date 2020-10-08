import React, { useState, useEffect } from "react";
import Router from "./Router";
import "../css/main.css";
import { authService } from "../firebase";

function App() {
	const [init, setInit] = useState(false);
	const [isLoggedIn, setIsLoggedIn] = useState(false);

	useEffect(() => {
		authService.onAuthStateChanged((user) => {
			if (user) {
				setIsLoggedIn(true);
			} else {
				setIsLoggedIn(false);
			}

			setInit(true);
		});
	}, []);

	return (
		<div className="app container">
			{init ? <Router isLoggedIn={isLoggedIn} /> : "Loading..."}
		</div>
	);
}

export default App;
