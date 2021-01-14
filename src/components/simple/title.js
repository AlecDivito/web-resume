import React from 'react';
import PropTypes from 'prop-types';
import "./title.scss";

const Title = ({ children, variant, invert, alignment, className }) => {
    let classes = "";
    if (className) {
        classes = `${classes} ${className}`
    }
    if (invert) {
        classes = `${classes} title--invert`
    }
    if (alignment) {
        classes = `${classes} ${alignment}`;
    }
    switch (variant) {
        case 'h1': return <h1 className={`title ${variant} ${classes}`}>{children}</h1>;
        case 'h2': return <h2 className={`title ${variant} ${classes}`}>{children}</h2>;
        case 'h3': return <h3 className={`title ${variant} ${classes}`}>{children}</h3>;
        case 'h4': return <h4 className={`title ${variant} ${classes}`}>{children}</h4>;
        case 'h5': return <h5 className={`title ${variant} ${classes}`}>{children}</h5>;
        case 'h6': return <h6 className={`title ${variant} ${classes}`}>{children}</h6>;
        default:
            return <h2 className={`title h2 ${classes}`}>{children}</h2>;
    }
}

Title.prototype = {
    children: PropTypes.node.isRequired,
    variant: PropTypes.string,
    className: PropTypes.string,
    invert: PropTypes.bool,
    alignment: PropTypes.string,
}

export default Title;