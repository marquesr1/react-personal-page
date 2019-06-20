import React, { Component } from "react";

import Header from "./Components/Header";
import About from "./Components/About";
import Details from "./Components/Details";
import Skills from "./Components/Skills";
import Works from "./Components/Works";
import Blog from "./Components/Blog";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";

export default class App extends Component {
  state = {
    about: {
      name: "Rafael Marques",
      occupation: "estudante de Engenharia de Software",
      birthPlace: "Cornélio Procópio - PR",
      city: "Cornélio",
      github: "https://github.com/marquesr1/",
      linkedin: "https://linkedin.com/"
    },
    details: {
      name: "Rafael Fernandes Marques",
      bio:
        "Aute in ad ullamco incididunt do esse dolor ut ut do fugiat. Dolore commodo eu laboris deserunt labore reprehenderit eiusmod eu id minim officia proident. Eiusmod minim nisi duis voluptate amet irure et voluptate anim. Elit Lorem non non aute mollit proident ad. In et id laborum excepteur est dolore magna laborum proident fugiat velit fugiat reprehenderit. Ad anim ad ut ex.",
      profession:
        "Dolor amet veniam dolore adipisicing consectetur consectetur nulla culpa ut cupidatat Lorem commodo proident. Ad eiusmod proident reprehenderit laborum exercitation. Pariatur sint quis id cupidatat pariatur tempor dolor irure. Excepteur in id quis duis sit eiusmod quis irure irure quis commodo tempor ut.",
      backgroud: [
        "UTFPR/6º período - Bacharelado em Engenharia de Software",
        "UTFPR/2016 - Técnico em Produção Mecânica, com nível médio integrado"
      ],
      languages: ["Português – Nativo", "Inglês – Intermediário"],
      interests: ["Desenvolvimento Web", "Inteligência Artificial"],
      works: ["Desenvolvimento de Sistemas Web", "Projetos em AutoCad"]
    },
    skills: [
      "C",
      "C#",
      "Java",
      "JavaScript",
      "JQuery",
      "HTML5",
      "CSS3",
      "Bootstrap",
      "React",
      "Semantic UI React",
      "NodeJs",
      "SQL",
      "Git",
      "Windows",
      "Linux"
    ],
    works: [
      {
        header: "Página Pessoal",
        description:
          "Página pessoal desenvolvida utilizando React para apresentação na disciplina Programação Web 1",
        link: "https://github.com/marquesr1/react-personal-page"
      },
      {
        header: "Desafio 4Devs",
        description:
          "Implementação do Desafio 4Devs da ForLogic utilizando React ",
        link: "https://github.com/marquesr1/desafio-4-devs"
      }
    ],
    footer: {
      name: "Rafael Fernandes Marques",
      email: "rafael.fmarques@outlook.com"
    }
  };

  render() {
    return (
      <div className="App">
        <Header name={this.state.about.name} />
        <About data={this.state.about} />
        <Details data={this.state.details} />
        <Skills data={this.state.skills} />
        <Works data={this.state.works} />
        <Blog />
        <Contact />
        <Footer data={this.state.footer} />
      </div>
    );
  }
}
