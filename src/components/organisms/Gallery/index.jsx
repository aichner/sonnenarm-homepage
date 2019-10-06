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
import Rune from '../../../assets/images/odin.jpg';

//> Data
// Images
const images = [
  { img: Rune, title: "The rune" }
];

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
          <MDBRow>
            {images.map((image, key) => {
              return(
                <MDBCol md="4">
                  <img 
                  className="img-fluid"
                  src={image.img}
                  alt={image.title}
                  />
                </MDBCol>
              );
            })}
            

          </MDBRow>
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
