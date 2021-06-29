

import React, {useRef, useEffect, useState} from "react";

// import { useInView } from 'react-intersection-observer';

import Layout from '../components/layout';
import Navbar from "../components/navbar";
import Hero from "./hero.js";
import PortfolioPage from './portfolio.js';
import AboutPage from './about.js';
import ContactPage from './contact.js';

import screenshot1 from "../images/screenshot.jpg";
import screenshot2 from "../images/screenshot2.jpg";

function useOnScreen(options) {
  const [ref, setRef] = useState(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      setVisible(entry.isIntersecting); //updates state on whether element intersecting or not
    }, options);

    if (ref) {
      observer.observe(ref); //starts intersection observer to observe dom element on screen
    };

    //return a function
    return () => {
      if (ref) {
        observer.unobserve(ref);
      }
    }
  }, [ref, options]);

  //return whether the dom element is visible or not
  return [setRef, visible];
}

const IndexPage = () => {
  const [setRef, visible] = useOnScreen({threshold: 0.2})
  // const [setRef2, visible] = useOnScreen({threshold: 0.2})

  return (
    <Layout >
      <Navbar 
        activeEl={visible}
        navbarItems={[
          {name: "home", index: 0},
          {name: "portfolio", index: 1},
          {name: "about", index: 2},
          {name: "contact", index: 3},
      ]}/>
      
      <Hero />
      <span ref={setRef}>

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
      <span>
      <AboutPage/>

      </span>
      <ContactPage/>
    </Layout>
  )
};

export default IndexPage;