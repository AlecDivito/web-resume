import React from 'react';
import Proptypes from 'prop-types';
import Title from './simple/title';
import Tag from './tag';
import { Link } from 'gatsby';
import StatusDot from './statusDot';
import Paragraph from './simple/paragraph';
import TagList from './simple/tagList';
import './widget.scss';

const Wrapper = ({ boxed, readMore, children }) => {
    if (boxed && readMore) {
        return <div className={`widget ${boxed ? "widget--boxed" : ""}`}>
            <Link className="no-decoration" to={readMore}>
                {children}
            </Link>
        </div>
    } else {
        return <div className="widget">{children}</div>
    }
}

const Widget = ({ title, subTitle, description, tags, date, readMore, logo, status, boxed = false }) => (
    <Wrapper boxed={boxed} readMore={readMore}>
        <div className="widget__header">
            <div className="widget__title">
                {logo ? <span className="widget__title--logo">{logo}</span> : null}
                {(!readMore) ? <Title variant="h3">{title}</Title>
                    : <Link to={readMore}><Title className="widget__title--link" variant="h3">{title}</Title></Link>}
                {status ? <StatusDot className="widget__title--status" status={status} /> : null}
            </div>
            {(date) ? <span className="widget__header--date">{date}</span> : null}
        </div>
        {subTitle ? <Title className="widget__subTitle" variant="h6">{subTitle}</Title> : null}
        <TagList padding={boxed}>
            {!tags ? null : tags.slice(0, 3).map(t => <Tag key={t} text={t} flat={true} />)}
            {/* <Tag text={`${tags.length - 2}+`} dropshadow={true} /> */}
        </TagList>
        {(description) ? <Paragraph>{description}</Paragraph> : null}
        {(readMore && !boxed) ? <div className="widget__link"><Link to={readMore}>Continue Reading</Link></div> : null}
    </Wrapper>
);

Widget.prototype = {
    title: Proptypes.string.isRequired,
    subTitle: Proptypes.string,
    description: Proptypes.string.isRequired,
    tags: Proptypes.arrayOf(Proptypes.string),
    date: Proptypes.string,
    readMore: Proptypes.string,
    logo: Proptypes.node,
    status: Proptypes.string,
    boxed: Proptypes.bool,
}


export default Widget;