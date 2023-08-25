import React from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import { Routes } from "components/router/Routes";
import { LoginForm } from "components/shared/form/login/LoginForm";

import { Selectors } from "redux/selectors/userProfileSelectors";
import { useTranslate } from "hooks/i18n";
import { AppImageProvider } from "static/index";

import "./LoginPage.scss";

/**
 * Page Component: LoginPage
 *
 * @returns JSX.Element
 */
function LoginPage() {
	// const t = useTranslate();
	const isAuth = useSelector(Selectors.selectAuthenticated);
	const loginPageTitle = useTranslate("page.login.title");
	const photoCredit = useTranslate("page.login.photoCredit", {
		author: AppImageProvider.Login.background.author
	});
	const navigate = useNavigate();

	if (isAuth) {
		navigate(Routes.Home);
		debugger;
	}

	return (
		<div
			className="Login__container"
			style={{
				backgroundImage: `url(${AppImageProvider.Login.background.src})`
			}}
		>
			<div className="Login__pageTitle">{loginPageTitle}</div>
			<LoginForm />
			<div className="Login__photoCredit">
				<a href={AppImageProvider.Login.background.authorLink}>
					{photoCredit}
				</a>
			</div>
		</div>
	);
}

export { LoginPage };
