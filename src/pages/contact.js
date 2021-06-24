import * as React from 'react'
import { Link } from 'gatsby';
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
          <div class="columns is-gapless is-multiline">
            <div class="column">
              <a href="mailto:aadhilah.nizamdeen@gmail.com?subject=Contacting you from your portfolio page!">
                <figure className="image is-128x128">
                  <FontAwesomeIcon icon={faEnvelopeSquare} size="6x" id={iconEmail}/>
                </figure>
              </a>
            </div>
            <div class="column">
                <figure className="image is-128x128">
                  <a href="https://linkedin.com/aadhilahnizamdeen">
                  <img className="is-squared" id={iconLinkedin} src={linkedinIcon}/>
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