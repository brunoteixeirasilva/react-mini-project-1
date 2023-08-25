import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import { useTranslate } from "hooks/i18n";
import { Routes } from "components/router/Routes";

import "./LoginForm.scss";

/**
 * Displays the login form.
 *
 * @returns
 */
function LoginForm(): JSX.Element {
	const formTitle = useTranslate("page.login.form.title");
	const emailText = useTranslate("page.login.form.email");
	const passwordText = useTranslate("page.login.form.password");
	const submitText = useTranslate("page.login.form.submit");
	const navigate = useNavigate();
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	const handleSubmit = (e) => {
		e.preventDefault();
		// handle your form submission logic here
		navigate(Routes.Home);
	};

	return (
		<form className="ms-login-form" onSubmit={handleSubmit}>
			<h2 className="ms-login-form__title">{formTitle}</h2>
			<div className="ms-login-form__input-group">
				<label htmlFor="email" className="ms-login-form__label">
					{emailText}
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
					{passwordText}
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
				{submitText}
			</button>
		</form>
	);
}

export { LoginForm };
