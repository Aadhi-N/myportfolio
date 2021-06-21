import * as React from 'react';
import { Helmet } from "react-helmet";
import Navbar from "./navbar.js";
// import Footer from "./footer.js";

import {heroContainer, lazy, heroTitle, heroSubtitle, name, heroText, myContent, myContent1} from "../styles/custom.module.scss";
import "../styles/bulma-custom.scss";
// import "../scripts/script.js";

const Layout = ({ pageTitle, children }) => {

  return (
    <div>
      <nav className="navbar is-hidden-desktop" role="navigation" aria-label="main navigation">
        <div className="navbar-brand">
          <a role="button" className="navbar-burger" onClick={handleNavBurger} aria-label="menu" aria-expanded="false">
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </a>
        </div>
        
      </nav>
      <section className="hero is-fullheight">
        <div className="hero-body" id={heroContainer}>
          <div className="container has-text-centered" id={heroText}>
            <p className="title is-size-1" id={heroTitle}>
              Hello, I'm <span id={name}>Aadhilah Nizamdeen</span>.
            </p>
            <p className="subtitle is-size-3" id={heroSubtitle}>
              I'm a full-stack web developer. 
            </p>
          </div>
        </div>
      </section>
      <Navbar></Navbar>
    </div>

  )
}

export default Layout

