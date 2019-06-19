import React, { Component } from "react";
import { Container, Grid, Icon } from "semantic-ui-react";
import Background from "../Images/header-background.jpg";

export default class About extends Component {
  render() {
    let name;
    if (this.props.name) {
      name = this.props.name;
    } else {
      name = "'seu nome'";
    }
    let occupation;
    if (this.props.occupation) {
      occupation = this.props.occupation;
    } else {
      occupation = "'sua ocupação'";
    }
    let birthPlace;
    if (this.props.occupation) {
      birthPlace = this.props.birthPlace;
    } else {
      birthPlace = "'sua cidade natal'";
    }
    let city;
    if (this.props.city) {
      city = this.props.city;
    } else {
      city = "'sua cidade atual'";
    }
    let github;
    if (this.props.github) {
      github = this.props.github;
    } else {
      github = "https://github.com";
    }
    let linkedin;
    if (this.props.github) {
      linkedin = this.props.linkedin;
    } else {
      linkedin = "https://linkedin.com/";
    }
    return (
      <Grid
        id="home"
        textAlign="center"
        style={gridStyle}
        verticalAlign="middle"
      >
        <Grid.Column style={{ maxWidth: 600 }}>
          <Container>
            <h2 style={{ color: "LightGrey" }}>
              Olá! sou <b>{name}</b>, <b>{occupation}</b>. Sou de {birthPlace},
              e atualmente moro em {city}.
            </h2>
            <h1> </h1>
            <a
              href={github}
              style={{
                textDecoration: "none"
              }}
            >
              <Icon name="github" size="huge" inverted link />
            </a>
            <a
              href={linkedin}
              style={{
                textDecoration: "none"
              }}
            >
              <Icon name="linkedin" size="huge" inverted link />
            </a>
          </Container>
        </Grid.Column>
      </Grid>
    );
  }
}

const gridStyle = {
  height: "100vh",
  backgroundImage: "url(" + Background + ")",
  backgroundPosition: "center",
  backgroundSize: "cover",
  backgroundRepeat: "no-repeat"
};
