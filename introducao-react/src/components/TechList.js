import React, { Component } from "react";
import react from "../assets/react.png";
import "./TechList.css";
import TechItem from "./TechItem";

class TechList extends Component {
  state = {
    newTech: "",
    techs: []
  };

  componentDidMount() {
    const techs = localStorage.getItem("techs");

    if (techs) {
      this.setState({ techs: JSON.parse(techs) });
    }
  }

  componentDidUpdate(_, prevState) {
    if (prevState.techs !== this.state.techs) {
      localStorage.setItem("techs", JSON.stringify(this.state.techs));
    }
  }

  handleInputChange = e => {
    this.setState({ newTech: e.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();

    this.setState({ techs: [...this.state.techs, this.state.newTech] });
    this.state.newTech = "";
  };

  handleDelete = tech => {
    this.setState({ techs: this.state.techs.filter(t => t !== tech) });
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <h1>Tech List Bootcamp 8.0</h1>
        <img src={react} alt="" />
        <input
          type="text"
          placeholder="tech"
          onChange={this.handleInputChange}
          value={this.state.newTech}
          autoFocus={true}
        />
        <button className="adicionar" type="submit">
          Adicionar
        </button>
        <ul>
          {this.state.techs.map(tech => (
            <TechItem
              key={tech}
              tech={tech}
              onDelete={() => this.handleDelete(tech)}
            />
          ))}
        </ul>
      </form>
    );
  }
}

export default TechList;
