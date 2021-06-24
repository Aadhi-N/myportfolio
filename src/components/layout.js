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

import {heroContainer, heroTitle, heroSubtitle, name, heroText} from "../styles/custom.module.scss";
import "../styles/bulma-custom.scss";

import screenshot1 from "../images/screenshot.jpg";
import screenshot2 from "../images/screenshot2.jpg";



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
      <PortfolioPage 
        portfolioNav={[
          {name: "All", index: 0},
          {name: "NodeJS/Javascript", index: 1},
          {name: "Ruby/Rails", index: 2},
          {name: "React", index: 3},
          {name: "Angular", index: 4}]}
        portfolioItems={[
          {name: "JS", index: 0, tag: 1, icon: screenshot1, title: "hi", lang: "yo", desc: "blah"},
          {name: "JS", index: 1, tag: 1, icon: screenshot2, title: "hi2", lang: "yo2", desc: "blah2"},
          {name: "Ruby/Rails", index: 2, tag: 2},
          {name: "React", index: 3, tag: 3},
          {name: "Angular", index: 4, tag: 4},
          {name: "Angular", index: 5, tag: 4}]}>
      </PortfolioPage>
      <AboutPage></AboutPage>
      <ContactPage></ContactPage>
      <Footer></Footer>
    </main>

  )
}

export default Layout;

