import * as React from 'react';

import scrollTo from 'gatsby-plugin-smoothscroll';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import Navbar from "./navbar.js";
import NavbarBurger from "./navbar-burger.js";
import PortfolioPage from '../pages/portfolio.js';
import AboutPage from '../pages/about.js';
import ContactPage from '../pages/contact.js';
import Footer from "./footer.js";
import Search from "../pages/test.js";

import {heroContainer, heroTitle, heroSubtitle, name, heroText} from "../styles/custom.module.scss";
import "../styles/bulma-custom.scss";


const Layout = () => {

    
  return (
    <main>
      <NavbarBurger></NavbarBurger>
      <section className="hero is-fullheight" id="home">
        <div className="hero-body" id={heroContainer}>
          <div className="container has-text-centered" id={heroText}>
            <p className="title is-size-1" id={heroTitle}>
              Hello, I'm <span id={name}>Aadhilah Nizamdeen</span>.
            </p>
            <p className="subtitle is-size-3" id={heroSubtitle}>
              I'm a full-stack web developer. 
            </p>
            
            
            <div className="view-work p-5">
              <button className="button is-danger is-outlined is-medium" onClick={() => scrollTo('#portfolio')}>
                <span>View my work</span>
                <span className="icon is-medium">
                  <FontAwesomeIcon icon={faArrowRight} />
                </span>
              </button>
            </div>
          </div>
        </div>
      </section>
      <Navbar></Navbar>
      <PortfolioPage></PortfolioPage>
      <AboutPage></AboutPage>
      <ContactPage></ContactPage>
      <Footer></Footer>
      <Search></Search>
    </main>

  )
}

export default Layout;

