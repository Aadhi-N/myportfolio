import * as React from 'react'
import { StaticImage } from "gatsby-plugin-image";

import "../styles/bulma-custom.scss";
import {heroContainer, lazy, heroTitle, heroSubtitle, name, heroText} from "../styles/custom.module.scss";

const Layout = ({ pageTitle, children }) => {
  return (

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

      <nav class="navbar is-spaced" role="navigation" aria-label="main navigation">
      <div id="navbarBasicExample" class="navbar-menu">
        <div class="navbar-start">
          <a class="navbar-item">
            Home
          </a>
          <a class="navbar-item">
            Portfolio
          </a>
          <a class="navbar-item">
            About
          </a>
          <a class="navbar-item">
            Contact
          </a>
        </div>
      </div>
      </nav>
    </section>
  )
}

export default Layout

