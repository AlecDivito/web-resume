import React from "react";
import PropTypes from "prop-types"
import linkIcon from "../images/link.svg";
import githubIcon from "../images/github-square.svg";
import linkedinIcon from "../images/linkedin-square.svg";


const SocialFooter = ({ github, linkedin, resumePdf, email }) => (
  <div className="footer--social">
    <a href={`mailto:${email}`} className="footer--social__email">
      <span>Let's Talk</span>
      <span>{email}</span>
    </a>
    <a href={resumePdf} className="footer--social__icon">
      <img
        className="footer--social__icon__img"
        alt="Resume Link"
        src={linkIcon}
      />
    </a>
    <a href={github} className="footer--social__icon">
      <img
        className="footer--social__icon__img"
        alt="Github link"
        src={githubIcon}
      />
    </a>
    <a href={linkedin} className="footer--social__icon">
      <img
        className="footer--social__icon__img"
        alt="linkedin link"
        src={linkedinIcon}
      />
    </a>
  </div>
)

SocialFooter.propTypes = {
    github: PropTypes.string.isRequired,
    linkedin: PropTypes.string.isRequired,
    resumePdf: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
}

export default SocialFooter;

