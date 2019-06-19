import React, { Component } from "react";
import { Container, Navbar, Nav } from "react-bootstrap";

export default class Header extends Component {
  render() {
    return (
      <Navbar sticky="top" bg="light" expand="lg">
        <Container>
          <Navbar.Brand href="#home">Rafael Marques</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#details">Detalhes</Nav.Link>
              <Nav.Link href="#works">Portfólio</Nav.Link>
              <Nav.Link href="#blog">Blog</Nav.Link>
              <Nav.Link href="#contact">Contato</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
  }
}
