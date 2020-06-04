//> React
// Contains all the functionality necessary to define React components
import React from "react";
// DOM bindings for React Router
import { BrowserRouter as Router } from "react-router-dom";

//> Additional libraries
// Parallax
import { ParallaxProvider } from "react-scroll-parallax";

//> Components
/**
 * Footer: Global Footer
 * Navbar: Global navigation bar
 */
import { Footer, Navbar } from "./components/molecules";
// Routes
import Routes from "./Routes";

class App extends React.Component {
  render() {
    return (
      <ParallaxProvider>
        <Router>
          <div className="flyout">
            <Navbar />
            <main>
              <Routes />
            </main>
            <Footer />
          </div>
        </Router>
      </ParallaxProvider>
    );
  }
}

export default App;

/**
 * SPDX-License-Identifier: (EUPL-1.2)
 * Copyright © 2019 Werbeagentur Christian Aichner
 */
