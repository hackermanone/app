import React from 'react';
import '../styles/header.css'

import { Link } from 'react-router-dom'

class Header extends React.Component {

  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick(e) {
    e.preventDefault();
    console.log(e);
  }

  render() {
    return(
      <div className="row-flex">
        <div className="header-left">
          <li id="name">Ricky Chen</li>
          <Link to="/about">About Me</Link>
          <Link to="/portfolio">Portfolio</Link>
          <button type="button" onClick={this.handleClick}>Contact</button>
        </div>

        <div className="header-center"></div>

        <div className="header-right">
          <Link to="/" id="resume">Resume</Link>
          <a href="https://www.linkedin.com/in/rickychen98/" target="_blank" rel="noopener noreferrer">
            <img src={require("../assets/images/linkedin.svg")} alt="linkedin logo"/>
          </a>
          <a href="https://github.com/hackermanone" target="_blank" rel="noopener noreferrer">
            <img src={require("../assets/images/github.svg")} alt="github logo"/>
          </a>
        </div>
      </div>
    );
  }
}

export default Header;