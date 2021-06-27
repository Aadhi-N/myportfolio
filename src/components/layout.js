import React, {useState, useEffect} from 'react';

import { useInView } from 'react-intersection-observer'

import Navbar from "./navbar.js";
import NavbarBurger from "./navbar-burger.js";
import Hero from "../pages/hero.js";
import PortfolioPage from '../pages/portfolio.js';
import AboutPage from '../pages/about.js';
import ContactPage from '../pages/contact.js';
import Footer from "./footer.js";

import Search from "../pages/test.js";

import "../styles/custom.module.scss";
import "../styles/bulma-custom.scss";

import screenshot1 from "../images/screenshot.jpg";
import screenshot2 from "../images/screenshot2.jpg";



const Layout = ({children}) => {
  const [ref, inView] = useInView({
    threshold: 0.8
  });

  const [ref2, inView2] = useInView({
    threshold: 0.1
  });

  function activeTab () {
    if (inView) {
      console.log('inview', ref)
      return 1;
    } else if (inView2 && !inView) {
      return 2;
    }
  };

  return (
    <main>
      <NavbarBurger navbarItems={[
        {name: "home", index: 0},
        {name: "portfolio", index: 1},
        {name: "about", index: 2},
        {name: "contact", index: 3},
      ]}/>
      
      <Hero />

      {() => activeTab()}
      <Navbar navbarItems={[
        {name: "home", index: 0},
        {name: "portfolio", index: 1},
        {name: "about", index: 2},
        {name: "contact", index: 3},
      ]}/>

      <PortfolioPage 
        portfolioNav={[
          {name: "All", index: 0},
          {name: "NodeJS/Javascript", index: 1},
          {name: "Ruby/Rails", index: 2},
          {name: "React", index: 3},
          {name: "Angular", index: 4}]}
        portfolioItems={[
          {name: "JS", index: 0, tag: 1, icon: screenshot1, title: "hi", lang: "yo", desc: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
          `},
          {name: "JS", index: 1, tag: 1, icon: screenshot2, title: "hi2", lang: "yo2", desc: "blah2"},
          {name: "Ruby/Rails", index: 2, tag: 2},
          {name: "React", index: 3, tag: 3},
          {name: "Angular", index: 4, tag: 4},
          {name: "Angular", index: 5, tag: 4}]}>
      </PortfolioPage>
      
      <AboutPage/>
      <ContactPage/>
      <Footer/>
    </main>

  )
}

export default Layout;

