import React from 'react';
import '../styles/header.css'
import GithubIcon from '../assets/images/GithubIcon'
import LinkedinIcon from '../assets/images/LinkedinIcon'
import { Link } from 'react-router-dom'

class Header extends React.Component {

  render() {
    return(
      <div className="row-flex">
        <div className="header-left">
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