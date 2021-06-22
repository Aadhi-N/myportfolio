import * as React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { faLifeRing } from '@fortawesome/free-solid-svg-icons';
import {contactContainer, contactTitle, socialIcons} from "../styles/custom.module.scss";
import emailIcon from "../images/v.png";
import linkedinIcon from "../images/d.png";

const ContactPage = () => {
  return (
    <>
     <section className="hero is-medium" id={contactContainer}>
      <div className="hero body">
        <h1 className="title is-1 has-text-centered pt-6 pb-5 is-underlined has-text-weight-bold" id={contactTitle}>CONTACT</h1>
        <h4 className="subtitle is-4 has-text-centered pb-5" id={contactTitle}>You can get in touch with me through LinkedIn or email.</h4>
        <div className="is-flex" id={socialIcons}>
          <figure className="image is-128x128">
            <img className="is-rounded" src={emailIcon}/>
          </figure>
          <figure className="image is-128x128">
            <img className="is-rounded" src={linkedinIcon}/>
          </figure>
        </div>
      </div>
     </section>
    </>
  )
}

export default ContactPage;