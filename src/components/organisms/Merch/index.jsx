//> React
// Contains all the functionality necessary to define React components
import React from 'react';

//> MDB
// "Material Design for Bootstrap" is a great UI design framework
import {
    MDBContainer,
} from 'mdbreact';

//> Handlers
import { getSpreadShopItems } from '../../handlers/spreadshop.js';

//> CSS
import './merch.scss';

//> Images
// To be added

class Merch extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }

  render() {
    getSpreadShopItems();
    return (
      <div id="about">
        <MDBContainer className="text-white">
          Merch
        </MDBContainer>
      </div>
    );
  }
}

export default Merch;

/** 
 * SPDX-License-Identifier: (EUPL-1.2)
 * Copyright © 2019 Werbeagentur Christian Aichner
 */
