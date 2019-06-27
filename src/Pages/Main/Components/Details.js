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
import Avatar from "../Components/Assets/Images/avatar.png";
import Curriculum from "../Components/Assets/Files/Curriculum.pdf";

export default class Details extends Component {
  render() {
    let name = this.props.name;
    let bio = this.props.data.bio;
    let profession = this.props.data.info;
    let background = this.props.data.background.map((item, index) => {
      return <List.Item key={index}>{item}</List.Item>;
    });
    let languages = this.props.data.languages.map((item, index) => {
      return <List.Item key={index}>{item}</List.Item>;
    });
    let interests = this.props.data.interests.map((item, index) => {
      return <List.Item key={index}>{item}</List.Item>;
    });
    let activities = this.props.data.activities.map((item, index) => {
      return <List.Item key={index}>{item}</List.Item>;
    });

    return (
      <div id="details">
        <Segment basic padded size="big">
          <Container>
            <Grid
              columns={2}
              relaxed="very"
              textAlign="left"
              verticalAlign="middle"
              doubling
              stackable
            >
              <Grid.Column textAlign="left" style={margin}>
                <Image src={Avatar} size="small" circular bordered centered />
                <h2 style={padding}>
                  <Icon name="user" circular inverted size="small" />
                  {name}
                </h2>
                {bio}
                <h2 style={padding}>
                  <Icon name="briefcase" circular inverted size="small" />
                  Contato com a profissão
                </h2>
                {profession}
                <a
                  href={Curriculum}
                  style={{
                    textDecoration: "none"
                  }}
                >
                  <Button
                    basic
                    color="black"
                    fluid
                    style={{ marginTop: "2rem" }}
                  >
                    BAIXAR CURRÍCULO
                  </Button>
                </a>
              </Grid.Column>
              <Grid.Column style={margin}>
                <h2>
                  <Icon name="graduation cap" circular inverted size="small" />
                  Formação
                </h2>
                <List bulleted>{background}</List>
                <h2 style={padding}>
                  <Icon
                    name="comment alternate outline"
                    circular
                    inverted
                    size="small"
                  />
                  Idiomas
                </h2>
                <List bulleted>{languages}</List>
                <h2 style={padding}>
                  <Icon name="heart" circular inverted size="small" />
                  Interesses
                </h2>
                <List bulleted>{interests}</List>
                <h2 style={padding}>
                  <Icon name="coffee" circular inverted size="small" />
                  Atividades desenvolvidas
                </h2>
                <List bulleted>{activities}</List>
              </Grid.Column>
            </Grid>
          </Container>
        </Segment>
      </div>
    );
  }
}

const padding = {
  paddingTop: "2rem"
};

const margin = {
  marginTop: "2rem",
  marginBottom: "2rem"
};
