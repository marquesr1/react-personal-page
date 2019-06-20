import React, { Component } from "react";
import { Segment, Card } from "semantic-ui-react";

export default class Blog extends Component {
  render() {
    const items = this.props.data.map((item, index) => {
      return (
        <Card
          key={index}
          image={item.image}
          header={item.header}
          description={item.description}
          extra={
            <a href={item.ref} style={{ textDecoration: "none" }}>
              <b>Ver mais</b>
            </a>
          }
        />
      );
    });
    return (
      <div id="blog">
        <Segment basic inverted padded="very" textAlign="center" size="massive">
          <h1 style={txtStyle}>Blog</h1>
          <h4 style={txtStyle}>Alguns posts sobre tecnologia</h4>
          <Card.Group centered>{items}</Card.Group>
        </Segment>
      </div>
    );
  }
}

const txtStyle = {
  paddingBottom: "3rem"
};
