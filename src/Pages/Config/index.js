import React from "react";
import { Container, Segment } from "semantic-ui-react";

import FileUpload from "./Components/FileUpload";
import About from "./Components/About";
import Details from "./Components/Details";
import Skills from "./Components/Skills";
import Portfolio from "./Components/Portfolio";
import Links from "./Components/Links";

export default function Config() {
  return (
    <Segment inverted basic>
      <Container text>
        <FileUpload />
        <hr />
        <About />
        <hr />
        <Details />
        <hr />
        <Skills />
        <hr />
        <Portfolio />
        <hr />
        <Links />
      </Container>
    </Segment>
  );
}
