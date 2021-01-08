import React from 'react';
import Proptypes from 'prop-types';
import Title from './simple/title';
import Tag from './tag';
import { Link } from 'gatsby';
import './widget.scss';
import StatusDot from './statusDot';

const Widget = ({ title, subTitle, description, tags, date, readMore, logo, status }) => (
    <div className="widget">
        <div className="widget__header">
            <div className="widget__title">
                {logo ? logo : null}
                {(!readMore) ? <Title variant="h3">{title}</Title>
                    : <Link to={readMore}><Title className="widget__title--link" variant="h3">{title}</Title></Link>}
                {status ? <StatusDot status={status} /> : null}
            </div>
            {(date) ? <span className="widget__header--date">{date}</span> : null}
        </div>
        <Title className="widget__subTitle" variant="h6">{subTitle}</Title>
        <ul className="widget__tags">
            {!tags ? null : tags.slice(0, 3).map(t => <Tag key={t} text={t} dropshadow={true} />)}
            {/* <Tag text={`${tags.length - 2}+`} dropshadow={true} /> */}
        </ul>
        {(description) ? <p className="widget__description">{description}</p> : null}
        {(readMore) ? <Link className="widget__link" to={readMore}>Continue Reading</Link> : null}
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