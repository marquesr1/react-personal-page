import React, { Component } from "react";
import { Segment } from "semantic-ui-react";

import axios from "axios";

export default class FileUpload extends Component {
  state = {
    selectedFile: "",
    selectedImg: ""
  };

  fileHandler = e => {
    this.setState({ selectedFile: e.target.files[0] });
  };

  imgHandler = e => {
    this.setState({ selectedImg: e.target.files[0] });
  };

  fileUpload = e => {
    const data = new FormData();
    data.append("file", this.state.selectedFile, "curriculum.pdf");
    axios
      .post("http://localhost:9999/upload", data, {
        // receive two parameter endpoint url ,form data
      })
      .then(res => {
        // then print response status
        console.log(res.statusText);
      });
    window.location.reload();
  };

  imgUpload = e => {
    const data = new FormData();
    data.append("file", this.state.selectedImg, "avatar.jpg");
    axios
      .post("http://localhost:9999/upload", data, {
        // receive two parameter endpoint url ,form data
      })
      .then(res => {
        // then print response status
        console.log(res.statusText);
      });
    window.location.reload();
  };

  render() {
    return (
      <Segment>
        <label>
          <b>Curriculo em pdf</b>
        </label>
        <br />
        <input type="file" onChange={this.fileHandler} />
        <button onClick={this.fileUpload}>Enviar</button>
        <br />
        <label>
          <b>Foto em jpg</b>
        </label>
        <br />
        <input type="file" onChange={this.imgHandler} />
        <button onClick={this.imgUpload}>Enviar</button>
      </Segment>
    );
  }
}
