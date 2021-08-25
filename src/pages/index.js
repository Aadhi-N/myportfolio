import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import { useInView } from 'react-intersection-observer';
import { Helmet } from "react-helmet";

import { injectGA } from "../scripts/gtag";

import Layout from '../components/layout';
import Navbar from "../components/navbar";
import Hero from "./hero.js";
import PortfolioPage from './portfolio.js';
import AboutPage from './about.js';
import ContactPage from './contact.js';

const IndexPage = () => {
  // define elements for active nav on scroll
  const [ref0, inView0] = useInView({
    threshold: 0, //% of how much should come into view before triggering
  });
  const [ref1, inView1] = useInView({
    threshold: 0.3,
  });
  const [ref2, inView2] = useInView({
    threshold: 0.3,
  });
  const [ref3, inView3] = useInView({
    threshold: 1,
  });

  const activeView = () => {
    if (inView0) { return 0 } 
    else if (inView1 && !inView2) { return 1}
    else if (inView2 && !inView3) { return 2}
    else { return 3 };
  }

  //Query site metadata, navbarItems, portfolioItems using graphQL
  const query = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          author
          description
          title
          gTagSrc
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

  // Set queried data to pass as props
  const { author, description, title, gTagSrc } = query.site.siteMetadata;
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
        <link rel="icon" type="image/x-icon" href="../images/favicon.ico"/>
        <script async src={gTagSrc}></script>
        <script>{injectGA()}</script>
      </Helmet>
      <Navbar 
        activeView={activeView()}
        navbarItems={navbarItems}/>
      <span ref={ref0} id="ref0">
        <Hero/>
      </span>
      <span ref={ref1} id="ref1">
        <PortfolioPage 
        portfolioNav={portfolioNav}
        portfolioItems={portfolioItems}>
        </PortfolioPage>
      </span>
      <span ref={ref2} id="ref2">
        <AboutPage/>
      </span>
      <span ref={ref3} id="ref3">
        <ContactPage/>
      </span>
    </Layout>
  )
};

export default IndexPage;


