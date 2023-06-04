import React from "react";

import { AppRouter } from "components/router/AppRouter";
import { Header } from "components/shared/header/Header";
// import { StateService } from "services/StateService";
// import { MiniContext } from "storage/context/index";

import "./AppLayout.scss";

/**
 * Renders the basic structure of the React application,
 * Notice the className defines layout major styles, from imported AppLayout.css.
 */
export function AppLayout() {
	return (
		<div className="App">
			{/* Begin: Menu - Fixed part of the app */}
			<Header />
			{/* End: Menu - Fixed part of the app */}
			{/* Begin: Moving part of the app */}
			<AppRouter />
			{/* End: Moving part of the app */}
		</div>
	);
}
