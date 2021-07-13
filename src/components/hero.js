import React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby";
import Tag from "./tag";
import HeroCurve from "../assets/hero.svg";
import "./hero.scss";

const Hero = ({ title, className, titleIcon, subTitle, tags, readMoreLink, readMoreText, date, children }) => (
    <section className={`hero ${className ?? ""}`}>
        <div className="hero--container common--max-width">
            {children ?
                <div className="hero--z-index hero--children" style={{ width: 270 }}>
                    {children}
                </div>
                : null}
            <div className={`${children ? "" : "hero--p0"} hero--z-index hero--content`}>
                <h1 className="hero__title">
                    {titleIcon}
                    {title}
                </h1>
                <p className="hero__description">{subTitle}</p>
                <div className="hero--flex">
                    <ul className="hero__list">
                        {tags.map((t) => <li key={t} className="hero__list__item"><Tag text={t} flat={true} /></li>)}
                    </ul>
                    {(readMoreLink && readMoreText) ? <Link className="hero__link" to={readMoreLink}>{readMoreText}</Link> : null}
                    {(date) ? <p className="hero__date">Published: {date}</p> : null}
                </div>
            </div>
        </div>
        <div className="hero__curve">
            <HeroCurve />
        </div>
    </section>
);

Hero.prototype = {
    title: PropTypes.string.isRequired,
    className: PropTypes.string,
    titleIcon: PropTypes.node,
    subTitle: PropTypes.string.isRequired,
    tags: PropTypes.arrayOf(PropTypes.string).isRequired,
    readMoreLink: PropTypes.string,
    readMoreText: PropTypes.string,
    date: PropTypes.string.isRequired,
    children: PropTypes.node
}

export default Hero;