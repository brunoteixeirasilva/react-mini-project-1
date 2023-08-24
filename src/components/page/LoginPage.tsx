import React, { useMemo } from "react";
import { useSelector } from "react-redux";
import { useMatch, useNavigate } from "react-router-dom";

import { Routes } from "components/router/Routes";
import { LoginForm } from "components/shared/form/login/LoginForm";

import { Selectors } from "redux/selectors/userProfileSelectors";
import { translate, useTranslate } from "hooks/i18n";
import { AppImageProvider } from "static/index";

// import imagePath from "static/img/isaac-chou-7aQIAPdxFZQ-unsplash.jpg";

/**
 * Page Component: LoginPage
 *
 * @returns JSX.Element
 */
function LoginPage() {
	// const t = useTranslate();
	const isAuth = useSelector(Selectors.selectAuthenticated);
	const loginPageTitle = useTranslate("page.login.title");
	const navigate = useNavigate();

	if (isAuth) {
		navigate(Routes.Home);
		debugger;
	}

	return (
		<div
			style={{
				backgroundImage: `url(${AppImageProvider.Login.background})`,
				backgroundRepeat: "no-repeat",
				backgroundSize: "cover",
				display: "flex",
				flexFlow: "column nowrap",
				justifyContent: "center",
				alignItems: "center",
				height: "100vh"
			}}
		>
			<div
				style={{
					flex: "0 0 auto",
					fontSize: "2rem",
					fontWeight: "bold",
					color: "white"
				}}
			>
				{loginPageTitle}
			</div>
			<LoginForm />
		</div>
	);
}

export { LoginPage };
