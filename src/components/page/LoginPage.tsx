import React from "react";
import { useSelector } from "react-redux";
import { useMatch, useNavigate } from "react-router-dom";

import { Routes } from "components/router/Routes";
import { LoginForm } from "components/shared/form/login/LoginForm";

import { Selectors } from "redux/selectors/userProfileSelectors";
import { translate, useTranslate } from "hooks/i18n";

/**
 * Page Component: LoginPage
 *
 * @returns JSX.Element
 */
function LoginPage() {
	// const t = useTranslate();
	const isAuth = useSelector(Selectors.selectAuthenticated);
	const lang = { title: translate("page.login.title") };
	const navigate = useNavigate();

	if (isAuth) {
		navigate(Routes.Home);
		debugger;
	}

	return (
		<div
			style={{
				backgroundImage:
					"/img/background/isaac-chou-7aQIAPdxFZQ-unsplash.jpg"
			}}
		>
			<div>{lang.title}</div>
			<LoginForm />
		</div>
	);
}

export { LoginPage };
