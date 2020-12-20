import React from "react"
import PropTypes from "prop-types"
import "./hero.scss";
import { Link } from "gatsby";
import Tag from "./tag";

const Hero = ({ title, titleIcon, description, tags, readMoreLink, date, children }) => (
    <div className="hero">
        {children}
        <div className="hero--flex">
            <h2 className="hero__title">
                {titleIcon}
                {title}
            </h2>
            <p className="hero__description">{description}</p>
            <div>
                <div>
                    <ul className="hero__list">
                        {tags.map((t) => <li className="hero__list__item"><Tag text={t} /></li>)}
                    </ul>
                    {(readMoreLink) ? <Link to={readMoreLink}>Continue Reading</Link> : null}
                </div>
                {(date) ? <p>Last Updated: {date}</p> : null}
            </div>
        </div>
    </div>
);

Hero.prototype = {
    title: PropTypes.string.isRequired,
    titleIcon: PropTypes.node,
    description: PropTypes.string.isRequired,
    tags: PropTypes.arrayOf(PropTypes.string),
    readMoreLink: PropTypes.string,
    date: PropTypes.string,
    children: PropTypes.node
}

export default Hero;