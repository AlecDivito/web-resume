import React from 'react';
import PropTypes from "prop-types"
import './box.scss'

const Box = ({ children, className }) => (
    <div className={`box ${className ? className : null}`}>
        {children}
    </div>
)

Box.prototype = {
    className: PropTypes.string,
    children: PropTypes.node.isRequired
}

export default Box;