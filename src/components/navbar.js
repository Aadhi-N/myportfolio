import React from 'react';

import scrollTo from 'gatsby-plugin-smoothscroll';

import "../styles/bulma-custom.scss";
import {navbar} from "../styles/custom.module.scss";


const Navbar = ({navbarItems, activeEl}) => {
  //get navbar items
  function getNavItems() {
    let items = navbarItems.map((item, index) => (
        <a 
          className={"navbar-item" + (activeEl[index].inView ? " is-active" : " ")} 
          onClick={() => {scrollTo(`#${item.name}`)}}
          >
            {item.name.charAt(0).toUpperCase()+item.name.slice(1)}
        </a>
      )
    )
    return items;
  };

  return (
    <nav className="navbar is-hidden-touch is-fixed-top" id={navbar} role="navigation" aria-label="main navigation">
      <div className="navbar-menu ml-5">
        <div className="navbar-start">
          {getNavItems()}
        </div>
      </div>
    </nav>
  )   
};

export default Navbar;