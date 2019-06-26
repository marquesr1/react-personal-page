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
      linkedin: "https://www.linkedin.com/in/rafael-marques-375b80181/"
    },
    details: {
      name: "Rafael Fernandes Marques",
      bio:
        "Em 2013 iniciei o ensino médio na UTFPR, e em 2016 me formei como técnico em mecânica. Em 2017 ingressei no curso de engenharia de software, também na UTFPR, e espero me formar em 2020.",
      profession:
        "O desenvolvimento de software é um campo dinâmico, e as necessidades de trabalho estão mudando constantemente. Por isso, gosto de ficar de olho nas tendências e tecnologias futuras, especialmente na área de IA e aprendizado de máquina.",
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
    blog: [
      {
        image:
          "https://d2skuhm0vrry40.cloudfront.net/2019/articles/2019-05-27-05-26/amd-ryzen-3rd-gen-navi-announced-1558931160294.jpg/EG11/thumbnail/766x430/format/jpg/quality/75/cover.jpg",
        header: "AMD revela CPUs e GPUs de nova geração ",
        description:
          "As CPUs Ryzen de 3ª geração e as GPUs Navi chegam em Julho. ",
        ref:
          "https://www.eurogamer.pt/articles/digitalfoundry-2019-05-27-amd-ryzen-3000-rx-5700-navi-anunciadas"
      },
      {
        image:
          "https://jovemnerd.com.br/wp-content/uploads/2019/06/keanu-reeves-breathtaking-cyberpunk-2077-760x428.jpg",
        header: "Cyberpunk 2077 inaugura uma nova geração de jogos",
        description:
          "Riqueza de detalhes e opções de ação marcam novo RPG da CD Projekt RED",
        ref:
          "https://www.theenemy.com.br/e3-2019/vimos-a-demo-cyberpunk-2077-inaugura-uma-nova-geracao-de-videogame"
      },
      {
        image:
          "https://i0.wp.com/cloud.estacaonerd.com/wp-content/uploads/2019/03/20194706/Stadia_03_19_19.0.jpg",
        header: "Google Stadia, a “Netflix de jogos”",
        description:
          "A Google revelou o preço e outras informações de seu futuro serviço de streaming de jogos",
        ref:
          "https://exame.abril.com.br/tecnologia/netflix-de-jogos-google-stadia-chega-em-novembro-com-preco-alto/"
      }
    ],
    contact: {
      facebook:
        "https://www.facebook.com/people/Rafael-Fernandes/100002207072236",
      linkedin: "https://www.linkedin.com/in/rafael-marques-375b80181/"
    },
    footer: {
      name: "Rafael Fernandes Marques",
      email: "rafael.fmarques@outlook.com"
    }
  };

  componentDidMount() {
    document.title = this.state.about.name;
  }

  render() {
    return (
      <div className="App">
        <Header name={this.state.about.name} />
        <About data={this.state.about} />
        <Details data={this.state.details} />
        <Skills data={this.state.skills} />
        <Works data={this.state.works} />
        <Blog data={this.state.blog} />
        <Contact data={this.state.contact} />
        <Footer data={this.state.footer} />
      </div>
    );
  }
}
