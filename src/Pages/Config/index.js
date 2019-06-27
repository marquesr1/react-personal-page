import React, { Component } from "react";
import { Container, Form, Segment, Button } from "semantic-ui-react";

import Api from "../../Services/Api";

export default class Config extends Component {
  state = {
    name: "",
    minibio: "",
    bio: "",
    info: "",
    background: [],
    languages: [],
    interests: [],
    activities: [],
    works: [],
    github: "",
    linkedin: "",
    facebook: "",
    email: "",
    skills: [],
    interestsInput: "",
    backgroundInput: "",
    languageInput: "",
    activityInput: "",
    skillInput: "",
    workTitleInput: "",
    workLinkInput: "",
    workDateInput: "",
    workDescInput: ""
  };

  componentDidMount() {
    this.loadName();
    this.loadAbout();
    this.loadDetails();
    this.loadSkills();
    this.loadLinks();
    this.loadPortfolio();
  }

  // About
  loadName = async () => {
    const response = await Api.get("/names/5d14d0e0cd2b7606bcf10bbe");
    this.setState({ name: response.data.data });
    document.title = this.state.name + " - Configuração";
  };

  // About
  loadAbout = async () => {
    const response = await Api.get("/minibio/5d14a9e0968cd727a0fea104");
    this.setState({ minibio: response.data.data });
  };

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

  // Skills
  loadSkills = async () => {
    const response = await Api.get("/skills");
    const skills = response.data.map(item => {
      return item;
    });
    this.setState({ skills: skills });
  };

  // Portfolio
  loadPortfolio = async () => {
    const response = await Api.get("/portfolio");
    const works = response.data.map(item => {
      return item;
    });
    this.setState({ works: works });
  };

  // Links
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
      <Segment inverted basic>
        <Container text>
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
        </Container>
      </Segment>
    );
  }
}
