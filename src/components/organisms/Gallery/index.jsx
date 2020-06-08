//> React
// Contains all the functionality necessary to define React components
import React from "react";

//> MDB
// "Material Design for Bootstrap" is a great UI design framework
import {
  MDBMask,
  MDBRow,
  MDBCol,
  MDBBtn,
  MDBView,
  MDBContainer,
  MDBIcon,
  MDBModal,
  MDBModalBody,
  MDBModalFooter,
  MDBTable,
  MDBTableBody,
  MDBInput,
} from "mdbreact";

//> CSS
import "./gallery.scss";

//> Images
import images from "../../../assets/images";

class Gallery extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showAvailable: false,
    };
  }

  handleImageClick = (image) => {
    this.setState({
      modal: true,
      image: image,
    });
  };

  handleCheckboxClick = (e) => {
    this.setState({
      showAvailable: !this.state.showAvailable,
    });
  };

  toggle = () => {
    this.setState({
      modal: !this.state.modal,
      image: undefined,
    });
  };

  render() {
    return (
      <div id="gallery">
        <MDBContainer className="text-white py-4">
          <h2 className="font-weight-bold runes text-center">Ausstellung</h2>
          <div className="py-4 text-center">
            <MDBInput
              label="Verfügbarkeit anzeigen"
              filled
              type="checkbox"
              id="checkbox1"
              checked={this.state.showAvailable}
              onClick={(e) => this.handleCheckboxClick(e)}
            />
          </div>
          <MDBRow>
            {images.map((image, key) => {
              images[key].uid = Math.round(new Date() / (key + 1));
              return (
                <MDBCol
                  md="3"
                  key={key}
                  className={
                    this.state.showAvailable &&
                    (image.available
                      ? "align-self-center available"
                      : "align-self-center sold")
                  }
                >
                  <MDBView
                    className={
                      this.state.image && this.state.image.uid === image.uid
                        ? "active"
                        : undefined
                    }
                  >
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
          {this.state.modal && this.state.image && (
            <MDBModal isOpen={this.state.modal} toggle={this.toggle} size="lg">
              <MDBModalBody>
                <MDBRow>
                  <MDBCol md="4" className="text-center">
                    <img
                      src={this.state.image.url}
                      alt={this.state.image.title}
                      className="img-fluid mb-3"
                    />
                    {this.state.image.available ? (
                      <a
                        href={
                          this.state.image.available
                            ? `mailto:sonnenarm@aichner-christian.com?
subject=Anfrage Bildkauf&
body=Hey, ich bin interessiert das Gemälde mit dem Namen ${this.state.image.title} zu erwerben.`
                            : undefined
                        }
                      >
                        <MDBBtn color="white">
                          <MDBIcon icon="shopping-cart" className="pr-2" />
                          Anfragen
                        </MDBBtn>
                      </a>
                    ) : (
                      <MDBBtn color="white" disabled={true}>
                        <MDBIcon icon="shopping-cart" className="pr-2" />
                        Nicht verfügbar
                      </MDBBtn>
                    )}
                  </MDBCol>
                  <MDBCol md="8">
                    <p className="lead font-weight-bold runes">
                      {this.state.image.title}
                    </p>
                    {this.state.image.text ? (
                      <p
                        className={
                          this.state.image.runes ? "runes normalize" : undefined
                        }
                      >
                        {this.state.image.text}
                      </p>
                    ) : (
                      <p>Zu diesem Gemälde ist keine Beschreibung vorhanden.</p>
                    )}
                    {this.state.image.details && (
                      <>
                        <p className="lead font-weight-bold runes">Details</p>
                        <MDBTable>
                          <MDBTableBody>
                            {this.state.image.details.dimensions && (
                              <tr>
                                <td>Maße (cm)</td>
                                <td>{this.state.image.details.dimensions}</td>
                              </tr>
                            )}
                            {this.state.image.details.date && (
                              <tr>
                                <td>Entstehung</td>
                                <td>{this.state.image.details.date}</td>
                              </tr>
                            )}
                            {this.state.image.details.material && (
                              <tr>
                                <td>Material</td>
                                <td>{this.state.image.details.material}</td>
                              </tr>
                            )}
                          </MDBTableBody>
                        </MDBTable>
                      </>
                    )}
                  </MDBCol>
                </MDBRow>
              </MDBModalBody>
              <MDBModalFooter>
                <MDBBtn color="red" rounded onClick={this.toggle}>
                  <MDBIcon icon="times" className="pr-2" />
                  Schließen
                </MDBBtn>
              </MDBModalFooter>
            </MDBModal>
          )}
        </MDBContainer>
      </div>
    );
  }
}

export default Gallery;

/**
 * SPDX-License-Identifier: (EUPL-1.2)
 * Copyright © 2019-2020 Werbeagentur Christian Aichner
 */
