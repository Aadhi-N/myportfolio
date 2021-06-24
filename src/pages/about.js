import * as React from 'react'
import {aboutContainer, aboutContent, aboutText, aboutSubtext,} from "../styles/custom.module.scss";
import profilePic from "../images/profile_pic.jpeg";

const AboutPage = () => {
  return (
    <div id="about">
      <div className="hero is-medium" id={aboutContainer}>
        <div className="hero body">
          <h1 className="title is-1 has-text-centered pt-6 pb-5 is-underlined has-text-weight-bold">ABOUT</h1>
          <div className="container" id={aboutContent}>
            <div className="columns p-5 mb-6">
              <div className="column is-one-fifth">
                <figure className="image">
                  <img className="is-rounded" src={profilePic}/>
                </figure>
              </div>
              <div className="column is-four-fifths p-5 mx-6">
                <div className="title pb-4" id={aboutText}>
                  Hello! My name is Aadhilah, and I enjoy <span id={aboutSubtext}>web development</span>. 
                </div>
                <h4 className="subtitle is-5">
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. 

                </h4>
              </div>
              
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}

export default AboutPage;