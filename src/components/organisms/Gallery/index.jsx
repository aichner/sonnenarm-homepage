//> React
// Contains all the functionality necessary to define React components
import React from 'react';

//> MDB
// "Material Design for Bootstrap" is a great UI design framework
import {
    MDBMask,
    MDBRow,
    MDBCol,
    MDBBtn,
    MDBView,
    MDBContainer,
    MDBFormInline,
    MDBIcon,
    MDBAnimation,
} from 'mdbreact';

//> CSS
import './gallery.scss';

//> Images
// To be added

class Gallery extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }

  render() {
    return (
      <div id="about">
        <MDBContainer className="text-white">
          Gallery
        </MDBContainer>
      </div>
    );
  }
}

export default Gallery;

/** 
 * SPDX-License-Identifier: (EUPL-1.2)
 * Copyright © 2019 Werbeagentur Christian Aichner
 */
