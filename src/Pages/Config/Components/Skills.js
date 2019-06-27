import React, { Component } from "react";
import { Form, Segment, Button } from "semantic-ui-react";

import Api from "../../../Services/Api";

export default class Skills extends Component {
  state = {
    skills: [],
    skillInput: ""
  };

  componentDidMount() {
    this.loadSkills();
  }

  loadSkills = async () => {
    const response = await Api.get("/skills");
    const skills = response.data.map(item => {
      return item;
    });
    this.setState({ skills: skills });
  };

  onChange = e => this.setState({ [e.target.name]: e.target.value });

  removeSkill = async e => {
    await Api.delete("/skills/" + e.target.name)
      .then(function(response) {
        console.log(response);
      })
      .catch(function(error) {
        console.log(error);
      });
    window.location.reload();
  };

  addSkill = async e => {
    await Api.post("/skills", {
      data: this.state.skillInput
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
            <b>Habilidades</b>
          </label>
          <br />
          <Form.Input
            name="skillInput"
            placeholder="nova habilidade"
            type="text"
            value={this.state.skillInput}
            onChange={this.onChange}
          />
          <Button primary size="mini" onClick={this.addSkill}>
            ADICIONAR
          </Button>
          <ul>
            {this.state.skills.map(item => {
              return (
                <li key={item._id}>
                  <Button
                    name={item._id}
                    content="X"
                    circular
                    size="mini"
                    compact
                    onClick={this.removeSkill}
                  />
                  {item.data}
                </li>
              );
            })}
          </ul>
        </Form>
      </Segment>
    );
  }
}
