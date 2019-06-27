import React, { Component } from "react";
import { Form, Segment, Button } from "semantic-ui-react";

import Api from "../../../Services/Api";

export default class Portfolio extends Component {
  state = {
    works: [],
    workTitleInput: "",
    workLinkInput: "",
    workDateInput: "",
    workDescInput: ""
  };
  componentDidMount() {
    this.loadPortfolio();
  }

  loadPortfolio = async () => {
    const response = await Api.get("/portfolio");
    const works = response.data.map(item => {
      return item;
    });
    this.setState({ works: works });
  };

  onChange = e => this.setState({ [e.target.name]: e.target.value });

  removeWork = async e => {
    await Api.delete("/portfolio/" + e.target.name)
      .then(function(response) {
        console.log(response);
      })
      .catch(function(error) {
        console.log(error);
      });
    window.location.reload();
  };

  addWork = async e => {
    await Api.post("/portfolio", {
      title: this.state.workTitleInput,
      description: this.state.workDescInput,
      link: this.state.workLinkInput,
      date: this.state.workDateInput
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
        <Form>
          <label>
            <b>Portfólio</b>
          </label>
          <br />
          <Form.Group widths="equal">
            <Form.Input
              name="workTitleInput"
              placeholder="título"
              type="text"
              value={this.state.workTitleInput}
              onChange={this.onChange}
            />
            <Form.Input
              name="workLinkInput"
              placeholder="url"
              type="text"
              value={this.state.workLinkInput}
              onChange={this.onChange}
            />
            <Form.Input
              name="workDateInput"
              type="date"
              value={this.state.workDateInput}
              onChange={this.onChange}
            />
          </Form.Group>
          <Form.TextArea
            name="workDescInput"
            placeholder="descrição"
            value={this.state.workDescInput}
            onChange={this.onChange}
          />
          <Button primary size="mini" onClick={this.addWork}>
            ADICIONAR
          </Button>
          <ul>
            {this.state.works.map(item => {
              return (
                <li key={item._id}>
                  <Button
                    name={item._id}
                    content="X"
                    circular
                    size="mini"
                    compact
                    onClick={this.removeWork}
                  />
                  {item.title}
                </li>
              );
            })}
          </ul>
        </Form>
      </Segment>
    );
  }
}
