import React, { Component } from "react";
import { Form, Segment } from "semantic-ui-react";

import Api from "../../../Services/Api";

export default class Links extends Component {
  state = {
    github: "",
    linkedin: "",
    facebook: "",
    email: ""
  };

  componentDidMount() {
    this.loadLinks();
  }

  loadLinks = async () => {
    const response = await Api.get("/links/5d14c9f8e8d08d254cdf0c30");
    this.setState({
      github: response.data.github,
      linkedin: response.data.linkedin,
      facebook: response.data.facebook,
      email: response.data.email
    });
  };

  onChange = e => this.setState({ [e.target.name]: e.target.value });

  linksSubmit = async e => {
    await Api.put("/links/5d14c9f8e8d08d254cdf0c30", {
      github: this.state.github,
      linkedin: this.state.linkedin,
      facebook: this.state.facebook,
      email: this.state.email
    })
      .then(function(response) {
        console.log(response);
      })
      .catch(function(error) {
        console.log(error);
      });
    window.location.reload();
  };

  render() {
    return (
      <Segment>
        <label>
          <b>Links</b>
        </label>
        <br />
        <Form onSubmit={this.linksSubmit}>
          <Form.Input
            name="github"
            label="Github"
            value={this.state.github}
            onChange={this.onChange}
          />
          <Form.Input
            name="linkedin"
            label="Linkedin"
            value={this.state.linkedin}
            onChange={this.onChange}
          />
          <Form.Input
            name="facebook"
            label="Facebook"
            value={this.state.facebook}
            onChange={this.onChange}
          />
          <Form.Input
            name="email"
            label="Email"
            value={this.state.email}
            onChange={this.onChange}
          />
          <Form.Button>Salvar</Form.Button>
        </Form>
      </Segment>
    );
  }
}
