import React, { Component } from "react";
import { Container, Button, Segment } from "semantic-ui-react";

export default class Skills extends Component {
  render() {
    let skills = "";
    if (this.props.data) {
      skills = this.props.data.map((item, index) => {
        return (
          <Button key={index} inverted compact style={btnStyle}>
            {item}
          </Button>
        );
      });
    }
    return (
      <div id="skills">
        <Segment basic inverted padded="very" textAlign="center" size="massive">
          <h1 style={txtStyle}>Skills</h1>
          <h4 style={txtStyle}>Algumas de minhas habilidades profissionais.</h4>
          <Container text>{skills}</Container>
        </Segment>
      </div>
    );
  }
}

const btnStyle = {
  margin: "0.5rem"
};

const txtStyle = {
  paddingBottom: "3rem"
};
