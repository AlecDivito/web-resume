import React from 'react';
import Proptypes from 'prop-types';
import { Link } from 'gatsby';
import Widget from '../widget';
import './card.scss';

const Card = ({ image, title, description, status, tags, site, github, readMore }) => (
    <div className="card">
        {(readMore)
            ? <Link to={readMore}>{image}</Link>
            : <span className="card__image--no-link">{image}</span>
        }
        <Widget
            title={title}
            status={status}
            description={description}
            tags={tags}
            readMore={readMore}
        />
    </div>
)

Card.prototype = {
    image: Proptypes.node.isRequired,
    title: Proptypes.string.isRequired,
    description: Proptypes.string.isRequired,
    status: Proptypes.oneOf(['completed', 'active', 'archived', '']),
    tags: Proptypes.arrayOf(Proptypes.string),
    site: Proptypes.string,
    github: Proptypes.string,
    readMore: Proptypes.string
}

export default Card;