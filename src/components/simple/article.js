import React from 'react';
import Proptypes from 'prop-types';
import './article.scss';

const Article = ({ children }) => (
    <article className="article">{children}</article>
);

Article.prototype = {
    children: Proptypes.node,
}

export default Article;