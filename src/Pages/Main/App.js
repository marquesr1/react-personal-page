import React, { Component } from "react";
import Api from "../../Services/Api";

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
    name: "",
    minibio: "",
    details: {
      bio: "",
      info: "",
      background: [],
      languages: [],
      interests: [],
      activities: []
    },
    works: [],
    links: {
      github: "",
      linkedin: "",
      facebook: "",
      email: ""
    },
    skills: [],
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
    ]
  };

  componentDidMount() {
    this.loadName();
    this.loadAbout();
    this.loadDetails();
    this.loadSkills();
    this.loadLinks();
    this.loadPortfolio();
  }

  // About
  loadName = async () => {
    const response = await Api.get("/names/5d14d0e0cd2b7606bcf10bbe");
    this.setState({ name: response.data.data });
    document.title = this.state.name;
  };

  // About
  loadAbout = async () => {
    const response = await Api.get("/minibio/5d14a9e0968cd727a0fea104");
    this.setState({ minibio: response.data.data });
  };

  // Details
  loadDetails = async () => {
    const bioResponse = await Api.get("/bio/5d14ad9ed1100c083033942b");
    const bio = bioResponse.data.data;

    const infoResponse = await Api.get("/infos/5d14ae67d1100c083033942c");
    const info = infoResponse.data.data;

    const backgroundResponse = await Api.get("/background");
    const background = backgroundResponse.data.map(item => {
      return item.data;
    });

    const languagesResponse = await Api.get("/languages");
    const languages = languagesResponse.data.map(item => {
      return item.data;
    });

    const interestsResponse = await Api.get("/interests");
    const interests = interestsResponse.data.map(item => {
      return item.data;
    });

    const activitiesResponse = await Api.get("/activities");
    const activities = activitiesResponse.data.map(item => {
      return item.data;
    });

    this.setState({
      details: {
        bio: bio,
        info: info,
        background: background,
        languages: languages,
        interests: interests,
        activities: activities
      }
    });
  };

  // Skills
  loadSkills = async () => {
    const response = await Api.get("/skills");
    const skills = response.data.map(item => {
      return item.data;
    });
    this.setState({ skills: skills });
  };

  // Portfolio
  loadPortfolio = async () => {
    const response = await Api.get("/portfolio");
    const works = response.data.map(item => {
      return item;
    });
    this.setState({ works: works });
  };

  // Links
  loadLinks = async () => {
    const response = await Api.get("/links/5d14c9f8e8d08d254cdf0c30");
    this.setState({
      links: {
        github: response.data.github,
        linkedin: response.data.linkedin,
        facebook: response.data.facebook,
        email: response.data.email
      }
    });
  };

  render() {
    return (
      <div className="App">
        <Header name={this.state.name} />
        <About data={this.state.minibio} links={this.state.links} />
        <Details data={this.state.details} name={this.state.name} />
        <Skills data={this.state.skills} />
        <Works data={this.state.works} />
        <Blog data={this.state.blog} />
        <Contact data={this.state.links} />
        <Footer name={this.state.name} email={this.state.links.email} />
      </div>
    );
  }
}
