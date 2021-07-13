import React from 'react';
import PropTypes from 'prop-types';
import "./tagList.scss";

const TagList = ({ children, padding }) => (
    <ul className={`tags ${padding ? "tags--empty" : ""}`}>
        {children}
    </ul>
)

TagList.propTypes = {
    children: PropTypes.node.isRequired,
    padding: PropTypes.bool,
}

export default TagList;