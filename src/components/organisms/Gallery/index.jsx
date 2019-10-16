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
import images from '../../../assets/images';

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
                <MDBCol key={key}>
                  <img 
                  className="img-fluid"
                  src={image.url}
                  alt={image.title}
                  style={{maxHeight: "300px", minWidth: "200px"}}
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
