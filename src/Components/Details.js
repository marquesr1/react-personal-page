import React, { Component } from "react";
import {
  Grid,
  Container,
  Image,
  Icon,
  List,
  Segment,
  Button
} from "semantic-ui-react";
import Avatar from "../Images/avatar.png";
import Curriculum from "../Files/Curriculum.pdf";

export default class Details extends Component {
  render() {
    let name;
    let bio;
    let profession;
    let backgroud;
    let languages;
    let interests;
    let works;
    if (this.props.data) {
      name = this.props.data.name;
      bio = this.props.data.bio;
      profession = this.props.data.profession;
      backgroud = this.props.data.backgroud.map((item, index) => {
        return (
          <List.Item key={index}>
            <h5>{item}</h5>
          </List.Item>
        );
      });
      languages = this.props.data.languages.map((item, index) => {
        return (
          <List.Item key={index}>
            <h5>{item}</h5>
          </List.Item>
        );
      });
      interests = this.props.data.interests.map((item, index) => {
        return (
          <List.Item key={index}>
            <h5>{item}</h5>
          </List.Item>
        );
      });
      works = this.props.data.works.map((item, index) => {
        return (
          <List.Item key={index}>
            <h5>{item}</h5>
          </List.Item>
        );
      });
    } else {
      name = "nome";
      bio = "biografia";
      backgroud = (
        <List.Item>
          <h5>formação</h5>
        </List.Item>
      );
      languages = (
        <List.Item>
          <h5>idioma</h5>
        </List.Item>
      );
      interests = (
        <List.Item>
          <h5>Interesse</h5>
        </List.Item>
      );
      works = (
        <List.Item>
          <h5>atividade</h5>
        </List.Item>
      );
    }
    return (
      <div id="details">
        <Segment padded size="big">
          <Container>
            <Grid
              columns={2}
              relaxed="very"
              textAlign="left"
              verticalAlign="middle"
              doubling
              stackable
            >
              <Grid.Column textAlign="left">
                <h1> </h1>
                <Image src={Avatar} size="small" circular bordered centered />
                <h1> </h1>
                <h2>
                  <Icon name="user" circular inverted size="small" />
                  {name}
                </h2>
                {bio}
                <h1> </h1>
                <h2>
                  <Icon name="briefcase" circular inverted size="small" />
                  Contato com a profissão
                </h2>
                {profession}
                <h1> </h1>
                <a
                  href={Curriculum}
                  style={{
                    textDecoration: "none"
                  }}
                >
                  <Button basic color="black" fluid>
                    CURRÍCULO COMPLETO
                  </Button>
                </a>
              </Grid.Column>
              <Grid.Column>
                <h2>
                  <Icon
                    name="address card outline"
                    circular
                    inverted
                    size="small"
                  />
                  Formação
                </h2>
                <List bulleted>{backgroud}</List>
                <h1> </h1>
                <h2>
                  <Icon
                    name="comment alternate outline"
                    circular
                    inverted
                    size="small"
                  />
                  Idiomas
                </h2>
                <List bulleted>{languages}</List>
                <h1> </h1>
                <h2>
                  <Icon name="heart" circular inverted size="small" />
                  Interesses
                </h2>
                <List bulleted>{interests}</List>
                <h1> </h1>
                <h2>
                  <Icon name="coffee" circular inverted size="small" />
                  Atividades desenvolvidas
                </h2>
                <List bulleted>{works}</List>
              </Grid.Column>
            </Grid>
          </Container>
        </Segment>
      </div>
    );
  }
}
