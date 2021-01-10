import React from 'react'
import Proptypes from 'prop-types';
import { Link } from 'gatsby';
import Title from './title';
import Paragraph from './paragraph';
import './linkedArticle.scss';

const LinkedArticle = ({ to, title, description }) => (
    <div className="la">
        <Link to={to}><Title variant="h5">{title}</Title></Link>
        <Paragraph>{description}</Paragraph>
    </div>
);

LinkedArticle.prototype = {
    to: Proptypes.string.isRequired,
    title: Proptypes.string.isRequired,
    description: Proptypes.string,
}

export default LinkedArticle;