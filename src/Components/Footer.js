import React, { Component } from "react";
import { Segment } from "semantic-ui-react";

export default class Footer extends Component {
  render() {
    let name = "[nome]";
    let email = "[email]";
    if (this.props.data) {
      name = this.props.data.name;
      email = this.props.data.email;
    }
    return (
      <div>
        <Segment basic inverted padded="very" textAlign="center" size="small">
          <h5>{name}</h5>
          <p>{email}</p>
        </Segment>
      </div>
    );
  }
}
