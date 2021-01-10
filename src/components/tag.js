import React from "react";
import PropTypes from 'prop-types';
import "./tag.scss"

const Tag = ({ text, dropshadow }) => (
    <div className={`tag ${dropshadow ? "tag--shadow" : ""}`}>
        {text}
    </div>
)


Tag.propTypes = {
    text: PropTypes.string.isRequired,
    dropshadow: PropTypes.bool,
}

export default Tag;