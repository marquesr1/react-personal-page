import React, { Component } from "react";
import { Container, Grid, Icon } from "semantic-ui-react";
import Background from "../Components/Assets/Images/header-background.jpg";

export default class About extends Component {
  render() {
    const minibio = this.props.data;
    const links = this.props.links;

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
              {minibio}
            </h2>

            <a
              href={links.github}
              style={{
                textDecoration: "none"
              }}
            >
              <Icon name="github" size="huge" inverted link />
            </a>
            <a
              href={links.linkedin}
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
