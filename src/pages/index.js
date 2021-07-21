

import React from "react";
import { useInView } from 'react-intersection-observer';
import { Helmet } from "react-helmet"

import Layout from '../components/layout';
import Navbar from "../components/navbar";
import Hero from "./hero.js";
import PortfolioPage from './portfolio.js';
import AboutPage from './about.js';
import ContactPage from './contact.js';

import terminalIcon from "../images/terminal_icon.png";
import portfolioScreenshot from "../images/portfoliosite_screenshot.png";
import chattyAppScreenshot from "../images/chattyapp_screenshot.png";
import vacationcityScreenshot from "../images/vacationcity_screenshot1.png";
import locallibraryScreenshot from "../images/locallibrary_screenshot1.png";
import rubyScreenshot from "../images/ruby.png";

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
      <Helmet>
        <meta name="author" content="Aadhilah Nizamdeen"/>
        <meta name="description" content="Portfolio site to showcase projects and web development skills"/>
        <title>Aadhilah Nizamdeen Portfolio Site</title>
        <html lang="en-US" />
      </Helmet>
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
          {name: "adistodo", index: 0, tag: 1, icon: terminalIcon, title: "NodeJS cli app", lang: "NodeJS", summary: `A task management app.`, desc: "Adistodo is a task-management app that can manage even your most complex, overwhelming lists in life, all through the terminal.", website: null, github: "https://github.com/Aadhi-N/adistodo-cli"},
          {name: "lookuptime", index: 1, tag: 1, icon: terminalIcon, title: "NodeJS cli app", lang: "NodeJS", summary: `An app to check the time around the world.`, desc: `Lookuptime is a world time lookup cli app using the "worldtimeapi" API.
          It's a quick way to check what the time is in another city, right in your terminal.`, website: null, github: "https://github.com/Aadhi-N/lookuptime"},
          {name: "Portfolio Site", index: 2, tag: 3, icon: portfolioScreenshot, title: "My portfolio site", lang: "Gatsby, Bulma, Sass", summary: "Website to showcase my projects.", desc: "My portfolio website was created to showcase my projects. Frontend framework is Gatsby (based on React), and Bulma/Sass for CSS.", website: "https://www.aadhilah.com", github: "https://github.com/Aadhi-N/myportfolio"},
          {name: "Chatty App", index: 3, tag: 3, icon: chattyAppScreenshot, title: "Real-time chat application", lang: "React, Websockets", summary: "Real-time chat application", desc: "Chatty App is a client-side single-page application where multiple users can chat with each other in real time. It is built with React and Websockets.", github: "https://github.com/Aadhi-N/ChattyAppFinal"},
          {name: "Local Library App", index: 4, tag: 1, icon: locallibraryScreenshot, title: "Library App", lang: "NodeJS", summary: `Online catalog for a small library`, desc: "Local Library App is an online catalog for a small library. Users can browse available books and administrators can manage accounts and inventory.", website: "https://safe-citadel-71112.herokuapp.com/", github: "https://github.com/Aadhi-N/locallibraryapp"},
          {name: "Vacation City", index: 5, tag: 4, icon: vacationcityScreenshot, title: "Choose a vacation destination based on the weather", lang: "Angular", summary: `An app to choose a vacation destination based on the weather`, desc: `Vacation City is an app that allows people to choose their next vacation based on what the weather is at a particular month around the world.
          Have you ever had difficulty scheduling your future vacation on a particular calendar month, only to find out the city you want to travel to has unideal weather conditions?
          This app helps you narrow down where you'd like to go based on your preferred travel month, temperatures, and humidity!`, website: "https://vacationcity.herokuapp.com/", github: "https://github.com/Aadhi-N/vacationcity-v2"},
          {name: "E-Commerce App", index: 6, tag: 2, icon: rubyScreenshot, title: "E-Commerce App", lang: "Ruby/Rails", summary: `An e-commerce site.`, desc: "E-Commerce", github: "https://github.com/Aadhi-N/jungle-rails"},
          
          ]}>
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