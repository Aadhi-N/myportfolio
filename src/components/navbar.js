import * as React from 'react'

import "../styles/bulma-custom.scss";
import {myContent1} from "../styles/custom.module.scss";

const Navbar = () => {
  const handleClick = () => {
    console.log('iwasclicked');
  }

  return (

    <nav className="navbar is-hidden-touch" role="navigation" aria-label="main navigation">
      <div className="navbar-menu">
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

      </div>
      
    </nav>
    
    
    
  )
}

export default Navbar;