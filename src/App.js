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
    blog: [
      {
        image:
          "https://i0.wp.com/cloud.estacaonerd.com/wp-content/uploads/2019/03/20194706/Stadia_03_19_19.0.jpg",
        header: "Google Stadia, a “Netflix de jogos”",
        description:
          "A Google revelou o preço e outras informações de seu futuro serviço de streaming de jogos",
        p1:
          "O Google Stadia será o serviço de transmissão online de jogos do Google. Anunciado em março, ele funcionará no próprio navegador da companhia, o Chrome. ",
        p2:
          "Não será necessário ter um console específico, tudo funcionará no computador. O usuário poderá interagir com os outros jogadores, assistir clipes de jogos e também jogar. ",
        p3:
          "Ainda não há previsão para quando o Google Stadia chegará ao Brasil.",
        ref:
          "https://exame.abril.com.br/tecnologia/netflix-de-jogos-google-stadia-chega-em-novembro-com-preco-alto/",
        date: ""
      },
      {
        image:
          "https://d2skuhm0vrry40.cloudfront.net/2019/articles/2019-05-27-05-26/amd-ryzen-3rd-gen-navi-announced-1558931160294.jpg/EG11/thumbnail/766x430/format/jpg/quality/75/cover.jpg",
        header: "AMD revela CPUs e GPUs de nova geração ",
        description:
          "As CPUs Ryzen de 3ª geração e as GPUs Navi chegam em Julho. ",
        p1:
          "A AMD anunciou os seus novos processadores, placas gráficas e motherboards na Computex 2019, um dos maiores eventos de hardware.",
        p2:
          "A primeira gpu será a série Radeon RX 5700 e, segundo a AMD, oferece uma performance ao nível da GeForce RTX 2070 da Nvidia. Os novos processadores usam cores Zen 2, oferecendo o dobro da performance, o dobro do tamanho da cache e um importante aumento de 15% nas instruções por relógio, comparado com a atual tecnologia da AMD. ",
        p3:
          "Todos os produtos anunciados pela AMD chegam oficialmente 7 de Julho. Será interessante ver como a Intel e Nvidia vão lutar contra eles.",
        ref:
          "https://www.eurogamer.pt/articles/digitalfoundry-2019-05-27-amd-ryzen-3000-rx-5700-navi-anunciadas",
        date: ""
      },
      {
        image:
          "https://jovemnerd.com.br/wp-content/uploads/2019/06/keanu-reeves-breathtaking-cyberpunk-2077-760x428.jpg",
        header: "Cyberpunk 2077 inaugura uma nova geração de jogos",
        description:
          "Riqueza de detalhes e opções de ação marcam novo RPG da CD Projekt RED",
        p1:
          "A nova geração de videogames pode estar marcada, no papel, para o fim de 2020, data prevista para o lançamento do próximo Xbox, mas ela começa de fato em abril do próximo ano, quando (salvo atrasos) Cyberpunk 2077 chegar às lojas para PlayStation 4, Xbox One e PC.",
        p2:
          "O estúdio polonês, que quebrou paradigmas nesta geração com The Witcher 3, promete repetir a dose com seu próximo game, caso seja entregue tudo o que vimos em uma demonstração de 50 minutos, a portas fechadas, durante a E3 2019. A apresentação fez bastante sucesso não apenas por mostrar mais do jogo, mas também por conta da presença de Keanu Reeves no palco. Com algumas respostas bastante espontâneas às reações da plateia, o ator acabou gerando vários memes.",
        p3:
          "Cyberpunk 2077 será lançado para PlayStation 4, Xbox One e PC, no dia 16 de abril de 2020. Agora é esperar para ver como o jogo se desenrola.",
        ref:
          "https://www.theenemy.com.br/e3-2019/vimos-a-demo-cyberpunk-2077-inaugura-uma-nova-geracao-de-videogame",
        date: ""
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
        <Blog data={this.state.blog} />
        <Contact />
        <Footer data={this.state.footer} />
      </div>
    );
  }
}
