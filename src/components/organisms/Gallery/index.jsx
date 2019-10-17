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
      modal: !this.state.modal,
      image: undefined
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
                  <MDBView className={this.state.image && this.state.image.uid === image.uid ? "active" : undefined}>
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
          {(this.state.modal && this.state.image) &&
          <MDBModal isOpen={this.state.modal} toggle={this.toggle} size="lg">
            <MDBModalBody>
              <MDBRow>
                <MDBCol md="4" className="text-center">
                  <img 
                  src={this.state.image.url}
                  alt={this.state.image.title}
                  className="img-fluid mb-3"
                  />
                    <MDBBtn 
                    color="white"
                    disabled={!this.state.image.available}
                    >
                    <MDBIcon icon="shopping-cart" className="pr-2" />
                    {this.state.image.available ? "Anfragen" : "Nicht verfügbar"}
                    </MDBBtn>
                  
                </MDBCol>
                <MDBCol md="8">
                  <p className="lead font-weight-bold runes">{this.state.image.title}</p>
                  {this.state.image.text ? (
                    <p>{this.state.image.text}</p>
                  ) : (
                    <p>Zu diesem Gemälde sind keine Daten vorhanden.</p>
                  )
                    
                  }
                  {this.state.image.details &&
                  <>
                    <p className="lead font-weight-bold runes">Details</p>
                    <MDBTable>
                      <MDBTableBody>
                      {this.state.image.details.dimensions &&
                        <tr>
                          <td>Maße (cm)</td>
                          <td>{this.state.image.details.dimensions}</td>
                        </tr>
                      }
                      {this.state.image.details.date &&
                        <tr>
                          <td>Entstehdatum</td>
                          <td>{this.state.image.details.date}</td>
                        </tr>
                      }
                      {this.state.image.details.weight &&
                        <tr>
                          <td>Gewicht (kg)</td>
                          <td>{this.state.image.details.weight}</td>
                        </tr>
                      }
                      </MDBTableBody>
                    </MDBTable>
                  </>
                  }
                </MDBCol>
              </MDBRow>
            </MDBModalBody>
            <MDBModalFooter>
              <MDBBtn 
              color="cyan"
              rounded
              onClick={this.toggle}
              >
              <MDBIcon icon="share" className="pr-2" />
              Teilen
              </MDBBtn>
              <MDBBtn 
              color="red"
              rounded
              onClick={this.toggle}
              >
              <MDBIcon icon="times" className="pr-2" />
              Schließen
              </MDBBtn>
            </MDBModalFooter>
          </MDBModal>
          }
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
