import React, { Component } from "react";
import { Segment, Card } from "semantic-ui-react";

export default class Works extends Component {
  render() {
    const items = this.props.data.map((item, index) => {
      return (
        <Card
          key={index}
          header={item.header}
          description={item.description}
          extra={
            <a href={item.link}>
              <b>VER</b>
            </a>
          }
        />
      );
    });
    return (
      <div id="works">
        <Segment basic padded="very" textAlign="center" size="massive">
          <h1 style={txtStyle}>Portfólio</h1>
          <h4 style={txtStyle}>Alguns de meus trabalhos realizados</h4>
          <Card.Group centered>{items}</Card.Group>
        </Segment>
      </div>
    );
  }
}

const txtStyle = {
  paddingBottom: "3rem"
};
