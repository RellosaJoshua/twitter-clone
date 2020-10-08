import React, { useState } from "react";
import { authService, firebaseInstance } from "../firebase";

export default () => {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [newAccount, setNewAccount] = useState(false);
	const [error, setError] = useState("");

	const toggleAccount = () => {
		setNewAccount((prev) => !prev);
	};

	const onChange = (event) => {
		const {
			target: { name, value },
		} = event;

		if (name === "email") {
			setEmail(value);
		} else if (name === "password") {
			setPassword(value);
		}
	};

	const onSubmit = async (event) => {
		event.preventDefault();
		let userData;

		try {
			if (newAccount) {
				userData = await authService.createUserWithEmailAndPassword(
					email,
					password
				);
			} else {
				userData = await authService.signInWithEmailAndPassword(
					email,
					password
				);
			}

			console.log(userData);
		} catch (error) {
			setError(error.message);
		}
	};

	const googleLogin = async () => {
		const provider = new firebaseInstance.auth.GoogleAuthProvider();
		const userData = await authService.signInWithPopup(provider);
		console.log(userData);
	};

	return (
		<div className="auth-section container">
			<form onSubmit={onSubmit} className="auth-form" autoComplete="off">
				<div className="auth-input">
					<input
						name="email"
						type="text"
						value={email}
						onChange={onChange}
						required
					/>
					<label>Email</label>
				</div>
				<div className="auth-input">
					<input
						name="password"
						type="password"
						value={password}
						onChange={onChange}
						required
					/>
					<label>Password</label>
				</div>
				<input type="submit" value={newAccount ? "Create Account" : "Log in"} />
			</form>
			<span onClick={toggleAccount}>
				{!newAccount ? "Create Account" : "Login"}
			</span>
			<span>{error}</span>
			<span>
				<button name="google" onClick={googleLogin}>
					Continue with Google
				</button>
			</span>
		</div>
	);
};
