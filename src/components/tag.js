import React from "react";
import PropTypes from 'prop-types';
import "./tag.scss"

const Tag = ({ text }) => (
    <span className="tag">{text}</span>
)

Tag.propTypes = {
    text: PropTypes.string
}

export default Tag;