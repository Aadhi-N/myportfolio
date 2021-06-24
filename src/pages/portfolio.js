import React, {Component} from 'react';

import {portfolioContainer, tilesContainer, portfolioTileChild, portfolioIcon, portfolioDetails, btn } from "../styles/custom.module.scss";
// import screenshot from "../images/screenshot.jpg";

class PortfolioPage extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      activeTab: 0,
      activeTile: false,
      activeProject: null,
    };
    this.handleClickActiveTab = this.handleClickActiveTab.bind(this);
  };

  /* Set tab active state */
  handleClickActiveTab(index) {
    const newActiveTab = index;
    this.setState({ activeTab : newActiveTab})
  };

  handleTileHover = (index) => {
    const newActiveProject = index;
    this.setState(prevState => ({
      activeTile: !prevState.activeTile,
      activeProject: index
    }));  
  }

  /* Render portfolio navbar */
  getPortfolioNav() {
    let listNav = this.props.portfolioNav.map((item, index) =>
      <li className={this.state.activeTab == index ? "is-active" : " "}>
        <a onClick={() => this.handleClickActiveTab(index)}>{item.name}</a>
      </li>	
    )
    return listNav;
  };

  /* Render portfolio tiles */
  getPortfolioItems() {
    let items = this.props.portfolioItems;
    // Function that groups every n items together
    const group = (items, n) => items.reduce((acc, currVal, currIdx) => {
      const index = Math.floor(currIdx / n);
      acc[index] = [...(acc[index] || []), currVal];
      return acc;
    }, []);
    console.log('icon', items)

    
    // Call group function to render tiles 
    let listItems = (
        <div>
          {group(items, 3).map(children =>
            <div className="tile is-ancestor">
              {children.map((item, index) =>  
                <div className={"tile is-parent" + (this.state.activeTab == item.tag || this.state.activeTab == 0 ? " " : " is-hidden")}>
                  <article className="tile is-child box" id={portfolioTileChild} onMouseOver={() => this.handleTileHover(item.index)} onMouseLeave={this.handleTileHover}>
                  {this.state.activeTile && this.state.activeProject == item.index ? 
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
                  </figure>
                  </>
                  }          
                  
                  </article> </div>)}
            </div>
          )}
        </div>
    )
    return listItems;
  };

  
  
  
  
  render() {
    const test = <p>hello</p>
    return (
      <div id="portfolio">
        <div className="hero is-medium pt-6" id={portfolioContainer}>
          <div className="hero body">
            <h1 className="title is-1 has-text-centered pt-6 is-underlined has-text-weight-bold">PROJECTS</h1>
            <div className="container pb-6">
              <div className="tabs is-centered is-medium is-boxed">
                <ul>{this.getPortfolioNav()}</ul>
              </div>
            </div>
            <div className="container is-fluid" id={tilesContainer}>{this.getPortfolioItems()}</div>
          </div>
        </div>
      </div>
    )
  }
};

export default PortfolioPage;
