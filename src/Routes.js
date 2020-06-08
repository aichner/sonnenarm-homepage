//> React
// Contains all the functionality necessary to define React components
import React from "react";
// DOM bindings for React Router
import { Route, Switch } from "react-router-dom";

//> Components
/**
 * HomePage: The Homepage
 * AboutPage: About (Impressum)
 */
import { HomePage, AboutPage } from "./components/pages";

class Routes extends React.Component {
  render() {
    return (
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/about" component={AboutPage} />
      </Switch>
    );
  }
}

export default Routes;

/**
 * SPDX-License-Identifier: (EUPL-1.2)
 * Copyright © 2019-2020 Werbeagentur Christian Aichner
 */
