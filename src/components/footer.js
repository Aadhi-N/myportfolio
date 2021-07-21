import * as React from 'react';
import scrollTo from 'gatsby-plugin-smoothscroll';

import {footerIcon} from "../styles/custom.module.scss";
import arrowUp from "../images/arrow_up.png";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="content has-text-centered">
        <span className="footer-icon">
          <a>
          <img className="is-fullwidth" src={arrowUp} id={footerIcon} alt="arrow up icon" onClick={() => scrollTo('#home')}/>
          </a>
        </span>
        <p>
          <strong>Aadhilah Nizamdeen</strong> &copy;2021
        </p>
      </div>
    </footer>
  )
}

export default Footer;