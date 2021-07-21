import React, {useState} from 'react';
import { graphql, StaticQuery } from 'gatsby';
import scrollTo from 'gatsby-plugin-smoothscroll';

import "../styles/bulma-custom.scss";

const NavbarBurger = ({ navbarItemsQuery }) => {
  // const {navbarItems} = navbarItemsQuery.allNavbarYaml.nodes[0];

  const [navBurgerActive, setNavBurgerActive] = useState(false);
  const [activeTab, setActiveTab] = useState(" ");

  function handleClick () {
    setNavBurgerActive(prevNavburgerState => !prevNavburgerState);
   };
  
    return (
      <nav 
        className="navbar is-hidden-desktop-only is-fixed-top"
        role="navigation" 
        aria-label="main navigation"
      >
        {/* burger lines start */}
        <div className="navbar-brand">
          <a 
          role="button" 
          className={"navbar-burger" + (navBurgerActive ? " is-active" : " ")}
          aria-label="menu" 
          aria-expanded="false"
          onClick={handleClick}
          >
            <span aria-hidden="true" ></span>
            <span aria-hidden="true" ></span>
            <span aria-hidden="true" ></span>
          </a>
        </div>
        {/* burger lines end */}

        <div className={"navbar-dropdown px-5 pb-5" + (navBurgerActive ? " " : " is-hidden ")}>
          {navbarItemsQuery.map((item, index) => (
            <a className={"navbar-item" + (activeTab == index ? " is-active" : " ")} onClick={() => {scrollTo(`#${item.name}`); setActiveTab(index); setNavBurgerActive(false)}}>{item.name.charAt(0).toUpperCase()+item.name.slice(1)}</a>
          ))}
        </div>
      </nav>
    )
};

export default NavbarBurger;

