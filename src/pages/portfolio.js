import * as React from 'react'
import Layout from '../components/layout'
import {portfolioContainer, portfolioTitle, parentTile  } from "../styles/custom.module.scss";


const PortfolioPage = () => {
  return (
    <>
      <div className="hero is-medium pt-6" id={portfolioContainer}>
        <div className="hero body">

          <h1 className="title is-1 has-text-centered pt-6 is-underlined has-text-weight-bold">PROJECTS</h1>
          <div className="container pb-6">
            <div class="tabs is-centered is-medium">
              <ul>
                <li class="is-active"><a>All</a></li>
                <li><a>NodeJS/Javascript</a></li>
                <li><a>Ruby/Rails</a></li>
                <li><a>React</a></li>
                <li><a>Angular</a></li>
              </ul>
            </div>
          
            <div class="tile is-ancestor">
              <div class="tile is-parent">
                <article class="tile is-child box image is-fullwidth" id={parentTile}> 
                  
                </article>
              </div>

              <div class="tile is-parent">
                <article class="tile is-child box">
                  <p class="title">Two</p>
                  <p class="subtitle">Subtitle</p>
                </article>
              </div>

              <div class="tile is-parent">
                <article class="tile is-child box">
                  <p class="title">Three</p>
                  <p class="subtitle">Subtitle</p>
                </article>
              </div>
            </div>

            <div class="tile is-ancestor">
              <div class="tile is-parent">
                <article class="tile is-child box">
                  <p class="title">One</p>
                  <p class="subtitle">Subtitle</p>
                </article>
              </div>

              <div class="tile is-parent">
                <article class="tile is-child box">
                  <p class="title">Two</p>
                  <p class="subtitle">Subtitle</p>
                </article>
              </div>
              
              <div class="tile is-parent">
                <article class="tile is-child box">
                  <p class="title">Three</p>
                  <p class="subtitle">Subtitle</p>
                </article>
              </div>
            
            

            </div>
            
          </div>
        </div>
        
        
      </div>
    </>
  )
}

export default PortfolioPage