import React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby";
import Tag from "./tag";
import HeroCurve from "../assets/hero.svg";
import "./hero.scss";

const Hero = ({ title, titleIcon, subTitle, tags, readMoreLink, readMoreText, date, children }) => (
    <div className="hero">
        <div className="hero--container common--max-width">
            {children ?
                <div className="hero--z-index" style={{ width: 220 }}>
                    {children}
                </div>
                : null}
            <div className="hero--z-index hero--content">
                <h2 className="hero__title">
                    {titleIcon}
                    {title}
                </h2>
                <p className="hero__description">{subTitle}</p>
                <div>
                    <div className="hero--flex">
                        <ul className="hero__list">
                            {tags.map((t) => <li key={t} className="hero__list__item"><Tag text={t} /></li>)}
                        </ul>
                        {(readMoreLink && readMoreText) ? <Link className="hero__link" to={readMoreLink}>{readMoreText}</Link> : null}
                    </div>
                    {(date) ? <p>Last Updated: {date}</p> : null}
                </div>
            </div>
        </div>
        <div className="hero__curve">
            <HeroCurve />
        </div>
    </div>
);

Hero.prototype = {
    title: PropTypes.string.isRequired,
    titleIcon: PropTypes.node,
    subTitle: PropTypes.string.isRequired,
    tags: PropTypes.arrayOf(PropTypes.string).isRequired,
    readMoreLink: PropTypes.string,
    readMoreText: PropTypes.string,
    date: PropTypes.string.isRequired,
    children: PropTypes.node
}

export default Hero;