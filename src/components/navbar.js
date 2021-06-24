import * as React from 'react'
import scrollTo from 'gatsby-plugin-smoothscroll';

import "../styles/bulma-custom.scss";

const Navbar = () => {

  return (

    <nav className="navbar is-hidden-touch is-fixed-top" id="navbar" role="navigation" aria-label="main navigation">
      <div className="navbar-menu">
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
    
    
    
  )
}

export default Navbar;