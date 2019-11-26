import React from 'react';
import '../styles/Header.css'
import GithubIcon from '../assets/images/GithubIcon'
import LinkedinIcon from '../assets/images/LinkedinIcon'
import { Link } from 'react-router-dom'

class Header extends React.Component {

  constructor(props) {
    super(props);
    this.headerLeft = React.createRef();
  }

  handleClick = (e) => {
    for (let item of this.headerLeft.current.children) {
      if (item.localName === "li") {
        if (item.classList.contains("show")) {
          item.classList.remove("show");
        } else {
          item.classList.add("show");
        }
      } else {
        if (item.classList.contains("open")) {
          item.classList.remove("open");
        } else {
          item.classList.add("open");
        }
      }
    }
  }

  render() {
    return(
      <div className="flex">
        <div className="header-left" ref={this.headerLeft}>
          <div id="nav-icon" onClick={this.handleClick}>
            <span></span>
            <span></span>
            <span></span>
          </div>
          <li><Link to="/about">About Me</Link></li>
          <li><Link to="/portfolio">Portfolio</Link></li>
          <li><Link to="/contact">Contact</Link></li>
          <li><Link to="/" id="resume">Resume</Link></li>
        </div>

        <div className="header-title">
          <span id="name">Ricky Chen</span>
        </div>

        <div className="header-right">
          <li>
            <a href="https://www.linkedin.com/in/rickychen98/" target="_blank" rel="noopener noreferrer">
              <LinkedinIcon/>
            </a>
          </li>
          <li>
            <a href="https://github.com/hackermanone" target="_blank" rel="noopener noreferrer">
              <GithubIcon/>
            </a>
          </li>
        </div>
      </div>
    );
  }
}

export default Header;