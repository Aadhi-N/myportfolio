

import React from "react";
import { useInView } from 'react-intersection-observer';

import Layout from '../components/layout';
import Navbar from "../components/navbar";
import Hero from "./hero.js";
import PortfolioPage from './portfolio.js';
import AboutPage from './about.js';
import ContactPage from './contact.js';

import screenshot1 from "../images/screenshot.jpg";
import screenshot2 from "../images/screenshot2.jpg";

const IndexPage = () => {
  // define elements for active nav on scroll
  const [ref0, inView0] = useInView({
    threshold: 0.5,
  });
  const [ref1, inView1] = useInView({
    threshold: 0.5,
  });
  const [ref2, inView2] = useInView({
    threshold: 0.5,
  });
  const [ref3, inView3] = useInView({
    threshold: 0.5,
  });

  return (
    <Layout>
      <Navbar 
        activeEl={[
          {inView: (typeof inView0 === 'undefined') ? false : inView0}, 
          {inView: (typeof inView1 === 'undefined') ? false : inView1}, 
          {inView: (typeof inView2 === 'undefined') ? false : inView2}, 
          {inView: (typeof inView3 === 'undefined') ? false : inView3}, 
        ]}
        navbarItems={[
          {name: "home", index: 0},
          {name: "portfolio", index: 1},
          {name: "about", index: 2},
          {name: "contact", index: 3},
      ]}/>
      
      <span ref={ref0}>
        <Hero/>
      </span>
      <span ref={ref1}>
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
          {name: "Ruby/Rails", index: 2, tag: 2, icon: screenshot2, title: "hi2", lang: "yo2", desc: "blah2"},
          {name: "React", index: 3, tag: 3, icon: screenshot2, title: "hi2", lang: "yo2", desc: "blah2"},
          {name: "Angular", index: 4, tag: 4, icon: screenshot2, title: "hi2", lang: "yo2", desc: "blah2"},
          {name: "Angular", index: 5, tag: 4, icon: screenshot2, title: "hi2", lang: "yo2", desc: "blah2"}]}>
        </PortfolioPage>
      </span>
      <span ref={ref2}>
        <AboutPage/>
      </span>
      <span ref={ref3}>
        <ContactPage/>
      </span>
    </Layout>
  )
};

export default IndexPage;