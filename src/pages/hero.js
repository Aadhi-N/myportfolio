import * as React from 'react';
import scrollTo from 'gatsby-plugin-smoothscroll';

import {heroContainer, heroTitle, heroSubtitle, name, heroText} from "../styles/custom.module.scss";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

const Hero = () => {
    return (
        <section className="hero is-fullheight" id="home" >
        <div className="hero-body" id={heroContainer}>
          <div className="container has-text-centered" id={heroText}>
            <p className="title is-size-1" id={heroTitle}>
              Hello, I'm <span id={name}>Aadhilah Nizamdeen</span>.
            </p>
            <p className="subtitle is-size-3" id={heroSubtitle}>
              I'm a full-stack web developer. 
            </p>     
            <div className="view-work p-5">
              <button className="button is-danger is-outlined is-medium" onClick={() => scrollTo('#portfolio')}>
                <span>View my work</span>
                <span className="icon is-medium">
                  <FontAwesomeIcon icon={faArrowRight} />
                </span>
              </button>
            </div>
          </div>
        </div>
      </section>
    )
};

export default Hero;