import * as React from 'react'

import "../styles/bulma-custom.scss";
// import {myContent1} from "../styles/custom.module.scss";

const Navbar = () => {

  return (

    <nav className="navbar is-hidden-touch" role="navigation" aria-label="main navigation">
      <div className="navbar-menu">
        <div className="navbar-start">
          <a className="navbar-item" href="/">
            Home
          </a>
          <a className="navbar-item" href="/portfolio">
            Portfolio
          </a>
          <a className="navbar-item" href="/about">
            About
          </a>
          <a className="navbar-item" href="/contact">
            Contact
          </a>
        </div>

      </div>
      
    </nav>
    
    
    
  )
}

export default Navbar;