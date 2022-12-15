import React from "react";
import PropTypes from "prop-types";
import { Error404Page } from "../page/Error404Page";
import { HomePage } from "../page/HomePage";
import { LoginPage } from "../page/LoginPage";
import { Routes } from "./Routes";

/**
 * Renders pages based on the passed props.routePath.
 *
 * @param {*} param0 The Properties of the component
 * @returns JSX.Element
 */
function AppRouter({ routePath }) {
    let componentToRender;

    switch (routePath) {
        case Routes.Login:
            componentToRender = LoginPage;
            break;
        case Routes.Error404:
            componentToRender = Error404Page;
            break;
        // TODO: After the component is ready, allows the route to be navigatable
        // case Routes.Profile:
        //     componentToRender = ProfilePage;
        //     break;
        case Routes.Home:
        default:
            componentToRender = HomePage;
            break;
    }

    return <>{componentToRender()}</>;
}

AppRouter.propTypes = {
    routePath: PropTypes.string
};

export { AppRouter };
