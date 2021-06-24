import React, {Component} from 'react'
import scrollTo from 'gatsby-plugin-smoothscroll';

import "../styles/bulma-custom.scss";
import {navbar} from "../styles/custom.module.scss";


class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      activeTab: 0,
      activeTile: false,
      activeProject: null,
    };
    this.handleClickActiveTab = this.handleClickActiveTab.bind(this);
  };

  /* Set tab active state */
  handleClickActiveTab(index) {
    const newActiveTab = index;
    this.setState({ activeTab : newActiveTab})
  };
  render() {
    return (
      <>
      <nav className="navbar is-hidden-touch is-fixed-top" id={navbar} role="navigation" aria-label="main navigation">
        <div className="navbar-menu ml-5">
          <div className="navbar-start">
            <a className="navbar-item" onClick={() => scrollTo('#home')}>
              Home
            </a>
            <a className="navbar-item" onClick={() => scrollTo('#portfolio')}>
              Portfolio
            </a>
            <a className="navbar-item" onClick={() => scrollTo('#about')}>
              About
            </a>
            <a className="navbar-item" onClick={() => scrollTo('#contact')}>
              Contact
            </a>
          </div>
  
        </div>
        
      </nav>
      </>
    )
      
  }
  
    

}

export default Navbar;