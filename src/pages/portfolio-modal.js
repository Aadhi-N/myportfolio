import React, { useState, useEffect } from 'react';
import { Link } from 'gatsby';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons';
import {modalSubtitle, externalLinkIcon, githubIcon, linkText} from "../styles/custom.module.scss";

import github_icon from "../images/g64.png";

const PortfolioModal = ({activeModal, toggleModal, modalDetails}) => {
   
    /* Callback to parent component to update state of active modal tab */
    function handleToggleChange(e) {
        toggleModal(e)
    };
 
  return (
    <div className={"modal" + (activeModal ? " is-active" : " ")}>
        <div className="modal-background"></div>
          <div className="modal-content">
            <p className="image">
              <img src={modalDetails.icon} alt=""/>
            </p>
            <div className="modal-card-body p-5">
              <p className="modal-card-title pb-3">{modalDetails.name}</p>
              <p className="modal-card-subtitle pb-3" id={modalSubtitle}>{modalDetails.title}</p>
              <p className="py-5">{modalDetails.desc} </p>

              <footer className="card-footer">
                <a href="" className="card-footer-item">
                  <FontAwesomeIcon icon={faExternalLinkAlt} size="2x" id={externalLinkIcon}/>
                  <span id={linkText}>
                    VIEW SITE
                  </span>
                </a>
                <a href="" className="card-footer-item">
                <img src={github_icon} id={githubIcon}/>
                  <span id={linkText}>
                    GITHUB
                  </span>
                </a>
              </footer>
            </div>
          </div>
        <button className="modal-close is-large" aria-label="close" onClick={handleToggleChange}></button>
    </div>
  );
};

export default PortfolioModal;