import React, { Component } from "react";
import { Form, Segment, Button } from "semantic-ui-react";

import Api from "../../../Services/Api";

export default class Details extends Component {
  state = {
    bio: "",
    info: "",
    background: [],
    languages: [],
    interests: [],
    activities: [],
    interestsInput: "",
    backgroundInput: "",
    languageInput: "",
    activityInput: ""
  };
  componentDidMount() {
    this.loadDetails();
  }

  // Details
  loadDetails = async () => {
    const bioResponse = await Api.get("/bio/5d14ad9ed1100c083033942b");
    const bio = bioResponse.data.data;

    const infoResponse = await Api.get("/infos/5d14ae67d1100c083033942c");
    const info = infoResponse.data.data;

    const backgroundResponse = await Api.get("/background");
    const background = backgroundResponse.data.map(item => {
      return item;
    });

    const languagesResponse = await Api.get("/languages");
    const languages = languagesResponse.data.map(item => {
      return item;
    });

    const interestsResponse = await Api.get("/interests");
    const interests = interestsResponse.data.map(item => {
      return item;
    });

    const activitiesResponse = await Api.get("/activities");
    const activities = activitiesResponse.data.map(item => {
      return item;
    });

    this.setState({
      bio: bio,
      info: info,
      background: background,
      languages: languages,
      interests: interests,
      activities: activities
    });
  };

  onChange = e => this.setState({ [e.target.name]: e.target.value });

  bioSubmit = async e => {
    await Api.put("/bio/5d14ad9ed1100c083033942b", {
      data: this.state.bio
    })
      .then(function(response) {
        console.log(response);
      })
      .catch(function(error) {
        console.log(error);
      });
    window.location.reload();
  };

  infoSubmit = async e => {
    await Api.put("/infos/5d14ae67d1100c083033942c", {
      data: this.state.info
    })
      .then(function(response) {
        console.log(response);
      })
      .catch(function(error) {
        console.log(error);
      });
    window.location.reload();
  };

  removeInterest = async e => {
    await Api.delete("/interests/" + e.target.name)
      .then(function(response) {
        console.log(response);
      })
      .catch(function(error) {
        console.log(error);
      });
    window.location.reload();
  };

  addInterest = async e => {
    await Api.post("/interests", {
      data: this.state.interestsInput
    })
      .then(function(response) {
        console.log(response);
      })
      .catch(function(error) {
        console.log(error);
      });
    window.location.reload();
  };

  removeBackground = async e => {
    await Api.delete("/background/" + e.target.name)
      .then(function(response) {
        console.log(response);
      })
      .catch(function(error) {
        console.log(error);
      });
    window.location.reload();
  };

  addBackground = async e => {
    await Api.post("/background", {
      data: this.state.backgroundInput
    })
      .then(function(response) {
        console.log(response);
      })
      .catch(function(error) {
        console.log(error);
      });
    window.location.reload();
  };

  removeLanguage = async e => {
    await Api.delete("/languages/" + e.target.name)
      .then(function(response) {
        console.log(response);
      })
      .catch(function(error) {
        console.log(error);
      });
    window.location.reload();
  };

  addLanguage = async e => {
    await Api.post("/languages", {
      data: this.state.languageInput
    })
      .then(function(response) {
        console.log(response);
      })
      .catch(function(error) {
        console.log(error);
      });
    window.location.reload();
  };

  removeActivity = async e => {
    await Api.delete("/activities/" + e.target.name)
      .then(function(response) {
        console.log(response);
      })
      .catch(function(error) {
        console.log(error);
      });
    window.location.reload();
  };

  addActivity = async e => {
    await Api.post("/activities", {
      data: this.state.activityInput
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
          <Form onSubmit={this.bioSubmit}>
            <Form.TextArea
              name="bio"
              label="Biografia completa"
              value={this.state.bio}
              onChange={this.onChange}
            />
            <Form.Button>Salvar</Form.Button>
          </Form>
        </Segment>
        <Segment>
          <Form onSubmit={this.infoSubmit}>
            <Form.TextArea
              name="info"
              label="Mais informações"
              value={this.state.info}
              onChange={this.onChange}
            />
            <Form.Button>Salvar</Form.Button>
          </Form>
        </Segment>
        <Segment>
          <Form>
            <label>
              <b>Formação</b>
            </label>
            <br />
            <Form.Input
              name="backgroundInput"
              placeholder="nova formação"
              type="text"
              value={this.state.backgroundInput}
              onChange={this.onChange}
            />
            <Button primary size="mini" onClick={this.addBackground}>
              ADICIONAR
            </Button>
            <ul>
              {this.state.background.map(item => {
                return (
                  <li key={item._id}>
                    <Button
                      name={item._id}
                      content="X"
                      circular
                      size="mini"
                      compact
                      onClick={this.removeBackground}
                    />
                    {item.data}
                  </li>
                );
              })}
            </ul>
          </Form>
        </Segment>
        <Segment>
          <Form>
            <label>
              <b>Interesses</b>
            </label>
            <br />
            <Form.Input
              name="interestsInput"
              placeholder="novo interesse"
              type="text"
              value={this.state.interestsInput}
              onChange={this.onChange}
            />
            <Button primary size="mini" onClick={this.addInterest}>
              ADICIONAR
            </Button>
            <ul>
              {this.state.interests.map(item => {
                return (
                  <li key={item._id}>
                    <Button
                      name={item._id}
                      content="X"
                      circular
                      size="mini"
                      compact
                      onClick={this.removeInterest}
                    />
                    {item.data}
                  </li>
                );
              })}
            </ul>
          </Form>
        </Segment>
        <Segment>
          <Form>
            <label>
              <b>Idiomas</b>
            </label>
            <br />
            <Form.Input
              name="languageInput"
              placeholder="novo idioma"
              type="text"
              value={this.state.languageInput}
              onChange={this.onChange}
            />
            <Button primary size="mini" onClick={this.addLanguage}>
              ADICIONAR
            </Button>
            <ul>
              {this.state.languages.map(item => {
                return (
                  <li key={item._id}>
                    <Button
                      name={item._id}
                      content="X"
                      circular
                      size="mini"
                      compact
                      onClick={this.removeLanguage}
                    />
                    {item.data}
                  </li>
                );
              })}
            </ul>
          </Form>
        </Segment>
        <Segment>
          <Form>
            <label>
              <b>Atividades desenvolvidas</b>
            </label>
            <br />
            <Form.Input
              name="activityInput"
              placeholder="nova atividade"
              type="text"
              value={this.state.activityInput}
              onChange={this.onChange}
            />
            <Button primary size="mini" onClick={this.addActivity}>
              ADICIONAR
            </Button>
            <ul>
              {this.state.activities.map(item => {
                return (
                  <li key={item._id}>
                    <Button
                      name={item._id}
                      content="X"
                      circular
                      size="mini"
                      compact
                      onClick={this.removeActivity}
                    />
                    {item.data}
                  </li>
                );
              })}
            </ul>
          </Form>
        </Segment>
      </div>
    );
  }
}
