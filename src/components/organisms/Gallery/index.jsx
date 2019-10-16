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
    MDBModal,
    MDBModalBody,
    MDBModalFooter,
    MDBModalHeader,
    MDBTable,
    MDBTableBody,
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
  
  handleImageClick = (image) => {
    this.setState({
      modal: true,
      image: image,
    });
  }

  toggle = () => {
    this.setState({
      modal: !this.state.modal
    });
  }
  
  render() {
    return (
      <div id="gallery">
        <MDBContainer className="text-white">
          <MDBRow>
            {images.map((image, key) => {
              images[key].uid = Math.round(new Date() / (key + 1));
              return(
                <MDBCol md="3" key={key} className="align-self-center">
                  <MDBView>
                    <img 
                    className="img-fluid"
                    src={image.url}
                    alt={image.title}
                    />
                    <MDBMask onClick={() => this.handleImageClick(image)} />
                  </MDBView>
                </MDBCol>
              );
            })}
          </MDBRow>
          <MDBModal isOpen={this.state.modal} toggle={this.toggle} size="lg" className="text-dark">
          {(this.state.modal && this.state.image.uid) &&
          <>
            <MDBModalHeader toggle={this.toggle}>Bildtitel</MDBModalHeader>
            <MDBModalBody>
              <MDBRow>
                <MDBCol md="4" className="text-center">
                  <img 
                  src={this.state.image.url}
                  alt={this.state.image.title}
                  className="img-fluid mb-3"
                  />
                  <MDBBtn 
                  color="elegant"
                  >
                  Anfragen
                  </MDBBtn>
                </MDBCol>
                <MDBCol md="8">
                  <p className="lead font-weight-bold runes">Bildtitel</p>
                  <p>Bildtext</p>
                  <p className="lead font-weight-bold runes">Details</p>
                  <MDBTable>
                  <MDBTableBody>
                    <tr>
                      <td>Maße (cm)</td>
                      <td>20 x 30</td>
                    </tr>
                    <tr>
                      <td>Entstehdatum</td>
                      <td>01.01.2019</td>
                    </tr>
                    <tr>
                      <td>Gewicht (kg)</td>
                      <td>1.5</td>
                    </tr>
                  </MDBTableBody>
                </MDBTable>
                </MDBCol>
              </MDBRow>
            </MDBModalBody>
            <MDBModalFooter>
              <MDBBtn 
              color="red"
              outline
              rounded
              onClick={this.toggle}
              >
              Schließen
              </MDBBtn>
            </MDBModalFooter>
          </>
          }
          </MDBModal>
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
