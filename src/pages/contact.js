import * as React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelopeSquare } from '@fortawesome/free-solid-svg-icons';
import {contactContainer, contactTitle, socialIcons, iconEmail, iconLinkedin, iconGithubContact, iconResume, contactIconDesc, contactIconDescLinkedin, contactIconDescResume, contactIconDescEmail, iconEmailA, test} from "../styles/custom.module.scss";

import linkedinIcon from "../../static/images/linkedin_icon.png";
import githubIcon from "../../static/images/github_contact_icon.png";
import resumeIcon from "../../static/images/resume_icon.png";
import resumePDF from "../../static/files/Resume.pdf";

const ContactPage = () => {
  return (
    <div id="contact">
     <section className="hero is-medium pb-6" id={contactContainer}>
      <div className="hero body">
        <h1 className="title is-1 has-text-centered pt-6 pb-5 is-underlined has-text-weight-bold" id={contactTitle}>CONTACT</h1>
        <div className="is-flex" id={socialIcons}>
          <div className="columns is-multiline py-4">
            <div className="column p-0 mx-6" id={test}>
              <figure className="image is-fullwidth">
                <a href="https://github.com/Aadhi-N">
                  <img className="is-squared" id={iconGithubContact} src={githubIcon} alt="github icon"/>
                </a>
              </figure>
              <div classname="column">
                <p className="is-size-5" id={contactIconDesc}>Github</p>
              </div>
            </div>
            <div classname="column mx-6" id={test} style={{"margin-right": "1rem"}}>
                <figure className="image is-fullwidth">
                  <a href="https://linkedin.com/in/aadhilahnizamdeen">
                  <img className="is-squared" id={iconLinkedin} src={linkedinIcon} alt="linkedin icon"/>
                   </a>
                </figure>
                <div classname="column">
                  <p className="is-size-5" id={contactIconDescLinkedin}>LinkedIn</p>
                </div>
            </div>
            <div classname="column mx-6" id={test}>
              <figure className="image is-fullwidth">
                <a href={resumePDF} target="_blank">
                <img className="is-squared" id={iconResume} src={resumeIcon} alt="resume icon"/>
                  </a>
              </figure>
              <div classname="column">
                <p className="is-size-5" id={contactIconDescResume}>Resume/CV</p>
              </div>
            </div>
            <div className="column p-0 mx-5" id={test}>
              <a href="mailto:aadhilah.nizamdeen@gmail.com?subject=Contacting you from your portfolio page!">
                <figure className="image" id={iconEmailA}>
                  <FontAwesomeIcon icon={faEnvelopeSquare} size="6x" id={iconEmail}/>
                </figure>
              </a>
              <div classname="column">
              <p className="is-size-5" id={contactIconDescEmail}>Email</p>
              </div>
            </div>
          </div>
        </div>
      </div>
     </section>
    </div>
  )
};

export default ContactPage;