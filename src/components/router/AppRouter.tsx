import React from "react";
import PropTypes from "prop-types";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

import { Routes } from "./Routes";
import { AppAuthentication } from "components/shared/layer/AppAuthentication";

// Page Components
import { Error404Page } from "components/page/error/Error404Page";
import { HomePage } from "components/page/home/HomePage";
import { LoginPage } from "components/page/login/LoginPage";

// List Page Components
import { ProductsPage } from "components/page/products/ProductsPage";
import { SuppliersPage } from "components/page/suppliers/SuppliersPage";

const ListRoutes = [
	{
		path: Routes.ProductsList,
		element: (
			<AppAuthentication>
				<ProductsPage />
			</AppAuthentication>
		)
	},
	{
		path: Routes.SuppliersList,
		element: (
			<AppAuthentication>
				<SuppliersPage />
			</AppAuthentication>
		)
	}
];

/**
 * The Router object, which contains the routes and the elements to render.
 */
export const RouterConfig = createBrowserRouter([
	...ListRoutes,
	{
		path: Routes.Home,
		element: (
			<AppAuthentication>
				<HomePage />
			</AppAuthentication>
		)
	},
	{
		path: Routes.Login,
		element: <LoginPage />
	},
	{
		path: Routes.Error404,
		element: <Error404Page />
	},
	{
		path: Routes.All,
		element: <Error404Page />
	}
]);

const RouterAnon = createBrowserRouter([
	{
		path: Routes.All,
		element: <LoginPage />
	}
]);

/**
 * Renders pages based on the passed props.routePath.
 *
 * @param {*} param0 The Properties of the component
 * @returns JSX.Element
 */
function AppRouter(): JSX.Element {
	return <RouterProvider router={RouterConfig} />;
}

AppRouter.propTypes = {
	routePath: PropTypes.string
};

export { AppRouter };
