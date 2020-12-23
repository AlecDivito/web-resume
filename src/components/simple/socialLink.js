import React from 'react';
import PropTypes from 'prop-types';
import "./socialLink.scss";

const SocialLink = ({ image, link, alt, type, invert, className }) => (
    <a href={link} target="_blank" rel="noopener noreferrer" className={`social ${className ? className : ""}`}>
        <img className={invert ? "social--link--invert" : ""} src={image} alt={alt} />
        <span className={`social--link ${invert ? "social--link--invert" : ""}`}>{type}</span>
    </a>
);

SocialLink.prototype = {
    image: PropTypes.string.isRequired,
    link: PropTypes.string.isRequired,
    alt: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    invert: PropTypes.bool,
    className: PropTypes.string,
}

export default SocialLink;