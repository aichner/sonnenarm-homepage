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

//> Additional libraries
// Parallax
import { Parallax } from 'react-scroll-parallax';

//> CSS
import './intro.scss';

//> Images
// Background
import BG from '../../../assets/bg.jpg';
// Rune
import Rune from '../../../assets/rune.png';

class MinimalisticIntro extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      collapsed: false,
      greyscale: 100,
      opacity: 1,
      textSize: 2.5,
    };
    this.handleScroll = this.handleScroll.bind(this);
  }

  handleTogglerClick = () => {
    this.setState({
      collapsed: !this.state.collapsed
    });
  };

  getGrayscale = () => {
    return {
      filter: `grayscale(${100 - (window.pageYOffset / 3)}%)`
    }
  }

  getOpacity = () => {
    return {
      opacity: this.state.opacity
    }
  }

  getTextSize = () => {
    return {
      fontSize: this.state.textSize+"rem"
    }
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
  };

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  };

  handleScroll(event) {
    console.log((window.pageYOffset / 400));
    if(window.pageYOffset <= 400){
      this.setState({
        greyscale: 100 - (window.pageYOffset / 4),
        opacity: 1 - (window.pageYOffset / 200),
        textSize: 2.5 + (window.pageYOffset / 400),
      });
    } else if(window.pageYOffset > 400){
      this.setState({
        greyscale: 0,
        opacity: 0,
        opacityLinks: 0,
      });
    }
    
  };

  render() {
    const navStyle = { marginTop: "4rem" };
    const overlay = (
      <div
        id="sidenav-overlay"
        style={{ backgroundColor: "transparent" }}
        onClick={this.handleTogglerClick}
      />
    );

    return (
      <div id="intro" style={this.getGrayscale()}>
        <MDBView src={BG}>
          <MDBMask className="d-flex justify-content-center align-items-center">
            <MDBContainer>
              <Parallax y={[-70, 70]} tagOuter="figure">
                <MDBRow>
                  <MDBCol md="12" className="mb-4 text-center">
                    <img src={Rune} alt="Rune"/>
                    <h5 
                    className="pt-md-5 pt-sm-2 pt-5 pb-md-5 pb-sm-3 pb-5 runes"
                    style={this.getTextSize()}
                    >
                      : Sebastian Sonnenarm :
                    </h5>
                    <div>
                      <MDBBtn 
                      outline
                      color="white"
                      className="runes font-weight-bold"
                      size="lg"
                      >
                        <MDBIcon icon="shopping-basket" className="mr-2"></MDBIcon> Shop
                      </MDBBtn>
                    
                      <MDBBtn 
                      color="white"
                      className="runes font-weight-bold"
                      size="lg"
                      >
                        <MDBIcon icon="book" className="mr-2"></MDBIcon> Ausstellung
                      </MDBBtn>
                    </div>
                  </MDBCol>
                </MDBRow>
              </Parallax>
              {this.state.opacity > 0 &&
                <MDBBtn 
                className="btn-scroll"
                outline
                color="white"
                rounded
                style={this.getOpacity()}
                >
                  <MDBAnimation type="pulse" infinite duration="1s">
                    <MDBIcon icon="angle-down" size="2x" />
                  </MDBAnimation>
                </MDBBtn>
              }
            </MDBContainer>
          </MDBMask>
        </MDBView>
      </div>
    );
  }
}

export default MinimalisticIntro;

/** 
 * SPDX-License-Identifier: (EUPL-1.2)
 * Copyright © 2019 Werbeagentur Christian Aichner
 */
