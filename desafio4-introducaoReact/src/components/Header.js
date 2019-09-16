import React, { Component } from "react";
import face from "../assets/face.png";
import user from "../assets/user.png";
import PostList from "./PostLis";

class Header extends Component {
  render() {
    return (
      <header>
        <div id="nav">
          <div className="esquerda">
            <img src={face} alt="logo facebook" />
          </div>
          <div className="direita">
            <a href="https://www.facebook.com/">
              <p>Meu Perfil</p>
              <img src={user} alt="" />
            </a>
          </div>
        </div>
      </header>
    );
  }
}

export default Header;
