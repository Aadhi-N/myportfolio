import React, {Component} from 'react';

import {portfolioContainer, tilesContainer  } from "../styles/custom.module.scss";


class PortfolioPage extends Component {
  constructor(props) {
    super(props);
    this.state = { activeTab: 0 };

    this.handleClickActiveTab = this.handleClickActiveTab.bind(this);
  };

  /* Set tab active state */
  handleClickActiveTab(e) {
    const newActiveTab = e;
    this.setState({ activeTab : newActiveTab,})
  };

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
    
    // Call group function to render tiles 
    let listItems = (
        <div>
          {group(items, 3).map(children =>
            <div className="tile is-ancestor">
              {children.map((item, index) =>  
                <div className={"tile is-parent" + (this.state.activeTab == item.tag || this.state.activeTab == 0 ? " " : " is-hidden")}>          
                  <article className="tile is-child box">
                    <p className="title">{item.name}</p>
                    <p className="subtitle">Subtitle</p>
                  </article>
                </div>)}
            </div>
          )}
        </div>
    )
    return listItems;
  };

  render() {
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
            <div className="container is-fluid" id={tilesContainer}>{this.getPortfolioItems()}
              </div>
          </div>
        </div>
      </div>

    )
  }
}

export default PortfolioPage;




// <li className={this.state.activeTab == 0 ? "is-active" : " "}><a onClick= 
//             {() => this.handleClickActiveTab(0)}>All</a></li>
//                   <li className={this.state.activeTab == 1 ? "is-active" : " "}><a onClick= 
//             {() => this.handleClickActiveTab(1)}>NodeJs/Javascript</a></li>
//                   <li className={this.state.activeTab == 2 ? "is-active" : " "}><a onClick= 
//             {() => this.handleClickActiveTab(2)}>Ruby/Rails</a></li>
//                   <li className={this.state.activeTab == 3 ? "is-active" : " "}><a onClick= 
//             {() => this.handleClickActiveTab(3)}>React</a></li>
//                   <li className={this.state.activeTab == 4 ? "is-active" : " "}><a onClick= 
//             {() => this.handleClickActiveTab(4)}>Angular</a></li>