import * as React from 'react'
import {aboutContainer, aboutContent, aboutTextColumn, aboutText, aboutSubtext, aboutPic, aboutSubtitle} from "../styles/custom.module.scss";
import profilePic from "../images/profile_pic.jpeg";

const AboutPage = () => {
  return (
    <div id="about">
      <div className="hero is-medium" id={aboutContainer}>
        <div className="hero body">
          <h1 className="title is-1 has-text-centered pt-6 pb-5 is-underlined has-text-weight-bold">ABOUT</h1>
          <div className="container" id={aboutContent}>
            <div className="columns p-5 mb-6">
              <div className="column is-one-fifth" id={aboutPic}>
                <figure className="image">
                  <img className="is-rounded" src={profilePic}/>
                </figure>
              </div>
              <div className="column is-three-quarters-desktop" id={aboutTextColumn}>
                <div className="title pb-3" id={aboutText}>
                  Hello! My name is Aadhilah, and I enjoy <span id={aboutSubtext}>web development</span>. 
                </div>
                <h4 className="subtitle is-4">
                <p id={aboutSubtitle}>The web has taken over the world. It's the present, and the future. It's already transforming how we will live tomorrow. And that's why I became a web developer. </p>
                <p id={aboutSubtitle}>Working in UX, program and project management in the financial industry, I became more and more in need of knowing how to use the tools to create experiences. I completed a full-stack coding bootcamp, and I'm more curious than ever in learning how to continue building technologies that shape our lives.</p>
                <p>Have a look at my projects. They still have a long way to go till reaching perfection, but it's a start!</p>
                </h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
};

export default AboutPage;