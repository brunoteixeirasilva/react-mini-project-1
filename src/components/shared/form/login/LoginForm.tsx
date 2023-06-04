import React, { useState } from "react";
import "./LoginForm.scss";

/**
 * Displays the login form.
 *
 * @returns
 */
function LoginForm(): JSX.Element {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	const handleSubmit = (e) => {
		e.preventDefault();
		// handle your form submission logic here
	};

	return (
		<form className="ms-login-form" onSubmit={handleSubmit}>
			<h2 className="ms-login-form__title">Sign in</h2>
			<div className="ms-login-form__input-group">
				<label htmlFor="email" className="ms-login-form__label">
					Email
				</label>
				<input
					type="email"
					id="email"
					value={email}
					onChange={(e) => setEmail(e.target.value)}
					className="ms-login-form__input"
				/>
			</div>
			<div className="ms-login-form__input-group">
				<label htmlFor="password" className="ms-login-form__label">
					Password
				</label>
				<input
					type="password"
					id="password"
					value={password}
					onChange={(e) => setPassword(e.target.value)}
					className="ms-login-form__input"
				/>
			</div>
			<button type="submit" className="ms-login-form__submit-btn">
				Sign in
			</button>
		</form>
	);
}

export { LoginForm };
