import React, { Component } from "react";
import { Segment, Button, Form, Container, Icon } from "semantic-ui-react";

export default class Contact extends Component {
  render() {
    let facebook = "https://facebook.com/";
    let linkedin = "https://linkedin.com/";
    if (this.props.data) {
      facebook = this.props.data.facebook;
      linkedin = this.props.data.linkedin;
    }
    return (
      <div id="contact">
        <Segment basic padded="very" textAlign="center" size="massive">
          <h1 style={txtStyle}>Contato</h1>
          <h4 style={txtStyle}>
            Me mande uma mensagem usando o formulário abaixo
          </h4>
          <Form
            method="POST"
            action="https://formspree.io/rafael.fmar@gmail.com"
          >
            <Container text>
              <Form.Input type="text" name="name" placeholder="Nome" />
              <Form.Input type="email" name="email" placeholder="Email" />
              <Form.Input type="text" name="subject" placeholder="Assunto" />
              <Form.TextArea name="message" placeholder="Mensagem" />
              <Button
                type="submit"
                basic
                color="black"
                style={{ marginBottom: "3rem" }}
              >
                Enviar
              </Button>
            </Container>
          </Form>
          <h4>Redes sociais</h4>
          <a
            href={facebook}
            style={{
              textDecoration: "none"
            }}
          >
            <Icon color="black" name="facebook" size="large" link />
          </a>
          <a
            href={linkedin}
            style={{
              textDecoration: "none"
            }}
          >
            <Icon color="black" name="linkedin" size="large" link />
          </a>
        </Segment>
      </div>
    );
  }
}

const txtStyle = {
  paddingBottom: "3rem"
};
