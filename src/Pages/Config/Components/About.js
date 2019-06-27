import React, { Component } from "react";
import { Form, Segment } from "semantic-ui-react";

import Api from "../../../Services/Api";

export default class About extends Component {
  state = {
    name: "",
    minibio: ""
  };
  componentDidMount() {
    this.loadName();
    this.loadMinibio();
  }

  loadName = async () => {
    const response = await Api.get("/names/5d14d0e0cd2b7606bcf10bbe");
    this.setState({ name: response.data.data });
    document.title = this.state.name + " - Configuração";
  };

  loadMinibio = async () => {
    const response = await Api.get("/minibio/5d14a9e0968cd727a0fea104");
    this.setState({ minibio: response.data.data });
  };

  onChange = e => this.setState({ [e.target.name]: e.target.value });

  nameSubmit = async e => {
    await Api.put("/names/5d14d0e0cd2b7606bcf10bbe", {
      data: this.state.name
    })
      .then(function(response) {
        console.log(response);
      })
      .catch(function(error) {
        console.log(error);
      });
    window.location.reload();
  };

  minibioSubmit = async e => {
    await Api.put("/minibio/5d14a9e0968cd727a0fea104", {
      data: this.state.minibio
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
      <div>
        <Segment>
          <Form onSubmit={this.nameSubmit}>
            <Form.Input
              name="name"
              label="Nome"
              value={this.state.name}
              onChange={this.onChange}
            />
            <Form.Button>Salvar</Form.Button>
          </Form>
        </Segment>
        <Segment>
          <Form onSubmit={this.minibioSubmit}>
            <Form.TextArea
              name="minibio"
              label="Mini-Biografia"
              value={this.state.minibio}
              onChange={this.onChange}
            />
            <Form.Button>Salvar</Form.Button>
          </Form>
        </Segment>
      </div>
    );
  }
}
