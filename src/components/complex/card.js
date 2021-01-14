import React from 'react';
import Proptypes from 'prop-types';
import { Link } from 'gatsby';
import Widget from '../widget';
import './card.scss';
import { VerticalList } from '../simple/list';

const Card = ({ image, title, description, status, tags, posts, site, github }) => (
    <div className="card">
        {/* {(readMore)
            ? <Link to={readMore}>{image}</Link>
            : <span className="card__image--no-link">{image}</span>
        } */}
        {image}
        <Widget
            title={title}
            status={status}
            description={description}
            tags={tags}
        />
        <VerticalList>
            {posts.map(p =>
                <li className="card__post">
                    <Link to={p.content} className="list list--h list--sb list--aic card__post__link">
                        <span className="card__post__title">{p.title}</span>
                        <span>{p.year}-{p.month}-{p.day}</span>
                    </Link>
                </li>
            )}
        </VerticalList>
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
    posts: Proptypes.arrayOf(Proptypes.shape({
        title: Proptypes.string,
        content: Proptypes.string,
        year: Proptypes.number,
        month: Proptypes.number,
        day: Proptypes.number,
    }))
}

export default Card;