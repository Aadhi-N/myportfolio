import React, {useState} from 'react';

import Layout from "../components/layout.js";
import PortfolioNav from './portfolio-nav.js';

import {portfolioContainer, tilesContainer, portfolioTileChild, portfolioIcon, portfolioDetails, btn } from "../styles/custom.module.scss";

const PortfolioPage = ({portfolioNav, portfolioItems}) => {
  const [activeTab, setActiveTab] = useState(" ");
  const [activeTile, setActiveTile] = useState(false);
  const [activeProject, setActiveProject] = useState(null);


  /* Set tab active state */
  function handleClickActiveTab(index) {
    // const newActiveTab = index;
    setActiveTab(index);
  };

  function handleTileHover(index) {
    setActiveTile(prevActiveTile => !prevActiveTile);
    setActiveProject(index);
  }


  /* Render portfolio navbar */
  function getPortfolioNav() {
    let listNav = portfolioNav.map((item, index) =>
      <li className={activeTab == index ? "is-active" : " "}>
        <a onClick={() => handleClickActiveTab(index)}>{item.name}</a>
      </li>	
    )
    return listNav;
  };

  /* Render portfolio tiles */
  function getPortfolioItems() {
    let items = portfolioItems;
    // Function that groups every n items together
    const group = (items, n) => items.reduce((acc, currVal, currIdx) => {
      const index = Math.floor(currIdx / n);
      acc[index] = [...(acc[index] || []), currVal];
      return acc;
    }, []);
    
    // Call group function to render tiles 
    let listItems = (
        <div>
          {group(items, 3).map(children =>
            <div className="tile is-ancestor">
              {children.map((item, index) =>  
                <div className={"tile is-parent" + (activeTab == item.tag || activeTab == 0 ? " " : " is-hidden")}>
                  <article className="tile is-child box" id={portfolioTileChild} onMouseOver={() => handleTileHover(item.index)} onMouseLeave={handleTileHover}>
                  {activeTile && activeProject == item.index ? 
                  <span id={portfolioDetails}>
                    <p className="title">{item.name}</p>
                    <p className="subtitle">{item.lang}</p>
                    <p className="subtitle">{item.desc}</p>
                    <span id={btn}>
                      <button className="button is-danger is-outlined is-small">
                        LEARN MORE
                      </button>
                    </span>
                  </span>
                  :
                  <>
                    <figure className="image is-5by4">
                      <img src={item.icon} id={portfolioIcon}/>
                    </figure>`
                  </>
                  }          
                  </article> 
                </div>)}
            </div>
          )}
        </div>
    )
    return listItems;
  };

  return (
    <div id="portfolio">
      <div className="hero is-medium pt-6" id={portfolioContainer}>
        <div className="hero body">
          <h1 className="title is-1 has-text-centered pt-6 is-underlined has-text-weight-bold">PROJECTS</h1>
          <div className="container pb-6">
            <div className="tabs is-centered is-medium is-boxed">
              <ul>{getPortfolioNav()}</ul>
            </div>
          </div>
          <div className="container is-fluid" id={tilesContainer}>{getPortfolioItems()}</div>
        </div>
      </div>
    </div>
  )
};

export default PortfolioPage;
