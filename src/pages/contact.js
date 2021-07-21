import * as React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelopeSquare } from '@fortawesome/free-solid-svg-icons';
import {contactContainer, contactTitle, socialIcons, iconEmail, iconLinkedin} from "../styles/custom.module.scss";

import linkedinIcon from "../images/linkedin_icon.png";

const ContactPage = () => {
  return (
    <div id="contact">
     <section className="hero is-medium pb-6" id={contactContainer}>
      <div className="hero body">
        <h1 className="title is-1 has-text-centered pt-6 pb-5 is-underlined has-text-weight-bold" id={contactTitle}>CONTACT</h1>
        <h4 className="subtitle is-4 has-text-centered pb-5" id={contactTitle}>You can get in touch with me through LinkedIn or email.</h4>
        <div className="is-flex" id={socialIcons}>
          <div className="columns is-multiline">
            <div className="column">
              <a href="mailto:aadhilah.nizamdeen@gmail.com?subject=Contacting you from your portfolio page!">
                <figure className="image">
                  <FontAwesomeIcon icon={faEnvelopeSquare} size="6x" id={iconEmail}/>
                </figure>
              </a>
            </div>
            <div classname="column">
                <figure className="image is-fullwidth">
                  <a href="https://linkedin.com/in/aadhilahnizamdeen">
                  <img className="is-squared" id={iconLinkedin} src={linkedinIcon} alt="linkedin icon"/>
                   </a>
                </figure>
            </div>
          </div>
        </div>
      </div>
     </section>
    </div>
  )
}

export default ContactPage;