import React, {useState} from 'react';
import PortfolioModal from './portfolio-modal.js';

import {portfolioContainer, tilesContainer, portfolioTileParent, portfolioTileChild, portfolioIcon, portfolioDetails, learnmoreBtn, } from "../styles/custom.module.scss";

const PortfolioPage = ({ref, portfolioNav, portfolioItems}) => {
  const [activeTab, setActiveTab] = useState(" ");
  const [activeTile, setActiveTile] = useState(false);
  const [activeProject, setActiveProject] = useState(null);
  const [modalDetails, setModalDetails] = useState(" ");
  const [activeModal, setActiveModal] = useState(false);


  /* Set tab active state */
  function handleClickActiveTab(index) {
    // const newActiveTab = index;
    setActiveTab(index);
  };

  function handleTileHover(index) {
    console.log('IDX', index)
    setActiveTile(prevActiveTile => !prevActiveTile);
    setActiveProject(index);
  }

  /* Render portfolio navbar */
  function getPortfolioNav() {
    if (portfolioNav) {
      let listNav = portfolioNav.map((item, index) =>
      <li className={activeTab == index ? "is-active" : " "}>
        <a onClick={() => handleClickActiveTab(index)}>{item.name}</a>
      </li>)
      return listNav;
    } else return null;
  };

  function toggleModal(item) {
    setActiveModal(prevActiveModal => !prevActiveModal);
    setModalDetails(prevModalDetails => prevModalDetails = item);
  };

  /* Render portfolio tiles */
  function getPortfolioItems() {
    if (portfolioItems) {

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
              <div className="tile is-ancestor is-justify-content-center">
                {children.map((item, index) =>  
                  <a><div className={"tile is-parent" + (activeTab == item.tag || activeTab == 0 ? " " : " is-hidden")} id={portfolioTileParent}>
                    <article className="tile is-child box" id={portfolioTileChild} onMouseOver={() => handleTileHover(item.index)} onMouseLeave={handleTileHover} onClick={() => toggleModal(item)} >
                    {activeTile && activeProject == item.index ? 
                    <div>
                      <p className="title" id={portfolioDetails}>{item.name}</p>
                      <p className="subtitle" id={portfolioDetails}>{item.lang}</p>
                      <p className="subtitle" id={portfolioDetails}>{item.summary}</p>
                      <div className="column" id={learnmoreBtn}>
                        <button className="button is-danger is-outlined">
                          LEARN MORE
                        </button>                   
                      </div>                 
                    </div>
                    :
                    <figure className="image is-5by4">
                      <img src={item.icon} id={portfolioIcon}/>
                    </figure>
                    }          
                    </article> 
                  </div></a>
                )}
              </div>
            )}
          </div>
      )
      return listItems;
    } else return null;
  };

  return (
    <div id="portfolio">
      <section className="hero is-medium pt-6" id={portfolioContainer}>
        <div className="hero body">
          <h1 className="title is-1 has-text-centered pt-6 is-underlined has-text-weight-bold">PROJECTS</h1>
          
            <span className="tabs is-centered is-medium is-boxed">
              <ul>{getPortfolioNav()}</ul>
            </span>
         
          <span id={tilesContainer}>{getPortfolioItems()}</span>

        {/* modal start */}
          <PortfolioModal activeModal={activeModal} modalDetails={modalDetails} toggleModal={(e) => toggleModal(e)}/>
        {/* modal end */}
          
        </div>
      </section>
    </div>
  )
};

export default PortfolioPage;
