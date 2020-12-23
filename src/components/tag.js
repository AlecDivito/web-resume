import React from "react";
import PropTypes from 'prop-types';
import "./tag.scss"

const Tag = ({ text, dropshadow }) => (
    <span className={`tag ${dropshadow ? "tag--shadow" : ""}`}>
        {text}
    </span>
)


Tag.propTypes = {
    text: PropTypes.string.isRequired,
    dropshadow: PropTypes.bool,
}

export default Tag;