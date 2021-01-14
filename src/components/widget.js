import React from 'react';
import Proptypes from 'prop-types';
import Title from './simple/title';
import Tag from './tag';
import { Link } from 'gatsby';
import './widget.scss';
import StatusDot from './statusDot';
import Paragraph from './simple/paragraph';

const Widget = ({ title, subTitle, description, tags, date, readMore, logo, status }) => (
    <div className="widget">
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
        <ul className="widget__tags">
            {!tags ? null : tags.slice(0, 3).map(t => <Tag key={t} text={t} dropshadow={true} />)}
            {/* <Tag text={`${tags.length - 2}+`} dropshadow={true} /> */}
        </ul>
        {(description) ? <Paragraph>{description}</Paragraph> : null}
        {(readMore) ? <div className="widget__link"><Link to={readMore}>Continue Reading</Link></div> : null}
    </div>
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
}

export default Widget;