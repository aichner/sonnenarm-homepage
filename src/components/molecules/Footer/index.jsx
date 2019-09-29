//> React
// Contains all the functionality necessary to define React components
import React from 'react';

//> MDB
// "Material Design for Bootstrap" is a great UI design framework
import {
    MDBFooter,
    MDBRow,
    MDBCol,
    MDBContainer,
    MDBBtn,
    MDBIcon,
} from 'mdbreact';

//> Images
// Signature
import Sign from '../../../assets/signature.png';

class Footer extends React.Component{
    render(){
        return(
            <MDBFooter color="agency-dark" className="font-small pt-4">
                <MDBContainer className="text-center text-md-left">
                    <MDBRow>
                    <MDBCol md="3" className="runes">
                        <h5 className="title font-weight-bold">Ich bin Sebastian Sonnenarm</h5>
                        <img className="img-fluid" src={Sign} alt="Sebastian" />
                        <p>
                        : Årle ell i dagars hell :<br/>
                        : enn veit ravnen om eg fell :
                        </p>
                    </MDBCol>
                    <MDBCol md="9" className="h-auto flex-center">
                        <MDBRow className="text-center">
                            <MDBCol md="12">
                                <p className="runes font-weight-bold">Wie kannst Du mich unterstützen?</p>
                            </MDBCol>
                            <MDBCol md="12">
                                <a
                                href="https://patreon.com/sonnenarm"
                                >
                                    <MDBBtn 
                                    color="orange"
                                    >
                                        <MDBIcon fab icon="patreon" className="pr-2" />
                                        <strong>Patreon</strong>
                                    </MDBBtn>
                                </a>
                                <MDBBtn 
                                color="pink"
                                >
                                    <MDBIcon fab icon="instagram" className="pr-2" />
                                    Instagram
                                </MDBBtn>
                                <MDBBtn 
                                color="elegant"
                                >
                                    <MDBIcon icon="mug-hot" className="pr-2" />
                                    Kaffee spendieren
                                </MDBBtn>
                            </MDBCol>
                        </MDBRow>
                    </MDBCol>
                    </MDBRow>
                </MDBContainer>
                <div className="footer-copyright text-center py-3">
                    <MDBContainer fluid>
                        &copy; {new Date().getFullYear()} Copyright: Sebastian Fritzer
                        <p className="my-2 font-weight-bold ">
                            Made with 
                            <i 
                            className="fas fa-heart pulse red-text pr-1 pl-1"
                            aria-hidden="true"
                            ></i> 
                            by 
                            <a
                            href="https://www.aichner-christian.com/?refer=sonnenarm"
                            target="_blank"
                            rel="noopener noreferrer"
                            > Werbeagentur Christian Aichner
                            </a>
                        </p>
                    </MDBContainer>
                </div>
            </MDBFooter>
        );
    }
}

export default Footer;

/** 
 * SPDX-License-Identifier: (EUPL-1.2)
 * Copyright © 2019 Werbeagentur Christian Aichner
 */
