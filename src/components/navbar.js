import React, {Component} from 'react';
import { useInView } from "react-intersection-observer";

import scrollTo from 'gatsby-plugin-smoothscroll';

import "../styles/bulma-custom.scss";
import {navbar} from "../styles/custom.module.scss";


class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      activeTab: null,
      
    };
    this.handleClickActiveTab = this.handleClickActiveTab.bind(this);
    console.log('IN NAV', this.props.inView)
  };

  /* Set tab active state */
  handleClickActiveTab(index) {
    const newActiveTab = index;
    this.setState({ activeTab : newActiveTab})
  };

  // activeTab() {
  //   if (inView) {
  //     return 1;
  //   } else if (inView2 && !inView) {
  //     return 2;
  //   }
  // }

  render() {
    return (
      <>
      <nav className="navbar is-hidden-touch is-fixed-top" id={navbar} role="navigation" aria-label="main navigation">
        <div className="navbar-menu ml-5">
          <div className="navbar-start">
            <a className={"navbar-item" + (this.state.activeTab == 0 ? " is-active" : " ")} onClick={() => {scrollTo('#home'); this.handleClickActiveTab(0)}}>
              Home
            </a>
            <a className={"navbar-item"} onClick={() => {scrollTo('#portfolio')}}>
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