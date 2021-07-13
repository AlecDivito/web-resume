import React from "react";
import PropTypes from 'prop-types';
import "./tag.scss"

const Tag = ({ text, dropshadow, flat }) => (
    <div className={`tag
        ${dropshadow ? "tag--shadow" : ""}
        ${flat ? "tag--flat" : ""}
    `}>
        {text}
    </div>
)


Tag.propTypes = {
    text: PropTypes.string.isRequired,
    dropshadow: PropTypes.bool,
    flat: PropTypes.bool,
}

export default Tag;