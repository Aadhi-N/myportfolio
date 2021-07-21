import React from "react";
import { useStaticQuery, graphql } from "gatsby";
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

const IndexPage = ({ data }) => {
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

  //Query site metadata, navbarItems using graphQL
  const query = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          author
          description
          title
        }
      }
      allNavbarYaml {
        nodes {
          navbarItems {
            name
            index
          }
        }
      }
      allPortfolioNavbarYaml {
        nodes {
          portfolioNav {
            name
            index
          }
        }
      }
      allPortfolioProjectsYaml {
        edges {
          node {
            portfolioItems {
              name
              index
              portfolioNavTag
              icon
              title
              stack
              summary
              desc
              website
              github
            }
          }
        }
      }
    }
  `);
  console.log('query', query)
  // Set queried data to pass as props
  const { author, description, title } = query.site.siteMetadata;
  const { navbarItems } = query.allNavbarYaml.nodes[0];
  const { portfolioNav } = query.allPortfolioNavbarYaml.nodes[0];
  const { portfolioItems } = query.allPortfolioProjectsYaml.edges[0].node;

  return (
    <Layout navbarItems={navbarItems}>
      <Helmet>
        <meta name="author" content={author}/>
        <meta name="description" content={description}/>
        <title>{title}</title>
        <html lang="en-US" />
        <link rel="icon" type="image/x-icon" href="../favicon.ico"/>
      </Helmet>
      <Navbar 
        activeEl={[
          {inView: (typeof inView0 === 'undefined') ? false : inView0}, 
          {inView: (typeof inView1 === 'undefined') ? false : inView1}, 
          {inView: (typeof inView2 === 'undefined') ? false : inView2}, 
          {inView: (typeof inView3 === 'undefined') ? false : inView3}, 
        ]}
        navbarItems={navbarItems}/>
      <span ref={ref0}>
        <Hero/>
      </span>
      <span ref={ref1}>
        <PortfolioPage 
        portfolioNav={portfolioNav}
        portfolioItems={portfolioItems}>
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
