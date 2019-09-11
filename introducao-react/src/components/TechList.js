import React, { Component } from "react";
import react from "../assets/react.png";
import "./TechList.css";
class TechList extends Component {
  state = {
    newTech: "",
    techs: ["Node.js", "ReactJs", "React-Native"]
  };

  handleInputChange = e => {
    this.setState({ newTech: e.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();

    this.setState({ techs: [...this.state.techs, this.state.newTech] });
    this.state.newTech = "";
  };

  handleDelete = tech => {
    this.setState({ techs: this.state.techs.filter(t => t !== tech)})
  };

  render() {
    return (
      <>
        <form onSubmit={this.handleSubmit}>
          <h1>Tech List Bootcamp 8.0</h1>
          <img src={react} alt="" />
          <input
            type="text"
            placeholder="tech"
            onChange={this.handleInputChange}
            value={this.state.newTech}
            onfocus="true"
          />
          <button class="adicionar" type="submit">
            Adicionar
          </button>
          <ul>
            {this.state.techs.map(tech => (
              <li key={tech}>
                {tech}
                <button class="remover" onClick={() => this.handleDelete(tech)} type="button">
                  Remover
                </button>
              </li>
            ))}
          </ul>
        </form>
      </>
    );
  }
}

export default TechList;
