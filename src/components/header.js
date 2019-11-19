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
          <li>Ricky Chen</li>
          <Link to="/about">About Me</Link>
          <Link to="/portfolio">Portfolio</Link>
          <button type="button" onClick={this.handleClick}>Contact</button>
        </div>

        <div className="header-center"></div>
        
        <div className="header-right">
          <li>Resume</li>
          <li>LinkedIn</li>
          <li>Github</li>
        </div>
      </div>
    );
  }
}

export default Header;