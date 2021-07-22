import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons';
import {modalSubtitle, modalIcon, externalLinkIcon, githubIcon, linkText} from "../styles/custom.module.scss";

import github_icon from "../../static/images/github_icon.png";

const PortfolioModal = ({activeModal, toggleModal, modalDetails}) => {

  /* Callback to parent component to update state of active modal tab */
  function handleToggleChange(e) {
      toggleModal(e)
  };
 
  return (
    <>
    {modalDetails ? 
      <div className={"modal" + (activeModal ? " is-active" : " ")}>
          <div className="modal-background"></div>
            <div className="modal-content">
              <p className="image">
                <img id={modalIcon} src={modalDetails.icon} alt="screenshot of project"/>
              </p>
              <div className="modal-card-body p-5">
                <p className="modal-card-title pb-3">{modalDetails.name}</p>
                <p className="modal-card-subtitle pb-3" id={modalSubtitle}>{modalDetails.title}</p>
                <p className="py-5">{modalDetails.desc} </p>

                <footer className="card-footer">
                  {modalDetails.website ? 
                    <a href={modalDetails.website} className="card-footer-item">
                      <FontAwesomeIcon icon={faExternalLinkAlt} size="2x" id={externalLinkIcon}/>
                      <span id={linkText}>
                        VIEW SITE
                      </span>
                    </a>
                  : null
                  } 
                  <a href={modalDetails.github} className="card-footer-item">
                  <img src={github_icon} id={githubIcon} alt="github icon"/>
                    <span id={linkText}>
                      GITHUB
                    </span>
                  </a>
                </footer>
              </div>
            </div>
          <button className="modal-close is-large" aria-label="close" onClick={handleToggleChange}></button>
      </div>
    : null
    }
    </>
  );
};

export default PortfolioModal;