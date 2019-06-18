import React from "react";

import Header from "./Components/Header";
import About from "./Components/About";
import Details from "./Components/Details";
import Portfolio from "./Components/Portfolio";
import Blog from "./Components/Blog";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";

function App() {
  return (
    <div className="App">
      <Header />
      <About />
      <Details />
      <Portfolio />
      <Blog />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
