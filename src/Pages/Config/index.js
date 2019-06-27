import React, { Component } from "react";
import { Container, Form, Segment } from "semantic-ui-react";

import Api from "../../Services/Api";

export default class Config extends Component {
  state = {
    repos: ""
  };
  componentDidMount() {
    this.load();
  }
  load = async () => {
    const response = await Api.get("/minibio");
    console.log(response.data[0]._id);
    this.setState({ repos: response.data[0]._id });
  };
  render() {
    return (
      <Container>
        <Container text>
          <Segment>
            <Form>
              <Form.TextArea label="Mini-Biografia" />
              <Form.Button>Submit</Form.Button>
            </Form>
          </Segment>
          <Segment>
            <Form>
              <Form.TextArea label="Interesses" />
              <Form.Button>Submit</Form.Button>
            </Form>
          </Segment>
          <Segment>
            <Form>
              <Form.TextArea label="Idiomas" />
              <Form.Button>Submit</Form.Button>
            </Form>
          </Segment>
          <Segment>
            <Form>
              <Form.TextArea label="Formação" />
              <Form.Button>Submit</Form.Button>
            </Form>
          </Segment>
          <Segment>
            <Form>
              <Form.TextArea label="Atividades desenvolvidas" />
              <Form.Button>Submit</Form.Button>
            </Form>
          </Segment>
          <Segment>
            <Form>
              <Form.TextArea label="Principais habilidades" />
              <Form.Button>Submit</Form.Button>
            </Form>
          </Segment>
          <Segment>
            <Form>
              <Form.TextArea label="Projetos que já executou" />
              <Form.Button>Submit</Form.Button>
            </Form>
          </Segment>
          <Segment>
            <Form>
              <Form.TextArea label="Mais informações" />
              <Form.Button>Submit</Form.Button>
            </Form>
          </Segment>
          <Segment>
            <Form>
              <Form.TextArea label="Biografia completa" />
              <Form.Button>Submit</Form.Button>
            </Form>
          </Segment>
          <Segment>
            <Form>
              <Form.TextArea label="Links" />
              <Form.Button>Submit</Form.Button>
            </Form>
          </Segment>
        </Container>
      </Container>
    );
  }
}
