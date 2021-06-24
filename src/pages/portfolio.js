import React, {Component} from 'react';

import {portfolioContainer, portfolioTitle, parentTile  } from "../styles/custom.module.scss";


class PortfolioPage extends Component {
  constructor(props) {
    super(props);
    this.state = { activeTab: 0 };

    this.handleClickActiveTab = this.handleClickActiveTab.bind(this);
  };

  handleClickActiveTab(e) {
    const newActiveTab = e;
    console.log('newactivetab', newActiveTab)
    this.setState({ activeTab : newActiveTab,})
  }






  render() {
    const activeClass ='is-active';
    return (
      <div id="portfolio">
        <div className="hero is-medium pt-6" id={portfolioContainer}>
          <div className="hero body">
  
            <h1 className="title is-1 has-text-centered pt-6 is-underlined has-text-weight-bold">PROJECTS</h1>
            <div className="container pb-6">
              <div className="tabs is-centered is-medium is-boxed">
                <ul>
                  <li className={this.state.activeTab == 0 ? "is-active" : " "}><a onClick= 
            {() => this.handleClickActiveTab(0)}>All</a></li>
                  <li className={this.state.activeTab == 1 ? "is-active" : " "}><a onClick= 
            {() => this.handleClickActiveTab(1)}>NodeJs/Javascript</a></li>
                  <li className={this.state.activeTab == 2 ? "is-active" : " "}><a onClick= 
            {() => this.handleClickActiveTab(2)}>Ruby/Rails</a></li>
                  <li className={this.state.activeTab == 3 ? "is-active" : " "}><a onClick= 
            {() => this.handleClickActiveTab(3)}>React</a></li>
                  <li className={this.state.activeTab == 4 ? "is-active" : " "}><a onClick= 
            {() => this.handleClickActiveTab(4)}>Angular</a></li>
                </ul>
              </div>

              <div className="tile is-ancestor">
                <div className={"tile is-parent" + (this.state.activeTab == 1 || this.state.activeTab == 0 ? " " : " is-hidden")}>          
                  <article className="tile is-child box">
                    <p className="title">NODEJS</p>
                    <p className="subtitle">Subtitle</p>
                  </article>
                </div>

                <div className={"tile is-parent" + (this.state.activeTab == 2 || this.state.activeTab == 0  ? " " : " is-hidden")}>        
                  <article className="tile is-child box">
                    <p className="title">RUBY</p>
                    <p className="subtitle">Subtitle</p>
                  </article>
                </div>
  
                <div className="tile is-parent">          
                  <article className="tile is-child box">
                    <p className="title">RUBY</p>
                    <p className="subtitle">Subtitle</p>
                  </article>
                </div>
              </div>
  
              <div className="tile is-ancestor">
                <div className="tile is-parent">
                  <article className="tile is-child box">
                    <p className="title">ANGULA</p>
                    <p className="subtitle">Subtitle</p>
                  </article>
                </div>
  
                <div className="tile is-parent">
                  <article className="tile is-child box">
                    <p className="title">REACT</p>
                    <p className="subtitle">Subtitle</p>
                  </article>
                </div>
                
                <div className="tile is-parent">
                  <article className="tile is-child box">
                    <p className="title">REACT</p>
                    <p className="subtitle">Subtitle</p>
                  </article>
                </div>
              
              
  
              </div>
              
            </div>
          </div>
          
          
        </div>
      </div>

    )
  }
}

export default PortfolioPage