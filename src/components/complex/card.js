import React from 'react';
import Proptypes from 'prop-types';
import { Link } from 'gatsby';
import Tag from '../tag';
import StatusDot from '../statusDot';
import './card.scss';
import Title from '../simple/title';
import Widget from '../widget';

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
        {/* <div className="card__content__header">
                <Title variant="h3">{title}</Title>
                <StatusDot className="card__content__header--status" status={status} />
                <h5>{status}</h5>
            </div>
            <p>{description}</p>
            <div className="card__content__tags">
                {tags.map((tag, i) => <Tag text={tag} key={i} />)}
            </div> */}
        {/* <div className="card__content__footer">
                <div className="card__content__footer__links">
                    {(site)
                        ? <a href={site} target="_blank" rel="noopener noreferrer">
                            <img className="card__content__footer__links__link social--link--invert" alt="Site Url for title" src="/svgs/link.svg" />
                        </a>
                        : null
                    }
                    {(github)
                        ? <a href={github} target="_blank" rel="noopener noreferrer">
                            <img className="card__content__footer__links__link social--link--invert" alt="Github Url for title" src="/svgs/github-square.svg" />
                        </a>
                        : null
                    }
                </div>
            </div> */}
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