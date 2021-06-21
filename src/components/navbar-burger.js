import React, { Component } from 'react';

import {navBurger, burgerLine} from "../styles/custom.module.scss";
import "../styles/bulma-custom.scss";

class NavbarBurger extends Component {
  constructor(props) {
    super(props);
    this.state = { active: false };
  }
  handleClick = () => {
    console.log('e', this.state.active)
    this.setState({ active: !this.state.active });
   };
  render() {
    return (
    <>
      <nav 
        className="navbar is-hidden-desktop pr-6"
        role="navigation" 
        aria-label="main navigation"
      >
        <div className="navbar-brand">
          <a 
          role="button" 
          className="navbar-burger"
          aria-label="menu" 
          aria-expanded="false"
          onClick={this.handleClick}
          >
            <span aria-hidden="true" ></span>
            <span aria-hidden="true" ></span>
            <span aria-hidden="true" ></span>
          </a>
        </div>

        <div 
          className={"navbar-dropdown px-5 pb-5" + (this.state.active ? " is-hidden " : " ")}
        >
          <a class="navbar-item" id={navBurger}>
            Home
          </a>
          <a class="navbar-item" id={navBurger}>
            Portfolio
          </a>
          <a class="navbar-item" id={navBurger}>
            About
          </a>
          <a class="navbar-item" id={navBurger}>
            Contact
          </a>
        </div>
      </nav>
    </>
    )
  }
}

export default NavbarBurger;