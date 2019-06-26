import React, { Component } from "react";
import { Container, Grid, Icon } from "semantic-ui-react";
import Background from "../Components/Assets/Images/header-background.jpg";

export default class About extends Component {
  render() {
    let name = "[nome]";
    let occupation = "[ocupacao]";
    let birthPlace = "[local de nascimento]";
    let city = "[local atual]";
    let github = "https://github.com/";
    let linkedin = "https://linkedin.com/";
    if (this.props.data) {
      name = this.props.data.name;
      occupation = this.props.data.occupation;
      birthPlace = this.props.data.birthPlace;
      city = this.props.data.city;
      github = this.props.data.github;
      linkedin = this.props.data.linkedin;
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
            <h2 style={{ color: "LightGrey", paddingBottom: "3rem" }}>
              Olá! sou <b>{name}</b>, <b>{occupation}</b>. Sou de {birthPlace},
              e atualmente moro em {city}.
            </h2>

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
