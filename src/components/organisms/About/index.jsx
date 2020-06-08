//> React
// Contains all the functionality necessary to define React components
import React from "react";

//> MDB
// "Material Design for Bootstrap" is a great UI design framework
import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBBtn,
  MDBIcon,
  MDBAvatar,
} from "mdbreact";

//> CSS
import "./about.scss";

//> Images
import avatarIMG from "../../../assets/avatar.jpg";

class About extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div id="about">
        <MDBContainer className="text-white py-5 text-center">
          <h2 className="font-weight-bold runes">Über mich</h2>
          <MDBAvatar className="dark">
            <img
              src={avatarIMG}
              alt="Sebastian Portrait"
              className="rounded-circle img-fluid"
            />
          </MDBAvatar>
          <div className="mt-3">
            <MDBRow className="flex-center">
              <MDBCol md="8">
                <p className="runes">
                  |: Kein Tag ohne Nacht :|
                  <br />
                  |: Kein Licht ohne Schatten :|
                  <br />
                  |: Kein Leben ohne Tod :|
                  <br />
                  |: Kein Glück ohne Trauer :|
                  <br />
                </p>
                <p>Was lebt soll streben dürfen - auch die Liebe.</p>
                <p>
                  Das ist die Tragik und die Schönheit der Natur. Ein ewiger
                  Kreislauf. Alles muss irgendwann enden, um neues zu schaffen.
                  Diese Ideologie spiegelt sich in meinen Werken wieder. Ich
                  arbeite mit der Natur - mit dieser Idee - ich arbeite mit mir.
                </p>
                <p>
                  Mit jedem Bild sterbe ich.
                  <br />
                  Mit jedem Bild werde ich neu geboren.
                </p>
                <p>
                  Gedanken, Gefühl und Erinnerungen gehen und neues Wissen und
                  Verständnis kommt - das ist meine Natur, mein Werk, mein
                  Vermächtnis. Meine Farbwahl ist sehr bedacht gewählt - sie
                  erzählt von den Jahreszeiten. Ein Kreislauf der uns alle
                  betrifft - und uns alle beeinflusst.
                  <br />
                  Zudem spiele ich gerne mit hohem Kontrast zwischen Licht und
                  Schatten. Sinnbildlich für das Leben und den Tod, die Hoffnung
                  und die Verzweiflung.
                </p>
                <p>
                  Sie finden auch viele Runen in meinen Werken, da sie
                  thematisch gut zu den Werken passen und ihnen Seele und Inhalt
                  geben.
                </p>
                <p>
                  Fassen wir kurz zusammen: In meinen Werken verbinde ich den
                  Kreislauf der Natur, Runen, meine eigenen Empfindungen. Jedes
                  Bild, jede Farbe, jeder Strich steht für mich. Und meine Liebe
                  zur Natur.
                </p>
                <p className="runes">
                  |: Meinen Verständnis von Leben und Tod :|
                </p>
              </MDBCol>
            </MDBRow>
          </div>
          <a
            href="https://patreon.com/sonnenarm"
            target="_blank"
            rel="noopener noreferrer"
          >
            <MDBBtn color="orange">
              <MDBIcon fab icon="patreon" className="pr-2" />
              <strong>Patreon</strong>
            </MDBBtn>
          </a>
        </MDBContainer>
      </div>
    );
  }
}

export default About;

/**
 * SPDX-License-Identifier: (EUPL-1.2)
 * Copyright © 2019-2020 Werbeagentur Christian Aichner
 */
