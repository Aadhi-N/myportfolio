import React, {useState} from 'react';
import { useInView } from "react-intersection-observer";

import scrollTo from 'gatsby-plugin-smoothscroll';

import "../styles/bulma-custom.scss";
import {navbar} from "../styles/custom.module.scss";


const Navbar = ({navbarItems, activeEl}) => {
  
  //set active nav tab
  const [activeTab, setActiveTab] = useState(" ");

  if (activeEl) {
    console.log('el is active')
  } else {
    console.log('el not active')
  }
  // function onScroll(index) {
  //   if (activeEl) {
  //     setActiveTab(index)
  //   } else {
  //     return null;
  //   }
  // }

  return (
    
    <nav className="navbar is-hidden-touch is-fixed-top" id={navbar} role="navigation" aria-label="main navigation">
      <div className="navbar-menu ml-5">
        <div className="navbar-start">
          {navbarItems.map((item, index) => 
            (
              <a 
                // onLoad={activeEl ? (index) => setActiveTab(index) : console.log('no')}
                className={"navbar-item" + (activeTab === index ? " is-active" : " ") + (activeEl ? () => setActiveTab(index) : null)} 
                onClick={() => {scrollTo(`#${item.name}`); setActiveTab(index)}}
                >
                  {item.name.charAt(0).toUpperCase()+item.name.slice(1)}
              </a>
  
            
              
            ),
          
          
          
          
          )}
        </div>
      </div>
    </nav>
  )   
};

export default Navbar;