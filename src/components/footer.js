import * as React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronCircleUp } from '@fortawesome/free-solid-svg-icons';

import "../styles/bulma-custom.scss";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="content has-text-centered">
        <span className="icon is-large">
          <FontAwesomeIcon icon={faChevronCircleUp} />
        </span>
        <p>
          <strong>Aadhilah Nizamdeen</strong>&copy;2021
        </p>
      </div>
    </footer>
  )
}

export default Footer;