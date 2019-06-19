import React from "react";
//import { Container, Menu } from "semantic-ui-react";

import Header from "./Components/Header";
import About from "./Components/About";
import Details from "./Components/Details";
import Works from "./Components/Works";
import Blog from "./Components/Blog";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";

function App() {
  return (
    <div className="App">
      <Header />
      <About />
      <Details />
      <Works />
      <Blog />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
