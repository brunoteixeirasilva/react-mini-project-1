import React from "react";
import PropTypes from "prop-types";
import { Error404Page } from "../page/Error404Page";
import { HomePage } from "../page/HomePage";
import { LoginPage } from "../page/LoginPage";

/**
 * Renders pages based on the passed props.routePath.
 *
 * @param {*} param0 The Properties of the component
 * @returns JSX.Element
 */
function AppRouter({ routePath }) {
  let componentToRender;

  switch (routePath) {
    case "/home":
      componentToRender = HomePage;
      break;
    case "/e404":
      componentToRender = Error404Page;
      break;
    case "/login":
    default:
      componentToRender = LoginPage;
      break;
  }

  return <>{componentToRender()}</>;
}

AppRouter.propTypes = {
  routePath: PropTypes.string,
};

export { AppRouter };
