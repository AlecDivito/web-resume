import React from 'react';
import Proptypes from 'prop-types';
import './paragraph.scss';

const Paragraph = ({ children }) => <p className="pg">{children}</p>;

Paragraph.prototype = {
    children: Proptypes.string.isRequired,
}

export default Paragraph;