import React from "react";
import { useSelector } from "react-redux";
import { useMatch, useNavigate } from "react-router-dom";

import { Routes } from "components/router/Routes";
import { LoginForm } from "components/shared/form/login/LoginForm";

import { Selectors } from "redux/selectors/userProfileSelectors";
import { translate } from "hooks/i18n";

/**
 * Page Component: LoginPage
 *
 * @returns JSX.Element
 */
function LoginPage() {
	const isAuth = useSelector(Selectors.selectAuthenticated);
	const lang = { title: translate("page.login.title") };
	const navigate = useNavigate();

	if (isAuth) {
		navigate(Routes.Home);
		debugger;
	}

	return (
		<>
			<div>{lang.title}</div>
			<LoginForm />
		</>
	);
}

export { LoginPage };
