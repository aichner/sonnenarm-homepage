//> React
// Contains all the functionality necessary to define React components
import React from "react";

//> MDB
// "Material Design for Bootstrap" is a great UI design framework
import { MDBContainer } from "mdbreact";

class AboutPage extends React.Component {
  render() {
    return (
      <MDBContainer>
        <h2>Impressum</h2>
        <p>
          Sebastian Fritzer
          <br />
          <br />
          Ulricherstraße 37
          <br />
          9500, Villach - AT
          <br />
          <br />
          sonnenarm@aichner-christian.com
        </p>
        <p>
          Für den Inhalt von verlinkten Drittseiten wird keine Haftung
          übernommen.
        </p>
      </MDBContainer>
    );
  }
}

export default AboutPage;

/**
 * SPDX-License-Identifier: (EUPL-1.2)
 * Copyright © 2019-2020 Werbeagentur Christian Aichner
 */
