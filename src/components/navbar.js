import * as React from 'react'

import "../styles/bulma-custom.scss";

const Navbar = () => {
  return (

    <nav class="navbar" role="navigation" aria-label="main navigation">
      <div class="navbar-brand">
        <div className="navbar-start">
          <a className="navbar-item">
            Home
          </a>
          <a className="navbar-item">
            Portfolio
          </a>
          <a className="navbar-item">
            About
          </a>
          <a className="navbar-item">
            Contact
          </a>
        </div>

        <a role="button" class="navbar-burger" data-target="navMenu" aria-label="menu" aria-expanded="false">
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>
    </nav>
    
    
    
  )
}

export default Navbar;