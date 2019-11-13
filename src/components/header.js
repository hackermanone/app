import React from 'react';
import '../styles/header.css'
class Header extends React.Component {
    render() {
        return(
            <div className="row-flex">
                <div className="header-left">
                    <li>Ricky Chen</li>
                    <li>About Me</li>
                    <li>Portfolio</li>
                    <li>Contact</li>
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